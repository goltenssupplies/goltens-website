import { Info } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";

export interface EquipmentGuideIntroProps {
  eyebrow: string;
  lead: string;
  /** "General guidance, not a list of stocked models" clarification. */
  note: string;
  jumpLinksLabel: string;
  jumpLinks: { id: string; label: string }[];
}

/**
 * Intro strip directly under a sector hero when the sector has an equipment
 * guide: procurement-oriented lead copy, an honest note that the guides are
 * general information, and jump links to the project matrix and each
 * equipment category. Deliberately has no heading of its own — the page's
 * outline starts with the matrix and category H2s below it.
 */
export function EquipmentGuideIntro({
  eyebrow,
  lead,
  note,
  jumpLinksLabel,
  jumpLinks,
}: EquipmentGuideIntroProps) {
  return (
    <Section spacing="sm" background="canvas">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[3fr_2fr] lg:gap-12">
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <Text size="lg" tone="inverse" className="mt-4 max-w-3xl">
              {lead}
            </Text>
            <div className="border-gold/25 bg-gold/[0.06] mt-6 flex max-w-3xl items-start gap-3 rounded-[12px] border p-4">
              <Info
                aria-hidden="true"
                className="text-gold mt-0.5 size-5 shrink-0"
              />
              <Text size="sm" tone="muted">
                {note}
              </Text>
            </div>
          </div>
          <nav aria-label={jumpLinksLabel} className="lg:pt-9">
            <Text
              size="xs"
              weight="semibold"
              tone="muted"
              className="mb-3 tracking-wide uppercase rtl:tracking-normal"
            >
              {jumpLinksLabel}
            </Text>
            <ul className="border-border divide-border divide-y border-y">
              {jumpLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-ink hover:text-gold flex items-center justify-between gap-4 py-3 font-medium transition-colors"
                  >
                    {link.label}
                    <span aria-hidden="true" className="text-gold">
                      ↓
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </Section>
  );
}
