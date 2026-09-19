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
      services: 'Leistungen',
      process: 'Ablauf',
      about: 'Über mich',
      reviews: 'Bewertungen',
      contact: 'Kontakt',
    },
    cta: {
      checkAvailability: 'Betreuung anfragen',
      viewServices: 'Angebot ansehen',
      askWithoutObligation: 'Kurz nachfragen',
    },
    hero: {
      title: 'Hebamme in Nürnberg.',
      intro: 'Ich bin Marina Rymmer. Du kannst dich auf Deutsch oder Russisch an mich wenden.',
    },
    services: {
      title: 'In welchen Phasen ich ansprechbar bin',
      intro: 'Was im Einzelnen möglich ist, richtet sich nach deiner Situation und wird vorab besprochen.',
      cards: [
        {
          title: 'Schwangerschaft',
          text: 'Orientierung bei Veränderungen und Unsicherheiten während der Schwangerschaft.',
        },
        {
          title: 'Geburt & Vorbereitung',
          text: 'Vorbereitung auf die Geburt und auf die erste Zeit danach.',
        },
        {
          title: 'Wochenbett',
          text: 'Unterstützung beim Ankommen mit dem Baby nach der Geburt.',
        },
        {
          title: 'Erste Zeit als Familie',
          text: 'Ansprechbar für Themen, die sich im neuen Familienalltag entwickeln.',
        },
      ],
      footer: 'Du möchtest wissen, ob dein Anliegen dazugehört?',
    },
    process: {
      title: 'So kommen wir zusammen',
      intro: 'Für die erste Anfrage reicht eine kurze Nachricht oder ein Anruf.',
      steps: [
        {
          title: 'Anfrage senden',
          text:
            'Schreib per WhatsApp oder ruf an. Wenn du schwanger bist, nenne bitte deinen errechneten Geburtstermin.',
        },
        {
          title: 'Kurz abstimmen',
          text: 'Wir besprechen dein Anliegen und klären die wichtigsten Punkte.',
        },
        {
          title: 'Nächste Schritte',
          text: 'Wenn es passt, vereinbaren wir alles Weitere direkt miteinander.',
        },
      ],
    },
    about: {
      title: 'Wie ich arbeite',
      lead: 'Gute Zusammenarbeit beginnt für mich mit einem offenen Gespräch.',
      text:
        'Ich höre aufmerksam zu, erkläre verständlich und treffe Absprachen klar. So weißt du, was als Nächstes ansteht.',
    },
    reviews: {
      title: 'Erfahrungen von Familien',
      text: 'Die folgenden Bewertungen werden direkt aus Google geladen.',
    },
    contact: {
      title: 'Melde dich gerne direkt.',
      intro:
        'Schreib kurz, worum es geht. Wenn du schwanger bist, nenne bitte deinen errechneten Geburtstermin. Ich sage dir, ob aktuell eine Betreuung möglich ist.',
      whatsapp: 'WhatsApp schreiben',
      phone: 'Jetzt anrufen',
    },
    footer: {
      imprint: 'Impressum',
      privacy: 'Datenschutz',
    },
    images: {
      heroAlt: 'Atmosphärisches Motiv rund um Schwangerschaft und Familie',
      step1Alt: 'Atmosphärisches Motiv einer Schwangerschaft',
      step2Alt: 'Atmosphärisches Motiv einer Schwangeren',
      step3Alt: 'Atmosphärisches Motiv eines Neugeborenen',
      step4Alt: 'Atmosphärisches Mutter-Kind-Motiv',
      trustAlt: 'Atmosphärisches Mutter-Kind-Motiv',
      whyAlt: 'Atmosphärisches Motiv einer Schwangeren',
      aboutAlt: 'Atmosphärisches Motiv rund um Schwangerschaft',
      supportAlt: 'Atmosphärisches Mutter-Kind-Motiv',
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
      services: 'Услуги',
      process: 'Как всё проходит',
      about: 'Обо мне',
      reviews: 'Отзывы',
      contact: 'Контакты',
    },
    cta: {
      checkAvailability: 'Связаться',
      viewServices: 'Посмотреть услуги',
      askWithoutObligation: 'Задать вопрос',
    },
    hero: {
      title: 'Акушерка в Нюрнберге.',
      intro: 'Меня зовут Marina Rymmer. Со мной можно общаться на немецком и русском языках.',
    },
    services: {
      title: 'В какие периоды можно обратиться',
      intro: 'Формат помощи зависит от вашей ситуации и обсуждается заранее.',
      cards: [
        {
          title: 'Беременность',
          text: 'Помощь с вопросами и неуверенностью во время беременности.',
        },
        {
          title: 'Роды и подготовка',
          text: 'Подготовка к родам и первым дням после них.',
        },
        {
          title: 'После родов',
          text: 'Поддержка в первые недели после рождения малыша.',
        },
        {
          title: 'Первые месяцы в семье',
          text: 'Вопросы, которые возникают в новом семейном ритме.',
        },
      ],
      footer: 'Хотите уточнить, подходит ли ваш запрос?',
    },
    process: {
      title: 'Как проходит обращение',
      intro: 'Для первого обращения достаточно короткого сообщения или звонка.',
      steps: [
        {
          title: 'Отправить запрос',
          text:
            'Напишите в WhatsApp или позвоните. Если вы беременны, укажите предполагаемую дату родов.',
        },
        {
          title: 'Коротко всё обсудить',
          text: 'Мы обсудим ваш запрос и уточним основные детали.',
        },
        {
          title: 'Договориться о дальнейшем',
          text: 'Если всё подходит, мы сразу согласуем дальнейшие шаги.',
        },
      ],
    },
    about: {
      title: 'Как я работаю',
      lead: 'Для меня хорошее сотрудничество начинается с открытого разговора.',
      text:
        'Я внимательно слушаю, объясняю понятным языком и чётко договариваюсь о следующих шагах. Так вы знаете, что будет дальше.',
    },
    reviews: {
      title: 'Отзывы семей',
      text: 'Отзывы ниже загружаются напрямую из Google.',
    },
    contact: {
      title: 'Свяжитесь со мной.',
      intro:
        'Кратко опишите ваш запрос. Если вы беременны, укажите предполагаемую дату родов. Я сообщу, возможно ли сейчас сопровождение.',
      whatsapp: 'Написать в WhatsApp',
      phone: 'Позвонить',
    },
    footer: {
      imprint: 'Импрессум',
      privacy: 'Защита данных',
    },
    images: {
      heroAlt: 'Атмосферное изображение на тему беременности и семьи',
      step1Alt: 'Атмосферное изображение на тему беременности',
      step2Alt: 'Атмосферное изображение беременной женщины',
      step3Alt: 'Атмосферное изображение новорождённого',
      step4Alt: 'Атмосферное изображение мамы с ребёнком',
      trustAlt: 'Атмосферное изображение мамы с ребёнком',
      whyAlt: 'Атмосферное изображение беременной женщины',
      aboutAlt: 'Атмосферное изображение на тему беременности',
      supportAlt: 'Атмосферное изображение мамы с ребёнком',
    },
  },
}

const menuToggle = document.querySelector('[data-menu-toggle]')
const mobileNav = document.querySelector('[data-mobile-nav]')
const floatingContact = document.querySelector('.floating-contact')
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
  if (!floatingContact || !contactSection || !('IntersectionObserver' in window)) return

  const observer = new IntersectionObserver(([entry]) => {
    const isHidden = entry.isIntersecting

    floatingContact.classList.toggle('is-hidden', isHidden)
    floatingContact.toggleAttribute('inert', isHidden)
    floatingContact.setAttribute('aria-hidden', String(isHidden))
  })

  observer.observe(contactSection)
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
