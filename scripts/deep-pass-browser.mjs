// Local visual audit. No dependencies; screenshots/reports go to the OS temp folder.
import { spawn } from 'node:child_process'
import { mkdtemp, mkdir, readFile, writeFile, rm } from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'

const base = process.argv[2] || 'http://127.0.0.1:5175/hebamme-web/'
const phase = process.argv[3] || 'audit'
const profile = await mkdtemp(path.join(os.tmpdir(), 'hebamme-deep-browser-'))
const output = path.join(os.tmpdir(), `hebamme-astra-${phase}`)
await mkdir(output, { recursive: true })
const child = spawn('C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', [
  '--headless=new', '--hide-scrollbars', '--disable-gpu', '--no-first-run',
  '--remote-debugging-port=0', '--remote-allow-origins=*', `--user-data-dir=${profile}`, 'about:blank',
], { stdio: 'ignore' })
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms))
let port
for (let i = 0; i < 100 && !port; i++) {
  try { [port] = (await readFile(path.join(profile, 'DevToolsActivePort'), 'utf8')).split(/\r?\n/) }
  catch { await wait(50) }
}
if (!port) throw new Error('Browser did not start')
const targets = await fetch(`http://127.0.0.1:${port}/json/list`).then(r => r.json())
const socket = new WebSocket(targets.find(t => t.type === 'page').webSocketDebuggerUrl)
await new Promise((resolve, reject) => {
  socket.addEventListener('open', resolve, { once: true })
  socket.addEventListener('error', reject, { once: true })
})
let sequence = 0
const pending = new Map()
const errors = []
const failedRequests = []
socket.addEventListener('message', event => {
  const message = JSON.parse(event.data)
  if (message.method === 'Runtime.exceptionThrown') errors.push(message.params.exceptionDetails)
  if (message.method === 'Network.responseReceived' && message.params.response.status >= 400) {
    failedRequests.push({ url: message.params.response.url, status: message.params.response.status })
  }
  if (!pending.has(message.id)) return
  const { resolve, reject } = pending.get(message.id)
  pending.delete(message.id)
  message.error ? reject(new Error(message.error.message)) : resolve(message.result)
})
const send = (method, params = {}) => new Promise((resolve, reject) => {
  const id = ++sequence
  pending.set(id, { resolve, reject })
  socket.send(JSON.stringify({ id, method, params }))
})
const evaluate = async expression => {
  const r = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true })
  if (r.exceptionDetails) throw new Error(r.exceptionDetails.text)
  return r.result.value
}
const screenshot = async (name, clip) => {
  const result = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: true, ...(clip ? { clip: { ...clip, scale: 1 } } : {}) })
  await writeFile(path.join(output, `${name}.png`), Buffer.from(result.data, 'base64'))
}
await send('Page.enable')
await send('Runtime.enable')
await send('Network.enable')
const matrix = phase === 'baseline' ? [[1440,'de'],[390,'de'],[390,'ru']] : [[1440,'de'],[1024,'de'],[768,'de'],[390,'de'],[390,'ru'],[320,'de'],[320,'ru']]
const report = []
try {
  for (const [width, language] of matrix) {
    await send('Emulation.setDeviceMetricsOverride', { width, height: 1000, deviceScaleFactor: 1, mobile: false })
    await send('Page.navigate', { url: base })
    await wait(700)
    await evaluate(`document.querySelector('[data-lang-option="${language}"]').click(); document.fonts.ready.then(() => true)`)
    const height = await evaluate('document.documentElement.scrollHeight')
    for (let y = 0; y < height; y += 700) {
      await evaluate(`window.scrollTo({top:${y},behavior:'instant'})`)
      await wait(120)
    }
    await wait(900)
    const sections = await evaluate(`Array.from(document.querySelectorAll('main > section')).map(s => ({id:s.id || 'hero', y:s.getBoundingClientRect().top + scrollY, height:s.offsetHeight}))`)
    if (width === 1440 || width === 390) {
      for (const section of sections) {
        const selector = section.id === 'hero' ? '.hero-section' : `#${section.id}`
        await evaluate(`document.querySelector(${JSON.stringify(selector)}).scrollIntoView({behavior:'instant'})`)
        await wait(150)
        const rect = await evaluate(`(() => {const s=document.querySelector(${JSON.stringify(selector)}); return {y:s.getBoundingClientRect().top+scrollY,height:s.offsetHeight}})()`)
        await screenshot(`${width}-${language}-${section.id}`, {x:0, y:rect.y, width, height:Math.min(rect.height,2200)})
      }
    }
    const metrics = await evaluate(`({
      lang: document.documentElement.lang,
      width: innerWidth,
      overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
      images: [...document.querySelectorAll('main img')].map(i => ({src:i.getAttribute('src'),ok:i.complete && i.naturalWidth > 0})),
      anchors: [...document.querySelectorAll('a[href^="#"]')].filter(a => !document.querySelector(a.getAttribute('href'))).map(a=>a.outerHTML),
      text: document.querySelector('main').innerText,
      sections: [...document.querySelectorAll('main > section')].map(s=>({id:s.id,height:s.offsetHeight})),
      links: [...document.querySelectorAll('a[href^="tel:"], a[href*="wa.me"], .footer-sources a')].map(a=>({text:a.textContent.trim()||a.getAttribute('aria-label'),href:a.href})),
      clippedText: [...document.querySelectorAll('h1,h2,h3,p,summary')].filter(e=>e.scrollWidth>e.clientWidth+1).map(e=>({text:e.textContent.trim(),width:e.clientWidth,scroll:e.scrollWidth})),
      translated: [...document.querySelectorAll('[data-i18n]')].map(e=>({key:e.dataset.i18n,value:e.dataset.i18nAttr?e.getAttribute(e.dataset.i18nAttr):e.textContent.trim()}))
    })`)
    report.push({ width, language, ...metrics })
  }
  await writeFile(path.join(output,'report.json'), JSON.stringify({report,errors,failedRequests},null,2))
  console.log(JSON.stringify({output, report:report.map(({text,links,translated,...r})=>r),errors,failedRequests},null,2))
} finally {
  socket.close()
  child.kill()
  await wait(500)
  const resolved = path.resolve(profile)
  if (resolved.startsWith(path.resolve(os.tmpdir()) + path.sep) && path.basename(resolved).startsWith('hebamme-deep-browser-')) {
    await rm(resolved, { recursive:true,force:true,maxRetries:5,retryDelay:200 }).catch(()=>{})
  }
}
