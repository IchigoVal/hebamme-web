import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { createPublicReviews, normalizeLineBreaks, readReviewSources } from './prepare-reviews.mjs'

const { source, verified } = await readReviewSources()
const data = createPublicReviews(source, verified)

test('all 66 ratings contribute; exactly 62 nonempty texts and the 2-star review remain', () => {
  assert.deepEqual(data.summary, { total: 66, rating: 5, ratingOnly: 4, distribution: { 1: 0, 2: 1, 3: 0, 4: 0, 5: 65 } })
  assert.equal(data.reviews.length, 62)
  assert.equal(new Set(data.reviews.map(review => review.id)).size, 62)
  assert.equal(data.reviews.find(review => review.rating === 2).author, 'Andrea Michel')
  assert.ok(data.reviews.every(review => review.text.trim()))
})

test('exact source wording, original language and input order survive projection', () => {
  const textSources = source.reviews.filter(review => review.textOriginal?.trim())
  let originalReplacements = 0
  for (const [index, review] of data.reviews.entries()) {
    const raw = textSources[index]
    const original = verified.reviews.find(item => item.sourceReviewId === raw.id && item.verified)
    assert.equal(review.id, raw.id)
    assert.equal(review.author, raw.author)
    assert.equal(review.rating, raw.rating)
    assert.equal(review.text, normalizeLineBreaks(original?.text ?? raw.textOriginal))
    assert.equal(review.language, original?.language ?? raw.language)
    assert.equal(review.dateDisplayed, raw.dateDisplayed)
    if (review.text !== normalizeLineBreaks(raw.textOriginal)) originalReplacements++
  }
  assert.equal(originalReplacements, 5)
  assert.deepEqual([...new Set(data.reviews.map(review => review.language))].sort(), ['de', 'en', 'hu', 'ru'])
})

test('UI includes captured Google dates but excludes owner replies, avatars, media and profiles', () => {
  for (const review of data.reviews) assert.deepEqual(Object.keys(review), ['id', 'author', 'rating', 'text', 'language', 'dateDisplayed'])
  assert.doesNotMatch(JSON.stringify(data), /https?:\/\/|ownerResponse|avatarUrl|reviewMedia|localGuide|googleTranslation/)
  assert.equal(data.reviews.findIndex(review => review.rating === 2), 40)
})

test('invalid, duplicate or incomplete imports fail rather than silently losing reviews', () => {
  for (const mutate of [
    value => { value.reviews[1].id = value.reviews[0].id },
    value => { value.reviews.pop() },
    value => { value.reviews[0].rating = 0 },
    value => { value.reviews[0].textOriginal = '' },
    value => { value.capture.completeness = 'partial' },
    value => { value.reviews[0].author = 'Different author' },
    value => { value.reviews[0].dateDisplayed = '' },
  ]) {
    const changed = structuredClone(source)
    mutate(changed)
    assert.throws(() => createPublicReviews(changed, verified))
  }
})

test('generated data is reproducible and runtime has no third-party integration', async () => {
  const committed = JSON.parse(await readFile(new URL('../src/data/reviews/reviews.public.json', import.meta.url), 'utf8'))
  assert.deepEqual(committed, data)
  for (const pathname of ['../index.html', '../src/main.js', '../src/reviews.js', '../src/reviews.css']) {
    const code = await readFile(new URL(pathname, import.meta.url), 'utf8')
    assert.doesNotMatch(code, /elfsight/i)
  }
  const module = await readFile(new URL('../src/reviews.js', import.meta.url), 'utf8')
  assert.doesNotMatch(module, /https?:\/\/|fetch\(|innerHTML/)
})
