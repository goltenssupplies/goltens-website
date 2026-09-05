import { ArrowRight } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";

import { SectorGrid } from "@/components/sectors/SectorGrid";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Stack } from "@/components/ui/Stack";
import { Text } from "@/components/ui/Text";
import { getSectorBySlug } from "@/data/sectors";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

// A curated subset of the 10 Procurement Sectors — the homepage's "What We
// Supply" section deliberately shows only the major business areas rather
// than the full taxonomy, so it reads as a premium overview, not a catalog
// index. The full 10-sector grid still lives at `/sectors` (linked below).
const HOMEPAGE_SECTOR_SLUGS = [
  "industrial-equipment",
  "fire-protection",
  "government-procurement",
  "healthcare",
  "construction",
  "industrial-chemicals",
  "electrical-energy",
  "global-sourcing",
] as const;

/**
 * "What We Supply" — a curated, 8-sector homepage teaser (not the full
 * taxonomy — see `/sectors` for that). Same `SectorGrid`/`SectorCard` as
 * `/sectors`, sourced from the same `data/sectors.ts`, just filtered to the
 * sectors that best represent GOLTENS' major business areas.
 */
export async function Sectors() {
  const locale = (await getLocale()) as Locale;
  const isArabic = locale === "ar";
  const t = await getTranslations("sectors");
  const items = HOMEPAGE_SECTOR_SLUGS.map((slug) => getSectorBySlug(slug))
    .filter(
      (sector): sector is NonNullable<typeof sector> => sector !== undefined,
    )
    .map((sector) => ({
      slug: sector.slug,
      title: isArabic ? sector.title_ar : sector.title_en,
      description: isArabic ? sector.description_ar : sector.description_en,
      image: sector.image,
      icon: sector.icon,
    }));

  return (
    <Section
      id="sectors"
      spacing="lg"
      background="obsidian"
      // Top padding trimmed from the "lg" default (was py-24 sm:py-32 on
      // both edges) — with no in-flow content of its own, Hero renders at
      // exactly 100vh, so this section's own top padding was the entire
      // gap between the Hero photo and this section's heading. On the
      // obsidian (white panel) background with nothing else in that space,
      // the full "lg" top padding read as a large empty band.
      // Bottom padding is untouched (still the "lg" py-24 sm:py-32) so
      // rhythm with the section below (WhyChooseUs) is unchanged.
      className="relative overflow-hidden pt-12 sm:pt-16 lg:pt-20"
    >
      <Container className="relative">
        <Reveal>
          <div className="relative mx-auto max-w-2xl text-center">
            <span
              aria-hidden="true"
              className="bg-gold mx-auto mb-5 block h-px w-12"
            />
            <Stack gap="md" align="center">
              <Eyebrow>{t("eyebrow")}</Eyebrow>
              <Heading level={2} tone="inverse">
                {t("title")}
              </Heading>
              <Text size="lg" tone="inverse" className="opacity-70">
                {t("description")}
              </Text>
            </Stack>
          </div>
        </Reveal>

        <SectorGrid
          items={items}
          exploreLabel={t("exploreSector")}
          className="mt-16 lg:mt-20 lg:grid-cols-4"
        />

        <Reveal delay={0.1}>
          <div className="mt-12 flex justify-center lg:mt-14">
            <Link
              href="/sectors"
              className="text-gold group inline-flex items-center gap-1.5 text-sm font-semibold"
            >
              {t("viewAllSectors")}
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
              />
            </Link>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
