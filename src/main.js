import './style.css';

const translations = {
  de: {
    meta: {
      title: 'Marina Rymmer | Hebamme',
      description:
        'Marina Rymmer begleitet dich als Hebamme mit Ruhe, Wärme und Verlässlichkeit durch Schwangerschaft, Geburt und Wochenbett.',
    },
    aria: {
      home: 'Zur Startseite',
      languageSwitch: 'Sprache wählen',
      mainNavigation: 'Hauptnavigation',
      mobileNavigation: 'Mobile Navigation',
      quickContact: 'Schnellkontakt',
      menuOpen: 'Menü öffnen',
      menuClose: 'Menü schließen',
    },
    brand: {
      subline: 'Hebamme',
    },
    nav: {
      services: 'Leistungen',
      guidance: 'Begleitung',
      about: 'Über mich',
      contact: 'Kontakt',
    },
    cta: {
      requestSpot: 'Platz anfragen',
      discoverServices: 'Leistungen entdecken',
    },
    hero: {
      eyebrow: 'Sanfte Begleitung mit Ruhe und Vertrauen',
      title: 'Ein ruhiger Ort für deine Schwangerschaft, Geburt und erste Zeit als Familie.',
      text:
        'Mit Wärme, Erfahrung und einem offenen Ohr begleite ich dich durch eine Zeit, in der du dich verstanden, getragen und sicher fühlen darfst.',
      noteTitle: 'Persönlich, ruhig und nahbar.',
      noteText: 'Begleitung von der ersten Orientierung bis weit ins Wochenbett.',
      mediaLabel: 'Für dich da',
      mediaText: 'Raum für Fragen, leise Sorgen und eine Begleitung, die sich nach dir richtet.',
    },
    guidance: {
      eyebrow: 'Du fragst dich vielleicht',
      title: 'Wer ist an meiner Seite, wenn alles neu und manchmal auch überwältigend wirkt?',
      questions: [
        'Bin ich mit meinen Fragen gerade zu viel?',
        'Wie finde ich in all den Informationen Sicherheit?',
        'Was hilft mir, wenn Unsicherheit oder Druck spürbar werden?',
        'Wie kann die erste Zeit mit meinem Baby ruhiger beginnen?',
      ],
    },
    reasons: {
      eyebrow: 'Vertrauensvolle Begleitung',
      title: 'Warum Frauen sich für mich entscheiden',
      text: 'Weil gute Begleitung nicht laut sein muss. Sondern aufmerksam, klar und voller Ruhe.',
      lead:
        'Ich nehme mir Zeit für das, was dich wirklich beschäftigt, und begleite dich mit einer Haltung, die Sicherheit schenkt statt zusätzlichen Druck zu machen.',
      benefits: [
        'Ruhige, persönliche Begleitung statt schneller Standardantworten',
        'Zeit für Fragen, Sorgen und alles, was zwischen den Zeilen mitschwingt',
        'Klare Orientierung in einer sensiblen und intensiven Lebensphase',
      ],
      quote: '„Du sollst dich in dieser Zeit nicht allein durch alles hindurchtragen müssen.“',
    },
    reviews: {
      eyebrow: 'Liebe Worte',
      title: 'Was Familien über meine Begleitung sagen',
      text: 'Einblick in echte Rückmeldungen und Erfahrungen aus Google Rezensionen.',
    },
    services: {
      eyebrow: 'Dein Weg mit mir',
      title: 'Wie ich dir helfen kann',
      text:
        'Vom ersten Kennenlernen bis zur Zeit danach begleite ich dich Schritt für Schritt mit Ruhe, Klarheit und Wärme.',
      steps: [
        {
          title: 'Schwangerschaft',
          text: 'Ein guter Anfang mit Raum für Fragen, Veränderungen und das Gefühl, nicht allein zu sein.',
        },
        {
          title: 'Geburt & Vorbereitung',
          text: 'Orientierung, Gespräche und Vorbereitung, damit du deinen Weg mit mehr Vertrauen gehen kannst.',
        },
        {
          title: 'Wochenbett',
          text:
            'Sanfte Begleitung für die erste Zeit mit deinem Baby, wenn Nähe, Erholung und Sicherheit wichtig sind.',
        },
        {
          title: 'Danach',
          text:
            'Auch nach der ersten intensiven Zeit bleibe ich ansprechbar, wenn du Begleitung und Klarheit brauchst.',
        },
      ],
    },
    about: {
      eyebrow: 'Über mich',
      title: 'Ich begleite dich mit einer ruhigen Präsenz und einem offenen Blick für das, was du brauchst.',
      paragraphs: [
        'Mir ist wichtig, dass du dich nicht nur gut informiert, sondern vor allem gesehen fühlst. Jede Familie bringt ihre eigene Geschichte, ihr eigenes Tempo und ihre eigenen Fragen mit.',
        'Deshalb soll meine Begleitung dir nicht noch mehr Anforderungen machen, sondern dir Halt geben, wenn du ihn brauchst, und Raum lassen, wenn du ihn suchst.',
      ],
      cta: 'Mehr über mich',
    },
    support: {
      eyebrow: 'Ich bin für dich da',
      title: 'Dein Weg darf sich getragen, klar und warm anfühlen.',
      lead:
        'Gemeinsam schaffen wir einen Rahmen, in dem du Fragen stellen, durchatmen und dich sicherer fühlen kannst.',
      points: [
        'für Gespräche, die entlasten und sortieren',
        'für Orientierung bei kleinen und großen Fragen',
        'für eine Begleitung, die sich nach deinem Alltag richtet',
        'für einen Start, der nicht perfekt, sondern getragen sein darf',
      ],
    },
    contact: {
      eyebrow: 'Kontakt',
      title: 'Du möchtest dich melden?',
      text: 'Wenn du dir eine ruhige, persönliche Begleitung wünschst, freue ich mich auf deine Nachricht oder deinen Anruf.',
      whatsapp: 'WhatsApp schreiben',
      call: 'Anrufen',
      meta: {
        phoneLabel: 'Telefon',
        phoneValue: '+49 123 4567890',
        emailLabel: 'E-Mail',
        emailValue: 'hallo@marina-hebamme.de',
        locationLabel: 'Ort',
        locationValue: 'Rund um deine Stadt',
      },
    },
    footer: {
      brand: 'Marina Rymmer · Hebamme',
      imprint: 'Impressum',
      privacy: 'Datenschutz',
    },
    floating: {
      call: 'Anrufen',
      whatsapp: 'WhatsApp',
      callAria: 'Anrufen',
      whatsappAria: 'WhatsApp schreiben',
    },
    images: {
      heroAlt: 'Sanfte Szene einer Mutter mit Baby',
      trustAlt: 'Mutter und Baby in einer ruhigen, warmen Szene',
      whyAlt: 'Ruhiges Schwangerschaftsporträt',
      step1Alt: 'Sanftes Schwangerschaftsporträt',
      step2Alt: 'Szene zur Geburtsvorbereitung',
      step3Alt: 'Schlafendes Baby in einer ruhigen Szene',
      step4Alt: 'Warme Familienszene nach der Geburt',
      aboutAlt: 'Warmes Porträt von Marina',
      supportAlt: 'Ruhige Baby- und Mutter-Kind-Szene',
    },
  },
  ru: {
    meta: {
      title: 'Marina Rymmer | Акушерка',
      description:
        'Marina Rymmer сопровождает тебя как акушерка с теплотой, спокойствием и надежностью во время беременности, родов и послеродового периода.',
    },
    aria: {
      home: 'На главную',
      languageSwitch: 'Выбрать язык',
      mainNavigation: 'Основная навигация',
      mobileNavigation: 'Мобильная навигация',
      quickContact: 'Быстрый контакт',
      menuOpen: 'Открыть меню',
      menuClose: 'Закрыть меню',
    },
    brand: {
      subline: 'Акушерка',
    },
    nav: {
      services: 'Услуги',
      guidance: 'Сопровождение',
      about: 'Обо мне',
      contact: 'Контакт',
    },
    cta: {
      requestSpot: 'Оставить заявку',
      discoverServices: 'Смотреть услуги',
    },
    hero: {
      eyebrow: 'Мягкое сопровождение с доверием и спокойствием',
      title: 'Спокойное пространство для твоей беременности, родов и первых дней вашей семьи.',
      text:
        'С теплотой, опытом и вниманием я сопровождаю тебя в период, когда особенно важно чувствовать поддержку, понимание и безопасность.',
      noteTitle: 'Лично, спокойно и бережно.',
      noteText: 'Сопровождение от первых вопросов до длительного послеродового периода.',
      mediaLabel: 'Я рядом',
      mediaText: 'Здесь есть место для вопросов, тихих тревог и сопровождения, которое подстраивается под тебя.',
    },
    guidance: {
      eyebrow: 'Возможно, ты спрашиваешь себя',
      title: 'Кто будет рядом со мной, когда всё новое и временами кажется слишком тяжёлым?',
      questions: [
        'Не слишком ли много у меня сейчас вопросов?',
        'Как почувствовать уверенность среди всей этой информации?',
        'Что поможет, если становятся заметны тревога или давление?',
        'Как сделать первые дни с малышом более спокойными?',
      ],
    },
    reasons: {
      eyebrow: 'Сопровождение, которому можно доверять',
      title: 'Почему женщины выбирают меня',
      text: 'Потому что хорошее сопровождение не должно быть громким. Оно должно быть внимательным, ясным и спокойным.',
      lead:
        'Я уделяю время тому, что действительно тебя волнует, и сопровождаю тебя так, чтобы давать опору, а не создавать дополнительное давление.',
      benefits: [
        'Спокойное и личное сопровождение вместо быстрых стандартных ответов',
        'Время для вопросов, тревог и всего, что чувствуется между строк',
        'Понятная опора в чувствительный и насыщенный жизненный период',
      ],
      quote: '«В это время тебе не нужно проходить через всё в одиночку.»',
    },
    reviews: {
      eyebrow: 'Тёплые слова',
      title: 'Что семьи говорят о моём сопровождении',
      text: 'Небольшой взгляд на настоящие отзывы и впечатления из Google Reviews.',
    },
    services: {
      eyebrow: 'Твой путь со мной',
      title: 'Чем я могу тебе помочь',
      text:
        'От первого знакомства до времени после родов я сопровождаю тебя шаг за шагом с теплотой, ясностью и спокойствием.',
      steps: [
        {
          title: 'Беременность',
          text: 'Хорошее начало с местом для вопросов, перемен и чувства, что ты не одна.',
        },
        {
          title: 'Роды и подготовка',
          text: 'Ориентиры, разговоры и подготовка, чтобы ты могла идти своим путем с большим доверием.',
        },
        {
          title: 'Послеродовой период',
          text: 'Мягкое сопровождение в первые недели с малышом, когда особенно важны близость, восстановление и чувство безопасности.',
        },
        {
          title: 'После этого',
          text: 'И после первой интенсивной фазы я остаюсь рядом, если тебе нужны сопровождение и ясность.',
        },
      ],
    },
    about: {
      eyebrow: 'Обо мне',
      title: 'Я сопровождаю тебя спокойным присутствием и открытым взглядом на то, что тебе действительно нужно.',
      paragraphs: [
        'Для меня важно, чтобы ты чувствовала себя не только хорошо информированной, но прежде всего замеченной и понятой. У каждой семьи своя история, свой темп и свои вопросы.',
        'Поэтому мое сопровождение не должно создавать тебе дополнительные требования, а должно давать опору, когда она нужна, и пространство, когда ты его ищешь.',
      ],
      cta: 'Узнать больше',
    },
    support: {
      eyebrow: 'Я рядом с тобой',
      title: 'Твой путь может ощущаться поддержанным, ясным и теплым.',
      lead:
        'Вместе мы создадим пространство, в котором ты сможешь задавать вопросы, выдохнуть и почувствовать себя увереннее.',
      points: [
        'для разговоров, которые помогают выдохнуть и разобраться',
        'для ориентира в маленьких и больших вопросах',
        'для сопровождения, которое подстраивается под твой повседневный ритм',
        'для старта, который не обязан быть идеальным, но может быть поддержанным',
      ],
    },
    contact: {
      eyebrow: 'Контакт',
      title: 'Хочешь связаться?',
      text: 'Если ты хочешь спокойного и личного сопровождения, я буду рада твоему сообщению или звонку.',
      whatsapp: 'Написать в WhatsApp',
      call: 'Позвонить',
      meta: {
        phoneLabel: 'Телефон',
        phoneValue: '+49 123 4567890',
        emailLabel: 'Эл. почта',
        emailValue: 'hallo@marina-hebamme.de',
        locationLabel: 'Место',
        locationValue: 'В твоем городе и рядом',
      },
    },
    footer: {
      brand: 'Marina Rymmer · Акушерка',
      imprint: 'Импрессум',
      privacy: 'Защита данных',
    },
    floating: {
      call: 'Звонок',
      whatsapp: 'WhatsApp',
      callAria: 'Позвонить',
      whatsappAria: 'Написать в WhatsApp',
    },
    images: {
      heroAlt: 'Спокойная сцена мамы с малышом',
      trustAlt: 'Мама и малыш в спокойной теплой сцене',
      whyAlt: 'Спокойный портрет беременности',
      step1Alt: 'Нежный портрет беременности',
      step2Alt: 'Сцена подготовки к родам',
      step3Alt: 'Спящий малыш в спокойной обстановке',
      step4Alt: 'Теплая семейная сцена после родов',
      aboutAlt: 'Теплый портрет Марины',
      supportAlt: 'Спокойная сцена малыша и мамы',
    },
  },
};

const body = document.body;
const menuToggle = document.querySelector('[data-menu-toggle]');
const mobileNav = document.querySelector('[data-mobile-nav]');
const mobileLinks = document.querySelectorAll('[data-mobile-nav] a');
const languageButtons = document.querySelectorAll('[data-lang-option]');
const translatableElements = document.querySelectorAll('[data-i18n]');
const preferredLanguageKey = 'preferred-language';

let currentLanguage = 'de';

const resolveTranslation = (language, key) => {
  return key.split('.').reduce((value, segment) => {
    if (value == null) {
      return undefined;
    }

    if (Array.isArray(value)) {
      return value[Number(segment)];
    }

    return value[segment];
  }, translations[language]);
};

const getSavedLanguage = () => {
  try {
    const savedLanguage = window.localStorage.getItem(preferredLanguageKey);
    return savedLanguage && translations[savedLanguage] ? savedLanguage : null;
  } catch {
    return null;
  }
};

const saveLanguage = (language) => {
  try {
    window.localStorage.setItem(preferredLanguageKey, language);
  } catch {
    // Ignore storage issues in restrictive environments.
  }
};

const updateLanguageButtons = (language) => {
  languageButtons.forEach((button) => {
    const isActive = button.dataset.langOption === language;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
};

const updateMenuLabel = (isOpen) => {
  if (!menuToggle) {
    return;
  }

  const translationKey = isOpen
    ? menuToggle.dataset.menuLabelCloseKey
    : menuToggle.dataset.menuLabelOpenKey;
  const label = resolveTranslation(currentLanguage, translationKey);

  if (label) {
    menuToggle.setAttribute('aria-label', label);
  }
};

const applyTranslations = (language) => {
  currentLanguage = language;
  document.documentElement.lang = language;

  translatableElements.forEach((element) => {
    const translationKey = element.dataset.i18n;
    const translation = resolveTranslation(language, translationKey);

    if (typeof translation !== 'string') {
      return;
    }

    const targetAttribute = element.dataset.i18nAttr;

    if (targetAttribute) {
      element.setAttribute(targetAttribute, translation);
      return;
    }

    element.textContent = translation;
  });

  updateLanguageButtons(language);
  updateMenuLabel(body.classList.contains('menu-open'));
};

const setLanguage = (language) => {
  if (!translations[language]) {
    return;
  }

  applyTranslations(language);
  saveLanguage(language);
};

const setMenuState = (isOpen) => {
  if (!menuToggle || !mobileNav) {
    return;
  }

  body.classList.toggle('menu-open', isOpen);
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  mobileNav.hidden = !isOpen;
  mobileNav.setAttribute('aria-hidden', String(!isOpen));
  updateMenuLabel(isOpen);
};

currentLanguage = getSavedLanguage() || 'de';

if (menuToggle && mobileNav) {
  setMenuState(false);

  menuToggle.addEventListener('click', () => {
    setMenuState(!body.classList.contains('menu-open'));
  });

  mobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
      setMenuState(false);
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 960) {
      setMenuState(false);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setMenuState(false);
    }
  });
}

languageButtons.forEach((button) => {
  button.addEventListener('click', () => {
    setLanguage(button.dataset.langOption);
  });
});

applyTranslations(currentLanguage);
