import assert from 'node:assert/strict'
import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const directory = new URL('../src/data/reviews/', import.meta.url)
export const normalizeLineBreaks = text => text.replace(/\\r\\n|\\n/g, '\n')

export function createPublicReviews(source, verified) {
  assert.equal(source.capture.completeness, 'complete', 'A complete export is required')
  assert.equal(source.reviews.length, source.business.totalReported, 'Reported total differs from source records')
  assert.equal(source.reviews.length, source.capture.totalCaptured, 'Captured total differs from source records')
  assert.equal(new Set(source.reviews.map(review => review.id)).size, source.reviews.length, 'Duplicate review IDs')
  assert.ok(Number.isFinite(Date.parse(source.capture.capturedAt)), 'Missing capture date')

  const originals = new Map(verified.reviews.filter(review => review.verified).map(review => [review.sourceReviewId, review]))
  const distribution = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
  const reviews = []
  for (const review of source.reviews) {
    assert.ok(typeof review.id === 'string' && /^[a-zA-Z0-9_-]+$/.test(review.id), 'Invalid review ID')
    assert.ok(typeof review.author === 'string' && review.author.trim(), 'Missing author')
    assert.ok(Number.isInteger(review.rating) && review.rating >= 1 && review.rating <= 5, 'Invalid rating')
    distribution[review.rating]++
    if (!review.textOriginal?.trim()) continue
    const original = originals.get(review.id)
    if (original) {
      assert.equal(original.author, review.author, 'Matched ID has a different author')
      assert.equal(original.rating, review.rating, 'Matched ID has a different rating')
      assert.ok(original.text?.trim(), 'Verified original has no text')
    }
    const text = normalizeLineBreaks(original?.text ?? review.textOriginal)
    const language = original?.language ?? review.language
    assert.ok(/^[a-z]{2,3}(?:-[A-Za-z0-9]+)*$/.test(language), 'Missing review language')
    // Explicit allowlist: owner replies, photos, profiles and Google URLs never enter the bundle.
    reviews.push({ id: review.id, author: review.author, rating: review.rating, text, language })
  }
  const ratingOnly = source.reviews.length - reviews.length
  assert.equal(reviews.length, source.capture.textReviews, 'Text count differs from export metadata')
  assert.equal(ratingOnly, source.capture.ratingOnlyReviews, 'Rating-only count differs from export metadata')
  const average = source.reviews.reduce((sum, review) => sum + review.rating, 0) / source.reviews.length
  const rating = Math.round(average * 10) / 10
  assert.equal(rating, source.business.reportedRating, 'Rounded rating differs from reported rating')
  return {
    capturedAt: source.capture.capturedAt,
    summary: { total: source.reviews.length, rating, ratingOnly, distribution },
    reviews,
  }
}

export async function readReviewSources() {
  const [source, verified] = await Promise.all([
    readFile(new URL('marina-google-reviews.json', directory), 'utf8'),
    readFile(new URL('reviews.verified.json', directory), 'utf8'),
  ])
  return { source: JSON.parse(source), verified: JSON.parse(verified) }
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const { source, verified } = await readReviewSources()
  const prepared = JSON.stringify(createPublicReviews(source, verified), null, 2) + '\n'
  const destination = new URL('reviews.public.json', directory)
  if (process.argv.includes('--check')) {
    assert.equal(await readFile(destination, 'utf8'), prepared, 'Run npm run reviews:prepare to refresh the UI snapshot')
    console.log('Review snapshot is current.')
  } else {
    await writeFile(destination, prepared)
    console.log('Prepared 66 ratings / 62 review texts; no remote assets or owner replies.')
  }
}
