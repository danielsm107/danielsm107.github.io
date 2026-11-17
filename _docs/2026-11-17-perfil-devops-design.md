# Perfil DevOps/Cloud en CV, portfolio, GitHub y LinkedIn — diseño

## Por qué

Daniel busca puestos **DevOps/Cloud junior, en España y en remoto, en español
e inglés**. Hoy los cuatro sitios lo presentan como sysadmin (y el perfil de
GitHub, como alguien que apunta a ciberseguridad), y describen el escáner como
"un script de Python con Nmap, NetworkX y PyVis". La plataforma DevOps que lo
rodea (Terraform, k3s, Helm, Jenkins, AWS con OIDC, Prometheus/Grafana/Loki),
que es su mejor prueba para DevOps, no sale en ninguno.

## Objetivos

- Una sola historia, igual en los cuatro sitios y en los dos idiomas.
- El escáner pasa a contarse como **herramienta + plataforma DevOps self-hosted**.
- CV Cloud/DevOps en **español y en inglés** (hoy solo hay español).

## No objetivos

- Cambiar el diseño visual del CV o del portfolio.
- Rehacer el CV de "Sistemas y Redes" (solo se actualiza la línea del escáner
  si sale gratis; su `datos` en español no existe ya como archivo).

## Antiobjetivos

- **Afirmar en "Experiencia" algo que no se hace en Cadifone.** Kubernetes,
  Terraform, Helm, Jenkins y Prometheus van en "Proyectos"; Kubernetes sale de
  las etiquetas de Cadifone.
- Exagerar ("experto", "producción") lo que es un homelab de un nodo.
- Datos de la red real del homelab en textos públicos (IPs, dominios).

## Enfoques

- **A (elegido): el portfolio y el CV mandan.** La historia se escribe en el CV
  (fuente de datos del portfolio según su regla de contenido) y en
  `_src/content.mjs`; GitHub y LinkedIn se sacan de ahí.
- B: cada pieza por separado. Descartado: es lo que ha llevado a tres
  descripciones distintas del escáner.

## Historia común (aprobada)

- **Titular** (elegido por Daniel, literal, sin cargo que no ha tenido):
  *Administrador de Sistemas y Redes → DevOps / Cloud · AWS · Kubernetes ·
  Terraform · CI/CD* (EN: *Systems & Network Administrator → DevOps / Cloud ·
  AWS · Kubernetes · Terraform · CI/CD*). Se descartó "Junior DevOps / Cloud
  Engineer": sale más en búsquedas, pero puede leerse como cargo actual.
  "DevOps" y "Cloud" siguen en el titular para las búsquedas.
- **Resumen**: sysadmin y redes con infraestructura en producción desde 2025
  (35+ redes de clientes; AWS EC2/VPC/Lambda/CloudWatch); fuera del trabajo ha
  construido y mantiene la plataforma completa de una herramienta open source
  propia (IaC, Kubernetes, CD con rollback, AWS por OIDC, monitorización y logs).
- **Experiencia (Cadifone)**: lo actual del CV, sin Kubernetes.
- **Proyecto principal**: Network Topology Scanner + plataforma DevOps, con
  los logros: publicado en PyPI y GHCR (amd64/arm64), v1.6, 600+ tests y CI
  (Trivy, terraform test, helm lint, promtool); VM k3s con Terraform +
  cloud-init y estado en S3; AWS por GitHub Actions con OIDC; Jenkins con
  `helm test` y rollback ensayado; Prometheus, Grafana, Loki, Telegram y
  vigilante externo; actions por SHA, imágenes de terceros por digest, sin root.
- **Habilidades**: separadas en "en producción" y "en proyectos".

## Piezas, en orden

1. **CV** (`Desktop/cv_parametrizado`): `datos.yml` (ES, Cloud/DevOps) y un
   `datos_en_devops.yml` nuevo (EN); PDFs con `generar_cv.py`. Revisa Daniel
   los PDF antes de seguir.
2. **Portfolio** (`Desktop/danielsm107.github.io`): `_src/content.mjs`
   (hero, SEO, about, skills, proyecto del escáner) y el diagrama `scanner` de
   `_src/diagrams.mjs`; copiar los PDF nuevos a `cv/`; `node _src/build.mjs`.
   Publicar = push a `main` (lo hace o aprueba Daniel).
3. **Perfil de GitHub** (repo `danielsm107/danielsm107`): README nuevo
   (DevOps/Cloud, sin "aiming at cybersecurity"), escáner primero. Fijar repos
   lo hace Daniel en la web (la API no lo permite).
4. **LinkedIn**: textos listos para pegar (titular, Acerca de, Cadifone,
   proyecto destacado) en español y perfil secundario en inglés. Los pega Daniel.

## Llamadas mías (corregibles)

- El diseño vive en `_docs/` del repo del portfolio (Jekyll ignora carpetas con `_`).
- Cifras solo las comprobables en el repo (versión, tests, fases); nada de
  "horas ahorradas" ni porcentajes inventados.
- Certificaciones y formación, sin cambios.
