"use client";

import dynamic from "next/dynamic";

// `next/dynamic`'s `ssr: false` option isn't allowed inside a Server
// Component (which `app/[locale]/layout.tsx` is) — it has to live inside a
// Client Component boundary, hence this tiny wrapper. `UtilityTray` is
// mounted on every route but produces no server-rendered output either way
// (both its counts default to 0 until `localStorage` hydrates client-side),
// so deferring it entirely to the client keeps its bundle — icons, the RFQ
// cart/comparison contexts' `useSyncExternalStore` reads — out of the
// initial JS every page ships today.
const UtilityTray = dynamic(
  () => import("@/components/layout/UtilityTray").then((mod) => mod.UtilityTray),
  { ssr: false },
);

export function UtilityTrayLoader() {
  return <UtilityTray />;
}
