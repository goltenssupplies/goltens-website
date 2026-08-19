import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { RfqCartView } from "@/components/rfq/RfqCartView";
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
 * `/rfq` — "Request a Quote". Shares the exact visual system and two-column
 * layout as `/contact` (large landscape photo + quick-contact cards pinned
 * to the physical left, the request form pinned to the physical right —
 * see that page's comment for the `dir` trick behind the fixed placement),
 * with `RfqCartView` (the itemized cart + `RfqForm`, or the honest empty
 * state when the cart has nothing in it) standing in for `ContactForm` on
 * the right. Cart state lives entirely client-side (`RfqCartContext`), so
 * this server component only supplies metadata/JSON-LD/page chrome and the
 * shared photo column.
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
            <RfqCartView />
          </ContactQuoteSection>
        </Container>
      </Section>
    </>
  );
}
