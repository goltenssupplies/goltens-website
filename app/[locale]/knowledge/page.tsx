import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import type { KnowledgeCardItem } from "@/components/knowledge/KnowledgeCard";
import {
  KnowledgeExplorer,
  type KnowledgeTypeOption,
} from "@/components/knowledge/KnowledgeExplorer";
import { PremiumDarkSection } from "@/components/ui/PremiumDarkSection";
import { getAllKnowledgeItems } from "@/data/knowledge";
import type { KnowledgeType } from "@/data/knowledge/types";
import type { Locale } from "@/i18n/routing";
import {
  getKnowledgeReadingContent,
  getReadingTimeMinutes,
} from "@/lib/knowledge";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { siteUrl } from "@/lib/site";

const KNOWLEDGE_TYPES: KnowledgeType[] = [
  "article",
  "technical-guide",
  "buying-guide",
  "maintenance-guide",
  "brand-guide",
  "product-comparison",
  "industry-standard",
  "video",
  "case-study",
];

interface KnowledgePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: KnowledgePageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.knowledge" });

  return buildMetadata({
    locale: locale as Locale,
    path: "/knowledge",
    title: t("title"),
    description: t("description"),
  });
}

/**
 * Dedicated `/knowledge` listing page — the Knowledge Platform's hub, one
 * type-filtered grid (`KnowledgeExplorer`) over the full registry
 * (`data/knowledge/`). Not linked from the Navbar this sprint — reachable
 * via the sitemap and every entity page's "Related Knowledge" section.
 */
export default async function KnowledgePage({ params }: KnowledgePageProps) {
  const { locale } = await params;
  const isArabic = (locale as Locale) === "ar";

  const t = await getTranslations("knowledge");
  const tNav = await getTranslations("nav");

  const items: KnowledgeCardItem[] = getAllKnowledgeItems().map((item) => {
    const content = getKnowledgeReadingContent(item, isArabic);

    return {
      slug: item.slug,
      type: item.type,
      title: isArabic ? item.title_ar : item.title_en,
      summary: isArabic ? item.summary_ar : item.summary_en,
      coverImage: item.coverImage,
      typeLabel: t(`types.${item.type}`),
      readingTimeLabel: t("readingTimeLabel", {
        minutes: getReadingTimeMinutes(content),
      }),
    };
  });

  const types: KnowledgeTypeOption[] = KNOWLEDGE_TYPES.map((type) => ({
    value: type,
    label: t(`types.${type}`),
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
                name: t("listingTitle"),
                url: `${siteUrl}/${locale}/knowledge`,
              },
            ]),
          ),
        }}
      />
      <PremiumDarkSection
        topPadding
        header={{
          eyebrow: t("eyebrow"),
          title: t("listingTitle"),
          description: t("listingDescription"),
        }}
      >
        <KnowledgeExplorer
          items={items}
          types={types}
          allLabel={t("filterAllLabel")}
          readMoreLabel={t("readMoreLabel")}
          emptyTitle={t("emptyTitle")}
          emptyBody={t("emptyBody")}
        />
      </PremiumDarkSection>
    </>
  );
}
