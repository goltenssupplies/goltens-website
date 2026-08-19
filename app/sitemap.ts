import type { MetadataRoute } from "next";

import { getAllKnowledgeItems } from "@/data/knowledge";
import { getAllProductParams } from "@/data/products";
import { SECTORS } from "@/data/sectors";
import { getAllSolutionParams } from "@/data/solutions";
import { routing } from "@/i18n/routing";
import { siteUrl } from "@/lib/site";

/**
 * Every real, indexable route on the site, built from the same data
 * functions that drive each route's own `generateStaticParams` — so this
 * list can never drift out of sync with what the site actually renders.
 * Deliberately excludes `/rfq` and `/compare`: both are client-only
 * utility tools (an RFQ cart, a comparison tray) that always render an
 * empty/generic state to a crawler with no `localStorage`, so they carry
 * `robots: { index: false }` in their own metadata instead of a sitemap
 * entry — see `app/[locale]/rfq/page.tsx` and `app/[locale]/compare/page.tsx`.
 * Also deliberately excludes the legacy `/sectors/[slug]/articles/[article]`
 * URLs: that route only exists to `permanentRedirect` old links to
 * `/knowledge/[slug]` (see that page's own file for why), and every one of
 * its slugs already equals a real `KnowledgeItem.slug` included below via
 * `getAllKnowledgeItems()` — listing both would put the same final URL in
 * the sitemap twice under two different paths, one of which 308s.
 */
const paths: string[] = [
  "",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
  "/disclaimer",
  "/cookie-policy",
  "/accessibility",
  "/sectors",
  ...SECTORS.map((sector) => `/sectors/${sector.slug}`),
  ...getAllProductParams().map(
    ({ slug, product }) => `/sectors/${slug}/products/${product}`,
  ),
  "/solutions",
  ...getAllSolutionParams().map(({ slug }) => `/solutions/${slug}`),
  "/downloads",
  "/downloads/datasheets",
  "/downloads/certifications",
  "/knowledge",
  ...getAllKnowledgeItems().map((item) => `/knowledge/${item.slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routing.locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${siteUrl}/${locale}${path}`,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((altLocale) => [
            altLocale,
            `${siteUrl}/${altLocale}${path}`,
          ]),
        ),
      },
    })),
  );
}
