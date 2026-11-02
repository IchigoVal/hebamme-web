// Focused rendered checks for the header and contact polish.
export async function runHeaderContactChecks({base,send,evaluate,screenshot,wait,click,press,assert,requests,translations,caseFilter}) {
  const cases=[]
  for (const width of [320,375,390,768,1024,1440]) for (const language of ['de','ru']) {
    const label=width+'/'+language
    if (caseFilter && caseFilter!==label) continue
    const check=(value,message)=>assert(value,label+': '+message)
    await send('Emulation.setDeviceMetricsOverride',{width,height:1000,deviceScaleFactor:1,mobile:width<720})
    await send('Emulation.setEmulatedMedia',{features:[]})
    await send('Page.navigate',{url:base})
    await wait(500)
    await click('[data-lang-option="'+language+'"]')
    await evaluate('document.fonts.ready')
    await evaluate("window.scrollTo({top:0,behavior:'instant'})")
    const header=await evaluate(`(() => {const h=document.querySelector('.site-header'),b=h.querySelector('.brand').getBoundingClientRect(),m=h.querySelector('.menu-toggle'),r=m.getBoundingClientRect(),l=h.querySelector('.lang-switch').getBoundingClientRect();return {sticky:getComputedStyle(h).position,brand:[b.left,b.right],menu:[r.left,r.right],menuVisible:getComputedStyle(m).display!=='none',lang:[l.left,l.right],pressed:h.querySelector('[data-lang-option="${language}"]').getAttribute('aria-pressed'),overflow:document.documentElement.scrollWidth>innerWidth}})()`)
    check(header.sticky==='sticky' && header.pressed==='true' && !header.overflow,'sticky header and selected language remain correct')
    check(header.brand[0]>=0 && header.brand[1]<=width && (width>=960 || (header.menuVisible&&header.menu[1]<=header.brand[0]&&header.brand[1]<=header.lang[0])),'header controls fit without overlap')
    if ([320,390,1440].includes(width)) await screenshot(width+'-'+language+'-header')
    await evaluate("document.querySelector('.contact-copy').scrollIntoView({block:'start',behavior:'instant'})")
    await wait(700)
    const contact=await evaluate(`(() => {const list=[...document.querySelectorAll('.contact-checklist li')],links=[...document.querySelectorAll('.contact-actions a')];return {items:list.map(e=>e.textContent),marker:list.map(e=>getComputedStyle(e,'::before').content),hrefs:links.map(e=>e.getAttribute('href')),targets:links.map(e=>e.getBoundingClientRect().height),radius:links.map(e=>parseFloat(getComputedStyle(e).borderTopLeftRadius)),fit:links.every(e=>{const a=e.querySelector('.btn__label').getBoundingClientRect(),b=e.querySelector('.btn__icon').getBoundingClientRect();return a.right<=b.left+1}),overflow:document.documentElement.scrollWidth>innerWidth}})()`)
    check(JSON.stringify(contact.items)===JSON.stringify(translations[language].contact.details),'all four original contact details retained')
    check(contact.marker.every(value=>value==='""') && contact.radius.every(value=>value>=8),'short markers and softer contact button corners')
    check(JSON.stringify(contact.hrefs)===JSON.stringify(['https://wa.me/4917623488396','tel:+4917623488396']) && contact.targets.every(height=>height>=44),'WhatsApp and phone targets remain unchanged and reachable')
    check(contact.fit&&!contact.overflow,'contact controls and copy fit without horizontal overflow')
    if ([320,390,1440].includes(width)) await screenshot(width+'-'+language+'-contact')
    await press('Tab','Tab',9)
    await evaluate("document.querySelector('.contact-actions a').focus({preventScroll:true})")
    check(await evaluate("document.activeElement.matches('.contact-actions a:focus-visible') && getComputedStyle(document.activeElement).outlineStyle!=='none'"),'contact action has visible keyboard focus')
    await press('Tab','Tab',9)
    check(await evaluate("document.activeElement.matches('.contact-actions a:nth-child(2):focus-visible')"),'keyboard advances to phone action')
    await send('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'reduce'}]})
    check(await evaluate("['.contact-actions .btn','.lang-switch__button'].every(s=>parseFloat(getComputedStyle(document.querySelector(s)).transitionDuration)<.001)"),'reduced motion disables action and header transitions')
    if(width===1440){
      await send('Emulation.setEmulatedMedia',{features:[]})
      await evaluate("window.scrollTo({top:document.documentElement.scrollHeight,behavior:'instant'})")
      await wait(300)
      await send('Input.dispatchMouseEvent',{type:'mouseMoved',x:0,y:0})
      await wait(250)
      const state=await evaluate("(() => {const e=document.querySelector('.contact-actions .btn--primary'),r=e.getBoundingClientRect();return {color:getComputedStyle(e).backgroundColor,x:r.x+r.width/2,y:r.y+r.height/2,scrollY,innerHeight,docHeight:document.documentElement.scrollHeight}})()")
      await send('Input.dispatchMouseEvent',{type:'mouseMoved',x:state.x,y:state.y})
      await wait(250)
      const hover=await evaluate("(() => {const e=document.querySelector('.contact-actions .btn--primary');return {color:getComputedStyle(e).backgroundColor,hover:e.matches(':hover'),hit:document.elementFromPoint("+state.x+","+state.y+")?.outerHTML.slice(0,160),hoverCapable:matchMedia('(hover: hover)').matches}})()")
      if (hover.color===state.color) console.log('Hover diagnostic '+JSON.stringify({state,hover}))
      check(hover.color!==state.color,'primary contact action has visible pointer hover feedback')
      await send('Input.dispatchMouseEvent',{type:'mouseMoved',x:0,y:0})
      await wait(250)
      const phone=await evaluate("(() => {const e=document.querySelector('.contact-actions .btn--light'),r=e.getBoundingClientRect();return {color:getComputedStyle(e).backgroundColor,x:r.x+r.width/2,y:r.y+r.height/2}})()")
      await send('Input.dispatchMouseEvent',{type:'mouseMoved',x:phone.x,y:phone.y})
      await wait(250)
      check(await evaluate("getComputedStyle(document.querySelector('.contact-actions .btn--light')).backgroundColor")!==phone.color,'secondary contact action has visible pointer hover feedback')
    }
    cases.push({width,language})
    console.log('Header and contact checked '+label)
  }
  assert(!requests.some(url=>/^https?:/.test(url)&&new URL(url).origin!==new URL(base).origin),'no new external requests')
  return cases
}
