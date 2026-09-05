"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import { SectorCatalogues } from "@/components/sectors/SectorCatalogues";
import type {
  CatalogueLibraryFilterOption,
  CatalogueLibraryItem,
} from "@/lib/catalogue-library";
import { cn } from "@/lib/utils";

export interface CatalogueLibraryProps {
  items: CatalogueLibraryItem[];
  /** Omit (or pass `[]`) to hide the kind filter row entirely — used by the single-purpose Datasheet/Certifications library pages, which pre-filter `items` to one kind before this component ever sees them. */
  kinds?: CatalogueLibraryFilterOption[];
  /** Omit (or pass a single-entry list) to hide the sector filter row — same "nothing to filter" logic `ProductExplorer` uses. */
  sectors: CatalogueLibraryFilterOption[];
  searchLabel: string;
  searchPlaceholder: string;
  filterAllLabel: string;
  downloadLabel: string;
  comingSoonLabel: string;
  /** See `SectorCatalogues`'s prop of the same name — shown instead of `comingSoonLabel` for datasheet-kind items. */
  datasheetUnavailableLabel?: string;
  noResultsTitle: string;
  noResultsDescription: string;
}

/**
 * Live search + kind/sector filter over a flat list of `ProductCatalogue`
 * entries (via `getAllProductCatalogues()`), rendered through the exact
 * same `SectorCatalogues` card grid every sector/product/solution page
 * already uses — same visual language as `BrandExplorer`/`ProductExplorer`
 * for the filter bar itself. Backs the Download Center, Datasheet Library,
 * and Certifications Library — the only difference between the three is
 * which `items`/`kinds` each page passes in.
 */
export function CatalogueLibrary({
  items,
  kinds = [],
  sectors,
  searchLabel,
  searchPlaceholder,
  filterAllLabel,
  downloadLabel,
  comingSoonLabel,
  datasheetUnavailableLabel,
  noResultsTitle,
  noResultsDescription,
}: CatalogueLibraryProps) {
  const [query, setQuery] = useState("");
  const [activeKind, setActiveKind] = useState("all");
  const [activeSector, setActiveSector] = useState("all");

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return items.filter(
      (item) =>
        (activeKind === "all" || item.kind === activeKind) &&
        (activeSector === "all" || item.sectorSlug === activeSector) &&
        (normalizedQuery.length === 0 ||
          item.title.toLowerCase().includes(normalizedQuery) ||
          (item.productName?.toLowerCase().includes(normalizedQuery) ?? false)),
    );
  }, [items, activeKind, activeSector, query]);

  return (
    <div>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="relative w-full lg:max-w-sm">
          <Search
            aria-hidden="true"
            className="text-ink-muted pointer-events-none absolute start-4 top-1/2 size-4 -translate-y-1/2"
          />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            aria-label={searchLabel}
            placeholder={searchPlaceholder}
            className={cn(
              "border-border bg-canvas text-ink placeholder:text-ink-muted w-full rounded-sm border py-3 ps-11 pe-4 text-sm transition-colors",
              "focus-visible:border-gold/50 focus-visible:outline-none",
            )}
          />
        </div>

        <div className="flex flex-col items-start gap-3 lg:items-end">
          {kinds.length > 0 && (
            <div className="flex flex-wrap justify-start gap-2 lg:justify-end">
              <button
                type="button"
                onClick={() => setActiveKind("all")}
                aria-pressed={activeKind === "all"}
                className={cn(
                  "rounded-sm border px-3.5 py-1.5 text-sm font-medium transition-colors",
                  activeKind === "all"
                    ? "bg-gold border-gold text-ink"
                    : "border-border text-ink-muted hover:border-gold/40 hover:text-gold",
                )}
              >
                {filterAllLabel}
              </button>
              {kinds.map((kind) => (
                <button
                  key={kind.value}
                  type="button"
                  onClick={() => setActiveKind(kind.value)}
                  aria-pressed={activeKind === kind.value}
                  className={cn(
                    "rounded-sm border px-3.5 py-1.5 text-sm font-medium transition-colors",
                    activeKind === kind.value
                      ? "bg-gold border-gold text-ink"
                      : "border-border text-ink-muted hover:border-gold/40 hover:text-gold",
                  )}
                >
                  {kind.label}
                </button>
              ))}
            </div>
          )}

          {sectors.length > 1 && (
            <div className="flex flex-wrap justify-start gap-2 lg:justify-end">
              <button
                type="button"
                onClick={() => setActiveSector("all")}
                aria-pressed={activeSector === "all"}
                className={cn(
                  "rounded-sm border px-3.5 py-1.5 text-sm font-medium transition-colors",
                  activeSector === "all"
                    ? "border-gold/50 text-gold bg-gold/10"
                    : "border-border text-ink-muted hover:border-gold/40 hover:text-gold",
                )}
              >
                {filterAllLabel}
              </button>
              {sectors.map((sector) => (
                <button
                  key={sector.value}
                  type="button"
                  onClick={() => setActiveSector(sector.value)}
                  aria-pressed={activeSector === sector.value}
                  className={cn(
                    "rounded-sm border px-3.5 py-1.5 text-sm font-medium transition-colors",
                    activeSector === sector.value
                      ? "border-gold/50 text-gold bg-gold/10"
                      : "border-border text-ink-muted hover:border-gold/40 hover:text-gold",
                  )}
                >
                  {sector.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="mt-10">
        <SectorCatalogues
          items={filtered}
          downloadLabel={downloadLabel}
          comingSoonLabel={comingSoonLabel}
          datasheetUnavailableLabel={datasheetUnavailableLabel}
          emptyTitle={noResultsTitle}
          emptyBody={noResultsDescription}
        />
      </div>
    </div>
  );
}
