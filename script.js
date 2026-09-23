/**
 * TerraAtlas - World Countries & Capitals Explorer
 * Vanilla JavaScript implementation
 * Features:
 *  - 100% Client-side, zero backend, zero CORS issues
 *  - EN / UA instant localization toggle with persistence
 *  - Grouping by 5 continental regions from 'Capitals of the world.docx'
 *  - Live search across country, capital, and demonym (in both EN & UA)
 *  - Expandable country modal with high-res flag, IPA transcription, audio pronunciation, capital, and demonyms
 *  - Keyboard navigation (Left/Right arrows, Escape)
 *  - Resilient flag fallback handler
 */

(function () {
  'use strict';

  // --- UI Localization Strings ---
  const uiTranslations = {
    en: {
      docTitle: "World Countries & Capitals Explorer | 199 Nations",
      logoTitle: "TerraAtlas",
      logoSubtitle: "Capitals, Pronunciations & Demonyms",
      statsLabel: "Countries",
      langToggleText: "Українська",
      langToggleFlag: "🇺🇦",
      heroBadge: "Global Compendium",
      heroHeading: "Explore Nations Across the Globe",
      heroDescription: "Discover countries grouped by region with official capitals, phonetic pronunciations, demonyms, and national flags.",
      searchPlaceholder: "Search by country, capital, or demonym...",
      allRegions: "All Regions",
      showingCount: (count, total) => `Showing ${count} of ${total} countries`,
      emptyTitle: "No Countries Found",
      emptyDesc: "Try adjusting your search query or switching to all regions.",
      btnReset: "Reset Filters",
      labelCapital: "Capital City",
      labelDemonym: "Demonym (Residents)",
      labelRegion: "Region / Continent",
      labelIsoCode: "ISO Code & Flag",
      labelOpenFlagLink: "View direct flag image ↗",
      modalTipText: "Keyboard shortcuts: ← Previous | → Next | Esc to Close",
      modalCloseBtnText: "Close",
      footerDesc: "Curated from Capitals of the world dataset. Free and open explorer.",
      speakTitle: "Listen to country pronunciation",
      speakCapitalTitle: "Listen to capital pronunciation",
      labelLocationMap: "Geographic Location",
      labelOpenInMaps: "Google Maps",
      labelResetMap: "Center",
      bookmarks: "Bookmarks",
      addBookmark: "Add to bookmarks",
      removeBookmark: "Remove from bookmarks",
      emptyBookmarksTitle: "No Bookmarked Countries",
      emptyBookmarksDesc: "Click the star icon ⭐ on any country card or details page to save it.",
      btnResetBookmarks: "Show All Countries",
      // Quiz strings
      quizNavText: "Quiz",
      quizHeroBadge: "Interactive Quiz Trainer",
      quizHeroHeading: "Test Your Geography Knowledge",
      quizHeroDescription: "Practice flags, capitals, and countries with instant animated feedback and zero scrolling.",
      quizModalTitle: "Geography Quiz Trainer",
      labelSelectMode: "Choose Quiz Mode",
      modeTitle1: "Country by Flag",
      modeDesc1: "Guess country name from options",
      modeTitle2: "Capital by Flag",
      modeDesc2: "Guess capital city from options",
      modeTitle3: "Capital by Country",
      modeDesc3: "Guess capital from country name",
      modeTitle4: "Flag by Country",
      modeDesc4: "Choose correct flag from options",
      modeTitle5: "Country by Capital",
      modeDesc5: "Guess country from capital city",
      modeTitle6: "Mixed Challenge",
      modeDesc6: "Random mix of all modes",
      labelSelectRegion: "Select World Region",
      labelSelectCount: "Number of Questions",
      labelSelectChoices: "Number of Answer Choices",
      choicesLabel: (c) => `${c} choices`,
      btnStartQuizText: "Start Quiz",
      quizBackText: "Setup",
      quizQuestionOf: (current, total) => `Question ${current} of ${total}`,
      scoreLabel: "Score:",
      feedbackCorrect: "Correct!",
      feedbackWrong: "Incorrect!",
      feedbackCorrectWas: "Correct answer:",
      btnNextQuestionText: "Next Question →",
      btnFinishQuizText: "View Results 🎉",
      resultsBadge: "Test Completed",
      resultsGreatJob: "Excellent Result!",
      resultsGoodJob: "Well Done!",
      resultsKeepPracticing: "Keep Practicing!",
      resultsDesc: (score, total, percent) => `You answered ${score} out of ${total} questions correctly (${percent}%).`,
      resultsTableTitle: "Question by Question Breakdown",
      thQuestion: "Question / Target",
      thYourAnswer: "Your Answer",
      thCorrectAnswer: "Correct Answer",
      thStatus: "Status",
      statusCorrect: "Correct",
      statusWrong: "Incorrect",
      statCorrectLbl: "Correct",
      statWrongLbl: "Mistakes",
      statAccuracyLbl: "Accuracy",
      btnRetryText: "Try Again",
      btnSettingsText: "Change Settings",
      btnReturnText: "Close Trainer",
      promptFlagToCountry: "Which country does this flag belong to?",
      promptFlagToCapital: "What is the capital of the nation with this flag?",
      promptCountryToCapital: (c) => `What is the capital of ${c}?`,
      promptCountryToFlag: (c) => `Which flag belongs to ${c}?`,
      promptCapitalToCountry: (cap) => `${cap} is the capital of which country?`,
      notEnoughBookmarks: "You need at least 3 bookmarked countries to start a quiz from bookmarks. Switched to All Regions."
    },
    uk: {
      docTitle: "Країни та столиці світу | 199 Держав",
      logoTitle: "ТерраАтлас",
      logoSubtitle: "Столиці, транскрипції та назви жителів",
      statsLabel: "Країн",
      langToggleText: "English",
      langToggleFlag: "🇬🇧",
      heroBadge: "Світовий довідник",
      heroHeading: "Досліджуйте держави та народи світу",
      heroDescription: "Країни за регіонами з офіційними столицями, фонетичною транскрипцією, назвами мешканців та національними прапорами.",
      searchPlaceholder: "Шукайте за країною, столицею або назвою мешканців...",
      allRegions: "Усі регіони",
      showingCount: (count, total) => `Відображено ${count} із ${total} країн`,
      emptyTitle: "Країн не знайдено",
      emptyDesc: "Спробуйте змінити пошуковий запит або скинути фільтри.",
      btnReset: "Скинути фільтри",
      labelCapital: "Столиця",
      labelDemonym: "Назва мешканців (демонім)",
      labelRegion: "Регіон / Континент",
      labelIsoCode: "Код ISO та прапор",
      labelOpenFlagLink: "Відкрити пряме зображення прапора ↗",
      modalTipText: "Клавіші: ← Попередня | → Наступна | Esc Закрити",
      modalCloseBtnText: "Закрити",
      footerDesc: "Створено на основі документу «Capitals of the world». Повністю статичний веб-додаток.",
      speakTitle: "Прослухати вимову країни",
      speakCapitalTitle: "Прослухати вимову столиці",
      labelLocationMap: "Розташування на карті",
      labelOpenInMaps: "Google Maps",
      labelResetMap: "Центр",
      bookmarks: "Закладки",
      addBookmark: "Додати в закладки",
      removeBookmark: "Видалити із закладок",
      emptyBookmarksTitle: "Немає збережених країн",
      emptyBookmarksDesc: "Натисніть на зірочку ⭐ на картці будь-якої країни, щоб зберегти її в закладки.",
      btnResetBookmarks: "Показати всі країни",
      // Quiz strings
      quizNavText: "Тренажер",
      quizHeroBadge: "Інтерактивний тренажер",
      quizHeroHeading: "Перевір свої географічні знання",
      quizHeroDescription: "Тренуйте прапори, столиці та країни з миттєвою перевіркою без прокручування сторінки.",
      quizModalTitle: "Тренажер географії",
      labelSelectMode: "Оберіть тип завдань",
      modeTitle1: "Країна за прапором",
      modeDesc1: "Вгадати назву країни за її прапором",
      modeTitle2: "Столиця за прапором",
      modeDesc2: "Вгадати столицю за прапором країни",
      modeTitle3: "Столиця за країною",
      modeDesc3: "Вгадати столицю за назвою країни",
      modeTitle4: "Прапор за країною",
      modeDesc4: "Обрати правильний прапор за назвою",
      modeTitle5: "Країна за столицею",
      modeDesc5: "Вгадати країну за назвою столиці",
      modeTitle6: "Все вперемешку",
      modeDesc6: "Випадкові завдання з усіх режимів",
      labelSelectRegion: "Оберіть регіон світу",
      labelSelectCount: "Кількість запитань",
      labelSelectChoices: "Кількість варіантів відповідей",
      choicesLabel: (c) => `${c} ${c < 5 ? 'варіанти' : 'варіантів'}`,
      btnStartQuizText: "Почати тест",
      quizBackText: "Меню",
      quizQuestionOf: (current, total) => `Питання ${current} з ${total}`,
      scoreLabel: "Рахунок:",
      feedbackCorrect: "Правильно!",
      feedbackWrong: "Неправильно!",
      feedbackCorrectWas: "Правильна відповідь:",
      btnNextQuestionText: "Наступне питання →",
      btnFinishQuizText: "Завершити та переглянути результат 🎉",
      resultsBadge: "Тест завершено",
      resultsGreatJob: "Відмінний результат!",
      resultsGoodJob: "Гарна робота!",
      resultsKeepPracticing: "Продовжуйте тренування!",
      resultsDesc: (score, total, percent) => `Ви відповіли правильно на ${score} із ${total} запитань (${percent}%).`,
      resultsTableTitle: "Детальний звіт за запитаннями",
      thQuestion: "Питання / Об'єкт",
      thYourAnswer: "Ваша відповідь",
      thCorrectAnswer: "Правильна відповідь",
      thStatus: "Результат",
      statusCorrect: "Правильно",
      statusWrong: "Помилка",
      statCorrectLbl: "Правильно",
      statWrongLbl: "Помилок",
      statAccuracyLbl: "Точність",
      btnRetryText: "Спробувати ще раз",
      btnSettingsText: "Змінити налаштування",
      btnReturnText: "Закрити тренажер",
      promptFlagToCountry: "Якій країні належить цей прапор?",
      promptFlagToCapital: "Яка столиця держави з цим прапором?",
      promptCountryToCapital: (c) => `Яка столиця держави ${c}?`,
      promptCountryToFlag: (c) => `Який прапор належить країні ${c}?`,
      promptCapitalToCountry: (cap) => `Столицею якої країни є ${cap}?`,
      notEnoughBookmarks: "Потрібно щонайменше 3 збережені країни для тесту по закладках. Перемкнуто на Усі регіони."
    }
  };

  // Safe SVG Flag placeholder if external image fails
  const FLAG_FALLBACK_SVG = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='100' viewBox='0 0 160 100'%3E%3Crect width='160' height='100' fill='%231e293b'/%3E%3Cpath d='M40 30h80v40H40z' fill='none' stroke='%23ea580c' stroke-width='2' stroke-dasharray='4'/%3E%3Ctext x='80' y='55' fill='%2394a3b8' font-family='sans-serif' font-size='12' text-anchor='middle'%3EFlag%3C/text%3E%3C/svg%3E";

  // Ordered list of the 5 exact regions in the document
  const REGION_ORDER = [
    "Europe",
    "Asia",
    "Africa",
    "Australia and Oceania",
    "North and South America"
  ];

  // --- Application State ---
  let currentLang = localStorage.getItem('terra_atlas_lang') || 'en';
  let activeRegion = 'all'; // 'all', specific English region name, or 'bookmarks'
  let searchQuery = '';
  let currentlyOpenIndex = -1; // index in currentFilteredList
  let currentFilteredList = [];

  // --- Bookmarks State (Set of country IDs persisted in localStorage) ---
  let bookmarkedIds = new Set();
  try {
    const savedBookmarks = JSON.parse(localStorage.getItem('terra_atlas_bookmarks') || '[]');
    if (Array.isArray(savedBookmarks)) {
      bookmarkedIds = new Set(savedBookmarks);
    }
  } catch (e) {
    bookmarkedIds = new Set();
  }

  // --- DOM Elements ---
  const langToggleBtn = document.getElementById('langToggleBtn');
  const langFlag = document.getElementById('langFlag');
  const langText = document.getElementById('langText');
  const logoTitle = document.getElementById('logoTitle');
  const logoSubtitle = document.getElementById('logoSubtitle');
  const countriesTotalCount = document.getElementById('countriesTotalCount');
  const countriesTotalLabel = document.getElementById('countriesTotalLabel');
  const heroBadge = document.getElementById('heroBadge');
  const heroHeading = document.getElementById('heroHeading');
  const heroDescription = document.getElementById('heroDescription');
  const searchInput = document.getElementById('searchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const regionNav = document.getElementById('regionNav');
  const resultsCountText = document.getElementById('resultsCountText');
  const regionsContainer = document.getElementById('regionsContainer');
  const emptyState = document.getElementById('emptyState');
  const emptyTitle = document.getElementById('emptyTitle');
  const emptyDesc = document.getElementById('emptyDesc');
  const btnResetFilter = document.getElementById('btnResetFilter');
  const footerDesc = document.getElementById('footerDesc');

  // Modal Elements
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalCard = document.getElementById('modalCard');
  const modalRegionBadge = document.getElementById('modalRegionBadge');
  const modalCountryName = document.getElementById('modalCountryName');
  const modalCountryTrans = document.getElementById('modalCountryTrans');
  const modalFlagImg = document.getElementById('modalFlagImg');
  const modalCapitalVal = document.getElementById('modalCapitalVal');
  const modalCapitalTransVal = document.getElementById('modalCapitalTransVal');
  const modalDemonymVal = document.getElementById('modalDemonymVal');
  const modalRegionVal = document.getElementById('modalRegionVal');
  const modalIsoVal = document.getElementById('modalIsoVal');
  const modalFlagDirectLink = document.getElementById('modalFlagDirectLink');
  const labelCapital = document.getElementById('labelCapital');
  const labelDemonym = document.getElementById('labelDemonym');
  const labelRegion = document.getElementById('labelRegion');
  const labelIsoCode = document.getElementById('labelIsoCode');
  const labelOpenFlagLink = document.getElementById('labelOpenFlagLink');
  const modalTipText = document.getElementById('modalTipText');
  const modalBtnDone = document.getElementById('modalBtnDone');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalPrevBtn = document.getElementById('modalPrevBtn');
  const modalBookmarkBtn = document.getElementById('modalBookmarkBtn');
  const speechBtn = document.getElementById('speechBtn');
  const capitalSpeechBtn = document.getElementById('capitalSpeechBtn');
  const bookmarkToast = document.getElementById('bookmarkToast');

  // Header Bookmarks Pill DOM Elements
  const headerBookmarksBtn = document.getElementById('headerBookmarksBtn');
  const headerBookmarksCount = document.getElementById('headerBookmarksCount');
  const headerBookmarksLabel = document.getElementById('headerBookmarksLabel');

  // Map DOM Elements
  const labelLocationMap = document.getElementById('labelLocationMap');
  const modalMapCoords = document.getElementById('modalMapCoords');
  const modalMapResetBtn = document.getElementById('modalMapResetBtn');
  const modalExternalMapLink = document.getElementById('modalExternalMapLink');
  const labelOpenInMaps = document.getElementById('labelOpenInMaps');
  const labelResetMap = document.getElementById('labelResetMap');

  // Leaflet Map State
  let leafletMap = null;
  let currentMarker = null;
  let currentCoords = [20, 0];
  let currentZoom = 5;

  // Header Logo Brand Element
  const headerLogoBrand = document.getElementById('headerLogoBrand');

  // --- View State ---
  let currentView = 'explorer'; // 'explorer' or 'quiz'

  // --- Quiz State ---
  let quizMode = 'flag_to_country';
  let quizRegion = 'all';

  let quizTotalQuestions = 10;
  try {
    const savedQCount = parseInt(localStorage.getItem('terra_atlas_quiz_questions'), 10);
    if ([5, 10, 15, 20].includes(savedQCount)) {
      quizTotalQuestions = savedQCount;
    }
  } catch (e) {
    quizTotalQuestions = 10;
  }

  let quizChoicesCount = 4; // 3 to 6
  try {
    const savedCCount = parseInt(localStorage.getItem('terra_atlas_quiz_choices'), 10);
    if (savedCCount >= 3 && savedCCount <= 6) {
      quizChoicesCount = savedCCount;
    }
  } catch (e) {
    quizChoicesCount = 4;
  }

  let quizCurrentIndex = 0;
  let quizScore = 0;
  let quizQuestions = [];
  let quizResultsLog = []; // [{ questionNum, country, countryData, mode, promptText, selectedOption, isCorrect, correctOption }]
  let quizAnswered = false;

  // Views & Modal Elements
  const explorerView = document.getElementById('explorerView');
  const headerQuizBtn = document.getElementById('headerQuizBtn');
  const headerQuizText = document.getElementById('headerQuizText');
  const quizModalBackdrop = document.getElementById('quizModalBackdrop');
  const quizModalCard = document.getElementById('quizModalCard');
  const quizModalTitle = document.getElementById('quizModalTitle');
  const quizModalCloseBtn = document.getElementById('quizModalCloseBtn');

  // Quiz Setup Elements
  const quizSetupSection = document.getElementById('quizSetupSection');
  const quizHeroBadge = document.getElementById('quizHeroBadge');
  const quizHeroHeading = document.getElementById('quizHeroHeading');
  const quizHeroDescription = document.getElementById('quizHeroDescription');
  const labelSelectMode = document.getElementById('labelSelectMode');
  const labelSelectRegion = document.getElementById('labelSelectRegion');
  const labelSelectCount = document.getElementById('labelSelectCount');
  const labelSelectChoices = document.getElementById('labelSelectChoices');
  const choicesValBadge = document.getElementById('choicesValBadge');
  const quizChoicesRange = document.getElementById('quizChoicesRange');
  const quizChoicesTicks = document.getElementById('quizChoicesTicks');
  const quizModesGrid = document.getElementById('quizModesGrid');
  const quizRegionChips = document.getElementById('quizRegionChips');
  const quizCountGroup = document.getElementById('quizCountGroup');
  const btnStartQuiz = document.getElementById('btnStartQuiz');
  const btnStartQuizText = document.getElementById('btnStartQuizText');
  const quizBookmarksLabel = document.getElementById('quizBookmarksLabel');
  const quizBookmarksCount = document.getElementById('quizBookmarksCount');

  // Quiz Active Session Elements
  const quizActiveSection = document.getElementById('quizActiveSection');
  const quizExitBtn = document.getElementById('quizExitBtn');
  const quizBackText = document.getElementById('quizBackText');
  const quizQCounter = document.getElementById('quizQCounter');
  const quizScorePill = document.getElementById('quizScorePill');
  const quizScoreVal = document.getElementById('quizScoreVal');
  const quizProgressFill = document.getElementById('quizProgressFill');
  const quizQuestionCard = document.getElementById('quizQuestionCard');
  const quizModeBadge = document.getElementById('quizModeBadge');
  const quizActiveRegionBadge = document.getElementById('quizActiveRegionBadge');
  const quizQuestionPrompt = document.getElementById('quizQuestionPrompt');
  const quizPromptTarget = document.getElementById('quizPromptTarget');
  const quizOptionsContainer = document.getElementById('quizOptionsContainer');

  // Quiz Zero-Scroll Inline Action Bar Elements
  const quizInlineActionBar = document.getElementById('quizInlineActionBar');
  const quizInlineFeedback = document.getElementById('quizInlineFeedback');
  const feedbackIcon = document.getElementById('feedbackIcon');
  const feedbackTitle = document.getElementById('feedbackTitle');
  const feedbackSubtitle = document.getElementById('feedbackSubtitle');
  const btnNextQuestion = document.getElementById('btnNextQuestion');
  const btnNextQuestionText = document.getElementById('btnNextQuestionText');

  // Quiz Results Elements
  const quizResultsSection = document.getElementById('quizResultsSection');
  const resultsBadge = document.getElementById('resultsBadge');
  const resultsScoreNumber = document.getElementById('resultsScoreNumber');
  const resultsScorePercent = document.getElementById('resultsScorePercent');
  const resultsHeading = document.getElementById('resultsHeading');
  const resultsDescription = document.getElementById('resultsDescription');
  const statCorrectVal = document.getElementById('statCorrectVal');
  const statCorrectLbl = document.getElementById('statCorrectLbl');
  const statWrongVal = document.getElementById('statWrongVal');
  const statWrongLbl = document.getElementById('statWrongLbl');
  const statAccuracyVal = document.getElementById('statAccuracyVal');
  const statAccuracyLbl = document.getElementById('statAccuracyLbl');
  const resultsTableTitle = document.getElementById('resultsTableTitle');
  const thQuestion = document.getElementById('thQuestion');
  const thYourAnswer = document.getElementById('thYourAnswer');
  const thCorrectAnswer = document.getElementById('thCorrectAnswer');
  const thStatus = document.getElementById('thStatus');
  const quizResultsTable = document.getElementById('quizResultsTable');
  const quizResultsTableBody = document.getElementById('quizResultsTableBody');
  const btnRetryQuiz = document.getElementById('btnRetryQuiz');
  const btnRetryText = document.getElementById('btnRetryText');
  const btnChangeSettings = document.getElementById('btnChangeSettings');
  const btnSettingsText = document.getElementById('btnSettingsText');
  const btnReturnExplorer = document.getElementById('btnReturnExplorer');
  const btnReturnText = document.getElementById('btnReturnText');

  // --- Helper Functions ---
  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function getCountryData(c) {
    if (currentLang === 'uk' && c.translations && c.translations.uk) {
      return {
        country: c.translations.uk.country || c.country,
        region: c.translations.uk.region || c.region,
        capital: c.translations.uk.capital || c.capital,
        demonym: c.translations.uk.demonym || c.demonym,
        transcription: c.transcription,
        capitalTranscription: c.capitalTranscription,
        flagUrl: c.flagUrl,
        iso2: c.iso2,
        id: c.id,
        coordinates: c.coordinates || [0, 0],
        zoom: c.zoom || 5
      };
    }
    return {
      country: c.country,
      region: c.region,
      capital: c.capital,
      demonym: c.demonym,
      transcription: c.transcription,
      capitalTranscription: c.capitalTranscription,
      flagUrl: c.flagUrl,
      iso2: c.iso2,
      id: c.id,
      coordinates: c.coordinates || [0, 0],
      zoom: c.zoom || 5
    };
  }

  function getRegionName(reg) {
    if (currentLang === 'uk') {
      const sample = countriesData.find(c => c.region === reg);
      if (sample && sample.translations && sample.translations.uk && sample.translations.uk.region) {
        return sample.translations.uk.region;
      }
    }
    return reg;
  }

  // --- Bookmarks Helpers & Toast ---
  let toastTimer = null;
  function showBookmarkToast(countryName, isAdded) {
    if (!bookmarkToast) return;
    const msg = isAdded
      ? (currentLang === 'uk' ? `⭐ «${countryName}» збережено в закладки` : `⭐ Saved "${countryName}" to bookmarks`)
      : (currentLang === 'uk' ? `Видалено «${countryName}» із закладок` : `Removed "${countryName}" from bookmarks`);

    bookmarkToast.textContent = msg;
    bookmarkToast.classList.add('visible');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      bookmarkToast.classList.remove('visible');
    }, 2200);
  }

  function updateBookmarksUI() {
    const count = bookmarkedIds.size;
    if (headerBookmarksCount) {
      headerBookmarksCount.textContent = count;
    }
    const navCount = document.getElementById('navBookmarksCount');
    if (navCount) {
      navCount.textContent = count;
    }
    const qCount = document.getElementById('quizBookmarksCount');
    if (qCount) {
      qCount.textContent = count;
    }
    if (headerBookmarksBtn) {
      headerBookmarksBtn.classList.toggle('active', activeRegion === 'bookmarks');
    }
  }

  function toggleBookmark(countryId, countryName) {
    const isNowBookmarked = !bookmarkedIds.has(countryId);
    if (isNowBookmarked) {
      bookmarkedIds.add(countryId);
    } else {
      bookmarkedIds.delete(countryId);
    }

    try {
      localStorage.setItem('terra_atlas_bookmarks', JSON.stringify(Array.from(bookmarkedIds)));
    } catch (e) {
      console.warn('Could not persist bookmarks to localStorage', e);
    }

    showBookmarkToast(countryName || countryId, isNowBookmarked);
    updateBookmarksUI();

    if (activeRegion === 'bookmarks') {
      filterAndRenderCountries();
    } else {
      // Update existing buttons in DOM instantly without full list re-render
      const cardBtns = document.querySelectorAll(`.card-bookmark-btn[data-id="${countryId}"]`);
      const t = uiTranslations[currentLang];
      cardBtns.forEach(btn => {
        btn.classList.toggle('bookmarked', isNowBookmarked);
        btn.title = isNowBookmarked ? t.removeBookmark : t.addBookmark;
        btn.setAttribute('aria-label', `${isNowBookmarked ? t.removeBookmark : t.addBookmark}: ${countryName}`);
        const svg = btn.querySelector('svg');
        if (svg) {
          svg.setAttribute('fill', isNowBookmarked ? 'currentColor' : 'none');
        }
      });
    }

    updateModalBookmarkBtn();
  }

  function updateModalBookmarkBtn(country) {
    if (!modalBookmarkBtn) return;
    const c = country || (currentlyOpenIndex >= 0 && currentlyOpenIndex < currentFilteredList.length ? currentFilteredList[currentlyOpenIndex] : null);
    if (!c) return;

    const isBookmarked = bookmarkedIds.has(c.id);
    const t = uiTranslations[currentLang];
    const data = getCountryData(c);

    modalBookmarkBtn.classList.toggle('bookmarked', isBookmarked);
    modalBookmarkBtn.title = isBookmarked ? t.removeBookmark : t.addBookmark;
    modalBookmarkBtn.setAttribute('aria-label', `${isBookmarked ? t.removeBookmark : t.addBookmark}: ${data.country}`);

    const svg = modalBookmarkBtn.querySelector('svg');
    if (svg) {
      svg.setAttribute('fill', isBookmarked ? 'currentColor' : 'none');
    }
  }

  // --- Render Static UI Texts ---
  function applyLanguage() {
    const t = uiTranslations[currentLang];
    document.title = t.docTitle;
    document.documentElement.lang = currentLang;

    logoTitle.textContent = t.logoTitle;
    logoSubtitle.textContent = t.logoSubtitle;
    countriesTotalLabel.textContent = t.statsLabel;
    langFlag.textContent = t.langToggleFlag;
    langText.textContent = t.langToggleText;

    if (headerBookmarksLabel) headerBookmarksLabel.textContent = t.bookmarks;
    if (headerBookmarksBtn) headerBookmarksBtn.title = t.bookmarks;

    heroBadge.textContent = t.heroBadge;
    heroHeading.textContent = t.heroHeading;
    heroDescription.textContent = t.heroDescription;
    searchInput.placeholder = t.searchPlaceholder;

    emptyTitle.textContent = t.emptyTitle;
    emptyDesc.textContent = t.emptyDesc;
    btnResetFilter.textContent = t.btnReset;

    labelCapital.textContent = t.labelCapital;
    labelDemonym.textContent = t.labelDemonym;
    labelRegion.textContent = t.labelRegion;
    labelIsoCode.textContent = t.labelIsoCode;
    labelOpenFlagLink.textContent = t.labelOpenFlagLink;
    modalTipText.textContent = t.modalTipText;
    modalBtnDone.textContent = t.modalCloseBtnText;
    footerDesc.textContent = t.footerDesc;
    speechBtn.title = t.speakTitle;
    if (capitalSpeechBtn) capitalSpeechBtn.title = t.speakCapitalTitle;
    if (labelLocationMap) labelLocationMap.textContent = t.labelLocationMap;
    if (labelOpenInMaps) labelOpenInMaps.textContent = t.labelOpenInMaps;
    if (labelResetMap) labelResetMap.textContent = t.labelResetMap;

    // Quiz UI Localization
    if (headerQuizText) headerQuizText.textContent = t.quizNavText;
    if (quizHeroBadge) quizHeroBadge.textContent = t.quizHeroBadge;
    if (quizHeroHeading) quizHeroHeading.textContent = t.quizHeroHeading;
    if (quizHeroDescription) quizHeroDescription.textContent = t.quizHeroDescription;
    if (quizModalTitle) quizModalTitle.textContent = t.quizModalTitle;
    if (labelSelectMode) labelSelectMode.textContent = t.labelSelectMode;
    if (labelSelectRegion) labelSelectRegion.textContent = t.labelSelectRegion;
    if (labelSelectCount) labelSelectCount.textContent = t.labelSelectCount;
    if (labelSelectChoices) labelSelectChoices.textContent = t.labelSelectChoices;
    updateChoicesValBadge();
    if (btnStartQuizText) btnStartQuizText.textContent = t.btnStartQuizText;
    if (quizBackText) quizBackText.textContent = t.quizBackText;
    if (quizBookmarksLabel) quizBookmarksLabel.textContent = t.bookmarks;

    const modeTitle1 = document.getElementById('modeTitle1');
    const modeDesc1 = document.getElementById('modeDesc1');
    const modeTitle2 = document.getElementById('modeTitle2');
    const modeDesc2 = document.getElementById('modeDesc2');
    const modeTitle3 = document.getElementById('modeTitle3');
    const modeDesc3 = document.getElementById('modeDesc3');
    const modeTitle4 = document.getElementById('modeTitle4');
    const modeDesc4 = document.getElementById('modeDesc4');
    const modeTitle5 = document.getElementById('modeTitle5');
    const modeDesc5 = document.getElementById('modeDesc5');
    const modeTitle6 = document.getElementById('modeTitle6');
    const modeDesc6 = document.getElementById('modeDesc6');

    if (modeTitle1) modeTitle1.textContent = t.modeTitle1;
    if (modeDesc1) modeDesc1.textContent = t.modeDesc1;
    if (modeTitle2) modeTitle2.textContent = t.modeTitle2;
    if (modeDesc2) modeDesc2.textContent = t.modeDesc2;
    if (modeTitle3) modeTitle3.textContent = t.modeTitle3;
    if (modeDesc3) modeDesc3.textContent = t.modeDesc3;
    if (modeTitle4) modeTitle4.textContent = t.modeTitle4;
    if (modeDesc4) modeDesc4.textContent = t.modeDesc4;
    if (modeTitle5) modeTitle5.textContent = t.modeTitle5;
    if (modeDesc5) modeDesc5.textContent = t.modeDesc5;
    if (modeTitle6) modeTitle6.textContent = t.modeTitle6;
    if (modeDesc6) modeDesc6.textContent = t.modeDesc6;

    if (resultsBadge) resultsBadge.textContent = t.resultsBadge;
    if (statCorrectLbl) statCorrectLbl.textContent = t.statCorrectLbl;
    if (statWrongLbl) statWrongLbl.textContent = t.statWrongLbl;
    if (statAccuracyLbl) statAccuracyLbl.textContent = t.statAccuracyLbl;
    if (resultsTableTitle) resultsTableTitle.textContent = t.resultsTableTitle;
    if (thQuestion) thQuestion.textContent = t.thQuestion;
    if (thYourAnswer) thYourAnswer.textContent = t.thYourAnswer;
    if (thCorrectAnswer) thCorrectAnswer.textContent = t.thCorrectAnswer;
    if (thStatus) thStatus.textContent = t.thStatus;
    if (btnRetryText) btnRetryText.textContent = t.btnRetryText;
    if (btnSettingsText) btnSettingsText.textContent = t.btnSettingsText;
    if (btnReturnText) btnReturnText.textContent = t.btnReturnText;

    updateQuizRegionChipsLanguage();

    renderRegionNav();
    updateBookmarksUI();
    filterAndRenderCountries();

    // Re-render modal if currently open
    if (!modalBackdrop.classList.contains('hidden') && currentlyOpenIndex >= 0) {
      populateModal(currentFilteredList[currentlyOpenIndex]);
    }

    // Re-render active question if in quiz
    if (currentView === 'quiz' && quizQuestions.length > 0 && quizCurrentIndex < quizQuestions.length) {
      renderQuizQuestion();
    } else if (currentView === 'quiz' && !quizResultsSection.classList.contains('hidden')) {
      renderResultsTable();
    }
  }

  // --- Render Region Filter Navigation Pills ---
  function renderRegionNav() {
    const t = uiTranslations[currentLang];
    regionNav.innerHTML = '';

    // "All" button
    const allBtn = document.createElement('button');
    allBtn.className = `region-pill-btn ${activeRegion === 'all' ? 'active' : ''}`;
    allBtn.type = 'button';
    allBtn.innerHTML = `
      <span>${t.allRegions}</span>
      <span class="region-pill-count">${countriesData.length}</span>
    `;
    allBtn.addEventListener('click', () => {
      activeRegion = 'all';
      renderRegionNav();
      updateBookmarksUI();
      filterAndRenderCountries();
    });
    regionNav.appendChild(allBtn);

    // "Bookmarks" button
    const bookmarksBtn = document.createElement('button');
    bookmarksBtn.className = `region-pill-btn region-pill-bookmarks ${activeRegion === 'bookmarks' ? 'active' : ''}`;
    bookmarksBtn.type = 'button';
    bookmarksBtn.innerHTML = `
      <svg class="pill-star-icon" viewBox="0 0 24 24" fill="${activeRegion === 'bookmarks' ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
      <span>${t.bookmarks}</span>
      <span class="region-pill-count" id="navBookmarksCount">${bookmarkedIds.size}</span>
    `;
    bookmarksBtn.addEventListener('click', () => {
      activeRegion = 'bookmarks';
      renderRegionNav();
      updateBookmarksUI();
      filterAndRenderCountries();
    });
    regionNav.appendChild(bookmarksBtn);

    // Region buttons
    REGION_ORDER.forEach(reg => {
      const count = countriesData.filter(c => c.region === reg).length;
      if (count === 0) return;

      const regBtn = document.createElement('button');
      regBtn.className = `region-pill-btn ${activeRegion === reg ? 'active' : ''}`;
      regBtn.type = 'button';
      regBtn.innerHTML = `
        <span>${getRegionName(reg)}</span>
        <span class="region-pill-count">${count}</span>
      `;
      regBtn.addEventListener('click', () => {
        activeRegion = reg;
        renderRegionNav();
        updateBookmarksUI();
        filterAndRenderCountries();
      });
      regionNav.appendChild(regBtn);
    });
  }

  // --- Filter and Render Country Cards ---
  function filterAndRenderCountries() {
    const q = searchQuery.trim().toLowerCase();
    const t = uiTranslations[currentLang];

    // Filter list
    currentFilteredList = countriesData.filter(c => {
      // Region or Bookmarks filter
      if (activeRegion === 'bookmarks') {
        if (!bookmarkedIds.has(c.id)) {
          return false;
        }
      } else if (activeRegion !== 'all' && c.region !== activeRegion) {
        return false;
      }
      // Search filter: check English and Ukrainian fields
      if (q.length > 0) {
        const enCountry = (c.country || '').toLowerCase();
        const enCap = (c.capital || '').toLowerCase();
        const enDem = (c.demonym || '').toLowerCase();
        const ukCountry = (c.translations?.uk?.country || '').toLowerCase();
        const ukCap = (c.translations?.uk?.capital || '').toLowerCase();
        const ukDem = (c.translations?.uk?.demonym || '').toLowerCase();

        return enCountry.includes(q) ||
          enCap.includes(q) ||
          enDem.includes(q) ||
          ukCountry.includes(q) ||
          ukCap.includes(q) ||
          ukDem.includes(q);
      }
      return true;
    });

    // Update result bar
    if (activeRegion === 'bookmarks') {
      resultsCountText.textContent = currentLang === 'uk'
        ? `Відображено збережених закладок: ${currentFilteredList.length}`
        : `Showing ${currentFilteredList.length} bookmarked ${currentFilteredList.length === 1 ? 'country' : 'countries'}`;
    } else {
      resultsCountText.textContent = t.showingCount(currentFilteredList.length, countriesData.length);
    }

    // Toggle Empty State
    if (currentFilteredList.length === 0) {
      regionsContainer.innerHTML = '';
      if (activeRegion === 'bookmarks' && bookmarkedIds.size === 0 && q.length === 0) {
        emptyTitle.textContent = t.emptyBookmarksTitle;
        emptyDesc.textContent = t.emptyBookmarksDesc;
        btnResetFilter.textContent = t.btnResetBookmarks;
      } else {
        emptyTitle.textContent = t.emptyTitle;
        emptyDesc.textContent = t.emptyDesc;
        btnResetFilter.textContent = t.btnReset;
      }
      emptyState.classList.remove('hidden');
      return;
    } else {
      emptyState.classList.add('hidden');
    }

    // Group filtered results by region
    regionsContainer.innerHTML = '';

    REGION_ORDER.forEach(reg => {
      const regionCountries = currentFilteredList.filter(c => c.region === reg);
      if (regionCountries.length === 0) return;

      const section = document.createElement('section');
      section.className = 'region-section';
      section.id = `region-${reg.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

      // Region Header
      const header = document.createElement('div');
      header.className = 'region-header';
      header.innerHTML = `
        <div class="region-title-wrap">
          <h3 class="region-title">${getRegionName(reg)}</h3>
          <span class="region-count-badge">${regionCountries.length}</span>
        </div>
      `;
      section.appendChild(header);

      // Grid container
      const grid = document.createElement('div');
      grid.className = 'countries-grid';

      regionCountries.forEach(country => {
        const data = getCountryData(country);
        const card = document.createElement('div');
        card.className = 'country-card';
        card.tabIndex = 0;
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', `${data.country}, ${data.capital}`);

        const isBookmarked = bookmarkedIds.has(country.id);
        const bookmarkAria = isBookmarked ? t.removeBookmark : t.addBookmark;

        card.innerHTML = `
          <div class="card-top-row">
            <div class="card-flag-thumb">
              <img 
                class="card-flag-img" 
                src="${data.flagUrl}" 
                alt="Flag of ${data.country}"
                loading="lazy"
                onerror="this.onerror=null; this.src='${FLAG_FALLBACK_SVG}';"
              >
            </div>
            <div class="card-info">
              <h4 class="card-country-name" title="${data.country}">${data.country}</h4>
              <p class="card-capital-subtitle" title="${data.capital}">${data.capital}</p>
            </div>
            <button 
              class="card-bookmark-btn ${isBookmarked ? 'bookmarked' : ''}" 
              type="button" 
              data-id="${country.id}" 
              aria-label="${bookmarkAria}: ${data.country}" 
              title="${bookmarkAria}"
            >
              <svg class="star-icon" viewBox="0 0 24 24" fill="${isBookmarked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </button>
          </div>
          <div class="card-bottom-row">
            <span class="card-demonym-text" title="${data.demonym}">${data.demonym || '—'}</span>
            <svg class="card-arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>
        `;

        // Bookmark button click/keyboard handler (prevents modal opening)
        const starBtn = card.querySelector('.card-bookmark-btn');
        if (starBtn) {
          const handleStarAction = (e) => {
            e.stopPropagation();
            e.preventDefault();
            toggleBookmark(country.id, data.country);
          };
          starBtn.addEventListener('click', handleStarAction);
          starBtn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleStarAction(e);
            }
          });
        }

        // Click / Enter opens modal
        const openHandler = () => {
          const idx = currentFilteredList.indexOf(country);
          openCountryModal(idx);
        };

        card.addEventListener('click', openHandler);
        card.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openHandler();
          }
        });

        grid.appendChild(card);
      });

      section.appendChild(grid);
      regionsContainer.appendChild(section);
    });
  }

  // --- Modal Expansion & Details ---
  function openCountryModal(filteredIndex) {
    if (filteredIndex < 0 || filteredIndex >= currentFilteredList.length) return;
    currentlyOpenIndex = filteredIndex;
    const country = currentFilteredList[currentlyOpenIndex];
    populateModal(country);
    modalBackdrop.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    modalCard.scrollTop = 0;
    if (modalBackdrop) modalBackdrop.scrollTop = 0;
    modalCard.focus();

    // Invalidate map size so Leaflet renders at full container size
    setTimeout(() => {
      if (leafletMap) {
        leafletMap.invalidateSize();
        leafletMap.scrollWheelZoom.enable();
        leafletMap.touchZoom.enable();
        leafletMap.dragging.enable();
        if (currentCoords) {
          leafletMap.setView(currentCoords, currentZoom);
        }
      }
    }, 180);
  }

  function populateModal(country) {
    if (!country) return;
    const data = getCountryData(country);

    modalRegionBadge.textContent = data.region;
    modalCountryName.textContent = data.country;
    modalCountryTrans.textContent = data.transcription || '—';

    // High-resolution flag preview for expanded modal
    const highResFlagUrl = (data.flagUrl && data.flagUrl.includes('flagcdn.com/w320/'))
      ? data.flagUrl.replace('flagcdn.com/w320/', 'flagcdn.com/w640/')
      : data.flagUrl;

    modalFlagImg.src = highResFlagUrl;
    modalFlagImg.alt = `Flag of ${data.country}`;
    modalFlagImg.onerror = function () {
      if (this.src !== data.flagUrl && data.flagUrl) {
        this.src = data.flagUrl;
      } else {
        this.onerror = null;
        this.src = FLAG_FALLBACK_SVG;
      }
    };

    // Capital & Transcription
    modalCapitalVal.textContent = data.capital || '—';
    if (capitalSpeechBtn) {
      capitalSpeechBtn.style.display = (data.capital && data.capital !== '—') ? 'flex' : 'none';
    }
    if (data.capitalTranscription) {
      modalCapitalTransVal.textContent = data.capitalTranscription;
      modalCapitalTransVal.style.display = 'inline-block';
    } else {
      modalCapitalTransVal.textContent = '';
      modalCapitalTransVal.style.display = 'none';
    }

    // Demonym
    modalDemonymVal.textContent = data.demonym || '—';

    // Region
    modalRegionVal.textContent = data.region;

    // ISO & Direct Flag Link
    modalIsoVal.textContent = data.iso2 ? data.iso2.toUpperCase() : 'N/A';
    modalFlagDirectLink.href = data.flagUrl;

    // Interactive Geographic Map update
    updateCountryMap(country, data);

    // Update Bookmark Star in Modal Header
    updateModalBookmarkBtn(country);

    // Navigation buttons state
    modalPrevBtn.disabled = currentlyOpenIndex <= 0;
    modalPrevBtn.style.opacity = currentlyOpenIndex <= 0 ? '0.35' : '1';
    modalNextBtn.disabled = currentlyOpenIndex >= currentFilteredList.length - 1;
    modalNextBtn.style.opacity = currentlyOpenIndex >= currentFilteredList.length - 1 ? '0.35' : '1';
  }

  function closeModal() {
    modalBackdrop.classList.add('hidden');
    document.body.style.overflow = '';
  }

  function showPrevCountry() {
    if (currentlyOpenIndex > 0) {
      openCountryModal(currentlyOpenIndex - 1);
    }
  }

  function showNextCountry() {
    if (currentlyOpenIndex < currentFilteredList.length - 1) {
      openCountryModal(currentlyOpenIndex + 1);
    }
  }

  // --- Pronunciation Speech Synthesis ---
  function speakCountryName() {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();

    if (currentlyOpenIndex < 0 || currentlyOpenIndex >= currentFilteredList.length) return;
    const country = currentFilteredList[currentlyOpenIndex];
    const data = getCountryData(country);

    const utterance = new SpeechSynthesisUtterance(data.country);
    utterance.lang = currentLang === 'uk' ? 'uk-UA' : 'en-US';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  }

  function speakCapitalName() {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();

    if (currentlyOpenIndex < 0 || currentlyOpenIndex >= currentFilteredList.length) return;
    const country = currentFilteredList[currentlyOpenIndex];
    const data = getCountryData(country);
    if (!data.capital || data.capital === '—') return;

    // Clean notes in parentheses like "(official)" or "(political)"
    const cleanCap = data.capital.split('(')[0].trim();
    if (!cleanCap) return;

    const utterance = new SpeechSynthesisUtterance(cleanCap);
    utterance.lang = currentLang === 'uk' ? 'uk-UA' : 'en-US';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  }

  // --- Geographic Map (Leaflet) ---
  function formatCoordinates(lat, lng) {
    if (typeof lat !== 'number' || typeof lng !== 'number' || isNaN(lat) || isNaN(lng)) {
      return '';
    }
    const latDir = lat >= 0 ? 'N' : 'S';
    const lngDir = lng >= 0 ? 'E' : 'W';
    return `${Math.abs(lat).toFixed(2)}° ${latDir}, ${Math.abs(lng).toFixed(2)}° ${lngDir}`;
  }

  function initCountryMap() {
    if (typeof L === 'undefined') return;
    const mapEl = document.getElementById('countryMap');
    if (!mapEl || leafletMap) return;

    leafletMap = L.map(mapEl, {
      center: [20, 0],
      zoom: 3,
      scrollWheelZoom: true, // Enabled: roll mouse wheel to zoom in and out
      touchZoom: true,       // Enabled: pinch-to-zoom on phones & touch devices
      dragging: true,        // Enabled: swipe/drag to pan
      doubleClickZoom: true, // Enabled: double click to zoom in
      boxZoom: true,
      keyboard: true,
      zoomControl: true,
      attributionControl: true
    });

    // Google Maps Roadmap tile layer (explicit English language labels)
    const googleRoadmap = L.tileLayer('https://mt{s}.google.com/vt/lyrs=m&hl=en&gl=US&x={x}&y={y}&z={z}', {
      subdomains: ['0', '1', '2', '3'],
      maxZoom: 20,
      attribution: '&copy; <a href="https://www.google.com/maps" target="_blank" rel="noreferrer">Google Maps</a>'
    });

    // Fallback to OpenStreetMap standard tiles if Google tile server is unreachable
    const osmFallback = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap</a>'
    });

    googleRoadmap.on('tileerror', function () {
      if (!leafletMap.hasLayer(osmFallback)) {
        osmFallback.addTo(leafletMap);
      }
    });

    googleRoadmap.addTo(leafletMap);

    // Ensure map activates scroll zoom immediately on click or touch
    mapEl.addEventListener('click', () => {
      if (leafletMap) {
        leafletMap.scrollWheelZoom.enable();
      }
    });

    mapEl.addEventListener('touchstart', () => {
      if (leafletMap) {
        leafletMap.dragging.enable();
        leafletMap.touchZoom.enable();
      }
    }, { passive: true });
  }

  function updateCountryMap(country, data) {
    const coords = (country && country.coordinates && country.coordinates.length === 2)
      ? country.coordinates
      : [20, 0];
    const zoom = (country && country.zoom) ? country.zoom : 5;
    currentCoords = coords;
    currentZoom = zoom;

    if (modalMapCoords) {
      modalMapCoords.textContent = formatCoordinates(coords[0], coords[1]);
    }

    if (modalExternalMapLink) {
      const query = encodeURIComponent(`${data.country} ${data.capital && data.capital !== '—' ? data.capital : ''}`);
      modalExternalMapLink.href = `https://www.google.com/maps/search/?api=1&query=${query}`;
    }

    if (typeof L === 'undefined') return;
    initCountryMap();
    if (!leafletMap) return;

    // Glowing orange pulsating pin marker
    const pulseIcon = L.divIcon({
      className: 'map-pulse-marker',
      html: '<div class="map-marker-pulse"></div><div class="map-marker-pin"></div>',
      iconSize: [24, 24],
      iconAnchor: [12, 12],
      popupAnchor: [0, -12]
    });

    if (currentMarker) {
      currentMarker.setLatLng(coords);
    } else {
      currentMarker = L.marker(coords, { icon: pulseIcon }).addTo(leafletMap);
    }

    const popupContent = `
      <div class="map-popup-inner">
        <div class="map-popup-title">${data.country}</div>
        ${data.capital && data.capital !== '—' ? `<div class="map-popup-subtitle">🏛️ ${data.capital}</div>` : ''}
      </div>
    `;
    currentMarker.bindPopup(popupContent);

    leafletMap.invalidateSize();
    leafletMap.flyTo(coords, zoom, {
      duration: 0.9,
      easeLinearity: 0.25
    });
  }

  // --- Event Listeners ---

  // Language Toggle
  langToggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'uk' : 'en';
    localStorage.setItem('terra_atlas_lang', currentLang);
    applyLanguage();
  });

  // Search Input
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    if (searchQuery.length > 0) {
      clearSearchBtn.classList.add('visible');
    } else {
      clearSearchBtn.classList.remove('visible');
    }
    filterAndRenderCountries();
  });

  // Clear Search
  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    clearSearchBtn.classList.remove('visible');
    searchInput.focus();
    filterAndRenderCountries();
  });

  // Header Bookmarks Shortcut Button
  if (headerBookmarksBtn) {
    headerBookmarksBtn.addEventListener('click', () => {
      activeRegion = (activeRegion === 'bookmarks') ? 'all' : 'bookmarks';
      renderRegionNav();
      updateBookmarksUI();
      filterAndRenderCountries();
      const controlsWrapper = document.querySelector('.controls-wrapper');
      if (controlsWrapper) {
        controlsWrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  // Reset Filters from Empty State
  btnResetFilter.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    activeRegion = 'all';
    clearSearchBtn.classList.remove('visible');
    renderRegionNav();
    updateBookmarksUI();
    filterAndRenderCountries();
  });

  // Modal Bookmark Star Button
  if (modalBookmarkBtn) {
    modalBookmarkBtn.addEventListener('click', () => {
      if (currentlyOpenIndex >= 0 && currentlyOpenIndex < currentFilteredList.length) {
        const country = currentFilteredList[currentlyOpenIndex];
        const data = getCountryData(country);
        toggleBookmark(country.id, data.country);
      }
    });
  }

  // Modal Controls
  modalCloseBtn.addEventListener('click', closeModal);
  modalBtnDone.addEventListener('click', closeModal);
  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });

  modalPrevBtn.addEventListener('click', showPrevCountry);
  modalNextBtn.addEventListener('click', showNextCountry);
  speechBtn.addEventListener('click', speakCountryName);
  if (capitalSpeechBtn) capitalSpeechBtn.addEventListener('click', speakCapitalName);

  if (modalMapResetBtn) {
    modalMapResetBtn.addEventListener('click', () => {
      if (leafletMap && currentCoords) {
        leafletMap.flyTo(currentCoords, currentZoom, { duration: 0.6 });
        if (currentMarker) {
          currentMarker.openPopup();
        }
      }
    });
  }

  // Keyboard Shortcuts
  window.addEventListener('keydown', (e) => {
    if (!modalBackdrop.classList.contains('hidden')) {
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowLeft') {
        showPrevCountry();
      } else if (e.key === 'ArrowRight') {
        showNextCountry();
      }
    }
  });

  // ==========================================================================
  // Interactive Quiz Hub Engine
  // ==========================================================================

  // ==========================================================================
  // Interactive Quiz Modal Engine
  // ==========================================================================

  function resetQuizState() {
    quizScore = 0;
    quizCurrentIndex = 0;
    quizQuestions = [];
    quizResultsLog = [];
    quizAnswered = false;
    if (quizInlineActionBar) {
      quizInlineActionBar.classList.add('hidden');
    }
    showQuizScreen('setup');
  }

  function openQuizModal() {
    if (quizModalBackdrop) {
      quizModalBackdrop.classList.remove('hidden');
      if (headerQuizBtn) headerQuizBtn.classList.add('active');
      document.body.style.overflow = 'hidden';
      window.location.hash = '#quiz';
      currentView = 'quiz';
      showQuizScreen('setup');
    }
  }

  function closeQuizModal() {
    if (quizModalBackdrop) {
      quizModalBackdrop.classList.add('hidden');
      if (headerQuizBtn) headerQuizBtn.classList.remove('active');
      document.body.style.overflow = '';
      window.location.hash = '#explorer';
      currentView = 'explorer';
      resetQuizState();
    }
  }

  function switchView(viewName) {
    if (viewName === 'quiz') {
      openQuizModal();
    } else {
      closeQuizModal();
    }
  }

  function showQuizScreen(screenName) {
    if (quizSetupSection) quizSetupSection.classList.toggle('hidden', screenName !== 'setup');
    if (quizActiveSection) quizActiveSection.classList.toggle('hidden', screenName !== 'active');
    if (quizResultsSection) quizResultsSection.classList.toggle('hidden', screenName !== 'results');
    if (quizModalCard) {
      const modalBody = quizModalCard.querySelector('.quiz-modal-body');
      if (modalBody) {
        modalBody.scrollTop = 0;
      }
    }
  }

  function setQuizQuestionsCount(count) {
    count = parseInt(count, 10);
    if (![5, 10, 15, 20].includes(count)) {
      count = 10;
    }
    quizTotalQuestions = count;
    try {
      localStorage.setItem('terra_atlas_quiz_questions', count.toString());
    } catch (e) {}

    if (quizCountGroup) {
      quizCountGroup.querySelectorAll('.quiz-count-btn').forEach(btn => {
        const btnVal = parseInt(btn.getAttribute('data-count'), 10);
        btn.classList.toggle('active', btnVal === count);
      });
    }
  }

  function setQuizChoicesCount(count) {
    count = Math.max(3, Math.min(6, parseInt(count, 10) || 4));
    quizChoicesCount = count;
    try {
      localStorage.setItem('terra_atlas_quiz_choices', count.toString());
    } catch (e) {}
    if (quizChoicesRange) quizChoicesRange.value = count;
    if (quizChoicesTicks) {
      quizChoicesTicks.querySelectorAll('.quiz-choice-tick-btn').forEach(btn => {
        const btnVal = parseInt(btn.getAttribute('data-choices'), 10);
        btn.classList.toggle('active', btnVal === count);
      });
    }
    updateChoicesValBadge();
  }

  function updateChoicesValBadge() {
    if (!choicesValBadge) return;
    const t = uiTranslations[currentLang];
    choicesValBadge.textContent = t.choicesLabel ? t.choicesLabel(quizChoicesCount) : `${quizChoicesCount} choices`;
  }

  function updateQuizRegionChipsLanguage() {
    if (!quizRegionChips) return;
    const t = uiTranslations[currentLang];
    const chips = quizRegionChips.querySelectorAll('.quiz-chip-btn');
    chips.forEach(chip => {
      const reg = chip.getAttribute('data-region');
      if (reg === 'all') {
        chip.textContent = t.allRegions;
      } else if (reg === 'bookmarks') {
        chip.innerHTML = `⭐ <span id="quizBookmarksLabel">${t.bookmarks}</span> (<span id="quizBookmarksCount">${bookmarkedIds.size}</span>)`;
      } else {
        chip.textContent = getRegionName(reg);
      }
    });
  }

  function setupQuizEventListeners() {
    // 1. Header Logo Brand Click -> Return to Explorer / Main page
    if (headerLogoBrand) {
      headerLogoBrand.addEventListener('click', () => {
        closeModal();
        closeQuizModal();
        if (searchInput) searchInput.value = '';
        activeRegion = 'all';
        renderRegionNav();
        filterAndRenderCountries();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      headerLogoBrand.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          headerLogoBrand.click();
        }
      });
    }

    // 2. Header Quiz Button -> Open / Toggle Quiz Modal
    if (headerQuizBtn) {
      headerQuizBtn.addEventListener('click', () => {
        if (quizModalBackdrop && !quizModalBackdrop.classList.contains('hidden')) {
          closeQuizModal();
        } else {
          openQuizModal();
        }
      });
    }

    // 3. Quiz Modal Close Button & Backdrop Click
    if (quizModalCloseBtn) {
      quizModalCloseBtn.addEventListener('click', closeQuizModal);
    }

    if (quizModalBackdrop) {
      quizModalBackdrop.addEventListener('click', (e) => {
        if (e.target === quizModalBackdrop) {
          closeQuizModal();
        }
      });
    }

    // 4. Global Keyboard Listener for Esc in Quiz Modal
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && quizModalBackdrop && !quizModalBackdrop.classList.contains('hidden')) {
        closeQuizModal();
      }
    });

    // 5. Hash change handler
    window.addEventListener('hashchange', () => {
      if (window.location.hash === '#quiz') {
        openQuizModal();
      } else if (window.location.hash !== '#quiz' && quizModalBackdrop && !quizModalBackdrop.classList.contains('hidden')) {
        closeQuizModal();
      }
    });

    // 6. Quiz Modes Selector
    if (quizModesGrid) {
      quizModesGrid.addEventListener('click', (e) => {
        const card = e.target.closest('.quiz-mode-card');
        if (!card) return;
        quizModesGrid.querySelectorAll('.quiz-mode-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        quizMode = card.getAttribute('data-mode');
      });
    }

    // 7. Quiz Region Selector
    if (quizRegionChips) {
      quizRegionChips.addEventListener('click', (e) => {
        const chip = e.target.closest('.quiz-chip-btn');
        if (!chip) return;
        quizRegionChips.querySelectorAll('.quiz-chip-btn').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        quizRegion = chip.getAttribute('data-region');
      });
    }

    // 8. Quiz Question Count Selector
    if (quizCountGroup) {
      quizCountGroup.addEventListener('click', (e) => {
        const btn = e.target.closest('.quiz-count-btn');
        if (!btn) return;
        const count = parseInt(btn.getAttribute('data-count'), 10);
        setQuizQuestionsCount(count);
      });
    }

    // 9. Answer Choices Count Selector (3 to 6 slider & ticks)
    if (quizChoicesRange) {
      quizChoicesRange.addEventListener('input', (e) => {
        setQuizChoicesCount(e.target.value);
      });
    }

    if (quizChoicesTicks) {
      quizChoicesTicks.addEventListener('click', (e) => {
        const btn = e.target.closest('.quiz-choice-tick-btn');
        if (!btn) return;
        setQuizChoicesCount(btn.getAttribute('data-choices'));
      });
    }

    // Initialize UI controls with saved preferences
    setQuizQuestionsCount(quizTotalQuestions);
    setQuizChoicesCount(quizChoicesCount);

    // 10. Start Quiz Button
    if (btnStartQuiz) {
      btnStartQuiz.addEventListener('click', startQuiz);
    }

    // 11. Exit Quiz to Setup
    if (quizExitBtn) {
      quizExitBtn.addEventListener('click', () => {
        showQuizScreen('setup');
      });
    }

    // 12. Next Question Button
    if (btnNextQuestion) {
      btnNextQuestion.addEventListener('click', nextQuestion);
    }

    // 13. Results Screen Buttons
    if (btnRetryQuiz) {
      btnRetryQuiz.addEventListener('click', startQuiz);
    }
    if (btnChangeSettings) {
      btnChangeSettings.addEventListener('click', () => {
        showQuizScreen('setup');
      });
    }
    if (btnReturnExplorer) {
      btnReturnExplorer.addEventListener('click', closeQuizModal);
    }
  }

  function startQuiz() {
    const t = uiTranslations[currentLang];
    let pool = [];

    if (quizRegion === 'bookmarks') {
      pool = countriesData.filter(c => bookmarkedIds.has(c.id));
      if (pool.length < quizChoicesCount) {
        showBookmarkToast(t.notEnoughBookmarks, false);
        quizRegion = 'all';
        if (quizRegionChips) {
          quizRegionChips.querySelectorAll('.quiz-chip-btn').forEach(c => {
            c.classList.toggle('active', c.getAttribute('data-region') === 'all');
          });
        }
        pool = countriesData.slice();
      }
    } else if (quizRegion !== 'all') {
      pool = countriesData.filter(c => c.region === quizRegion);
      if (pool.length < quizChoicesCount) {
        pool = countriesData.slice();
      }
    } else {
      pool = countriesData.slice();
    }

    // Shuffle pool
    const shuffledPool = pool.slice().sort(() => Math.random() - 0.5);
    const numQuestions = Math.min(quizTotalQuestions, shuffledPool.length);
    const targetCountries = shuffledPool.slice(0, numQuestions);

    const availableModes = [
      'flag_to_country',
      'flag_to_capital',
      'country_to_capital',
      'country_to_flag',
      'capital_to_country'
    ];

    const numDistractors = Math.max(2, quizChoicesCount - 1);

    quizQuestions = targetCountries.map(country => {
      const qMode = (quizMode === 'mixed')
        ? availableModes[Math.floor(Math.random() * availableModes.length)]
        : quizMode;

      // Select distractors from pool, fallback to all countries if pool is small
      let candidates = pool.filter(c => c.id !== country.id).sort(() => Math.random() - 0.5);
      if (candidates.length < numDistractors) {
        const extra = countriesData.filter(c => c.id !== country.id && !candidates.includes(c)).sort(() => Math.random() - 0.5);
        candidates = candidates.concat(extra);
      }
      const distractors = candidates.slice(0, numDistractors);

      return {
        country,
        mode: qMode,
        distractors
      };
    });

    quizScore = 0;
    quizCurrentIndex = 0;
    quizResultsLog = [];
    showQuizScreen('active');
    renderQuizQuestion();
  }

  function renderQuizQuestion() {
    if (quizCurrentIndex >= quizQuestions.length) {
      showQuizResults();
      return;
    }

    const t = uiTranslations[currentLang];
    const q = quizQuestions[quizCurrentIndex];
    const country = q.country;
    const countryData = getCountryData(country);
    q.countryData = countryData;

    quizAnswered = false;
    if (quizInlineActionBar) quizInlineActionBar.classList.add('hidden');

    // Update trackers
    quizQCounter.textContent = t.quizQuestionOf(quizCurrentIndex + 1, quizQuestions.length);
    quizScoreVal.textContent = quizScore;
    const progressPercent = (quizCurrentIndex / quizQuestions.length) * 100;
    quizProgressFill.style.width = `${progressPercent}%`;

    // Badges
    quizActiveRegionBadge.textContent = quizRegion === 'all'
      ? t.allRegions
      : (quizRegion === 'bookmarks' ? t.bookmarks : getRegionName(quizRegion));

    // Mode title
    const modeBadgeMap = {
      flag_to_country: t.modeTitle1,
      flag_to_capital: t.modeTitle2,
      country_to_capital: t.modeTitle3,
      country_to_flag: t.modeTitle4,
      capital_to_country: t.modeTitle5
    };
    quizModeBadge.textContent = modeBadgeMap[q.mode] || t.modeTitle6;

    // Distractor data array
    const distractorDataList = q.distractors.map(d => ({
      countryObj: d,
      data: getCountryData(d)
    }));

    // Build question options and prompt according to mode
    let promptText = '';
    let targetHtml = '';
    let options = [];

    if (q.mode === 'flag_to_country') {
      promptText = t.promptFlagToCountry;
      targetHtml = `<img class="quiz-target-flag" src="${country.flagUrl}" alt="Flag" onerror="this.src='${FLAG_FALLBACK_SVG}'">`;
      options = [
        { text: countryData.country, isCorrect: true, country }
      ].concat(distractorDataList.map(d => ({
        text: d.data.country,
        isCorrect: false,
        country: d.countryObj
      })));
    } else if (q.mode === 'flag_to_capital') {
      promptText = t.promptFlagToCapital;
      targetHtml = `<img class="quiz-target-flag" src="${country.flagUrl}" alt="Flag" onerror="this.src='${FLAG_FALLBACK_SVG}'">`;
      options = [
        { text: countryData.capital, isCorrect: true, country }
      ].concat(distractorDataList.map(d => ({
        text: d.data.capital,
        isCorrect: false,
        country: d.countryObj
      })));
    } else if (q.mode === 'country_to_capital') {
      promptText = t.promptCountryToCapital(countryData.country);
      targetHtml = `<div class="quiz-target-name">${countryData.country}</div>`;
      options = [
        { text: countryData.capital, isCorrect: true, country }
      ].concat(distractorDataList.map(d => ({
        text: d.data.capital,
        isCorrect: false,
        country: d.countryObj
      })));
    } else if (q.mode === 'country_to_flag') {
      promptText = t.promptCountryToFlag(countryData.country);
      targetHtml = `<div class="quiz-target-name">${countryData.country}</div>`;
      options = [
        { flagUrl: country.flagUrl, isCorrect: true, country }
      ].concat(distractorDataList.map(d => ({
        flagUrl: d.countryObj.flagUrl,
        isCorrect: false,
        country: d.countryObj
      })));
    } else if (q.mode === 'capital_to_country') {
      promptText = t.promptCapitalToCountry(countryData.capital || country.capital);
      targetHtml = `<div class="quiz-target-name">🏛️ ${countryData.capital || country.capital}</div>`;
      options = [
        { text: countryData.country, isCorrect: true, country }
      ].concat(distractorDataList.map(d => ({
        text: d.data.country,
        isCorrect: false,
        country: d.countryObj
      })));
    }

    // Shuffle options
    const shuffledOptions = options.sort(() => Math.random() - 0.5);
    q.shuffledOptions = shuffledOptions;

    quizQuestionPrompt.textContent = promptText;
    quizPromptTarget.innerHTML = targetHtml;

    // Render options inside container
    quizOptionsContainer.innerHTML = '';
    const isFlagsMode = (q.mode === 'country_to_flag');

    if (isFlagsMode) {
      quizOptionsContainer.className = 'quiz-options-container flags-grid';
    } else if (shuffledOptions.length === 3) {
      quizOptionsContainer.className = 'quiz-options-container cols-3';
    } else {
      quizOptionsContainer.className = 'quiz-options-container cols-2';
    }

    shuffledOptions.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';

      if (isFlagsMode) {
        btn.className = 'quiz-option-flag-card';
        btn.setAttribute('aria-label', `Flag option ${idx + 1}`);
        btn.innerHTML = `<img src="${opt.flagUrl}" alt="Flag option" loading="lazy" onerror="this.src='${FLAG_FALLBACK_SVG}'">`;
      } else {
        btn.className = 'quiz-option-btn';
        btn.textContent = opt.text || '—';
      }

      btn.addEventListener('click', () => {
        handleQuizAnswer(btn, opt, q);
      });

      quizOptionsContainer.appendChild(btn);
    });
  }

  function handleQuizAnswer(selectedBtn, selectedOpt, q) {
    if (quizAnswered) return;
    quizAnswered = true;

    const t = uiTranslations[currentLang];
    const isCorrect = selectedOpt.isCorrect;
    const countryData = q.countryData;
    const correctOpt = q.shuffledOptions.find(o => o.isCorrect);

    // Record question result for results table breakdown
    quizResultsLog.push({
      questionNum: quizCurrentIndex + 1,
      country: q.country,
      countryData: countryData,
      mode: q.mode,
      promptText: quizQuestionPrompt.textContent,
      selectedOption: selectedOpt,
      correctOption: correctOpt,
      isCorrect: isCorrect
    });

    // Disable all option buttons and reveal correct answer
    const allBtns = quizOptionsContainer.querySelectorAll('button');
    allBtns.forEach((btn, idx) => {
      btn.disabled = true;
      const opt = q.shuffledOptions[idx];
      if (opt.isCorrect) {
        if (!isCorrect) {
          btn.classList.add('reveal-correct');
        }
      }
    });

    if (isCorrect) {
      quizScore++;
      selectedBtn.classList.add('is-correct');
      quizScoreVal.textContent = quizScore;
      quizInlineActionBar.className = 'quiz-inline-action-bar correct';
      feedbackIcon.textContent = '🎉';
      feedbackTitle.textContent = t.feedbackCorrect;
      const subtitleText = `${countryData.country}${countryData.capital && countryData.capital !== '—' ? ' • ' + countryData.capital : ''}`;
      feedbackSubtitle.textContent = subtitleText;
    } else {
      selectedBtn.classList.add('is-wrong');
      quizInlineActionBar.className = 'quiz-inline-action-bar wrong';
      feedbackIcon.textContent = '❌';
      feedbackTitle.textContent = t.feedbackWrong;
      const correctLabel = (q.mode === 'country_to_flag')
        ? countryData.country
        : (q.mode === 'flag_to_capital' || q.mode === 'country_to_capital' ? countryData.capital : countryData.country);
      feedbackSubtitle.textContent = `${t.feedbackCorrectWas} ${correctLabel}`;
    }

    // Update progress track
    const progressPercent = ((quizCurrentIndex + 1) / quizQuestions.length) * 100;
    quizProgressFill.style.width = `${progressPercent}%`;

    // Next button label
    const isLast = (quizCurrentIndex === quizQuestions.length - 1);
    btnNextQuestionText.textContent = isLast ? t.btnFinishQuizText : t.btnNextQuestionText;

    // Reveal inline action bar immediately right below the options (ZERO SCROLLING!)
    quizInlineActionBar.classList.remove('hidden');

    // Auto-focus next button for instant keyboard / touch advance
    setTimeout(() => {
      if (btnNextQuestion) btnNextQuestion.focus();
    }, 80);
  }

  function nextQuestion() {
    quizCurrentIndex++;
    if (quizCurrentIndex < quizQuestions.length) {
      renderQuizQuestion();
    } else {
      showQuizResults();
    }
  }

  function showQuizResults() {
    const t = uiTranslations[currentLang];
    const total = quizQuestions.length;
    const score = quizScore;
    const percent = total > 0 ? Math.round((score / total) * 100) : 0;
    const mistakes = total - score;

    resultsScoreNumber.textContent = `${score}/${total}`;
    resultsScorePercent.textContent = `${percent}%`;

    if (percent >= 80) {
      resultsHeading.textContent = t.resultsGreatJob;
    } else if (percent >= 50) {
      resultsHeading.textContent = t.resultsGoodJob;
    } else {
      resultsHeading.textContent = t.resultsKeepPracticing;
    }

    resultsDescription.textContent = t.resultsDesc(score, total, percent);

    // Key Stats Row
    if (statCorrectVal) statCorrectVal.textContent = score;
    if (statWrongVal) statWrongVal.textContent = mistakes;
    if (statAccuracyVal) statAccuracyVal.textContent = `${percent}%`;

    // Render detailed results table
    renderResultsTable();

    showQuizScreen('results');
  }

  function renderResultsTable() {
    if (!quizResultsTableBody) return;
    quizResultsTableBody.innerHTML = '';
    const t = uiTranslations[currentLang];

    quizResultsLog.forEach(log => {
      const tr = document.createElement('tr');

      // 1. # Column
      const tdNum = document.createElement('td');
      tdNum.className = 'col-num';
      tdNum.textContent = log.questionNum;
      tr.appendChild(tdNum);

      // 2. Question / Target Column
      const tdTarget = document.createElement('td');
      tdTarget.className = 'col-target';
      const cData = log.countryData;
      const flagImg = `<img class="table-target-flag" src="${log.country.flagUrl}" alt="Flag" loading="lazy" onerror="this.src='${FLAG_FALLBACK_SVG}'">`;
      tdTarget.innerHTML = `
        <div class="table-target-cell">
          ${flagImg}
          <div>
            <span class="table-target-text">${escapeHtml(cData.country)}</span>
            <span class="table-target-sub">${cData.capital && cData.capital !== '—' ? '🏛️ ' + escapeHtml(cData.capital) : escapeHtml(cData.region)}</span>
          </div>
        </div>
      `;
      tr.appendChild(tdTarget);

      // 3. User's Answer Column (Highlighted with green ✓ or red ✗)
      const tdUser = document.createElement('td');
      tdUser.className = 'col-user';
      const userText = formatOptionDisplay(log.selectedOption);
      const userPillClass = log.isCorrect ? 'ans-pill correct' : 'ans-pill wrong';
      const userIcon = log.isCorrect ? '✓' : '✗';
      tdUser.innerHTML = `<span class="${userPillClass}">${userIcon} ${userText}</span>`;
      tr.appendChild(tdUser);

      // 4. Correct Answer Column (Soft emerald green pill)
      const tdCorrect = document.createElement('td');
      tdCorrect.className = 'col-correct';
      const correctText = formatOptionDisplay(log.correctOption);
      tdCorrect.innerHTML = `<span class="ans-correct-pill">✓ ${correctText}</span>`;
      tr.appendChild(tdCorrect);

      // 5. Status Column
      const tdStatus = document.createElement('td');
      tdStatus.className = 'col-status';
      const statusClass = log.isCorrect ? 'status-tag correct' : 'status-tag wrong';
      const statusText = log.isCorrect ? t.statusCorrect : t.statusWrong;
      tdStatus.innerHTML = `<span class="${statusClass}">${statusText}</span>`;
      tr.appendChild(tdStatus);

      quizResultsTableBody.appendChild(tr);
    });
  }

  function formatOptionDisplay(opt) {
    if (!opt) return '—';
    if (opt.flagUrl) {
      const countryName = opt.country ? getCountryData(opt.country).country : '';
      return `<img src="${opt.flagUrl}" alt="Flag" style="width:22px;height:15px;object-fit:cover;border-radius:2px;display:inline-block;vertical-align:middle;margin-right:4px;"> ${escapeHtml(countryName)}`;
    }
    return escapeHtml(opt.text || '—');
  }

  // --- Initialization ---
  function init() {
    if (typeof countriesData === 'undefined' || !Array.isArray(countriesData)) {
      console.error('TerraAtlas: countriesData not found in data.js.');
      return;
    }

    countriesTotalCount.textContent = countriesData.length;
    setupQuizEventListeners();
    applyLanguage();

    if (window.location.hash === '#quiz') {
      switchView('quiz');
    }
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();