/**
 * script.js
 * Nav and overlay wiring.
 * 
 * The <nav> is now in index.html directly (not loaded dynamically),
 * so DOMContentLoaded is safe to use for nav setup.
 * sectionsLoaded is still used for anything inside #app-root.
 */

(function () {
  'use strict';

  /* ── IMAGE OVERLAY ───────────────────────────────────────────────────── */

  const images = {
    extraction: {
      src:   'Fibre-Extraction.jpg',
      title: 'Step 04 — Fibre Extraction',
      sub:   'Proprietary technique · Long-staple fibre separation · Viruppatchi, Dindigul'
    },
    drying: {
      src:   'Solar-Drying.jpg',
      title: 'Step 05 — Solar Drying',
      sub:   'Chemical-free · Sun-dried · Zero artificial energy'
    },
    spinning: {
      src:   'Spinning.jpg',
      title: 'Step 07 — Spinning',
      sub:   '90:10 Cotton-Palmyra Blend · Ring-frame Spun · Apparel Grade'
    }
  };

  window.openOverlay = function (key) {
    const data = images[key];
    if (!data) return;

    const overlay = document.getElementById('imgOverlay');
    const img     = document.getElementById('overlayImg');
    const title   = document.getElementById('overlayTitle');
    const sub     = document.getElementById('overlaySub');

    if (!overlay || !img || !title || !sub) return;

    img.src           = data.src;
    title.textContent = data.title;
    sub.textContent   = data.sub;

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  window.closeOverlay = function () {
    const overlay = document.getElementById('imgOverlay');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
  };


  /* ── NAV INIT ────────────────────────────────────────────────────────── */
  /*
   * Nav is in index.html directly so it's in the DOM at DOMContentLoaded.
   * No need to wait for sectionsLoaded here.
   */

  function initNav() {
    const hamburger = document.getElementById('navHamburger');
    const navLinks  = document.getElementById('navLinks');
    const imgOverlay = document.getElementById('imgOverlay');

    /* Overlay backdrop click */
    if (imgOverlay) {
      imgOverlay.addEventListener('click', function (e) {
        if (e.target === this) window.closeOverlay();
      });
    }

    if (!hamburger || !navLinks) {
      console.warn('[script.js] navHamburger or navLinks not found.');
      return;
    }

    function openNav() {
      hamburger.classList.add('open');
      navLinks.classList.add('mobile-open');
    }

    function closeNav() {
      hamburger.classList.remove('open');
      navLinks.classList.remove('mobile-open');
    }

    /* Toggle on hamburger click */
    hamburger.addEventListener('click', function (e) {
      e.stopPropagation();
      navLinks.classList.contains('mobile-open') ? closeNav() : openNav();
    });

    /* Close on any nav link tap */
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeNav);
    });

    /* Close on outside tap */
    document.addEventListener('click', function (e) {
      if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        closeNav();
      }
    });

    /* Close when rotating back to desktop width */
    window.addEventListener('resize', function () {
      if (window.innerWidth > 800) closeNav();
    });
  }

  /* Boot nav immediately — it's already in the DOM */
  document.addEventListener('DOMContentLoaded', initNav);

})();