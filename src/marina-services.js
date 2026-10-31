import german from './data/services/services.de.json'
import russian from './data/services/services.ru.json'
import './marina-services.css'

const labels = {
  de: { more: 'Mehr erfahren', less: 'Weniger anzeigen' },
  ru: { more: 'Подробнее', less: 'Свернуть' },
}

export function initializeMarinaServices(root) {
  if (!root) return () => {}
  let language = 'de'
  const entries = [...root.querySelectorAll('[data-marina-copy]')].map(node => ({
    node,
    original: node.dataset.marinaCopy.split('.').reduce((value, key) => value[key], german),
  }))
  const details = [...root.querySelectorAll('.marina-service')]
  const updateAction = detail => {
    detail.querySelector('[data-marina-action]').textContent = labels[language][detail.open ? 'less' : 'more']
    detail.querySelector('[data-marina-close]').textContent = labels[language].less + ' ↑'
  }
  for (const detail of details) {
    const close = detail.querySelector('[data-marina-close]')
    close.hidden = false
    detail.addEventListener('toggle', () => updateAction(detail))
    close.addEventListener('click', () => {
      detail.open = false
      const summary = detail.querySelector('summary')
      summary.focus({ preventScroll: true })
      summary.scrollIntoView({ block: 'start', behavior: 'instant' })
    })
  }
  // A shared direct link can also reveal an individual service, without altering other open areas.
  const revealHash = () => {
    const detail = details.find(item => '#' + item.id === window.location.hash)
    if (detail) detail.open = true
  }
  window.addEventListener('hashchange', revealHash)
  revealHash()
  return nextLanguage => {
    language = nextLanguage === 'ru' ? 'ru' : 'de'
    entries.forEach(({ node, original }) => {
      node.textContent = language === 'ru' ? russian.strings[original] : original
    })
    details.forEach(updateAction)
  }
}
