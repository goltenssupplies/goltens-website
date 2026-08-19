import { useTranslations } from "next-intl";
import {
  ClipboardCheck,
  Headset,
  Settings2,
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
// distinct per item (not one glyph repeated five times), matching each
// advantage's own meaning: reliable sourcing, procurement process,
// technical coordination, quotation responsiveness, and end-to-end support.
const ICONS = [ShieldCheck, ClipboardCheck, Settings2, Headset, Truck];

const STAGGER_SECONDS = 0.08;

/**
 * "Why GOLTENS?" — centred heading (no subtitle, per the homepage
 * content-cleanup pass) and a two-column checklist of five short
 * advantages, sitting directly on a fully generated background
 * (`WhyChooseUsBackground` — CSS/SVG/Framer Motion, no photo/video/WebGL/
 * canvas). No card/box/border around any item — the icon badges are the
 * only bordered elements — so the layout stays open and airy rather than
 * boxed in. Deliberately has no CTA button of its own — the site now
 * guides the visitor through content first, with a single sitewide
 * request-a-quote path reachable via the Navbar and Hero (both the real
 * `/contact` page/form) and a pre-filled WhatsApp deep link in the Footer,
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
            <Stack gap="md" align="center">
              <Heading level={2} size={1} tone="inverse">
                {t("title")}
              </Heading>
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
