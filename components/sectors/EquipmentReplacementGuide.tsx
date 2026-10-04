import { CheckCircle2, Info } from "lucide-react";

import { QuotePrefillLink } from "@/components/sectors/QuotePrefillLink";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";

export interface EquipmentReplacementGuideProps {
  /** Anchor id of the section. */
  id: string;
  title: string;
  intro: string;
  /** Ordered stages, existing equipment → quotation. */
  flowLabel: string;
  flow: string[];
  /** What to send — one group for all equipment, then one per family. */
  groups: { title: string; items: string[] }[];
  /** Responsibility note — final equivalence stays with the customer. */
  note: string;
  ctaLabel: string;
  /** Value prefilled into the quote form's product field. */
  prefill: string;
  quoteAnchor: string;
}

/**
 * "Replacing existing equipment?" (H2) — the nameplate-based replacement /
 * equivalent-sourcing path of a sector equipment guide: the ordered stages
 * as a numbered list, what to send per equipment family (H3s), the
 * responsibility note, and a quote link that prefills the form. Takes
 * plain, already-localized props built by the sector page template, per
 * the `components/sectors/*` contract; it never imports `data/*`.
 */
export function EquipmentReplacementGuide({
  id,
  title,
  intro,
  flowLabel,
  flow,
  groups,
  note,
  ctaLabel,
  prefill,
  quoteAnchor,
}: EquipmentReplacementGuideProps) {
  return (
    <Section
      id={id}
      aria-labelledby={`${id}-title`}
      spacing="lg"
      background="canvas"
      className="scroll-mt-28"
    >
      <Container>
        <div className="max-w-3xl">
          <Heading id={`${id}-title`} level={2} size={3} tone="inverse">
            {title}
          </Heading>
          <Text size="lg" tone="muted" className="mt-4">
            {intro}
          </Text>
        </div>

        <Text
          size="xs"
          weight="semibold"
          tone="muted"
          className="mt-10 mb-4 tracking-wide uppercase rtl:tracking-normal"
        >
          {flowLabel}
        </Text>
        <ol className="flex flex-wrap gap-2">
          {flow.map((stage, index) => (
            <li
              key={stage}
              className="border-border text-ink flex items-center gap-2 rounded-sm border bg-white px-3 py-1.5 text-sm"
            >
              <span
                aria-hidden="true"
                className="bg-gold/15 text-ink flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold"
              >
                {(index + 1).toLocaleString("en")}
              </span>
              {stage}
            </li>
          ))}
        </ol>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((group) => (
            <div
              key={group.title}
              className="border-border rounded-[16px] border bg-white p-6 shadow-[0_8px_30px_rgba(30,29,27,0.05)]"
            >
              <Heading level={3} size={5} tone="inverse">
                {group.title}
              </Heading>
              <ul className="mt-4 flex flex-col gap-2.5">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2
                      aria-hidden="true"
                      className="text-gold mt-0.5 size-4 shrink-0"
                    />
                    <Text size="sm" tone="inverse">
                      {item}
                    </Text>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-gold/25 bg-gold/[0.06] mt-8 flex max-w-3xl items-start gap-3 rounded-[12px] border p-4">
          <Info
            aria-hidden="true"
            className="text-gold mt-0.5 size-5 shrink-0"
          />
          <Text size="sm" tone="inverse">
            {note}
          </Text>
        </div>

        <div className="mt-8">
          <QuotePrefillLink href={quoteAnchor} prefill={prefill}>
            {ctaLabel}
          </QuotePrefillLink>
        </div>
      </Container>
    </Section>
  );
}
