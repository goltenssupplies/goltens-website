import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { FileText } from "lucide-react";

import { CatalogueLibrary } from "@/components/products/CatalogueLibrary";
import { EmptyState } from "@/components/ui/EmptyState";
import { PremiumDarkSection } from "@/components/ui/PremiumDarkSection";
import type { Locale } from "@/i18n/routing";
import {
  buildCatalogueLibraryItems,
  getCatalogueLibrarySectors,
} from "@/lib/catalogue-library";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { siteUrl } from "@/lib/site";

interface DatasheetsPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: DatasheetsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "downloads.datasheets" });

  return buildMetadata({
    locale: locale as Locale,
    path: "/downloads/datasheets",
    title: t("title"),
    description: t("description"),
  });
}

/**
 * `/downloads/datasheets` — the Datasheet Library: `getAllProductCatalogues()`
 * pre-filtered to `kind: "datasheet"`. Same `CatalogueLibrary` component as
 * the Download Center, with the kind filter hidden (there's only one kind
 * here by construction).
 */
export default async function DatasheetsPage({ params }: DatasheetsPageProps) {
  const { locale } = await params;
  const localeTyped = locale as Locale;

  const t = await getTranslations("downloads.datasheets");
  const tShared = await getTranslations("downloads");
  const tNav = await getTranslations("nav");
  const tDownloadsCenter = await getTranslations("downloads.center");

  const pageUrl = `${siteUrl}/${locale}/downloads/datasheets`;

  const items = buildCatalogueLibraryItems(localeTyped).filter(
    (item) => item.kind === "datasheet",
  );
  const sectors = getCatalogueLibrarySectors(items, localeTyped);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: tNav("home"), url: `${siteUrl}/${locale}` },
              {
                name: tDownloadsCenter("title"),
                url: `${siteUrl}/${locale}/downloads`,
              },
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
        {items.length === 0 ? (
          <EmptyState
            tone="inverse"
            icon={<FileText aria-hidden="true" className="size-10" />}
            title={t("emptyLibraryTitle")}
            description={t("emptyLibraryBody")}
          />
        ) : (
          <CatalogueLibrary
            items={items}
            sectors={sectors}
            searchLabel={tShared("searchLabel")}
            searchPlaceholder={tShared("searchPlaceholder")}
            filterAllLabel={tShared("filterAllLabel")}
            downloadLabel={tShared("downloadLabel")}
            comingSoonLabel={tShared("comingSoonLabel")}
            noResultsTitle={tShared("noResultsTitle")}
            noResultsDescription={tShared("noResultsDescription")}
          />
        )}
      </PremiumDarkSection>
    </>
  );
}
