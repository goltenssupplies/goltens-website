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
    <div className="mx-auto max-w-4xl">
      <Reveal>
        <Heading
          level={2}
          tone="inverse"
          className="mb-12 text-center lg:mb-16"
        >
          {title}
        </Heading>
      </Reveal>
      <div className="divide-canvas/10 border-canvas/10 flex flex-col divide-y border-y">
        {items.map((item, index) => (
          <Reveal key={item.question} delay={index * STAGGER_SECONDS}>
            <details className="group py-6 lg:py-7">
              <summary className="text-canvas flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium marker:content-none">
                {item.question}
                <ArrowRight
                  aria-hidden="true"
                  className="text-gold size-4 shrink-0 rotate-90 transition-transform duration-300 group-open:-rotate-90"
                />
              </summary>
              <Text tone="inverse" className="mt-4 max-w-3xl opacity-75">
                {item.answer}
              </Text>
            </details>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
