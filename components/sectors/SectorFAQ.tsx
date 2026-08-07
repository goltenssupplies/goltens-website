import { ArrowRight } from "lucide-react";

import { Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { Text } from "@/components/ui/Text";

const STAGGER_SECONDS = 0.04;

export interface SectorFAQItem {
  question: string;
  answer: string;
}

export interface SectorFAQProps {
  title: string;
  items: SectorFAQItem[];
}

/**
 * FAQ accordion (`<details>/<summary>` — accessible, keyboard-operable,
 * zero new dependency). The page resolves `items` before rendering this: a
 * sector's own `faqs` when defined, or a shared generic default set
 * otherwise — this component doesn't know or care which, and always
 * receives a non-empty list so the page's `faqJsonLd` (rendered separately
 * by the page) is always genuinely populated.
 */
export function SectorFAQ({ title, items }: SectorFAQProps) {
  return (
    <div>
      <Reveal>
        <Heading level={2} tone="inverse" className="mb-10 lg:mb-12">
          {title}
        </Heading>
      </Reveal>
      <div className="mx-auto flex max-w-3xl flex-col gap-3">
        {items.map((item, index) => (
          <Reveal key={item.question} delay={index * STAGGER_SECONDS}>
            <details className="group border-canvas/10 bg-canvas/[0.04] rounded-[16px] border p-6 open:pb-6">
              <summary className="text-canvas flex cursor-pointer list-none items-center justify-between gap-4 font-medium marker:content-none">
                {item.question}
                <ArrowRight
                  aria-hidden="true"
                  className="text-gold size-4 shrink-0 rotate-90 transition-transform duration-300 group-open:-rotate-90"
                />
              </summary>
              <Text tone="inverse" className="mt-4 opacity-75">
                {item.answer}
              </Text>
            </details>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
