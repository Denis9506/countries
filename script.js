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
      labelResetMap: "Center"
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
      labelResetMap: "Центр"
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
  let activeRegion = 'all'; // 'all' or specific English region name
  let searchQuery = '';
  let currentlyOpenIndex = -1; // index in currentFilteredList
  let currentFilteredList = [];

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
  const speechBtn = document.getElementById('speechBtn');
  const capitalSpeechBtn = document.getElementById('capitalSpeechBtn');

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

  // --- Helper Functions ---
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

    renderRegionNav();
    filterAndRenderCountries();

    // Re-render modal if currently open
    if (!modalBackdrop.classList.contains('hidden') && currentlyOpenIndex >= 0) {
      populateModal(currentFilteredList[currentlyOpenIndex]);
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
      filterAndRenderCountries();
    });
    regionNav.appendChild(allBtn);

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
      // Region filter
      if (activeRegion !== 'all' && c.region !== activeRegion) {
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
    resultsCountText.textContent = t.showingCount(currentFilteredList.length, countriesData.length);

    // Toggle Empty State
    if (currentFilteredList.length === 0) {
      regionsContainer.innerHTML = '';
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
          </div>
          <div class="card-bottom-row">
            <span class="card-demonym-text" title="${data.demonym}">${data.demonym || '—'}</span>
            <svg class="card-arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>
        `;

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

  // Reset Filters from Empty State
  btnResetFilter.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    activeRegion = 'all';
    clearSearchBtn.classList.remove('visible');
    renderRegionNav();
    filterAndRenderCountries();
  });

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

  // --- Initialization ---
  function init() {
    if (typeof countriesData === 'undefined' || !Array.isArray(countriesData)) {
      console.error('TerraAtlas: countriesData not found in data.js.');
      return;
    }

    countriesTotalCount.textContent = countriesData.length;
    applyLanguage();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();