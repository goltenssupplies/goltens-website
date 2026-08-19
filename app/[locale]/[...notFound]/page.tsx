import { notFound } from "next/navigation";

/**
 * Catch-all for any path under `/[locale]/...` that doesn't match a real
 * page (typo'd URL, stale bookmark, removed page). Next.js's `not-found.tsx`
 * convention only renders for an explicit `notFound()` call from within a
 * matched route segment — it does NOT automatically catch "no route
 * matched at all" (confirmed against this project's Next.js 16 docs,
 * `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/not-found.md`).
 * This segment exists purely to be that match: it renders nothing itself,
 * it only calls `notFound()`, which then correctly triggers the sibling
 * `app/[locale]/not-found.tsx` — fully wrapped by `app/[locale]/layout.tsx`
 * (Navbar/Footer/locale), unlike Next's unbranded global default.
 */
export default function CatchAllNotFound(): never {
  notFound();
}
