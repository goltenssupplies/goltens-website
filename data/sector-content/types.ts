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

export interface SectorProcessStep {
  title_en: string;
  title_ar: string;
  description_en: string;
  description_ar: string;
}

/** "How We Work" — a sector's own 4-step process explainer, same design as the homepage's `Capabilities` ("How We Work") section. Always exactly 4 steps: rendered against the same fixed icon set (receive/search/match/supply), same order. */
export interface SectorHowWeWork {
  title_en: string;
  title_ar: string;
  description_en: string;
  description_ar: string;
  steps: SectorProcessStep[];
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

/**
 * Editorial review state for an equipment guide entry. Never rendered — it
 * records whether a human has technically reviewed the general-knowledge
 * claims (and, separately, the Arabic terminology) before publication.
 * `scripts/verify-equipment-guides.mjs` lists every entry not yet
 * "verified".
 */
export type EquipmentGuideReviewState =
  "draft" | "needs-verification" | "verified";

export interface EquipmentGuideReview {
  technical: EquipmentGuideReviewState;
  arabic: EquipmentGuideReviewState;
  /** Internal note — which claims still need checking. Never rendered. */
  notes?: string;
}

/** Controlled industry/project vocabulary, so EN/AR terms stay consistent across every guide that cites them. */
export interface EquipmentIndustry {
  id: string;
  label_en: string;
  label_ar: string;
}

/** One qualitative selection factor — a short label plus one sentence. Never a numeric specification. */
export interface EquipmentSelectionFactor {
  factor_en: string;
  factor_ar: string;
  detail_en: string;
  detail_ar: string;
}

/**
 * One general equipment-type guide (e.g. "Hydraulic Excavators") —
 * editorial, manufacturer-neutral application content. Deliberately NOT a
 * product: it never carries brands, models, or specifications, and it is
 * never rendered as a GOLTENS product listing.
 */
export interface EquipmentTypeGuide {
  /** Stable anchor id on the page (`#hydraulic-excavators`) — kebab-case, never renamed once published. */
  id: string;
  /**
   * Internal join to a `Product.id` only. The page never reads any field of
   * that product: it only asks `hasPublicIdentity()` and, if (and only if)
   * the product is public, links to its public product page.
   */
  linkedProductId?: string;
  name_en: string;
  name_ar: string;
  /** One line shown under the heading. */
  summary_en: string;
  summary_ar: string;
  whatItIs_en: string;
  whatItIs_ar: string;
  usedFor_en: string;
  usedFor_ar: string;
  applications_en: string[];
  applications_ar: string[];
  /** → `EquipmentIndustry.id` */
  industryIds: string[];
  selectionFactors: EquipmentSelectionFactor[];
  /** What the customer should include in a quotation request for this equipment type. */
  requestChecklist_en: string[];
  requestChecklist_ar: string[];
  /** → other `EquipmentTypeGuide.id`s */
  relatedEquipmentIds?: string[];
  /** Path under /public — only assets with recorded licensing and no visible OEM branding. `null` until one is cleared. */
  image: string | null;
  imageAlt_en?: string;
  imageAlt_ar?: string;
  review: EquipmentGuideReview;
}

export interface EquipmentGuideCategory {
  /** Must equal a `ProductCategory.id` belonging to this sector — also the section's anchor id. */
  categoryId: string;
  title_en: string;
  title_ar: string;
  intro_en: string;
  intro_ar: string;
  /** Lucide icon name, resolved via `SECTOR_CONTENT_ICONS`. */
  icon: string;
  equipment: EquipmentTypeGuide[];
}

/** One row of the "Equipment by project type" matrix. */
export interface EquipmentProjectGuide {
  id: string;
  title_en: string;
  title_ar: string;
  description_en: string;
  description_ar: string;
  /** → `EquipmentTypeGuide.id`s */
  equipmentIds: string[];
  review: EquipmentGuideReview;
}

export interface EquipmentGuideProcessStep {
  title_en: string;
  title_ar: string;
  description_en: string;
  description_ar: string;
}

/**
 * A sector's equipment procurement & application guide. When present, the
 * sector template renders the guide layout (project matrix, category
 * navigation, per-equipment guides, quotation checklist) in place of the
 * generic About/Industries/Advantages sections. Optional — every sector
 * without it renders exactly as before.
 */
export interface SectorEquipmentGuide {
  intro: {
    eyebrow_en: string;
    eyebrow_ar: string;
    lead_en: string;
    lead_ar: string;
    /** Clarifies that the guides are general guidance, not a list of stocked models. */
    note_en: string;
    note_ar: string;
  };
  projectsTitle_en: string;
  projectsTitle_ar: string;
  projectsIntro_en: string;
  projectsIntro_ar: string;
  industries: EquipmentIndustry[];
  projects: EquipmentProjectGuide[];
  categories: EquipmentGuideCategory[];
  request: {
    title_en: string;
    title_ar: string;
    intro_en: string;
    intro_ar: string;
    checklist_en: string[];
    checklist_ar: string[];
    processTitle_en: string;
    processTitle_ar: string;
    /** Exactly 4 steps. */
    steps: EquipmentGuideProcessStep[];
  };
  quote: {
    title_en: string;
    title_ar: string;
    subtitle_en: string;
    subtitle_ar: string;
  };
}

export interface SectorContent {
  about?: SectorAbout;
  applications?: SectorApplication[];
  advantages?: SectorAdvantage[];
  catalogues?: SectorCatalogue[];
  articles?: SectorArticle[];
  /** Only rendered when present — no generic fallback, unlike `advantages`/`faqs`. */
  howWeWork?: SectorHowWeWork;
  faqs?: SectorFaq[];
  /** "Projects We Serve" — only rendered when present and non-empty; no generic fallback list. */
  projects?: SectorProject[];
  /** Explicit curated related-sector slugs — omit to fall back to "other sectors, sorted by order". */
  relatedSectorSlugs?: string[];
  seo?: SectorSeo;
  /** Equipment procurement & application guide — see `SectorEquipmentGuide`. */
  equipmentGuide?: SectorEquipmentGuide;
}
