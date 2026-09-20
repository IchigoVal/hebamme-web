// Real-browser regression checks for the final bounded implementation pass.
// node scripts/deep-pass-browser.mjs <preview-url> final-sticky [390x844/de]
// final-implementation additionally checks contrast, short-height behavior and emergency links.
export async function runImplementationChecks({base,phase,caseFilter,send,evaluate,screenshot,wait,press,assert,translations}) {
  const final = phase === 'final-implementation'
  const cases = [[1440,900,'de'],[390,844,'de'],[390,844,'ru'],[320,640,'de'],[320,640,'ru'],[320,480,'de'],[320,480,'ru'],[320,360,'de'],[320,360,'ru'],[640,360,'de']]
    .filter(([w,h,lang])=>!caseFilter || `${w}x${h}/${lang}`===caseFilter)
  if (!cases.length) throw new Error('Unknown implementation viewport/language case')
  const results = []
  const frame = () => evaluate('new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)))')
  const scroll = async y => { await evaluate(`scrollTo({top:${y},behavior:'instant'})`); await frame() }
  const rect = selector => evaluate(`document.querySelector(${JSON.stringify(selector)}).getBoundingClientRect().toJSON()`)
  const at = async (selector, y) => { const r=await rect(selector); await scroll(await evaluate('scrollY')+r.top-y) }
  const visible = () => evaluate(`!document.querySelector('.mobile-contact').inert && getComputedStyle(document.querySelector('.mobile-contact')).visibility==='visible'`)
  const pointer = async selector => {
    const r=await rect(selector), point={x:r.x+r.width/2,y:r.y+r.height/2}
    await send('Input.dispatchMouseEvent',{type:'mousePressed',button:'left',clickCount:1,...point})
    await send('Input.dispatchMouseEvent',{type:'mouseReleased',button:'left',clickCount:1,...point})
    await frame()
  }
  const overlap = () => evaluate(`(() => {
    const dock=document.querySelector('.mobile-contact'),d=dock.getBoundingClientRect();
    if(dock.inert) return false;
    return [...document.querySelectorAll('[data-services-controls] button,[data-services-track]')].some(e=>{
      const r=e.getBoundingClientRect();return r.top<d.bottom && r.bottom>d.top && r.left<d.right && r.right>d.left;
    });
  })()`)
  for (const [width,height,language] of cases) {
    const label=`${width}x${height}/${language}`, name=`${width}x${height}-${language}`
    const mobile=width<720, enabled=mobile && height>420
    const check=(value,text)=>assert(value,`${label}: ${text}`)
    const shot=async suffix=>{await wait(250);await screenshot(`${name}-${suffix}`)}
    await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile})
    await send('Emulation.setTouchEmulationEnabled',{enabled:mobile,maxTouchPoints:1})
    await send('Emulation.setEmulatedMedia',{features:[]})
    await send('Page.navigate',{url:base})
    await wait(650)
    await pointer(`[data-lang-option="${language}"]`)
    await evaluate('document.fonts.ready')
    if(enabled) {
      // A large first-visit jump can finish revealing the action after the scroll event.
      const action=await rect('.contact-actions a')
      await at('.contact-actions a',height-action.height+2)
      await wait(1200)
      const revealed=await rect('.contact-actions a')
      check(revealed.bottom<=height-8 && !await visible(),'first-visit reveal hands over without another scroll')
      await shot('first-contact-reveal')
      await scroll(0)
    }
    // Visit the whole page before measuring boundaries: asynchronous provider layout must settle.
    for(let y=0;y<await evaluate('document.documentElement.scrollHeight');y+=height-140) {
      await scroll(y); await wait(90)
    }
    await wait(1600)
    for(const selector of ['.hero-image','.contact-visual']) {await at(selector,90);await wait(250)}
    await scroll(0);await wait(700)
    check(!await visible(),'hero: dock hidden')
    await shot('hero')
    const geometry=await evaluate(`Object.fromEntries(['.hero-section','.hero-copy h1','.hero-image','#hebammenhilfe','.orientation-number','.services-grid','.service-card','.service-card__body','.services-controls','.contact-identity','.contact-panel','.contact-copy','#kontakt'].map(s=>{const e=document.querySelector(s),c=getComputedStyle(e);return[s,{width:e.offsetWidth,height:e.offsetHeight,fontSize:c.fontSize,padding:c.padding,gap:c.gap,columns:c.gridTemplateColumns}]}))`)
    const layout=await evaluate(`({overflow:document.documentElement.scrollWidth>innerWidth,clipped:[...document.querySelectorAll('main h1,main h2,main h3,main p,main summary')].filter(e=>!e.closest('.reviews-widget')&&e.scrollWidth>e.clientWidth+1).map(e=>e.textContent),translated:[...document.querySelectorAll('[data-i18n]')].map(e=>({key:e.dataset.i18n,value:e.dataset.i18nAttr?e.getAttribute(e.dataset.i18nAttr):e.textContent.trim()}))})`)
    check(!layout.overflow && !layout.clipped.length,'no document/text overflow')
    check(layout.translated.every(item=>item.value===item.key.split('.').reduce((o,k)=>o?.[k],translations[language])),'translations unchanged and complete')
    const heroEnd=await evaluate(`document.querySelector('.hero-section').getBoundingClientRect().bottom+scrollY`)
    await scroll(heroEnd-30)
    check(await visible()===enabled,'after hero: expected dock state')
    await shot('before-cards')
    if(mobile) {
      await pointer('[data-menu-toggle]');await shot('menu')
      check(!await visible() && await evaluate(`document.querySelector('main').inert`),'open menu suppresses dock')
      const menu=await rect('.mobile-nav .btn')
      if(final) check(menu.top>=70 && menu.bottom<=height-8,'menu contact button fully visible with breathing room')
      if(final && height<=420) {
        await send('Emulation.setSafeAreaInsetsOverride',{insets:{bottom:34}});await frame()
        const safeMenu=await rect('.mobile-nav .btn')
        check(safeMenu.top>=70 && safeMenu.bottom<=height-34,'short menu contact button clears 34px safe area')
        await shot('menu-safe-34')
        await send('Emulation.setSafeAreaInsetsOverride',{insets:{bottom:0}});await frame()
      }
      await evaluate(`document.querySelector('.mobile-nav a:last-child').focus()`)
      await press('Tab','Tab',9)
      check(await evaluate(`document.activeElement.matches('[data-menu-toggle]')`),'menu focus loops')
      await press('Escape','Escape',27)
      check(await visible()===enabled && await evaluate(`document.querySelector('[data-mobile-nav]').inert`),'Escape restores page and correct dock state')
    }
    if(mobile) {
      // Slow complete sweeps in both directions. Assert the entire card zone, not just arrow centers.
      const sweep=await evaluate(`(async()=>{
        const track=document.querySelector('[data-services-track]'),controls=document.querySelector('[data-services-controls]');
        const a=track.getBoundingClientRect().top+scrollY-innerHeight-80,b=controls.getBoundingClientRect().bottom+scrollY;
        const frame=()=>new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)));
        const result={down:[],up:[],overlaps:0,visibleZone:0};
        for(const [direction,start,end,step] of [['down',a,b,12],['up',b,a,-12]]){
          let previous;
          for(let y=start;step>0?y<=end:y>=end;y+=step){
            scrollTo({top:y,behavior:'instant'});await frame();
            const dock=document.querySelector('.mobile-contact'),shown=!dock.inert,d=dock.getBoundingClientRect(),t=track.getBoundingClientRect(),c=controls.getBoundingClientRect();
            const header=document.querySelector('.site-header').getBoundingClientRect().bottom;
            if(shown && t.top<innerHeight && c.bottom>header) result.visibleZone++;
            if(shown && t.top<d.bottom && c.bottom>d.top) result.overlaps++;
            if(shown!==previous){result[direction].push({y:scrollY,shown});previous=shown;}
          }
        }
        return result;
      })()`)
      check(!sweep.overlaps && !sweep.visibleZone,'slow down/up: no dock anywhere in visible card zone')
      check(sweep.down.length===(enabled?3:1) && sweep.up.length===(enabled?3:1),'exactly one exit and return per card-zone traversal')
      // Small direction changes at each observed boundary must not chatter.
      let stable=true
      if(enabled) for(const boundary of [...sweep.down.slice(1),...sweep.up.slice(1)]) {
        const direction=sweep.down.includes(boundary)?1:-1
        await scroll(boundary.y-direction*60);await scroll(boundary.y)
        const expected=await visible()
        for(const offset of [3,-3,2,-2,0]){await scroll(boundary.y+offset);if(await visible()!==expected)stable=false}
      }
      check(stable,'card boundaries stable under small scroll reversals')
      await evaluate(`document.querySelector('[data-services-track]').focus()`)
      await press('Home','Home',36);await wait(500)
      for(let i=0;i<4;i++) {
        if(i){await press('ArrowRight','ArrowRight',39);await wait(500)}
        await at('[data-services-track]',86);await wait(450)
        check(!await visible() && !await overlap() && await evaluate(`Number(document.querySelector('[data-services-current]').textContent)===${i+1}`),`card ${i+1}: unobstructed and correct position`)
        await shot(`card-${i+1}`)
      }
      await press('End','End',35);await wait(500)
      check(await evaluate(`document.querySelector('[data-services-next]').disabled`),'End disables next')
      await press('Home','Home',36);await wait(500)
      await at('[data-services-controls]',height/2)
      await pointer('[data-services-next]');await wait(500)
      check(await evaluate(`document.querySelector('[data-services-current]').textContent==='02'`),'pointer next')
      await pointer('[data-services-prev]');await wait(500)
      check(await evaluate(`document.querySelector('[data-services-prev]').disabled`),'pointer previous returns to first')
      await at('[data-services-track]',86)
      const point={x:width-45,y:Math.min(height-120,200)}
      await send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{...point,id:1}]})
      for(let step=1;step<=6;step++){await send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x:point.x-step*(width-80)/6,y:point.y,id:1}]});await wait(30)}
      await send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});await wait(650)
      check(await evaluate(`Number(document.querySelector('[data-services-current]').textContent)>1`) && !await visible(),'touch swipe leaves dock suppressed')
      await at('[data-services-controls]',-80)
      check(await visible()===enabled,'dock returns after complete card zone')
      await shot('after-cards')
    }
    await at('#kontakt',86);await wait(800)
    check(await visible()===enabled,'contact beginning keeps WhatsApp available')
    await shot('contact-start')
    // Use fresh geometry after provider loading and language changes; never cache document offsets.
    const handoffs=[]
    for(const safe of mobile?[0,34]:[0]) {
      if(mobile) await send('Emulation.setSafeAreaInsetsOverride',{insets:{bottom:safe}})
      await frame()
      await at('.contact-actions a',height+60)
      const start=await evaluate('scrollY')
      for(const direction of ['down','up']) {
        const states=[]
        for(let step=0;step<=34;step++) {
          const amount=direction==='down'?step*6:(34-step)*6
          await scroll(start+amount)
          states.push(await evaluate(`(()=>{const dock=document.querySelector('.mobile-contact'),r=document.querySelector('.contact-actions a').getBoundingClientRect(),header=document.querySelector('.site-header').getBoundingClientRect().bottom;return {shown:!dock.inert,full:r.top>=header+8&&r.bottom<=innerHeight-${safe}-10,absent:r.top>=innerHeight-${safe},y:scrollY}})()`))
        }
        const transitions=states.filter((s,i)=>i&&s.shown!==states[i-1].shown)
        check(states.every(s=>!s.full||!s.shown) && states.every(s=>!s.absent||s.shown===enabled),`handoff ${direction}, safe ${safe}: regular button or dock available`)
        check(transitions.length===(enabled?1:0),`handoff ${direction}, safe ${safe}: one clean transition`)
        handoffs.push({safe,direction,transitions})
        if(enabled && transitions.length) {
          const boundary=transitions[0];let stable=true
          for(const offset of [2,-2,1,-1,0]){await scroll(boundary.y+offset);if(await visible()!==boundary.shown)stable=false}
          check(stable,`handoff ${direction}, safe ${safe}: small reversals do not flicker`)
        }
      }
      await at('.contact-actions a',height-safe-70)
      check(!await visible(),'reachable regular WhatsApp suppresses dock')
      await shot(`handoff-safe-${safe}`)
      if(mobile){await at('[data-services-controls]',height-60);check(!await visible() && !await overlap(),`safe ${safe}: no card control overlap`);await shot(`cards-controls-safe-${safe}`)}
    }
    if(mobile) await send('Emulation.setSafeAreaInsetsOverride',{insets:{bottom:0}})
    await at('#ablauf',86);await shot('contact-text')
    await send('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'reduce'}]})
    await scroll(heroEnd-30)
    check(await visible()===enabled && await evaluate(`parseFloat(getComputedStyle(document.querySelector('.mobile-contact')).transitionDuration)<0.001`),'reduced motion preserves visibility rules')
    await at('[data-services-track]',86)
    check(!await visible(),'reduced motion respects card exclusion')
    await send('Emulation.setEmulatedMedia',{features:[]})
    if(final) {
      // Added in the subsequent scoped phases: F3, F4 and F5.
      const colors=await evaluate(`['.orientation-section .section-heading p','.orientation-list p','.orientation-note','.contact-copy > p','.contact-privacy-note'].map(s=>{const e=document.querySelector(s);return {selector:s,color:getComputedStyle(e).color,background:getComputedStyle(e.closest('.orientation-section,.contact-panel')).backgroundColor}})`)
      const luminance=rgb=>{const c=rgb.match(/[\d.]+/g).slice(0,3).map(Number).map(x=>x/255).map(x=>x<=.04045?x/12.92:((x+.055)/1.055)**2.4);return .2126*c[0]+.7152*c[1]+.0722*c[2]}
      for(const c of colors){const a=luminance(c.color),b=luminance(c.background);c.ratio=(Math.max(a,b)+.05)/(Math.min(a,b)+.05)}
      check(colors.every(c=>c.ratio>=5),'targeted small text contrast at least 5:1')
      await at('.faq-list details:last-child summary',120)
      await pointer('.faq-list details:last-child summary');await wait(300)
      const emergency=await evaluate(`[...document.querySelectorAll('.faq-list details:last-child .faq-answer a')].map(a=>({text:a.textContent,href:a.getAttribute('href')}))`)
      check(JSON.stringify(emergency)===JSON.stringify([{text:'112',href:'tel:112'},{text:'116117',href:'tel:116117'}]),'unchanged emergency numbers have exact tel targets')
      await evaluate(`document.querySelector('.faq-list details:last-child summary').focus()`)
      await press('Tab','Tab',9)
      check(await evaluate(`document.activeElement.getAttribute('href')==='tel:112' && document.activeElement.matches(':focus-visible') && getComputedStyle(document.activeElement).outlineStyle!=='none'`),'emergency number receives visible keyboard focus')
      await shot('emergency-focus')
      await press('Tab','Tab',9)
      check(await evaluate(`document.activeElement.getAttribute('href')==='tel:116117' && document.activeElement.matches(':focus-visible')`),'second emergency number follows in keyboard order')
      results.push({width,height,language,geometry,handoffs,colors,emergency})
    } else results.push({width,height,language,geometry,handoffs})
    console.log(`Implementation checks completed: ${label}`)
  }
  return results
}
