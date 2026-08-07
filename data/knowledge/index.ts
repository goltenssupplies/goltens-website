import { fireProtectionArticles } from "@/data/knowledge/articles/fire-protection";
import type { KnowledgeItem, KnowledgeType } from "@/data/knowledge/types";

/**
 * The Knowledge Platform's registry — every content file gets imported and
 * concatenated here, same convention `data/products/index.ts` uses for the
 * Product Engine. Adding item #501 (any type) is one new object in an
 * existing `data/knowledge/<group>/<file>.ts`, or one new file plus one line
 * below; no lookup function or component is ever touched.
 */
const KNOWLEDGE_ITEMS: KnowledgeItem[] = [...fireProtectionArticles];

export function getAllKnowledgeItems(): KnowledgeItem[] {
  return KNOWLEDGE_ITEMS;
}

export function getKnowledgeItemBySlug(
  slug: string,
): KnowledgeItem | undefined {
  return KNOWLEDGE_ITEMS.find((item) => item.slug === slug);
}

/** Looks up by the immutable `id` — every relationship *into* a `KnowledgeItem` must resolve through this, never `getKnowledgeItemBySlug`. */
export function getKnowledgeItemById(id: string): KnowledgeItem | undefined {
  return KNOWLEDGE_ITEMS.find((item) => item.id === id);
}

export function getKnowledgeItemsByType(type: KnowledgeType): KnowledgeItem[] {
  return KNOWLEDGE_ITEMS.filter((item) => item.type === type);
}

/** Items genuinely related to a Sector, resolved via `Sector.id` (not slug). */
export function getKnowledgeItemsForSector(sectorId: string): KnowledgeItem[] {
  return KNOWLEDGE_ITEMS.filter((item) =>
    item.relatedSectorIds?.includes(sectorId),
  );
}

/** Items genuinely related to a Product, resolved via `Product.id` (not slug). */
export function getKnowledgeItemsForProduct(
  productId: string,
): KnowledgeItem[] {
  return KNOWLEDGE_ITEMS.filter((item) =>
    item.relatedProductIds?.includes(productId),
  );
}

/** Items genuinely related to a Brand, resolved via `Brand.id` (not slug). */
export function getKnowledgeItemsForBrand(brandId: string): KnowledgeItem[] {
  return KNOWLEDGE_ITEMS.filter((item) =>
    item.relatedBrandIds?.includes(brandId),
  );
}

/** Items genuinely related to a Solution, resolved via `Solution.id` (not slug). */
export function getKnowledgeItemsForSolution(
  solutionId: string,
): KnowledgeItem[] {
  return KNOWLEDGE_ITEMS.filter((item) =>
    item.relatedSolutionIds?.includes(solutionId),
  );
}

/** Every knowledge slug — drives `/knowledge/[slug]`'s `generateStaticParams`. */
export function getAllKnowledgeParams() {
  return KNOWLEDGE_ITEMS.map((item) => ({ slug: item.slug }));
}

export interface KnowledgeSearchDocument {
  id: string;
  slug: string;
  type: KnowledgeType;
  url_en: string;
  url_ar: string;
  title_en: string;
  title_ar: string;
  content_en: string;
  content_ar: string;
  relatedSectorIds: string[];
  relatedProductIds: string[];
  relatedBrandIds: string[];
  relatedSolutionIds: string[];
}

/**
 * Flat, plain-text, locale-split export of the whole registry — the shape a
 * future search/RAG ingestion job would consume directly. Not itself a
 * search feature (no index, no query API exists yet); this is the readiness
 * layer for one: every field is already plain text (not markup-entangled),
 * every relation is an immutable id, and every item has one canonical URL.
 */
export function getKnowledgeSearchIndex(): KnowledgeSearchDocument[] {
  return KNOWLEDGE_ITEMS.map((item) => ({
    id: item.id,
    slug: item.slug,
    type: item.type,
    url_en: `/en/knowledge/${item.slug}`,
    url_ar: `/ar/knowledge/${item.slug}`,
    title_en: item.title_en,
    title_ar: item.title_ar,
    content_en: item.content_en ?? item.summary_en,
    content_ar: item.content_ar ?? item.summary_ar,
    relatedSectorIds: item.relatedSectorIds ?? [],
    relatedProductIds: item.relatedProductIds ?? [],
    relatedBrandIds: item.relatedBrandIds ?? [],
    relatedSolutionIds: item.relatedSolutionIds ?? [],
  }));
}

export type {
  KnowledgeAttachment,
  KnowledgeCatalogueRef,
  KnowledgeComparison,
  KnowledgeFaq,
  KnowledgeItem,
  KnowledgeSeo,
  KnowledgeType,
} from "@/data/knowledge/types";
