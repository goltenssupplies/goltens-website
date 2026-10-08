import { constructionPage } from "@/data/sector-content/construction-guide";
import { governmentProcurementPage } from "@/data/sector-content/government-procurement-guide";
import { healthcarePage } from "@/data/sector-content/healthcare-guide";
import { industrialChemicalsPage } from "@/data/sector-content/industrial-chemicals-guide";

/** One "Requirements Covered by Other Sectors" entry — local wording only, never the shared `data/sectors.ts` card copy. */
export interface CompactGuideRoute {
  sectorSlug: string;
  title_en: string;
  title_ar: string;
  items_en: string;
  items_ar: string;
}

/**
 * Page extras for a sector whose equipment guide renders in the compact
 * layout of `app/[locale]/sectors/[slug]/page.tsx`: the hero's CTA labels
 * (the secondary CTA is a real route), the cross-sector routing section,
 * the matrix rows that route to it, and the compact layout's own labels.
 * Such a page renders no shared Related Sectors block — its cards carry the
 * other sectors' shared copy; the routing section replaces it.
 */
export interface CompactGuidePage {
  heroPrimaryCta_en: string;
  heroPrimaryCta_ar: string;
  heroSecondaryCta: { label_en: string; label_ar: string; href: string };
  labels: {
    categoryNav_en: string;
    categoryNav_ar: string;
    contextItems_en: string;
    contextItems_ar: string;
    contextRoutes_en: string;
    contextRoutes_ar: string;
    details_en: string;
    details_ar: string;
    replacementGroups_en: string;
    replacementGroups_ar: string;
  };
  /**
   * Guide families that are sourcing guides only — not backed by a product
   * category or product record (their guides carry no `linkedProductId`).
   * Every other guide family must be a real product category of the sector.
   */
  sourcingCategoryIds?: string[];
  /**
   * How guides render: "cards" (default) — one card per guide; "rows" — each
   * family as one dense panel of guide rows, details collapsed.
   */
  guidePresentation?: "cards" | "rows";
  /** Matrix rows that route to `routing` entries (project id → sector slugs). */
  projectRoutes: Record<string, string[]>;
  routing: {
    title_en: string;
    title_ar: string;
    intro_en: string;
    intro_ar: string;
    routes: CompactGuideRoute[];
  };
}

/** Sectors rendered in the compact guide layout, by sector slug. */
export const COMPACT_GUIDE_PAGES: Record<string, CompactGuidePage> = {
  "government-procurement": governmentProcurementPage,
  construction: constructionPage,
  "industrial-chemicals": industrialChemicalsPage,
  healthcare: healthcarePage,
};

export function getCompactGuidePage(
  slug: string,
): CompactGuidePage | undefined {
  return COMPACT_GUIDE_PAGES[slug];
}
