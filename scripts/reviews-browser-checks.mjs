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
  const results = []
  const frame = () => evaluate('new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))')
  const count = () => evaluate("document.querySelectorAll('.review').length")
  const focus = selector => evaluate('document.querySelector(' + JSON.stringify(selector) + ').focus()')
  const scroll = async selector => {
    await evaluate('document.querySelector(' + JSON.stringify(selector) + ").scrollIntoView({block:'start',behavior:'instant'})")
    await wait(750)
  }
  const gridGeometry = () => evaluate("JSON.stringify([...document.querySelectorAll('.review')].map(e=>{const r=e.getBoundingClientRect();return {x:r.x,y:r.y+scrollY,width:r.width,height:r.height}}))")
  const hasFocus = () => evaluate("document.querySelector('.review-reader').contains(document.activeElement)")
  for (const width of [320, 375, 390, 768, 1024, 1440]) {
    for (const language of ['de', 'ru']) {
      const height = width < 720 ? 844 : 1000
      const label = width + '/' + language
      const check = (value, description) => assert(value, label + ': ' + description)
      await send('Emulation.setDeviceMetricsOverride', {width,height,deviceScaleFactor:1,mobile:width<720})
      await send('Emulation.setEmulatedMedia', {features:[]})
      await send('Page.navigate', {url:base})
      await wait(500)
      await click('[data-lang-option="' + language + '"]')
      await evaluate('document.fonts.ready')
      await scroll('#bewertungen')
      const layout = await evaluate("({width:innerWidth,language:document.documentElement.lang,overflow:document.documentElement.scrollWidth>innerWidth,clipped:[...document.querySelectorAll('#bewertungen h2,#bewertungen h3,#bewertungen p,#bewertungen button')].filter(e=>e.clientWidth && e.scrollWidth>e.clientWidth+1).map(e=>e.textContent),total:document.querySelector('.reviews-total').textContent,hasCountLine:!!document.querySelector('.reviews-counts'),average:document.querySelector('.reviews-average').textContent,source:document.querySelector('.reviews-source').textContent,sections:[...document.querySelectorAll('main > section:not(#bewertungen)')].map(s=>({id:s.id,height:s.offsetHeight})),media:document.querySelectorAll('#bewertungen img,#bewertungen iframe').length,targets:[...document.querySelectorAll('#bewertungen button')].filter(e=>e.getClientRects().length).every(e=>e.getBoundingClientRect().height>=44)})")
      results.push(layout)
      check(!layout.overflow && !layout.clipped.length, 'no horizontal document or text overflow')
      check(layout.total.includes('66') && !layout.hasCountLine, '66 total retained; text/rating-only count line removed')
      check(layout.average=== (language==='de'?'Google-Bewertung im Durchschnitt':'Средняя оценка в Google'), 'average clearly labelled in UI language')
      check(layout.source.includes('21.09.2026'), 'subtle snapshot date remains explicit')
      check(await evaluate("!document.querySelector('#bewertungen select,.reviews-sort,.reviews-toolbar,.reviews-distribution')"), 'no sorting, filters, old toolbar or rating distribution')
      check(layout.media===0 && layout.targets, 'no review media; all visible controls at least 44px')
      check(await count()===6, 'six initial reviews')
      check(await evaluate("document.querySelector('.review-date').textContent===" + JSON.stringify(language==='de'?'vor 2 Monaten':'2 месяца назад')), 'Google relative date localized without altering review text')
      check(await evaluate("getComputedStyle(document.querySelector('.review-rating')).fontSize==='16px' && getComputedStyle(document.querySelector('.review-toggle'),'::after').content==='none'"), 'larger warm stars and one read action without plus')
      const clamp = await evaluate("[...document.querySelectorAll('.review-quote .review-text')].map(e=>({height:e.clientHeight,line:parseFloat(getComputedStyle(e).lineHeight),clamp:getComputedStyle(e).webkitLineClamp,scroll:e.scrollHeight,hasRead:!e.closest('.review').querySelector('.review-toggle').hidden}))")
      check(clamp.every(p=>p.clamp==='6' && Math.abs(p.height-6*p.line)<1 && p.hasRead===(p.scroll>p.height+1)), 'exactly six CSS lines; read action follows actual overflow')
      const original = baseline.find(item=>item.width===width && item.language===language)
      if (original) check(layout.sections.every(section=>original.sections.find(item=>item.id===section.id)?.height===section.height), 'all protected section heights unchanged')
      if ([320,390,1440].includes(width)) {
        await screenshot(width+'-'+language+'-reviews-viewport')
        const rect = await evaluate("(() => {const r=document.querySelector('#bewertungen').getBoundingClientRect();return {x:0,y:r.top+scrollY,width:innerWidth,height:r.height}})()")
        await screenshot(width+'-'+language+'-reviews-section',rect)
      }

      await press('Tab','Tab',9)
      await focus('.review-toggle')
      check(await evaluate("document.activeElement===document.querySelector('.review-toggle') && getComputedStyle(document.activeElement).outlineStyle!=='none'"), 'visible keyboard focus')
      const initialGrid = await gridGeometry()
      await press('Enter','Enter',13)
      await frame()
      check(await evaluate("document.querySelector('.review-reader').open && document.querySelector('.review-reader-quote .review-text').textContent===" + JSON.stringify(data.reviews[0].text)), 'Enter opens exact full original in reading dialog')
      check(await hasFocus() && await evaluate("document.activeElement.id==='review-reader-author'"), 'dialog starts at author and beginning of text')
      check(await gridGeometry()===initialGrid, 'opening full text does not change grid geometry')
      await focus('[data-lang-option="de"]')
      check(await hasFocus(), 'native modal prevents focus entering background')
      await focus('.review-reader-close')
      await press('Tab','Tab',9)
      check(await evaluate("document.activeElement.classList.contains('review-reader-body')"), 'scrollable reading area reachable by keyboard')
      await press('Tab','Tab',9)
      check(await hasFocus(), 'keyboard focus remains in modal')
      await press('Escape','Escape',27)
      await frame()
      check(await evaluate("!document.querySelector('.review-reader').open && document.activeElement===document.querySelector('.review-toggle') && !document.documentElement.classList.contains('review-reader-open')"), 'Escape restores trigger focus and page scrolling')
      check(await gridGeometry()===initialGrid, 'closing reader leaves grid unchanged')

      // A much longer text must fit both desktop and mobile, with a reachable close action.
      await click('.review-item:nth-child(4) .review-toggle')
      const reader = await evaluate("(() => {const d=document.querySelector('.review-reader'),r=d.getBoundingClientRect(),b=d.querySelector('.review-reader-body'),c=d.querySelector('button').getBoundingClientRect();return {open:d.open,fits:r.left>=0&&r.right<=innerWidth&&r.top>=0&&r.bottom<=innerHeight,bodyOverflow:b.scrollWidth>b.clientWidth+1,closeVisible:c.top>=r.top&&c.bottom<=r.bottom,text:d.querySelector('.review-text').textContent}})()")
      check(reader.open && reader.fits && !reader.bodyOverflow && reader.closeVisible && reader.text===data.reviews[3].text, 'long reading view fits without horizontal overflow')
      if ([320,390,1440].includes(width)) await screenshot(width+'-'+language+'-reviews-reader')
      await focus('.review-reader-body')
      await press('End','End',35)
      await wait(250)
      check(await evaluate("(() => {const b=document.querySelector('.review-reader-body');return b.scrollTop+b.clientHeight>=b.scrollHeight-2})()"), 'keyboard can reach end of long review')
      await click('.review-reader-close')
      check(await evaluate("document.activeElement===document.querySelectorAll('.review-toggle')[3]"), 'close action restores exact review focus')
      await click('.reviews-more')
      await frame()
      check(await count()===12, 'next six appended')
      check(await evaluate("document.activeElement===document.querySelectorAll('.review')[6]"), 'focus continues at first appended review')
      await focus('.reviews-more')
      await press('Enter','Enter',13)
      await frame()
      check(await count()===18, 'keyboard loads a third review row group')
      const firstEighteen = await evaluate("[...document.querySelectorAll('.review-item')].map(e=>e.dataset.reviewId)")
      check(JSON.stringify(firstEighteen)===JSON.stringify(data.reviews.slice(0,18).map(r=>r.id)), 'all appended reviews retain exact original order')
      const other = language==='de'?'ru':'de'
      await click('[data-lang-option="'+other+'"]')
      await frame()
      check(await count()===18 && await evaluate("document.querySelector('.review-toggle').textContent===" + JSON.stringify(other==='de'?'Weiterlesen':'Читать полностью')), 'language switch preserves loaded rows and localizes reading controls')
      if ([390,1440].includes(width)) {
        await scroll('.review-item:nth-child(7)')
        await screenshot(width+'-'+language+'-reviews-multiple-rows')
        await scroll('.reviews-footer')
        await screenshot(width+'-'+language+'-reviews-navigation')
      }
      const navigation = await evaluate("(() => {const p=document.querySelector('.reviews-progress').getBoundingClientRect(),b=document.querySelector('.reviews-more').getBoundingClientRect();return Math.abs(p.x+p.width/2-b.x-b.width/2)<2 && b.top-p.bottom<25})()")
      check(navigation, 'count and load-more form one centered navigation group')
      console.log('Review polish checked '+label)
    }
  }

  // The final batch contains two. Verify every text, date and ID in unchanged sequence.
  for (let step=0;step<8;step++) await click('.reviews-more')
  await frame()
  assert(await count()===62, 'all 62 reviews reachable; final batch has two')
  assert(await evaluate("document.querySelector('.reviews-more').hidden && document.activeElement===document.querySelectorAll('.review')[60]"), 'completion hides exhausted action and keeps meaningful focus')
  const actual = await evaluate("[...document.querySelectorAll('.review-item')].map(e=>({id:e.dataset.reviewId,text:e.querySelector('.review-text').textContent}))")
  assert(JSON.stringify(actual)===JSON.stringify(data.reviews.map(({id,text})=>({id,text}))), 'all exact original texts and IDs retained in original order')
  assert(await evaluate("document.querySelectorAll('.review-item')[40].querySelector('.review-author').textContent==='Andrea Michel' && document.querySelectorAll('.review-item')[40].querySelector('.review-rating').getAttribute('aria-label').startsWith('2 ')"), '2-star review remains at original position 41')
  assert(await evaluate("[...document.querySelectorAll('.review-item')].every(e=>e.querySelector('.review-date').textContent && e.querySelector('.review-date').title.includes('21.09.2026'))"), 'all reviews have captured Google date with snapshot context')
  assert(await evaluate("document.querySelectorAll('.review-text span[lang=\"ru\"]').length>0 && document.querySelectorAll('.review-text span[lang=\"hu\"]').length>0 && document.querySelectorAll('.review-text span[lang=\"en\"]').length>0"), 'original Russian, Hungarian and English language attributes retained')
  await scroll('.review-item:nth-child(41)')
  await screenshot('1440-de-reviews-two-stars-original-position')
  await click('.reviews-reset')
  assert(await count()===6 && await evaluate("document.activeElement===document.querySelector('.review') && document.querySelector('.reviews-reset').hidden"), 'reset returns to six with sensible focus')

  await send('Emulation.setDeviceMetricsOverride',{width:320,height:640,deviceScaleFactor:1,mobile:true})
  await send('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'reduce'}]})
  await scroll('#bewertungen')
  await click('.review-toggle')
  assert(await evaluate("document.querySelector('.review-reader').open && getComputedStyle(document.documentElement).scrollBehavior==='auto' && parseFloat(getComputedStyle(document.querySelector('.review-toggle')).transitionDuration)<.001"), 'reduced motion: immediate readable dialog')
  await send('Emulation.setDeviceMetricsOverride',{width:320,height:360,deviceScaleFactor:1,mobile:true})
  await send('Emulation.setSafeAreaInsetsOverride',{insets:{bottom:34}})
  await frame()
  assert(await evaluate("(() => {const r=document.querySelector('.review-reader').getBoundingClientRect(),c=document.querySelector('.review-reader-close').getBoundingClientRect();return r.top>=0&&r.bottom<=innerHeight&&c.bottom<innerHeight&&document.querySelector('.review-reader-body').clientHeight>100})()"), 'short 320×360 viewport retains close action and reading area')
  await screenshot('320-ru-reviews-reader-short-reduced')
  await press('Escape','Escape',27)
  await frame()
  await send('Emulation.setSafeAreaInsetsOverride',{insets:{bottom:0}})
  await send('Emulation.setDeviceMetricsOverride',{width:640,height:450,deviceScaleFactor:2,mobile:false})
  await scroll('#bewertungen')
  assert(await evaluate("document.documentElement.scrollWidth<=innerWidth && [...document.querySelectorAll('#bewertungen button')].filter(e=>e.getClientRects().length).every(e=>e.getBoundingClientRect().height>=44)"), '200% equivalent reflow retains usable controls')

  // Resize can change whether a short review is clipped; controls must follow the measured result.
  await click('.reviews-more')
  await send('Emulation.setDeviceMetricsOverride',{width:1440,height:1000,deviceScaleFactor:1,mobile:false})
  await frame()
  assert(await evaluate("[...document.querySelectorAll('.review')].every(e=>{const p=e.querySelector('.review-text');return e.querySelector('.review-toggle').hidden===(p.scrollHeight<=p.clientHeight+1)})"), 'read controls update correctly after resizing')
  const external = [...new Set(requests.filter(url=>/^https?:/.test(url) && new URL(url).origin!==new URL(base).origin))]
  assert(external.length===0, 'no external requests: '+external.join(', '))
  return results
}
