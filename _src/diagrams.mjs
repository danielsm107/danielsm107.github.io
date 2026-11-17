// Diagrams. Architecture diagrams are HTML/CSS so they reflow: horizontal on wide
// screens, vertical stacks on phones — text never shrinks below body size.

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

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
    label: { en: 'Platform architecture', es: 'Arquitectura de la plataforma' }[lang],
    caption: {
      en: 'From a version tag to the nightly scan. Nothing in the homelab is exposed to the internet: Jenkins polls GitHub from inside.',
      es: 'De un tag de versión al escaneo nocturno. Nada del homelab está expuesto a internet: Jenkins consulta GitHub desde dentro.',
    }[lang],
    html:
      `<div class="ar-row">` +
      grp('GitHub', node({ t: 'GitHub Actions', s: ['ruff · pytest · Trivy', 'terraform test · helm lint'] }) + node({ t: 'Release', s: ['PyPI · GHCR'] })) +
      link('poll') +
      grp('k3s · Proxmox',
        node({ t: 'Jenkins', s: ['helm upgrade · helm test', 'automatic rollback'], accent: true }) +
        node({ t: 'Nightly CronJob', s: ['Nmap · SNMP', 'SQLite history · diff'] })) +
      link('metrics · logs') +
      grp('Observability', node({ t: 'Prometheus · Grafana', s: ['alert rules · dashboard'] }) + node({ t: 'Loki · Alloy', s: ['pod logs · events'] })) +
      link('alerts') +
      grp('Out', node({ t: 'Telegram', s: ['alerts · watchdog'] }) + node({ t: 'AWS (OIDC)', s: ['S3 backups · SNS email'] })) +
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
