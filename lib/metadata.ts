import type { Metadata } from "next";

import { routing, type Locale } from "@/i18n/routing";
import { siteName, siteUrl } from "@/lib/site";

const ogLocaleByLocale: Record<Locale, string> = {
  ar: "ar_EG",
  en: "en_US",
};

interface BuildMetadataOptions {
  locale: Locale;
  /** Path relative to the locale root, e.g. "" for home, "/about" for about. */
  path: string;
  title: string;
  description: string;
  /**
   * Optional per-page override. Omit it (the default for every current
   * caller) and this falls back to the locale's generated
   * `app/[locale]/opengraph-image.tsx` route — a branded 1200x630 card
   * built from the real logo. That route is only *automatically* inherited
   * by Next.js's file-convention resolution for pages that don't define
   * their own `openGraph` object at all; since every page here calls this
   * function (which always returns an `openGraph` object), inheritance
   * never actually applies below the exact `[locale]` segment — so the
   * fallback below constructs the image URL explicitly instead of relying
   * on that. Do not reintroduce a hardcoded static path (e.g.
   * `/og-default.jpg`) here unless the referenced file genuinely exists in
   * `public/` — that was the original bug: a default pointing at a file
   * that was never added, silently shadowing the working generated image.
   */
  ogImage?: string;
  keywords?: string[];
  /** Set for client-only utility pages (e.g. `/rfq`, `/compare`) that always render an empty/generic state to a crawler with no `localStorage` — keeps that thin, per-visitor content out of search results without removing the page itself. Canonical/hreflang/OG tags are still emitted as normal; `follow` stays true so links from the page are still crawled. */
  noIndex?: boolean;
}

/**
 * Builds page metadata with correct canonical + hreflang alternates for the
 * bilingual (ar/en) site. Every page must call this so search engines see
 * consistent x-default and per-locale alternate links.
 */
export function buildMetadata({
  locale,
  path,
  title,
  description,
  ogImage,
  keywords,
  noIndex,
}: BuildMetadataOptions): Metadata {
  const languages = Object.fromEntries(
    routing.locales.map((altLocale) => [
      altLocale,
      `${siteUrl}/${altLocale}${path}`,
    ]),
  );
  const resolvedOgImage = ogImage ?? `${siteUrl}/${locale}/opengraph-image`;

  return {
    title,
    description,
    keywords,
    ...(noIndex && {
      robots: { index: false, follow: true },
    }),
    alternates: {
      canonical: `${siteUrl}/${locale}${path}`,
      languages: {
        ...languages,
        "x-default": `${siteUrl}/${routing.defaultLocale}${path}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}${path}`,
      siteName,
      images: [{ url: resolvedOgImage, width: 1200, height: 630 }],
      locale: ogLocaleByLocale[locale],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [resolvedOgImage],
    },
  };
}
