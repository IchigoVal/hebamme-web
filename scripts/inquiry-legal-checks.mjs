// Rendered checks for inquiry cards and the two legal-page headers.
export async function runInquiryLegalChecks({base,send,evaluate,screenshot,wait,click,press,assert,requests,translations}) {
  const expectedGerman = [
    ['Sobald du schwanger bist','Du kannst dich frühzeitig melden, um deinen Betreuungsbedarf und den voraussichtlichen Geburtstermin zu besprechen.'],
    ['Wenn du noch unsicher bist','Du musst noch nicht genau wissen, welche Unterstützung du brauchst. Auch offene Fragen kannst du in deiner Anfrage schildern.'],
    ['Wenn dein Baby bereits da ist','Du benötigst Unterstützung nach der Geburt? Beschreibe kurz deine Situation, damit ich prüfen kann, ob eine Betreuung möglich ist.'],
    ['Wenn später neue Fragen entstehen','Auch nach dem Wochenbett können Fragen auftauchen. Du kannst dich mit deinem Anliegen melden und eine mögliche Beratung klären.'],
  ]
  const output=[]
  for (const width of [360,390,768,1440,1920]) for (const language of ['de','ru']) {
    const name=width+'/'+language
    const check=(value,message)=>assert(value,name+': '+message)
    await send('Emulation.setDeviceMetricsOverride',{width,height:1000,deviceScaleFactor:1,mobile:width<720})
    await send('Page.navigate',{url:base})
    await wait(500)
    await click('[data-lang-option="'+language+'"]')
    await evaluate('document.fonts.ready')
    const homeHeader=await evaluate(`(() => {const brand=document.querySelector('.header-inner > .brand').getBoundingClientRect(),menu=document.querySelector('.menu-toggle').getBoundingClientRect(),lang=document.querySelector('.lang-switch').getBoundingClientRect();return {brand:[brand.left,brand.right],menu:[menu.left,menu.right],lang:[lang.left,lang.right],menuVisible:getComputedStyle(document.querySelector('.menu-toggle')).display!=='none',overflow:document.documentElement.scrollWidth>innerWidth}})()`)
    check(!homeHeader.overflow && homeHeader.brand[0]>=0 && homeHeader.brand[1]<=width && (width>=960 || (homeHeader.menuVisible && homeHeader.menu[1]<=homeHeader.brand[0] && homeHeader.brand[1]<=homeHeader.lang[0])),'homepage header remains contained and controls do not overlap')
    check(await evaluate("[...document.querySelectorAll('.brand-monogram img')].every(i=>i.getAttribute('src')==='./images/brand-mark.svg' && i.complete && i.naturalWidth>0) && document.querySelector('link[rel=icon][type=\"image/svg+xml\"]').getAttribute('href')==='./favicon.svg'"),'header and footer logo and SVG favicon are present')
    await evaluate("window.scrollTo({top:0,behavior:'instant'})")
    await screenshot(width+'-'+language+'-home-header')
    await evaluate("document.querySelector('#leistungen').scrollIntoView({block:'start',behavior:'instant'})")
    await wait(600)
    // Visit the carousel images before checking loading: off-screen images are intentionally lazy.
    await evaluate(`(async () => {for (const image of document.querySelectorAll('.service-card img')) {image.scrollIntoView({block:'center',inline:'center',behavior:'instant'}); if (!image.complete) await new Promise(resolve=>{const timer=setTimeout(resolve,5000);const done=()=>{clearTimeout(timer);resolve()};image.addEventListener('load',done,{once:true});image.addEventListener('error',done,{once:true})})} document.querySelector('[data-services-track]').scrollTo({left:0,behavior:'instant'});document.querySelector('#leistungen').scrollIntoView({block:'start',behavior:'instant'})})()`)
    await wait(300)
    const cards=await evaluate(`(() => {const items=[...document.querySelectorAll('.service-card')];return {text:items.map(e=>[e.querySelector('h3').textContent,e.querySelector('p').textContent]),images:items.map(e=>{const i=e.querySelector('img'),r=e.querySelector('figure').getBoundingClientRect();return {src:i.getAttribute('src'),loaded:i.complete&&i.naturalWidth>0,width:r.width,height:r.height}}),overflow:document.documentElement.scrollWidth>innerWidth,clipped:items.some(e=>[e.querySelector('h3'),e.querySelector('p')].some(t=>t.scrollWidth>t.clientWidth+1)),controls:!document.querySelector('[data-services-controls]').hidden}})()`)
    const expected=language==='de'?expectedGerman:translations.ru.services.cards.map(card=>[card.title,card.text])
    check(JSON.stringify(cards.text)===JSON.stringify(expected),'four localized inquiry situations and complete copy')
    check(cards.images.length===4 && cards.images.every((img,i)=>img.loaded&&img.src==='./images/step-'+(i+1)+'.webp'),'four original image assets load')
    check(!cards.overflow&&!cards.clipped,'cards and document have no horizontal overflow or clipped text')
    check(width===768?cards.images.every(img=>Math.abs(img.width-img.height)<2):true,'tablet images have compact square proportions')
    check(cards.controls===(width<720),'mobile carousel controls follow breakpoint')
    await screenshot(width+'-'+language+'-inquiry-cards')
    if(width<720){
      await evaluate("document.querySelector('[data-services-track]').focus()")
      await press('End','End',35)
      await wait(800)
      check(await evaluate("document.querySelector('[data-services-current]').textContent==='04' && document.querySelector('[data-services-next]').disabled"),'keyboard End reaches fourth card and updates position')
      await press('Home','Home',36)
      await wait(800)
      check(await evaluate("document.querySelector('[data-services-current]').textContent==='01' && document.querySelector('[data-services-prev]').disabled"),'keyboard Home returns to first card')
    }
    for(const page of ['impressum.html','datenschutz.html']) {
      await send('Page.navigate',{url:base+page})
      await wait(450)
      const header=await evaluate(`(() => {const b=document.querySelector('.legal-header-inner .brand').getBoundingClientRect(),m=document.querySelector('.legal-header-inner .brand-monogram').getBoundingClientRect(),n=document.querySelector('.legal-header-inner .brand-name').getBoundingClientRect(),a=document.querySelector('.legal-header-nav a').getBoundingClientRect();return {display:getComputedStyle(document.querySelector('.legal-header-inner')).display,brand:[b.left,b.right],mark:[m.left,m.right],name:[n.left,n.right],link:[a.left,a.right],overflow:document.documentElement.scrollWidth>innerWidth,language:document.documentElement.lang,stored:localStorage.getItem('preferred-language')}})()`)
      check(header.display==='flex' && header.mark[0]>=0 && header.name[0]>=0 && header.name[1]<=header.link[0]-4 && header.link[1]<=width && !header.overflow,page+' header fully visible with separated brand and return link')
      check(header.language==='de'&&header.stored===language,page+' remains German and preserves selected homepage language')
      check(await evaluate("(() => {const i=document.querySelector('.legal-header-inner .brand-monogram img');return i.getAttribute('src')==='./images/brand-mark.svg' && i.complete && i.naturalWidth>0 && document.querySelector('link[rel=icon][type=\"image/svg+xml\"]').getAttribute('href')==='./favicon.svg'})()"),page+' logo and favicon are present')
      if([360,390,768,1440,1920].includes(width))await screenshot(width+'-'+language+'-'+page.replace('.html','')+'-header')
      await evaluate("document.querySelector('.legal-header-inner .brand').focus()")
      await press('Tab','Tab',9)
      check(await evaluate("document.activeElement.matches('.legal-header-nav a:focus-visible') && getComputedStyle(document.activeElement).outlineStyle!=='none'"),page+' return link is next in keyboard order with visible focus')
      await press('Enter','Enter',13)
      await wait(500)
      check(await evaluate("document.documentElement.lang==="+JSON.stringify(language)+" && !!document.querySelector('.hero-section')"),page+' return restores selected homepage language')
    }
    output.push({width,language})
    console.log('Inquiry and legal headers checked '+name)
  }
  const external=requests.filter(url=>/^https?:/.test(url)&&new URL(url).origin!==new URL(base).origin)
  assert(external.length===0,'no unexpected external requests')
  return output
}
