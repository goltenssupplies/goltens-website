import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { LegalDocument, type LegalSection } from "@/components/legal/LegalDocument";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/metadata";
import { contactEmail, siteUrl } from "@/lib/site";
import { breadcrumbJsonLd } from "@/lib/structured-data";

interface CookiePolicyPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: CookiePolicyPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.cookiePolicy" });

  return buildMetadata({
    locale: locale as Locale,
    path: "/cookie-policy",
    title: t("title"),
    description: t("description"),
  });
}

export default async function CookiePolicyPage({
  params,
}: CookiePolicyPageProps) {
  const { locale } = await params;
  const t = await getTranslations("cookiePolicy");
  const tNav = await getTranslations("nav");

  const sections = (t.raw("sections") as LegalSection[]).map((section) => ({
    ...section,
    body: section.body.replace("{email}", contactEmail),
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: tNav("home"), url: `${siteUrl}/${locale}` },
              { name: t("title"), url: `${siteUrl}/${locale}/cookie-policy` },
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
