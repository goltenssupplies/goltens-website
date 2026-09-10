import { Inbox, ListChecks, Search, Truck } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";

// Fixed icon per step (receive → search/qualify → match specs & quote →
// supply/deliver) — the exact same set, order, and meaning as the
// homepage's `Capabilities` ("How We Work"), since a sector's `howWeWork`
// is always exactly these 4 steps (see `SectorHowWeWork` type).
const ICONS = [Inbox, Search, ListChecks, Truck];
const STAGGER_SECONDS = 0.1;

export interface SectorHowWeWorkStep {
  title: string;
  description: string;
}

export interface SectorHowWeWorkProps {
  title: string;
  description: string;
  steps: SectorHowWeWorkStep[];
}

/**
 * A sector's own "How We Work" — same corporate process-timeline design as
 * the homepage's `Capabilities` component (four fixed stages connected by
 * one thin line on desktop, a vertical connector list on mobile/tablet,
 * the same `Reveal` on-scroll stagger, the same soft graphite-to-stone
 * backdrop), just sourced from a sector's own curated
 * `SectorContent.howWeWork` instead of the sitewide `capabilities`
 * translation namespace. Only rendered by the sector page template when a
 * sector has curated this content (today: government-procurement only) —
 * no generic fallback, same "never invented for a sector that hasn't
 * curated it" rule as `SectorAbout`/`SectorApplications`.
 */
export function SectorHowWeWork({
  title,
  description,
  steps,
}: SectorHowWeWorkProps) {
  return (
    <Section
      spacing="lg"
      background="stone"
      className="border-border relative overflow-hidden border-y"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(30,29,27,0.05) 0%, transparent 35%, transparent 65%, rgba(30,29,27,0.05) 100%)",
          }}
        />
        <div className="bg-dot-pattern text-accent/[0.09] animate-grid-drift absolute -inset-6" />
        <div className="bg-accent/[0.14] animate-glow-pulse absolute start-[-6%] -top-24 size-[28rem] rounded-full blur-3xl" />
        <div
          className="bg-accent/[0.12] animate-glow-pulse absolute end-[-6%] -bottom-24 size-[26rem] rounded-full blur-3xl"
          style={{ animationDelay: "4s" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 85% 85% at 50% 45%, transparent 55%, rgba(30,29,27,0.05) 100%)",
          }}
        />
      </div>

      <Container className="relative">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <Heading level={2} size={3}>
              {title}
            </Heading>
            <Text tone="muted" className="mt-4">
              {description}
            </Text>
          </div>
        </Reveal>

        <div className="relative mt-16 lg:mt-20">
          {/* Desktop — four fixed columns, connected by one static line
              through the icon centers. */}
          <div className="relative hidden lg:block">
            <div
              aria-hidden="true"
              className="bg-accent/25 absolute inset-x-[10%] top-8 h-px"
            />
            <div className="relative flex items-start">
              {steps.map((step, index) => {
                const Icon = ICONS[index];
                return (
                  <Reveal
                    key={step.title}
                    delay={index * STAGGER_SECONDS}
                    className="flex flex-1 flex-col items-center text-center"
                  >
                    <span className="border-accent/30 bg-canvas relative z-10 flex size-16 items-center justify-center rounded-full border shadow-sm">
                      {Icon && (
                        <Icon
                          aria-hidden="true"
                          className="text-accent size-7"
                        />
                      )}
                    </span>
                    <div className="mt-5 px-3">
                      <Text weight="semibold">{step.title}</Text>
                      <Text
                        size="sm"
                        tone="muted"
                        className="mx-auto mt-2 max-w-[190px] leading-relaxed"
                      >
                        {step.description}
                      </Text>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* Mobile/tablet — vertical list, connector running down the icon
              column (same technique as `Timeline.tsx`). */}
          <div className="lg:hidden">
            {steps.map((step, index) => {
              const Icon = ICONS[index];
              const isLast = index === steps.length - 1;
              return (
                <Reveal
                  key={step.title}
                  delay={index * STAGGER_SECONDS}
                  className="relative flex items-start gap-5 pb-10 last:pb-0"
                >
                  {!isLast && (
                    <span
                      aria-hidden="true"
                      className="bg-border absolute start-8 top-16 h-[calc(100%-4rem)] w-px"
                    />
                  )}
                  <span className="border-accent/30 bg-canvas relative z-10 flex size-16 shrink-0 items-center justify-center rounded-full border shadow-sm">
                    {Icon && (
                      <Icon aria-hidden="true" className="text-accent size-7" />
                    )}
                  </span>
                  <div className="pt-3">
                    <Text weight="semibold">{step.title}</Text>
                    <Text
                      size="sm"
                      tone="muted"
                      className="mt-1.5 leading-relaxed"
                    >
                      {step.description}
                    </Text>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
