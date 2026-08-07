import type { SectorCatalogueItem } from "@/components/sectors/SectorCatalogues";
import { getAllProductCatalogues } from "@/data/products";
import { getSectorBySlug } from "@/data/sectors";
import type { Locale } from "@/i18n/routing";

export interface CatalogueLibraryItem extends SectorCatalogueItem {
  kind: string;
  sectorSlug: string;
}

export interface CatalogueLibraryFilterOption {
  value: string;
  label: string;
}

/**
 * Every `ProductCatalogue` across the whole Product Engine
 * (`getAllProductCatalogues()`), localized and shaped for
 * `CatalogueLibrary` — the one source both the Download Center and the
 * Datasheet/Certifications libraries filter down from, so a document only
 * ever needs to exist in `Product.catalogues` once.
 */
export function buildCatalogueLibraryItems(locale: Locale): CatalogueLibraryItem[] {
  const isArabic = locale === "ar";

  return getAllProductCatalogues().map((entry) => ({
    id: `${entry.productSlug}-${entry.id}`,
    title: isArabic ? entry.title_ar : entry.title_en,
    kind: entry.kind,
    fileType: entry.fileType,
    language: entry.language,
    fileUrl: entry.fileUrl,
    productName: isArabic ? entry.productName_ar : entry.productName_en,
    href: `/sectors/${entry.sectorId}/products/${entry.productSlug}`,
    sectorSlug: entry.sectorId,
  }));
}

/** Distinct `kind`s actually present in `items`, in first-appearance order — drives the Download Center's kind filter chips (hidden entirely when a caller omits this, e.g. the single-purpose Datasheet/Certifications pages). */
export function getCatalogueLibraryKinds(
  items: CatalogueLibraryItem[],
  kindLabels: Record<string, string>,
): CatalogueLibraryFilterOption[] {
  const seen = new Set<string>();
  const kinds: CatalogueLibraryFilterOption[] = [];
  for (const item of items) {
    if (!seen.has(item.kind)) {
      seen.add(item.kind);
      kinds.push({ value: item.kind, label: kindLabels[item.kind] ?? item.kind });
    }
  }
  return kinds;
}

/** Distinct sectors actually represented in `items`, in first-appearance order — drives the sector filter chips. */
export function getCatalogueLibrarySectors(
  items: CatalogueLibraryItem[],
  locale: Locale,
): CatalogueLibraryFilterOption[] {
  const isArabic = locale === "ar";
  const seen = new Set<string>();
  const sectors: CatalogueLibraryFilterOption[] = [];
  for (const item of items) {
    if (seen.has(item.sectorSlug)) continue;
    const sector = getSectorBySlug(item.sectorSlug);
    if (!sector) continue;
    seen.add(item.sectorSlug);
    sectors.push({
      value: item.sectorSlug,
      label: isArabic ? sector.title_ar : sector.title_en,
    });
  }
  return sectors;
}
