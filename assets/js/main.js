/**
 * PROGRAMMINGWALA - Core Vanilla JavaScript
 * Zero external dependencies. Fast, accessible, mobile-first.
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNavigation();
  initCopyCodeButtons();
  initLiveSearch();
  initTableOfContents();
});

/**
 * Mobile Drawer Menu
 */
function initMobileNavigation() {
  const menuToggle = document.getElementById('mobileMenuToggle');
  const drawer = document.getElementById('mobileDrawer');
  const overlay = document.getElementById('mobileOverlay');
  const closeBtn = document.getElementById('mobileDrawerClose');

  if (!menuToggle || !drawer || !overlay) return;

  function openMenu() {
    drawer.classList.add('open');
    overlay.classList.add('open');
    menuToggle.setAttribute('aria-expanded', 'true');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (closeBtn) closeBtn.focus();
  }

  function closeMenu() {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    menuToggle.focus();
  }

  menuToggle.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeMenu();
    }
  });
}

/**
 * Copy Code to Clipboard
 */
function initCopyCodeButtons() {
  const copyButtons = document.querySelectorAll('.btn-copy-code');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', async () => {
      const codeBlock = btn.closest('.code-block');
      if (!codeBlock) return;

      const codeElement = codeBlock.querySelector('pre code') || codeBlock.querySelector('pre');
      if (!codeElement) return;

      const text = codeElement.innerText;
      try {
        await navigator.clipboard.writeText(text);
        const originalText = btn.textContent;
        btn.textContent = 'Copied!';
        btn.setAttribute('aria-label', 'Code copied to clipboard');
        setTimeout(() => {
          btn.textContent = originalText;
          btn.setAttribute('aria-label', 'Copy code to clipboard');
        }, 2000);
      } catch (err) {
        console.error('Failed to copy code: ', err);
      }
    });
  });
}

/**
 * Client-Side Instant Search across searchable items on page
 */
function initLiveSearch() {
  const searchInput = document.getElementById('siteSearchInput');
  const cardsContainer = document.getElementById('searchableCardsContainer');
  if (!searchInput || !cardsContainer) return;

  const items = cardsContainer.querySelectorAll('.searchable-card');

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();

    let visibleCount = 0;
    items.forEach(item => {
      const text = item.innerText.toLowerCase();
      const keywords = item.getAttribute('data-keywords') || '';
      const combined = text + ' ' + keywords.toLowerCase();

      if (query === '' || combined.includes(query)) {
        item.style.display = '';
        visibleCount++;
      } else {
        item.style.display = 'none';
      }
    });

    const noResultMsg = document.getElementById('searchNoResults');
    if (noResultMsg) {
      noResultMsg.style.display = (visibleCount === 0 && query !== '') ? 'block' : 'none';
    }
  });
}

/**
 * Table of contents smooth scroll
 */
function initTableOfContents() {
  const tocLinks = document.querySelectorAll('.toc-link');
  tocLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth' });
          targetElement.focus();
        }
      }
    });
  });
}
