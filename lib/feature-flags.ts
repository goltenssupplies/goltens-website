/**
 * Site-wide feature toggles. Currently one flag: the Download Center hold
 * (temporary, not a removal — every route, component, and document stays in
 * the codebase; this just controls whether it's linked, sitemapped, indexed,
 * and reachable). Flip `DOWNLOADS_CENTER_ENABLED` back to `true` to fully
 * restore it — every call site below reads this one constant, so a single
 * flip is the entire re-activation.
 */

/**
 * `false` = temporary hold on `/downloads` (and `/downloads/datasheets`,
 * `/downloads/certifications`) while official manufacturer PDFs are being
 * prepared: hidden from the footer and the product-page "Browse the
 * Download Center" CTA, excluded from `app/sitemap.ts`, `noIndex`'d, and
 * each page redirects visitors to `/sectors` instead of rendering. No data,
 * component, or PDF is deleted — see `app/[locale]/downloads/*`,
 * `components/products/CatalogueLibrary.tsx`, and every `Product.catalogues`
 * entry, all untouched.
 */
export const DOWNLOADS_CENTER_ENABLED = false;
