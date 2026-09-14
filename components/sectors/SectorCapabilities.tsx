import { Globe, Layers, Package, Wrench } from "lucide-react";

import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";

// One icon per group, in the fixed order `capabilities.items` is authored
// in (Equipment → Systems & Solutions → Materials & Supplies → Sourcing &
// Procurement) — same "index-paired icon array" convention already used by
// `Capabilities`/`WhyChooseUs` on the homepage.
const ICONS = [Wrench, Layers, Package, Globe];
const STAGGER_SECONDS = 0.08;

export interface SectorCapabilityItem {
  title: string;
  description: string;
}

export interface SectorCapabilitiesProps {
  title: string;
  items: SectorCapabilityItem[];
}

/**
 * "Our Procurement Capabilities" — a compact, honest 4-group overview of
 * GOLTENS' real scope across the 10 Procurement Sectors (Equipment /
 * Systems & Solutions / Materials & Supplies / Sourcing & Procurement),
 * placed directly below the `/sectors` grid. Plain `premium` cards, no
 * counters/stats/testimonials/logos — same restrained corporate register as
 * `WhyChooseUs`/`Capabilities` on the homepage, just card-shaped instead of
 * a connected timeline since these four groups aren't a sequence.
 */
export function SectorCapabilities({ title, items }: SectorCapabilitiesProps) {
  return (
    <Section spacing="md" background="canvas" className="relative">
      <Container className="relative">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <Heading level={2} size={3} tone="ink">
              {title}
            </Heading>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {items.map((item, index) => {
            const Icon = ICONS[index];
            return (
              <Reveal key={item.title} delay={index * STAGGER_SECONDS}>
                <Card
                  variant="premium"
                  padding="lg"
                  className="flex h-full flex-col items-start gap-4"
                >
                  <span className="border-gold/30 bg-gold/10 flex size-12 shrink-0 items-center justify-center rounded-full border">
                    {Icon && (
                      <Icon aria-hidden="true" className="text-gold size-5" />
                    )}
                  </span>
                  <div>
                    <Text weight="semibold" tone="ink">
                      {item.title}
                    </Text>
                    <Text
                      size="sm"
                      tone="muted"
                      className="mt-2 leading-relaxed"
                    >
                      {item.description}
                    </Text>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
