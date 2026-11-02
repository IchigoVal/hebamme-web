// Regression checks for navigation labels, anchors, responsive fit and focus.
export async function runNavigationChecks({base,send,evaluate,screenshot,wait,click,press,assert,caseFilter}) {
  const targets=['hebammenhilfe','leistungen','vorstellung','bewertungen','wissen','kontakt']
  const labels={de:['Leistungen','Wann anfragen','Über Marina','Bewertungen','Gut zu wissen','Kontakt'],ru:['Услуги','Когда обратиться','О Марине','Отзывы','Полезно знать','Контакты']}
  const cases=[]
  for (const width of [320,390,768,1024,1199,1200,1280,1440]) for (const language of ['de','ru']) {
    const name=width+'/'+language, check=(value,description)=>assert(value,name+': '+description)
    if (caseFilter && caseFilter!==name) continue
    await send('Emulation.setDeviceMetricsOverride',{width,height:900,deviceScaleFactor:1,mobile:false})
    await send('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'reduce'}]})
    await send('Page.navigate',{url:base})
    await wait(400)
    await click('[data-lang-option="'+language+'"]')
    await evaluate('document.fonts.ready')
    const header=await evaluate(`(() => {const nav=document.querySelector('.desktop-nav'),mobile=document.querySelector('.mobile-nav'),links=[...nav.querySelectorAll('a')],m=[...mobile.querySelectorAll('a')],brand=document.querySelector('.header-inner>.brand').getBoundingClientRect(),side=document.querySelector('.header-side').getBoundingClientRect(),menu=document.querySelector('.menu-toggle').getBoundingClientRect(),rects=links.map(a=>a.getBoundingClientRect()),baseFit=document.documentElement.scrollWidth<=innerWidth && brand.left>=0 && side.right<=innerWidth && brand.right<=side.left;return {desktop:getComputedStyle(nav).display!=='none',targets:links.map(a=>a.hash.slice(1)),mobileTargets:m.map(a=>a.hash.slice(1)),labels:links.map(a=>a.textContent.trim()),mobileLabels:m.map(a=>a.textContent.trim()),exists:links.every(a=>document.querySelector(a.hash)),fit:baseFit&&rects.every((r,i)=>r.width>0&&r.right<=innerWidth&&(!i||rects[i-1].right<=r.left)&&Math.abs(r.top-rects[0].top)<1),mobileFit:baseFit&&menu.left>=0&&menu.right<=brand.left}})()`)
    check(JSON.stringify(header.targets)===JSON.stringify(targets)&&JSON.stringify(header.mobileTargets)===JSON.stringify(targets)&&header.exists,'all six anchors in order and present')
    check(JSON.stringify(header.labels)===JSON.stringify(labels[language])&&JSON.stringify(header.mobileLabels)===JSON.stringify(labels[language]),'desktop and mobile translations')
    check(header.desktop===(width>=1200)&&(header.desktop?header.fit:header.mobileFit),'responsive header fits without wrapping or overlap')
    if ([390,1024,1200,1440].includes(width)) await screenshot(width+'-'+language+'-header')
    for (const target of targets) {
      await evaluate(`document.getElementById('${target}').scrollIntoView({block:'start',behavior:'instant'})`)
      await wait(80)
      check(await evaluate(`document.querySelector('.desktop-nav a[href="#${target}"]').getAttribute('aria-current')==='location' && document.querySelector('.mobile-nav a[href="#${target}"]').getAttribute('aria-current')==='location' && document.getElementById('${target}').getBoundingClientRect().top>=document.querySelector('.site-header').offsetHeight-1`),'active marker and sticky offset: '+target)
    }
    if (!header.desktop) {
      check(await evaluate("getComputedStyle(document.querySelector('.mobile-nav a[href=\"#kontakt\"]')).color==='rgb(255, 255, 255)'"),'active contact action stays legible')
      await click('[data-menu-toggle]')
      check(await evaluate("document.activeElement.matches('.mobile-nav a:first-child') && document.querySelector('[data-menu-toggle]').getAttribute('aria-expanded')==='true'"),'menu opens with keyboard focus')
      await press('Tab','Tab',9)
      check(await evaluate("document.activeElement.matches('.mobile-nav a[href=\"#leistungen\"]:focus-visible')"),'keyboard reaches next link with visible focus')
      if (width===390) await screenshot(width+'-'+language+'-menu')
      await click('.mobile-nav a[href="#bewertungen"]')
      check(await evaluate("document.activeElement.id==='bewertungen' && document.querySelector('[data-mobile-nav]').inert && document.querySelector('#bewertungen').getBoundingClientRect().top>=document.querySelector('.site-header').offsetHeight-1"),'review link closes menu and focuses visible section')
      await click('[data-menu-toggle]')
      await press('Escape','Escape',27)
      check(await evaluate("document.activeElement.matches('[data-menu-toggle]') && document.querySelector('[data-mobile-nav]').inert"),'Escape restores focus')
    } else {
      for (const target of ['vorstellung','bewertungen']) {
        await click('.desktop-nav a[href="#'+target+'"]')
        check(await evaluate(`location.hash==='#${target}' && document.getElementById('${target}').getBoundingClientRect().top>=document.querySelector('.site-header').offsetHeight-1`),'desktop link reaches '+target+' below sticky header')
      }
    }
    cases.push({width,language})
    console.log('Navigation checked '+name)
  }
  await send('Emulation.setDeviceMetricsOverride',{width:320,height:360,deviceScaleFactor:1,mobile:false})
  await send('Page.navigate',{url:base})
  await wait(400)
  await click('[data-menu-toggle]')
  const shortMenu=await evaluate("(() => {const menu=document.querySelector('.mobile-nav-card'),links=[...menu.querySelectorAll('a')],rects=links.map(e=>e.getBoundingClientRect());return {scrollable:menu.scrollHeight>menu.clientHeight,fit:rects.every((r,i)=>r.height>=44&&(!i||rects[i-1].bottom<=r.top+1))}})()")
  assert(shortMenu.scrollable&&shortMenu.fit,'short mobile menu scrolls without overlapping links')
  return cases
}
