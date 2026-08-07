import { getLocale, getTranslations } from "next-intl/server";

import { SectorGrid } from "@/components/sectors/SectorGrid";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionParticles } from "@/components/ui/SectionParticles";
import { Stack } from "@/components/ui/Stack";
import { Text } from "@/components/ui/Text";
import { getSortedSectors } from "@/data/sectors";
import type { Locale } from "@/i18n/routing";

// Preserves the Hero's sector trust-bar deep links (`#industries-<slug>`)
// for the 3 of its 5 slugs that still have a direct equivalent among the 10
// Procurement Sectors. "industrial" and "universities" have no equivalent
// sector after the Products/Industries merge, so those two links resolve to
// nothing — an accepted consequence of retiring those categories, not a bug.
const ANCHOR_ID_BY_SLUG: Record<string, string> = {
  "government-procurement": "industries-government",
  construction: "industries-contractors",
  healthcare: "industries-healthcare",
};

/**
 * "Procurement Sectors" — the homepage teaser for all 10 sectors, replacing
 * the former `WhatWeDo` (Products) and `Industries` sections. Same
 * `SectorGrid` as `/sectors`, sourced from the same `data/sectors.ts`.
 */
export async function Sectors() {
  const locale = (await getLocale()) as Locale;
  const isArabic = locale === "ar";
  const t = await getTranslations("sectors");
  const items = getSortedSectors().map((sector) => ({
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
      className="relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/20"
      />
      <div
        aria-hidden="true"
        className="bg-gold/[0.07] pointer-events-none absolute -top-32 -left-32 size-[28rem] rounded-full blur-3xl"
      />
      <div
        aria-hidden="true"
        className="bg-gold/[0.05] pointer-events-none absolute -right-24 -bottom-24 size-[26rem] rounded-full blur-3xl"
      />
      <div
        aria-hidden="true"
        className="bg-dot-pattern text-gold/[0.06] pointer-events-none absolute inset-0"
      />
      <SectionParticles />

      <Container className="relative">
        <Reveal>
          <div className="relative mx-auto max-w-2xl text-center">
            <div
              aria-hidden="true"
              className="bg-gold/10 pointer-events-none absolute top-1/2 left-1/2 -z-10 h-56 w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
            />
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
          anchorIdBySlug={ANCHOR_ID_BY_SLUG}
          className="mt-16 lg:mt-20"
        />
      </Container>
    </Section>
  );
}
