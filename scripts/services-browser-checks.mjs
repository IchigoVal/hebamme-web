import { readFile } from 'node:fs/promises'
import path from 'node:path'
import os from 'node:os'
import { readServiceSources, textEntries } from './prepare-services.mjs'

export async function runServiceChecks({base,send,evaluate,screenshot,wait,click,press,assert,requests,caseFilter}) {
  const { data, russian } = await readServiceSources()
  const entries = textEntries(data)
  const frame = () => evaluate('new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)))')
  const focus = selector => evaluate('document.querySelector('+JSON.stringify(selector)+').focus({preventScroll:true})')
  const scroll = async selector => { await evaluate('document.querySelector('+JSON.stringify(selector)+').scrollIntoView({block:"start",behavior:"instant"})'); await wait(250) }
  const baseline = JSON.parse(await readFile(path.join(os.tmpdir(),'hebamme-astra-baseline/report.json'),'utf8')).report
  const results = []
  for (const width of [320,375,390,768,1024,1440]) for (const language of ['de','ru']) {
    const label = width+'/'+language
    if (caseFilter && caseFilter!==label) continue
    const check = (value, name) => assert(value, label+': '+name)
    await send('Emulation.setDeviceMetricsOverride',{width,height:1000,deviceScaleFactor:1,mobile:width<720})
    await send('Emulation.setEmulatedMedia',{features:[]})
    await send('Page.navigate',{url:base})
    await wait(550)
    await click('[data-lang-option="'+language+'"]')
    await evaluate('document.fonts.ready')
    await scroll('#hebammenhilfe')
    const actual = await evaluate("[...document.querySelectorAll('[data-marina-copy]')].map(e=>[e.dataset.marinaCopy,e.textContent])")
    check(JSON.stringify(actual)===JSON.stringify(entries.map(([key,text])=>[key,language==='de'?text:russian.strings[text]])), 'all 94 original/translated text entries exactly present once per source position')
    check(await evaluate("document.querySelectorAll('.marina-service').length===5 && document.querySelectorAll('.marina-service[open]').length===0 && document.querySelectorAll('.marina-service-body li').length===58"), 'five closed areas, all 58 individual bullets')
    check(await evaluate("[...document.querySelectorAll('.marina-service summary')].every(s=>s.getBoundingClientRect().height>=44 && s.querySelector('.marina-service-intro').getClientRects().length && s.querySelector('.marina-service-topics').getClientRects().length)"), 'every original short introduction and subtitle immediately visible')
    check(await evaluate("document.documentElement.scrollWidth<=innerWidth && [...document.querySelectorAll('#hebammenhilfe summary,#hebammenhilfe h2,.marina-service-title')].every(e=>e.scrollWidth<=e.clientWidth+1)"), 'closed layout has no horizontal overflow')
    check(await evaluate("!document.querySelector('.orientation-list,.orientation-note') && document.querySelectorAll('.service-card').length===4"), 'generic placeholders gone; four visual inquiry cards retained')
    const original = baseline.find(item=>item.width===width && item.language===language)
    if (original) {
      const protectedHeights = await evaluate("[...document.querySelectorAll('.hero-section,#bewertungen,#kontakt')].map(e=>({id:e.id,height:e.offsetHeight}))")
      check(protectedHeights.every(item=>original.sections.find(s=>s.id===item.id)?.height===item.height), 'hero, native reviews and contact heights unchanged')
    }
    if ([320,390,1440].includes(width)) await screenshot(width+'-'+language+'-services-closed')
    await press('Tab','Tab',9)
    for (let i=0;i<5;i++) {
      const selector='.marina-service:nth-child('+(i+1)+')'
      await scroll(selector)
      await press('Tab','Tab',9)
      await focus(selector+' summary')
      check(await evaluate("document.activeElement.matches(':focus-visible') && getComputedStyle(document.activeElement).outlineStyle!=='none'"), 'area '+(i+1)+' visible keyboard focus')
      await press('Enter','Enter',13)
      await frame()
      check(await evaluate("document.querySelector('"+selector+"').open && document.activeElement===document.querySelector('"+selector+" summary')"), 'area '+(i+1)+' opens by Enter without moving focus')
      check(await evaluate("[...document.querySelectorAll('"+selector+" .marina-service-text > *, "+selector+" li')].every(e=>e.getClientRects().length && e.scrollWidth<=e.clientWidth+1) && document.documentElement.scrollWidth<=innerWidth"), 'area '+(i+1)+' full detail content visible without clipping')
      if(i===0 && [320,390,1440].includes(width)) await screenshot(width+'-'+language+'-services-open')
      await press(' ','Space',32)
      await frame()
      check(await evaluate("!document.querySelector('"+selector+"').open"), 'area '+(i+1)+' closes by Space')
      await click(selector+' summary')
      await frame()
      check(await evaluate("document.querySelector('"+selector+"').open"), 'area '+(i+1)+' opens by pointer')
      await click(selector+' [data-marina-close]')
      await frame()
      check(await evaluate("!document.querySelector('"+selector+"').open && document.activeElement===document.querySelector('"+selector+" summary') && document.activeElement.getBoundingClientRect().top>=document.querySelector('.site-header').getBoundingClientRect().bottom"), 'area '+(i+1)+' bottom close restores visible summary focus')
    }
    await click('.marina-service:nth-child(1) summary')
    await click('.marina-service:nth-child(3) summary')
    const other = language==='de'?'ru':'de'
    await click('[data-lang-option="'+other+'"]')
    check(await evaluate("JSON.stringify([...document.querySelectorAll('.marina-service')].map(e=>e.open))==='[true,false,true,false,false]'"), 'language switch preserves multiple open areas')
    const switched = await evaluate("[...document.querySelectorAll('[data-marina-copy]')].map(e=>[e.dataset.marinaCopy,e.textContent])")
    check(JSON.stringify(switched)===JSON.stringify(entries.map(([key,text])=>[key,other==='de'?text:russian.strings[text]])), 'all opened and closed text translates without losses')
    check(await evaluate("document.querySelector('.marina-service [data-marina-action]').textContent==="+JSON.stringify(other==='de'?'Weniger anzeigen':'Свернуть')), 'expanded action label follows language')
    await send('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'reduce'}]})
    await click('.marina-service:nth-child(2) summary')
    check(await evaluate("document.querySelectorAll('.marina-service')[1].open && getComputedStyle(document.documentElement).scrollBehavior==='auto' && parseFloat(getComputedStyle(document.querySelector('.marina-service summary')).transitionDuration)<.001"), 'reduced motion preserves immediate disclosure')
    await send('Emulation.setDeviceMetricsOverride',{width:width<720?1440:390,height:900,deviceScaleFactor:1,mobile:width>=720})
    await frame()
    check(await evaluate("document.querySelectorAll('.marina-service[open]').length===3 && document.documentElement.scrollWidth<=innerWidth"), 'resize retains open state without overflow')
    results.push({width,language,contentEntries:actual.length})
    console.log('Marina services checked '+label)
  }
  await send('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,mobile:true})
  await send('Page.navigate',{url:base+'#leistung-rund-ums-baby'})
  await wait(600)
  assert(await evaluate("document.querySelector('#leistung-rund-ums-baby').open"), 'direct link reveals correct service')
  await send('Emulation.setScriptExecutionDisabled',{value:true})
  await send('Page.navigate',{url:base})
  await wait(500)
  const noScript = await evaluate("[...document.querySelectorAll('[data-marina-copy]')].map(e=>[e.dataset.marinaCopy,e.textContent])")
  assert(JSON.stringify(noScript)===JSON.stringify(entries), 'no-JavaScript fallback retains all 94 exact German entries')
  await click('.marina-service summary')
  assert(await evaluate("document.querySelector('.marina-service').open && document.querySelectorAll('.marina-service-body li').length===58"), 'native disclosure works without JavaScript; all bullets retained')
  await send('Emulation.setScriptExecutionDisabled',{value:false})
  const external = requests.filter(url=>/^https?:/.test(url) && new URL(url).origin!==new URL(base).origin)
  assert(external.length===0, 'service content introduces no external requests')
  return results
}
