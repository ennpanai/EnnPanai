/**
 * sections-loader.js
 * Dynamically loads all section HTML partials and injects them into #app-root.
 * To add, remove, or reorder sections — edit the SECTIONS array only.
 */

(function () {
  'use strict';

  /* ── SECTION MANIFEST ──────────────────────────────────────────────────── */
  /* Add, remove or reorder entries here to control page structure.          */
  const SECTIONS = [
    '01-nav.html',
    '02-hero.html',
    '03-problem.html',
    '04-opportunity.html',
    '05-process.html',
    '06-sustainability.html',
    '07-recognition.html',
    '08-financials.html',
    '09-impact.html',
    '10-directors.html',
    '11-close.html',
  ];

  /* ── LOADER ─────────────────────────────────────────────────────────────── */
  const root = document.getElementById('app-root');

  /**
   * Fetches a single partial and returns its HTML text.
   * Falls back gracefully if a file is missing.
   */
  async function fetchSection(url) {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        console.warn(`[sections-loader] Could not load: ${url} (${res.status})`);
        return `<!-- MISSING SECTION: ${url} -->`;
      }
      return await res.text();
    } catch (err) {
      console.error(`[sections-loader] Fetch error for ${url}:`, err);
      return `<!-- ERROR LOADING: ${url} -->`;
    }
  }

  /**
   * Loads all sections in order and inserts them into the DOM.
   * Uses sequential fetches to preserve document order.
   */
  async function loadSections() {
    const htmlParts = await Promise.all(SECTIONS.map(fetchSection));
    root.innerHTML = htmlParts.join('\n');

    /* Dispatch a custom event so other scripts know the DOM is ready */
    document.dispatchEvent(new Event('sectionsLoaded'));
  }

  /* Boot */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadSections);
  } else {
    loadSections();
  }
})();
