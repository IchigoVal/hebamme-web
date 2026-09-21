import snapshot from './data/reviews/reviews.public.json'
import './reviews.css'

const PAGE_SIZE = 6
const PREVIEW_LENGTH = 300
const copy = {
  de: {
    total: total => `${total} Bewertungen auf Google`,
    counts: (text, stars) => `${text} mit Text · ${stars} reine Sternebewertungen`,
    distribution: (five, two) => `${five} × 5 Sterne · ${two} × 2 Sterne`,
    snapshot: date => `Stand: ${date}`,
    introduction: 'Persönliche Einblicke in die Begleitung durch Marina.',
    sort: 'Sortieren',
    original: 'Standard',
    lowest: 'Niedrigste Bewertung zuerst',
    read: 'Weiterlesen',
    close: 'Weniger anzeigen',
    rating: value => `${value} von 5 Sternen`,
    more: count => `${count} weitere Bewertungen`,
    progress: (visible, total) => `${visible} von ${total} Textbewertungen`,
    complete: 'Alle Textbewertungen sind angezeigt.',
    reset: 'Wieder weniger anzeigen',
    source: 'Quelle: Google-Bewertungen',
  },
  ru: {
    total: total => `${total} оценок в Google`,
    counts: (text, stars) => `${text} с текстом · ${stars} без текста`,
    distribution: (five, two) => `${five} × 5 звёзд · ${two} × 2 звезды`,
    snapshot: date => `По состоянию на ${date}`,
    introduction: 'Личный опыт семей, которых сопровождала Марина.',
    sort: 'Порядок',
    original: 'По умолчанию',
    lowest: 'Сначала низкие оценки',
    read: 'Читать полностью',
    close: 'Свернуть',
    rating: value => `${value} из 5 звёзд`,
    more: count => `Показать ещё ${count}`,
    progress: (visible, total) => `${visible} из ${total} отзывов с текстом`,
    complete: 'Показаны все отзывы с текстом.',
    reset: 'Снова показать меньше',
    source: 'Источник: отзывы в Google',
  },
}

function element(tag, className, text) {
  const node = document.createElement(tag)
  if (className) node.className = className
  if (text !== undefined) node.textContent = text
  return node
}

function preview(text) {
  if (text.length <= PREVIEW_LENGTH) return text
  // A verbatim prefix, never a rewritten excerpt. Cut only at a word boundary.
  const end = text.lastIndexOf(' ', PREVIEW_LENGTH)
  return text.slice(0, end > 0 ? end : PREVIEW_LENGTH)
}

export function initializeReviews(root) {
  if (!root) return () => {}
  let language = 'de'
  let visible = PAGE_SIZE
  let order = 'original'
  const expanded = new Set()
  const labels = new Map()
  const textReviews = snapshot.reviews
  const ordered = () => order === 'lowest'
    ? [...textReviews].sort((a, b) => a.rating - b.rating)
    : textReviews
  const t = () => copy[language]

  const header = element('div', 'reviews-introduction')
  const introduction = element('p', 'reviews-intro')
  const summary = element('div', 'reviews-summary')
  const score = element('span', 'reviews-score')
  const summaryCopy = element('div', 'reviews-summary-copy')
  const total = element('p', 'reviews-total')
  const counts = element('p', 'reviews-counts')
  const distribution = element('p', 'reviews-distribution')
  summaryCopy.append(total, counts, distribution)
  summary.append(score, summaryCopy)
  header.append(introduction, summary)

  const toolbar = element('div', 'reviews-toolbar')
  const source = element('p', 'reviews-source')
  const sortLabel = element('label', 'reviews-sort')
  const sortText = element('span')
  const sort = element('select')
  sort.id = 'reviews-order'
  const standard = element('option')
  standard.value = 'original'
  const lowest = element('option')
  lowest.value = 'lowest'
  sort.append(standard, lowest)
  sortLabel.append(sortText, sort)
  toolbar.append(source, sortLabel)

  const list = element('ul', 'reviews-list')
  list.id = 'reviews-list'
  list.setAttribute('aria-labelledby', 'reviews-heading')
  const footer = element('div', 'reviews-footer')
  const progress = element('p', 'reviews-progress')
  progress.setAttribute('role', 'status')
  progress.setAttribute('aria-atomic', 'true')
  const actions = element('div', 'reviews-actions')
  const more = element('button', 'btn btn--secondary reviews-more')
  more.type = 'button'
  more.setAttribute('aria-controls', list.id)
  const moreLabel = element('span', 'btn__label')
  const moreIcon = element('span', 'reviews-more-icon', '+')
  moreIcon.setAttribute('aria-hidden', 'true')
  more.append(moreLabel, moreIcon)
  const reset = element('button', 'reviews-reset')
  reset.type = 'button'
  reset.setAttribute('aria-controls', list.id)
  actions.append(more, reset)
  footer.append(progress, actions)
  root.replaceChildren(header, toolbar, list, footer)

  function updateFooter() {
    const all = visible >= textReviews.length
    progress.textContent = `${t().progress(Math.min(visible, textReviews.length), textReviews.length)}${all ? ` · ${t().complete}` : ''}`
    more.hidden = all
    moreLabel.textContent = t().more(Math.min(PAGE_SIZE, textReviews.length - visible))
    reset.hidden = visible <= PAGE_SIZE
    reset.textContent = t().reset
  }

  function makeReview(review) {
    const item = element('li', 'review-item')
    item.dataset.reviewId = review.id
    const article = element('article', 'review')
    article.tabIndex = -1
    const name = element('h3', 'review-author')
    const author = element('bdi', null, review.author)
    name.id = `review-author-${review.id}`
    name.append(author)
    article.setAttribute('aria-labelledby', name.id)
    const rating = element('span', 'review-rating')
    rating.setAttribute('role', 'img')
    const stars = element('span', null, '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating))
    stars.setAttribute('aria-hidden', 'true')
    rating.append(stars)
    const meta = element('div', 'review-meta')
    meta.append(name, rating)
    const quote = element('blockquote', 'review-quote')
    const text = element('p', 'review-text')
    text.id = `review-text-${review.id}`
    text.dir = 'auto'
    quote.append(text)
    article.append(meta, quote)
    const shortText = preview(review.text)
    let toggle
    if (shortText !== review.text) {
      toggle = element('button', 'review-toggle')
      toggle.type = 'button'
      toggle.setAttribute('aria-controls', text.id)
      toggle.addEventListener('click', () => {
        const wasExpanded = expanded.has(review.id)
        if (wasExpanded) expanded.delete(review.id)
        else expanded.add(review.id)
        update()
        // Collapsing a long text must not leave its focused control above the viewport.
        if (wasExpanded) toggle.scrollIntoView({ block: 'nearest', behavior: 'instant' })
      })
      article.append(toggle)
    }
    function update() {
      const isExpanded = expanded.has(review.id)
      const content = isExpanded ? review.text : shortText
      // Preserve mixed-language paragraphs without changing any characters.
      text.replaceChildren(...content.split(/(\n)/).map(part => {
        const span = element('span', null, part)
        span.lang = /[А-Яа-яЁё]/u.test(part) ? 'ru' : review.language === 'ru' ? 'de' : review.language
        return span
      }))
      if (!isExpanded && shortText !== review.text) text.append(element('span', 'review-ellipsis', '…'))
      rating.setAttribute('aria-label', t().rating(review.rating))
      if (toggle) {
        toggle.textContent = isExpanded ? t().close : t().read
        toggle.setAttribute('aria-expanded', String(isExpanded))
        toggle.setAttribute('aria-label', `${toggle.textContent} – ${review.author}`)
      }
    }
    update()
    labels.set(review.id, update)
    item.append(article)
    return item
  }

  function render() {
    labels.clear()
    list.replaceChildren(...ordered().slice(0, visible).map(makeReview))
    updateFooter()
  }
  more.addEventListener('click', () => {
    const start = visible
    visible = Math.min(visible + PAGE_SIZE, textReviews.length)
    const newItems = ordered().slice(start, visible).map(makeReview)
    list.append(...newItems)
    updateFooter()
    // Reading and keyboard order continue at the first newly revealed review.
    const first = newItems[0]?.querySelector('article')
    first?.focus({ preventScroll: true })
    first?.scrollIntoView({ block: 'start', behavior: 'instant' })
  })
  reset.addEventListener('click', () => {
    visible = PAGE_SIZE
    expanded.clear()
    render()
    list.querySelector('article')?.focus({ preventScroll: true })
    root.closest('section').scrollIntoView({ block: 'start', behavior: 'instant' })
  })
  sort.addEventListener('change', () => {
    order = sort.value
    visible = PAGE_SIZE
    render()
  })
  render()

  return nextLanguage => {
    language = copy[nextLanguage] ? nextLanguage : 'de'
    const locale = language === 'ru' ? 'ru-RU' : 'de-DE'
    const formattedRating = snapshot.summary.rating.toLocaleString(locale, { minimumFractionDigits: 1, maximumFractionDigits: 1 })
    score.textContent = formattedRating
    score.setAttribute('aria-label', t().rating(formattedRating))
    introduction.textContent = t().introduction
    total.textContent = t().total(snapshot.summary.total)
    counts.textContent = t().counts(textReviews.length, snapshot.summary.ratingOnly)
    distribution.textContent = t().distribution(snapshot.summary.distribution[5], snapshot.summary.distribution[2])
    const date = new Intl.DateTimeFormat(locale, { day: '2-digit', month: '2-digit', year: 'numeric', timeZone: 'Europe/Berlin' }).format(new Date(snapshot.capturedAt))
    source.textContent = `${t().source} · ${t().snapshot(date)}`
    sortText.textContent = t().sort
    standard.textContent = t().original
    lowest.textContent = t().lowest
    labels.forEach(update => update())
    updateFooter()
  }
}
