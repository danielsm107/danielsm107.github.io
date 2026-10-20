// Single source of truth for the site. Every visible string is { en, es }.
//
// FACT SOURCES — nothing here may go beyond them:
//   [CV-A] CV_Daniel_Serrano.pdf         (Systems & Networking)
//   [CV-B] CV_Daniel_Serrano_Devops.pdf  (DevOps / Cloud)
//   [REPO] public READMEs on github.com/danielsm107
// Where the CVs differ, the more conservative wording wins.

export const L = (en, es = en) => ({ en, es });

export const site = {
  url: 'https://dsermar.dev',
  name: 'Daniel Serrano Marín',
  email: 'danielserranomarin821@gmail.com',
  github: 'https://github.com/danielsm107',
  githubHandle: 'danielsm107',
  linkedin: 'https://www.linkedin.com/in/daniel-serrano-marin', // [CV-A][CV-B]
  linkedinHandle: 'daniel-serrano-marin',
  // PDFs served from /cv/. The build fails loudly if one is missing.
  cv: L('/cv/daniel-serrano-marin-cv.pdf', '/cv/daniel-serrano-marin-cv.pdf'),
  cvDevops: '/cv/daniel-serrano-marin-cv-cloud-devops.pdf',
  locality: 'Jerez de la Frontera',
  region: 'Andalucía',
  country: 'ES',
};

export const ui = {
  nav: {
    home: L('Home', 'Inicio'),
    experience: L('Experience', 'Experiencia'),
    projects: L('Projects', 'Proyectos'),
    skills: L('Skills', 'Skills'),
    certifications: L('Certifications', 'Certificaciones'),
    about: L('About', 'Sobre mí'),
    contact: L('Contact', 'Contacto'),
    cv: L('Download CV', 'Descargar CV'),
    menu: L('Menu', 'Menú'),
    close: L('Close menu', 'Cerrar menú'),
    skip: L('Skip to content', 'Saltar al contenido'),
    lang: L('Language', 'Idioma'),
  },
  seo: {
    title: L(
      'Daniel Serrano Marín — Systems & Infrastructure Engineer',
      'Daniel Serrano Marín — Administrador de Sistemas e Infraestructura',
    ),
    description: L(
      'Systems & network administrator in Jerez de la Frontera, Spain. Linux, enterprise networking (MikroTik, Fortinet, VPN) and AWS infrastructure (EC2, VPC, CloudWatch, Lambda). Building toward cloud, DevOps and security.',
      'Administrador de sistemas y redes en Jerez de la Frontera. Linux, redes empresariales (MikroTik, Fortinet, VPN) e infraestructura AWS (EC2, VPC, CloudWatch, Lambda). Evolucionando hacia cloud, DevOps y seguridad.',
    ),
  },
  hero: {
    role: L('Systems & Infrastructure Engineer', 'Administrador de Sistemas e Infraestructura'),
    stack: 'Linux · Networking · AWS · Cloud · Automation',
    lead: L(
      'Junior systems and network administrator working on real infrastructure: MikroTik and Fortinet networks for 35+ clients, corporate VPNs, and Linux servers on AWS with CloudWatch monitoring and Lambda automation.',
      'Administrador de sistemas y redes junior trabajando con infraestructura real: redes MikroTik y Fortinet para más de 35 clientes, VPNs corporativas y servidores Linux en AWS con monitorización en CloudWatch y automatización con Lambda.',
    ),
    direction: L('Building toward Cloud/DevOps', 'Evolucionando hacia Cloud/DevOps'),
    ctaProjects: L('View projects', 'Ver proyectos'),
    ctaCv: L('Download CV', 'Descargar CV'),
    status: L('Open to opportunities', 'Abierto a oportunidades'),
    location: L('Jerez de la Frontera, Spain · remote', 'Jerez de la Frontera · remoto'),
  },
  sections: {
    areas: { title: L('Technical areas', 'Áreas técnicas') },
    experience: {
      title: L('Experience', 'Experiencia'),
      intro: L(
        'One role, broad scope: networks, cloud, automation and endpoints for a portfolio of client companies.',
        'Un puesto con mucho alcance: redes, cloud, automatización y dispositivos para una cartera de empresas cliente.',
      ),
      stack: L('Stack', 'Stack'),
      education: L('Education', 'Formación'),
    },
    projects: {
      title: L('Projects', 'Proyectos'),
      intro: L(
        'Built outside my day job, documented as engineering work: what the system does, how it is put together and what I built.',
        'Hechos fuera del trabajo y documentados como ingeniería: qué hace el sistema, cómo está construido y qué hice yo.',
      ),
      caseStudy: L('Read case study', 'Ver caso técnico'),
      source: L('Source on GitHub', 'Código en GitHub'),
      githubTitle: L('Explore my projects on GitHub', 'Explora mis proyectos en GitHub'),
      githubBody: L('Source code, documentation and work in progress.', 'Código, documentación y trabajo en curso.'),
    },
    skills: {
      title: L('Skills', 'Skills'),
      intro: L(
        'Marked items are the ones I use in my current role. The rest come from projects, lab work and training — kept separate on purpose.',
        'Los elementos marcados son los que uso en mi puesto actual. El resto viene de proyectos, laboratorio y formación; separados a propósito.',
      ),
      legendWork: L('Used in my current role', 'Uso en mi puesto actual'),
      legendOther: L('Projects, lab or training', 'Proyectos, laboratorio o formación'),
    },
    certifications: {
      title: L('Certifications & education', 'Certificaciones y formación'),
      certs: L('Certifications', 'Certificaciones'),
      education: L('Education', 'Formación'),
      languages: L('Languages', 'Idiomas'),
    },
    about: {
      title: L('About', 'Sobre mí'),
      foundation: L('Current foundation', 'Base actual'),
      focus: L('Current focus', 'Foco actual'),
    },
    contact: {
      title: L('Contact', 'Contacto'),
      heading: L('Let’s talk infrastructure.', 'Hablemos de infraestructura.'),
      body: L(
        'I’m looking for roles in systems administration, networking, cloud, DevOps or infrastructure. Based in Jerez de la Frontera, Spain — available for remote work.',
        'Busco puestos en administración de sistemas, redes, cloud, DevOps o infraestructura. Vivo en Jerez de la Frontera y tengo disponibilidad para trabajar en remoto.',
      ),
      roles: [
        L('Systems Administration', 'Administración de sistemas'),
        L('Networking', 'Redes'),
        L('Cloud', 'Cloud'),
        L('DevOps', 'DevOps'),
        L('Infrastructure', 'Infraestructura'),
      ],
      email: L('Email', 'Email'),
      cv: L('CV', 'CV'),
      cvGeneral: L('Systems & Networking (PDF)', 'Sistemas y Redes (PDF)'),
      cvDevops: L('Cloud & DevOps (PDF)', 'Cloud y DevOps (PDF)'),
    },
  },
  project: {
    back: L('All projects', 'Todos los proyectos'),
    type: L('Type', 'Tipo'),
    date: L('Date', 'Fecha'),
    role: L('Role', 'Rol'),
    source: L('Source', 'Código'),
    headings: {
      summary: L('Technical summary', 'Resumen técnico'),
      architecture: L('Architecture', 'Arquitectura'),
      contribution: L('My contribution', 'Mi contribución'),
      implementation: L('Implementation', 'Implementación'),
      output: L('Result / output', 'Resultado'),
      tech: L('Technologies', 'Tecnologías'),
    },
    next: L('Next project', 'Siguiente proyecto'),
    cta: L('Hiring for an infrastructure role?', '¿Buscas perfil de infraestructura?'),
    ctaLink: L('Get in touch', 'Contacta conmigo'),
  },
  footer: {
    built: L('Static HTML & CSS · no trackers', 'HTML y CSS estáticos · sin trackers'),
  },
  notFound: {
    title: L('404 — page not found', '404 — página no encontrada'),
    body: L('That route doesn’t exist.', 'Esa ruta no existe.'),
    back: L('Back to home', 'Volver al inicio'),
  },
};

// ---------------------------------------------------------------- areas (right after the hero)
// Only technologies present in the CVs.
export const areas = [
  { name: L('Systems', 'Sistemas'), items: ['Linux', 'Ubuntu Server', 'CentOS', 'VMware', 'Proxmox', 'Docker'] },
  { name: L('Networking', 'Redes'), items: ['MikroTik', 'Fortinet', 'Routing', 'VLANs', 'VPN'] },
  { name: L('Cloud', 'Cloud'), items: ['AWS EC2', 'VPC', 'CloudWatch', 'Lambda', 'EventBridge', 'S3'] },
  { name: L('Automation', 'Automatización'), items: ['Bash', 'Python', 'AWS Lambda', 'EventBridge', 'systemd'] },
  { name: L('Security', 'Seguridad'), items: ['Firewalls', 'VPN', 'NACLs', 'Security Groups', 'Linux hardening'] },
];

// ---------------------------------------------------------------- experience
export const experience = {
  role: L('Systems & Network Administrator', 'Administrador de Sistemas y Redes'),
  company: 'Cadifone',
  period: L('Mar 2025 — Present', 'Mar 2025 — Actualidad'),
  start: '2025-03',
  location: L('Jerez de la Frontera, Spain', 'Jerez de la Frontera'),
  figures: [
    { value: '35+', label: L('client networks — MikroTik & Fortinet', 'redes de clientes — MikroTik y Fortinet') }, // [CV-A]
    { value: '10+', label: L('client PBX systems backed up to AWS', 'centralitas de clientes con backup en AWS') }, // [CV-A]
  ],
  groups: [
    {
      name: L('Networking & perimeter security', 'Redes y seguridad perimetral'),
      bullets: [
        L('Keep corporate networks built on MikroTik (routing, segmentation) and Fortinet firewalls available and secure for 35+ clients, handling traffic control and perimeter security.',
          'Garantizo la disponibilidad y seguridad de redes corporativas basadas en MikroTik (routing, segmentación) y firewalls Fortinet para más de 35 clientes, gestionando el control de tráfico y la seguridad perimetral.'),
        L('Implement and manage secure remote access over VPN (SSTP and WireGuard).',
          'Implemento y gestiono el acceso remoto seguro mediante VPN (SSTP y WireGuard).'),
      ],
      tags: ['MikroTik RouterOS', 'Fortinet', 'Routing', 'Segmentation', 'SSTP', 'WireGuard'],
    },
    {
      name: L('Cloud migration & backup', 'Migración cloud y backup'),
      bullets: [
        L('Designed an automated AWS backup system for the Issabel PBX systems of 10+ clients, migrating their infrastructure from on-premises.',
          'Diseñé un sistema de backup automatizado en AWS para las centralitas PBX (Issabel) de más de 10 clientes, migrando su infraestructura desde on-premises.'),
        L('Deploy and administer Linux servers on AWS EC2, configuring VPC, NACLs and Security Groups.',
          'Despliego y administro servidores Linux en AWS EC2, configurando VPC, NACLs y Security Groups.'),
      ],
      tags: ['AWS EC2', 'VPC', 'NACLs', 'Security Groups', 'Issabel', 'Linux'],
    },
    {
      name: L('Automation & monitoring', 'Automatización y monitorización'),
      bullets: [
        L('Automate infrastructure tasks with Bash and AWS Lambda, scheduled through EventBridge.',
          'Automatizo tareas de infraestructura con Bash y AWS Lambda, con ejecución programada mediante EventBridge.'),
        L('Implemented AWS CloudWatch monitoring for logs, metrics and alerts.',
          'Implementé monitorización con AWS CloudWatch para logs, métricas y alertas.'),
      ],
      tags: ['Bash', 'AWS Lambda', 'EventBridge', 'CloudWatch'],
    },
    {
      name: L('Containers & endpoints', 'Contenedores y dispositivos'),
      bullets: [
        L('Manage and deploy applications with Docker.', 'Gestiono y despliego aplicaciones con Docker.'),
        L('Administer corporate devices with Microsoft Entra ID and Intune.', 'Administro dispositivos corporativos con Microsoft Entra ID e Intune.'),
      ],
      tags: ['Docker', 'Microsoft Entra ID', 'Intune'],
    },
  ],
};

export const education = {
  title: L('Higher Vocational Degree in Network Systems Administration (ASIR)', 'Administración de Sistemas Informáticos en Red (Grado Superior)'),
  place: 'IES Francisco Romero Vargas',
  period: '2023 — 2025',
  note: L('Final project: license-plate recognition access control.', 'Proyecto final: control de acceso por reconocimiento de matrículas.'),
};

export const languages = [
  { name: L('Spanish', 'Español'), level: L('Native', 'Nativo') },
  { name: L('English', 'Inglés'), level: L('B2', 'B2') },
];

// ---------------------------------------------------------------- certifications
// Only the three listed in both CVs. Add `url` when you have a verification link.
export const certifications = [
  { abbr: 'AWS', name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', kind: L('Certification', 'Certificación'), url: 'https://www.credly.com/badges/a189a356-7261-48c6-a4c2-34f6d0c70d6d/public_url' },
  { abbr: 'CCST', name: 'Cisco Certified Support Technician (CCST)', issuer: 'Cisco', kind: L('Certification', 'Certificación'), url: 'https://www.credly.com/badges/2d9c0be0-a62d-45e4-a0bc-614cf53fad09/public_url' },
  { abbr: 'ISO', name: L('ISO 27001 Internal Auditor', 'Auditor Interno ISO 27001'), issuer: 'AENOR', kind: L('Training course', 'Curso de formación'), url: 'https://aenor.vottun.com/badgedetail?id=baee3e13-94b1-4ef4-bf6e-fa1b7fab3629' },
];

// ---------------------------------------------------------------- skills
// work: true only when a CV experience bullet (not just the skills list) backs it.
export const skills = [
  {
    name: L('Networking', 'Redes'),
    items: [
      ['MikroTik RouterOS', true], ['Routing', true], ['Network segmentation', true, 'Segmentación de red'],
      ['Fortinet firewalls', true, 'Firewalls Fortinet'], ['SSTP VPN', true], ['WireGuard', true],
      ['Switching', false], ['VLANs', false],
    ],
  },
  {
    name: L('Cloud (AWS)', 'Cloud (AWS)'),
    items: [
      ['EC2', true], ['VPC', true], ['CloudWatch', true], ['Lambda', true], ['EventBridge', true], ['S3', false],
    ],
  },
  {
    name: L('Systems', 'Sistemas'),
    items: [
      ['Linux', true], ['Docker', true], ['Microsoft Entra ID', true], ['Intune', true],
      ['Ubuntu Server', false], ['CentOS', false], ['Proxmox', false], ['VMware', false],
      ['Kubernetes (k3s / Minikube)', false], ['User & permission management', false, 'Gestión de usuarios y permisos'],
    ],
  },
  {
    name: L('Security', 'Seguridad'),
    items: [
      ['NACLs', true], ['Security Groups', true], ['Perimeter security', true, 'Seguridad perimetral'],
      ['Linux hardening', false, 'Hardening de Linux'], ['Cybersecurity principles', false, 'Principios de ciberseguridad'],
    ],
  },
  {
    name: L('Scripting & other', 'Scripting y otros'),
    items: [['Bash', true], ['Python', false], ['Shell', false], ['systemd', false], ['SQL', false], ['HTML / CSS', false]],
  },
];

// ---------------------------------------------------------------- projects
export const projects = [
  {
    slug: 'network-topology-scanner',
    type: L('Personal project', 'Proyecto personal'),
    date: L('2026 — Present', '2026 — Actualidad'),
    role: L('Sole author', 'Autor único'),
    title: L('Network Topology Scanner', 'Escáner de topología de red'),
    tagline: L(
      'Scans a network with Nmap, builds the topology as a graph with NetworkX and exports it as interactive HTML with PyVis.',
      'Escanea una red con Nmap, construye la topología como grafo con NetworkX y la exporta a HTML interactivo con PyVis.',
    ),
    tags: ['Python', 'Nmap', 'NetworkX', 'PyVis'],
    repo: 'https://github.com/danielsm107/network-topology-scanner',
    pipeline: ['Network', 'Nmap', 'Python', 'NetworkX', 'PyVis', 'Interactive HTML'],
    diagram: 'scanner',
    summary: [
      L('A Python tool that turns a network range into a map. Nmap discovers the live hosts and their open ports and services; the results become a NetworkX graph, and PyVis renders that graph as an interactive HTML page you can open in any browser.',
        'Una herramienta en Python que convierte un rango de red en un mapa. Nmap descubre los hosts activos y sus puertos y servicios abiertos; los resultados se convierten en un grafo de NetworkX y PyVis lo exporta a una página HTML interactiva que se abre en cualquier navegador.'),
      L('It is aimed at inventory and quick auditing of networks you own or are authorized to scan.',
        'Está pensada para inventariar y auditar rápidamente redes propias o con autorización para escanearlas.'),
    ],
    contribution: L('Designed and wrote the whole tool: scanning, classification, graph building, exports, history, tests and CI.',
      'Diseñé y escribí toda la herramienta: escaneo, clasificación, construcción del grafo, exportaciones, historial, tests y CI.'),
    implementation: [ // [REPO] README
      L('<strong>Discovery</strong> — Nmap in two phases by default: a ping sweep to find live hosts, then port and service detection (<code>-sV</code>) on those hosts only. Optional OS detection and a fast preset.',
        '<strong>Descubrimiento</strong> — Nmap en dos fases por defecto: un barrido ping para encontrar hosts activos y después detección de puertos y servicios (<code>-sV</code>) solo sobre ellos. Detección de SO opcional y un modo rápido.'),
      L('<strong>Classification</strong> — each host’s MAC vendor maps to a device category (router, firewall, VM, NAS, printer, camera, IoT…). Works on the same L2 segment only, since ARP doesn’t cross routers or VLANs.',
        '<strong>Clasificación</strong> — el fabricante de la MAC de cada host se asigna a una categoría (router, firewall, VM, NAS, impresora, cámara, IoT…). Solo funciona en el mismo segmento L2, porque ARP no atraviesa routers ni VLANs.'),
      L('<strong>Risk flags</strong> — hosts with sensitive ports open (Telnet, SMB, RDP, FTP, VNC) are highlighted in red.',
        '<strong>Alertas</strong> — los hosts con puertos sensibles abiertos (Telnet, SMB, RDP, FTP, VNC) se marcan en rojo.'),
      L('<strong>History</strong> — every scan is stored in SQLite and compared with the previous one: new or missing hosts, changed ports.',
        '<strong>Historial</strong> — cada escaneo se guarda en SQLite y se compara con el anterior: hosts nuevos o desaparecidos y puertos que cambian.'),
      L('<strong>Interfaces</strong> — CLI, plus an optional local Streamlit web UI with cancellable scans; CSV export for inventory.',
        '<strong>Interfaces</strong> — CLI y una interfaz web local opcional en Streamlit con escaneos cancelables; exportación a CSV para inventario.'),
      L('<strong>Quality</strong> — pytest suite with Nmap mocked (no real network needed) and GitHub Actions running tests and ruff on every push.',
        '<strong>Calidad</strong> — tests con pytest simulando Nmap (sin necesidad de red real) y GitHub Actions ejecutando tests y ruff en cada push.'),
    ],
    output: L('An interactive HTML topology map with icons per device category and red flags on risky hosts, a CSV inventory, and a scan-to-scan diff.',
      'Un mapa de topología en HTML interactivo con iconos por categoría y alertas en rojo, un inventario CSV y la comparación entre escaneos.'),
    tech: ['Python', 'Nmap', 'NetworkX', 'PyVis', 'SQLite', 'Streamlit', 'pytest', 'ruff', 'GitHub Actions'],
  },
  {
    slug: 'lpr-access-control',
    type: L('Final degree project — ASIR', 'Proyecto de Fin de Ciclo — ASIR'),
    date: L('2024 — 2025', '2024 — 2025'),
    role: L('Sole author', 'Autor único'),
    title: L('License Plate Recognition Access Control', 'Control de acceso por reconocimiento de matrículas'),
    tagline: L(
      'Vehicle access control on a Raspberry Pi 3B: OpenALPR reads the plate, a Flask + MySQL backend authorizes it and pushes the event live over Socket.IO.',
      'Control de acceso de vehículos sobre Raspberry Pi 3B: OpenALPR lee la matrícula, un backend Flask + MySQL la autoriza y emite el evento en tiempo real con Socket.IO.',
    ),
    tags: ['Raspberry Pi', 'Python', 'OpenALPR', 'Flask', 'MySQL', 'Socket.IO', 'systemd'],
    repo: 'https://github.com/danielsm107/control-acceso-matriculas',
    pipeline: ['Camera', 'Raspberry Pi', 'OpenALPR', 'Flask', 'MySQL'],
    diagram: 'lpr',
    summary: [
      L('An access-control system based on automatic license-plate recognition. A Raspberry Pi 3B with a camera captures the vehicle, OpenALPR (EU region) extracts the plate, and a Flask backend with MySQL checks it against authorized plates. Users and roles are authenticated, and access events reach the web interface in real time through WebSockets (Socket.IO).',
        'Un sistema de control de acceso basado en el reconocimiento automático de matrículas. Una Raspberry Pi 3B con cámara captura el vehículo, OpenALPR (región EU) extrae la matrícula y un backend en Flask con MySQL la comprueba contra las autorizadas. Hay autenticación de usuarios y roles, y los eventos de acceso llegan a la interfaz web en tiempo real mediante WebSockets (Socket.IO).'),
    ],
    contribution: L('Final project of my ASIR degree, designed, built and documented end to end on my own.',
      'Proyecto final de mi Grado Superior ASIR, diseñado, construido y documentado de principio a fin por mí.'),
    implementation: [ // [CV] + [REPO] README
      L('<strong>Capture</strong> — a Python script on the Pi captures a frame every second and runs OpenALPR with the EU region. Consecutive duplicates are skipped.',
        '<strong>Captura</strong> — un script en Python en la Pi captura una imagen cada segundo y la procesa con OpenALPR (región EU). Se descartan duplicados consecutivos.'),
      L('<strong>Unattended operation</strong> — the script runs as a <code>systemd</code> service with <code>Restart=always</code>, so it starts on boot and recovers from failures.',
        '<strong>Funcionamiento desatendido</strong> — el script corre como servicio <code>systemd</code> con <code>Restart=always</code>: arranca con el sistema y se recupera de fallos.'),
      L('<strong>Backend</strong> — Flask API and web app with MySQL; the Pi posts each detected plate and image to it over HTTP. Users request their plate and administrators approve or reject it (role-based access).',
        '<strong>Backend</strong> — API y web en Flask con MySQL; la Pi envía cada matrícula detectada y su imagen por HTTP. Los usuarios solicitan su matrícula y los administradores la aprueban o rechazan (acceso por roles).'),
      L('<strong>Real time</strong> — the server emits each access event over Socket.IO and the history view updates without reloading.',
        '<strong>Tiempo real</strong> — el servidor emite cada evento de acceso por Socket.IO y el historial se actualiza sin recargar.'),
    ],
    output: L('A working end-to-end system — plate in front of the camera, decision in the backend, event on screen — with full technical documentation in the repository.',
      'Un sistema funcional de extremo a extremo (matrícula frente a la cámara, decisión en el backend, evento en pantalla) con documentación técnica completa en el repositorio.'),
    tech: ['Raspberry Pi 3B', 'Python', 'OpenALPR', 'Flask', 'MySQL', 'Socket.IO', 'WebSockets', 'systemd'],
  },
];

// ---------------------------------------------------------------- about
export const about = {
  paragraphs: [
    L('I’m a systems and network administrator with a background in network systems administration (ASIR). Since March 2025 I’ve worked at Cadifone on production infrastructure for client companies: MikroTik and Fortinet networks, VPN access, Linux servers on AWS and the automation and monitoring around them.',
      'Soy administrador de sistemas y redes, formado en Administración de Sistemas Informáticos en Red (ASIR). Desde marzo de 2025 trabajo en Cadifone con infraestructura en producción para empresas cliente: redes MikroTik y Fortinet, acceso por VPN, servidores Linux en AWS y la automatización y monitorización que los rodea.'),
    L('My foundation is systems and networking. Where I’m heading is cloud infrastructure, DevOps and security — I’m building that the same way I learned the rest: on real systems, with automation wherever a task repeats.',
      'Mi base son los sistemas y las redes. Hacia donde voy es la infraestructura cloud, DevOps y la seguridad, y lo estoy construyendo igual que aprendí lo demás: sobre sistemas reales y automatizando todo lo que se repite.'),
  ],
  foundation: [L('Systems', 'Sistemas'), L('Networking', 'Redes'), L('Linux', 'Linux'), L('AWS', 'AWS')],
  focus: [L('Cloud infrastructure', 'Infraestructura cloud'), L('Automation', 'Automatización'), L('DevOps', 'DevOps'), L('Cybersecurity', 'Ciberseguridad')],
};
