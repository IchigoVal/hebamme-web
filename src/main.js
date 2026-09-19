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
      servicesCarousel: 'Anfrageanlässe. Auf kleinen Bildschirmen horizontal scrollbar.',
      floatingPhone: 'Marina Rymmer unter 0176 23488396 anrufen',
      floatingWhatsapp: 'WhatsApp-Chat mit Marina Rymmer öffnen',
    },
    brand: {
      subline: 'Hebamme',
    },
    nav: {
      orientation: 'Hebammenhilfe',
      services: 'Anlässe',
      about: 'Marina',
      reviews: 'Bewertungen',
      knowledge: 'Gut zu wissen',
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
        'Du suchst eine Hebamme in Nürnberg? Eine kurze Nachricht reicht, um zu klären, ob eine Betreuung möglich ist.',
    },
    orientation: {
      eyebrow: 'Allgemeine Orientierung',
      title: 'Hebammenhilfe, kurz erklärt',
      intro:
        'Hebammenhilfe kann verschiedene Phasen von der Schwangerschaft bis zur Zeit nach der Geburt umfassen.',
      note:
        'Welche dieser Bereiche Marina konkret anbietet und ob eine Betreuung möglich ist, wird bei der Anfrage geklärt.',
      items: [
        {
          title: 'In der Schwangerschaft',
          text: 'Beratung, Vorsorge und Hilfe bei Schwangerschaftsbeschwerden können zur Hebammenhilfe gehören.',
        },
        {
          title: 'Vorbereitung und Geburt',
          text:
            'Hebammen können auf Geburt, Wochenbett und die erste Zeit mit dem Baby vorbereiten und Geburten begleiten.',
        },
        {
          title: 'Nach der Geburt',
          text:
            'Im Wochenbett geht es unter anderem um Mutter und Kind, Rückbildung sowie Fragen zu Stillen, Ernährung und Säuglingspflege.',
        },
      ],
    },
    services: {
      title: 'Wann eine Anfrage sinnvoll sein kann',
      cards: [
        {
          title: 'Früh in der Schwangerschaft',
          text: 'Sobald du weißt, dass du schwanger bist und eine Betreuung für die nächste Zeit suchst.',
        },
        {
          title: 'Vor der Geburt',
          text:
            'Wenn du klären möchtest, welche Unterstützung bei der Vorbereitung und für die erste Zeit danach möglich ist.',
        },
        {
          title: 'Für das Wochenbett',
          text: 'Wenn du nach der Geburt Hebammenhilfe für dich und dein Baby suchst.',
        },
        {
          title: 'Wenn neue Fragen auftauchen',
          text: 'Wenn es um Stillen, Ernährung des Babys oder den Alltag nach der Geburt geht.',
        },
      ],
    },
    faq: {
      eyebrow: 'Allgemeine Hinweise',
      title: 'Gut zu wissen',
      items: [
        {
          question: 'Wann sollte ich mit der Suche beginnen?',
          answer:
            'Möglichst früh in der Schwangerschaft. So bleibt mehr Zeit, eine Hebamme mit passenden Kapazitäten zu finden.',
        },
        {
          question: 'Welche Kosten übernimmt die gesetzliche Krankenversicherung?',
          answer:
            'Gesetzlich Versicherte haben grundsätzlich Anspruch auf Hebammenhilfe in Schwangerschaft und Mutterschaft. Welche Leistungen im Einzelfall umfasst sind, richtet sich nach dem gesetzlichen Rahmen und der persönlichen Situation. Privat Versicherte sollten ihren Tarif prüfen.',
        },
        {
          question: 'Kann Hebammenhilfe auch nach der Geburt wichtig sein?',
          answer:
            'Ja. Im Wochenbett kann Hebammenhilfe die Beobachtung von Mutter und Neugeborenem sowie Beratung zu Rückbildung, Stillen, Ernährung und Säuglingspflege umfassen.',
        },
        {
          question: 'Was gilt bei akuten Beschwerden?',
          answer:
            'Diese Website und WhatsApp sind keine Notfallkanäle. Bei Lebensgefahr oder starken Beschwerden wähle 112. Bei dringenden, nicht lebensbedrohlichen Beschwerden außerhalb ärztlicher Sprechzeiten hilft 116117.',
        },
      ],
    },
    about: {
      title: 'Marina Rymmer',
      lead: 'Ich bin Hebamme in Nürnberg und spreche Deutsch und Russisch.',
    },
    reviews: {
      title: 'Erfahrungen von Familien',
      consentTitle: 'Google-Bewertungen anzeigen',
      consentText:
        'Erst nach deiner Zustimmung wird das externe Elfsight-Widget geladen. Dabei werden Daten an Elfsight übertragen und Drittanbieter-Cookies gesetzt.',
      load: 'Bewertungen laden',
      loading: 'Bewertungen werden geladen …',
      error: 'Die Bewertungen konnten nicht geladen werden. Erneut versuchen',
      privacyLink: 'Mehr zum Datenschutz',
    },
    contact: {
      title: 'Deine erste Anfrage',
      intro:
        'Schreib deinen Namen, deinen Wohnort, den errechneten Geburtstermin (falls relevant) und kurz dein Anliegen. Deutsch oder Russisch ist beides möglich.',
      privacyNote:
        'Bitte sende medizinische Befunde, Fotos oder ausführliche Gesundheitsdaten nicht ungefragt über WhatsApp.',
      whatsapp: 'WhatsApp schreiben',
      phone: 'Jetzt anrufen',
    },
    footer: {
      imprint: 'Impressum',
      privacy: 'Datenschutz',
    },
    sources: {
      label: 'Quellen zu den allgemeinen Informationen:',
      health: 'gesund.bund.de',
      gkv: 'GKV-Spitzenverband',
      dhv: 'Deutscher Hebammenverband',
      emergency: 'Notfallnummern',
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
      servicesCarousel: 'Поводы для обращения. На небольших экранах прокручивается горизонтально.',
      floatingPhone: 'Позвонить Marina Rymmer по номеру 0176 23488396',
      floatingWhatsapp: 'Открыть чат WhatsApp с Marina Rymmer',
    },
    brand: {
      subline: 'Акушерка',
    },
    nav: {
      orientation: 'О помощи акушерки',
      services: 'Когда обратиться',
      about: 'Марина',
      reviews: 'Отзывы',
      knowledge: 'Полезно знать',
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
        'Ищете акушерку в Нюрнберге? Короткого сообщения достаточно, чтобы уточнить, возможно ли сопровождение.',
    },
    orientation: {
      eyebrow: 'Общая информация',
      title: 'Помощь акушерки: коротко',
      intro:
        'Помощь акушерки может охватывать разные этапы — от беременности до периода после родов.',
      note:
        'Какие именно услуги предлагает Марина и есть ли возможность сопровождения, уточняется при первом обращении.',
      items: [
        {
          title: 'Во время беременности',
          text:
            'К помощи акушерки могут относиться консультации, наблюдение беременности и помощь при недомоганиях.',
        },
        {
          title: 'Подготовка и роды',
          text:
            'Акушерки могут готовить к родам, послеродовому периоду и первым неделям с малышом, а также сопровождать роды.',
        },
        {
          title: 'После родов',
          text:
            'В послеродовом периоде речь может идти о состоянии матери и ребёнка, восстановлении, грудном вскармливании, питании малыша и уходе за ним.',
        },
      ],
    },
    services: {
      title: 'Когда стоит написать',
      cards: [
        {
          title: 'В начале беременности',
          text: 'Когда вы узнали о беременности и ищете сопровождение на ближайшее время.',
        },
        {
          title: 'Перед родами',
          text:
            'Если вы хотите уточнить, какая поддержка возможна при подготовке и в первое время после родов.',
        },
        {
          title: 'Для послеродового периода',
          text: 'Если после родов вы ищете помощь акушерки для себя и малыша.',
        },
        {
          title: 'Когда появились новые вопросы',
          text:
            'Если есть вопросы о грудном вскармливании, питании малыша или первых буднях после родов.',
        },
      ],
    },
    faq: {
      eyebrow: 'Общая информация',
      title: 'Полезно знать',
      items: [
        {
          question: 'Когда начинать поиск акушерки?',
          answer:
            'Лучше как можно раньше во время беременности. Так остаётся больше времени найти акушерку со свободными местами.',
        },
        {
          question: 'Что оплачивает государственная медицинская страховка?',
          answer:
            'При государственной медицинской страховке в целом есть право на помощь акушерки во время беременности и после родов. Конкретный объём зависит от правовых норм и личной ситуации. При частной страховке стоит проверить условия своего тарифа.',
        },
        {
          question: 'Нужна ли помощь акушерки после родов?',
          answer:
            'Да. В послеродовом периоде помощь может включать наблюдение за состоянием матери и новорождённого, а также консультации по восстановлению, грудному вскармливанию, питанию и уходу за малышом.',
        },
        {
          question: 'Что делать при острых симптомах?',
          answer:
            'Этот сайт и WhatsApp не подходят для экстренных обращений. При угрозе жизни или тяжёлых симптомах звоните 112. Если помощь нужна срочно, но угрозы жизни нет, а врачебная практика закрыта, звоните 116117.',
        },
      ],
    },
    about: {
      title: 'Марина Риммер',
      lead: 'Я акушерка в Нюрнберге и говорю по-русски и по-немецки.',
    },
    reviews: {
      title: 'Отзывы семей',
      consentTitle: 'Показать отзывы Google',
      consentText:
        'Внешний виджет Elfsight загрузится только после вашего согласия. При этом данные передаются Elfsight и могут устанавливаться сторонние cookie-файлы.',
      load: 'Загрузить отзывы',
      loading: 'Отзывы загружаются …',
      error: 'Не удалось загрузить отзывы. Попробовать ещё раз',
      privacyLink: 'Подробнее о защите данных',
    },
    contact: {
      title: 'Первое обращение',
      intro:
        'Напишите ваше имя, место жительства, предполагаемую дату родов (если это актуально) и коротко опишите вопрос. Можно по-русски или по-немецки.',
      privacyNote:
        'Пожалуйста, не отправляйте без предварительной договорённости медицинские заключения, фотографии или подробные сведения о здоровье через WhatsApp.',
      whatsapp: 'Написать в WhatsApp',
      phone: 'Позвонить',
    },
    footer: {
      imprint: 'Импрессум',
      privacy: 'Защита данных',
    },
    sources: {
      label: 'Источники общей информации:',
      health: 'gesund.bund.de',
      gkv: 'GKV-Spitzenverband',
      dhv: 'Союз акушерок Германии',
      emergency: 'Экстренные номера',
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
const reviewsConsent = document.querySelector('[data-reviews-consent]')
const reviewsLoadButton = document.querySelector('[data-reviews-load]')
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

function applyLanguage(language, persist = true) {
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

  if (persist) {
    try {
      window.localStorage.setItem('preferred-language', language)
    } catch {
      // The language still works when storage is unavailable.
    }
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
  if (!reviewsWidget || !reviewsConsent || !reviewsLoadButton) return

  let isLoading = false

  const loadPlatform = () => {
    if (isLoading || document.querySelector('[data-elfsight-platform]')) return

    isLoading = true
    reviewsLoadButton.disabled = true
    reviewsLoadButton.textContent = getTranslation(activeLanguage, 'reviews.loading')

    const widget = document.createElement('div')
    widget.className = 'elfsight-app-6e2e4c6f-ebc0-4005-93a9-b414b24ac284'
    widget.dataset.elfsightAppLazy = ''
    widget.tabIndex = -1
    reviewsConsent.replaceWith(widget)
    widget.focus({ preventScroll: true })

    const script = document.createElement('script')
    script.src = 'https://elfsightcdn.com/platform.js'
    script.async = true
    script.dataset.elfsightPlatform = ''
    script.addEventListener('error', () => {
      isLoading = false
      script.remove()
      widget.replaceWith(reviewsConsent)
      reviewsLoadButton.disabled = false
      reviewsLoadButton.textContent = getTranslation(activeLanguage, 'reviews.error')
    })
    document.head.append(script)
  }

  reviewsLoadButton.addEventListener('click', loadPlatform)
}

applyLanguage(activeLanguage, false)
setMenuState(false)
initializeReveals()
initializeFloatingContact()
initializeServicesTrack()
initializeReviewsWidget()
