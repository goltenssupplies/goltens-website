"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Search } from "lucide-react";

import {
  SectorProducts,
  type SectorProductItem,
  type SectorProductsProps,
} from "@/components/sectors/SectorProducts";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { Text } from "@/components/ui/Text";
import { cn } from "@/lib/utils";

export interface ProductExplorerItem extends SectorProductItem {
  categoryId: string;
}

export interface ProductExplorerCategory {
  id: string;
  label: string;
  /** Dedicated category page URL (e.g. `/sectors/[slug]/categories/[category]`) — omit for a caller with no such route yet; the "View Full Category Page" link is skipped for any category missing this. */
  href?: string;
}

export interface ProductExplorerProps extends Omit<
  SectorProductsProps,
  "items"
> {
  items: ProductExplorerItem[];
  categories: ProductExplorerCategory[];
  searchLabel: string;
  searchPlaceholder: string;
  filterAllLabel: string;
  noResultsTitle: string;
  noResultsDescription: string;
  /** "View Full Category Page" link label — omit both this and every category's `href` to hide the link entirely (matches every other optional-link-pair convention on this site, e.g. `ProductHero`'s `sendRequirementLabel`). */
  viewCategoryPageLabel?: string;
}

/**
 * Adds a live search + category filter bar above the existing
 * `SectorProducts` grid — same visual language as `BrandExplorer` (search
 * input, chip row), client-only for the same reason (small per-sector
 * dataset, no server round trip needed). Filtering never invents a "coming
 * soon" state: that's `SectorProducts`' own empty state, reserved for a
 * sector with zero products, not a search/filter with zero matches.
 *
 * Renders bare `SectorProducts` — no filter bar, no behavior change — when
 * a sector's products span one category or fewer, so every sector without
 * a real multi-category catalog looks exactly as it did before this
 * component existed.
 */
export function ProductExplorer({
  items,
  categories,
  searchLabel,
  searchPlaceholder,
  filterAllLabel,
  noResultsTitle,
  noResultsDescription,
  viewCategoryPageLabel,
  title,
  ...sectorProductsProps
}: ProductExplorerProps) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const presentCategories = useMemo(
    () =>
      categories.filter((category) =>
        items.some((item) => item.categoryId === category.id),
      ),
    [categories, items],
  );

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return items.filter(
      (item) =>
        (activeCategory === "all" || item.categoryId === activeCategory) &&
        (normalizedQuery.length === 0 ||
          item.title.toLowerCase().includes(normalizedQuery)),
    );
  }, [items, activeCategory, query]);

  const activeCategoryHref =
    activeCategory === "all"
      ? undefined
      : presentCategories.find((category) => category.id === activeCategory)
          ?.href;

  if (presentCategories.length <= 1) {
    const [onlyCategory] = presentCategories;
    return (
      <div>
        <SectorProducts
          title={title}
          items={items}
          {...sectorProductsProps}
          variant="list"
        />
        {onlyCategory?.href && viewCategoryPageLabel && (
          <Button
            href={onlyCategory.href}
            variant="ghost"
            size="sm"
            iconEnd={
              <ArrowRight
                aria-hidden="true"
                className="size-4 rtl:rotate-180"
              />
            }
            className="mt-6"
          >
            {viewCategoryPageLabel}
          </Button>
        )}
      </div>
    );
  }

  return (
    <div>
      <Reveal>
        <Heading level={2} tone="inverse" className="mb-10 lg:mb-12">
          {title}
        </Heading>
      </Reveal>

      <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
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

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            aria-pressed={activeCategory === "all"}
            className={cn(
              "rounded-sm border px-4 py-2 text-sm font-medium transition-colors",
              activeCategory === "all"
                ? "bg-gold border-gold text-ink"
                : "border-border text-ink-muted hover:border-gold/40 hover:text-gold",
            )}
          >
            {filterAllLabel}
          </button>
          {presentCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id)}
              aria-pressed={activeCategory === category.id}
              className={cn(
                "rounded-sm border px-4 py-2 text-sm font-medium transition-colors",
                activeCategory === category.id
                  ? "bg-gold border-gold text-ink"
                  : "border-border text-ink-muted hover:border-gold/40 hover:text-gold",
              )}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Only shown once a single real category is selected (never for
          "All") — the one contextual link for that category, not one per
          chip, keeps the filter bar itself uncluttered. */}
      {activeCategoryHref && viewCategoryPageLabel && (
        <div className="mb-8">
          <Button
            href={activeCategoryHref}
            variant="ghost"
            size="sm"
            iconEnd={
              <ArrowRight
                aria-hidden="true"
                className="size-4 rtl:rotate-180"
              />
            }
          >
            {viewCategoryPageLabel}
          </Button>
        </div>
      )}

      {filteredItems.length > 0 ? (
        <SectorProducts
          title=""
          items={filteredItems}
          {...sectorProductsProps}
          variant="list"
        />
      ) : (
        <div className="py-12 text-center">
          <Heading level={3} size={4} tone="inverse">
            {noResultsTitle}
          </Heading>
          <Text tone="inverse" className="mx-auto mt-2 max-w-md opacity-70">
            {noResultsDescription}
          </Text>
        </div>
      )}
    </div>
  );
}
