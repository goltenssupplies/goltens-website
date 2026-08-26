/**
 * Site-wide feature toggles. Every flag here is a temporary UI/reachability
 * hold, never a removal — the routes, components, and data each one gates
 * stay fully intact in the codebase. Flip a flag back to `true` to fully
 * restore that section; every call site reads the one constant, so a single
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

/**
 * `false` = hides the "Available Catalogues" section (`products.cataloguesTitle`
 * — `<SectorCatalogues>`) on the product detail page
 * (`app/[locale]/sectors/[slug]/products/[product]/page.tsx`) while its PDFs
 * are being prepared. That's the only place this exact section renders today
 * (`/solutions/[slug]` and `/knowledge/[slug]` have their own,
 * differently-labeled catalogue sections and are unaffected). No catalogue
 * data, `SectorCatalogues`, or `CatalogueLibrary` code is touched — the
 * section's own `PremiumDarkSection` block simply isn't rendered.
 */
export const AVAILABLE_CATALOGUES_ENABLED = false;

/**
 * `false` = hides the "Related Articles" section (`products.articlesTitle`
 * — `<SectorArticles>`) on the product detail page. That's the only place
 * this exact section renders today — sector detail pages don't render
 * `SectorArticles` at all, and the solutions page's own `SectorArticles`
 * instance is separately labeled "Knowledge Center Articles" and is
 * unaffected. No article data, routes, or SEO infrastructure is touched.
 */
export const RELATED_ARTICLES_ENABLED = false;

/**
 * `false` = hides the "Related Products" section (`products.relatedProductsTitle`
 * — `<SectorProducts>`) on the product detail page. That's the only place
 * this exact section renders today — the main product-browsing grids on
 * `/sectors/[slug]` and `/solutions/[slug]` are a different `SectorProducts`
 * usage (core listing content, not a "related" appendix) and are unaffected,
 * as is the knowledge article page's own "Related Products" section. No
 * product data or the product catalogue is touched, and this never affects
 * the product being viewed itself — only this one appendix section.
 */
export const RELATED_PRODUCTS_ENABLED = false;
