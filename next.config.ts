import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
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
};

export default withNextIntl(nextConfig);
