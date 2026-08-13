import { ContactForm } from "@/components/sections/contact/ContactForm";
import { ContactQuoteSection } from "@/components/sections/contact/ContactQuoteSection";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import type { Locale } from "@/i18n/routing";

export interface SectorQuoteCTAProps {
  id: string;
  locale: Locale;
  title: string;
  subtitle: string;
  defaultProductCategory: string;
}

/**
 * "Request Quote" — the site's one approved contact/quote row
 * (`ContactQuoteSection`, the same layout `/contact` and `/rfq` use: the
 * photo + its three quick-contact cards pinned to the physical left) with
 * a real enterprise quotation form (`ContactForm variant="enterprise"`,
 * the same validated Resend pipeline `/contact` uses, not a second/fake
 * form) pinned to the physical right, in the same light `canvas` section
 * treatment `/contact` already uses.
 */
export function SectorQuoteCTA({
  id,
  locale,
  title,
  subtitle,
  defaultProductCategory,
}: SectorQuoteCTAProps) {
  return (
    <Section
      id={id}
      spacing="lg"
      className="relative scroll-mt-20 overflow-hidden bg-[#F5F6F8]"
    >
      <div
        aria-hidden="true"
        className="bg-grid-pattern text-ink/[0.035] pointer-events-none absolute inset-0"
      />
      <Container width="full" className="relative max-w-[100rem]">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Heading level={2} size={2} tone="ink">
              {title}
            </Heading>
            <Text size="lg" tone="muted" className="mx-auto mt-4 max-w-xl">
              {subtitle}
            </Text>
          </Reveal>
        </div>

        <ContactQuoteSection
          locale={locale}
          ratio="photo-lead"
          className="mt-12"
        >
          <ContactForm
            variant="enterprise"
            defaultProductCategory={defaultProductCategory}
          />
        </ContactQuoteSection>
      </Container>
    </Section>
  );
}
