import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import {
  Award,
  BadgeCheck,
  ClipboardList,
  Handshake,
  Search,
  ShieldCheck,
  Truck,
} from "lucide-react";

import { SectorGrid } from "@/components/sectors/SectorGrid";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CTA } from "@/components/ui/CTA";
import { Heading } from "@/components/ui/Heading";
import { PremiumDarkSection } from "@/components/ui/PremiumDarkSection";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { getAllSolutions } from "@/data/solutions";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { siteUrl } from "@/lib/site";

interface SolutionsPageProps {
  params: Promise<{ locale: string }>;
}

interface ProcessStep {
  title: string;
  description: string;
}

interface Differentiator {
  title: string;
  description: string;
}

// One icon per stage/point, in the fixed order the copy defines them —
// same convention as the homepage's `Capabilities`/`WhyChooseUs` icon maps.
const PROCESS_ICONS = [ClipboardList, Search, Truck, ShieldCheck];
const DIFFERENTIATOR_ICONS = [BadgeCheck, Award, Handshake];
const STAGGER_SECONDS = 0.1;

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
 * `/solutions` — GOLTENS' procurement value proposition: how the company
 * helps a client (process + differentiators), answering "how do you help
 * me?" rather than `/sectors`'s "who do you serve?". Hero, a project-type
 * card grid (real links into every `/solutions/[slug]` detail page — the
 * only route that lists them, so this grid is their one real entry point
 * from site navigation), "How We Provide the Solution", "Why GOLTENS", plus
 * one closing CTA — no separate quote/statement section (the
 * quality-and-credibility message lives once, inside the "Why GOLTENS"
 * point, not repeated elsewhere). The card grid reuses `SectorCard`/
 * `SectorGrid` via `hrefBase="/solutions"`, exactly as both components'
 * own doc comments already anticipated — no new card system.
 */
export default async function SolutionsPage({ params }: SolutionsPageProps) {
  const { locale } = await params;
  const isArabic = (locale as Locale) === "ar";
  const t = await getTranslations("solutions");
  const tNav = await getTranslations("nav");
  const tCommon = await getTranslations("common");

  const processSteps = t.raw("processSteps") as ProcessStep[];
  const differentiators = t.raw("differentiators") as Differentiator[];
  const solutionItems = getAllSolutions().map((solution) => ({
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
                name: t("breadcrumbLabel"),
                url: `${siteUrl}/${locale}/solutions`,
              },
            ]),
          ),
        }}
      />

      {/* Section 1 — Hero: short eyebrow + heading + one short supporting
          line, via the same `PremiumDarkSection` header `/sectors` uses. */}
      <PremiumDarkSection
        topPadding
        header={{
          eyebrow: t("eyebrow"),
          title: t("listingTitle"),
          description: t("listingDescription"),
        }}
      >
        {/* Section 1b — Project Solutions grid: every `/solutions/[slug]`
            detail page, as a real linked card (`SectorGrid`/`SectorCard`
            reused via `hrefBase="/solutions"`). This is the one place in
            site navigation a visitor (or a crawler) can reach any solution
            detail page from — without it, those 11 pages exist only in the
            sitemap. */}
        <div className="mx-auto mb-14 max-w-2xl text-center lg:mb-16">
          <Heading level={2} size={3} tone="inverse">
            {t("solutionsGridTitle")}
          </Heading>
        </div>
        <SectorGrid
          items={solutionItems}
          exploreLabel={t("exploreSolution")}
          hrefBase="/solutions"
          className="mb-20 lg:mb-24"
        />

        {/* Section 2 — "How We Provide the Solution": 4 short items, one
            horizontal row with a connector line on desktop, a vertical list
            on mobile. */}
        <div className="mx-auto max-w-2xl text-center">
          <Heading level={2} size={3} tone="inverse">
            {t("processTitle")}
          </Heading>
        </div>

        <div className="relative mt-14 lg:mt-16">
          <div className="relative hidden lg:block">
            <div
              aria-hidden="true"
              className="bg-accent/25 absolute inset-x-[10%] top-8 h-px"
            />
            <div className="relative flex items-start">
              {processSteps.map((step, index) => {
                const Icon = PROCESS_ICONS[index];
                return (
                  <Reveal
                    key={step.title}
                    delay={index * STAGGER_SECONDS}
                    className="flex flex-1 flex-col items-center text-center"
                  >
                    <span className="border-accent/30 bg-accent/10 relative z-10 flex size-14 items-center justify-center rounded-full border">
                      {Icon && (
                        <Icon
                          aria-hidden="true"
                          className="text-accent size-6"
                        />
                      )}
                    </span>
                    <div className="mt-4 px-3">
                      <Text weight="semibold" tone="inverse">
                        {step.title}
                      </Text>
                      <Text
                        size="sm"
                        tone="inverse"
                        className="mx-auto mt-1.5 max-w-[190px] leading-relaxed opacity-70"
                      >
                        {step.description}
                      </Text>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* Mobile/tablet — vertical list, connector running down the icon
              column. */}
          <div className="lg:hidden">
            {processSteps.map((step, index) => {
              const Icon = PROCESS_ICONS[index];
              const isLast = index === processSteps.length - 1;
              return (
                <Reveal
                  key={step.title}
                  delay={index * STAGGER_SECONDS}
                  className="relative flex items-start gap-4 pb-8 last:pb-0"
                >
                  {!isLast && (
                    <span
                      aria-hidden="true"
                      className="bg-canvas/15 absolute start-7 top-14 h-[calc(100%-3.5rem)] w-px"
                    />
                  )}
                  <span className="border-accent/30 bg-accent/10 relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full border">
                    {Icon && (
                      <Icon aria-hidden="true" className="text-accent size-6" />
                    )}
                  </span>
                  <div className="pt-2.5">
                    <Text weight="semibold" tone="inverse">
                      {step.title}
                    </Text>
                    <Text
                      size="sm"
                      tone="inverse"
                      className="mt-1 leading-relaxed opacity-70"
                    >
                      {step.description}
                    </Text>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </PremiumDarkSection>

      {/* Section 3 — "Why GOLTENS": 3 concise points, icon + short title +
          one short line, no card/box — same restrained treatment the
          homepage's `WhyChooseUs` uses, reimplemented here since that
          component is scoped to the homepage. */}
      <Section
        background="stone"
        spacing="lg"
        className="border-border border-y"
      >
        <Container>
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <Heading level={2} size={3}>
                {t("differentiatorsTitle")}
              </Heading>
            </div>
          </Reveal>

          <div className="mx-auto mt-12 grid max-w-4xl gap-x-10 gap-y-10 sm:grid-cols-3 lg:mt-14">
            {differentiators.map((item, index) => {
              const Icon = DIFFERENTIATOR_ICONS[index];
              return (
                <Reveal
                  key={item.title}
                  delay={index * STAGGER_SECONDS}
                  className="flex flex-col items-center text-center"
                >
                  {Icon && (
                    <span className="border-accent/30 bg-canvas flex size-14 shrink-0 items-center justify-center rounded-full border shadow-sm">
                      <Icon aria-hidden="true" className="text-accent size-6" />
                    </span>
                  )}
                  <Text weight="semibold" className="mt-4">
                    {item.title}
                  </Text>
                  <Text
                    tone="muted"
                    size="sm"
                    className="mt-1.5 max-w-[220px] leading-relaxed"
                  >
                    {item.description}
                  </Text>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* One compact, closing CTA — the site's shared `CTA` band. */}
      <CTA
        title={t("finalCtaTitle")}
        description={t("finalCtaDescription")}
        actions={
          <Button href="/contact" variant="accent" size="lg">
            {tCommon("requestQuotation")}
          </Button>
        }
      />
    </>
  );
}
