/**
 * The Knowledge Platform's core schema — every entry (article, guide,
 * comparison, standard...) is one `KnowledgeItem`, rendered through the one
 * unified `/knowledge/[slug]` template. Same "optional-everywhere" contract
 * as `SectorContent`/`Solution`: a field is either real or omitted, never
 * fabricated to fill a gap.
 *
 * ID vs slug: `id` is assigned once and never changes — every relationship
 * *into* a `KnowledgeItem` (and every relationship a `KnowledgeItem` holds
 * to a Sector/Product/Brand/Solution) must reference the target's `id`, not
 * its `slug`. `slug` only drives the `/knowledge/<slug>` URL and may be
 * renamed later without breaking any relationship or losing any inbound
 * reference — the same immutable-id/mutable-slug split `Sector`, `Brand`,
 * `Product`, and `Solution` already each have (see their own `id` field).
 */

export type KnowledgeType =
  | "article"
  | "technical-guide"
  | "buying-guide"
  | "maintenance-guide"
  | "brand-guide"
  | "product-comparison"
  | "industry-standard"
  /** Scaffolded type, zero real items today — no real video asset exists yet. */
  | "video"
  /** Scaffolded type, zero real items today — no real case study exists yet. */
  | "case-study";

export interface KnowledgeFaq {
  question_en: string;
  answer_en: string;
  question_ar: string;
  answer_ar: string;
}

export interface KnowledgeAttachment {
  id: string;
  title_en: string;
  title_ar: string;
  fileType: "pdf" | "doc" | "zip";
  language: "en" | "ar" | "en/ar";
  /** Path under /public, or null while the real file isn't available yet (renders an honest "Coming Soon" state, not a dead link) — same convention as `ProductCatalogue`/`SectorCatalogue`. */
  fileUrl: string | null;
}

/** References a real catalogue a Sector or Product already owns, instead of duplicating the file entry — resolved via the owning entity's immutable `id`. */
export interface KnowledgeCatalogueRef {
  source: "sector" | "product";
  /** `Sector.id` — set when `source === "sector"`. */
  sectorId?: string;
  /** `Product.id` — set when `source === "product"`. */
  productId?: string;
  /** Id of a `SectorCatalogue`/`ProductCatalogue` on that entity. */
  catalogueId: string;
}

/** `type: "product-comparison"` only. Rows are built at render time from each product's own real `specifications` — never authored/invented figures. */
export interface KnowledgeComparison {
  /** `Product.id` values being compared, in display order — 2 or more. */
  productIds: string[];
}

/** Per-item SEO override — omit any field to fall back to `title_*`/`summary_*`. */
export interface KnowledgeSeo {
  title_en?: string;
  title_ar?: string;
  description_en?: string;
  description_ar?: string;
  keywords?: string[];
}

/** A highlighted "Important Note" box within a section — omit `title_*` to use the template's default "Important Note" label. */
export interface KnowledgeCallout {
  title_en?: string;
  title_ar?: string;
  body_en: string;
  body_ar: string;
}

/** One row of an in-body comparison table — one value per `headers_en`/`headers_ar` column, in the same order. */
export interface KnowledgeTableRow {
  label_en: string;
  label_ar: string;
  values_en: string[];
  values_ar: string[];
}

/** A plain comparison table inside a section — for comparing options/standards/systems described in the article's own text, never product specifications (see `KnowledgeComparison` for that). */
export interface KnowledgeTable {
  /** Small label shown above the table, e.g. "Pump Configuration Comparison" — omit for none. */
  caption_en?: string;
  caption_ar?: string;
  headers_en: string[];
  headers_ar: string[];
  rows: KnowledgeTableRow[];
}

/** An image placed inside a section's body, distinct from the hero (`coverImage`) and the end-of-article `images` gallery. */
export interface KnowledgeInlineImage {
  /** Path under /public. */
  src: string;
  caption_en?: string;
  caption_ar?: string;
}

/** One H3-level block nested within a `KnowledgeSection`, for sections with a genuine sub-topic split. */
export interface KnowledgeSubsection {
  heading_en: string;
  heading_ar: string;
  body_en: string;
  body_ar: string;
  list_en?: string[];
  list_ar?: string[];
  /** "bullet" (default) or "number" — use "number" only for a genuinely sequential list. */
  listStyle?: "bullet" | "number";
}

/** One H2-level block of an article body. */
export interface KnowledgeSection {
  heading_en: string;
  heading_ar: string;
  /** Paragraphs separated by "\n\n", same convention as `content_en/ar`. */
  body_en: string;
  body_ar: string;
  /** Bullet/numbered list rendered after `body_*` — omit for prose-only sections. */
  list_en?: string[];
  list_ar?: string[];
  /** "bullet" (default) or "number" — use "number" only for a genuinely sequential list. */
  listStyle?: "bullet" | "number";
  /** H3 sub-blocks, for a section with a real sub-topic split — omit for a flat section. */
  subsections?: KnowledgeSubsection[];
  callout?: KnowledgeCallout;
  table?: KnowledgeTable;
  image?: KnowledgeInlineImage;
}

export interface KnowledgeItem {
  /** Globally unique, immutable — see this file's doc comment. */
  id: string;
  /** Drives `/knowledge/<slug>`. */
  slug: string;
  type: KnowledgeType;

  title_en: string;
  title_ar: string;
  summary_en: string;
  summary_ar: string;
  /** Full body text, paragraphs separated by "\n\n". Falls back to the summary when omitted — same convention as `SectorArticle`. Superseded by `sections` when present; kept as the fallback flat-paragraph rendering for any item that hasn't been broken into sections yet. */
  content_en?: string;
  content_ar?: string;
  /** Structured H2 body — headings, paragraphs, and per-section callout/table/image. Renders instead of the flat `content_en/ar` paragraph split when present. */
  sections?: KnowledgeSection[];

  /** Path under /public, or null to fall back to a shared default image, same convention as `Sector.image`. */
  coverImage: string | null;
  /** Additional gallery images, paths under /public — omit/empty for no gallery block. */
  images?: string[];

  /** ISO date string. */
  publishedAt: string;
  /** ISO date string — omit when the item has never been revised. */
  updatedAt?: string;
  /** Free-text revision label (e.g. "Rev. 2026-05") for guides/standards that track editions — omit when not applicable. */
  version?: string;
  author?: string;
  editor?: string;

  /** `Sector.id` values this item genuinely relates to. */
  relatedSectorIds?: string[];
  /** `Product.id` values. */
  relatedProductIds?: string[];
  /** `Brand.id` values. */
  relatedBrandIds?: string[];
  /** `Solution.id` values. */
  relatedSolutionIds?: string[];
  /** Other `KnowledgeItem.id` values — explicit curated "related reading". Omit to fall back to other items of the same `type`. */
  relatedKnowledgeIds?: string[];

  /** Item-owned downloadable PDFs. */
  attachments?: KnowledgeAttachment[];
  /** References into an existing Sector's/Product's own catalogues, resolved at render time. */
  catalogueRefs?: KnowledgeCatalogueRef[];
  faqs?: KnowledgeFaq[];
  /** `type: "product-comparison"` only — omit for every other type. */
  comparison?: KnowledgeComparison;

  /** Overrides the template's default CTA copy — omit to use it. */
  ctaLabel_en?: string;
  ctaLabel_ar?: string;

  seo?: KnowledgeSeo;
  keywords?: string[];
}
