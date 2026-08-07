import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { SectorGrid } from "@/components/sectors/SectorGrid";
import { PremiumDarkSection } from "@/components/ui/PremiumDarkSection";
import { getAllSolutions } from "@/data/solutions";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { siteUrl } from "@/lib/site";

interface SolutionsPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: SolutionsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "solutions" });

  return buildMetadata({
    locale: locale as Locale,
    path: "/solutions",
    title: t("listingTitle"),
    description: t("listingDescription"),
  });
}

/**
 * `/solutions` listing page — every Project Solution, one card each, same
 * `SectorGrid`/`SectorCard` the `/sectors` listing page and homepage
 * teaser already use (via `hrefBase="/solutions"`, added specifically so
 * this reuses that exact component). Not yet linked from the navbar —
 * reachable via internal cross-links and this page itself.
 */
export default async function SolutionsPage({ params }: SolutionsPageProps) {
  const { locale } = await params;
  const isArabic = (locale as Locale) === "ar";
  const t = await getTranslations("solutions");
  const tNav = await getTranslations("nav");
  const items = getAllSolutions().map((solution) => ({
    slug: solution.slug,
    title: isArabic ? solution.title_ar : solution.title_en,
    description: isArabic ? solution.description_ar : solution.description_en,
    image: solution.heroImage,
    icon: solution.icon,
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: tNav("home"), url: `${siteUrl}/${locale}` },
              {
                name: t("listingTitle"),
                url: `${siteUrl}/${locale}/solutions`,
              },
            ]),
          ),
        }}
      />
      <PremiumDarkSection
        topPadding
        header={{
          eyebrow: t("eyebrow"),
          title: t("listingTitle"),
          description: t("listingDescription"),
        }}
      >
        <SectorGrid
          items={items}
          exploreLabel={t("exploreSolution")}
          hrefBase="/solutions"
        />
      </PremiumDarkSection>
    </>
  );
}
