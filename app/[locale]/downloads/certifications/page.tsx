import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ShieldCheck } from "lucide-react";

import { CatalogueLibrary } from "@/components/products/CatalogueLibrary";
import { EmptyState } from "@/components/ui/EmptyState";
import { PremiumDarkSection } from "@/components/ui/PremiumDarkSection";
import { redirect } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import {
  buildCatalogueLibraryItems,
  getCatalogueLibrarySectors,
} from "@/lib/catalogue-library";
import { DOWNLOADS_CENTER_ENABLED } from "@/lib/feature-flags";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { siteUrl } from "@/lib/site";

interface CertificationsPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: CertificationsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "downloads.certifications",
  });

  return buildMetadata({
    locale: locale as Locale,
    path: "/downloads/certifications",
    title: t("title"),
    description: t("description"),
    noIndex: !DOWNLOADS_CENTER_ENABLED,
  });
}

/**
 * `/downloads/certifications` — the Certifications Library:
 * `getAllProductCatalogues()` pre-filtered to `kind: "certificate"`. No
 * product currently has a real certificate on file (every `catalogues`
 * entry across the Product Engine is `kind: "datasheet"` today), so this
 * page honestly renders its empty-library state rather than inventing
 * certificates — the same "no fabrication" rule as every other library
 * on this site. It starts serving real cards the moment a product adds
 * one, with no component change.
 *
 * Temporary hold (`lib/feature-flags.ts`): redirects to `/sectors` while
 * `DOWNLOADS_CENTER_ENABLED` is `false` — see `app/[locale]/downloads/page.tsx`.
 */
export default async function CertificationsPage({
  params,
}: CertificationsPageProps) {
  const { locale } = await params;
  const localeTyped = locale as Locale;

  if (!DOWNLOADS_CENTER_ENABLED) {
    redirect({ href: "/sectors", locale: localeTyped });
  }

  const t = await getTranslations("downloads.certifications");
  const tShared = await getTranslations("downloads");
  const tNav = await getTranslations("nav");
  const tDownloadsCenter = await getTranslations("downloads.center");

  const pageUrl = `${siteUrl}/${locale}/downloads/certifications`;

  const items = buildCatalogueLibraryItems(localeTyped).filter(
    (item) => item.kind === "certificate",
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
            icon={<ShieldCheck aria-hidden="true" className="size-10" />}
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
