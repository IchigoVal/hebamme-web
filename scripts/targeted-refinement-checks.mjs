// Additional real-viewport checks. Runs through the existing Edge/CDP transport.
// refinement-before: capture the starting state; refinement: assert the four changes;
// end-user-audit: inspect the committed site without changing source files.
export async function runTargetedChecks({base,phase,matrix,send,evaluate,screenshot,wait,click,press,assert}) {
  const results = []
  const checking = phase === 'refinement'
  const shot = async (width, language, name) => screenshot(`viewport-${width}-${language}-${name}`)
  const go = async (selector, block = 'start') => {
    await evaluate(`document.querySelector(${JSON.stringify(selector)}).scrollIntoView({block:${JSON.stringify(block)},behavior:'instant'})`)
    await wait(850)
    if(selector==='#hebammenhilfe') {
      await evaluate(`window.scrollBy({top:Math.max(0,document.querySelector('.hero-section').getBoundingClientRect().bottom-document.querySelector('.site-header').getBoundingClientRect().bottom+1),behavior:'instant'})`)
      await wait(200)
    }
  }
  const visible = () => evaluate(`(() => {const e=document.querySelector('.mobile-contact');return !!e && !e.inert && getComputedStyle(e).visibility==='visible' && getComputedStyle(e).display!=='none'})()`)
  const toggleMenu = async () => {
    // The sticky header is already visible; centering it would scroll the underlying page.
    const point = await evaluate(`(() => {const r=document.querySelector('[data-menu-toggle]').getBoundingClientRect();return {x:r.x+r.width/2,y:r.y+r.height/2}})()`)
    await send('Input.dispatchMouseEvent',{type:'mousePressed',button:'left',clickCount:1,...point})
    await send('Input.dispatchMouseEvent',{type:'mouseReleased',button:'left',clickCount:1,...point})
    await wait(250)
  }
  for (const [width,language] of matrix) {
    const height = width===1440 ? 900 : width===390 ? 844 : 700
    await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:false})
    await send('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'no-preference'}]})
    await send('Page.navigate',{url:base})
    await wait(800)
    await click(`[data-lang-option="${language}"]`)
    await evaluate(`document.fonts.ready;window.scrollTo({top:0,behavior:'instant'})`)
    await wait(700)
    await shot(width,language,'hero')
    if(checking) assert(!await visible(),`${width}/${language}: dock hidden on arrival`)
    const dimensions = await evaluate(`(() => {
      const de=document.querySelector('[data-lang-option="de"]').getBoundingClientRect(),ru=document.querySelector('[data-lang-option="ru"]').getBoundingClientRect();
      return {languageGap:ru.left-de.right,languageTargets:[de,ru].map(r=>({width:r.width,height:r.height})),headerHeight:document.querySelector('.site-header').offsetHeight,identityHeight:document.querySelector('.contact-identity').offsetHeight,contactHeight:document.querySelector('#kontakt').offsetHeight,heroHeight:document.querySelector('.hero-section').offsetHeight,heroImageHeight:document.querySelector('.hero-image').offsetHeight,orientationHeight:document.querySelector('#hebammenhilfe').offsetHeight,h1Size:getComputedStyle(document.querySelector('h1')).fontSize,phone:document.querySelector('.contact-direct-phone').href};
    })()`)
    results.push({width,language,height,...dimensions})
    if(checking) {
      assert(dimensions.languageTargets.every(r=>r.width>=44 && r.height>=44) && (width>719 || dimensions.languageGap>=12),`${width}/${language}: separate 44px language targets with mobile gap`)
      if(width<720) assert(await evaluate(`(() => {const brand=document.querySelector('.header-inner > .brand').getBoundingClientRect(),menu=document.querySelector('.menu-toggle').getBoundingClientRect(),lang=document.querySelector('.lang-switch').getBoundingClientRect();return brand.left>=menu.right+8 && lang.left>=brand.right+8})()`),`${width}/${language}: header controls do not crowd brand`)
      assert(dimensions.phone==='tel:+4917623488396',`${width}/${language}: direct phone destination`)
      assert(await evaluate(`getComputedStyle(document.querySelector('.contact-privacy-note')).borderTopWidth==='0px'`),`${width}/${language}: duplicate contact divider removed`)
    }
    for (const [name,selector,block] of [['orientation','#hebammenhilfe','start'],['cards','[data-services-controls]','center'],['reviews','#bewertungen','start'],['faq','#wissen','start'],['contact','#kontakt','start'],['inquiry','#ablauf','start'],['end','.site-footer','end']]) {
      if (width>719 && name==='cards') await go('#leistungen')
      else await go(selector,block)
      await shot(width,language,name)
      if(checking) {
        const expected=width<720 && ['orientation','cards','reviews'].includes(name)
        if(name!=='faq') assert(await visible()===expected,`${width}/${language}: dock visibility at ${name}`)
      }
    }
    if(width<720) {
      await go('#hebammenhilfe')
      if(checking) {
        assert(await evaluate(`document.querySelector('.mobile-contact a').href==='https://wa.me/4917623488396' && document.querySelector('.mobile-contact a').getBoundingClientRect().height>=48`),`${width}/${language}: WhatsApp destination and 48px target`)
        await press('Tab','Tab',9)
        await go('#hebammenhilfe')
        await evaluate(`document.querySelector('.mobile-contact a').focus({preventScroll:true})`)
        assert(await evaluate(`document.activeElement.matches('.mobile-contact a:focus-visible')`),`${width}/${language}: dock keyboard focus`)
        await shot(width,language,'dock-focus')
      }
      await toggleMenu()
      await shot(width,language,'menu')
      if(checking) assert(!await visible(),`${width}/${language}: dock hidden and inert in menu`)
      await press('Escape','Escape',27)
      if(checking) assert(await visible(),`${width}/${language}: dock returns after menu closes`)
      if(checking) {
        await go('[data-services-controls]','center')
        await evaluate(`(() => {const target=document.querySelector('[data-services-next]');window.scrollBy({top:target.getBoundingClientRect().bottom-innerHeight+10,behavior:'instant'})})()`)
        await wait(200)
        await evaluate(`document.querySelector('[data-services-next]').focus({preventScroll:true})`)
        await wait(200)
        assert(await evaluate(`document.querySelector('[data-services-next]').getBoundingClientRect().bottom<=document.querySelector('.mobile-contact').getBoundingClientRect().top-10`),`${width}/${language}: focused card control stays above dock`)
      }
      await go('#wissen')
      await click('.faq-list summary')
      await shot(width,language,'faq-open')
      if(checking) {
        await evaluate(`document.querySelectorAll('.faq-list details').forEach(e=>e.open=true)`)
        await go('#wissen')
        assert(await visible(),`${width}/${language}: dock available in expanded FAQ before contact`)
        await shot(width,language,'expanded-faq-dock')
        await evaluate(`document.querySelectorAll('.faq-list details').forEach(e=>e.open=false)`)
      }
      await go('.contact-direct-phone','center')
      await evaluate(`document.querySelector('.contact-direct-phone').focus({preventScroll:true})`)
      await press('Tab','Tab',9)
      await press('Tab','Tab',9,8)
      if(checking) assert(await evaluate(`document.activeElement.matches('.contact-direct-phone:focus-visible')`),`${width}/${language}: phone keyboard focus`)
      await shot(width,language,'phone-focus')
      if(checking) {
        await go('#hebammenhilfe')
        await send('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'reduce'}]})
        assert(await evaluate(`parseFloat(getComputedStyle(document.querySelector('.mobile-contact')).transitionDuration)<.001`),`${width}/${language}: dock respects reduced motion`)
        await go('.hero-section')
        assert(!await visible(),`${width}/${language}: dock hides when returning to hero`)
      }
      if(phase==='end-user-audit') {
        await go('[data-services-track]','center')
        await evaluate(`document.querySelector('[data-services-track]').focus({preventScroll:true})`)
        for(let card=1;card<=4;card++) {
          if(card>1) await press('ArrowRight','ArrowRight',39)
          await wait(700)
          await shot(width,language,`card-${card}`)
        }
      }
    }
    assert(await evaluate(`document.documentElement.scrollWidth<=document.documentElement.clientWidth`),`${width}/${language}: final viewport has no overflow`)
  }
  if(checking) {
    await send('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,mobile:false})
    await send('Page.navigate',{url:base})
    await wait(800)
    await go('#hebammenhilfe')
    await send('Emulation.setSafeAreaInsetsOverride',{insets:{top:0,left:0,right:0,bottom:34}})
    await wait(200)
    assert(await evaluate(`parseFloat(getComputedStyle(document.querySelector('.mobile-contact')).paddingBottom)===42`),'34px safe area: dock has 42px bottom padding')
    await shot(390,'de','safe-area')
    await send('Emulation.setSafeAreaInsetsOverride',{insets:{top:0,left:0,right:0,bottom:0}})
    await send('Emulation.setDeviceMetricsOverride',{width:1440,height:900,deviceScaleFactor:1,mobile:false})
    await wait(200)
    assert(!await visible(),'mobile to desktop resize removes dock')
  }
  // The short-display menu is observed for the subsequent audit, not redesigned here.
  for (const language of ['de','ru']) {
    for(const shortHeight of phase==='end-user-audit' ? [480,360] : [480]) {
    await send('Emulation.setDeviceMetricsOverride',{width:320,height:shortHeight,deviceScaleFactor:1,mobile:false})
    await send('Page.navigate',{url:base})
    await wait(700)
    await click(`[data-lang-option="${language}"]`)
    await toggleMenu()
    await shot(320,language,`short-menu-${shortHeight}`)
    results.push({case:`320x${shortHeight}/${language}`,menu:await evaluate(`(() => {const e=document.querySelector('.mobile-nav-card'),a=e.querySelector('.btn'),r=a.getBoundingClientRect();return {height:e.clientHeight,scrollHeight:e.scrollHeight,ctaTop:r.top,ctaBottom:r.bottom,viewport:innerHeight,ctaHeight:r.height}})()`)})
    }
  }
  return results
}
