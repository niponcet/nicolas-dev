# Design system — Landing Portafolio (Nicolás Ponce Torres)

Referencia visual: `index.html` (mockup estático, abrir directo en el navegador).
Dirección: agencia moderna oscura (ref. adalabs.lat) reinterpretada con motivo **terminal / manifest de software** — coherente con perfil de ingeniero full-stack.

## Color

| Token | Hex / valor | Uso |
|---|---|---|
| `bg` | `#0A0B0D` | Fondo base |
| `surface` | `#17181D` | Tarjetas, panel terminal |
| `elev` | `#1D1F25` | Barra superior de ventanas (chrome del terminal) |
| `border` | `#24262C` | Bordes por defecto |
| `borderHover` | `#34363D` | Bordes en hover |
| `text` | `#EDEDEF` | Texto principal |
| `muted` | `#9A9BA3` | Texto secundario |
| `faint` | `#5C5E66` | Labels, timestamps, metadata |
| `accent` | `#43E6B5` | Acento primario (mint/teal) — links, status "online", CTA principal |
| `amber` | `#FF8A3D` | Acento secundario, muy puntual — badge "CTO", "En producción" |

Fondo con grid punteado sutil (líneas 1px `rgba(255,255,255,0.025)`, 44px de paso) + dos radiales muy tenues (mint arriba-izq, ámbar arriba-der) — ver `background-image` en el `<style>` del mockup.

## Tipografía

- **Display** (H1/H2/números grandes): `Space Grotesk`, weight 500–700
- **Cuerpo**: `Inter`, weight 400–500
- **Mono** (todo lo "técnico": nav, status, stack.json, pills, badges, timestamps): `JetBrains Mono`, weight 400–500

Esta separación es intencional: el mono refuerza el motivo terminal en cada punto donde aparece metadata, no solo en el panel hero.

## Layout

- Contenedor: `max-w-6xl` centrado, padding horizontal `24px` mobile / `40px` desktop
- Header: sticky, blur de fondo, borde inferior
- Hero: grid 2 columnas desktop (`1.1fr / 0.9fr`), stack vertical en mobile — texto izquierda, panel terminal derecha
- Secciones numeradas `01 / 02 / 03` (Sobre mí / Proyectos / Contacto) — es un índice real de la página, no decoración
- Proyectos: grid 2×2 en desktop, 1 columna en mobile, tarjetas `PROJECT_01`–`PROJECT_04`
- Radios: `rounded-xl` (12px) en tarjetas/paneles, `rounded-full` en botones y pills

## Signature elements (lo distintivo — replicar con precisión)

1. **Panel terminal en el hero**: ventana con chrome (3 puntos), corre `whoami`, imprime los datos de Nicolas como output de consola, cursor parpadeante al final (respeta `prefers-reduced-motion`).
2. **`stack.json`** en "Sobre mí": las habilidades técnicas no son una lista de chips genérica, están mostradas como el contenido real de un archivo de manifiesto (`lenguajes`, `frameworks`, `datos_ia`, `infraestructura`), con sintaxis coloreada (claves en mint, valores en ámbar).
3. **Badges de estado** en proyectos (`En producción` / `Completado`) en vez de badges puramente decorativos.

## Interacción / motion

- Botón "status disponible" en el hero: punto con pulso animado (`status-dot`, respeta reduced-motion)
- Cursor de terminal parpadeante
- Tarjetas de proyecto: `translateY(-3px)` + cambio de borde en hover, transición 250ms
- Sin animaciones de scroll-reveal — el motion está concentrado en el panel hero (orquestado, no disperso)

## Notas para portar a Next.js + Tailwind

- Definir estos tokens en `tailwind.config.ts` bajo `theme.extend.colors` y `theme.extend.fontFamily` (ya están listados arriba con los mismos nombres usados en el mockup, para copiar 1:1).
- Cargar las 3 fuentes vía `next/font/google` en vez de `<link>` de Google Fonts.
- El contenido de `stack.json` y las descripciones de proyecto están en español tal como los definió Nicolás — mantenerlos así salvo que él pida cambios.
- El email, GitHub y LinkedIn en el mockup son placeholders (`#`, `nicolaasponcet@gmail.com`) — reemplazar por los reales antes de publicar.