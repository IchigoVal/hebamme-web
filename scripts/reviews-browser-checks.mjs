// Uses the repository's existing Edge/CDP transport, without a dependency.
// node scripts/deep-pass-browser.mjs http://127.0.0.1:4175/hebamme-web/ native-reviews
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import os from 'node:os'

export async function runReviewChecks({base,send,evaluate,screenshot,wait,click,press,assert,requests}) {
  const data = JSON.parse(await readFile(new URL('../src/data/reviews/reviews.public.json', import.meta.url), 'utf8'))
  const baselineFile = await readFile(path.join(os.tmpdir(), 'hebamme-astra-baseline/report.json'), 'utf8').catch(error => {
    if (error.code !== 'ENOENT') throw error
    return null
  })
  const baseline = baselineFile ? JSON.parse(baselineFile).report : []
  if (!baselineFile) console.log('No prior baseline in TEMP; geometry comparison skipped.')
  const results = []
  const frame = () => evaluate('new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))')
  const count = () => evaluate("document.querySelectorAll('.review').length")
  const focus = selector => evaluate(`document.querySelector(${JSON.stringify(selector)}).focus()`)
  const scroll = async selector => {
    await evaluate(`document.querySelector(${JSON.stringify(selector)}).scrollIntoView({block:'start',behavior:'instant'})`)
    await wait(750)
  }
  for (const width of [320, 375, 390, 768, 1024, 1440]) {
    for (const language of ['de', 'ru']) {
      const height = width < 720 ? 844 : 1000
      const label = `${width}/${language}`
      const check = (value, description) => assert(value, `${label}: ${description}`)
      await send('Emulation.setDeviceMetricsOverride', {width,height,deviceScaleFactor:1,mobile:width<720})
      await send('Emulation.setEmulatedMedia', {features:[]})
      await send('Page.navigate', {url:base})
      await wait(500)
      await click(`[data-lang-option="${language}"]`)
      await evaluate('document.fonts.ready')
      await scroll('#bewertungen')
      const layout = await evaluate(`({
        width:innerWidth, language:document.documentElement.lang,
        overflow:document.documentElement.scrollWidth>innerWidth,
        clipped:[...document.querySelectorAll('#bewertungen h2,#bewertungen h3,#bewertungen p,#bewertungen button,#bewertungen select')].filter(e=>e.clientWidth && e.scrollWidth>e.clientWidth+1).map(e=>e.textContent),
        total:document.querySelector('.reviews-total').textContent,
        counts:document.querySelector('.reviews-counts').textContent,
        distribution:document.querySelector('.reviews-distribution').textContent,
        source:document.querySelector('.reviews-source').textContent,
        sections:[...document.querySelectorAll('main > section:not(#bewertungen)')].map(s=>({id:s.id,height:s.offsetHeight})),
        media:document.querySelectorAll('#bewertungen img,#bewertungen iframe').length,
        targets:[...document.querySelectorAll('#bewertungen button,#bewertungen select')].filter(e=>!e.hidden).every(e=>e.getBoundingClientRect().height>=44),
      })`)
      results.push(layout)
      check(!layout.overflow && !layout.clipped.length, 'no horizontal document or text overflow')
      check(layout.total.includes('66') && layout.counts.includes('62') && layout.counts.includes('4') && layout.distribution.includes('65') && layout.distribution.includes('2'), '66/62/4 counts and honest star distribution')
      check(layout.source.includes('21.09.2026'), 'snapshot date is explicit')
      check(layout.media===0 && layout.targets, 'no review images/iframes; 44px controls')
      check(await count()===6, 'six initial reviews')
      const original = baseline.find(item=>item.width===width && item.language===language)
      if (original) check(layout.sections.every(section=>original.sections.find(item=>item.id===section.id)?.height===section.height), 'all protected section heights unchanged from baseline')
      if ([320,390,1440].includes(width)) {
        await screenshot(`${width}-${language}-reviews-viewport`)
        const rect=await evaluate(`(() => {const r=document.querySelector('#bewertungen').getBoundingClientRect();return {x:0,y:r.top+scrollY,width:innerWidth,height:r.height}})()`)
        await screenshot(`${width}-${language}-reviews-section`,rect)
      }

      await press('Tab','Tab',9)
      await focus('.review-toggle')
      check(await evaluate(`document.querySelector('.review-toggle')===document.activeElement && getComputedStyle(document.activeElement).outlineStyle!=='none'`), 'visible keyboard focus')
      await press('Enter','Enter',13)
      check(await evaluate(`document.querySelector('.review-toggle').getAttribute('aria-expanded')==='true' && document.querySelector('.review-text').textContent===${JSON.stringify(data.reviews[0].text)}`), 'Enter opens exact full review')
      await press(' ','Space',32)
      check(await evaluate(`document.querySelector('.review-toggle').getAttribute('aria-expanded')==='false' && document.activeElement===document.querySelector('.review-toggle')`), 'Space collapses with focus preserved')
      await click('.reviews-more')
      check(await count()===12, 'append next six')
      check(await evaluate(`document.activeElement===document.querySelectorAll('.review')[6]`), 'focus continues at first appended review')
      await press('Tab','Tab',9)
      check(await evaluate(`document.activeElement===document.querySelectorAll('.review')[6].querySelector('button')`), 'Tab reaches appended review control')
      const safe = await evaluate(`(() => {const r=document.activeElement.getBoundingClientRect(),dock=document.querySelector('.mobile-contact');return r.top>=document.querySelector('.site-header').getBoundingClientRect().bottom && (dock.inert || r.bottom<=dock.getBoundingClientRect().top)})()`)
      check(safe, 'focused control clears header and mobile dock')
      const other = language==='de' ? 'ru' : 'de'
      await click(`[data-lang-option="${other}"]`)
      check(await count()===12 && await evaluate(`document.querySelector('.review-toggle').textContent===${JSON.stringify(other==='de'?'Weiterlesen':'Читать полностью')}`), 'language switch localizes controls and preserves loaded reviews')
      await click(`[data-lang-option="${language}"]`)
      await scroll('.reviews-sort')
      await focus('#reviews-order')
      await press('End','End',35)
      await frame()
      check(await evaluate(`document.querySelector('#reviews-order').value==='lowest' && document.querySelector('.review-author').textContent==='Andrea Michel' && document.querySelector('.review-rating').getAttribute('aria-label').startsWith('2 ')`), 'lowest-first exposes 2-star review by keyboard')
      check(await count()===6, 'sorting resets to six without filtering')
      if ([320,1440].includes(width)) await screenshot(`${width}-${language}-reviews-lowest`)
      await press('Home','Home',36)
      await frame()
      check(await evaluate(`document.querySelector('.review-author').textContent===${JSON.stringify(data.reviews[0].author)}`), 'default restores source order')
      console.log(`Review layout and controls checked ${label}`)
    }
  }

  // Read every entry, including the final partial batch. Text equality is checked in the DOM.
  for (let step=0;step<10;step++) await click('.reviews-more')
  assert(await count()===62, 'all 62 reviews reachable; final batch has two, no duplicates')
  assert(await evaluate(`document.querySelector('.reviews-more').hidden && document.querySelector('.reviews-progress').textContent.includes('62') && document.activeElement===document.querySelectorAll('.review')[60]`), 'completion status, hidden exhausted action and stable final focus')
  await evaluate(`document.querySelectorAll('.review-toggle[aria-expanded="false"]').forEach(button=>button.click())`)
  const actual = await evaluate(`[...document.querySelectorAll('.review-item')].map(item=>({id:item.dataset.reviewId,text:item.querySelector('.review-text').textContent}))`)
  assert(JSON.stringify(actual)===JSON.stringify(data.reviews.map(({id,text})=>({id,text}))), 'every rendered full text exactly equals normalized authorized source')
  assert(await evaluate(`document.querySelectorAll('.review-text span[lang="ru"]').length>0 && document.querySelectorAll('.review-text span[lang="hu"]').length>0 && document.querySelectorAll('.review-text span[lang="en"]').length>0`), 'original Russian, Hungarian and English carry language attributes')
  await click('[data-lang-option="de"]')
  assert(await evaluate(`document.querySelectorAll('.review-toggle[aria-expanded="true"]').length===document.querySelectorAll('.review-toggle').length`), 'expanded state survives language change')
  await click('.reviews-reset')
  assert(await count()===6 && await evaluate(`document.activeElement===document.querySelector('.review') && document.querySelector('.reviews-reset').hidden`), 'reset restores compact reading with sensible focus')

  await send('Emulation.setDeviceMetricsOverride',{width:320,height:640,deviceScaleFactor:1,mobile:true})
  await send('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'reduce'}]})
  await send('Page.navigate',{url:base})
  await wait(500)
  await scroll('#bewertungen')
  await click('.reviews-more')
  assert(await count()===12 && await evaluate(`getComputedStyle(document.documentElement).scrollBehavior==='auto' && parseFloat(getComputedStyle(document.querySelector('.reviews-more')).transitionDuration)<.001 && !document.documentElement.classList.contains('reveal-ready')`), 'reduced motion: immediate, visible review interactions')
  await focus('.review-toggle')
  await press('Enter','Enter',13)
  await screenshot('320-de-reviews-expanded-reduced-motion')

  // Browser zoom is represented by a 640px layout viewport on a 1280px desktop.
  await send('Emulation.setDeviceMetricsOverride',{width:640,height:450,deviceScaleFactor:2,mobile:false})
  await scroll('#bewertungen')
  assert(await evaluate(`document.documentElement.scrollWidth<=innerWidth && [...document.querySelectorAll('#bewertungen button,#bewertungen select')].filter(e=>!e.hidden).every(e=>e.getBoundingClientRect().height>=44)`), '200% equivalent desktop reflow retains readable controls')
  await send('Emulation.setDeviceMetricsOverride',{width:320,height:360,deviceScaleFactor:1,mobile:true})
  await send('Emulation.setSafeAreaInsetsOverride',{insets:{bottom:34}})
  await click('.reviews-more')
  assert(await count()===18 && await evaluate(`document.activeElement===document.querySelectorAll('.review')[12] && document.querySelector('.mobile-contact').inert && document.documentElement.scrollWidth<=innerWidth`), 'short 320×360 viewport with 34px safe area remains usable')
  await send('Emulation.setSafeAreaInsetsOverride',{insets:{bottom:0}})

  for (const filename of ['impressum.html','datenschutz.html']) {
    await send('Page.navigate',{url:new URL(filename,base).href})
    await wait(400)
    assert(await evaluate(`Boolean(document.querySelector('h1')?.textContent)`), `${filename}: legal page still loads`)
  }
  await send('Emulation.setScriptExecutionDisabled',{value:true})
  await send('Page.navigate',{url:base})
  await wait(400)
  assert(await evaluate(`document.querySelector('[data-reviews]').textContent.includes('66 Google-Bewertungen') && document.querySelector('noscript').textContent.includes('JavaScript')`), 'no-JavaScript fallback gives real counts and reading guidance')
  await send('Emulation.setScriptExecutionDisabled',{value:false})
  const external = [...new Set(requests.filter(url=>/^https?:/.test(url) && new URL(url).origin!==new URL(base).origin))]
  assert(external.length===0, `no external requests on home, interactions or legal pages: ${external.join(', ')}`)
  return results
}
