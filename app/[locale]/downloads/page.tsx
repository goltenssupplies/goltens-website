import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { FileText, ShieldCheck } from "lucide-react";

import { CatalogueLibrary } from "@/components/products/CatalogueLibrary";
import { Card, cardGlassHover } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import { PremiumDarkSection } from "@/components/ui/PremiumDarkSection";
import { Reveal } from "@/components/ui/Reveal";
import { Stack } from "@/components/ui/Stack";
import { Text } from "@/components/ui/Text";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import {
  buildCatalogueLibraryItems,
  getCatalogueLibraryKinds,
  getCatalogueLibrarySectors,
} from "@/lib/catalogue-library";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { siteUrl } from "@/lib/site";

interface DownloadsPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: DownloadsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "downloads.center" });

  return buildMetadata({
    locale: locale as Locale,
    path: "/downloads",
    title: t("title"),
    description: t("description"),
  });
}

/**
 * `/downloads` — the Download Center: every `ProductCatalogue` document
 * across the whole Product Engine (`getAllProductCatalogues()`), of any
 * `kind`, in one searchable/filterable library. `/downloads/datasheets`
 * and `/downloads/certifications` are the same data pre-filtered to one
 * kind — see the shortcut cards below.
 */
export default async function DownloadsPage({ params }: DownloadsPageProps) {
  const { locale } = await params;
  const localeTyped = locale as Locale;

  const t = await getTranslations("downloads.center");
  const tShared = await getTranslations("downloads");
  const tKind = await getTranslations("downloads.kind");
  const tNav = await getTranslations("nav");

  const pageUrl = `${siteUrl}/${locale}/downloads`;

  const items = buildCatalogueLibraryItems(localeTyped);
  const kinds = getCatalogueLibraryKinds(items, {
    datasheet: tKind("datasheet"),
    manual: tKind("manual"),
    certificate: tKind("certificate"),
    drawing: tKind("drawing"),
    catalogue: tKind("catalogue"),
  });
  const sectors = getCatalogueLibrarySectors(items, localeTyped);

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
        <Reveal>
          <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Link href="/downloads/datasheets">
              <Card
                variant="glass"
                padding="md"
                className={`border-gold/15 flex items-center gap-4 ${cardGlassHover}`}
              >
                <span
                  aria-hidden="true"
                  className="bg-gold/10 text-gold flex size-11 shrink-0 items-center justify-center rounded-xl"
                >
                  <FileText aria-hidden="true" className="size-5" />
                </span>
                <Stack gap="none">
                  <Heading level={2} size={5} tone="inverse">
                    {tShared("datasheets.title")}
                  </Heading>
                  <Text size="sm" tone="inverse" className="opacity-60">
                    {t("datasheetLibraryCard")}
                  </Text>
                </Stack>
              </Card>
            </Link>
            <Link href="/downloads/certifications">
              <Card
                variant="glass"
                padding="md"
                className={`border-gold/15 flex items-center gap-4 ${cardGlassHover}`}
              >
                <span
                  aria-hidden="true"
                  className="bg-gold/10 text-gold flex size-11 shrink-0 items-center justify-center rounded-xl"
                >
                  <ShieldCheck aria-hidden="true" className="size-5" />
                </span>
                <Stack gap="none">
                  <Heading level={2} size={5} tone="inverse">
                    {tShared("certifications.title")}
                  </Heading>
                  <Text size="sm" tone="inverse" className="opacity-60">
                    {t("certificationLibraryCard")}
                  </Text>
                </Stack>
              </Card>
            </Link>
          </div>
        </Reveal>

        <CatalogueLibrary
          items={items}
          kinds={kinds}
          sectors={sectors}
          searchLabel={tShared("searchLabel")}
          searchPlaceholder={tShared("searchPlaceholder")}
          filterAllLabel={tShared("filterAllLabel")}
          downloadLabel={tShared("downloadLabel")}
          comingSoonLabel={tShared("comingSoonLabel")}
          noResultsTitle={tShared("noResultsTitle")}
          noResultsDescription={tShared("noResultsDescription")}
        />
      </PremiumDarkSection>
    </>
  );
}
