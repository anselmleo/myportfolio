
# Anselm Mba — Premium Executive Portfolio

A single-page luxury portfolio with sticky nav and anchored sections, built on the existing TanStack Start + React + Tailwind v4 stack (the project isn't Next.js — I'll keep TanStack Start, which delivers the same SSR/SEO benefits). Framer Motion drives all animations.

## Stack notes
- Framework: TanStack Start v1 (already installed) — not Next.js
- Styling: Tailwind v4 via `src/styles.css` with `@theme` tokens
- Animation: `motion/react` (Framer Motion)
- Fonts: Playfair Display, Inter, Manrope loaded via `<link>` in `__root.tsx`
- Icons: `lucide-react` (already present)
- Images: generated via image tool, saved under `src/assets/`

## Route structure
Single main page at `/` with anchored sections (Hero, About, Services, Portfolio, Experience, Skills, Testimonials, Insights, Contact). Nav links use in-page smooth scroll. Each section is its own component under `src/components/portfolio/`.

Rationale: user specified one portfolio site with distinct sections; sticky nav + smooth scroll matches the referenced UX. Route-level SEO metadata lives on `/`.

## Design tokens (src/styles.css)
Extend `:root` (and set default to dark) with:
- `--background: #0B0B0B`
- `--surface: #141414`
- `--gold: #C8A15A`
- `--gold-soft: rgba(200,161,90,0.15)`
- `--foreground: #FFFFFF`
- `--muted-foreground: #B5B5B5`
- Register `--color-gold`, `--color-surface` in `@theme inline`
- Add font family tokens: `--font-display` (Playfair), `--font-sans` (Inter), `--font-button` (Manrope)
- Utility classes: `.glass-card` (bg surface/60 + backdrop-blur + gold border), `.gold-gradient-text`

## Files to create
```
src/components/portfolio/
  Nav.tsx              — sticky, transparent → blur on scroll, mobile drawer
  Hero.tsx             — split layout, portrait w/ experience badge, service tags, CTAs
  About.tsx            — image + bio + 4 stat counters (animated on view)
  Services.tsx         — 8 glass cards w/ icon + title + description
  Portfolio.tsx        — 6 project cards w/ image, tech chips, results, 2 buttons
  Experience.tsx       — vertical timeline w/ scroll-reveal
  Skills.tsx           — grid of 12 tech chips w/ hover lift
  Testimonials.tsx     — 3 glass testimonial cards
  Insights.tsx         — 3 blog/article cards
  Contact.tsx          — form (name/email/company/phone/details) + gold CTA
  Footer.tsx           — logo, nav, socials, newsletter, copyright
  motion-presets.ts    — shared fadeUp / slideLeft / slideRight variants

src/assets/
  portrait-hero.jpg    — generated executive portrait
  portrait-about.jpg   — second portrait
  project-1..6.jpg     — 6 generated project mockups
  testimonial-1..3.jpg — 3 generated headshots
  insight-1..3.jpg     — 3 generated editorial images
```

## Files to modify
- `src/routes/__root.tsx` — add Playfair/Inter/Manrope `<link>` preconnect+stylesheet; unique title/description/OG for the portfolio; default `<html class="dark">`.
- `src/routes/index.tsx` — replace placeholder; render nav + all sections + footer; add route-level `head()` with SEO metadata, JSON-LD Person schema.
- `src/styles.css` — inject color/font tokens, glass utility, base body font, smooth-scroll.
- `package.json` — add `motion` (Framer Motion successor package).

## Content approach
All copy uses the user-provided text verbatim (name, taglines, service list, description). Placeholder companies/projects/testimonials are fictional but coherent for a Software/AI engineer & founder ("Northwind AI", "Meridian Labs", etc.). Nothing copied from Edwin Poot.

## Animation plan (motion/react)
- Nav: `motion.header` with scroll-driven `backdrop-blur` via `useScroll`
- Sections: `whileInView` fadeUp with staggered children
- Hero portrait: subtle parallax via `useScroll` + `useTransform`
- Stats: `animate` count-up on view
- Buttons: `whileHover={{ scale: 1.03 }}` + gold glow
- Timeline: line grows with `useScroll` on timeline container

## Accessibility & SEO
- Semantic `<header> <nav> <main> <section aria-labelledby> <footer>`
- Single H1 in Hero; H2 per section
- Alt text on every image
- Form labels + focus rings using gold ring token
- `head()` with title <60 chars, description <160, OG + Twitter tags, JSON-LD Person
- `prefers-reduced-motion` respected via a shared `useReducedMotion` guard

## Verification
After build, check dev server responds 200, view rendered page in Playwright at 1280 and 375 widths, capture screenshots of each section, verify no console errors.

## Out of scope
- Real backend for the contact form (submit handler will show a toast; wiring to Cloud can be a follow-up)
- Blog CMS (Insights section renders static cards)
- Auth / user accounts
