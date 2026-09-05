import type { ReactNode } from "react";
import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionParticles } from "@/components/ui/SectionParticles";
import { Stack } from "@/components/ui/Stack";
import { Text } from "@/components/ui/Text";
import { cn } from "@/lib/utils";

export interface CTAMedia {
  /**
   * Resolved, existence-checked video path (e.g. from the caller checking
   * `fs.existsSync` against `public/`) — omit entirely to skip the video and
   * use `posterSrc` as the background at every breakpoint, not just mobile.
   */
  videoSrc?: string;
  /**
   * Background image: the video's poster while it loads, the sole mobile
   * background (video only renders `md:` and up), and the entire background
   * whenever `videoSrc` is absent. Swapping a real `videoSrc` in later
   * requires no layout change — video and poster share the same full-bleed
   * `object-cover` layer and dark overlay.
   */
  posterSrc: string;
}

export interface CTAProps {
  id?: string;
  title: string;
  description?: string;
  /** Typically one or two Button components. */
  actions: ReactNode;
  tone?: "primary" | "canvas";
  /** Full-bleed background video/image behind the dark overlay. Only rendered when `tone="primary"`. */
  media?: CTAMedia;
  /**
   * Opt-in richer dark treatment — deep navy (matching the Footer and "Why
   * GOLTENS" backgrounds) instead of the shared warm `primary`/`ink` tone,
   * plus a softened/blurred grid, restrained corner glows, a few faint
   * particles, and a top gold hairline. Only the homepage's single closing
   * CTA passes this; the Solutions-page CTA and `BrandCTA` don't, so they
   * keep their original look unchanged. Ignored when `tone="canvas"`.
   */
  premium?: boolean;
  /** Optional content rendered below the actions, e.g. a row of contact details. */
  children?: ReactNode;
  className?: string;
}

/**
 * Full-width band prompting a single next action — built to read as an
 * executive invitation rather than a plain button bar: generous scale, a
 * dark textured ground (matching the Hero) with a faint ORIGIN watermark,
 * not just a heading and a CTA crammed together.
 *
 * With `media`, the dark ground becomes a semi-transparent (~55-60%) overlay
 * atop a full-bleed video or image instead of a flat gradient, so the same
 * treatment reads correctly whether or not a background is supplied.
 *
 * `premium` swaps that ground for a deep-navy treatment matching the
 * Footer/"Why GOLTENS" visual family — see the prop doc and the `isPremium`
 * branch below.
 */
export function CTA({
  id,
  title,
  description,
  actions,
  tone = "primary",
  media,
  premium = false,
  children,
  className,
}: CTAProps) {
  const isDark = tone === "primary";
  const hasMedia = isDark && !!media;
  const isPremium = isDark && premium;

  return (
    <Section
      id={id}
      spacing="lg"
      className={cn(
        "relative overflow-hidden",
        isDark ? "text-canvas" : "bg-canvas",
        className,
      )}
    >
      {hasMedia && media && (
        <>
          {media.videoSrc ? (
            <>
              {/* Desktop/tablet: the real video. Autoplay requires muted +
                  playsInline for iOS Safari; preload="none" keeps it from
                  fetching anything until the browser actually decides to
                  play it, since this section sits below the fold. */}
              <video
                aria-hidden="true"
                className="absolute inset-0 hidden size-full object-cover md:block"
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                poster={media.posterSrc}
              >
                <source src={media.videoSrc} type="video/mp4" />
              </video>
              {/* Mobile: poster only, to avoid asking a phone connection to
                  stream a looping background video. */}
              <Image
                src={media.posterSrc}
                alt=""
                fill
                sizes="100vw"
                className="object-cover md:hidden"
              />
            </>
          ) : (
            <Image
              src={media.posterSrc}
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />
          )}
        </>
      )}

      {isDark && !isPremium && (
        <>
          <div
            aria-hidden="true"
            className={cn(
              "absolute inset-0 bg-gradient-to-br",
              hasMedia ? "from-primary/60 to-ink/65" : "from-primary to-ink",
            )}
          />
          <div
            aria-hidden="true"
            className="bg-grid-pattern text-canvas/30 pointer-events-none absolute inset-0"
          />
          <div
            aria-hidden="true"
            className="border-accent/20 pointer-events-none absolute end-[-4rem] top-1/2 size-72 -translate-y-1/2 border-[3px]"
          />
        </>
      )}

      {/* Premium treatment (homepage closing CTA only) — deep navy matching
          the Footer/"Why GOLTENS" family (`#0a0b0d → #171b23`, ending at the
          Footer's own `#0d1117` so the seam between this section and the
          Footer below it is a deliberate gold hairline, not a colour jump)
          instead of the shared warm `primary`/`ink` gradient. Same
          restrained-glow, blurred-grid, sparse-particle language as
          `WhyChooseUsBackground` for visual consistency across the page's
          dark sections. */}
      {isPremium && (
        <>
          {hasMedia ? (
            <div
              aria-hidden="true"
              className="from-primary/60 to-ink/65 absolute inset-0 bg-gradient-to-br"
            />
          ) : (
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, #0a0b0d 0%, #10131a 45%, #0d1117 100%)",
              }}
            />
          )}
          <div
            aria-hidden="true"
            className="bg-gold/60 pointer-events-none absolute inset-x-0 top-0 h-px"
          />
          <div
            aria-hidden="true"
            className="bg-grid-pattern text-canvas/[0.035] pointer-events-none absolute -inset-8"
            style={{
              filter: "blur(1.5px)",
              maskImage:
                "radial-gradient(ellipse 60% 70% at 50% 50%, transparent 30%, black 90%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 60% 70% at 50% 50%, transparent 30%, black 90%)",
            }}
          />
          <div
            aria-hidden="true"
            className="bg-accent/10 pointer-events-none absolute top-1/2 left-[-8%] size-80 -translate-y-1/2 rounded-full blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 right-[-8%] size-80 -translate-y-1/2 rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(111,143,179,0.14) 0%, transparent 70%)",
            }}
          />
          <div
            aria-hidden="true"
            className="border-accent/10 pointer-events-none absolute end-[-4rem] top-1/2 size-72 -translate-y-1/2 border-[3px]"
          />
          <SectionParticles />
        </>
      )}

      <Container width="narrow" className="relative">
        <Reveal>
          <Stack align="center" gap="lg" className="text-center">
            <Heading level={2} className={isDark ? "text-canvas" : undefined}>
              {title}
            </Heading>
            {description && (
              <Text
                size="lg"
                tone={isDark ? undefined : "muted"}
                className={cn("max-w-xl", isDark && "text-canvas opacity-75")}
              >
                {description}
              </Text>
            )}
            <Stack
              direction="row"
              gap="sm"
              wrap
              justify="center"
              className="pt-2"
            >
              {actions}
            </Stack>
            {children}
          </Stack>
        </Reveal>
      </Container>
    </Section>
  );
}
