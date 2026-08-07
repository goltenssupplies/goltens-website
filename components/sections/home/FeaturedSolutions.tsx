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
import { getAllSolutions } from "@/data/solutions";
import type { Locale } from "@/i18n/routing";

/**
 * "Featured Project Solutions" — a homepage-ready teaser for the Project
 * Solutions Platform, built to the exact same section chrome and
 * `SectorGrid` (via `hrefBase="/solutions"`) `components/sections/home/Sectors.tsx`
 * already uses. **Not yet imported into `app/[locale]/page.tsx`** — this
 * phase only prepares the component per spec; wiring it into the homepage
 * (and deciding which solutions to feature) is a later, separate decision.
 */
export async function FeaturedSolutions() {
  const locale = (await getLocale()) as Locale;
  const isArabic = locale === "ar";
  const t = await getTranslations("solutions");
  const items = getAllSolutions().map((solution) => ({
    slug: solution.slug,
    title: isArabic ? solution.title_ar : solution.title_en,
    description: isArabic ? solution.description_ar : solution.description_en,
    image: solution.heroImage,
    icon: solution.icon,
  }));

  return (
    <Section
      id="solutions"
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
                {t("listingTitle")}
              </Heading>
              <Text size="lg" tone="inverse" className="opacity-70">
                {t("listingDescription")}
              </Text>
            </Stack>
          </div>
        </Reveal>

        <SectorGrid
          items={items}
          exploreLabel={t("exploreSolution")}
          hrefBase="/solutions"
          className="mt-16 lg:mt-20"
        />
      </Container>
    </Section>
  );
}
