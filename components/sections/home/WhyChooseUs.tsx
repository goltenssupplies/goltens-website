import { useTranslations } from "next-intl";
import {
  Award,
  BadgePercent,
  Globe,
  Headset,
  ShieldCheck,
  Truck,
} from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Stack } from "@/components/ui/Stack";
import { Text } from "@/components/ui/Text";
import { WhyChooseUsBackground } from "@/components/sections/home/WhyChooseUsBackground";

// One icon per advantage, in the same order as `whyChooseUs.items` below —
// distinct per item (not one glyph repeated six times), matching each
// advantage's own meaning: authenticity, pricing, delivery, expertise,
// support, and supplier reach.
const ICONS = [ShieldCheck, BadgePercent, Truck, Award, Headset, Globe];

const STAGGER_SECONDS = 0.08;

/**
 * "Why Choose GOLTENS?" — centred title/subtitle and a two-column checklist
 * of six advantages, sitting directly on a fully generated background
 * (`WhyChooseUsBackground` — CSS/SVG/Framer Motion, no photo/video/WebGL/
 * canvas). No card/box/border around any item — the icon badges are the
 * only bordered elements — so the layout stays open and airy rather than
 * boxed in. Deliberately has no CTA button of its own — the site now
 * guides the visitor through content first, with the single sitewide
 * contact page (`/contact`) reachable via the Navbar, Hero, and Footer
 * rather than repeating a CTA in every section.
 */
export function WhyChooseUs() {
  const t = useTranslations("whyChooseUs");
  const items = t.raw("items") as string[];

  return (
    <Section
      id="why-choose-us"
      spacing="lg"
      className="relative overflow-hidden"
    >
      <WhyChooseUsBackground />

      <Container className="relative">
        <Reveal distance={0}>
          <div className="relative mx-auto max-w-3xl text-center">
            {/* Soft gold spotlight behind the heading — distinct from the
                background's ambient glows, which darken/frame rather than
                illuminate the text column itself. */}
            <div
              aria-hidden="true"
              className="bg-accent/25 absolute top-1/2 left-1/2 -z-10 h-[24rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
            />
            <Stack gap="md" align="center">
              <Heading level={2} size={1} tone="inverse">
                {t("title")}
              </Heading>
              <Text size="lg" tone="inverse" className="opacity-80">
                {t("subtitle")}
              </Text>
            </Stack>
          </div>
        </Reveal>

        <div className="mx-auto mt-16 grid max-w-4xl gap-x-16 gap-y-12 sm:grid-cols-2 lg:mt-20">
          {items.map((item, index) => {
            const Icon = ICONS[index];
            return (
              <Reveal key={item} distance={0} delay={index * STAGGER_SECONDS}>
                <Stack direction="row" gap="md" align="start" className="group">
                  {Icon && (
                    <span className="border-accent/30 bg-accent/10 group-hover:border-accent/60 group-hover:bg-accent/15 flex size-14 shrink-0 items-center justify-center rounded-full border transition-all duration-300 group-hover:shadow-[0_0_28px_rgba(166,128,61,0.45)]">
                      <Icon aria-hidden="true" className="text-accent size-7" />
                    </span>
                  )}
                  <Text size="lg" tone="inverse" className="mt-3 opacity-90">
                    {item}
                  </Text>
                </Stack>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
