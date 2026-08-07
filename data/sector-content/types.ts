/**
 * The optional-everywhere rich-content schema for the unified sector
 * detail template (`app/[locale]/sectors/[slug]/page.tsx`). Every field is
 * optional — a sector with no `SectorContent` registered still renders a
 * complete, honest page via the template's built-in defaults (see each
 * `components/sectors/Sector*` component's own doc comment for its
 * specific fallback). Adding real content for a sector later is:
 * `data/sector-content/<slug>.ts` + one line in `data/sector-content/index.ts`
 * — no component is ever touched.
 *
 * Products are not part of this schema — every product lives in the
 * standalone Product Engine (`data/products/`) instead, and a sector's
 * Products grid is sourced via `getProductsBySector()` from there. See
 * `data/products/types.ts` for that schema.
 */

export interface SectorAbout {
  intro_en: string;
  intro_ar: string;
  /** Product families mentioned in the intro, shown as compact tags. */
  categories_en?: string[];
  categories_ar?: string[];
  /** Standards/compliance line — only ever a general, true statement (e.g. "sourced to meet the international standards your project specifies"), never a fabricated certification claim. */
  complianceNote_en?: string;
  complianceNote_ar?: string;
}

export interface SectorApplication {
  title_en: string;
  title_ar: string;
  /** Lucide icon name, resolved via `SECTOR_CONTENT_ICONS` in `lib/sector-content-icons.ts`. */
  icon: string;
  description_en?: string;
  description_ar?: string;
  /** Path under /public, or omit — no component reads this yet (see `SectorApplications`), added for forward compatibility. */
  image?: string | null;
}

export interface SectorAdvantage {
  title_en: string;
  title_ar: string;
  icon: string;
}

export interface SectorCatalogue {
  id: string;
  title_en: string;
  title_ar: string;
  /** Brand this catalogue covers, if any — omit for a general/company-wide document. */
  brand?: string;
  language: "en" | "ar" | "en/ar";
  /** Path under /public, or null while the real file isn't available yet (renders an honest "Coming Soon" state, not a dead link). */
  fileUrl: string | null;
  /** Path under /public for a cover thumbnail, or omit to use the icon-only treatment `SectorCatalogues` already renders. */
  thumbnail?: string | null;
  description_en?: string;
  description_ar?: string;
}

export interface SectorArticle {
  slug: string;
  title_en: string;
  title_ar: string;
  summary_en: string;
  summary_ar: string;
  /** Full body text, paragraphs separated by "\n\n". Falls back to the summary when omitted. */
  content_en?: string;
  content_ar?: string;
  /** Path under /public, or null to fall back to the sector's own hero image. */
  coverImage: string | null;
  /** ISO date string. */
  publishedAt: string;
  author?: string;
  /** Falls back to `title_en`/`title_ar` when omitted. */
  seoTitle_en?: string;
  seoTitle_ar?: string;
  /** Falls back to `summary_en`/`summary_ar` when omitted. */
  seoDescription_en?: string;
  seoDescription_ar?: string;
  keywords?: string[];
  relatedProductSlugs?: string[];
  relatedBrandSlugs?: string[];
  relatedSectorSlugs?: string[];
}

export interface SectorFaq {
  question_en: string;
  answer_en: string;
  question_ar: string;
  answer_ar: string;
}

export interface SectorProject {
  title_en: string;
  title_ar: string;
  description_en: string;
  description_ar: string;
  /** Path under /public, or null to fall back to the sector's own hero image. */
  image: string | null;
  recommendedProductSlugs?: string[];
  /** `data/brands.ts` brand slugs recommended for this project type. */
  recommendedBrandSlugs?: string[];
}

/** Per-sector Hero/SEO override — omit any field to fall back to the matching `Sector` field in `data/sectors.ts`. */
export interface SectorSeo {
  title_en?: string;
  title_ar?: string;
  description_en?: string;
  description_ar?: string;
  keywords?: string[];
}

export interface SectorContent {
  about?: SectorAbout;
  applications?: SectorApplication[];
  advantages?: SectorAdvantage[];
  catalogues?: SectorCatalogue[];
  articles?: SectorArticle[];
  faqs?: SectorFaq[];
  /** "Projects We Serve" — only rendered when present and non-empty; no generic fallback list. */
  projects?: SectorProject[];
  /** Explicit curated related-sector slugs — omit to fall back to "other sectors, sorted by order". */
  relatedSectorSlugs?: string[];
  seo?: SectorSeo;
}
