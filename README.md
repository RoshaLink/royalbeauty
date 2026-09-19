# Royal Beauty

A frontend-only marketing site for Royal Beauty, a luxury Iranian-Swedish beauty
clinic in Stockholm. Cinematic, editorial, quiet-luxury design — no backend,
no database; the booking form is a client-side UI stub only.

## Stack

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS** for the design system (`tailwind.config.ts`)
- **Framer Motion** for component/page animation
- **GSAP + ScrollTrigger** for scroll-driven parallax
- **Lenis** for smooth scrolling, synced to GSAP's ticker
- `next/font` (Cormorant Garamond + Manrope) and `next/image` (Unsplash placeholders)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
  app/            # layout, page, global styles
  components/
    layout/       # Nav, MobileMenu, Footer, Preloader, SmoothScrollProvider, CustomCursor
    sections/     # Hero + section stubs (About, Treatments, Before/After, ...)
    ui/           # Button, SectionHeading, RevealText, ScrollCue, PersianMotif
  lib/            # shared motion variants, hooks, constants
  types/          # shared content types
```

## Status

Nav and Hero are fully built with their animations (staggered headline reveal,
scroll-shrinking nav, mobile slide-in menu, GSAP parallax, custom cursor,
preloader). The remaining sections are structural placeholders, ready for
their own design/animation pass.

All motion respects `prefers-reduced-motion` (via `MotionConfig` and
per-component checks for GSAP/Lenis/cursor/preloader).
