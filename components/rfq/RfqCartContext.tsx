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

export interface RfqCartItem {
  /** Product slug — the cart's unique key. */
  slug: string;
  name: string;
  image: string | null;
  sectorId: string;
  /** `/sectors/<sectorId>/products/<slug>` — precomputed by the caller so the cart never needs a second lookup. */
  href: string;
  quantity: number;
}

interface RfqCartContextValue {
  items: RfqCartItem[];
  /** Distinct products in the cart — the badge count everywhere on the site. */
  count: number;
  /** Adding a product already in the cart increases its quantity instead of duplicating the row. */
  addItem: (item: Omit<RfqCartItem, "quantity">, quantity?: number) => void;
  removeItem: (slug: string) => void;
  setQuantity: (slug: string, quantity: number) => void;
  clear: () => void;
  isInCart: (slug: string) => boolean;
}

const STORAGE_KEY = "goltens-rfq-cart";

// Module-level singleton — one cart for the whole site, matching the one
// `RfqCartProvider` mounted in the root layout.
const rfqCartStore = createLocalStorageStore<RfqCartItem[]>(STORAGE_KEY, []);

const RfqCartContext = createContext<RfqCartContextValue | null>(null);

/**
 * The multi-item RFQ cart — persisted to `localStorage` via
 * `createLocalStorageStore`/`useSyncExternalStore`, so it survives
 * navigation and reloads. Empty on the server and on the client's first
 * paint, then swaps to the real stored value right after hydration (see
 * `lib/local-storage-store.ts`) — never server-rendered, so there's no
 * per-visitor cart data to keep in sync with a backend. Not tied to any
 * single sector or brand: a request can span the whole catalog, mirroring
 * how real procurement RFQs are compiled from multiple sources before
 * being sent as one email via `submitRfqRequest`.
 */
export function RfqCartProvider({ children }: { children: ReactNode }) {
  const items = useSyncExternalStore(
    rfqCartStore.subscribe,
    rfqCartStore.getSnapshot,
    rfqCartStore.getServerSnapshot,
  );

  const addItem = useCallback<RfqCartContextValue["addItem"]>(
    (item, quantity = 1) => {
      rfqCartStore.setValue((current) => {
        const existing = current.find((entry) => entry.slug === item.slug);
        if (existing) {
          return current.map((entry) =>
            entry.slug === item.slug
              ? { ...entry, quantity: entry.quantity + quantity }
              : entry,
          );
        }
        return [...current, { ...item, quantity }];
      });
    },
    [],
  );

  const removeItem = useCallback((slug: string) => {
    rfqCartStore.setValue((current) =>
      current.filter((entry) => entry.slug !== slug),
    );
  }, []);

  const setQuantity = useCallback((slug: string, quantity: number) => {
    const safeQuantity = Math.max(1, Math.floor(quantity) || 1);
    rfqCartStore.setValue((current) =>
      current.map((entry) =>
        entry.slug === slug ? { ...entry, quantity: safeQuantity } : entry,
      ),
    );
  }, []);

  const clear = useCallback(() => rfqCartStore.setValue([]), []);

  const isInCart = useCallback(
    (slug: string) => items.some((entry) => entry.slug === slug),
    [items],
  );

  const value = useMemo<RfqCartContextValue>(
    () => ({
      items,
      count: items.length,
      addItem,
      removeItem,
      setQuantity,
      clear,
      isInCart,
    }),
    [items, addItem, removeItem, setQuantity, clear, isInCart],
  );

  return (
    <RfqCartContext.Provider value={value}>{children}</RfqCartContext.Provider>
  );
}

export function useRfqCart() {
  const context = useContext(RfqCartContext);
  if (!context) {
    throw new Error("useRfqCart must be used within an RfqCartProvider");
  }
  return context;
}
