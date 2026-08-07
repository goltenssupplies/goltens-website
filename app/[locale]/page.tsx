import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { GlobalBrands } from "@/components/sections/home/GlobalBrands";
import { Hero } from "@/components/sections/home/Hero";
import { Sectors } from "@/components/sections/home/Sectors";
import { WhyChooseUs } from "@/components/sections/home/WhyChooseUs";
import { Button } from "@/components/ui/Button";
import { buttonVariants } from "@/components/ui/button-variants";
import { CTA } from "@/components/ui/CTA";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/metadata";
import { contactEmail } from "@/lib/site";
import { cn } from "@/lib/utils";

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
 * The homepage's single closing CTA — deliberately the only conversion
 * band after `GlobalBrands` (rendered with `showCta={false}` here so its
 * own trailing `BrandCTA` doesn't duplicate this one immediately above
 * `WhyChooseUs`, which has no CTA of its own). Copy is distinct from the
 * Hero's own CTA wording by design.
 */
export default async function HomePage() {
  const t = await getTranslations("finalCta");

  return (
    <>
      <Hero />
      <Sectors />
      <GlobalBrands showCta={false} />
      <WhyChooseUs />
      <CTA
        title={t("title")}
        description={t("description")}
        actions={
          <>
            <Button href="/contact" variant="accent" size="lg">
              {t("requestQuote")}
            </Button>
            <a
              href={`mailto:${contactEmail}`}
              className={cn(
                buttonVariants({ variant: "secondary", size: "lg" }),
                "border-canvas/40 text-canvas hover:bg-canvas/10",
              )}
            >
              {t("emailProcurementTeam")}
            </a>
          </>
        }
      />
    </>
  );
}
