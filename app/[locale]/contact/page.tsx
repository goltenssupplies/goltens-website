import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Briefcase, Globe, ShieldCheck } from "lucide-react";

import { ContactForm } from "@/components/sections/contact/ContactForm";
import { ContactHeroImage } from "@/components/sections/contact/ContactHeroImage";
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

// Paired with `contactPage.features` by index — one premium line icon per
// value point (procurement, global network, quality), rather than a
// generic repeated checkmark.
const FEATURE_ICONS = [Briefcase, Globe, ShieldCheck];

interface ContactPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: ContactPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.contact" });

  return buildMetadata({
    locale: locale as Locale,
    path: "/contact",
    title: t("title"),
    description: t("description"),
  });
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  const t = await getTranslations("contactPage");
  const tNav = await getTranslations("nav");
  const features = t.raw("features") as string[];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: tNav("home"), url: `${siteUrl}/${locale}` },
              { name: tNav("contact"), url: `${siteUrl}/${locale}/contact` },
            ]),
          ),
        }}
      />
      <Section
        spacing="lg"
        className="relative overflow-hidden bg-[#F5F6F8] pt-36 lg:pt-44"
      >
        {/* Premium light corporate surface — a bare-minimum, extremely
          low-opacity engineering-grid texture standing in for a
          "geometric lines" motif, no gradients, no glow, no photo. */}
        <div
          aria-hidden="true"
          className="bg-grid-pattern text-ink/[0.035] pointer-events-none absolute inset-0"
        />

        {/* Full-width industrial intro band — deliberately rendered OUTSIDE
            `Container` (Section/`<main>` have no max-width of their own) so
            it spans the whole page width instead of the constrained content
            column, with its own inner `Container` just for the text
            gutters. Reuses the exact `.bg-industrial-photo` class/DOM
            pattern `Section.tsx` already renders for `background="canvas"`
            elsewhere; `.contact-intro-photo` (globals.css) is a page-scoped
            addition that overrides its blur and wash, since that shared
            class is used by other pages too. Never reaches the form/image
            grid below, which keeps its own separate `Container`. */}
        <Reveal>
          <div className="relative flex min-h-[320px] items-center overflow-hidden lg:min-h-[380px]">
            <div
              aria-hidden="true"
              className="bg-industrial-photo contact-intro-photo absolute inset-0 overflow-hidden"
            />
            <Container className="relative">
              {/* Headline, intro, feature points. No phone numbers,
                  response-time, or shipping promises here — this reads as a
                  corporate contact page, not a marketing CTA. */}
              <Stack gap="xl">
                <Stack gap="md">
                  <Heading level={1} size={1} tone="ink">
                    {t("headline")}
                  </Heading>
                  <span
                    aria-hidden="true"
                    className="bg-gold h-[3px] w-16 rounded-full"
                  />
                  <Text size="lg" tone="muted" className="max-w-lg">
                    {t("subtitle")}
                  </Text>
                </Stack>

                <Stack direction="row" gap="lg" wrap>
                  {features.map((feature, index) => {
                    const FeatureIcon = FEATURE_ICONS[index];
                    return (
                      <Stack
                        key={feature}
                        direction="row"
                        gap="sm"
                        align="center"
                      >
                        <span
                          aria-hidden="true"
                          className="border-gold/30 bg-gold/10 text-gold flex size-10 shrink-0 items-center justify-center rounded-full border"
                        >
                          <FeatureIcon className="size-5" strokeWidth={1.75} />
                        </span>
                        <Text weight="medium">{feature}</Text>
                      </Stack>
                    );
                  })}
                </Stack>
              </Stack>
            </Container>
          </div>
        </Reveal>

        <Container className="relative">
          <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-24">
            {/* RIGHT (visual, under RTL) — the support-team photo + real
              contact details. */}
            <Reveal>
              <ContactHeroImage locale={locale as Locale} />
            </Reveal>

            {/* LEFT (visual, under RTL) — the form itself. */}
            <Reveal delay={0.15}>
              <ContactForm />
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
