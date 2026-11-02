// Verify the explicitly provisional profile without external assets or invented claims.
export async function runPersonalProfileChecks({base,send,evaluate,screenshot,wait,click,assert,requests,translations}) {
  const cases=[]
  for (const width of [320,375,390,768,1024,1440]) for (const language of ['de','ru']) {
    const label=width+'/'+language
    const check=(value,message)=>assert(value,label+': '+message)
    await send('Emulation.setDeviceMetricsOverride',{width,height:1000,deviceScaleFactor:1,mobile:width<720})
    await send('Emulation.setEmulatedMedia',{features:[]})
    await send('Page.navigate',{url:base})
    await wait(500)
    await click('[data-lang-option="'+language+'"]')
    await evaluate('document.fonts.ready')
    await evaluate("document.querySelector('#vorstellung').scrollIntoView({block:'start',behavior:'instant'})")
    await wait(400)
    const actual=await evaluate(`(() => {const s=document.querySelector('#vorstellung'),portrait=s.querySelector('.personal-portrait'),copy=s.querySelector('.personal-copy'),p=portrait.getBoundingClientRect(),c=copy.getBoundingClientRect();return {previous:s.previousElementSibling.id,next:s.nextElementSibling.id,strings:[...s.querySelectorAll('[data-i18n]')].map(e=>[e.dataset.i18n,e.textContent]),images:s.querySelectorAll('img,iframe').length,overflow:document.documentElement.scrollWidth>innerWidth,clipped:[...s.querySelectorAll('h2,h3,p,span')].some(e=>e.scrollWidth>e.clientWidth+1),portrait:{x:p.x,y:p.y,width:p.width,height:p.height},copy:{x:c.x,y:c.y,width:c.width},background:getComputedStyle(s).backgroundColor}})()`)
    const expected=['title','introduction','portrait','pendingTitle','pending'].map(key=>['profile.'+key,translations[language].profile[key]])
    const sorted=items=>items.toSorted((a,b)=>a[0].localeCompare(b[0]))
    check(JSON.stringify(sorted(actual.strings))===JSON.stringify(sorted(expected)),'all localized confirmed and explicitly provisional copy is present')
    check(actual.previous==='leistungen'&&actual.next==='bewertungen','profile is between inquiry cards and reviews')
    check(actual.images===0,'portrait is an explicit placeholder, not a person or external image')
    check(!actual.overflow&&!actual.clipped,'no horizontal overflow or clipped profile copy')
    check(width<720 ? actual.copy.y>=actual.portrait.y+actual.portrait.height && actual.portrait.height<=224 : actual.copy.x>actual.portrait.x+actual.portrait.width,'mobile stacks compact portrait; desktop has separate columns')
    if ([320,390,1440].includes(width)) await screenshot(width+'-'+language+'-personal-profile')
    await send('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'reduce'}]})
    check(await evaluate("getComputedStyle(document.querySelector('#vorstellung')).visibility==='visible' && getComputedStyle(document.querySelector('#personal-heading')).opacity==='1'"),'profile remains visible with reduced motion')
    cases.push({width,language})
    console.log('Personal profile checked '+label)
  }
  await send('Emulation.setScriptExecutionDisabled',{value:true})
  await send('Page.navigate',{url:base})
  await wait(500)
  assert(await evaluate("document.querySelector('.personal-introduction').textContent==='Ich bin Marina Rymmer, Hebamme in Nürnberg. Ich begleite dich auf Deutsch und Russisch.' && document.querySelector('.personal-pending p').textContent.startsWith('Vorläufiger Platzhalter:')"),'German confirmed introduction and provisional notice work without JavaScript')
  await send('Emulation.setScriptExecutionDisabled',{value:false})
  assert(!requests.some(url=>/^https?:/.test(url)&&new URL(url).origin!==new URL(base).origin),'profile introduces no external requests')
  return cases
}
