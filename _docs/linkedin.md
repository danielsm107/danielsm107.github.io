# Textos de LinkedIn (2026-11-17)

> Experiencia: integra los detalles que ya tenía el perfil (VLANs, VPC con subredes públicas/privadas,
> ciclo de vida de EC2, VPN site-to-site de su publicación). Backup de centralitas: vale lo del CV
> (diseñado por Daniel, más de 10 clientes), confirmado el 2026-11-17.

Perfil principal en español; perfil secundario en inglés
(Perfil → "Añadir perfil en otro idioma"). Mismos datos que el CV y el portfolio.

---

## Español

### Titular (máx. 220)

Administrador de Sistemas y Redes → DevOps / Cloud | AWS · Kubernetes · Terraform · CI/CD · Linux | Abierto a remoto

### Acerca de

Administrador de sistemas y redes con infraestructura en producción desde 2024, orientado a DevOps y cloud.

En Cadifone mantengo redes MikroTik y Fortinet de más de 35 empresas cliente, accesos VPN (WireGuard, SSTP) y servidores Linux en AWS (EC2, VPC, NACLs, Security Groups). Diseñé el backup automatizado en AWS de las centralitas de más de 10 clientes, migradas desde on-premises, y automatizo tareas con Bash y AWS Lambda programadas con EventBridge, con monitorización en CloudWatch.

Fuera del trabajo aprendo DevOps sobre un sistema real: he construido y mantengo la plataforma completa de una herramienta open source propia, un escáner de topología de red publicado en PyPI y GHCR:
• Infraestructura como código: VM de Kubernetes (k3s) en Proxmox con Terraform y cloud-init; recursos de AWS aplicados por GitHub Actions mediante OIDC, sin claves guardadas.
• CI/CD: más de 600 tests, Trivy, terraform test y helm lint en cada cambio; Jenkins dentro del clúster despliega cada versión con Helm, la prueba y hace rollback automático.
• Observabilidad: Prometheus, Grafana y Loki, alertas por Telegram y un vigilante externo por si cae la propia monitorización.
• Ocho fases documentadas con runbooks y ensayos de fallo reales.

Busco puestos de DevOps / Cloud, en España o en remoto.

AWS Certified Cloud Practitioner · Cisco CCST · Curso de Auditor Interno ISO 27001 (AENOR)
Portfolio: https://dsermar.dev

### Experiencia → Cadifone · Administrador de Sistemas y Redes (oct. 2024 – actualidad)

• Mantengo la disponibilidad y la seguridad de redes corporativas MikroTik (routing, segmentación con VLANs) y firewalls Fortinet (control de tráfico, seguridad perimetral) de más de 35 clientes.
• Implemento y gestiono acceso remoto seguro por VPN (WireGuard, SSTP) y VPN site-to-site entre sedes.
• Diseñé un sistema de backup automatizado en AWS para las centralitas (Issabel) de más de 10 clientes, migrando su infraestructura desde on-premises.
• Diseño la arquitectura VPC (subredes públicas y privadas) y despliego y administro servidores Linux en EC2, con NACLs y Security Groups.
• Automatizo tareas de administración con Bash y el ciclo de vida de instancias EC2 con AWS Lambda y EventBridge; monitorización con CloudWatch (logs, métricas y alertas) y resolución de incidencias.
• Gestiono y despliego aplicaciones con Docker; administro dispositivos con Microsoft Entra ID e Intune.

Aptitudes de este puesto: AWS · Linux · MikroTik · Fortinet · Docker · Bash

### Proyectos → Network Topology Scanner + plataforma DevOps self-hosted (2026 – actualidad)

Enlace: https://github.com/danielsm107/network-topology-scanner

Escáner de red en Python (Nmap, SNMP) publicado en PyPI y como imagen multiarquitectura en GHCR, y la plataforma que lo ejecuta cada noche en mi homelab:
• Terraform + cloud-init para la VM de Kubernetes (k3s) en Proxmox, estado en S3.
• GitHub Actions con OIDC para AWS (S3, SNS, IAM), plan en los pull requests y apply con aprobación.
• Jenkins con Helm: despliegue de cada versión, helm test y rollback automático, ensayado forzando fallos.
• Prometheus, Grafana, Loki y alertas por Telegram, con vigilante externo.
• Actions fijadas por SHA, imágenes de terceros por digest, contenedor sin root.

Aptitudes de este proyecto: Kubernetes · Terraform · Helm · Jenkins · GitHub Actions · Prometheus · Python

### Destacados (sección "Destacado")

1. Enlace al repo del escáner (la imagen de vista previa sale del README).
2. Enlace a docs/architecture.md del repo: https://github.com/danielsm107/network-topology-scanner/blob/main/docs/architecture.md
3. Enlace al portfolio: https://dsermar.dev

### Aptitudes principales (las 5 fijadas arriba)

AWS · Kubernetes · Terraform · CI/CD · Linux

---

## English

### Headline (max 220)

Systems & Network Administrator → DevOps / Cloud | AWS · Kubernetes · Terraform · CI/CD · Linux | Open to remote

### About

Systems and network administrator running production infrastructure since 2024, moving into DevOps and cloud.

At Cadifone I look after MikroTik and Fortinet networks for 35+ client companies, VPN access (WireGuard, SSTP) and Linux servers on AWS (EC2, VPC, NACLs, Security Groups). I designed the automated AWS backup for the PBX systems of 10+ clients, migrated from on-premises, and I automate tasks with Bash and AWS Lambda scheduled through EventBridge, monitored with CloudWatch.

Outside work I'm learning DevOps on a real system: I built and maintain the full platform around an open-source tool of my own, a network topology scanner published on PyPI and GHCR:
• Infrastructure as code: Kubernetes (k3s) VM on Proxmox with Terraform and cloud-init; AWS resources applied by GitHub Actions through OIDC, with no stored keys.
• CI/CD: 600+ tests, Trivy, terraform test and helm lint on every change; Jenkins inside the cluster deploys each release with Helm, tests it and rolls back on its own.
• Observability: Prometheus, Grafana and Loki, Telegram alerts and an external watchdog in case the monitoring itself goes down.
• Eight phases documented with runbooks and real failure rehearsals.

Looking for DevOps / Cloud roles, in Spain or remote.

AWS Certified Cloud Practitioner · Cisco CCST · ISO 27001 Internal Auditor course (AENOR)
Portfolio: https://dsermar.dev

### Experience → Cadifone · Systems & Network Administrator (Oct 2024 – Present)

• Keep corporate MikroTik networks (routing, VLAN segmentation) and Fortinet firewalls (traffic control, perimeter security) available and secure for 35+ clients.
• Implement and manage secure remote access over VPN (WireGuard, SSTP) and site-to-site VPNs between offices.
• Designed an automated AWS backup system for the Issabel PBX systems of 10+ clients, migrating their infrastructure from on-premises.
• Design VPC architecture (public and private subnets) and deploy and administer Linux servers on EC2, with NACLs and Security Groups.
• Automate admin tasks with Bash and the EC2 instance lifecycle with AWS Lambda and EventBridge; CloudWatch monitoring (logs, metrics, alerts) and incident resolution.
• Manage and deploy applications with Docker; administer devices with Microsoft Entra ID and Intune.

### Projects → Network Topology Scanner + self-hosted DevOps platform (2026 – Present)

Link: https://github.com/danielsm107/network-topology-scanner

A Python network scanner (Nmap, SNMP) published on PyPI and as a multi-arch image on GHCR, and the platform that runs it every night in my homelab:
• Terraform + cloud-init for the Kubernetes (k3s) VM on Proxmox, state in S3.
• GitHub Actions with OIDC for AWS (S3, SNS, IAM): plan on pull requests, apply behind an approval.
• Jenkins with Helm: every release deployed, helm test, automatic rollback, rehearsed by forcing failures.
• Prometheus, Grafana, Loki and Telegram alerts, with an external watchdog.
• Actions pinned by SHA, third-party images by digest, non-root container.
