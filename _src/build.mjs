// Static site generator for dsermar.dev — zero dependencies.
//   node _src/build.mjs
// Writes: index.html, es/index.html, projects/<slug>/index.html,
//         es/projects/<slug>/index.html, 404.html, sitemap.xml
// GitHub Pages ignores _src/ (underscore dirs are excluded by Jekyll).

import { mkdirSync, writeFileSync, existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as C from './content.mjs';
import { heroVisual, pipeline, architectures } from './diagrams.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const LANGS = ['en', 'es'];
const { site, ui } = C;
const TODAY = new Date().toISOString().slice(0, 10);

// ---------------------------------------------------------------- helpers
const t = (v, lang) => (v && typeof v === 'object' && 'en' in v ? v[lang] : v);
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const prefix = (lang) => (lang === 'en' ? '' : '/es');
const homePath = (lang) => `${prefix(lang)}/`;
const projectPath = (lang, slug) => `${prefix(lang)}/projects/${slug}/`;
const abs = (p) => site.url + p;
const ext = (href) => `href="${esc(href)}" rel="noopener"`;
const assetVersion = Date.now().toString(36);

const icon = {
  arrowRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  arrowLeft: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5M11 18l-6-6 6-6"/></svg>',
  arrowUpRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>',
  arrowDown: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 5v14M6 13l6 6 6-6"/></svg>',
  download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v11M7 10l5 5 5-5M5 20h14"/></svg>',
  trend: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 17l6-6 4 4 8-8M15 7h6v6"/></svg>',
  github: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/></svg>',
  menu: '<svg class="i-open" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  close: '<svg class="i-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>',
};
const brandMark = '<svg class="brand-mark" viewBox="0 0 32 32" aria-hidden="true"><rect x=".5" y=".5" width="31" height="31" rx="7" fill="#101216" stroke="#2e333b"/><path d="M9 11l5 5-5 5" fill="none" stroke="#8ab4ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 21h7" stroke="#eceef1" stroke-width="2" stroke-linecap="round"/></svg>';

// ---------------------------------------------------------------- layout
function head({ lang, title, description, path, altPath, jsonld, ogType = 'website' }) {
  const other = lang === 'en' ? 'es' : 'en';
  const enPath = lang === 'en' ? path : altPath;
  const esPath = lang === 'es' ? path : altPath;
  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<meta name="author" content="${esc(site.name)}">
<meta name="theme-color" content="#0a0b0d">
<meta name="color-scheme" content="dark">
<link rel="canonical" href="${abs(path)}">
<link rel="alternate" hreflang="en" href="${abs(enPath)}">
<link rel="alternate" hreflang="es" href="${abs(esPath)}">
<link rel="alternate" hreflang="x-default" href="${abs(enPath)}">
<meta property="og:type" content="${ogType}">
<meta property="og:site_name" content="${esc(site.name)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${abs(path)}">
<meta property="og:image" content="${site.url}/assets/og.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${esc(site.name)} — ${esc(t(ui.hero.role, lang))}">
<meta property="og:locale" content="${lang === 'en' ? 'en_US' : 'es_ES'}">
<meta property="og:locale:alternate" content="${other === 'en' ? 'en_US' : 'es_ES'}">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/assets/apple-touch-icon.png">
<link rel="preload" href="/assets/fonts/Geist-Variable.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/assets/fonts/GeistMono-Variable.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/assets/site.css?v=${assetVersion}">
<script>document.documentElement.classList.add('js')</script>
${jsonld ? `<script type="application/ld+json">${JSON.stringify(jsonld)}</script>` : ''}
</head>`;
}

function nav(lang, { onHome, altPath }) {
  const base = onHome ? '' : homePath(lang);
  const items = ['experience', 'projects', 'skills', 'certifications', 'about', 'contact'];
  const links = [`<li><a href="${onHome ? '#top' : homePath(lang)}">${t(ui.nav.home, lang)}</a></li>`]
    .concat(items.map((id) => `<li><a href="${base}#${id}">${t(ui.nav[id], lang)}</a></li>`)).join('');
  const langSwitch = LANGS.map((l) =>
    l === lang
      ? `<span aria-current="true" lang="${l}">${l.toUpperCase()}</span>`
      : `<a href="${altPath}" hreflang="${l}" lang="${l}">${l.toUpperCase()}<span class="sr-only"> — ${l === 'es' ? 'Leer en español' : 'Read in English'}</span></a>`).join('');
  return `<a class="skip" href="#main">${t(ui.nav.skip, lang)}</a>
<header class="nav">
  <div class="wrap nav-inner">
    <a class="brand" href="${homePath(lang)}">${brandMark}<span class="brand-text">dsermar</span><span class="sr-only"> — ${esc(site.name)}</span></a>
    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="nav-panel" aria-label="${t(ui.nav.menu, lang)}" data-open="${t(ui.nav.menu, lang)}" data-close="${t(ui.nav.close, lang)}">${icon.menu}${icon.close}</button>
    <div class="nav-panel" id="nav-panel">
      <nav aria-label="${lang === 'en' ? 'Main' : 'Principal'}" class="nav-main"><ul class="nav-links">${links}</ul></nav>
      <div class="nav-actions">
        <div class="lang" role="group" aria-label="${t(ui.nav.lang, lang)}">${langSwitch}</div>
        <a class="btn btn-secondary btn-sm" href="${t(site.cv, lang)}" download>${icon.download}${t(ui.nav.cv, lang)}</a>
      </div>
    </div>
  </div>
</header>`;
}

function footer(lang, altPath) {
  return `<footer class="footer">
  <div class="wrap footer-inner">
    <p>© ${new Date().getFullYear()} ${esc(site.name)} · ${t(ui.footer.built, lang)}</p>
    <nav aria-label="${lang === 'en' ? 'Footer' : 'Pie de página'}">
      <a ${ext(site.github)}>GitHub</a>
      <a ${ext(site.linkedin)}>LinkedIn</a>
      <a href="mailto:${site.email}">Email</a>
      <a href="${altPath}" hreflang="${lang === 'en' ? 'es' : 'en'}">${lang === 'en' ? 'Español' : 'English'}</a>
    </nav>
  </div>
</footer>
<script>
(function(){var n=document.querySelector('.nav'),b=n&&n.querySelector('.nav-toggle');if(!b)return;
function set(o){n.classList.toggle('open',o);b.setAttribute('aria-expanded',o);b.setAttribute('aria-label',o?b.dataset.close:b.dataset.open)}
b.addEventListener('click',function(){set(!n.classList.contains('open'))});
n.querySelectorAll('.nav-panel a').forEach(function(a){a.addEventListener('click',function(){set(false)})});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&n.classList.contains('open')){set(false);b.focus()}});
matchMedia('(min-width:961px)').addEventListener('change',function(e){if(e.matches)set(false)});})();
</script>
</body>
</html>
`;
}

const sectionHead = (lang, label, title, intro) => `<div class="section-head">
  <div><p class="eyebrow">${label}</p><h2 id="h-${label.split(' ').pop()}">${title}</h2></div>
  ${intro ? `<p>${intro}</p>` : ''}
</div>`;

// ---------------------------------------------------------------- structured data
function personLd(lang) {
  return {
    '@type': 'Person',
    '@id': `${site.url}/#person`,
    name: site.name,
    url: site.url,
    email: `mailto:${site.email}`,
    jobTitle: t(C.experience.role, lang),
    worksFor: { '@type': 'Organization', name: C.experience.company },
    address: { '@type': 'PostalAddress', addressLocality: site.locality, addressRegion: site.region, addressCountry: site.country },
    alumniOf: { '@type': 'EducationalOrganization', name: C.education.place },
    knowsLanguage: [{ '@type': 'Language', name: 'Spanish', alternateName: 'es' }, { '@type': 'Language', name: 'English', alternateName: 'en' }],
    knowsAbout: ['Linux', 'Network administration', 'MikroTik', 'Fortinet', 'VPN', 'AWS', 'Amazon EC2', 'Amazon VPC', 'Amazon CloudWatch', 'AWS Lambda', 'Docker', 'Bash', 'Python'],
    hasCredential: C.certifications.map((c) => ({
      '@type': 'EducationalOccupationalCredential',
      name: t(c.name, 'en'),
      credentialCategory: c.kind.en === 'Certification' ? 'certification' : 'course',
      recognizedBy: { '@type': 'Organization', name: c.issuer },
      ...(c.url ? { url: c.url } : {}),
    })),
    sameAs: [site.github, site.linkedin],
  };
}

// ---------------------------------------------------------------- home
function home(lang) {
  const path = homePath(lang);
  const altPath = homePath(lang === 'en' ? 'es' : 'en');
  const S = ui.sections;
  const n = (i) => String(i).padStart(2, '0');

  const jsonld = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'ProfilePage', '@id': `${abs(path)}#page`, url: abs(path), name: t(ui.seo.title, lang), inLanguage: lang, dateModified: TODAY, mainEntity: { '@id': `${site.url}/#person` } },
      personLd(lang),
      { '@type': 'WebSite', '@id': `${site.url}/#website`, url: site.url, name: site.name, inLanguage: ['en', 'es'] },
    ],
  };

  const hero = `<section class="hero" id="top" aria-labelledby="h-hero">
  <div class="wrap hero-grid">
    <div class="reveal">
      <p class="status"><span class="dot" aria-hidden="true"></span><span>${t(ui.hero.status, lang)}</span><span class="sep" aria-hidden="true">/</span><span>${t(ui.hero.location, lang)}</span></p>
      <h1 id="h-hero">${esc(site.name)}<span class="role">${t(ui.hero.role, lang)}</span></h1>
      <p class="stack">${ui.hero.stack}</p>
      <p class="lead">${t(ui.hero.lead, lang)}</p>
      <p class="direction">${icon.trend}<span>${t(ui.hero.direction, lang)}</span></p>
      <div class="hero-ctas">
        <a class="btn btn-primary" href="#projects">${t(ui.hero.ctaProjects, lang)}${icon.arrowRight}</a>
        <a class="btn btn-secondary" href="${t(site.cv, lang)}" download>${icon.download}${t(ui.hero.ctaCv, lang)}</a>
        <span class="links">
          <a class="link-quiet" ${ext(site.github)}>${icon.github}GitHub</a>
          <a class="link-quiet" ${ext(site.linkedin)}>${icon.linkedin}LinkedIn</a>
        </span>
      </div>
    </div>
    ${heroVisual(t(ui.hero.visualNote, lang))}
  </div>
</section>`;

  const areas = `<section class="areas" aria-labelledby="h-areas">
  <h2 class="sr-only" id="h-areas">${t(S.areas.title, lang)}</h2>
  <div class="wrap"><div class="areas-grid">
    ${C.areas.map((a) => `<div class="area"><h3>${t(a.name, lang)}</h3><ul>${a.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul></div>`).join('\n    ')}
  </div></div>
</section>`;

  const X = C.experience;
  const experience = `<section class="section" id="experience" aria-labelledby="h-experience">
  <div class="wrap">
    ${sectionHead(lang, `${n(1)} / experience`, t(S.experience.title, lang), t(S.experience.intro, lang))}
    <article class="xp">
      <div class="xp-head">
        <div>
          <h3>${t(X.role, lang)}</h3>
          <p class="xp-company"><b>${X.company}</b><span>${t(X.location, lang)}</span></p>
        </div>
        <p class="xp-period"><span class="dot" aria-hidden="true"></span><time datetime="${X.start}">${t(X.period, lang)}</time></p>
      </div>
      <dl class="xp-figs">
        ${X.figures.map((f) => `<div class="xp-fig"><dt class="sr-only">${t(f.label, lang)}</dt><dd class="n">${f.value}</dd><dd class="l" aria-hidden="true">${t(f.label, lang)}</dd></div>`).join('')}
      </dl>
      <div class="xp-groups">
        ${X.groups.map((g) => `<div class="xp-group">
          <h4>${t(g.name, lang)}</h4>
          <ul>${g.bullets.map((b) => `<li>${t(b, lang)}</li>`).join('')}</ul>
          <ul class="tags" aria-label="${t(S.experience.stack, lang)}">${g.tags.map((x) => `<li class="tag">${esc(x)}</li>`).join('')}</ul>
        </div>`).join('\n        ')}
      </div>
    </article>
    <p class="edu-inline"><span class="eyebrow">${t(S.experience.education, lang)}</span><span><strong>${t(C.education.title, lang)}</strong> · ${C.education.place}</span><span class="mono">${C.education.period}</span></p>
  </div>
</section>`;

  const projects = `<section class="section" id="projects" aria-labelledby="h-projects">
  <div class="wrap">
    ${sectionHead(lang, `${n(2)} / projects`, t(S.projects.title, lang), t(S.projects.intro, lang))}
    <div class="projects">
      ${C.projects.map((p) => `<article class="pcard" aria-labelledby="p-${p.slug}">
        <div class="pcard-body">
          <p class="pcard-meta"><span>${t(p.type, lang)}</span><span>${t(p.date, lang)}</span></p>
          <h3 id="p-${p.slug}"><a href="${projectPath(lang, p.slug)}">${t(p.title, lang)}</a></h3>
          <p>${t(p.tagline, lang)}</p>
          <ul class="tags" aria-label="${t(ui.project.headings.tech, lang)}">${p.tags.map((x) => `<li class="tag">${esc(x)}</li>`).join('')}</ul>
          <div class="pcard-actions">
            <a class="btn btn-primary btn-sm" href="${projectPath(lang, p.slug)}">${t(S.projects.caseStudy, lang)}${icon.arrowRight}<span class="sr-only">: ${t(p.title, lang)}</span></a>
            <a class="btn btn-secondary btn-sm" ${ext(p.repo)}>${icon.github}${t(S.projects.source, lang)}<span class="sr-only">: ${t(p.title, lang)}</span></a>
          </div>
        </div>
        <div class="pcard-flow">
          <p class="eyebrow">${lang === 'en' ? 'Pipeline' : 'Flujo'}</p>
          ${pipeline(p.pipeline, `${t(p.title, lang)} — ${lang === 'en' ? 'pipeline' : 'flujo'}`)}
        </div>
      </article>`).join('\n      ')}
    </div>
    <div class="gh-cta">
      <div><h3>${icon.github}${t(S.projects.githubTitle, lang)}</h3><p>${t(S.projects.githubBody, lang)}</p></div>
      <a class="btn btn-secondary" ${ext(site.github)}>github.com/${site.githubHandle}${icon.arrowUpRight}</a>
    </div>
  </div>
</section>`;

  const skills = `<section class="section" id="skills" aria-labelledby="h-skills">
  <div class="wrap">
    ${sectionHead(lang, `${n(3)} / skills`, t(S.skills.title, lang), t(S.skills.intro, lang))}
    <p class="legend"><span><i class="lg-work" aria-hidden="true"></i>${t(S.skills.legendWork, lang)}</span><span><i class="lg-other" aria-hidden="true"></i>${t(S.skills.legendOther, lang)}</span></p>
    <div class="skills">
      ${C.skills.map((g) => `<div class="skill">
        <h3>${t(g.name, lang)}</h3>
        <ul class="tags">${g.items.map(([name, work, es]) => `<li class="chip${work ? ' work' : ''}">${esc(lang === 'es' && es ? es : name)}${work ? `<span class="sr-only"> (${t(S.skills.legendWork, lang)})</span>` : ''}</li>`).join('')}</ul>
      </div>`).join('\n      ')}
    </div>
  </div>
</section>`;

  const certs = `<section class="section" id="certifications" aria-labelledby="h-certifications">
  <div class="wrap">
    ${sectionHead(lang, `${n(4)} / certifications`, t(S.certifications.title, lang), '')}
    <div class="certs-grid">
      <div>
        <h3 class="sr-only">${t(S.certifications.certs, lang)}</h3>
        <ul class="cert-list">
          ${C.certifications.map((c) => `<li class="cert">
            <span class="cert-badge" aria-hidden="true">${c.abbr}</span>
            <div><h4>${esc(t(c.name, lang))}</h4><p>${c.issuer} · ${t(c.kind, lang)}</p>${c.url ? `<a ${ext(c.url)}>${lang === 'en' ? 'Verify credential' : 'Verificar credencial'}</a>` : ''}</div>
          </li>`).join('\n          ')}
        </ul>
      </div>
      <div>
        <div class="side-block">
          <h3>${t(S.certifications.education, lang)}</h3>
          <p class="t">${t(C.education.title, lang)}</p>
          <p class="m">${C.education.place} · <span class="mono">${C.education.period}</span></p>
          <p class="m">${t(C.education.note, lang)}</p>
        </div>
        <div class="side-block">
          <h3>${t(S.certifications.languages, lang)}</h3>
          <dl class="kv">${C.languages.map((l) => `<dt>${t(l.name, lang)}</dt><dd>${t(l.level, lang)}</dd>`).join('')}</dl>
        </div>
      </div>
    </div>
  </div>
</section>`;

  const A = C.about;
  const aboutSec = `<section class="section" id="about" aria-labelledby="h-about">
  <div class="wrap">
    ${sectionHead(lang, `${n(5)} / about`, t(S.about.title, lang), '')}
    <div class="about-grid">
      <div class="prose">${A.paragraphs.map((p) => `<p>${t(p, lang)}</p>`).join('')}</div>
      <div class="trajectory">
        <p class="cmd" aria-hidden="true"><b>$</b> cat ~/career.log</p>
        <div class="traj-step"><h3>${t(S.about.foundation, lang)}</h3><ul class="tags">${A.foundation.map((x) => `<li class="tag">${t(x, lang)}</li>`).join('')}</ul></div>
        <div class="traj-arrow" aria-hidden="true">${icon.arrowDown}</div>
        <div class="traj-step is-focus"><h3>${t(S.about.focus, lang)}</h3><ul class="tags">${A.focus.map((x) => `<li class="chip">${t(x, lang)}</li>`).join('')}</ul></div>
      </div>
    </div>
  </div>
</section>`;

  const K = S.contact;
  const contact = `<section class="section" id="contact" aria-labelledby="h-contact" style="border-bottom:0">
  <div class="wrap">
    <div class="contact-card">
      <div>
        <p class="status" style="margin:0"><span class="dot" aria-hidden="true"></span><span>${t(ui.hero.status, lang)}</span></p>
        <h2 id="h-contact">${t(K.heading, lang)}</h2>
        <p>${t(K.body, lang)}</p>
        <ul class="tags" aria-label="${lang === 'en' ? 'Roles I’m looking for' : 'Puestos que busco'}">${K.roles.map((r) => `<li class="tag">${t(r, lang)}</li>`).join('')}</ul>
      </div>
      <ul class="contact-links">
        <li><a href="mailto:${site.email}"><span class="k">${t(K.email, lang)}</span><span class="v">${site.email}</span>${icon.arrowUpRight}</a></li>
        <li><a ${ext(site.linkedin)}><span class="k">LinkedIn</span><span class="v">in/${site.linkedinHandle}</span>${icon.arrowUpRight}</a></li>
        <li><a ${ext(site.github)}><span class="k">GitHub</span><span class="v">${site.githubHandle}</span>${icon.arrowUpRight}</a></li>
        <li><a href="${t(site.cv, lang)}" download><span class="k">${t(K.cv, lang)}</span><span class="v">${t(K.cvGeneral, lang)}</span>${icon.download}</a></li>
        <li><a href="${site.cvDevops}" download><span class="k">${t(K.cv, lang)}</span><span class="v">${t(K.cvDevops, lang)}</span>${icon.download}</a></li>
      </ul>
    </div>
  </div>
</section>`;

  return head({ lang, title: t(ui.seo.title, lang), description: t(ui.seo.description, lang), path, altPath, jsonld, ogType: 'profile' }) +
    `\n<body>\n${nav(lang, { onHome: true, altPath })}\n<main id="main">\n${hero}\n${areas}\n${experience}\n${projects}\n${skills}\n${certs}\n${aboutSec}\n${contact}\n</main>\n` +
    footer(lang, altPath);
}

// ---------------------------------------------------------------- case study
function caseStudy(lang, p, idx) {
  const path = projectPath(lang, p.slug);
  const altPath = projectPath(lang === 'en' ? 'es' : 'en', p.slug);
  const P = ui.project;
  const H = P.headings;
  const arch = architectures[p.diagram](lang);
  const title = `${t(p.title, lang)} — ${lang === 'en' ? 'case study' : 'caso técnico'} · ${site.name}`;
  const next = C.projects[(idx + 1) % C.projects.length];

  const jsonld = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareSourceCode',
        '@id': `${abs(path)}#project`,
        name: t(p.title, lang),
        description: t(p.tagline, lang),
        url: abs(path),
        codeRepository: p.repo,
        programmingLanguage: 'Python',
        keywords: p.tech.join(', '),
        inLanguage: lang,
        author: { '@id': `${site.url}/#person` },
      },
      { '@type': 'Person', '@id': `${site.url}/#person`, name: site.name, url: site.url },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: site.name, item: abs(homePath(lang)) },
          { '@type': 'ListItem', position: 2, name: t(ui.nav.projects, lang), item: abs(homePath(lang)) + '#projects' },
          { '@type': 'ListItem', position: 3, name: t(p.title, lang), item: abs(path) },
        ],
      },
    ],
  };

  let i = 0;
  const sec = (key, body) => `<section class="cs-sec" aria-labelledby="s-${key}"><h2 id="s-${key}"><span>${String(++i).padStart(2, '0')}</span>${t(H[key], lang)}</h2><div>${body}</div></section>`;

  const body = `<main id="main">
<div class="cs-head">
  <div class="wrap reveal">
    <a class="crumb" href="${homePath(lang)}#projects">${icon.arrowLeft}${t(P.back, lang)}</a>
    <h1>${t(p.title, lang)}</h1>
    <p class="tagline">${t(p.tagline, lang)}</p>
    <dl class="cs-facts">
      <div><dt>${t(P.type, lang)}</dt><dd>${t(p.type, lang)}</dd></div>
      <div><dt>${t(P.date, lang)}</dt><dd>${t(p.date, lang)}</dd></div>
      <div><dt>${t(P.role, lang)}</dt><dd>${t(p.role, lang)}</dd></div>
      <div><dt>${t(P.source, lang)}</dt><dd><a ${ext(p.repo)}>GitHub${icon.arrowUpRight.replace('<svg', '<svg style="display:inline;width:14px;height:14px;vertical-align:-2px;margin-left:2px"')}</a></dd></div>
    </dl>
  </div>
</div>
<div class="wrap cs-body">
  ${sec('summary', `<div class="prose">${p.summary.map((x) => `<p>${t(x, lang)}</p>`).join('')}</div>`)}
  ${sec('architecture', `<figure class="arch" aria-label="${esc(arch.label)}"><div class="arch-canvas">${arch.html}</div><figcaption>${arch.caption}</figcaption></figure>`)}
  ${sec('contribution', `<div class="prose"><p>${t(p.contribution, lang)}</p></div>`)}
  ${sec('implementation', `<ul class="cs-list">${p.implementation.map((x) => `<li>${t(x, lang)}</li>`).join('')}</ul>`)}
  ${sec('output', `<div class="prose"><p>${t(p.output, lang)}</p></div>`)}
  ${sec('tech', `<ul class="tags">${p.tech.map((x) => `<li class="tag">${esc(x)}</li>`).join('')}</ul>`)}
  <div class="cs-next">
    <a href="${projectPath(lang, next.slug)}"><span class="eyebrow">${t(P.next, lang)}${icon.arrowRight.replace('<svg', '<svg style="width:14px;height:14px"')}</span><span class="t">${t(next.title, lang)}</span></a>
    <a href="${homePath(lang)}#contact"><span class="eyebrow">${t(P.cta, lang)}</span><span class="t">${t(P.ctaLink, lang)} →</span></a>
  </div>
</div>
</main>`;

  return head({ lang, title, description: t(p.tagline, lang), path, altPath, jsonld, ogType: 'article' }) +
    `\n<body>\n${nav(lang, { onHome: false, altPath })}\n${body}\n` + footer(lang, altPath);
}

// ---------------------------------------------------------------- 404
function notFound() {
  const lang = 'en';
  return head({ lang, title: `404 · ${site.name}`, description: t(ui.notFound.body, lang), path: '/404.html', altPath: '/404.html' }).replace('<link rel="canonical"', '<meta name="robots" content="noindex">\n<link rel="canonical"') +
    `\n<body>\n${nav(lang, { onHome: false, altPath: '/es/' })}\n<main id="main"><div class="wrap nf"><p class="eyebrow">HTTP 404</p><h1>${t(ui.notFound.title, 'en')}</h1><p>${t(ui.notFound.body, 'en')} <span lang="es">${t(ui.notFound.body, 'es')}</span></p><p><a class="btn btn-primary" href="/">${t(ui.notFound.back, 'en')}</a></p></div></main>\n` +
    footer(lang, '/es/');
}

// ---------------------------------------------------------------- sitemap
function sitemap() {
  const pairs = [[homePath('en'), homePath('es'), '1.0']].concat(C.projects.map((p) => [projectPath('en', p.slug), projectPath('es', p.slug), '0.8']));
  const urls = pairs.flatMap(([en, es, pr]) => [en, es].map((loc) => `  <url>
    <loc>${abs(loc)}</loc>
    <lastmod>${TODAY}</lastmod>
    <priority>${loc === es ? (Number(pr) - 0.1).toFixed(1) : pr}</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${abs(en)}"/>
    <xhtml:link rel="alternate" hreflang="es" href="${abs(es)}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(en)}"/>
  </url>`));
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;
}

// ---------------------------------------------------------------- write
function out(rel, content) {
  const file = join(ROOT, rel);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, content);
  console.log('  wrote', rel, `(${(Buffer.byteLength(content) / 1024).toFixed(1)} KB)`);
}

console.log('building dsermar.dev');
for (const lang of LANGS) {
  out(join(prefix(lang), 'index.html'), home(lang));
  C.projects.forEach((p, i) => out(join(prefix(lang), 'projects', p.slug, 'index.html'), caseStudy(lang, p, i)));
}
out('404.html', notFound());
out('sitemap.xml', sitemap());

// Sanity checks: every local asset/link referenced must exist.
const missing = [];
for (const f of [...new Set([site.cv.en, site.cv.es, site.cvDevops, '/assets/og.png', '/assets/favicon.svg', '/assets/apple-touch-icon.png'])]) {
  if (!existsSync(join(ROOT, f))) missing.push(f);
}
if (missing.length) {
  console.error('\nMISSING FILES:\n  ' + missing.join('\n  '));
  process.exitCode = 1;
} else {
  console.log('all referenced files present');
}
