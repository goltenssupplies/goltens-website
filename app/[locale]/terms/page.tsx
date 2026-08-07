import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { LegalDocument, type LegalSection } from "@/components/legal/LegalDocument";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/metadata";
import { contactEmail, contactPhoneDisplay, siteUrl } from "@/lib/site";
import { breadcrumbJsonLd } from "@/lib/structured-data";

interface TermsPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: TermsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.terms" });

  return buildMetadata({
    locale: locale as Locale,
    path: "/terms",
    title: t("title"),
    description: t("description"),
  });
}

export default async function TermsPage({ params }: TermsPageProps) {
  const { locale } = await params;
  const t = await getTranslations("terms");
  const tNav = await getTranslations("nav");

  const sections = (t.raw("sections") as LegalSection[]).map((section) => ({
    ...section,
    body: section.body
      .replace("{email}", contactEmail)
      .replace("{phone}", contactPhoneDisplay),
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: tNav("home"), url: `${siteUrl}/${locale}` },
              { name: t("title"), url: `${siteUrl}/${locale}/terms` },
            ]),
          ),
        }}
      />
      <LegalDocument
        eyebrow={t("eyebrow")}
        title={t("title")}
        updated={t("updated")}
        intro={t("intro")}
        sections={sections}
      />
    </>
  );
}
