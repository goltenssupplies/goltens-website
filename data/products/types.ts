/**
 * The Product Engine's core schema — every product on the site, across
 * every sector and category, is one `Product` object. Adding product
 * #10,001 means opening its category's file under `data/products/<sectorId>/`
 * and appending one object here; no component is ever touched. See
 * `data/products/index.ts` for the registry and lookup functions, and
 * `data/product-categories.ts` for the category taxonomy `categoryId` links
 * into.
 */

export interface ProductSpecification {
  label_en: string;
  label_ar: string;
  value: string;
  /** Optional section heading (e.g. "Performance", "Physical") for grouping related specs — omit to render as a flat list, same as every product today. */
  group_en?: string;
  group_ar?: string;
}

export interface ProductFaq {
  question_en: string;
  answer_en: string;
  question_ar: string;
  answer_ar: string;
}

export interface ProductCatalogue {
  id: string;
  title_en: string;
  title_ar: string;
  kind: "datasheet" | "manual" | "certificate" | "drawing" | "catalogue";
  fileType: "pdf" | "doc" | "zip";
  language: "en" | "ar" | "en/ar";
  /** Path under /public, or null while the real file isn't available yet (renders an honest "Coming Soon" state, not a dead link). */
  fileUrl: string | null;
}

/** Per-product SEO override — omit any field to fall back to `name_*`/`shortDescription_*`. */
export interface ProductSeo {
  title_en?: string;
  title_ar?: string;
  description_en?: string;
  description_ar?: string;
  keywords?: string[];
}

export interface Product {
  id: string;
  /** Globally unique across the whole catalog, like brand/sector slugs. */
  slug: string;
  name_en: string;
  name_ar: string;
  shortDescription_en: string;
  shortDescription_ar: string;
  longDescription_en: string;
  longDescription_ar: string;
  /**
   * Manufacturer-neutral public identity — every public surface (product
   * cards, product detail, breadcrumbs, SEO, JSON-LD, search, AI search)
   * must read these instead of `name_en`/`name_ar`, once a record is
   * migrated. Optional here because the catalog is migrated incrementally
   * (34/222 as of this schema change) — a raw `Product` without these
   * fields is still a valid, unmigrated record. The required boundary
   * lives at `toPublicProduct()` (`lib/products/public-product.ts`), which
   * throws `MissingPublicIdentityError` instead of projecting a record
   * missing any of the four, and `hasPublicIdentity()` in the same module,
   * which public listing pages must filter with before calling
   * `toPublicProduct()` on an array that may contain unmigrated records.
   */
  publicName_en?: string;
  publicName_ar?: string;
  publicShortDescription_en?: string;
  publicShortDescription_ar?: string;
  publicLongDescription_en?: string;
  publicLongDescription_ar?: string;
  /**
   * Internal-only sourcing/manufacturer record — must never be read by
   * public-facing code (UI, SEO, JSON-LD, search, AI search). Distinct
   * from the dormant `relatedBrandSlugs` below: this is the actual
   * manufacturer/source-of-truth record, not a public-facing brand
   * association.
   */
  sourcing?: {
    manufacturer?: string;
    originalProductName_en?: string;
    sourceDocument?: string;
    sourcingReference?: string;
  };
  /** Matches `Sector.id` in `data/sectors.ts`. */
  sectorId: string;
  /** Matches `ProductCategory.id` in `data/product-categories.ts`. */
  categoryId: string;
  applications_en?: string[];
  applications_ar?: string[];
  features_en?: string[];
  features_ar?: string[];
  specifications?: ProductSpecification[];
  /** Other `Product` slugs in the same functional family — never a fabricated or generic pairing. */
  relatedProductSlugs?: string[];
  /** `data/brands.ts` brand slugs this product is sourced from/associated with. */
  relatedBrandSlugs?: string[];
  /** `SectorArticle` slugs from this product's own sector's Knowledge Center — omit to fall back to that sector's article list. */
  relatedArticleSlugs?: string[];
  catalogues?: ProductCatalogue[];
  /** Paths under /public; empty/omitted falls back to the sector's own hero image. */
  images?: string[];
  seo?: ProductSeo;
  /** Omit entirely for no FAQ section/schema on this product — never a generic filler default. */
  faq?: ProductFaq[];
  availability: "available" | "on-request" | "coming-soon";
  quoteEnabled: boolean;
}
