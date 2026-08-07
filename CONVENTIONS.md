# Project Conventions

Reference for folder architecture and naming rules used across the GOLTENS
codebase. Applies from Sprint 1 onward.

## Component documentation

Every reusable component's usage, props, and examples are documented
Storybook-style in its folder's README, not here:

- [components/ui/README.md](components/ui/README.md) — primitives (layout,
  typography, actions, surfaces, state, form controls)
- [components/layout/README.md](components/layout/README.md) — site chrome
  (Navbar, Footer, LanguageSwitcher, MobileNavigation)
- [components/forms/README.md](components/forms/README.md) — multi-step
  form chrome (FormStepper, FormActions)

This document covers cross-cutting rules that apply to _how_ components are
built; the per-folder READMEs cover _how to use_ each one.

## Folder architecture

```
app/
  [locale]/            Locale-scoped routes (ar, en). All page UI lives here.
  robots.ts            Locale-independent metadata routes — live at the true
  sitemap.ts           app root, outside [locale].
components/
  ui/                  Primitive components (Button, Card, Heading...).
  ui/form/             Form control primitives (Input, Select, FileUpload...).
  layout/              Site-wide chrome (Navbar, Footer, LanguageSwitcher...).
  sections/            Page-section components (Hero, WhoWeServe...).
  forms/               Multi-step form chrome (FormStepper, FormActions...).
i18n/                  next-intl routing, request config, navigation helpers.
lib/                   Framework-agnostic helpers (metadata, structured data,
                       cn(), site constants). No React components here.
messages/              Translation catalogs (ar.json, en.json).
```

## File naming

- Components: `PascalCase.tsx` (`Button.tsx`, `RfqForm.tsx`). One component
  per file; the file name matches the exported component name.
- Non-component modules (`lib/`, `i18n/`): `kebab-case.ts` (`site.ts`,
  `structured-data.ts`).
- Route segments and special files follow Next.js App Router conventions
  exactly (`page.tsx`, `layout.tsx`, `route.ts`, `[locale]`).

## Component conventions

- Server Components by default. Add `"use client"` only when the component
  needs interactivity, state, or browser-only APIs.
- Use logical CSS properties (`ms-*`, `me-*`, `ps-*`, `pe-*`, `start-*`,
  `end-*`) instead of physical ones (`ml-*`, `mr-*`, `pl-*`, `pr-*`, `left-*`,
  `right-*`) so layout mirrors correctly between Arabic/RTL and English/LTR
  without per-locale overrides.
- Directional icons (arrows, chevrons) must flip with `rtl:` variants;
  non-directional icons (logo mark, phone, mail) never flip.

## Typography

- Arabic body copy: `font-sans-arabic` (IBM Plex Sans Arabic).
- English body copy: `font-sans` (IBM Plex Sans).
- English headings: `font-display` (IBM Plex Sans Condensed).
- Arabic headings: `font-sans-arabic` at bold/semibold weight — intentionally
  uncondensed; there is no Arabic condensed face in this system.
- Monospace (reference numbers, codes): `font-mono` (IBM Plex Mono).

## Design tokens

- Colours, radius, and font tokens are defined once in `app/globals.css`
  under `@theme` (Tailwind v4 CSS-first config) — do not hardcode hex values
  or px radii in components.
- Radius system has exactly two steps: `radius-sm` (2px) and `radius-md`
  (4px). No larger radius, no pill shapes.
- Spacing uses Tailwind's default 8px-aligned scale — no custom spacing
  tokens.

## Accessibility

- `eslint-plugin-jsx-a11y` runs as part of the standard lint config —
  accessibility violations are lint errors, not warnings.
- Global `:focus-visible` outline is defined once in `app/globals.css`;
  don't suppress it per-component.
- Use Tailwind's built-in `sr-only` / `not-sr-only` utilities for
  screen-reader-only content (skip links, visually-hidden labels).

## SEO

- Every page must build its `Metadata` via `buildMetadata()` in
  `lib/metadata.ts` so canonical and hreflang alternates stay consistent.
- Never hardcode the site URL — import `siteUrl` from `lib/site.ts`.
- Do not add structured-data fields (address, phone, founding date, etc.)
  to `lib/structured-data.ts` unless the underlying fact has been confirmed
  with the client. Never fabricate statistics, clients, certifications, or
  case studies anywhere in content.
