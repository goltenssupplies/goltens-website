import { ContactForm } from "@/components/sections/contact/ContactForm";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";

export interface SectorQuoteCTAProps {
  id: string;
  title: string;
  subtitle: string;
  defaultProductCategory: string;
}

/**
 * "Request Quote" — a real enterprise quotation form (`ContactForm
 * variant="enterprise"`, the same validated Resend pipeline `/contact`
 * uses, not a second/fake form), in the same light `canvas` section
 * treatment `/contact` already uses — not a new dark variant, matching the
 * existing design language exactly.
 */
export function SectorQuoteCTA({
  id,
  title,
  subtitle,
  defaultProductCategory,
}: SectorQuoteCTAProps) {
  return (
    <Section
      id={id}
      spacing="lg"
      className="relative overflow-hidden bg-[#F5F6F8] scroll-mt-20"
    >
      <div
        aria-hidden="true"
        className="bg-grid-pattern text-ink/[0.035] pointer-events-none absolute inset-0"
      />
      <Container className="relative">
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
        <Reveal delay={0.1} className="mx-auto mt-12 max-w-2xl">
          <ContactForm
            variant="enterprise"
            defaultProductCategory={defaultProductCategory}
          />
        </Reveal>
      </Container>
    </Section>
  );
}
