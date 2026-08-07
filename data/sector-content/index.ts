import { getKnowledgeItemsForSector } from "@/data/knowledge";
import type { KnowledgeItem } from "@/data/knowledge/types";
import { commercialVehiclesContent } from "@/data/sector-content/commercial-vehicles";
import { constructionContent } from "@/data/sector-content/construction";
import { electricalEnergyContent } from "@/data/sector-content/electrical-energy";
import { fireProtectionContent } from "@/data/sector-content/fire-protection";
import { globalSourcingContent } from "@/data/sector-content/global-sourcing";
import { governmentProcurementContent } from "@/data/sector-content/government-procurement";
import { healthcareContent } from "@/data/sector-content/healthcare";
import { heavyEquipmentContent } from "@/data/sector-content/heavy-equipment";
import { industrialChemicalsContent } from "@/data/sector-content/industrial-chemicals";
import { industrialEquipmentContent } from "@/data/sector-content/industrial-equipment";
import type { SectorArticle, SectorContent } from "@/data/sector-content/types";
import {
  getSectorBySlug,
  getSortedSectors,
  type SectorSlug,
} from "@/data/sectors";

/**
 * Registry of rich per-sector content. A sector not listed here simply gets
 * `{}` — the unified template's built-in defaults handle it honestly (see
 * each `components/sectors/Sector*` component's fallback). Adding a new
 * sector's content is: create `data/sector-content/<slug>.ts`, import and
 * register it below. No component is ever touched.
 */
const SECTOR_CONTENT: Partial<Record<SectorSlug, SectorContent>> = {
  "government-procurement": governmentProcurementContent,
  "industrial-equipment": industrialEquipmentContent,
  "fire-protection": fireProtectionContent,
  "electrical-energy": electricalEnergyContent,
  "heavy-equipment": heavyEquipmentContent,
  "commercial-vehicles": commercialVehiclesContent,
  healthcare: healthcareContent,
  "industrial-chemicals": industrialChemicalsContent,
  construction: constructionContent,
  "global-sourcing": globalSourcingContent,
};

/** Maps a Knowledge Platform item back to the legacy `SectorArticle` shape every existing consumer of `SectorContent.articles` already expects — the id-based relations `KnowledgeItem` carries are resolved back to slugs here, at the boundary, so nothing downstream needs to change. */
function toSectorArticle(item: KnowledgeItem): SectorArticle {
  return {
    slug: item.slug,
    title_en: item.title_en,
    title_ar: item.title_ar,
    summary_en: item.summary_en,
    summary_ar: item.summary_ar,
    content_en: item.content_en,
    content_ar: item.content_ar,
    coverImage: item.coverImage,
    publishedAt: item.publishedAt,
    author: item.author,
    seoTitle_en: item.seo?.title_en,
    seoTitle_ar: item.seo?.title_ar,
    seoDescription_en: item.seo?.description_en,
    seoDescription_ar: item.seo?.description_ar,
    keywords: item.keywords,
  };
}

/**
 * A sector's rich content, with `articles` always derived live from the
 * Knowledge Platform registry (`data/knowledge/`) rather than authored here
 * — the Knowledge Platform is now the single source of truth for every
 * article, guide, and other content type; this keeps the pre-existing
 * `/sectors/[slug]/articles/[article]` route and `SectorArticles` component
 * working unchanged. A sector's own static `SECTOR_CONTENT` entry may still
 * set `articles` explicitly, which takes priority (none does today).
 */
export function getSectorContent(slug: string): SectorContent {
  const content = SECTOR_CONTENT[slug as SectorSlug] ?? {};
  if (content.articles) return content;

  const sector = getSectorBySlug(slug);
  const derivedArticles = sector
    ? getKnowledgeItemsForSector(sector.id)
        .filter((item) => item.type === "article")
        .map(toSectorArticle)
    : [];

  return { ...content, articles: derivedArticles };
}

export function getSectorArticle(sectorSlug: string, articleSlug: string) {
  return getSectorContent(sectorSlug).articles?.find(
    (article) => article.slug === articleSlug,
  );
}

/** Every (sectorSlug, articleSlug) pair with real content — drives the article route's `generateStaticParams`. */
export function getAllSectorArticleParams() {
  return getSortedSectors().flatMap((sector) =>
    (getSectorContent(sector.slug).articles ?? []).map((article) => ({
      slug: sector.slug,
      article: article.slug,
    })),
  );
}

export type {
  SectorAbout,
  SectorAdvantage,
  SectorApplication,
  SectorArticle,
  SectorCatalogue,
  SectorContent,
  SectorFaq,
  SectorProject,
  SectorSeo,
} from "@/data/sector-content/types";
