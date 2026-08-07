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
