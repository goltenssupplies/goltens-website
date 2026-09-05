import type { ReactNode } from "react";

import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { Section, type SectionProps } from "@/components/ui/Section";
import { SectionParticles } from "@/components/ui/SectionParticles";
import { Stack } from "@/components/ui/Stack";
import { Text } from "@/components/ui/Text";
import { cn } from "@/lib/utils";

export interface PremiumDarkSectionProps {
  /** Centered header block, shown above `children` — omit on detail pages whose own hero already carries the title. */
  header?: {
    eyebrow: string;
    title: string;
    description: string;
  };
  /** Adds top padding for pages with no hero banner above this section (a listing page reached directly, not below a hero). */
  topPadding?: boolean;
  /** Vertical rhythm step, forwarded to the inner `Section`. Defaults to "lg" — pass "sm"/"md" for pages that stack many of these back-to-back (e.g. the Knowledge article template) so the page doesn't accumulate excessive whitespace. */
  spacing?: SectionProps["spacing"];
  children: ReactNode;
}

/**
 * The premium white `obsidian` panel chrome shared by every content-listing
 * page on the site — a faint gold dot texture, two soft radial gold glows,
 * and the gold-particle ambience used by every panel section — factored
 * out so Sectors, Brands, and any future section share one implementation
 * instead of each re-declaring the same decorative background. Light theme
 * (2026 refresh): no dark vignette overlay (that only made sense against
 * the surface's former near-black colour); the gold accents stay, tuned to
 * read as a subtle premium texture rather than ambient light.
 */
export function PremiumDarkSection({
  header,
  topPadding = false,
  spacing = "lg",
  children,
}: PremiumDarkSectionProps) {
  return (
    <Section
      spacing={spacing}
      background="obsidian"
      className={cn("relative overflow-hidden", topPadding && "pt-36 lg:pt-44")}
    >
      <div
        aria-hidden="true"
        className="bg-gold/[0.05] pointer-events-none absolute -top-32 -left-32 size-[28rem] rounded-full blur-3xl"
      />
      <div
        aria-hidden="true"
        className="bg-gold/[0.04] pointer-events-none absolute -right-24 -bottom-24 size-[26rem] rounded-full blur-3xl"
      />
      <div
        aria-hidden="true"
        className="bg-dot-pattern text-accent/[0.05] pointer-events-none absolute inset-0"
      />
      <SectionParticles />

      <Container className="relative">
        {header && (
          <Reveal>
            <div className="relative mx-auto max-w-2xl text-center">
              <div
                aria-hidden="true"
                className="bg-gold/10 pointer-events-none absolute top-1/2 left-1/2 -z-10 h-56 w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
              />
              <Stack gap="md" align="center">
                <Eyebrow>{header.eyebrow}</Eyebrow>
                <Heading level={1} tone="inverse">
                  {header.title}
                </Heading>
                <Text size="lg" tone="inverse" className="opacity-70">
                  {header.description}
                </Text>
              </Stack>
            </div>
          </Reveal>
        )}

        <div className={header ? "mt-16 lg:mt-20" : undefined}>{children}</div>
      </Container>
    </Section>
  );
}
