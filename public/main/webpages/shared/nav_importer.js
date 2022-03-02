let scriptEl = document.querySelector("script[src='/main/webpages/shared/nav_importer.js']");

fetch('/main/webpages/shared/nav.html').then(res => res.text()).then(importedHTML => scriptEl.outerHTML = importedHTML);