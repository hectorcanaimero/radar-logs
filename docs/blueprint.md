```
# Master Template Blueprint — Tool Landing

Plantilla maestra reutilizable para landings de **herramienta online** (producto en el navegador).  
No es un brief de un producto concreto: define estructura, secciones, sistema visual y reglas de composición.  
Al instanciar, sustituye los placeholders (`{{BRAND}}`, `{{TOOL}}`, etc.).

---

## Quick path — instanciar

1. Copia este blueprint a tu repo (`docs/master-template-blueprint.md`).
2. Rellena la tabla **Instance** al final.
3. Implementa en este orden: Shell → Hero+Tool → secciones editoriales → SEO landings → Features/Footer.
4. Verifica el checklist de composición.

---

## Placeholders

| Token | Significado |
|-------|-------------|
| `{{BRAND}}` | Nombre del producto |
| `{{TOOL}}` | Núcleo interactivo (upload, editor, playground…) |
| `{{PRIMARY_ACTION}}` | Verbo del producto (p. ej. “quitar fondo”, “escalar”, “convertir”) |
| `{{DEMO}}` | Estado demo inicial del tool (samples / before-after) |
| `{{INTENTION}}` | Keyword / intención SEO de una landing hija |
| `{{LOCALE}}` | Locale activo (`en`, `es`, …) |

---

## Superficies del template

| Superficie | Ruta patrón | Rol |
|------------|-------------|-----|
| **Home** | `/{{LOCALE}}` | Producto primero: hero + `{{TOOL}}` + SEO editorial |
| **Landing SEO** | `/{{LOCALE}}/{{SLUG}}` | Intención: H1 + mismo `{{TOOL}}` + copy + FAQ + related |
| **Shell** | Layout global | Header sticky + Footer (SEO hub + legal) |

Una sola composición en el primer viewport. El tool es el ancla; el resto es soporte.

---

## Dirección visual (contrato)

**Estilo:** minimal / monochrome / editorial limpio.

| Knob | Valor |
|------|-------|
| Craft | Alto — cada pixel deliberado |
| Motion | Bajo — hover, spinner, micro-transiciones |
| Density | Baja — mucho whitespace |
| Color | Blanco/negro/grises; un acento opcional máximo |
| Borders | Hairline, no sombras en contenido |
| Radius | Casi nulo / estrecho |
| Tipografía | Sans geométrica limpia; labels `uppercase` + tracking amplio |

### Tipografía

| Rol | Tratamiento |
|-----|-------------|
| Marca / H1 / labels de sección | `text-xs`–`text-sm`, `uppercase`, tracking `0.18em`–`0.28em` |
| Cuerpo | `text-sm`, `leading-relaxed`, color muted |
| Jerarquía | Tipografía > color > decoración |

### Contenedores

| Zona | Max width |
|------|-----------|
| Header / Footer | `max-w-5xl` |
| Editorial (FAQ, features, steps) | `max-w-3xl` |
| Tool (home) | `max-w-4xl` |
| Tool (SEO landing) | `max-w-2xl`–`max-w-3xl` |

### Patrones de layout (reutilizar)

| Patrón | Cómo |
|--------|------|
| **Divide list** | `divide-y` + `border-y` — features, steps, FAQ, related |
| **Label + body row** | Título izq. uppercase / descripción der. alineada |
| **Section rhythm** | `py-24 md:py-32`; H2 centrado muted |
| **One job / section** | Un H2, un bloque, sin stats strips |

### Prohibido en este template

- Cards con sombra en el hero
- Pills / badges flotantes / stickers sobre media
- Gradientes “AI default” (púrpura, cream+terracotta)
- Stats strips, icon rows, collages en el primer viewport
- Hero con imagen inset / side-panel / floating media card
- Más de un CTA group compitiendo en el primer viewport

---

## Wireframe A — Home

```
┌─────────────────────────────────────────────────────────┐
│ HEADER (sticky)                                         │
│  {{BRAND}} · Nav · Lang · Theme                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  H1  (uppercase, tracking, centrado)                    │
│  Subtitle (1 frase, muted, max-w-2xl)                   │
│                                                         │
│  ┌──────────────────────────┐  ┌────┐                   │
│  │ {{TOOL}}  (#tool)        │  │Demo│  filmstrip        │
│  │ {{DEMO}} / Upload        │  │ +  │                   │
│  └──────────────────────────┘  └────┘                   │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  HOW IT WORKS                                           │
│  step · description  (divide list)                      │
├─────────────────────────────────────────────────────────┤
│  USE CASES / TYPES                                      │
│  grid 2 cols → links a landings SEO                     │
├─────────────────────────────────────────────────────────┤
│  TRUST / PRIVACY (centrado, corto)                      │
├─────────────────────────────────────────────────────────┤
│  FAQ (details/summary)                                  │
├─────────────────────────────────────────────────────────┤
│  FEATURES (filas: label \| body)                        │
├─────────────────────────────────────────────────────────┤
│ FOOTER                                                  │
│  {{BRAND}} · SEO hub · Legal                            │
└─────────────────────────────────────────────────────────┘
```

### Orden de secciones — Home

| # | Slot | Propósito | Contenido típico |
|---|------|-----------|------------------|
| 0 | **Shell header** | Marca + nav + i18n + theme | Sticky, hairline bottom |
| 1 | **Hero + Tool** | Primera acción = `{{PRIMARY_ACTION}}` | H1 + 1 subtitle + `#tool` |
| 2 | **How it works** | Reducir fricción | 3–5 pasos en divide list |
| 3 | **Use cases / types** | SEO interno + descubrimiento | Grid 2 cols → landings |
| 4 | **Trust / privacy** | Diferenciador de confianza | 1 H2 + 1 párrafo |
| 5 | **FAQ** | Objeciones + rich results | Accordion nativo |
| 6 | **Features** | Beneficios estables | 3–5 filas label/body |
| 7 | **Shell footer** | Hub + legal | 3 columnas |

**Regla del primer viewport:** solo `{{BRAND}}` (vía header), H1, una frase, un grupo de acción (el tool). Nada más.

---

## Wireframe B — Landing SEO (intención)

```
┌─────────────────────────────────────────────────────────┐
│ HEADER                                                  │
├─────────────────────────────────────────────────────────┤
│  H1 = {{INTENTION}}                                     │
│  {{TOOL}} (#tool) + {{DEMO}}                            │
├─────────────────────────────────────────────────────────┤
│  INTRO (2–5 párrafos)                                   │
│  FAQ (por intención)                                    │
│  RELATED (otras intenciones)                            │
├─────────────────────────────────────────────────────────┤
│  FEATURES (compartido con home)                         │
├─────────────────────────────────────────────────────────┤
│ FOOTER                                                  │
└─────────────────────────────────────────────────────────┘
```

### Orden de secciones — Landing SEO

| # | Slot | Propósito |
|---|------|-----------|
| 1 | **H1 + Tool** | Keyword arriba + mismo producto |
| 2 | **Intro** | Copy largo / SEO |
| 3 | **FAQ** | Preguntas de esa intención |
| 4 | **Related** | Cross-linking interno |
| 5 | **Features** | Beneficios compartidos (DRY) |

**Regla:** el tool es el mismo componente que en Home. No forks visuales por slug.

---

## Slot — Tool (núcleo)

El tool es el ancla visual y funcional de todo el template.

### Estados

| Estado | UI |
|--------|----|
| **Demo** (default) | Resultado demo + filmstrip de samples |
| **Input / loading** | Zona de carga + progreso |
| **Completed** | Resultado real + download / reset |

### Layout canónico

```
[  Preview / Input (flex-1)  ] [ Filmstrip vertical ]
```

| Detalle | Spec |
|---------|------|
| Ancla | `#tool` + offset sticky header |
| Filmstrip | thumbs estrechos verticales + slot `+` “try yours” |
| Resultado | before/after o preview del output |
| Home width | más ancho (`max-w-4xl`) |
| SEO width | más estrecho (`max-w-2xl`) |

---

## Shell

### Header

- Sticky, altura fija (~64px), border-bottom hairline
- Izq: `{{BRAND}}` uppercase tracking
- Centro (desktop): links de producto (Home, How to, FAQ, About…)
- Der: Language + Theme
- Mobile: menú + mismos controles

### Footer

Grid 3 columnas en desktop:

1. Marca + una línea de posicionamiento  
2. Hub de landings SEO (registry)  
3. Legal / how-to / FAQ / privacy / terms  

---

## SEO del template (estructura, no copy)

| Superficie | Datos estructurados recomendados |
|------------|----------------------------------|
| Home | Site + HowTo + FAQ |
| Landing SEO | Breadcrumb + FAQ + SoftwareApplication (si aplica) |

### Registry de landings

Una sola fuente de verdad:

```
key → namespace i18n → slugs por locale → related keys
```

Cada landing SEO = mismo layout B + copy/FAQ/related distintos.

---

## Arquitectura de componentes (patrón)

Nombres genéricos; adapta al stack.

```
layout/
  header
  footer
  theme + i18n providers

home/
  orchestrator          → orden de secciones Wireframe A
  how-it-works
  use-cases / types
  trust / privacy
  faq
  features              → compartido

seo-landing/
  orchestrator          → Wireframe B
  registry (slugs)

tool/
  tool-section          → estados demo / input / done
  upload-or-input
  result-display
  demo-filmstrip
```

**DRY obligatorio:** `tool-section` y `features` se comparten entre Home y SEO landings.

---

## Checklist de composición

- [ ] Primer viewport = marca + H1 + 1 frase + tool
- [ ] Una job por sección
- [ ] Divide lists + uppercase labels (contrato visual)
- [ ] Tool anclado en `#tool` y reutilizado
- [ ] Home y SEO landings no divergen en el núcleo del producto
- [ ] Copy vía i18n namespaces (`home` / `landing.*` / `common`)
- [ ] Responsive: filmstrip usable en mobile; nav colapsa
- [ ] Sin cards/pills/glow/stats en hero

---

## Instance (rellenar por proyecto)

| Campo | Valor |
|-------|-------|
| Proyecto | |
| `{{BRAND}}` | |
| `{{PRIMARY_ACTION}}` | |
| `{{TOOL}}` descripción | |
| Locales | |
| Landings SEO (keys) | |
| Claim de producto | |
| Caps técnicos (si aplica) | |
| Orchestrator Home | |
| Orchestrator SEO | |
| Tokens CSS | |

### Ejemplo de instancia (referencia)

| Campo | Valor |
|-------|-------|
| Proyecto | BorraFondo |
| `{{BRAND}}` | BorraFondo |
| `{{PRIMARY_ACTION}}` | Quitar fondo de imagen |
| `{{TOOL}}` | Browser BG removal (demo slider + upload + filmstrip) |
| Locales | en, es, pt, pl, ro, ru, ko |
| Landings SEO | photo, png, erase, producto, logo, firma, persona, coche, fondo-blanco |
| Claim | Gratis, sin límites de uso; proceso 100% en el navegador |
| Caps | 25 MB / 4000×4000 |
| Orchestrator Home | `src/app/[locale]/page.tsx` |
| Orchestrator SEO | `src/presentation/components/landing-page.tsx` |
| Tokens CSS | `src/app/globals.css` |

---

## Next step

1. Rellena **Instance**.  
2. Si rediseñas: cambia tokens y tipografía antes de reordenar secciones.  
3. Si clonas a otro producto: copia este archivo, limpia la tabla Instance y vuelve a llenarla.
```

