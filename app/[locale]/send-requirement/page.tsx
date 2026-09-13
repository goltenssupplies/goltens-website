import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { RequirementForm } from "@/components/rfq/RequirementForm";
import { ContactQuoteSection } from "@/components/sections/contact/ContactQuoteSection";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Stack } from "@/components/ui/Stack";
import { Text } from "@/components/ui/Text";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { siteUrl } from "@/lib/site";

interface SendRequirementPageProps {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ product?: string }>;
}

export async function generateMetadata({
  params,
}: SendRequirementPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "sendRequirement" });

  return buildMetadata({
    locale: locale as Locale,
    path: "/send-requirement",
    title: t("title"),
    description: t("description"),
    noIndex: true,
  });
}

/**
 * `/send-requirement` — "Send Your Requirement": the product-agnostic
 * counterpart to `/rfq` (which needs at least one catalog product added to
 * a cart first). Shares the exact visual system and two-column layout as
 * `/contact` and `/rfq` (`ContactQuoteSection`), with `RequirementForm`
 * standing in for `ContactForm`/`RfqCartView` on the physical-right column.
 *
 * `?product=` is an optional, purely cosmetic prefill for the form's
 * "Product / Part Number" field (e.g. from a product page's secondary
 * entry point) — never trusted as anything other than user-editable text,
 * and never used to look up a real product record.
 */
export default async function SendRequirementPage({
  params,
  searchParams,
}: SendRequirementPageProps) {
  const { locale } = await params;
  const { product } = await searchParams;
  const t = await getTranslations("sendRequirement");
  const tNav = await getTranslations("nav");

  const pageUrl = `${siteUrl}/${locale}/send-requirement`;

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
      <Section
        spacing="lg"
        className="relative overflow-hidden bg-[#F5F6F8] pt-36 lg:pt-44"
      >
        <div
          aria-hidden="true"
          className="bg-grid-pattern text-ink/[0.035] pointer-events-none absolute inset-0"
        />

        <Container className="relative">
          <Reveal>
            <Stack gap="md">
              <Heading level={1} size={1} tone="ink">
                {t("title")}
              </Heading>
              <span
                aria-hidden="true"
                className="bg-gold h-[3px] w-16 rounded-full"
              />
              <Text size="lg" tone="muted" className="max-w-lg">
                {t("description")}
              </Text>
            </Stack>
          </Reveal>

          <ContactQuoteSection
            locale={locale as Locale}
            ratio="balanced"
            className="mt-16"
          >
            <RequirementForm defaultProductPartNumber={product ?? ""} />
          </ContactQuoteSection>
        </Container>
      </Section>
    </>
  );
}
