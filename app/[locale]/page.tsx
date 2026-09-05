import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { SetFooterBackgroundImage } from "@/components/layout/SetFooterBackgroundImage";
import { Capabilities } from "@/components/sections/home/Capabilities";
import { Hero } from "@/components/sections/home/Hero";
import { Sectors } from "@/components/sections/home/Sectors";
import { WhyChooseUs } from "@/components/sections/home/WhyChooseUs";
import { Button } from "@/components/ui/Button";
import { CTA } from "@/components/ui/CTA";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/metadata";

// Must match `HeroSlideshow`'s own `BACKGROUND_SRC` — kept as a separate
// constant here rather than editing that component, per this task's "don't
// touch the Hero" constraint.
const HOME_HERO_IMAGE = "/images/categories/golten-vip.png";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: HomePageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.home" });

  return buildMetadata({
    locale: locale as Locale,
    path: "",
    title: t("title"),
    description: t("description"),
  });
}

/**
 * The homepage's single closing CTA — deliberately the only conversion band
 * on the page. Copy is distinct from the Hero's own CTA wording by design.
 *
 * Section order: Hero -> Sectors ("What We Supply", curated) -> WhyChooseUs
 * ("Why GOLTENS", 5 points) -> Capabilities ("How We Work", 4 steps) -> this
 * closing CTA. `IndustriesServed` (a plain-text industries list) was removed
 * — it duplicated `Sectors`' own "who we serve" framing right below it.
 * `GlobalBrands` (the former "Global Procurement Network" sector-capability
 * grid) is deliberately not rendered here — it duplicated `Sectors` with a
 * second, differently-curated set of sector cards. It still renders on
 * `/about`, unchanged.
 */
export default async function HomePage() {
  const t = await getTranslations("finalCta");

  return (
    <>
      {/* This photo's own bottom two-thirds (river + city at night) reads as
          almost solid black once cropped to the Footer's much shorter/wider
          band — `objectPosition` biases the crop toward the photo's bright
          sunset-sky/skyline strip instead, which is genuinely visible under
          the same dark scrim every other page's Footer already uses. */}
      <SetFooterBackgroundImage
        image={HOME_HERO_IMAGE}
        objectPosition="50% 20%"
      />
      <Hero />
      <Sectors />
      <WhyChooseUs />
      <Capabilities />
      <CTA
        title={t("title")}
        description={t("description")}
        premium
        actions={
          <Button
            href="/contact"
            variant="accent"
            size="lg"
            className="hover:shadow-[0_0_28px_rgba(166,128,61,0.45)]"
          >
            {t("requestQuote")}
          </Button>
        }
      />
    </>
  );
}
