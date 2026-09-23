// Diagrams. The hero visual is SVG (fixed composition, scales as a whole).
// Architecture diagrams are HTML/CSS so they reflow: horizontal on wide
// screens, vertical stacks on phones — text never shrinks below body size.

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// ---------------------------------------------------------------- hero
// Visual abstraction of the working areas — deliberately not a real topology.
export function heroVisual(caption) {
  const box = (x, y, w, label, cls = '') =>
    `<g class="hv-node ${cls}"><rect x="${x - w / 2}" y="${y - 15}" width="${w}" height="30" rx="5"/><text x="${x}" y="${y + 4}" text-anchor="middle">${esc(label)}</text></g>`;
  const line = (d, i) => `<path class="hv-line" style="--i:${i}" d="${d}" pathLength="1"/>`;
  return `<figure class="hero-visual">
<svg viewBox="0 0 440 372" aria-hidden="true" focusable="false">
  ${line('M220 49 V83', 0)}
  ${line('M220 113 V140 H110 V167', 1)}
  ${line('M220 140 H330 V167', 1)}
  ${line('M110 197 V240', 2)}
  ${line('M330 197 V240', 2)}
  ${line('M110 270 V313', 3)}
  ${line('M330 270 V313', 3)}
  ${box(220, 34, 132, 'INTERNET', 'hv-edge')}
  ${box(220, 98, 132, 'FIREWALL')}
  ${box(110, 182, 132, 'NETWORK', 'hv-group')}
  ${box(330, 182, 132, 'AWS', 'hv-group hv-accent')}
  ${box(110, 255, 132, 'MikroTik')}
  ${box(330, 255, 132, 'EC2 · VPC')}
  ${box(110, 328, 132, 'VPN')}
  ${box(330, 328, 132, 'CloudWatch')}
</svg>
<figcaption>${esc(caption)}</figcaption>
</figure>`;
}

// ---------------------------------------------------------------- pipeline (cards on the home page)
export function pipeline(steps, label) {
  return `<ol class="pipe" aria-label="${esc(label)}">${steps.map((s) => `<li>${esc(s)}</li>`).join('')}</ol>`;
}

// ---------------------------------------------------------------- architecture blocks
// node: { t: title, s: [sublines], accent }
const node = (n) =>
  `<div class="ar-node${n.accent ? ' is-accent' : ''}"><span class="ar-t">${esc(n.t)}</span>${(n.s || []).map((x) => `<span class="ar-s">${esc(x)}</span>`).join('')}</div>`;
const link = (label) => `<div class="ar-link" aria-hidden="true"><span>${esc(label || '')}</span></div>`;
const grp = (label, inner) => `<div class="ar-group"><span class="ar-gl">${esc(label)}</span><div class="ar-stack">${inner}</div></div>`;

export const architectures = {
  scanner: (lang) => ({
    label: { en: 'Scanner data flow', es: 'Flujo de datos del escáner' }[lang],
    caption: {
      en: 'Data flow. Every scan is also written to SQLite and diffed against the previous run.',
      es: 'Flujo de datos. Cada escaneo se guarda además en SQLite y se compara con el anterior.',
    }[lang],
    html:
      `<div class="ar-row">` +
      grp('Input', node({ t: 'Network', s: ['CIDR range', 'e.g. 192.168.1.0/24'] })) +
      link('scan') +
      grp('Discovery', node({ t: 'Nmap', s: ['ping sweep', 'ports · services (-sV)'] })) +
      link('parse') +
      grp('Python', node({ t: 'Classifier', s: ['MAC vendor → category', 'risky-port flags'], accent: true }) + node({ t: 'SQLite', s: ['scan history · diff'] })) +
      link('graph') +
      grp('Model', node({ t: 'NetworkX', s: ['topology graph'] })) +
      link('render') +
      grp('Output', node({ t: 'PyVis', s: ['interactive HTML'] }) + node({ t: 'CSV', s: ['inventory'] })) +
      `</div>`,
  }),

  lpr: (lang) => ({
    label: { en: 'LPR system architecture', es: 'Arquitectura del sistema LPR' }[lang],
    caption: {
      en: 'Recognition runs at the edge; the backend authorizes, stores and pushes events to the browser.',
      es: 'El reconocimiento se hace en el borde; el backend autoriza, guarda y envía los eventos al navegador.',
    }[lang],
    html:
      `<div class="ar-row">` +
      grp('Edge · Raspberry Pi 3B',
        node({ t: 'Camera', s: ['1 frame / second'] }) +
        node({ t: 'OpenALPR', s: ['EU region', 'plate → text'], accent: true }) +
        node({ t: 'Python client', s: ['systemd service', 'Restart=always'] })) +
      link('HTTP POST') +
      grp('Backend',
        node({ t: 'Flask', s: ['API · auth · roles'] }) +
        node({ t: 'MySQL', s: ['plates · users · log'] })) +
      link('Socket.IO') +
      grp('Clients', node({ t: 'Web UI', s: ['users request plates', 'admins approve', 'live access history'] })) +
      `</div>`,
  }),
};
