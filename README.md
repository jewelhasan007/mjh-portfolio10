# Jewel Hasan — Portfolio (Redesign)

A premium, light-first rebuild of [jewelhasan.vercel.app](https://jewelhasan.vercel.app/) using Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4, Framer Motion, and shadcn-style UI primitives.

## Important note on content

The live site only contains real content for four things: the **Hero**, the **"Who am I?"** blurbs, the **Technologies** icon row, and the **Contact** channels (email + LinkedIn). It has no Portfolio/projects, Services, Experience, Education, Testimonials, Process, Achievements, Certifications, or FAQ content, and its GitHub/Twitter links are broken on the live site (they point to a `/link` route that 404s).

Per your instruction, this rebuild includes **only the sections with real content** — nothing here is invented. All copy is centralized and sourced in one place: `src/lib/content.ts`, with a comment documenting exactly where it came from. When you have real project/service/experience content, add it there and it'll flow through the existing design system.

## Stack

- Next.js 15 App Router, React 19, TypeScript
- Tailwind CSS v4 (CSS-variable based theming, light default + dark mode via `next-themes`)
- Framer Motion for scroll reveals, hover states, and the orbiting-stack hero animation
- lucide-react + react-icons (`simple-icons`, `fa6`) for iconography
- shadcn-style `Button`/`Badge` primitives (hand-rolled, no CLI network fetch needed)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build
npm start
```

## Structure

```
src/
  app/
    layout.tsx       # fonts, metadata, JSON-LD (Person + WebSite schema)
    page.tsx         # assembles all sections
    globals.css      # design tokens (light/dark), utilities (glass, gradient-border, etc.)
    sitemap.ts / robots.ts / icon.tsx
  components/
    navbar.tsx, hero.tsx, about.tsx, technologies.tsx, contact.tsx, footer.tsx
    theme-provider.tsx, theme-toggle.tsx, section-heading.tsx
    ui/button.tsx, ui/badge.tsx
  lib/
    content.ts       # single source of truth for real site copy
    utils.ts
```

## Design notes

- **Palette:** indigo/violet/cyan/emerald on a light, near-white base (`#F8F9FC`), with a matching dark theme toggle.
- **Type:** Sora (display) + Inter (body) + IBM Plex Mono (eyebrow labels / utility text).
- **Signature element:** an orbiting tech-stack ring around a monogram in the hero, echoing the multi-role identity (Web Developer / Full Stack / MERN / Digital Marketer) that rotates just above it.
- Respects `prefers-reduced-motion`, has visible focus states, semantic headings, and skip-to-content link.

## Deploying

Ready for Vercel: `vercel deploy`, or any Node host that supports Next.js 15.
