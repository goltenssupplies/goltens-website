import { Inbox, ListChecks, Search, Truck } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";

// One icon per stage, in the fixed order below (receive → search/qualify →
// match specs & quote → supply/deliver) — matches `capabilities.items`.
const ICONS = [Inbox, Search, ListChecks, Truck];
const STAGGER_SECONDS = 0.1;

interface CapabilityItem {
  title: string;
  description: string;
}

/**
 * "How We Work" — a static, corporate process timeline directly under the
 * Hero: four fixed stages (receiving the order, sourcing/qualifying
 * suppliers, matching specifications & quoting, supply & delivery),
 * connected by one thin line rather than shown as large auto-advancing
 * cards. Nodes reveal with a brief on-scroll stagger (`Reveal`, already used
 * sitewide) rather than any looping or auto-playing animation — this is a
 * reference diagram a visitor reads at their own pace, not a presentation
 * that plays itself. Deliberately no "01/02/03" numbering: the line + icon +
 * fixed reading order (right to left in Arabic) already establish the
 * sequence. No eyebrow/subtitle — the heading alone ("How We Work") is the
 * whole section intro, per the homepage content-cleanup pass.
 *
 * Desktop is a four-column horizontal row with the connector as a single
 * line through the icon centers (`inset-x-[10%]`, the center-to-center span
 * across four equal `flex-1` columns). Mobile/tablet switches to a vertical
 * list with the connector running down the icon column instead — same
 * technique as `Timeline.tsx`.
 */
export async function Capabilities() {
  const t = await getTranslations("capabilities");
  const items = t.raw("items") as CapabilityItem[];

  return (
    <Section
      spacing="lg"
      background="stone"
      className="border-border relative overflow-hidden border-y"
    >
      {/* Corporate Premium backdrop — a soft graphite-to-stone diagonal
          gradient and a light vignette give the surface depth instead of a
          flat single tone, layered under the sitewide dot texture
          (already used on the Hero) and two breathing gold glows. Still
          only the site's existing `ink`/`accent`/`gold` tokens — no new
          colour — kept low-opacity throughout so none of it competes with
          the timeline itself. */}
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
              {t("title")}
            </Heading>
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
              {items.map((item, index) => {
                const Icon = ICONS[index];
                return (
                  <Reveal
                    key={item.title}
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
                      <Text weight="semibold">{item.title}</Text>
                      <Text
                        size="sm"
                        tone="muted"
                        className="mx-auto mt-2 max-w-[190px] leading-relaxed"
                      >
                        {item.description}
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
            {items.map((item, index) => {
              const Icon = ICONS[index];
              const isLast = index === items.length - 1;
              return (
                <Reveal
                  key={item.title}
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
                    <Text weight="semibold">{item.title}</Text>
                    <Text
                      size="sm"
                      tone="muted"
                      className="mt-1.5 leading-relaxed"
                    >
                      {item.description}
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
