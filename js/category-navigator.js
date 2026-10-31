/**
 * ColdPackPro - Digital Catalog Isolated Category Navigation Engine
 * Requirement:
 * - Each category ONLY displays products belonging to that category (e.g. Cooler Boxes only shows Cooler Boxes)
 * - Do NOT show other categories below it when scrolling down
 * - Support smooth category switching, previous/next buttons, and deep linking from search and XLSX links
 */

(function () {
  const CATEGORY_CONFIG = [
    {
      key: 'gel-packs',
      nameEn: 'Gel Ice Packs',
      nameZh: 'Gel Ice Packs',
      countEn: '43 Models',
      countZh: '43 Models',
      sectionIds: ['gel-packs'],
      primarySectionId: 'gel-packs',
      aliases: ['gel-packs', 'gel', 'ice-packs', 'water-activated', 'hydration-sheets', 'instant-packs', 'instant-cold', 'instant', 'water']
    },
    {
      key: 'pcm',
      nameEn: 'PCM Bricks',
      nameZh: 'PCM Bricks',
      countEn: '12 Models',
      countZh: '12 Models',
      sectionIds: ['pcm'],
      primarySectionId: 'pcm',
      aliases: ['pcm', 'pcm-bricks', 'phase-change']
    },
    {
      key: 'cooler-boxes',
      nameEn: 'Cooler Boxes',
      nameZh: 'Cooler Boxes',
      countEn: '33+ Models',
      countZh: '33+ Models',
      sectionIds: ['cooler-box-catalog', 'trolley'],
      primarySectionId: 'cooler-box-catalog',
      aliases: ['cooler-box-catalog', 'cooler-boxes', 'coolers', 'cooler', 'trolley']
    },
    {
      key: 'epp',
      nameEn: 'EPP Foam Boxes',
      nameZh: 'EPP Foam Boxes',
      countEn: '21 Models',
      countZh: '21 Models',
      sectionIds: ['epp'],
      primarySectionId: 'epp',
      aliases: ['epp', 'epp-boxes', 'epp-foam']
    },
    {
      key: 'all',
      nameEn: 'All Categories',
      nameZh: 'All Categories',
      countEn: 'All 87+ Products',
      countZh: 'All 87+ Products',
      sectionIds: ['cooler-box-catalog', 'trolley', 'epp', 'pcm', 'gel-packs'],
      primarySectionId: 'cooler-box-catalog',
      aliases: ['all', 'all-categories']
    }
  ];

  const ALL_SECTION_IDS = [
    'cooler-box-catalog',
    'trolley',
    'epp',
    'pcm',
    'gel-packs'
  ];

  // Core product series for cyclic navigation
  const CYCLIC_CATEGORY_KEYS = [
    'gel-packs',
    'pcm',
    'cooler-boxes',
    'epp'
  ];

  let currentCategory = 'cooler-boxes';

  function getLang() {
    return (window.CATALOG_CURRENT_LANG || localStorage.getItem('coldpackpro_lang') || 'en').startsWith('zh') ? 'zh' : 'en';
  }

  function findCategoryByKeyOrAlias(input) {
    if (!input) return null;
    const clean = input.toLowerCase().replace(/^#/, '').trim();
    for (const cat of CATEGORY_CONFIG) {
      if (cat.key === clean || (cat.aliases && cat.aliases.includes(clean))) {
        return cat;
      }
    }
    return null;
  }

  function findCategoryBySectionId(secId) {
    if (!secId) return null;
    for (const cat of CATEGORY_CONFIG) {
      if (cat.key !== 'all' && cat.sectionIds.includes(secId)) {
        return cat;
      }
    }
    return null;
  }

  function findCategoryByElementId(elId) {
    if (!elId) return null;
    const targetEl = document.getElementById(elId);
    if (targetEl) {
      const parentSec = targetEl.closest('section');
      if (parentSec && parentSec.id) {
        const cat = findCategoryBySectionId(parentSec.id);
        if (cat) return cat;
      }
    }
    // Heuristic fallback based on model prefix
    const lower = elId.toLowerCase();
    if (lower.includes('epp-')) return findCategoryByKeyOrAlias('epp');
    if (lower.includes('pcm-') || lower.includes('xlh-')) return findCategoryByKeyOrAlias('pcm');
    if (lower.includes('xld-') || lower.includes('zxd-') || lower.includes('zsd-') || lower.includes('sld-') || lower.includes('gp-') || lower.includes('gel') || lower.includes('water') || lower.includes('sheet') || lower.includes('instant') || lower.includes('icp-')) {
      return findCategoryByKeyOrAlias('gel-packs');
    }
    if (lower.includes('hp-16c') || lower.includes('hp-26c') || lower.includes('hp-65c') || lower.includes('hp-28lg') || lower.includes('hp-38lg') || lower.includes('hp-65lg') || lower.includes('trolley')) return findCategoryByKeyOrAlias('cooler-boxes');
    if (lower.includes('hp-')) return findCategoryByKeyOrAlias('cooler-boxes');
    return findCategoryByKeyOrAlias('cooler-boxes');
  }

  function switchCatalogCategory(targetKey, shouldScroll = true, event = null) {
    if (event && typeof event.preventDefault === 'function') {
      event.preventDefault();
    }

    const catObj = findCategoryByKeyOrAlias(targetKey) || CATEGORY_CONFIG[0];
    currentCategory = catObj.key;

    // Show/hide sections: only the selected category sections remain visible!
    const activeSecIds = new Set(catObj.sectionIds);
    ALL_SECTION_IDS.forEach(secId => {
      const secEl = document.getElementById(secId);
      if (secEl) {
        if (activeSecIds.has(secId)) {
          secEl.classList.remove('hidden');
          secEl.style.display = '';
        } else {
          secEl.classList.add('hidden');
          secEl.style.display = 'none';
        }
      }
    });

    // If navigated via legacy alias, automatically activate corresponding gel subtab
    if (typeof window.filterGelModels === 'function') {
      if (targetKey === 'water-activated' || targetKey === 'hydration-sheets') {
        window.filterGelModels('self');
      } else if (targetKey === 'instant-packs' || targetKey === 'instant-cold' || targetKey === 'instant') {
        window.filterGelModels('instant');
      }
    }

    // Update navigation bars and indicators
    updateCategoryNavStyles(currentCategory);
    updateCategoryIndicatorBar(catObj);
    updateBottomSwitcherBar(catObj);

    // Save preference
    try {
      sessionStorage.setItem('coldpackpro_active_cat', currentCategory);
    } catch (e) {}

    // Scroll to section top
    if (shouldScroll) {
      const targetSec = document.getElementById(catObj.primarySectionId);
      if (targetSec) {
        const yOffset = -90;
        const y = targetSec.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
      }
    }

    // Update URL hash smoothly without causing full jump
    if (window.history && window.history.replaceState) {
      window.history.replaceState(null, '', '#' + (catObj.key === 'cooler-boxes' ? 'cooler-box-catalog' : catObj.key));
    }
  }

  function updateCategoryNavStyles(activeKey) {
    const isZh = getLang() === 'zh';

    // 1. Desktop Top-Level Nav Links
    document.querySelectorAll('[data-nav-cat]').forEach(el => {
      const cat = el.getAttribute('data-nav-cat');
      const isActive = (cat === activeKey) || (cat === 'all' && activeKey !== 'all');

      if (isActive) {
        el.className = 'nav-cat-item transition text-cyan-300 font-bold flex items-center gap-1.5 bg-cyan-950/80 px-3.5 py-1.5 rounded-full border border-cyan-400 shadow-md shadow-cyan-500/20';
        if (!el.querySelector('.pulse-dot')) {
          const dot = document.createElement('span');
          dot.className = 'pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse';
          el.prepend(dot);
        }
      } else {
        el.className = 'nav-cat-item transition hover:text-cyan-400 text-slate-300 px-3.5 py-1.5 rounded-full hover:bg-slate-800/60 border border-transparent hover:border-slate-700/80 flex items-center gap-1.5';
        const dot = el.querySelector('.pulse-dot');
        if (dot) dot.remove();
      }
    });

    // The All Categories button label ALWAYS remains "All Categories"
    const dropdownLabel = document.getElementById('allCategoriesBtnLabel');
    if (dropdownLabel) {
      dropdownLabel.textContent = 'All Categories';
    }
    const mobileDropdownLabel = document.getElementById('mobileAllCategoriesBtnLabel');
    if (mobileDropdownLabel) {
      mobileDropdownLabel.textContent = 'All Categories';
    }

    // Update Dropdown Items Active Style (Desktop & Mobile)
    document.querySelectorAll('[data-nav-dropdown-cat], [data-mobile-dropdown-cat]').forEach(el => {
      const cat = el.getAttribute('data-nav-dropdown-cat') || el.getAttribute('data-mobile-dropdown-cat');
      if (cat === activeKey) {
        el.className = 'nav-dropdown-item flex items-center justify-between px-3 py-2 rounded-xl text-cyan-300 bg-cyan-950/70 border border-cyan-500/50 shadow-inner group/item';
      } else {
        el.className = 'nav-dropdown-item flex items-center justify-between px-3 py-2 rounded-xl text-slate-300 hover:text-cyan-300 hover:bg-slate-800/80 border border-transparent transition group/item';
      }
    });

    // 2. Mobile Nav Links
    document.querySelectorAll('[data-mobile-cat]').forEach(el => {
      const cat = el.getAttribute('data-mobile-cat');
      const isActive = (cat === activeKey) || (cat === 'all' && activeKey !== 'all');

      if (isActive) {
        el.className = 'mobile-cat-item whitespace-nowrap text-cyan-300 font-bold flex items-center gap-1.5 bg-cyan-950/90 px-3.5 py-1.5 rounded-full border border-cyan-400 shadow-sm';
        if (!el.querySelector('.pulse-dot')) {
          const dot = document.createElement('span');
          dot.className = 'pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse';
          el.prepend(dot);
        }
      } else {
        el.className = 'mobile-cat-item whitespace-nowrap text-slate-300 hover:text-white px-3 py-1.5 rounded-full border border-slate-800/80 hover:bg-slate-800/60 flex items-center gap-1.5 transition';
        const dot = el.querySelector('.pulse-dot');
        if (dot) dot.remove();
      }
    });

    // 3. Hero Quick Directory Cards
    document.querySelectorAll('[data-dir-cat]').forEach(el => {
      const cat = el.getAttribute('data-dir-cat');
      if (cat === activeKey) {
        el.className = 'dir-cat-item rounded-xl border-2 border-cyan-400 bg-cyan-950/70 p-2.5 text-center text-cyan-300 font-bold shadow-lg shadow-cyan-500/20 scale-[1.02] transition';
      } else {
        el.className = 'dir-cat-item rounded-xl border border-slate-800 bg-slate-900/70 p-2.5 text-center text-slate-300 hover:border-cyan-500/40 hover:text-white transition';
      }
    });
  }

  function selectCategoryFromNav(catKey, event) {
    if (event) {
      if (typeof event.preventDefault === 'function') event.preventDefault();
      if (typeof event.stopPropagation === 'function') event.stopPropagation();
    }
    closeCategoriesDropdown();
    closeMobileCategoriesDropdown();
    switchCatalogCategory(catKey, true, event);
  }

  function toggleCategoriesDropdown(event) {
    if (event) {
      if (typeof event.preventDefault === 'function') event.preventDefault();
      if (typeof event.stopPropagation === 'function') event.stopPropagation();
    }
    const menu = document.getElementById('allCategoriesMenu');
    if (!menu) return;
    const isExpanded = menu.classList.contains('dropdown-open');
    if (isExpanded) {
      closeCategoriesDropdown();
    } else {
      openCategoriesDropdown();
    }
  }

  function openCategoriesDropdown() {
    const menu = document.getElementById('allCategoriesMenu');
    const btn = document.getElementById('allCategoriesDropdownBtn');
    if (!menu) return;
    menu.classList.remove('invisible', 'opacity-0', 'pointer-events-none');
    menu.classList.add('visible', 'opacity-100', 'dropdown-open');
    if (btn) btn.setAttribute('aria-expanded', 'true');
  }

  function closeCategoriesDropdown() {
    const menu = document.getElementById('allCategoriesMenu');
    const btn = document.getElementById('allCategoriesDropdownBtn');
    if (!menu) return;
    menu.classList.remove('visible', 'opacity-100', 'dropdown-open');
    menu.classList.add('invisible', 'opacity-0');
    if (btn) btn.setAttribute('aria-expanded', 'false');
  }

  // Mobile Dropdown Helpers
  function toggleMobileCategoriesDropdown(event) {
    if (event) {
      if (typeof event.preventDefault === 'function') event.preventDefault();
      if (typeof event.stopPropagation === 'function') event.stopPropagation();
    }
    const mobileMenu = document.getElementById('mobileAllCategoriesMenu');
    const mobileBtn = document.getElementById('mobileAllCategoriesDropdownBtn');
    const caret = document.getElementById('mobileAllCategoriesCaret');
    if (!mobileMenu) return;
    const isHidden = mobileMenu.classList.contains('hidden');
    if (isHidden) {
      mobileMenu.classList.remove('hidden');
      if (mobileBtn) mobileBtn.setAttribute('aria-expanded', 'true');
      if (caret) caret.classList.add('rotate-180');
    } else {
      mobileMenu.classList.add('hidden');
      if (mobileBtn) mobileBtn.setAttribute('aria-expanded', 'false');
      if (caret) caret.classList.remove('rotate-180');
    }
  }

  function closeMobileCategoriesDropdown() {
    const mobileMenu = document.getElementById('mobileAllCategoriesMenu');
    const mobileBtn = document.getElementById('mobileAllCategoriesDropdownBtn');
    const caret = document.getElementById('mobileAllCategoriesCaret');
    if (mobileMenu) mobileMenu.classList.add('hidden');
    if (mobileBtn) mobileBtn.setAttribute('aria-expanded', 'false');
    if (caret) caret.classList.remove('rotate-180');
  }

  // Click outside to close dropdowns
  document.addEventListener('click', (e) => {
    const container = document.getElementById('allCategoriesDropdownContainer');
    if (container && !container.contains(e.target)) {
      closeCategoriesDropdown();
    }
    const mobileNav = document.getElementById('mobileCategoryNav');
    const mobileMenu = document.getElementById('mobileAllCategoriesMenu');
    if (mobileNav && mobileMenu && !mobileNav.contains(e.target) && !mobileMenu.contains(e.target)) {
      closeMobileCategoriesDropdown();
    }
  });

  // Escape key to close dropdowns
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCategoriesDropdown();
      closeMobileCategoriesDropdown();
    }
  });

  function updateCategoryIndicatorBar(catObj) {
    const isZh = getLang() === 'zh';
    const titleEl = document.getElementById('activeCategoryTitle');
    const countEl = document.getElementById('activeCategoryCount');
    const viewAllBtn = document.getElementById('catViewAllBtn');

    if (titleEl) {
      titleEl.textContent = isZh ? catObj.nameZh : catObj.nameEn;
    }
    if (countEl) {
      countEl.textContent = isZh ? catObj.countZh : catObj.countEn;
    }
    if (viewAllBtn) {
      if (catObj.key === 'all') {
        viewAllBtn.className = 'rounded-lg border border-cyan-400 bg-cyan-950/80 px-2.5 py-1 text-[11px] font-bold text-cyan-300 transition';
      } else {
        viewAllBtn.className = 'rounded-lg border border-slate-700 bg-slate-800/80 px-2.5 py-1 text-[11px] font-medium text-slate-300 hover:text-cyan-300 hover:border-cyan-400 transition';
      }
    }
  }

  function updateBottomSwitcherBar(catObj) {
    const isZh = getLang() === 'zh';
    const prevBtn = document.getElementById('catBottomPrevBtn');
    const nextBtn = document.getElementById('catBottomNextBtn');
    const prevLabel = document.getElementById('catBottomPrevLabel');
    const nextLabel = document.getElementById('catBottomNextLabel');
    const headline = document.getElementById('categoryBottomHeadline');

    if (!prevBtn || !nextBtn) return;

    if (catObj.key === 'all') {
      if (headline) {
        headline.textContent = 'You Have Viewed All Cold-Chain Product Series';
      }
      if (prevLabel) prevLabel.textContent = 'Back to Cooler Boxes';
      if (nextLabel) nextLabel.textContent = 'Series Directory';
      return;
    }

    const idx = CYCLIC_CATEGORY_KEYS.indexOf(catObj.key);
    const prevIdx = (idx - 1 + CYCLIC_CATEGORY_KEYS.length) % CYCLIC_CATEGORY_KEYS.length;
    const nextIdx = (idx + 1) % CYCLIC_CATEGORY_KEYS.length;

    const prevCat = findCategoryByKeyOrAlias(CYCLIC_CATEGORY_KEYS[prevIdx]);
    const nextCat = findCategoryByKeyOrAlias(CYCLIC_CATEGORY_KEYS[nextIdx]);

    if (headline) {
      headline.textContent = `Explore Next Cold-Chain Category: ${nextCat.nameEn}`;
    }
    if (prevLabel) {
      prevLabel.textContent = `← ${prevCat.nameEn}`;
    }
    if (nextLabel) {
      nextLabel.textContent = `${nextCat.nameEn} →`;
    }
  }

  function navigateAdjacentCategory(direction) {
    const idx = CYCLIC_CATEGORY_KEYS.indexOf(currentCategory);
    if (idx === -1) {
      switchCatalogCategory('cooler-boxes', true);
      return;
    }
    const targetIdx = (idx + direction + CYCLIC_CATEGORY_KEYS.length) % CYCLIC_CATEGORY_KEYS.length;
    switchCatalogCategory(CYCLIC_CATEGORY_KEYS[targetIdx], true);
  }

  // Handle Hash Deep Linking & Model Anchors
  function handleCatalogHashRouting() {
    const hash = window.location.hash ? window.location.hash.substring(1) : '';
    if (!hash) {
      // Default initial view: Cooler Boxes as requested by user
      switchCatalogCategory('cooler-boxes', false);
      return;
    }

    // Direct category hash (e.g. #cooler-box-catalog, #cooler-boxes, #epp, #pcm, etc.)
    const directCat = findCategoryByKeyOrAlias(hash);
    if (directCat) {
      switchCatalogCategory(directCat.key, false);
      return;
    }

    // Direct model link (e.g. #product-model-hp-300, #product-model-epp-18l, etc.)
    const modelCat = findCategoryByElementId(hash);
    if (modelCat) {
      switchCatalogCategory(modelCat.key, false);
      setTimeout(() => {
        const targetEl = document.getElementById(hash);
        if (targetEl) {
          const yOffset = -90;
          const y = targetEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
          targetEl.style.outline = '3px solid rgba(34, 211, 238, 0.9)';
          targetEl.style.outlineOffset = '4px';
          setTimeout(() => { targetEl.style.outline = ''; targetEl.style.outlineOffset = ''; }, 3200);
        }
      }, 150);
    }
  }

  // Export to window
  window.CATALOG_CATEGORIES = CATEGORY_CONFIG;
  window.switchCatalogCategory = switchCatalogCategory;
  window.selectCategoryFromNav = selectCategoryFromNav;
  window.toggleCategoriesDropdown = toggleCategoriesDropdown;
  window.openCategoriesDropdown = openCategoriesDropdown;
  window.closeCategoriesDropdown = closeCategoriesDropdown;
  window.toggleMobileCategoriesDropdown = toggleMobileCategoriesDropdown;
  window.closeMobileCategoriesDropdown = closeMobileCategoriesDropdown;
  window.navigateAdjacentCategory = navigateAdjacentCategory;
  window.findCategoryByElementId = findCategoryByElementId;
  window.getCurrentCatalogCategory = () => currentCategory;

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', handleCatalogHashRouting);
  } else {
    handleCatalogHashRouting();
  }

  // Listen to hash change from browser navigation
  window.addEventListener('hashchange', () => {
    handleCatalogHashRouting();
  });
})();
