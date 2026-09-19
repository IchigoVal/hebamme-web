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
      askWithoutObligation: 'Situation kurz schildern',
    },
    hero: {
      eyebrow: 'Deutsch · Русский · Nürnberg',
      title: 'Hebamme Marina Rymmer in Nürnberg',
      intro:
        'Du suchst eine Hebamme und möchtest wissen, ob eine Betreuung möglich ist? Schreib mir per WhatsApp oder ruf mich an. Auf Deutsch oder Russisch.',
    },
    services: {
      title: 'Wann eine Anfrage sinnvoll sein kann',
      intro:
        'Welche Betreuung möglich ist, hängt von deiner Situation ab. Beschreibe sie kurz; dann lässt sich das direkt klären.',
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
      footer: 'Nicht sicher, ob dein Anliegen passt?',
    },
    process: {
      title: 'Was ich für die erste Anfrage brauche',
      intro: 'Eine kurze Nachricht reicht. Mit diesen Angaben kann ich dein Anliegen besser einordnen.',
      steps: [
        {
          title: 'Geburtstermin',
          text: 'Wenn du schwanger bist, schreib deinen errechneten Geburtstermin dazu.',
        },
        {
          title: 'Dein Anliegen',
          text: 'Ein oder zwei Sätze genügen: Wobei suchst du Unterstützung?',
        },
        {
          title: 'Sprache und Kontakt',
          text: 'Schreib auf Deutsch oder Russisch. Wenn du lieber sprichst, ruf einfach an.',
        },
      ],
    },
    about: {
      title: 'Marina Rymmer',
      lead: 'Hebamme in Nürnberg. Ansprechbar auf Deutsch und Russisch.',
      text:
        'Für eine Anfrage erreichst du mich telefonisch oder per WhatsApp. Eine E-Mail-Adresse oder ein Kontaktformular gibt es nicht.',
    },
    reviews: {
      title: 'Erfahrungen von Familien',
    },
    contact: {
      title: 'Kontakt aufnehmen',
      intro:
        'Schreib deinen Namen, den errechneten Geburtstermin (falls relevant) und kurz dein Anliegen. Du kannst Deutsch oder Russisch verwenden.',
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
      trustAlt: 'Atmosphärisches Mutter-Kind-Motiv',
      whyAlt: 'Atmosphärisches Motiv einer Schwangeren',
      aboutAlt: 'Hände falten Babykleidung auf einem Leinentuch',
      supportAlt: 'Hand legt ein Smartphone neben gefaltete Babywäsche',
      closingAlt: 'Mutter mit Neugeborenem und ruhendes Baby in hellen Tüchern',
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
      askWithoutObligation: 'Коротко описать ситуацию',
    },
    hero: {
      eyebrow: 'Русский · Deutsch · Nürnberg',
      title: 'Акушерка Марина Риммер в Нюрнберге',
      intro:
        'Вы ищете акушерку и хотите узнать, возможно ли сопровождение? Напишите мне в WhatsApp или позвоните. Можно на русском или немецком.',
    },
    services: {
      title: 'Когда стоит написать',
      intro:
        'Возможность сопровождения зависит от вашей ситуации. Коротко опишите её — так это можно уточнить напрямую.',
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
      footer: 'Не уверены, подходит ли ваш запрос?',
    },
    process: {
      title: 'Что написать в первом сообщении',
      intro: 'Достаточно нескольких строк. Эти данные помогут мне быстрее понять ваш запрос.',
      steps: [
        {
          title: 'Дата родов',
          text: 'Если вы беременны, укажите предполагаемую дату родов.',
        },
        {
          title: 'Ваш вопрос',
          text: 'В одном-двух предложениях напишите, какая помощь вам нужна.',
        },
        {
          title: 'Язык и способ связи',
          text: 'Пишите по-русски или по-немецки. Если удобнее поговорить, позвоните.',
        },
      ],
    },
    about: {
      title: 'Марина Риммер',
      lead: 'Акушерка в Нюрнберге. Общение на русском и немецком.',
      text: 'Связаться со мной можно по телефону или в WhatsApp. Без формы и без электронной почты.',
    },
    reviews: {
      title: 'Отзывы семей',
    },
    contact: {
      title: 'Связаться со мной',
      intro:
        'Напишите ваше имя, предполагаемую дату родов (если это актуально) и коротко опишите вопрос. Можно на русском или немецком.',
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
      trustAlt: 'Атмосферное изображение мамы с ребёнком',
      whyAlt: 'Атмосферное изображение беременной женщины',
      aboutAlt: 'Руки складывают детскую одежду на льняной ткани',
      supportAlt: 'Рука кладёт смартфон рядом со сложенной детской тканью',
      closingAlt: 'Мама с новорождённым и спящий малыш в светлых тканях',
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
