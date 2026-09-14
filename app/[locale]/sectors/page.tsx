import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { SendRequirementCTA } from "@/components/rfq/SendRequirementCTA";
import {
  SectorCapabilities,
  type SectorCapabilityItem,
} from "@/components/sectors/SectorCapabilities";
import { SectorGrid } from "@/components/sectors/SectorGrid";
import { Button } from "@/components/ui/Button";
import { CTA } from "@/components/ui/CTA";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { PremiumDarkSection } from "@/components/ui/PremiumDarkSection";
import { SectionParticles } from "@/components/ui/SectionParticles";
import { Stack } from "@/components/ui/Stack";
import { Text } from "@/components/ui/Text";
import { getCategoriesBySector } from "@/data/product-categories";
import { getSortedSectors } from "@/data/sectors";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { siteUrl } from "@/lib/site";

// Existing, already-approved free-licensed asset (see the September SEO/
// imagery audit) — a warehouse aisle photo, genuinely photographic, no
// visible third-party branding. Reused here as the listing page's own
// generic "industrial procurement" hero backdrop; its own card usage
// (Global Sourcing) is untouched.
const HERO_IMAGE = "/images/categories/marine-logistics.jpg";
const SECTOR_GRID_ANCHOR = "sectors-grid";
// How many of a sector's real registered categories to surface as its
// card's short "scope of supply" hint — enough to read as representative
// without turning into a second description or risking an awkward wrap.
const MAX_SCOPE_HINT_CATEGORIES = 2;

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
 * copy (`sectors.listingHero.*`, `sectors.sectorsSection.*`) is deliberately
 * separate from the shared `sectors.title`/`sectors.description` the
 * homepage's "What We Supply" teaser (`components/sections/home/Sectors.tsx`)
 * also reads from — changing this page's copy must never change the
 * homepage's.
 */
export default async function SectorsPage({ params }: SectorsPageProps) {
  const { locale } = await params;
  const isArabic = (locale as Locale) === "ar";
  const t = await getTranslations("sectors");
  const tNav = await getTranslations("nav");

  const items = getSortedSectors().map((sector) => {
    // Real "scope of supply" hint — the sector's own top registered product
    // categories (`data/product-categories.ts`), never invented copy. Every
    // sector but Fire Protection has exactly 3 categories today; this shows
    // its top 2 either way, short enough to never need mid-word truncation.
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

      {/* Hero — same photo-hero technique as `SectorHero` (bottom-anchored
          text over a dark gradient), written inline here since this page
          needs its own generic dual-CTA row, not a single-sector
          Request-Quote button with a breadcrumb. */}
      <div className="relative flex min-h-[480px] flex-col justify-end pt-28 pb-12 sm:min-h-[560px] lg:pt-32 lg:pb-16">
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover contrast-110 saturate-105 sepia-[0.08]"
        />
        <div
          aria-hidden="true"
          className="from-ink via-ink/50 pointer-events-none absolute inset-0 bg-gradient-to-t to-transparent"
        />
        <div
          aria-hidden="true"
          className="bg-grid-pattern text-canvas/[0.06] pointer-events-none absolute inset-0"
        />
        <SectionParticles />

        <Container className="relative">
          <Stack gap="md" className="max-w-3xl">
            <Heading level={1} size={1} className="text-canvas">
              {t("listingHero.title")}
            </Heading>
            <Text size="lg" className="text-canvas max-w-2xl opacity-85">
              {t("listingHero.description")}
            </Text>
          </Stack>
          <Stack direction="row" gap="sm" wrap className="mt-8">
            <Button href={`#${SECTOR_GRID_ANCHOR}`} variant="accent" size="lg">
              {t("listingHero.exploreCta")}
            </Button>
            <SendRequirementCTA
              href="/send-requirement"
              label={t("listingHero.requirementCta")}
              onDark
            />
          </Stack>
        </Container>
      </div>

      {/* Sectors — compact header directly into the 5×2 grid, no top
          padding of its own (the hero above already provides the page's
          entry space) and a tighter "md" rhythm than the default. */}
      <PremiumDarkSection
        spacing="md"
        header={{
          eyebrow: t("sectorsSection.eyebrow"),
          title: t("sectorsSection.title"),
          description: t("sectorsSection.description"),
        }}
      >
        <div id={SECTOR_GRID_ANCHOR} className="scroll-mt-24">
          <SectorGrid items={items} exploreLabel={t("exploreSector")} />
        </div>
      </PremiumDarkSection>

      <SectorCapabilities
        title={t("capabilities.title")}
        items={capabilityItems}
      />

      <CTA
        title={t("listingRequirement.title")}
        description={t("listingRequirement.description")}
        tone="primary"
        premium
        actions={
          <SendRequirementCTA
            href="/send-requirement"
            label={t("listingRequirement.cta")}
            prominent
          />
        }
      />
    </>
  );
}
