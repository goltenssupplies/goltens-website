import { getLocale, getTranslations } from "next-intl/server";
import { ArrowRight, Briefcase, Globe, Layers, Truck } from "lucide-react";

import { BrandCTA } from "@/components/brands/BrandCTA";
import { ProcurementCategoryCard } from "@/components/brands/ProcurementCategoryCard";
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

// The 6 sectors this section highlights — a curated, homepage-only subset
// (every sector still has its own full page and appears on `/sectors`
// regardless of whether it's included here). Real titles/descriptions are
// read from `data/sectors.ts`, not duplicated here.
const HIGHLIGHTED_SECTOR_SLUGS = [
  "fire-protection",
  "industrial-equipment",
  "electrical-energy",
  "heavy-equipment",
  "industrial-chemicals",
  "healthcare",
] as const;

const STAGGER_SECONDS = 0.08;

// Deliberately no invented numbers ("25+ ...", "1000+ ...") — no such
// figures are confirmed anywhere in this codebase, and the project's
// standing rule is never to fabricate statistics. Same claims as the
// brief's examples, stated honestly without counts.
const STATS = [
  { icon: Globe, labelKey: "statGlobalNetwork" },
  { icon: Layers, labelKey: "statProductRange" },
  { icon: Briefcase, labelKey: "statProjects" },
  { icon: Truck, labelKey: "statDelivery" },
] as const;

/**
 * "Global Procurement Network" — the homepage section formerly named
 * "Global Brands." GOLTENS is a general supplies/procurement company, not
 * an agent for any manufacturer, so no brand or manufacturer name appears
 * anywhere in this section: it leads with a stats strip and 6
 * procurement-capability cards (`ProcurementCategoryCard`), each linking to
 * that capability's own real sector page. Same drop-in component
 * name/import path as before, so both the homepage and `/about` (which
 * already render `<GlobalBrands />`) pick this up unchanged. `bg-primary` +
 * the thin gold top accent line + `.bg-grid-pattern` texture are kept — the
 * same dark treatment the Footer uses, so the homepage's dark sections
 * continue to read as one consistent language even though the content
 * inside changed.
 */
export interface GlobalBrandsProps {
  /** Set to `false` to omit the trailing `BrandCTA` band — used on the homepage, which has its own single closing CTA further down the page and would otherwise show two "Request a Quote" bands back to back. Defaults to `true`, unchanged for every other caller (`/about`). */
  showCta?: boolean;
}

export async function GlobalBrands({ showCta = true }: GlobalBrandsProps = {}) {
  const locale = (await getLocale()) as Locale;
  const isArabic = locale === "ar";
  const t = await getTranslations("brands");

  const categoryItems = HIGHLIGHTED_SECTOR_SLUGS.map((slug) =>
    getSectorBySlug(slug),
  )
    .filter(
      (sector): sector is NonNullable<typeof sector> => sector !== undefined,
    )
    .map((sector) => ({
      sectorSlug: sector.slug,
      title: isArabic ? sector.title_ar : sector.title_en,
      description: isArabic ? sector.description_ar : sector.description_en,
      icon: sector.icon,
    }));

  return (
    <>
      <Section
        id="global-brands"
        className="bg-primary text-canvas relative overflow-hidden py-[90px] sm:py-[90px]"
      >
        <div
          aria-hidden="true"
          className="bg-accent absolute inset-x-0 top-0 h-px"
        />
        <div
          aria-hidden="true"
          className="bg-grid-pattern text-canvas/[0.03] pointer-events-none absolute inset-0"
        />

        <Container className="relative">
          <Reveal>
            <Stack
              gap="md"
              align="center"
              className="mx-auto max-w-2xl text-center"
            >
              <Eyebrow>{t("eyebrow")}</Eyebrow>
              <Heading
                level={2}
                className="text-canvas tracking-wide uppercase"
              >
                {t("title")}
              </Heading>
              <Text size="lg" className="text-canvas opacity-80">
                {t("description")}
              </Text>
            </Stack>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="border-canvas/10 mt-14 grid grid-cols-2 gap-6 border-y py-8 sm:grid-cols-4 lg:mt-16">
              {STATS.map(({ icon: Icon, labelKey }) => (
                <Stack
                  key={labelKey}
                  align="center"
                  gap="xs"
                  className="text-center"
                >
                  <Icon aria-hidden="true" className="text-gold size-6" />
                  <Text
                    size="sm"
                    weight="medium"
                    className="text-canvas opacity-80"
                  >
                    {t(labelKey)}
                  </Text>
                </Stack>
              ))}
            </div>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {categoryItems.map((item, index) => (
              <ProcurementCategoryCard
                key={item.sectorSlug}
                item={item}
                viewCapabilityLabel={t("viewCapability")}
                delay={index * STAGGER_SECONDS}
              />
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-10 flex justify-center">
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

      {showCta && (
        <BrandCTA
          title={t("ctaTitle")}
          description={t("ctaDescription")}
          requestQuoteLabel={t("requestQuote")}
          contactProcurementTeamLabel={t("contactProcurementTeam")}
        />
      )}
    </>
  );
}
