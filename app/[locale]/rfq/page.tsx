import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { RfqCartView } from "@/components/rfq/RfqCartView";
import { PremiumDarkSection } from "@/components/ui/PremiumDarkSection";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { siteUrl } from "@/lib/site";

interface RfqPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: RfqPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "rfq" });

  return buildMetadata({
    locale: locale as Locale,
    path: "/rfq",
    title: t("title"),
    description: t("description"),
    noIndex: true,
  });
}

/**
 * `/rfq` — the multi-item RFQ cart's review and submission page. Cart state
 * lives entirely client-side (`RfqCartContext`, `localStorage`), so this
 * server component only supplies metadata/JSON-LD/page chrome;
 * `RfqCartView` renders the itemized list and `RfqForm`.
 */
export default async function RfqPage({ params }: RfqPageProps) {
  const { locale } = await params;
  const t = await getTranslations("rfq");
  const tNav = await getTranslations("nav");

  const pageUrl = `${siteUrl}/${locale}/rfq`;

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
        <RfqCartView />
      </PremiumDarkSection>
    </>
  );
}
