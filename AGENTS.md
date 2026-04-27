# AGENTS.md

## Project Overview

A single-page digital Indian wedding invitation with rich animations. Built on TanStack Start (React + Vite) and deployed to Netlify.

## Directory Structure

```
src/
  routes/
    __root.tsx       — Root layout: body background, HeadContent, Scripts
    index.tsx        — Entire invitation UI (single route, self-contained)
  styles.css         — Tailwind import + base body reset
public/
  placeholder.png    — Couple photo (replace with real photo)
netlify.toml         — Build config: vite build, dist/client publish dir
```

## Architecture Decisions

### Single-file invitation
All invitation logic and components live in `src/routes/index.tsx`. Helper components (PetalSVG, DoorDesign, ScratchReveal, MandalaBG, CornerBorders, LotusOrnament, OmSymbol) are co-located in the same file. This was intentional — the invitation is a standalone experience with no routing complexity.

### CSS strategy
Animations and keyframes that Tailwind cannot express are injected via a `<style>` tag at the top of the component. Tailwind utility classes handle spacing. CSS custom properties (`--sway`, `--rot`) drive per-element petal animation variance.

### Scratch-off (Canvas)
`ScratchReveal` uses an HTML5 Canvas absolutely positioned over the revealed date content. `globalCompositeOperation = 'destination-out'` erases the scratch layer on mouse/touch drag. Canvas is sized dynamically to match its container div via `useEffect`.

### Door animation
Two `position: absolute` half-panels use CSS `perspective` + `rotateY` on a class toggle. State boolean (`doorsOpen`) drives the transition; content becomes visible 1.4 s after doors start opening.

### Petal data
`PETAL_DATA` is a module-level constant — 30 petals with randomised positions, durations, delays, sway, and rotation amounts. CSS custom properties set inline give each petal a unique trajectory via a single `@keyframes petalFall`.

## Fonts

Loaded from Google Fonts via `@import` in the component `<style>` tag:
- **Yeseva One** — display headings
- **Libre Baskerville** — body / italic quotes
- **Cinzel Decorative** — section labels / small caps

## z-index Layers

| Layer | z-index |
|-------|---------|
| Mandala BG | 0 |
| Corner borders | 1 |
| Main content | 2 |
| Petals | 10 |
| Door overlay | 200 |

## Customisation Checklist

1. Replace `public/placeholder.png` with real couple photo (square crop best)
2. Update names `Priya` / `Arjun` in `src/routes/index.tsx`
3. Update family names, cities, and parent names in the family section
4. Update venue name if needed
5. The date (10th May 2026) is in the `ScratchReveal` component — update if needed

## Conventions

- TypeScript strict mode; `@/` alias → `src/`
- No external state management — pure React `useState`/`useRef`/`useEffect`
- All animations use `transform` and `opacity` only (GPU-composited)
- No external UI component library used (all SVG-drawn ornaments)

## Development Commands

```bash
npm run dev      # Start dev server (port 3000)
npm run build    # Production build
```
