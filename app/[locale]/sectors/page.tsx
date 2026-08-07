import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { SectorGrid } from "@/components/sectors/SectorGrid";
import { PremiumDarkSection } from "@/components/ui/PremiumDarkSection";
import { getSortedSectors } from "@/data/sectors";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { siteUrl } from "@/lib/site";

interface SectorsPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: SectorsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.sectors" });

  return buildMetadata({
    locale: locale as Locale,
    path: "/sectors",
    title: t("title"),
    description: t("description"),
  });
}

/**
 * Dedicated `/sectors` listing page — the Navbar's "Sectors" nav item's real
 * destination. Same content and same `SectorCard` grid as the homepage's
 * `Sectors` teaser section, sourced from the same `data/sectors.ts`, just
 * with page-level Hero spacing instead of homepage section rhythm.
 */
export default async function SectorsPage({ params }: SectorsPageProps) {
  const { locale } = await params;
  const isArabic = (locale as Locale) === "ar";
  const t = await getTranslations("sectors");
  const tNav = await getTranslations("nav");
  const items = getSortedSectors().map((sector) => ({
    slug: sector.slug,
    title: isArabic ? sector.title_ar : sector.title_en,
    description: isArabic ? sector.description_ar : sector.description_en,
    image: sector.image,
    icon: sector.icon,
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: tNav("home"), url: `${siteUrl}/${locale}` },
              { name: t("title"), url: `${siteUrl}/${locale}/sectors` },
            ]),
          ),
        }}
      />
      <PremiumDarkSection
        topPadding
        header={{
          eyebrow: t("eyebrow"),
          title: t("title"),
          description: t("description"),
        }}
      >
        <SectorGrid items={items} exploreLabel={t("exploreSector")} />
      </PremiumDarkSection>
    </>
  );
}
