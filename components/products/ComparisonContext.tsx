"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";

import { createLocalStorageStore } from "@/lib/local-storage-store";

export interface ComparisonItem {
  slug: string;
  name: string;
  image: string | null;
  sectorId: string;
  /** Matches `Product.categoryId` — enforces the "same category" rule below. */
  categoryId: string;
  /** `/sectors/<sectorId>/products/<slug>` — precomputed by the caller so the comparison never needs a second lookup. */
  href: string;
}

interface ComparisonContextValue {
  items: ComparisonItem[];
  count: number;
  toggleItem: (item: ComparisonItem) => void;
  removeItem: (slug: string) => void;
  clear: () => void;
  isSelected: (slug: string) => boolean;
}

const STORAGE_KEY = "goltens-comparison";
/** Keeps the comparison table readable — a 5th column would force horizontal scrolling on most viewports. */
const MAX_ITEMS = 4;

// Module-level singleton — one comparison set for the whole site, matching
// the one `ComparisonProvider` mounted in the root layout.
const comparisonStore = createLocalStorageStore<ComparisonItem[]>(
  STORAGE_KEY,
  [],
);

const ComparisonContext = createContext<ComparisonContextValue | null>(null);

/**
 * The Product Comparison Engine's selection state — persisted to
 * `localStorage` via `createLocalStorageStore`/`useSyncExternalStore`, same
 * hydration-safe pattern as `RfqCartContext`. Specifications only mean
 * anything when compared within one `Product.categoryId` (e.g. Fire Pumps
 * vs. Fire Pumps, not Fire Pumps vs. Valves), so selecting a product from a
 * different category than what's currently selected starts a fresh
 * comparison instead of mixing categories.
 */
export function ComparisonProvider({ children }: { children: ReactNode }) {
  const items = useSyncExternalStore(
    comparisonStore.subscribe,
    comparisonStore.getSnapshot,
    comparisonStore.getServerSnapshot,
  );

  const toggleItem = useCallback((item: ComparisonItem) => {
    comparisonStore.setValue((current) => {
      const alreadySelected = current.some((entry) => entry.slug === item.slug);
      if (alreadySelected) {
        return current.filter((entry) => entry.slug !== item.slug);
      }

      const sameCategory = current.every(
        (entry) => entry.categoryId === item.categoryId,
      );
      const base = sameCategory ? current : [];
      if (base.length >= MAX_ITEMS) return base;
      return [...base, item];
    });
  }, []);

  const removeItem = useCallback((slug: string) => {
    comparisonStore.setValue((current) =>
      current.filter((entry) => entry.slug !== slug),
    );
  }, []);

  const clear = useCallback(() => comparisonStore.setValue([]), []);

  const isSelected = useCallback(
    (slug: string) => items.some((entry) => entry.slug === slug),
    [items],
  );

  const value = useMemo<ComparisonContextValue>(
    () => ({
      items,
      count: items.length,
      toggleItem,
      removeItem,
      clear,
      isSelected,
    }),
    [items, toggleItem, removeItem, clear, isSelected],
  );

  return (
    <ComparisonContext.Provider value={value}>
      {children}
    </ComparisonContext.Provider>
  );
}

export function useComparison() {
  const context = useContext(ComparisonContext);
  if (!context) {
    throw new Error("useComparison must be used within a ComparisonProvider");
  }
  return context;
}
