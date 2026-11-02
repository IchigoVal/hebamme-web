import { readServiceSources, displayTextEntries, titleLabels } from './prepare-services.mjs'

export async function runServiceChecks({base,send,evaluate,screenshot,wait,click,press,assert,requests,caseFilter}) {
  const { data, russian } = await readServiceSources()
  const entries = displayTextEntries(data)
  const localized = (text, language) => titleLabels[text] ? (language === 'de' ? titleLabels[text] : russian.strings[text].toLocaleLowerCase('ru').replace(/^./u, c => c.toLocaleUpperCase('ru'))) : (language === 'de' ? text : russian.strings[text])
  const frame = () => evaluate('new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)))')
  const focus = selector => evaluate('document.querySelector('+JSON.stringify(selector)+').focus({preventScroll:true})')
  const scroll = async selector => { await evaluate('document.querySelector('+JSON.stringify(selector)+').scrollIntoView({block:"start",behavior:"instant"})'); await wait(250) }
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
    check(JSON.stringify(actual)===JSON.stringify(entries.map(([key,text])=>[key,localized(text,language)])), 'all 94 original/translated text entries exactly present once per source position')
    check(await evaluate("document.querySelectorAll('.marina-service').length===5 && document.querySelectorAll('.marina-service[open]').length===0 && document.querySelectorAll('.marina-service-body li').length===58"), 'five closed areas, all 58 individual bullets')
    check(await evaluate("[...document.querySelectorAll('.marina-service summary')].every(s=>s.getBoundingClientRect().height>=44 && s.querySelector('.marina-service-intro').getClientRects().length && s.querySelector('.marina-service-topics').getClientRects().length)"), 'every original short introduction and subtitle immediately visible')
    check(await evaluate("document.documentElement.scrollWidth<=innerWidth && [...document.querySelectorAll('#hebammenhilfe summary,#hebammenhilfe h2,.marina-service-title')].every(e=>e.scrollWidth<=e.clientWidth+1)"), 'closed layout has no horizontal overflow')
    check(await evaluate("!document.querySelector('.orientation-list,.orientation-note') && document.querySelectorAll('.service-card').length===4"), 'generic placeholders gone; four visual inquiry cards retained')
    if (width===1440) {
      check(await evaluate("matchMedia('(hover: hover)').matches"), 'desktop has a real hover-capable pointer')
      for (let i=0;i<5;i++) {
        const selector='.marina-service:nth-child('+(i+1)+')'
        await scroll(selector)
        await send('Input.dispatchMouseEvent',{type:'mouseMoved',x:0,y:0})
        await wait(260)
        const measure = () => evaluate(`(() => {const s=document.querySelector('${selector} summary'),a=s.querySelector('.marina-service-arrow'),r=s.getBoundingClientRect();return {background:getComputedStyle(s).backgroundColor,transform:getComputedStyle(a).transform,cursor:getComputedStyle(s).cursor,rects:[...document.querySelectorAll('.marina-service summary')].map(e=>{const b=e.getBoundingClientRect();return [b.x,b.y+scrollY,b.width,b.height]}),x:r.x+r.width/2,y:r.y+r.height/2}})()`)
        const before = await measure()
        await send('Input.dispatchMouseEvent',{type:'mouseMoved',x:before.x,y:before.y})
        await wait(280)
        const hovered = await measure()
        check(hovered.background!==before.background && hovered.cursor==='pointer', 'area '+(i+1)+' closed row and plus react to pointer hover')
        check(JSON.stringify(hovered.rects)===JSON.stringify(before.rects), 'area '+(i+1)+' hover does not move or overlap rows')
        await click(selector+' summary')
        await wait(250)
        check(await evaluate("document.querySelector('"+selector+"').open && getComputedStyle(document.querySelector('"+selector+" .marina-service-arrow'),'::after').transform==='matrix(1, 0, 0, 1, 0, 0)'"), 'area '+(i+1)+' opens to its minus state while hovered')
        await click(selector+' summary')
        await send('Input.dispatchMouseEvent',{type:'mouseMoved',x:0,y:0})
        await wait(260)
        const after = await measure()
        check(after.background===before.background && after.transform===before.transform, 'area '+(i+1)+' returns to its resting state after hover')
      }
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
      check(await evaluate("(() => {const link=document.querySelector('"+selector+" [data-marina-inquire]'); return link && link.getAttribute('href')==='#kontakt' && link.getClientRects().length && link.textContent.trim().length > 0})()"), 'area '+(i+1)+' has a visible localized contact link')
      if (i===0 && width>=720) check(await evaluate("(() => {const g=[...document.querySelectorAll('#leistung-schwangerschaft .marina-service-group')].map(e=>e.getBoundingClientRect()); return g.length===4 && Math.abs(g[0].top-g[1].top)<1 && Math.abs(g[2].top-g[3].top)<1 && g[2].top>g[0].top})()"), 'pregnancy groups form two rows of two')
      check(await evaluate("[...document.querySelectorAll('"+selector+" .marina-service-text > *, "+selector+" li')].every(e=>e.getClientRects().length && e.scrollWidth<=e.clientWidth+1) && document.documentElement.scrollWidth<=innerWidth"), 'area '+(i+1)+' full detail content visible without clipping')
      if(i===0 && [320,390,1440].includes(width)) await screenshot(width+'-'+language+'-services-open')
      if (i===1) {
        const expected = language==='de' ? ['Geburt verstehen & planen','Bewegung, Entspannung & erste Stunden'] : ['Понимание и планирование родов','Движение, расслабление и первые часы']
        const grouped = await evaluate("(() => {const root=document.querySelector('#leistung-geburtsvorbereitung .marina-service-text'),groups=[...root.querySelectorAll('.marina-service-group')];return {headings:groups.map(g=>g.querySelector('h4').textContent),counts:groups.map(g=>g.querySelectorAll('li').length),paragraphs:[...root.children].filter(e=>e.tagName==='P').map(e=>e.textContent),rects:groups.map(g=>{const r=g.getBoundingClientRect();return {x:r.x,y:r.y}})}})()")
        const paragraphs = [data.areas[1].blocks[0].text,data.areas[1].blocks[2].text].map(text=>localized(text,language))
        check(JSON.stringify(grouped.headings)===JSON.stringify(expected) && JSON.stringify(grouped.counts)==='[5,4]' && JSON.stringify(grouped.paragraphs)===JSON.stringify(paragraphs), 'birth preparation headings, nine items and both original paragraphs retained')
        check(width>=720 ? Math.abs(grouped.rects[0].y-grouped.rects[1].y)<1 && grouped.rects[1].x>grouped.rects[0].x : grouped.rects[1].y>grouped.rects[0].y, 'birth groups use two columns on desktop and one on mobile')
        if ([320,390,1440].includes(width)) await screenshot(width+'-'+language+'-birth-open')
      }
      if (i===3) {
        const expected = language==='de' ? ['Stillberatung & Milchbildung','Flaschenernährung, Abstillen & Beikost'] : ['Консультации по грудному вскармливанию и выработке молока','Кормление из бутылочки, завершение грудного вскармливания и прикорм']
        const grouped = await evaluate("(() => {const groups=[...document.querySelectorAll('#leistung-stillen-ernaehrung .marina-service-group')];return {headings:groups.map(g=>g.querySelector('h4').textContent),counts:groups.map(g=>g.querySelectorAll('li').length),rects:groups.map(g=>{const r=g.getBoundingClientRect();return {x:r.x,y:r.y}})}})()")
        check(JSON.stringify(grouped.headings)===JSON.stringify(expected) && JSON.stringify(grouped.counts)==='[7,4]', 'feeding headings and all 11 items grouped in the active language')
        check(width>=720 ? Math.abs(grouped.rects[0].y-grouped.rects[1].y)<1 && grouped.rects[1].x>grouped.rects[0].x : grouped.rects[1].y>grouped.rects[0].y, 'feeding groups use two columns on desktop and one on mobile')
        if ([320,390,1440].includes(width)) await screenshot(width+'-'+language+'-feeding-open')
      }
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
    check(JSON.stringify(switched)===JSON.stringify(entries.map(([key,text])=>[key,localized(text,other)])), 'all opened and closed text translates without losses')
    check(await evaluate("document.querySelector('.marina-service [data-marina-action]').textContent==="+JSON.stringify(other==='de'?'Weniger anzeigen':'Свернуть')), 'expanded action label follows language')
    await send('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'reduce'}]})
    await click('.marina-service:nth-child(2) summary')
    check(await evaluate("document.querySelectorAll('.marina-service')[1].open && getComputedStyle(document.documentElement).scrollBehavior==='auto' && ['.marina-service summary','.marina-service-arrow'].every(s=>parseFloat(getComputedStyle(document.querySelector(s)).transitionDuration)<.001)"), 'reduced motion preserves immediate disclosure and disables hover animation')
    await send('Emulation.setDeviceMetricsOverride',{width:width<720?1440:390,height:900,deviceScaleFactor:1,mobile:width>=720})
    await frame()
    check(await evaluate("document.querySelectorAll('.marina-service[open]').length===3 && document.documentElement.scrollWidth<=innerWidth"), 'resize retains open state without overflow')
    for (let i=0;i<5;i++) {
      const selector='.marina-service:nth-child('+(i+1)+')'
      await evaluate("document.querySelector('"+selector+"').open=true; history.replaceState(null,'',location.pathname)")
      await click(selector+' [data-marina-inquire]')
      check(await evaluate("location.hash==='#kontakt' && !!document.querySelector('#kontakt')"), 'area '+(i+1)+' contact link reaches contact section')
    }
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
  assert(JSON.stringify(noScript)===JSON.stringify(entries.map(([key,text])=>[key,titleLabels[text] || text])), 'no-JavaScript fallback retains all 94 exact German entries')
  await click('.marina-service summary')
  assert(await evaluate("document.querySelector('.marina-service').open && document.querySelectorAll('.marina-service-body li').length===58"), 'native disclosure works without JavaScript; all bullets retained')
  await send('Emulation.setScriptExecutionDisabled',{value:false})
  await send('Emulation.setTouchEmulationEnabled',{enabled:true,maxTouchPoints:1})
  await send('Page.navigate',{url:base})
  await wait(600)
  await scroll('.marina-service:first-child')
  const touchPoint = await evaluate("(() => {const e=document.querySelector('.marina-service summary'),r=e.getBoundingClientRect();return {x:r.x+r.width/2,y:r.y+r.height/2,background:getComputedStyle(e).backgroundColor}})()")
  assert(await evaluate("!matchMedia('(hover: hover)').matches"), 'touch-only device does not enable hover styles')
  const tap = async () => { await send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x:touchPoint.x,y:touchPoint.y}]}); await send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]}); await wait(180) }
  await tap()
  assert(await evaluate("document.querySelector('.marina-service').open"), 'touch opens the service')
  await tap()
  assert(await evaluate("!document.querySelector('.marina-service').open && getComputedStyle(document.querySelector('.marina-service summary')).backgroundColor==="+JSON.stringify(touchPoint.background)), 'touch closes without a stuck hover background')
  await send('Emulation.setTouchEmulationEnabled',{enabled:false})
  const external = requests.filter(url=>/^https?:/.test(url) && new URL(url).origin!==new URL(base).origin)
  assert(external.length===0, 'service content introduces no external requests')
  return results
}
