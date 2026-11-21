// Optional local preview screenshots; requires the Vite server on port 5176.
import { spawn } from 'node:child_process'
import { mkdtemp, mkdir, readFile, writeFile } from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

// Keep the earlier body-only screenshots and place the new comparisons separately.
const folder = path.join(path.dirname(fileURLToPath(import.meta.url)), 'screenshots-full-v2')
await mkdir(folder, { recursive: true })
const profile = await mkdtemp(path.join(os.tmpdir(), 'hebamme-background-preview-'))
const browser = spawn(process.env.BROWSER_PATH || 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', [
  '--headless=new', '--hide-scrollbars', '--disable-gpu', '--no-first-run',
  '--remote-debugging-port=0', '--remote-allow-origins=*', `--user-data-dir=${profile}`, 'about:blank',
], { stdio: 'ignore' })
const wait = ms => new Promise(resolve => setTimeout(resolve, ms))
try {
  let port
  for (let i = 0; i < 100 && !port; i++) {
    try { [port] = (await readFile(path.join(profile, 'DevToolsActivePort'), 'utf8')).split(/\r?\n/) }
    catch { await wait(50) }
  }
  if (!port) throw new Error('Browser konnte nicht gestartet werden; ggf. BROWSER_PATH setzen.')
  const targets = await fetch(`http://127.0.0.1:${port}/json/list`).then(response => response.json())
  const socket = new WebSocket(targets.find(target => target.type === 'page').webSocketDebuggerUrl)
  await new Promise((resolve, reject) => {
    socket.addEventListener('open', resolve, { once: true })
    socket.addEventListener('error', reject, { once: true })
  })
  let nextId = 0
  const pending = new Map()
  socket.addEventListener('message', event => {
    const message = JSON.parse(event.data)
    if (!pending.has(message.id)) return
    const { resolve, reject } = pending.get(message.id)
    pending.delete(message.id)
    message.error ? reject(new Error(message.error.message)) : resolve(message.result)
  })
  const send = (method, params = {}) => new Promise((resolve, reject) => {
    const id = ++nextId
    pending.set(id, { resolve, reject })
    socket.send(JSON.stringify({ id, method, params }))
  })
  await send('Page.enable')
  await send('Runtime.enable')
  for (const [width, height] of [[1920, 1080], [390, 844]]) {
    let baseline
    await send('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: 1, mobile: width < 720 })
    await send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: 'reduce' }] })
    for (const variant of ['original', 'a', 'b', 'c', 'd']) {
      await send('Page.navigate', { url: `http://127.0.0.1:5176/preview/background-compare.html?variant=${variant}&capture=1` })
      await wait(1600)
      const result = await send('Runtime.evaluate', { expression: `(() => { const f = document.querySelector('#site'); const d = f?.contentDocument; return d?.body ? {title:d.title, background:getComputedStyle(d.body).backgroundImage, color:getComputedStyle(d.body).backgroundColor, ready:d.readyState} : null })()`, returnByValue: true })
      if (!result.result.value || result.result.value.ready !== 'complete') throw new Error(`Vorschau ${variant} ist nicht geladen.`)
      const page = await send('Runtime.evaluate', { expression: `(() => { const d=document.querySelector('#site').contentDocument; return {text:d.querySelector('main').innerText, layout:[...d.querySelectorAll('main > section')].map(e=>[e.id,e.offsetWidth,e.offsetHeight]), contact:getComputedStyle(d.querySelector('.contact-section')).backgroundColor, rose:getComputedStyle(d.querySelector('.marina-service')).backgroundColor, button:getComputedStyle(d.querySelector('.hero-actions .btn--primary')).backgroundColor} })()`, returnByValue: true })
      if (!baseline) baseline = page.result.value
      else if (JSON.stringify(page.result.value) !== JSON.stringify(baseline)) throw new Error(`Inhalt, Layout oder geschützte Flächen verändert: ${width}/${variant}`)
      for (const [label, selector] of [['hero','.hero-section'], ['leistungen','#hebammenhilfe'], ['anfragen','#leistungen'], ['vorstellung','#vorstellung'], ['bewertung','#bewertungen'], ['wissen','#wissen'], ['kontakt','#kontakt']]) {
        await send('Runtime.evaluate', { expression: `document.querySelector('#site').contentDocument.querySelector('${selector}').scrollIntoView({block:'start',behavior:'instant'})` })
        await wait(350)
        const screenshot = await send('Page.captureScreenshot', { format: 'png', fromSurface: true })
        const target = path.join(folder, `${width}-${label}-${variant}.png`)
        await writeFile(target, Buffer.from(screenshot.data, 'base64'))
      }
      console.log(`${width}/${variant}: Inhalte, Layout und sieben Ansichten geprüft`)
    }
  }
  for (const variant of ['original', 'a', 'b', 'c', 'd']) {
    await send('Runtime.evaluate', { expression: `document.querySelector('[data-variant="${variant}"]').click()` })
    await wait(150)
    const check = await send('Runtime.evaluate', {
      expression: `(() => { const d=document.querySelector('#site').contentDocument; const body=d.defaultView.getComputedStyle(d.body); const hero=d.defaultView.getComputedStyle(d.querySelector('.hero-section')); return {selected:document.querySelector('[data-variant="${variant}"]').getAttribute('aria-pressed'),bodyColor:body.backgroundColor,bodyImage:body.backgroundImage,hero:hero.backgroundColor,heroImage:hero.backgroundImage} })()`,
      returnByValue: true,
    })
    const state = check.result.value
    const solidColors = { original: 'rgb(255, 253, 249)', a: 'rgb(250, 247, 245)', c: 'rgb(248, 244, 237)', d: 'rgb(245, 246, 240)' }
    const validBackground = variant === 'b' ? state.bodyImage.startsWith('linear-gradient(')
      : state.bodyColor === solidColors[variant] && state.bodyImage === 'none'
    const validHero = variant === 'b' ? state.heroImage.startsWith('linear-gradient(')
      : state.hero === (variant === 'original' ? 'rgb(245, 239, 231)' : solidColors[variant]) && state.heroImage === 'none'
    if (state.selected !== 'true' || !validBackground || !validHero) throw new Error(`Umschaltung fehlerhaft: ${variant} ${JSON.stringify(state)}`)
    console.log(`Umschaltung ${variant}: OK`)
  }
  const collapse = await send('Runtime.evaluate', { expression: `(() => {const toggle=document.querySelector('#preview-toggle'),options=document.querySelector('#preview-options');toggle.click();const closed=options.hidden&&toggle.getAttribute('aria-expanded')==='false';toggle.click();return closed&&!options.hidden&&toggle.getAttribute('aria-expanded')==='true'})()`, returnByValue: true })
  if (!collapse.result.value) throw new Error('Vorschau-Bedienleiste lässt sich nicht korrekt einklappen.')
  console.log('Bedienleiste: Ein- und Ausklappen OK')
  // Conservative WCAG contrast check: each existing small-text color against
  // every solid background and gradient stop introduced by this preview.
  const luminance = hex => {
    const values = hex.match(/[\da-f]{2}/gi).map(value => parseInt(value, 16) / 255)
      .map(value => value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4)
    return values[0] * .2126 + values[1] * .7152 + values[2] * .0722
  }
  let minimum = Infinity
  for (const ink of ['2e2825','3b312c','6d625c','625751','824a3c']) for (const background of ['faf7f5','fdf9f7','f7efeb','f9f2ef','f7f0ec','f8f4ed','f5eee5','f1e9de','f5f6f0','f0f2ea','edf0e7']) {
    const ratio = (luminance(background) + .05) / (luminance(ink) + .05)
    minimum = Math.min(minimum, ratio)
    if (ratio < 4.5) throw new Error(`Kontrast unter 4,5:1: #${ink} auf #${background} (${ratio.toFixed(2)})`)
  }
  console.log(`Kontrast bestehender Textfarben gegen alle neuen Flächen und Verlaufsstopps: mindestens ${minimum.toFixed(2)}:1`)
  socket.close()
} finally {
  browser.kill()
}
