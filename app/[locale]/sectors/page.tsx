import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { SendRequirementCTA } from "@/components/rfq/SendRequirementCTA";
import {
  SectorCapabilities,
  type SectorCapabilityItem,
} from "@/components/sectors/SectorCapabilities";
import { SectorGrid } from "@/components/sectors/SectorGrid";
import { Button } from "@/components/ui/Button";
import { PremiumDarkSection } from "@/components/ui/PremiumDarkSection";
import { Reveal } from "@/components/ui/Reveal";
import { Stack } from "@/components/ui/Stack";
import { getCategoriesBySector } from "@/data/product-categories";
import { getSortedSectors } from "@/data/sectors";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { siteUrl } from "@/lib/site";

const SECTOR_GRID_ANCHOR = "sector-grid";
// How many of a sector's real registered categories to surface as its
// card's short "scope of supply" hint — enough to read as representative
// without turning into a second description.
const MAX_SCOPE_HINT_CATEGORIES = 3;

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
 * `/sectors` — the full 10-sector Procurement Sectors index. Its own richer
 * hero copy (`sectors.listingHero.*`) is deliberately separate from the
 * shared `sectors.title`/`sectors.description` the homepage's "What We
 * Supply" teaser (`components/sections/home/Sectors.tsx`) also reads from
 * — changing this page's hero text must never change the homepage's.
 */
export default async function SectorsPage({ params }: SectorsPageProps) {
  const { locale } = await params;
  const isArabic = (locale as Locale) === "ar";
  const t = await getTranslations("sectors");
  const tNav = await getTranslations("nav");

  const items = getSortedSectors().map((sector) => {
    // Real "scope of supply" hint — the sector's own top registered product
    // categories (`data/product-categories.ts`), never invented copy. Every
    // sector but Fire Protection has exactly 3 categories today, so this
    // shows its full scope; Fire Protection (8 categories) shows its top 3.
    const categories = getCategoriesBySector(sector.id);
    const scopeHint = categories.length
      ? categories
          .slice(0, MAX_SCOPE_HINT_CATEGORIES)
          .map((category) => (isArabic ? category.name_ar : category.name_en))
          .join(" • ")
      : undefined;

    return {
      slug: sector.slug,
      title: isArabic ? sector.title_ar : sector.title_en,
      description: isArabic ? sector.description_ar : sector.description_en,
      image: sector.image,
      icon: sector.icon,
      scopeHint,
    };
  });

  const capabilityItems = t.raw("capabilities.items") as SectorCapabilityItem[];

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
          title: t("listingHero.title"),
          description: t("listingHero.description"),
        }}
      >
        <Reveal delay={0.1}>
          <Stack
            direction="row"
            gap="sm"
            wrap
            justify="center"
            className="mb-16 lg:mb-20"
          >
            <Button href={`#${SECTOR_GRID_ANCHOR}`} variant="accent" size="lg">
              {t("listingHero.exploreCta")}
            </Button>
            <SendRequirementCTA
              href="/send-requirement"
              label={t("listingHero.requirementCta")}
            />
          </Stack>
        </Reveal>

        <div id={SECTOR_GRID_ANCHOR} className="scroll-mt-24">
          <SectorGrid items={items} exploreLabel={t("exploreSector")} />
        </div>
      </PremiumDarkSection>

      <SectorCapabilities
        title={t("capabilities.title")}
        items={capabilityItems}
      />

      <PremiumDarkSection spacing="md">
        <SendRequirementCTA
          variant="banner"
          href="/send-requirement"
          label={t("listingRequirement.cta")}
          title={t("listingRequirement.title")}
          description={t("listingRequirement.description")}
          className="mx-auto max-w-2xl"
        />
      </PremiumDarkSection>
    </>
  );
}
