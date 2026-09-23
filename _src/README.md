# Site source

All content lives in `content.mjs` (EN/ES). Edit it, then run:

    node _src/build.mjs

This regenerates `index.html`, `es/`, `projects/`, `404.html` and `sitemap.xml`.
Commit the generated files — GitHub Pages serves them as-is (Jekyll skips `_src/`).

`og/` holds the HTML used to render `assets/og.png` and `assets/apple-touch-icon.png`
with headless Chrome, if they ever need regenerating.
