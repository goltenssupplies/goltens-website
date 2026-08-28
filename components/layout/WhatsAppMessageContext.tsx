"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

interface WhatsAppMessageContextValue {
  /** Product/sector-specific WhatsApp message for the currently mounted page, or `null` to fall back to the general `common.whatsappFloatingMessage`. */
  message: string | null;
  setMessage: (message: string | null) => void;
}

const WhatsAppMessageContext = createContext<WhatsAppMessageContextValue>({
  message: null,
  setMessage: () => {},
});

/**
 * Coordinates the floating WhatsApp button (`WhatsAppButtonLoader`, mounted
 * once in the root layout) with whichever page is currently active. Holds
 * only a ready-to-use message string — never `Product`/`Sector` data or any
 * catalog lookup — set by a page-level `SetWhatsAppMessage` instance (see
 * `app/[locale]/sectors/[slug]/products/[product]/page.tsx` and
 * `app/[locale]/sectors/[slug]/page.tsx`) and cleared back to `null`
 * automatically when that page unmounts.
 */
export function WhatsAppMessageProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState<string | null>(null);

  const value = useMemo<WhatsAppMessageContextValue>(
    () => ({ message, setMessage }),
    [message],
  );

  return (
    <WhatsAppMessageContext.Provider value={value}>
      {children}
    </WhatsAppMessageContext.Provider>
  );
}

export function useWhatsAppMessage() {
  return useContext(WhatsAppMessageContext);
}
