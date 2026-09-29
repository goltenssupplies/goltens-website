import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // Next 16 only serves qualities explicitly listed here (defaults to
    // just [75] otherwise, silently clamping anything else) — 90 is the
    // Hero background's `quality={90}` for a sharper full-bleed photo.
    qualities: [75, 90],
    // Contact page hero photo is loaded directly from its Pexels source
    // URL (royalty-free, not self-hosted) and optimized through Next's
    // image pipeline like every other image on the site.
    remotePatterns: [{ protocol: "https", hostname: "images.pexels.com" }],
  },
  // lucide-react and react-icons are already optimized by default; framer-motion
  // isn't, and is imported across most interactive components site-wide, so
  // this keeps its client bundle contribution limited to the exports each
  // file actually uses instead of the whole package.
  experimental: {
    optimizePackageImports: ["framer-motion"],
  },
  // Catalog taxonomy restructuring: the 5 real lubricant products (and
  // their category page) moved from the "industrial-chemicals" sector to
  // the new "lubricants-oils" sector — only their sectorId changed, not
  // their slug, so every one of these is a straight 1:1 path swap. No
  // other product/category/sector URL is affected. `:locale(ar|en)`
  // covers both locale prefixes in one rule each, matching this site's
  // `localePrefix: "always"` routing (`i18n/routing.ts`).
  async redirects() {
    const movedProductSlugs = [
      "industrial-lubricating-oils",
      "industrial-greases",
      "hydraulic-fluids",
      "gear-oils",
      "metalworking-fluids",
    ];

    return [
      ...movedProductSlugs.map((slug) => ({
        source: `/:locale(ar|en)/sectors/industrial-chemicals/products/${slug}`,
        destination: `/:locale/sectors/lubricants-oils/products/${slug}`,
        permanent: true,
      })),
      {
        // The old category covered all 5 products across what are now 5
        // different categories under the new sector — no single new
        // category is an honest 1:1 replacement, so this points to the
        // new sector's own page rather than picking one arbitrarily.
        source:
          "/:locale(ar|en)/sectors/industrial-chemicals/categories/industrial-lubricants-fluids",
        destination: "/:locale/sectors/lubricants-oils",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
