# Procurement Sector Content Architecture

Every procurement sector on this site — its Hero, Applications, Products, Brands, Knowledge Center, Technical Catalogues, FAQs, Projects We Serve, and Related Sectors — is generated from typed data files. **No sector's content is hardcoded in a component.** Adding sector #11 (or #200) never requires touching a component or page.

## Adding a new sector

1. Add one row to `SECTORS` in [`data/sectors.ts`](data/sectors.ts) — `id`, `slug`, `title_en/ar`, `subtitle_en/ar` (optional), `description_en/ar`, `image`, `icon`, `featured`, `order`.
2. *(Optional)* Create `data/sector-content/<slug>.ts` exporting a `SectorContent` object for the richer sections (Applications, Products, Advantages, Catalogues, Articles, FAQs, Projects We Serve, Related Sectors, SEO overrides), then register it in `data/sector-content/index.ts`'s `SECTOR_CONTENT` map.

That's it. `app/[locale]/sectors/[slug]/page.tsx` — the one template every sector renders through — picks both up automatically via `getSectorBySlug()` and `getSectorContent()`.

A sector with no `sector-content` file still renders a complete, honest page: generic (already-approved) advantages and FAQ copy, "Coming Soon" products/catalogues, an empty-state Knowledge Center, and no Applications/Projects sections (they only render when a sector has curated its own — never a generic or irrelevant default list). **Never fabricate content to fill a gap** — an honest empty state is always correct; invented specifics are not.

## The data model

### `Sector` — `data/sectors.ts`
The core taxonomy row every sector must have: Hero `title`, optional `subtitle`, `description`, `image`, nav `icon`, `featured`/`order` for listing pages. Bilingual fields are separate `_en`/`_ar` properties, not a nested object, matching every other data file in the project.

### `SectorContent` — `data/sector-content/types.ts`
Everything else, all optional (a sector can populate any subset):

| Field | Type | Notes |
|---|---|---|
| `applications` | `SectorApplication[]` | Industries this sector serves — icon, title, optional description/image. |
| `products` | `SectorProduct[]` | Unlimited. `features`, `specifications`, `catalogueId` (→ a `SectorCatalogue.id`), and `relatedBrandSlugs` (→ `data/brands.ts`) are data-layer only today — no product detail page exists yet to render them, so they're ready for one without a second migration. |
| `advantages` | `SectorAdvantage[]` | Falls back to the sitewide "Why Choose GOLTENS" list when omitted. |
| `catalogues` | `SectorCatalogue[]` | PDF catalogues; `fileUrl: null` renders an honest "Coming Soon" badge instead of a dead link. |
| `articles` | `SectorArticle[]` | Knowledge Center. `author`, `seoTitle/Description`, `keywords`, and `relatedProduct/Brand/SectorSlugs` are available for future article-detail rendering. |
| `faqs` | `SectorFaq[]` | Falls back to a generic 3-question default so the page's FAQPage JSON-LD is always populated. |
| `projects` | `SectorProject[]` | **Projects We Serve** — the industries/project types this sector's supply chain is set up for, each with recommended products/brands. Only rendered when non-empty. |
| `relatedSectorSlugs` | `string[]` | Falls back to "other sectors, sorted by order". |
| `seo` | `SectorSeo` | Per-sector Hero/`<title>`/meta-description/keywords override — falls back to the `Sector` row's own `title`/`description` when omitted. |

### `Brand` — `data/brands.ts`
`id`, `slug`, `name`, `sectorSlug` (links into the same sector taxonomy — no second parallel category system), `featured`. Extended metadata (`logo`, `website`, `country`, `category`, `description`) is data-layer only today: `logo` stays unset everywhere (no licensed logo assets exist, so `BrandHero`/`BrandCard` intentionally render a typographic mark, not an image) and `description` stays unset everywhere (brand pages use an already-approved generic template sentence instead of fabricated per-brand marketing copy). `country`/`category`/`website` are populated with real, publicly verifiable facts.

**Brands are always presented as products GOLTENS can source — never as an authorized dealership, agency, or distributorship.** This is enforced in copy (`SectorBrands`' disclaimer, `brands.independenceDisclaimer` in the i18n messages) — don't remove or weaken it when adding brand content.

## Reusable component contract

Every `components/sectors/Sector*` component takes plain, already-localized props (strings, not translation keys) built by the page template — components never import `data/*` directly. This keeps them swappable for a future CMS: swap the data source, keep every component unchanged.

## The "no fabrication" rule

This codebase deliberately renders an honest empty/default state rather than invented content wherever real data doesn't exist yet (empty Knowledge Center, "Coming Soon" catalogues/products, generic non-brand-specific "About" copy, no fake logos). When adding a new sector or brand's content, follow the same rule: only write down what's actually true, and leave a field unset rather than inventing a plausible-sounding value.
