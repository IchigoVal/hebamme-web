import './style.css'

const translations = {
  de: {
    meta: {
      title: 'Marina Rymmer | Hebamme in Nürnberg',
      description: 'Marina Rymmer ist Hebamme in Nürnberg und auf Deutsch und Russisch erreichbar.',
    },
    aria: {
      home: 'Zur Startseite',
      skipToContent: 'Zum Inhalt springen',
      languageSwitch: 'Sprache wählen',
      mainNavigation: 'Hauptnavigation',
      mobileNavigation: 'Mobile Navigation',
      menuOpen: 'Menü öffnen',
      menuClose: 'Menü schließen',
      contactOptions: 'Kontaktmöglichkeiten',
      legalNavigation: 'Rechtliche Hinweise',
      quickContact: 'Schnellkontakt',
      servicesCarousel: 'Leistungsübersicht. Auf kleinen Bildschirmen horizontal scrollbar.',
      floatingPhone: 'Marina Rymmer unter 0176 23488396 anrufen',
      floatingWhatsapp: 'WhatsApp-Chat mit Marina Rymmer öffnen',
    },
    brand: {
      subline: 'Hebamme',
    },
    nav: {
      services: 'Orientierung',
      process: 'Erste Anfrage',
      about: 'Marina',
      reviews: 'Bewertungen',
      contact: 'Kontakt',
    },
    cta: {
      checkAvailability: 'Direkt Kontakt aufnehmen',
      whatsapp: 'WhatsApp schreiben',
      call: '0176 23488396',
    },
    hero: {
      eyebrow: 'Deutsch · Русский · Nürnberg',
      title: 'Hebamme Marina Rymmer in Nürnberg',
      intro:
        'Du suchst eine Hebamme in Nürnberg? Hier findest du die wichtigsten Informationen für eine erste Anfrage.',
    },
    services: {
      title: 'Wann eine Anfrage sinnvoll sein kann',
      cards: [
        {
          title: 'In der Schwangerschaft',
          text: 'Wenn Fragen auftauchen oder du klären möchtest, ob eine Betreuung möglich ist.',
        },
        {
          title: 'Vor der Geburt',
          text: 'Für Fragen zur Vorbereitung auf die Geburt und die erste Zeit danach.',
        },
        {
          title: 'Nach der Geburt',
          text: 'Wenn du eine Hebamme für das Wochenbett suchst.',
        },
        {
          title: 'Im Alltag mit Baby',
          text: 'Wenn sich nach den ersten Tagen zu Hause neue Fragen ergeben.',
        },
      ],
    },
    process: {
      title: 'Deine erste Anfrage',
      intro:
        'Melde dich, wenn du in Nürnberg eine Hebamme suchst und klären möchtest, ob eine Betreuung möglich ist.',
      steps: [
        {
          title: 'Für die Nachricht',
          text:
            'Dein Name, dein errechneter Geburtstermin (falls relevant) und dein Anliegen in ein oder zwei Sätzen.',
        },
        {
          title: 'Deutsch oder Russisch',
          text: 'Schreib in der Sprache, die dir leichter fällt.',
        },
        {
          title: 'Direkter Kontakt',
          text: 'Am schnellsten per WhatsApp an 0176 23488396. Wenn du lieber sprichst, ruf dieselbe Nummer an.',
        },
      ],
    },
    about: {
      title: 'Marina Rymmer',
      lead: 'Hebamme in Nürnberg. Ansprechbar auf Deutsch und Russisch.',
    },
    reviews: {
      title: 'Erfahrungen von Familien',
    },
    contact: {
      title: 'Kontakt aufnehmen',
      whatsapp: 'WhatsApp schreiben',
      phone: 'Jetzt anrufen',
    },
    footer: {
      imprint: 'Impressum',
      privacy: 'Datenschutz',
    },
    images: {
      heroAlt: 'Anonymes atmosphärisches Motiv einer Schwangeren am Fenster',
      step1Alt: 'Atmosphärisches Motiv einer Schwangerschaft',
      step2Alt: 'Atmosphärisches Motiv einer Schwangeren',
      step3Alt: 'Atmosphärisches Motiv eines Neugeborenen',
      step4Alt: 'Atmosphärisches Mutter-Kind-Motiv',
      aboutAlt: 'Hände falten Babykleidung auf einem Leinentuch',
      supportAlt: 'Hand legt ein Smartphone neben gefaltete Babywäsche',
    },
  },
  ru: {
    meta: {
      title: 'Marina Rymmer | Акушерка в Нюрнберге',
      description: 'Marina Rymmer работает акушеркой в Нюрнберге и говорит на немецком и русском языках.',
    },
    aria: {
      home: 'На главную',
      skipToContent: 'Перейти к содержанию',
      languageSwitch: 'Выбрать язык',
      mainNavigation: 'Основная навигация',
      mobileNavigation: 'Мобильная навигация',
      menuOpen: 'Открыть меню',
      menuClose: 'Закрыть меню',
      contactOptions: 'Способы связи',
      legalNavigation: 'Правовая информация',
      quickContact: 'Быстрая связь',
      servicesCarousel: 'Обзор услуг. На небольших экранах прокручивается горизонтально.',
      floatingPhone: 'Позвонить Marina Rymmer по номеру 0176 23488396',
      floatingWhatsapp: 'Открыть чат WhatsApp с Marina Rymmer',
    },
    brand: {
      subline: 'Акушерка',
    },
    nav: {
      services: 'Ориентиры',
      process: 'Первое обращение',
      about: 'Марина',
      reviews: 'Отзывы',
      contact: 'Контакты',
    },
    cta: {
      checkAvailability: 'Связаться напрямую',
      whatsapp: 'Написать в WhatsApp',
      call: '0176 23488396',
    },
    hero: {
      eyebrow: 'Русский · Deutsch · Nürnberg',
      title: 'Акушерка Марина Риммер в Нюрнберге',
      intro:
        'Ищете акушерку в Нюрнберге? Здесь собрана основная информация для первого обращения.',
    },
    services: {
      title: 'Когда стоит написать',
      cards: [
        {
          title: 'Во время беременности',
          text: 'Если появились вопросы или вы хотите узнать, возможно ли сопровождение.',
        },
        {
          title: 'Перед родами',
          text: 'Если вам нужна информация о подготовке к родам и первым дням после них.',
        },
        {
          title: 'После рождения ребёнка',
          text: 'Если вы ищете акушерку для послеродового периода.',
        },
        {
          title: 'Первые дни дома',
          text: 'Если новые вопросы появились уже дома, после выписки.',
        },
      ],
    },
    process: {
      title: 'Первое обращение',
      intro:
        'Напишите, если вы ищете акушерку в Нюрнберге и хотите уточнить, возможно ли сопровождение.',
      steps: [
        {
          title: 'Что указать',
          text:
            'Укажите ваше имя, предполагаемую дату родов (если это актуально) и в одном-двух предложениях опишите вопрос.',
        },
        {
          title: 'По-русски или по-немецки',
          text: 'Пишите на том языке, на котором вам удобнее.',
        },
        {
          title: 'Прямая связь',
          text: 'Быстрее всего — через WhatsApp по номеру 0176 23488396. Если удобнее поговорить, позвоните по тому же номеру.',
        },
      ],
    },
    about: {
      title: 'Марина Риммер',
      lead: 'Акушерка в Нюрнберге. Общение на русском и немецком.',
    },
    reviews: {
      title: 'Отзывы семей',
    },
    contact: {
      title: 'Связаться со мной',
      whatsapp: 'Написать в WhatsApp',
      phone: 'Позвонить',
    },
    footer: {
      imprint: 'Импрессум',
      privacy: 'Защита данных',
    },
    images: {
      heroAlt: 'Атмосферное изображение беременной женщины у окна без узнаваемого лица',
      step1Alt: 'Атмосферное изображение на тему беременности',
      step2Alt: 'Атмосферное изображение беременной женщины',
      step3Alt: 'Атмосферное изображение новорождённого',
      step4Alt: 'Атмосферное изображение мамы с ребёнком',
      aboutAlt: 'Руки складывают детскую одежду на льняной ткани',
      supportAlt: 'Рука кладёт смартфон рядом со сложенной детской тканью',
    },
  },
}

const menuToggle = document.querySelector('[data-menu-toggle]')
const mobileNav = document.querySelector('[data-mobile-nav]')
const floatingContact = document.querySelector('.floating-contact')
const inquirySection = document.querySelector('#ablauf')
const contactSection = document.querySelector('#kontakt')
const servicesTrack = document.querySelector('[data-services-track]')
const reviewsWidget = document.querySelector('.reviews-widget')
const languageButtons = document.querySelectorAll('[data-lang-option]')
const translatableElements = document.querySelectorAll('[data-i18n]')

let activeLanguage = getStoredLanguage()
let isMenuOpen = false

function getStoredLanguage() {
  try {
    const storedLanguage = window.localStorage.getItem('preferred-language')
    return storedLanguage && translations[storedLanguage] ? storedLanguage : 'de'
  } catch {
    return 'de'
  }
}

function getTranslation(language, path) {
  return path.split('.').reduce((value, key) => value?.[key], translations[language])
}

function updateMenuLabel() {
  if (!menuToggle) return

  const key = isMenuOpen ? menuToggle.dataset.menuLabelCloseKey : menuToggle.dataset.menuLabelOpenKey
  const label = getTranslation(activeLanguage, key)

  if (typeof label === 'string') {
    menuToggle.setAttribute('aria-label', label)
  }
}

function applyLanguage(language) {
  if (!translations[language]) return

  activeLanguage = language
  document.documentElement.lang = language

  translatableElements.forEach((element) => {
    const value = getTranslation(language, element.dataset.i18n)

    if (typeof value !== 'string') return

    const attributes = element.dataset.i18nAttr?.split(',').map((attribute) => attribute.trim())

    if (attributes?.length) {
      attributes.forEach((attribute) => element.setAttribute(attribute, value))
    } else {
      element.textContent = value
    }
  })

  languageButtons.forEach((button) => {
    const isActive = button.dataset.langOption === language
    button.classList.toggle('is-active', isActive)
    button.setAttribute('aria-pressed', String(isActive))
  })

  updateMenuLabel()

  try {
    window.localStorage.setItem('preferred-language', language)
  } catch {
    // The language still works when storage is unavailable.
  }
}

function setMenuState(open) {
  if (!menuToggle || !mobileNav) return

  isMenuOpen = open
  menuToggle.classList.toggle('is-open', open)
  menuToggle.setAttribute('aria-expanded', String(open))
  mobileNav.classList.toggle('is-open', open)
  mobileNav.setAttribute('aria-hidden', String(!open))
  mobileNav.toggleAttribute('inert', !open)
  document.querySelector('main')?.toggleAttribute('inert', open)
  document.body.classList.toggle('menu-open', open)
  updateMenuLabel()

  if (open) {
    window.requestAnimationFrame(() => mobileNav.querySelector('a')?.focus({ preventScroll: true }))
  }
}

languageButtons.forEach((button) => {
  button.addEventListener('click', () => applyLanguage(button.dataset.langOption))
})

menuToggle?.addEventListener('click', () => setMenuState(!isMenuOpen))

mobileNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMenuState(false))
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && isMenuOpen) {
    setMenuState(false)
    menuToggle?.focus()
  }
})

window.addEventListener('resize', () => {
  if (window.innerWidth > 959 && isMenuOpen) {
    setMenuState(false)
  }
})

function initializeReveals() {
  const revealElements = [...document.querySelectorAll('[data-reveal]')]
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (!revealElements.length || prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealElements.forEach((element) => element.classList.add('is-visible'))
    return
  }

  document.documentElement.classList.add('reveal-ready')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return

        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      })
    },
    {
      rootMargin: '0px 0px -8% 0px',
      threshold: 0.12,
    },
  )

  revealElements.forEach((element) => observer.observe(element))
}

function initializeFloatingContact() {
  const hideWithinSections = [inquirySection, contactSection].filter(Boolean)
  if (!floatingContact || !hideWithinSections.length || !('IntersectionObserver' in window)) return

  const intersectionState = new Map(hideWithinSections.map((section) => [section, false]))

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => intersectionState.set(entry.target, entry.isIntersecting))
    const isHidden = [...intersectionState.values()].some(Boolean)

    floatingContact.classList.toggle('is-hidden', isHidden)
    floatingContact.toggleAttribute('inert', isHidden)
    floatingContact.setAttribute('aria-hidden', String(isHidden))
  })

  hideWithinSections.forEach((section) => observer.observe(section))
}

function initializeServicesTrack() {
  if (!servicesTrack) return

  const mobileQuery = window.matchMedia('(max-width: 719px)')
  const updateTabStop = () => {
    if (mobileQuery.matches) {
      servicesTrack.setAttribute('tabindex', '0')
    } else {
      servicesTrack.removeAttribute('tabindex')
    }
  }

  updateTabStop()
  mobileQuery.addEventListener?.('change', updateTabStop)

  servicesTrack.addEventListener('keydown', (event) => {
    if (!mobileQuery.matches || !['ArrowLeft', 'ArrowRight'].includes(event.key)) return

    event.preventDefault()
    const direction = event.key === 'ArrowRight' ? 1 : -1
    servicesTrack.scrollBy({ left: direction * servicesTrack.clientWidth * 0.85, behavior: 'smooth' })
  })
}

function initializeReviewsWidget() {
  if (!reviewsWidget) return

  const loadPlatform = () => {
    if (document.querySelector('[data-elfsight-platform]')) return

    const script = document.createElement('script')
    script.src = 'https://elfsightcdn.com/platform.js'
    script.async = true
    script.dataset.elfsightPlatform = ''
    document.head.append(script)
  }

  if (!('IntersectionObserver' in window)) {
    loadPlatform()
    return
  }

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) return

      loadPlatform()
      observer.disconnect()
    },
    { rootMargin: '600px 0px' },
  )

  observer.observe(reviewsWidget)
}

applyLanguage(activeLanguage)
setMenuState(false)
initializeReveals()
initializeFloatingContact()
initializeServicesTrack()
initializeReviewsWidget()
