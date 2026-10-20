# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Bilingual (EN/ES) personal portfolio for Daniel Serrano Marín, served by GitHub Pages at `https://dsermar.dev` (`CNAME`). It is a static site produced by a zero-dependency Node generator in `_src/` — there is no `package.json`, no lint, and no test suite.

## Build

```
node _src/build.mjs
```

This regenerates `index.html`, `es/index.html`, `projects/<slug>/index.html`, `es/projects/<slug>/index.html`, `404.html` and `sitemap.xml`. The build fails (non-zero exit) if a referenced local file (CV PDFs, `og.png`, favicons) is missing.

**Generated HTML is committed.** Never hand-edit the root/`es/`/`projects/` HTML files — edit `_src/` and rebuild, then commit both source and output. GitHub Pages serves files as-is; Jekyll skips `_src/` because of the leading underscore. `robots.txt` is hand-written; `sitemap.xml` is generated (its `lastmod` is the build date, so every rebuild touches it).

## Architecture

- `_src/content.mjs` — single source of truth for all text and data. Every visible string is `{ en, es }`, built with the `L(en, es)` helper. Adding a project = adding an entry to `projects` (its `slug` becomes the URL, `diagram` names a key in `architectures`).
- `_src/build.mjs` — templating via JS template literals: `head()` (SEO, hreflang alternates, OG, JSON-LD), `nav()`, `footer()`, `home()`, `caseStudy()`, `notFound()`, `sitemap()`. `t(value, lang)` resolves bilingual values; `esc()` HTML-escapes. EN lives at `/`, ES under `/es/` (`prefix()`/`projectPath()`). The CSS link gets a cache-busting `?v=` per build.
- `_src/diagrams.mjs` — hero visual, the pipeline strip, and per-project architecture diagrams rendered as HTML (`ar-*` classes), keyed by the project's `diagram` field.
- `assets/site.css` — the whole hand-written design system (dark-only, CSS custom properties on `:root`, single accent `--accent`, Geist / Geist Mono self-hosted in `assets/fonts/`). Class names used by the generator live here.
- `_src/og/` — HTML pages rendered with headless Chrome to produce `assets/og.png` (1200×630) and `assets/apple-touch-icon.png`; only needed when those images change.
- `cv/` — downloadable CV PDFs referenced from `site.cv` / `site.cvDevops`.

## Content rule

The header of `content.mjs` lists the only allowed fact sources (the two CVs and the public GitHub READMEs). Do not add claims, skills, dates or metrics beyond those sources; where sources differ, use the more conservative wording. Keep EN and ES in sync for every string.
