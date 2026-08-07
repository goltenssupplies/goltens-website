import type { SectorFaq, SectorSeo } from "@/data/sector-content";

/**
 * The Project Solutions Platform's core schema. A Solution is a
 * cross-cutting entry point ("Hospitals," "Airports," "Oil & Gas"...) that
 * lets a customer start from their project instead of a sector or a
 * product — it curates whichever real sectors/products/brands/catalogues/
 * articles genuinely apply, rather than owning duplicate content of its
 * own. Reuses `SectorFaq`/`SectorSeo` directly (identical shapes) instead
 * of redefining them. Adding solution #12 is one new
 * `data/solutions/<slug>.ts` file + one line in `data/solutions/index.ts`
 * — no component is ever touched.
 */

export interface SolutionCatalogueRef {
  /** `data/sectors.ts` slug that owns this catalogue. */
  sectorSlug: string;
  /** Id of a `SectorCatalogue` in that sector's `catalogues`. */
  catalogueId: string;
}

export interface SolutionArticleRef {
  /** `data/sectors.ts` slug that owns this article. */
  sectorSlug: string;
  /** Slug of a `SectorArticle` in that sector's Knowledge Center. */
  articleSlug: string;
}

export interface Solution {
  id: string;
  slug: string;
  title_en: string;
  title_ar: string;
  description_en: string;
  description_ar: string;
  /** Path under /public, or null to fall back to a shared image, same convention as `Sector.image`. */
  heroImage: string | null;
  /** Lucide icon name, resolved via `SECTOR_ICONS` in `lib/sectors.ts` — reused for the card badge when this solution is rendered via `SectorCard`. */
  icon: string;
  /** Who buys this — audience/customer segments, shown as tags. Distinct from `relatedSectorSlugs` (what GOLTENS sources for it). */
  targetIndustries_en?: string[];
  targetIndustries_ar?: string[];
  /** What GOLTENS sources for this project type, shown as tags under "Procurement Scope". */
  procurementScope_en?: string[];
  procurementScope_ar?: string[];
  /** `data/sectors.ts` slugs this solution genuinely draws from — usually more than one. */
  relatedSectorSlugs: string[];
  /** Global product slugs from the Product Engine (`data/products/`). */
  relatedProductSlugs?: string[];
  /** `data/brands.ts` slugs. */
  relatedBrandSlugs?: string[];
  /** Real Knowledge Center articles — can span more than one sector. */
  relatedArticles?: SolutionArticleRef[];
  /** Real sector-level catalogues — can span more than one sector. */
  relatedCatalogues?: SolutionCatalogueRef[];
  /** Explicit curated related-solution slugs — omit to fall back to "other solutions". */
  relatedSolutionSlugs?: string[];
  /** Own authored FAQs — omit to fall back to the sector template's existing generic `faqDefaultQ1-3` strings so FAQPage schema is always populated. */
  faqs?: SectorFaq[];
  seo?: SectorSeo;
}
