// Single source of truth for the site. Every visible string is { en, es }.
//
// FACT SOURCES — nothing here may go beyond them:
//   [CV-A] CV_Daniel_Serrano.pdf             (Systems & Networking)
//   [CV-B] CV_Daniel_Serrano_Devops(_EN).pdf (DevOps / Cloud, ES and EN, 2026-11-17)
//   [REPO] public READMEs on github.com/danielsm107, and the scanner's
//          docs/architecture.md (the DevOps platform around it)
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
  // Main CV = Cloud/DevOps, in the page's language; the systems CV is Spanish only.
  cv: L('/cv/daniel-serrano-marin-cv-cloud-devops-en.pdf', '/cv/daniel-serrano-marin-cv-cloud-devops.pdf'),
  cvSystems: '/cv/daniel-serrano-marin-cv.pdf',
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
      'Daniel Serrano Marín — Systems & Network Administrator → DevOps / Cloud',
      'Daniel Serrano Marín — Administrador de Sistemas y Redes → DevOps / Cloud',
    ),
    description: L(
      'Systems & network administrator in Jerez de la Frontera, Spain, moving into DevOps and cloud. AWS, Linux and enterprise networking in production; Kubernetes, Terraform, CI/CD and monitoring in a self-hosted platform of my own.',
      'Administrador de sistemas y redes en Jerez de la Frontera, orientado a DevOps y cloud. AWS, Linux y redes empresariales en producción; Kubernetes, Terraform, CI/CD y monitorización en una plataforma self-hosted propia.',
    ),
  },
  hero: {
    role: L('Systems & Network Administrator → DevOps / Cloud', 'Administrador de Sistemas y Redes → DevOps / Cloud'),
    stack: 'AWS · Kubernetes · Terraform · CI/CD · Linux · Networking',
    lead: L(
      'Systems and network administrator running production infrastructure since 2025: MikroTik and Fortinet networks for 35+ clients, corporate VPNs, and Linux servers on AWS. Outside work I have built, and run, the full platform around an open-source tool of my own: Terraform, Kubernetes, continuous deployment with automatic rollback, keyless AWS access and monitoring with alerts.',
      'Administrador de sistemas y redes con infraestructura en producción desde 2025: redes MikroTik y Fortinet para más de 35 clientes, VPNs corporativas y servidores Linux en AWS. Fuera del trabajo he construido y mantengo la plataforma completa de una herramienta open source propia: Terraform, Kubernetes, despliegue continuo con rollback automático, AWS sin claves y monitorización con alertas.',
    ),
    direction: L('Moving into DevOps / Cloud', 'Orientado a DevOps / Cloud'),
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
        'I’m looking for DevOps and cloud roles, and infrastructure roles close to them. Based in Jerez de la Frontera, Spain — available for remote work.',
        'Busco puestos de DevOps y cloud, o de infraestructura cercanos a ellos. Vivo en Jerez de la Frontera y tengo disponibilidad para trabajar en remoto.',
      ),
      roles: [
        L('DevOps', 'DevOps'),
        L('Cloud', 'Cloud'),
        L('Infrastructure', 'Infraestructura'),
        L('Systems Administration', 'Administración de sistemas'),
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
  { name: L('DevOps & automation', 'DevOps y automatización'), items: ['Kubernetes (k3s)', 'Helm', 'Terraform', 'GitHub Actions · Jenkins', 'Prometheus · Grafana · Loki', 'Bash · Python'] },
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
      ['SNS', false], ['IAM', false], ['OIDC for GitHub Actions', false, 'OIDC con GitHub Actions'],
    ],
  },
  {
    name: L('Systems', 'Sistemas'),
    items: [
      ['Linux', true], ['Docker', true], ['Microsoft Entra ID', true], ['Intune', true],
      ['Ubuntu Server', false], ['CentOS', false], ['Proxmox', false], ['VMware', false],
      ['User & permission management', false, 'Gestión de usuarios y permisos'],
    ],
  },
  {
    name: L('DevOps & infrastructure as code', 'DevOps e infraestructura como código'),
    items: [
      ['Kubernetes (k3s)', false], ['Helm', false], ['Terraform', false], ['cloud-init', false],
      ['GitHub Actions', false], ['Jenkins', false], ['Trivy', false],
      ['Prometheus', false], ['Grafana', false], ['Loki', false],
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
    items: [['Bash', true], ['Python', false], ['pytest', false], ['Shell', false], ['systemd', false], ['SQL', false], ['HTML / CSS', false]],
  },
];

// ---------------------------------------------------------------- projects
export const projects = [
  {
    slug: 'network-topology-scanner',
    type: L('Personal open-source project', 'Proyecto personal open source'),
    date: L('2026 — Present', '2026 — Actualidad'),
    role: L('Sole author', 'Autor único'),
    title: L('Network Topology Scanner + self-hosted DevOps platform', 'Network Topology Scanner + plataforma DevOps self-hosted'),
    tagline: L(
      'A Python network scanner, and the platform that builds, deploys, monitors and backs it up: Terraform, Kubernetes, Jenkins, AWS through OIDC, Prometheus, Grafana and Loki.',
      'Un escáner de red en Python y la plataforma que lo construye, despliega, vigila y respalda: Terraform, Kubernetes, Jenkins, AWS con OIDC, Prometheus, Grafana y Loki.',
    ),
    tags: ['Kubernetes', 'Terraform', 'Helm', 'Jenkins', 'GitHub Actions', 'AWS', 'Prometheus', 'Python'],
    repo: 'https://github.com/danielsm107/network-topology-scanner',
    pipeline: ['GitHub Actions', 'PyPI · GHCR', 'Jenkins', 'k3s', 'Nightly scan', 'Prometheus · Loki'],
    diagram: 'scanner',
    summary: [
      L('The tool scans a network with Nmap (and the routers over SNMP), classifies devices, flags risky open ports, keeps a history in SQLite and draws the topology. It is published on PyPI and as a multi-arch image on GHCR.',
        'La herramienta escanea una red con Nmap (y los routers por SNMP), clasifica los dispositivos, marca los puertos de riesgo, guarda un historial en SQLite y dibuja la topología. Está publicada en PyPI y como imagen multiarquitectura en GHCR.'),
      L('Around it I built the platform that runs it every night in my homelab, in eight phases, each with a runbook: a Kubernetes VM created with Terraform, a Helm chart, continuous deployment with Jenkins, AWS resources managed by GitHub Actions, and monitoring and logs with alerts. It is a one-node homelab, not a production system, and the decisions are sized for that.',
        'Alrededor construí la plataforma que lo ejecuta cada noche en mi homelab, en ocho fases, cada una con su runbook: una VM de Kubernetes creada con Terraform, un chart de Helm, despliegue continuo con Jenkins, recursos de AWS gestionados por GitHub Actions, y monitorización y logs con alertas. Es un homelab de un nodo, no un sistema de producción, y las decisiones están dimensionadas para eso.'),
    ],
    contribution: L('Designed, built and documented everything: the tool, its tests and CI, the infrastructure, the pipeline and the monitoring, plus failure rehearsals for each phase.',
      'Diseñé, construí y documenté todo: la herramienta, sus tests y CI, la infraestructura, el pipeline y la monitorización, además de ensayos de fallo en cada fase.'),
    implementation: [ // [REPO] README + docs/architecture.md
      L('<strong>CI and releases</strong> — GitHub Actions runs ruff, 600+ pytest tests, a Trivy scan of the image, <code>terraform test</code>, <code>helm lint</code> and <code>promtool</code>. A version tag publishes to PyPI (trusted publishing) and GHCR (amd64 + arm64).',
        '<strong>CI y releases</strong> — GitHub Actions pasa ruff, más de 600 tests de pytest, un escaneo de la imagen con Trivy, <code>terraform test</code>, <code>helm lint</code> y <code>promtool</code>. Un tag de versión publica en PyPI (trusted publishing) y en GHCR (amd64 + arm64).'),
      L('<strong>Infrastructure as code</strong> — Terraform creates the k3s VM on Proxmox with cloud-init, with its state in S3. AWS resources (S3, SNS, IAM) are applied by GitHub Actions through OIDC: no stored keys, read-only plans on pull requests, apply behind a manual approval.',
        '<strong>Infraestructura como código</strong> — Terraform crea la VM de k3s en Proxmox con cloud-init, con el estado en S3. Los recursos de AWS (S3, SNS, IAM) los aplica GitHub Actions mediante OIDC: sin claves guardadas, plan de solo lectura en los pull requests y apply con aprobación manual.'),
      L('<strong>Continuous deployment</strong> — Jenkins runs inside the cluster and polls GitHub, so nothing reaches into the LAN. Each release goes through <code>helm upgrade</code> and <code>helm test</code>; on failure it rolls back to the exact previous revision and sends an email. Rehearsed by forcing failures.',
        '<strong>Despliegue continuo</strong> — Jenkins corre dentro del clúster y consulta GitHub, así que nada entra en la LAN. Cada versión pasa por <code>helm upgrade</code> y <code>helm test</code>; si falla, vuelve a la revisión anterior exacta y avisa por email. Ensayado forzando fallos.'),
      L('<strong>Observability</strong> — Prometheus with alert rules tested by promtool, a Grafana dashboard, logs in Loki collected by Alloy, alerts on Telegram, and an external watchdog (healthchecks.io) that fires if the monitoring itself goes down.',
        '<strong>Observabilidad</strong> — Prometheus con reglas de alerta probadas con promtool, un panel de Grafana, logs en Loki recogidos por Alloy, alertas por Telegram y un vigilante externo (healthchecks.io) que avisa si la propia monitorización cae.'),
      L('<strong>Supply chain and least privilege</strong> — third-party actions pinned by commit SHA and third-party images by digest, enforced by tests; nmap runs without root using file capabilities.',
        '<strong>Cadena de suministro y mínimo privilegio</strong> — actions de terceros fijadas por SHA e imágenes de terceros por digest, con tests que lo obligan; nmap se ejecuta sin root con capacidades de archivo.'),
      L('<strong>Backups</strong> — reports and a versioned copy of the scan history go to S3; the restore was tested by deleting the data volume on purpose.',
        '<strong>Backups</strong> — informes y una copia versionada del historial van a S3; la restauración se probó borrando el volumen de datos a propósito.'),
    ],
    output: L('A scan that runs every night without anyone touching it, an email only when the network changes in a way worth a look, and a platform that can be rebuilt from the repository.',
      'Un escaneo que corre cada noche sin que nadie lo toque, un email solo cuando la red cambia de forma que merece mirarla, y una plataforma que se puede reconstruir desde el repositorio.'),
    tech: ['Python', 'Docker', 'Kubernetes (k3s)', 'Helm', 'Terraform', 'Proxmox', 'GitHub Actions', 'Jenkins', 'AWS (S3, SNS, IAM, OIDC)', 'Prometheus', 'Grafana', 'Loki', 'Trivy', 'pytest'],
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
    L('My foundation is systems and networking. Where I’m heading is DevOps and cloud, and I’m learning it the way I learned the rest: on a real system. My network scanner runs every night on a Kubernetes cluster I built with Terraform, is deployed by a pipeline that tests and rolls back on its own, and alerts me if anything stops working, the monitoring included.',
      'Mi base son los sistemas y las redes. Hacia donde voy es DevOps y cloud, y lo estoy aprendiendo como aprendí lo demás: sobre un sistema real. Mi escáner de red se ejecuta cada noche en un clúster de Kubernetes que monté con Terraform, lo despliega un pipeline que prueba y hace rollback solo, y me avisa si algo deja de funcionar, incluida la propia monitorización.'),
  ],
  foundation: [L('Systems', 'Sistemas'), L('Networking', 'Redes'), L('Linux', 'Linux'), L('AWS', 'AWS')],
  focus: [L('DevOps', 'DevOps'), L('Cloud infrastructure', 'Infraestructura cloud'), L('Infrastructure as code', 'Infraestructura como código'), L('Observability', 'Observabilidad')],
};
