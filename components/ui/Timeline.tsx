import type { ReactNode } from "react";

import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { cn } from "@/lib/utils";

export interface TimelineStep {
  title: string;
  description: string;
  icon?: ReactNode;
}

export interface TimelineProps {
  steps: TimelineStep[];
  className?: string;
}

/**
 * Vertical process/step list, e.g. "how a quotation request is handled".
 * The connector rail and markers sit on the logical inline-start edge
 * (`ps-*`, `start-0`, `border-s`), so the whole timeline mirrors correctly
 * under RTL with no `rtl:` overrides needed.
 */
export function Timeline({ steps, className }: TimelineProps) {
  return (
    <ol className={cn("flex flex-col", className)}>
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1;
        return (
          <li key={step.title} className="relative ps-12 pb-10 last:pb-0">
            {!isLast && (
              <span
                aria-hidden="true"
                className="bg-border absolute start-[17px] top-9 h-full w-px"
              />
            )}
            <span
              aria-hidden="true"
              className="bg-primary text-canvas absolute start-0 top-0 flex size-9 items-center justify-center rounded-sm text-sm font-semibold"
            >
              {step.icon ?? index + 1}
            </span>
            <Heading level={3} size={5}>
              {step.title}
            </Heading>
            <Text tone="muted" className="mt-1">
              {step.description}
            </Text>
          </li>
        );
      })}
    </ol>
  );
}
