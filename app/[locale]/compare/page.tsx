import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { ComparisonView } from "@/components/products/ComparisonView";
import { PremiumDarkSection } from "@/components/ui/PremiumDarkSection";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { siteUrl } from "@/lib/site";

interface ComparePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: ComparePageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "compare" });

  return buildMetadata({
    locale: locale as Locale,
    path: "/compare",
    title: t("title"),
    description: t("description"),
    noIndex: true,
  });
}

/**
 * `/compare` — the Product Comparison Engine's review surface. Selection
 * state lives entirely client-side (`ComparisonContext`, `localStorage`),
 * so this server component only supplies metadata/JSON-LD/page chrome;
 * `ComparisonView` renders the actual comparison.
 */
export default async function ComparePage({ params }: ComparePageProps) {
  const { locale } = await params;
  const t = await getTranslations("compare");
  const tNav = await getTranslations("nav");

  const pageUrl = `${siteUrl}/${locale}/compare`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: tNav("home"), url: `${siteUrl}/${locale}` },
              { name: t("title"), url: pageUrl },
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
        <ComparisonView />
      </PremiumDarkSection>
    </>
  );
}
