import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Stack } from "@/components/ui/Stack";
import { Text } from "@/components/ui/Text";

export interface LegalSection {
  heading: string;
  body: string;
}

export interface LegalDocumentProps {
  eyebrow: string;
  title: string;
  /** e.g. "Last updated: August 5, 2026" — already formatted by the caller. */
  updated: string;
  intro: string;
  sections: LegalSection[];
}

/**
 * Shared shell for every legal page (Privacy Policy, Terms & Conditions,
 * Disclaimer, Cookie Policy, Accessibility Statement) — same primitives
 * every other page already uses (`Section`/`Container`/`Eyebrow`/`Heading`/
 * `Text`), just composed as a title + intro + a list of short, individually
 * headed sections rather than one long paragraph, so a real document reads
 * as one instead of a wall of text. No visual system beyond what already
 * exists elsewhere on the site.
 */
export function LegalDocument({
  eyebrow,
  title,
  updated,
  intro,
  sections,
}: LegalDocumentProps) {
  return (
    <Section spacing="lg" className="pt-36 lg:pt-44">
      <Container width="narrow">
        <Reveal>
          <Stack gap="md" className="mb-12">
            <Eyebrow>{eyebrow}</Eyebrow>
            <Heading level={1} size={2}>
              {title}
            </Heading>
            <Text size="sm" tone="muted">
              {updated}
            </Text>
            <Text size="lg" tone="muted" className="leading-[1.8]">
              {intro}
            </Text>
          </Stack>
        </Reveal>

        <Stack gap="xl">
          {sections.map((section, index) => (
            <Reveal key={section.heading} delay={Math.min(index * 0.03, 0.3)}>
              <Stack gap="sm">
                <Heading level={2} size={4}>
                  {section.heading}
                </Heading>
                <Text tone="muted" className="leading-[1.8]">
                  {section.body}
                </Text>
              </Stack>
            </Reveal>
          ))}
        </Stack>
      </Container>
    </Section>
  );
}
