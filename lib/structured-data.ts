import { contactEmail, contactPhoneHref, siteName, siteUrl } from "@/lib/site";

interface BreadcrumbJsonLdItem {
  name: string;
  /** Absolute URL. */
  url: string;
}

/**
 * JSON-LD Organization schema. Render via:
 *   <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd(locale)) }} />
 *
 * Only verified facts belong here. Contact fields below are the real,
 * confirmed company details — do not add anything else (founding date,
 * certifications, employee count, etc.) without the same confirmation.
 */
export function organizationJsonLd(locale: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: `${siteUrl}/${locale}`,
    logo: `${siteUrl}/brand/goltens-logo-premium.png`,
    email: contactEmail,
    telephone: contactPhoneHref.replace("tel:", ""),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bagour",
      addressRegion: "Monufia Governorate",
      addressCountry: "EG",
    },
  };
}

/** JSON-LD BreadcrumbList schema for a page trail, e.g. Home / Sectors / [sector]. */
export function breadcrumbJsonLd(items: BreadcrumbJsonLdItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * JSON-LD Service schema for a single Procurement Sector page. Only
 * verified, non-fabricated fields — name, description, provider, and Egypt
 * as the area served (the site's actual operating market) — no invented
 * ratings, pricing, or offers.
 */
export function serviceJsonLd({
  name,
  description,
  url,
  locale,
}: {
  name: string;
  description: string;
  url: string;
  locale: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "Organization",
      name: siteName,
      url: `${siteUrl}/${locale}`,
    },
    areaServed: {
      "@type": "Country",
      name: "Egypt",
    },
  };
}

/**
 * JSON-LD Article schema for a single Knowledge Center article. Only
 * verified fields — headline, description, image, publish date, author,
 * and the publishing organization — no fabricated ratings or awards, same
 * convention as `brandJsonLd`/`serviceJsonLd`.
 */
export function articleJsonLd({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  author,
  url,
}: {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  /** Omit when the article has never been revised — falls back to `datePublished` per schema.org convention. */
  dateModified?: string;
  author: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    image,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      "@type": "Organization",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: siteName,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/brand/goltens-logo-premium.png`,
      },
    },
    mainEntityOfPage: url,
  };
}

/**
 * JSON-LD Product schema for a single product detail page. Deliberately
 * omits `offers`/`aggregateRating`/`brand` — no price or rating exists on
 * this site, and `brand` would read as a manufacturer-ownership claim,
 * contradicting the sitewide "sourced, not an authorized dealer" rule. Only
 * verified fields, same convention as `brandJsonLd`/`serviceJsonLd`.
 */
export function productJsonLd({
  name,
  description,
  image,
  category,
  url,
}: {
  name: string;
  description: string;
  image: string;
  category: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image,
    category,
    url,
  };
}

/** JSON-LD FAQPage schema for a page's FAQ section. */
export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
