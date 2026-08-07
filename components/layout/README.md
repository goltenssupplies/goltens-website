# layout/

Structural, site-wide chrome. Unlike `ui/`, these components are allowed to
read the current locale/pathname (via `i18n/navigation.ts`) — but they still
hold no page-specific content. Navigation items, footer columns, and CTA
copy are always passed in as props from the page/layout that renders them,
never hardcoded here.

Import from the barrel: `import { Navbar, Footer } from "@/components/layout";`

---

## LanguageSwitcher

Links to the current page in the other locale, labeled with that locale's
own language name. This is the one component in the whole design system
that reads a translation directly (`common.switchLanguage` in
`messages/{locale}.json`) instead of taking text as a prop — its label is
fixed, structural i18n chrome, not page content, so there's nothing for a
caller to customize.

```tsx
<LanguageSwitcher />
```

No required props. `"use client"` internally (uses `usePathname`).

## MobileNavigation

Hamburger toggle + a panel that expands directly below the navbar —
downward, not sliding in from a screen edge, so it needs no `rtl:` handling
for direction of travel. Used internally by `Navbar`; only reach for it
directly if building a header that isn't `Navbar`.

```tsx
<MobileNavigation
  navItems={[{ label: t("nav.about"), href: "/about" }]}
  openLabel={t("nav.openMenu")}
  closeLabel={t("nav.closeMenu")}
  actions={<LanguageSwitcher />}
/>
```

| Prop                       | Type                                  | Notes                                                       |
| -------------------------- | ------------------------------------- | ----------------------------------------------------------- |
| `navItems`                 | `{ label: string; href: LinkHref }[]` | **Required**                                                |
| `openLabel` / `closeLabel` | `string`                              | **Required** — toggle button's `aria-label` in each state   |
| `actions`                  | `ReactNode`                           | Extra content below the links, e.g. language switcher + CTA |

## Navbar

Sticky site header: logo, primary nav, language switcher, and a CTA —
collapses into `MobileNavigation` below the `lg` breakpoint. Reads the
current path internally to mark the active nav item with `aria-current`.

```tsx
<Navbar
  logo={<Logo iconSize="lg" />}
  navItems={[
    { label: t("nav.home"), href: "/" },
    { label: t("nav.about"), href: "/about" },
    { label: t("nav.services"), href: "/services" },
  ]}
  primaryNavLabel={t("nav.primaryNav")}
  phoneLabel={t("contact.phoneLabel")}
  cta={
    <Button href="/rfq" size="sm">
      {t("nav.requestQuote")}
    </Button>
  }
  menuOpenLabel={t("nav.openMenu")}
  menuCloseLabel={t("nav.closeMenu")}
/>
```

| Prop                               | Type                                  | Notes                                                    |
| ---------------------------------- | ------------------------------------- | -------------------------------------------------------- |
| `logo`                             | `ReactNode`                           | **Required**                                             |
| `navItems`                         | `{ label: string; href: LinkHref }[]` | **Required**                                             |
| `primaryNavLabel`                  | `string`                              | **Required** — `aria-label` for the desktop nav landmark |
| `phoneLabel`                       | `string`                              | **Required** — `aria-label` for the phone quick-link     |
| `cta`                              | `ReactNode`                           | Usually a `Button`                                       |
| `menuOpenLabel` / `menuCloseLabel` | `string`                              | **Required** — forwarded to `MobileNavigation`           |

## Footer

Brand column, N link columns, an optional contact block, and a bottom legal
bar. Every string is a prop — including the copyright line (`bottomText`),
so no year or company name is ever hardcoded in the component itself.

```tsx
<Footer
  logo={<Logo />}
  description={t("footer.description")}
  columns={[
    { title: t("footer.company"), links: [{ label: t("nav.about"), href: "/about" }] },
    { title: t("footer.services"), links: [...] },
  ]}
  contact={
    <Stack gap="xs">
      <Text size="sm" tone="muted">{t("footer.email")}</Text>
      <Text size="sm" tone="muted">{t("footer.phone")}</Text>
    </Stack>
  }
  bottomText={t("footer.copyright", { year: 2026 })}
  legalLinks={[{ label: t("footer.privacy"), href: "/privacy" }]}
/>
```

| Prop          | Type                                                              | Notes                                               |
| ------------- | ----------------------------------------------------------------- | --------------------------------------------------- |
| `logo`        | `ReactNode`                                                       | **Required**                                        |
| `columns`     | `{ title: string; links: { label: string; href: LinkHref }[] }[]` | **Required**                                        |
| `bottomText`  | `string`                                                          | **Required** — full copyright line, caller-supplied |
| `description` | `string`                                                          | Optional brand-column blurb                         |
| `contact`     | `ReactNode`                                                       | Caller-composed from `Text`/`Stack`                 |
| `legalLinks`  | `{ label: string; href: LinkHref }[]`                             | Optional, e.g. privacy/terms                        |
