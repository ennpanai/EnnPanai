/**
 * sections-loader.js
 * Dynamically loads all section HTML partials and injects them into #app-root.
 * NOTE: 01-nav.html has been REMOVED — nav now lives directly in index.html.
 */

(function () {
  'use strict';

  const SECTIONS = [
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

  const root = document.getElementById('app-root');

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

  async function loadSections() {
    const htmlParts = await Promise.all(SECTIONS.map(fetchSection));
    root.innerHTML = htmlParts.join('\n');
    document.dispatchEvent(new Event('sectionsLoaded'));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadSections);
  } else {
    loadSections();
  }

})();