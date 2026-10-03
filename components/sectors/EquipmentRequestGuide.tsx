import { CheckCircle2 } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { Timeline } from "@/components/ui/Timeline";

export interface EquipmentRequestGuideProps {
  /** Anchor id of the section. */
  id: string;
  title: string;
  intro: string;
  checklist: string[];
  processTitle: string;
  steps: { title: string; description: string }[];
}

/**
 * "What to include in your quotation request" (H2) — the general
 * procurement checklist beside the request-handling process, rendered with
 * the shared `Timeline` (whose steps are H3s). Sits directly above the quote
 * form so the visitor has the checklist in view while filling it in.
 */
export function EquipmentRequestGuide({
  id,
  title,
  intro,
  checklist,
  processTitle,
  steps,
}: EquipmentRequestGuideProps) {
  return (
    <Section
      id={id}
      aria-labelledby={`${id}-title`}
      spacing="lg"
      background="canvas"
      className="scroll-mt-28"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Heading id={`${id}-title`} level={2} size={3} tone="inverse">
              {title}
            </Heading>
            <Text tone="muted" className="mt-4">
              {intro}
            </Text>
            <ul className="mt-8 flex flex-col gap-3">
              {checklist.map((entry) => (
                <li key={entry} className="flex items-start gap-3">
                  <CheckCircle2
                    aria-hidden="true"
                    className="text-gold mt-0.5 size-5 shrink-0"
                  />
                  <Text tone="inverse">{entry}</Text>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Text
              size="xs"
              weight="semibold"
              tone="muted"
              className="mb-6 tracking-wide uppercase rtl:tracking-normal"
            >
              {processTitle}
            </Text>
            <Timeline steps={steps} />
          </div>
        </div>
      </Container>
    </Section>
  );
}
