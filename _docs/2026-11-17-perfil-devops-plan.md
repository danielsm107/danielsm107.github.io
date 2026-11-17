# Perfil DevOps/Cloud — plan

> Ejecución: superpowers:executing-plans. Pasos con casillas.

**Goal:** CV (ES + EN), portfolio, README del perfil de GitHub y textos de LinkedIn con la misma historia.

**Spec:** `_docs/2026-11-17-perfil-devops-design.md`

## Global Constraints

- Titular ES: `Administrador de Sistemas y Redes → DevOps / Cloud · AWS · Kubernetes · Terraform · CI/CD`; EN: `Systems & Network Administrator → DevOps / Cloud · AWS · Kubernetes · Terraform · CI/CD`.
- Cadifone: puesto "Administrador de Sistemas y Redes" / "Systems & Network Administrator"; sin Kubernetes, Terraform, Helm, Jenkins ni Prometheus.
- Cifras solo comprobables: v1.6.0, 600+ tests, PyPI + GHCR amd64/arm64, 8 fases; 35+ redes y 10+ centralitas (ya en las fuentes).
- Sin IPs, dominios ni nombres de la red del homelab.
- El CV cabe en **una página**.

## Review Focus

- CV que pasa a dos páginas al añadir el proyecto → mirar el PDF.
- Caracteres especiales de LaTeX en `datos*.yml` (`&`, `%`, `_`, `#`, `→`) → compilar y mirar el log.
- ES y EN desincronizados en `content.mjs` → cada `L()` con los dos.
- Enlaces del portfolio a PDFs que no existen → el build falla si falta uno.
- Texto del README del perfil que contradiga el CV (cybersecurity, cargo) → leerlos juntos.

---

### Task 1: CV en español (`Desktop/cv_parametrizado/datos.yml`)

- [ ] Copia de seguridad `datos.yml.bak-2026-11-17`.
- [ ] `tagline`, `resumen`, `habilidades` (bloques "En producción" / "En proyectos"), Cadifone sin Kubernetes, proyecto del escáner reescrito (primero), LPR después.
- [ ] `python generar_cv.py` → `build/cv.pdf` sin errores; copiar a `CV_Daniel_Serrano_Devops.pdf`.
- [ ] Mirar el PDF: una página, sin caracteres raros.

### Task 2: CV en inglés (`datos_en_devops.yml`, nuevo)

- [ ] Partir de `datos.yml` nuevo, `idioma: "en"`, traducir.
- [ ] `python generar_cv.py --datos datos_en_devops.yml` → `CV_Daniel_Serrano_Devops_EN.pdf`; una página.
- [ ] **Parada:** Daniel revisa los dos PDF.

### Task 3: Portfolio (`Desktop/danielsm107.github.io`)

- [ ] `content.mjs`: cabecera de fuentes (añadir CV-B EN y el README del repo), `seo`, `hero` (role, stack, lead, direction), `about`, `skills` (Kubernetes, Terraform, Helm, Jenkins, Prometheus, Grafana, Loki, GitHub Actions como `false`), proyecto del escáner (tagline, tags, pipeline, summary, implementation, output, tech).
- [ ] `diagrams.mjs`: diagrama `scanner` con la plataforma.
- [ ] Copiar los PDF a `cv/` (`daniel-serrano-marin-cv-cloud-devops.pdf` y `-en.pdf`); enlazar el EN en la versión inglesa.
- [ ] `node _src/build.mjs` OK; abrir `index.html` y la página del escáner en el navegador.
- [ ] Commit; push lo aprueba Daniel.

### Task 4: README del perfil (`danielsm107/danielsm107`)

- [ ] Clonar en el scratchpad, reescribir README (EN), commit; push lo aprueba Daniel.
- [ ] Decir a Daniel qué repos fijar (escáner, portfolio, LPR, media-server).

### Task 5: LinkedIn

- [ ] Textos ES y EN (titular ≤ 220 caracteres, Acerca de, Cadifone, proyecto destacado, aptitudes) en `_docs/linkedin.md`; se los entrego en el chat.
