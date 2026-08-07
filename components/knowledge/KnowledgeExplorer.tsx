"use client";

import { useMemo, useState } from "react";

import { KnowledgeGrid } from "@/components/knowledge/KnowledgeGrid";
import type { KnowledgeCardItem } from "@/components/knowledge/KnowledgeCard";
import { cn } from "@/lib/utils";

export interface KnowledgeTypeOption {
  value: string;
  label: string;
}

export interface KnowledgeExplorerProps {
  items: KnowledgeCardItem[];
  types: KnowledgeTypeOption[];
  allLabel: string;
  readMoreLabel: string;
  emptyTitle: string;
  emptyBody: string;
}

const chipClass = (active: boolean) =>
  cn(
    "rounded-sm border px-4 py-2 text-sm font-medium transition-colors",
    active
      ? "bg-gold border-gold text-ink"
      : "border-canvas/15 text-canvas/70 hover:border-gold/40 hover:text-gold",
  );

/**
 * Type-filter chips over the full Knowledge Platform registry — client-only,
 * same convention `BrandExplorer` uses for filtering its (small) dataset
 * entirely in the browser rather than a server round trip. Delegates
 * rendering, including the honest per-filter empty state, to `KnowledgeGrid`.
 */
export function KnowledgeExplorer({
  items,
  types,
  allLabel,
  readMoreLabel,
  emptyTitle,
  emptyBody,
}: KnowledgeExplorerProps) {
  const [activeType, setActiveType] = useState("all");

  const filtered = useMemo(
    () =>
      activeType === "all"
        ? items
        : items.filter((item) => item.type === activeType),
    [items, activeType],
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActiveType("all")}
          aria-pressed={activeType === "all"}
          className={chipClass(activeType === "all")}
        >
          {allLabel}
        </button>
        {types.map((type) => (
          <button
            key={type.value}
            type="button"
            onClick={() => setActiveType(type.value)}
            aria-pressed={activeType === type.value}
            className={chipClass(activeType === type.value)}
          >
            {type.label}
          </button>
        ))}
      </div>

      <div className="mt-12">
        <KnowledgeGrid
          items={filtered}
          readMoreLabel={readMoreLabel}
          emptyTitle={emptyTitle}
          emptyBody={emptyBody}
        />
      </div>
    </div>
  );
}
