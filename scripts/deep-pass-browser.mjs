// Windows/Edge regression QA (Node 22+), no extra dependencies.
// npm run build
// npm run preview -- --host 127.0.0.1 --port 4175 --strictPort
// node scripts/deep-pass-browser.mjs [baseUrl] [final|interaction|final-sticky|final-implementation|native-reviews|marina-services|navigation|audit|baseline] [optional case]
// Screenshots/reports stay in OS TEMP; BROWSER_PATH optionally selects another Chromium binary.
import { spawn } from 'node:child_process'
import { mkdtemp, mkdir, readFile, writeFile, rm } from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'
import vm from 'node:vm'

const base = process.argv[2] || 'http://127.0.0.1:4175/hebamme-web/'
const phase = process.argv[3] || 'final'
const implementation = ['final-sticky', 'final-implementation'].includes(phase)
const nativeReviews = phase === 'native-reviews'
const marinaServices = phase === 'marina-services'
const inquiryLegal = phase === 'inquiry-legal'
const personalProfile = phase === 'personal-profile'
const headerContact = phase === 'header-contact'
const navigation = phase === 'navigation'
const targeted = ['refinement-before', 'refinement', 'end-user-audit'].includes(phase)
const verify = phase === 'final' || phase === 'interaction'
const profile = await mkdtemp(path.join(os.tmpdir(), 'hebamme-deep-browser-'))
const output = path.join(os.tmpdir(), `hebamme-astra-${phase}`)
await mkdir(output, { recursive: true })
const child = spawn(process.env.BROWSER_PATH || 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', [
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
const requests = []
const requestUrls = new Map()
socket.addEventListener('message', event => {
  const message = JSON.parse(event.data)
  if (message.method === 'Runtime.exceptionThrown') errors.push(message.params.exceptionDetails)
  if (message.method === 'Runtime.consoleAPICalled' && message.params.type === 'error') errors.push(message.params)
  if (message.method === 'Network.requestWillBeSent') {
    requests.push(message.params.request.url)
    requestUrls.set(message.params.requestId, message.params.request.url)
  }
  if (message.method === 'Network.loadingFailed' && !message.params.canceled) {
    failedRequests.push({ url: requestUrls.get(message.params.requestId) || '', error: message.params.errorText })
  }
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
  const result = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: Boolean(clip), ...(clip ? { clip: { ...clip, scale: 1 } } : {}) })
  await writeFile(path.join(output, `${name}.png`), Buffer.from(result.data, 'base64'))
}
await send('Page.enable')
await send('Runtime.enable')
await send('Network.enable')
const fullMatrix = implementation || nativeReviews || marinaServices || inquiryLegal || personalProfile || headerContact || navigation ? [] : phase === 'baseline' ? [[1440,'de'],[390,'de'],[390,'ru']]
  : phase === 'interaction' || targeted ? [[1440,'de'],[390,'de'],[390,'ru'],[320,'de'],[320,'ru']]
  : [[1440,'de'],[1024,'de'],[768,'de'],[390,'de'],[390,'ru'],[320,'de'],[320,'ru']]
const matrix = process.argv[4] ? fullMatrix.filter(([width,language])=>`${width}/${language}`===process.argv[4]) : fullMatrix
if (!matrix.length && !implementation && !nativeReviews && !marinaServices && !inquiryLegal && !personalProfile && !headerContact && !navigation) throw new Error('Unknown viewport/language case')
const report = []
const interactions = []
const source = await readFile(new URL('../src/main.js', import.meta.url), 'utf8')
const translations = vm.runInNewContext(source.slice(source.indexOf('const translations ='), source.indexOf('const menuToggle =')) + '\ntranslations')
const press = async (key, code, virtual, modifiers = 0) => {
  // Native controls need the character event as well as keydown (custom handlers do not).
  const text = key === 'Enter' ? '\r' : key === ' ' ? ' ' : undefined
  await send('Input.dispatchKeyEvent', {type:'keyDown',key,code,windowsVirtualKeyCode:virtual,modifiers,...(text ? {text,unmodifiedText:text} : {})})
  await send('Input.dispatchKeyEvent', {type:'keyUp',key,code,windowsVirtualKeyCode:virtual,modifiers})
}
const click = async selector => {
  const point = await evaluate(`(() => {const e=document.querySelector(${JSON.stringify(selector)}); e.scrollIntoView({block:'center',behavior:'instant'}); const r=e.getBoundingClientRect(); return {x:r.x+r.width/2,y:r.y+r.height/2}})()`)
  await send('Input.dispatchMouseEvent', {type:'mousePressed',button:'left',clickCount:1,...point})
  await send('Input.dispatchMouseEvent', {type:'mouseReleased',button:'left',clickCount:1,...point})
  await wait(200)
}
const assert = (condition, name) => {
  interactions.push({name,pass:Boolean(condition)})
  if (!condition) console.error(`FAILED: ${name}`)
}
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
    // Visit lazy-loaded images, including cards initially outside the horizontal viewport.
    await evaluate(`(async () => {
      for (const img of [...document.querySelectorAll('main img')].filter(i=>new URL(i.src).origin===location.origin)) {
        img.scrollIntoView({block:'center',inline:'center',behavior:'instant'});
        if (!img.complete) await new Promise(resolve=>{
          const timer=setTimeout(resolve,5000);
          const done=()=>{clearTimeout(timer);resolve()};
          img.addEventListener('load',done,{once:true}); img.addEventListener('error',done,{once:true});
        });
      }
      document.querySelector('[data-services-track]').scrollTo({left:0,behavior:'instant'});
    })()`)
    const sections = await evaluate(`Array.from(document.querySelectorAll('main > section')).map(s => ({id:s.id || 'hero', y:s.getBoundingClientRect().top + scrollY, height:s.offsetHeight}))`)
    if (verify || targeted || width === 1440 || width === 390) {
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
      text: [...document.querySelectorAll('main > section:not(#bewertungen)')].map(s=>s.innerText).join(' '),
      sections: [...document.querySelectorAll('main > section')].map(s=>({id:s.id,height:s.offsetHeight})),
      links: [...document.querySelectorAll('a[href^="tel:"], a[href*="wa.me"], .footer-sources a')].map(a=>({text:a.textContent.trim()||a.getAttribute('aria-label'),href:a.href})),
      clippedText: [...document.querySelectorAll('h1,h2,h3,p,summary')].filter(e=>e.scrollWidth>e.clientWidth+1).map(e=>({text:e.textContent.trim(),width:e.clientWidth,scroll:e.scrollWidth})),
      translated: [...document.querySelectorAll('[data-i18n]')].map(e=>({key:e.dataset.i18n,value:e.dataset.i18nAttr?e.getAttribute(e.dataset.i18nAttr):e.textContent.trim()}))
    })`)
    const missingTranslations = metrics.translated.filter(item => {
      const expected = item.key.split('.').reduce((obj,key)=>obj?.[key],translations[language])
      return typeof expected !== 'string' || item.value !== expected
    })
    report.push({ width, language, ...metrics, missingTranslations })
    if (targeted) {
      assert(!metrics.overflow && !metrics.clippedText.length,`${width}/${language}: targeted layout fits`)
      assert(!missingTranslations.length,`${width}/${language}: targeted translations match`)
    }
    if (verify) {
      assert(!metrics.overflow && !metrics.clippedText.length, `${width}/${language}: no overflow or clipped text`)
      assert(!missingTranslations.length, `${width}/${language}: translations match`)
      assert(metrics.images.filter(i=>!i.src.startsWith('http')).every(i=>i.ok), `${width}/${language}: local images`)
      assert(!metrics.anchors.length, `${width}/${language}: anchors`)
      assert(metrics.links.filter(l=>l.href.startsWith('tel:')).every(l=>l.href===({'112':'tel:112','116117':'tel:116117'}[l.text] || 'tel:+4917623488396')) && metrics.links.filter(l=>l.href.includes('wa.me')).every(l=>l.href==='https://wa.me/4917623488396'),`${width}/${language}: telephone and WhatsApp targets`)
      if (phase === 'interaction') {
        assert(await evaluate(`(() => {
          const controls=[...document.querySelectorAll('.btn, .lang-switch__button, .menu-toggle, .services-controls button, .faq-list summary, .hero-inquiry-link, .contact-direct-phone, .desktop-nav a')].filter(e=>e.getClientRects().length && getComputedStyle(e).visibility!=='hidden');
          return controls.every(e=>{const r=e.getBoundingClientRect();return r.width>=44 && r.height>=44});
        })()`),`${width}/${language}: interaction targets at least 44px`)
        assert(await evaluate(`[...document.querySelectorAll('.btn')].filter(e=>e.getClientRects().length && getComputedStyle(e).visibility!=='hidden').every(e=>{const label=e.querySelector('.btn__label').getBoundingClientRect(),icon=e.querySelector('.btn__icon').getBoundingClientRect();return label.right<icon.left && label.width>0 && icon.width>=30})`),`${width}/${language}: button labels and icons fit`)
        assert(await evaluate(`document.querySelectorAll('.marina-service-number').length===5 && document.querySelectorAll('.service-card__number').length===4 && [...document.querySelectorAll('.marina-service-number,.service-card__number')].every(e=>getComputedStyle(e).fontFamily.includes('Playfair') && e.scrollWidth<=e.clientWidth+1)`),`${width}/${language}: five service and four inquiry numbers fit`)
        await evaluate(`window.scrollTo({top:0,behavior:'instant'});document.querySelector('.hero-actions .btn').focus()`)
        await press('Tab','Tab',9)
        assert(await evaluate(`document.activeElement.matches('.hero-actions .btn--secondary:focus-visible') && getComputedStyle(document.activeElement).outlineStyle!=='none'`),`${width}/${language}: contact button keyboard focus`)
        await screenshot(`${width}-${language}-button-focus`)
      }
      await evaluate(`document.querySelector('.faq-list summary').scrollIntoView({block:'center',behavior:'instant'});document.querySelector('.faq-list summary').focus({preventScroll:true})`)
      await press('Enter','Enter',13)
      assert(await evaluate(`document.querySelector('.faq-list details').open && document.activeElement.matches(':focus-visible')`), `${width}/${language}: keyboard FAQ and visible focus`)
      if (phase === 'interaction') {
        await wait(250)
        assert(await evaluate(`getComputedStyle(document.querySelector('.faq-toggle'),'::after').transform==='matrix(1, 0, 0, 1, 0, 0)' && getComputedStyle(document.querySelector('.faq-answer')).opacity==='1'`),`${width}/${language}: open FAQ minus and visible answer`)
        await screenshot(`${width}-${language}-faq-focus`)
      }
      await press(' ','Space',32)
      assert(await evaluate(`!document.querySelector('.faq-list details').open`),`${width}/${language}: Space closes FAQ`)
      await evaluate(`document.querySelectorAll('.faq-list details').forEach(d=>d.open=true); document.querySelector('#wissen').scrollIntoView({behavior:'instant'})`)
      await wait(150)
      assert(await evaluate(`!Array.from(document.querySelectorAll('.faq-answer')).some(e=>e.scrollWidth>e.clientWidth+1)`),`${width}/${language}: expanded FAQ fits`)
      const faq = await evaluate(`(() => {const e=document.querySelector('#wissen');return {x:0,y:e.getBoundingClientRect().top+scrollY,width:innerWidth,height:e.offsetHeight}})()`)
      await screenshot(`${width}-${language}-faq-open`,faq)
      await evaluate(`document.querySelectorAll('.faq-list details').forEach(d=>d.open=false)`)
      if (width < 960) {
        await click('[data-menu-toggle]')
        assert(await evaluate(`document.querySelector('[data-menu-toggle]').getAttribute('aria-expanded')==='true' && document.querySelector('main').inert && document.activeElement.closest('.mobile-nav') !== null`),`${width}/${language}: menu opens and focus enters`)
        await screenshot(`${width}-${language}-menu`)
        await evaluate(`document.querySelector('.mobile-nav a:last-child').focus()`)
        await press('Tab','Tab',9)
        assert(await evaluate(`document.activeElement.matches('[data-menu-toggle]')`),`${width}/${language}: menu focus loops forward`)
        await press('Tab','Tab',9,8)
        assert(await evaluate(`document.activeElement.matches('.mobile-nav a:last-child')`),`${width}/${language}: menu focus loops backward`)
        await press('Escape','Escape',27)
        assert(await evaluate(`document.querySelector('[data-mobile-nav]').inert && !document.querySelector('main').inert && document.activeElement.matches('[data-menu-toggle]')`),`${width}/${language}: Escape closes and restores focus`)
        await click('[data-menu-toggle]')
        await click('.mobile-nav a[href="#wissen"]')
        await wait(800)
        assert(await evaluate(`document.activeElement.id==='wissen' && document.querySelector('[data-mobile-nav]').inert && document.querySelector('#wissen').getBoundingClientRect().top >= document.querySelector('.site-header').offsetHeight - 1`),`${width}/${language}: menu anchor focus and sticky offset`)
      }
      if (width < 720) {
        await evaluate(`document.querySelector('[data-services-track]').scrollIntoView({block:'center',behavior:'instant'});document.querySelector('[data-services-track]').focus()`)
        await press('ArrowRight','ArrowRight',39)
        await wait(650)
        assert(await evaluate(`document.querySelector('[data-services-position]').textContent.startsWith('02')`),`${width}/${language}: card keyboard right`)
        await press('End','End',35)
        await wait(650)
        assert(await evaluate(`document.querySelector('[data-services-position]').textContent.startsWith('04') && document.querySelector('[data-services-next]').disabled`),`${width}/${language}: card end and disabled next`)
        if (phase === 'interaction') {
          assert(await evaluate(`document.querySelector('.service-card.is-current')===document.querySelector('.service-card:last-child') && document.querySelector('[data-services-controls]').style.getPropertyValue('--services-progress')==='1'`),`${width}/${language}: last card emphasis and full progress`)
        }
        await screenshot(`${width}-${language}-card-04`)
        await press('Home','Home',36)
        await wait(650)
        assert(await evaluate(`document.querySelector('[data-services-position]').textContent.startsWith('01') && document.querySelector('[data-services-prev]').disabled`),`${width}/${language}: card home and disabled previous`)
        await click('[data-services-next]')
        await wait(650)
        assert(await evaluate(`document.querySelector('[data-services-position]').textContent.startsWith('02')`),`${width}/${language}: card pointer next`)
        if (phase === 'interaction') {
          assert(await evaluate(`document.querySelectorAll('.service-card.is-current').length===1 && document.querySelectorAll('.service-card')[1].classList.contains('is-current') && document.querySelector('[data-services-controls]').style.getPropertyValue('--services-progress')==='0.5'`),`${width}/${language}: second card emphasis and half progress`)
          await screenshot(`${width}-${language}-card-02`)
        }
        await click('[data-services-prev]')
        await wait(650)
        assert(await evaluate(`document.querySelector('[data-services-position]').textContent.startsWith('01')`),`${width}/${language}: card pointer previous`)
      }
    }
    console.log(`Checked ${width}/${language}`)
  }
  if (phase === 'interaction') {
    await send('Emulation.setDeviceMetricsOverride',{width:1440,height:1000,deviceScaleFactor:1,mobile:false})
    await send('Page.navigate',{url:base})
    await wait(800)
    await evaluate(`document.querySelector('[data-lang-option="de"]').click();window.scrollTo({top:0,behavior:'instant'})`)
    await screenshot('1440-de-header')
    const pointFor = async selector => {
      const readPoint = () => evaluate(`(() => {const e=document.querySelector(${JSON.stringify(selector)});e.scrollIntoView({block:'center',behavior:'instant'});const r=e.getBoundingClientRect();return {x:r.x+r.width/2,y:r.y+r.height/2,documentY:r.y+scrollY}})()`)
      let point = await readPoint()
      // Let existing reveals and asynchronously loaded reviews settle before aiming the pointer.
      await wait(800)
      let stable = 0
      for (let attempt=0;attempt<30;attempt++) {
        const nextPoint = await readPoint()
        stable = Math.abs(nextPoint.documentY-point.documentY)<1 ? stable+1 : 0
        point = nextPoint
        if (stable>=3) return {x:point.x,y:point.y}
        await wait(100)
      }
      throw new Error(`Pointer target did not settle: ${selector}`)
    }
    for (const [name,selector] of [['primary','.hero-actions .btn--primary'],['secondary','.hero-actions .btn--secondary']]) {
      await send('Input.dispatchMouseEvent',{type:'mouseMoved',x:1,y:1})
      await wait(250)
      const before = await evaluate(`getComputedStyle(document.querySelector(${JSON.stringify(selector)})).backgroundColor`)
      const point = await pointFor(selector)
      await send('Input.dispatchMouseEvent',{type:'mouseMoved',...point})
      await wait(250)
      assert(await evaluate(`document.querySelector(${JSON.stringify(selector)}).matches(':hover') && getComputedStyle(document.querySelector(${JSON.stringify(selector)})).backgroundColor!==${JSON.stringify(before)}`),`${name}: real pointer hover feedback`)
      await screenshot(`1440-de-${name}-hover`)
      await send('Input.dispatchMouseEvent',{type:'mousePressed',button:'left',clickCount:1,...point})
      await wait(180)
      assert(await evaluate(`document.querySelector(${JSON.stringify(selector)}).matches(':active') && getComputedStyle(document.querySelector(${JSON.stringify(selector)})).transform==='matrix(1, 0, 0, 1, 0, 1)'`),`${name}: pressed feedback`)
      await screenshot(`1440-de-${name}-pressed`)
      // Release outside the link: inspect feedback without contacting WhatsApp or a phone handler.
      await send('Input.dispatchMouseEvent',{type:'mouseMoved',x:1,y:1,buttons:1})
      await send('Input.dispatchMouseEvent',{type:'mouseReleased',button:'left',clickCount:1,x:1,y:1})
    }
    for (const [name,selector] of [['inline-link','.hero-inquiry-link'],['card','.service-card'],['faq','.faq-list summary'],['navigation','.desktop-nav a']]) {
      await send('Input.dispatchMouseEvent',{type:'mouseMoved',...await pointFor(selector)})
      await wait(300)
      assert(await evaluate(`document.querySelector(${JSON.stringify(selector)}).matches(':hover')`),`${name}: pointer hover reached`)
      await screenshot(`1440-de-${name}-hover`)
    }
    await click('.faq-list summary')
    assert(await evaluate(`document.querySelector('.faq-list details').open`),'FAQ opens by pointer')
    await click('.faq-list summary')
    assert(await evaluate(`!document.querySelector('.faq-list details').open`),'FAQ closes by pointer')
  }
  if (verify) {
    await send('Emulation.setDeviceMetricsOverride',{width:390,height:900,deviceScaleFactor:1,mobile:false})
    await send('Emulation.setTouchEmulationEnabled',{enabled:true,maxTouchPoints:1})
    await send('Page.navigate',{url:base})
    await wait(800)
    await evaluate(`document.querySelector('[data-services-track]').scrollIntoView({block:'center',behavior:'instant'})`)
    const swipe = await evaluate(`(() => {const r=document.querySelector('[data-services-track]').getBoundingClientRect();return {x:r.right-30,y:Math.max(120,r.top+120)}})()`)
    await send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{...swipe,id:1}]})
    for (let step=1;step<=8;step++) {
      await send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x:swipe.x-step*32,y:swipe.y,id:1}]})
      await wait(30)
    }
    await send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]})
    await wait(700)
    assert(await evaluate(`document.querySelector('[data-services-track]').scrollLeft>100`),'390: touch swipe moves cards')
    if (phase === 'interaction') assert(await evaluate(`Number(document.querySelector('[data-services-current]').textContent)>1 && document.querySelectorAll('.service-card.is-current').length===1`),'touch swipe updates number and active card')
    await send('Emulation.setTouchEmulationEnabled',{enabled:false})
    await click('[data-menu-toggle]')
    await send('Emulation.setDeviceMetricsOverride',{width:1200,height:1000,deviceScaleFactor:1,mobile:false})
    await wait(250)
    assert(await evaluate(`document.querySelector('[data-menu-toggle]').getAttribute('aria-expanded')==='false' && !document.querySelector('main').inert`),'menu closes at desktop breakpoint')
    if (phase === 'interaction') assert(await evaluate(`!document.querySelector('.service-card.is-current') && document.querySelector('[data-services-controls]').hidden`),'desktop resize clears mobile card state')
    await send('Emulation.setDeviceMetricsOverride',{width:390,height:900,deviceScaleFactor:1,mobile:false})
    await send('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'reduce'}]})
    await send('Page.navigate',{url:base})
    await wait(800)
    assert(await evaluate(`!document.documentElement.classList.contains('reveal-ready') && [...document.querySelectorAll('[data-reveal]')].every(e=>getComputedStyle(e).opacity==='1')`),'reduced motion: all reveal content visible')
    await evaluate(`document.querySelector('[data-services-track]').scrollIntoView({behavior:'instant'});document.querySelector('[data-services-track]').focus()`)
    await press('End','End',35)
    await wait(50)
    assert(await evaluate(`document.querySelector('[data-services-position]').textContent.startsWith('04')`),'reduced motion: card jump completes immediately')
    if (phase === 'interaction') {
      await click('.faq-list summary')
      assert(await evaluate(`parseFloat(getComputedStyle(document.querySelector('.faq-answer')).animationDuration)<0.001 && parseFloat(getComputedStyle(document.querySelector('.btn')).transitionDuration)<0.001 && parseFloat(getComputedStyle(document.querySelector('.services-progress'),'::after').transitionDuration)<0.001`),'reduced motion: button, FAQ and progress animations disabled')
    }
    for (const selector of ['.hero-inquiry-link','.desktop-nav a[href="#hebammenhilfe"]']) {
      await send('Emulation.setDeviceMetricsOverride',{width:1440,height:1000,deviceScaleFactor:1,mobile:false})
      await click(selector)
      await wait(150)
      assert(await evaluate(`(() => {const a=document.querySelector(${JSON.stringify(selector)});const r=document.querySelector(a.hash).getBoundingClientRect();return r.top>=document.querySelector('.site-header').offsetHeight-1})()`),`${selector}: anchor clears sticky header`)
    }
    assert(await evaluate(`document.querySelector('.desktop-nav a[href="#hebammenhilfe"]').getAttribute('aria-current')==='location'`),'desktop active section marker')
    for (const pathname of phase === 'final' ? ['favicon.png','apple-touch-icon.png','impressum.html','datenschutz.html'] : []) {
      const response = await fetch(new URL(pathname,base))
      assert(response.ok,`local resource ${pathname}`)
    }
    await send('Emulation.setScriptExecutionDisabled',{value:true})
    await send('Page.navigate',{url:base})
    await wait(700)
    const fallback = await evaluate(`({title:document.querySelector('h1').textContent,nav:document.querySelector('.desktop-nav a[href="#leistungen"]').textContent,hidden:[...document.querySelectorAll('main [data-reveal]')].some(e=>getComputedStyle(e).opacity==='0')})`)
    assert(fallback.title===translations.de.hero.title && fallback.nav===translations.de.nav.services && !fallback.hidden,'German no-JavaScript fallback and visible content')
    assert(await evaluate(`JSON.stringify([...document.querySelectorAll('.faq-list details:last-child a')].map(a=>a.getAttribute('href')))===JSON.stringify(['tel:112','tel:116117'])`),'no-JavaScript fallback retains exact emergency telephone links')
    await send('Emulation.setScriptExecutionDisabled',{value:false})
  }
  const targetedReport = targeted
    ? await (await import('./targeted-refinement-checks.mjs')).runTargetedChecks({base,phase,matrix,send,evaluate,screenshot,wait,click,press,assert}) : []
  if (phase === 'refinement') {
    const before = JSON.parse(await readFile(path.join(os.tmpdir(),'hebamme-astra-refinement-before','report.json'),'utf8')).targetedReport
    for (const after of targetedReport.filter(r=>r.width)) {
      const original = before.find(r=>r.width===after.width && r.language===after.language)
      assert(['h1Size','heroHeight','heroImageHeight','orientationHeight','identityHeight','contactHeight'].every(key=>original[key]===after[key]),`${after.width}/${after.language}: protected dimensions unchanged`)
    }
  }
  const implementationReport = implementation
    ? await (await import('./final-implementation-checks.mjs')).runImplementationChecks({base,phase,caseFilter:process.argv[4],send,evaluate,screenshot,wait,press,assert,translations}) : []
  const nativeReviewsReport = nativeReviews
    ? await (await import('./reviews-browser-checks.mjs')).runReviewChecks({base,send,evaluate,screenshot,wait,click,press,assert,requests}) : []
  const marinaServicesReport = marinaServices
    ? await (await import('./services-browser-checks.mjs')).runServiceChecks({base,send,evaluate,screenshot,wait,click,press,assert,requests,caseFilter:process.argv[4]}) : []
  const inquiryLegalReport = inquiryLegal
    ? await (await import('./inquiry-legal-checks.mjs')).runInquiryLegalChecks({base,send,evaluate,screenshot,wait,click,press,assert,requests,translations}) : []
  const personalProfileReport = personalProfile
    ? await (await import('./personal-profile-checks.mjs')).runPersonalProfileChecks({base,send,evaluate,screenshot,wait,click,assert,requests,translations}) : []
  const headerContactReport = headerContact
    ? await (await import('./header-contact-checks.mjs')).runHeaderContactChecks({base,send,evaluate,screenshot,wait,click,press,assert,requests,translations,caseFilter:process.argv[4]}) : []
  const navigationReport = navigation
    ? await (await import('./navigation-checks.mjs')).runNavigationChecks({base,send,evaluate,screenshot,wait,click,press,assert,caseFilter:process.argv[4]}) : []
  await writeFile(path.join(output,'report.json'), JSON.stringify({report,interactions,errors,failedRequests,requests,targetedReport,implementationReport,nativeReviewsReport,marinaServicesReport,inquiryLegalReport,personalProfileReport,headerContactReport,navigationReport},null,2))
  console.log(JSON.stringify({output,report:report.map(({width,language,overflow,clippedText,missingTranslations})=>({width,language,overflow,clippedText,missingTranslations})),interactions,errors,failedRequests},null,2))
  if (interactions.some(check=>!check.pass) || errors.length || failedRequests.some(r=>r.url.startsWith(base))) process.exitCode=1
} finally {
  socket.close()
  child.kill()
  await wait(500)
  const resolved = path.resolve(profile)
  if (resolved.startsWith(path.resolve(os.tmpdir()) + path.sep) && path.basename(resolved).startsWith('hebamme-deep-browser-')) {
    await rm(resolved, { recursive:true,force:true,maxRetries:5,retryDelay:200 }).catch(()=>{})
  }
}
