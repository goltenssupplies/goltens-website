import type { ReactNode } from "react";
import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
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
 */
export function CTA({
  id,
  title,
  description,
  actions,
  tone = "primary",
  media,
  children,
  className,
}: CTAProps) {
  const isDark = tone === "primary";
  const hasMedia = isDark && !!media;

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

      {isDark && (
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

      <Container width="narrow" className="relative">
        <Reveal>
          <Stack align="center" gap="lg" className="text-center">
            <Heading level={2} tone={isDark ? "inverse" : "ink"}>
              {title}
            </Heading>
            {description && (
              <Text
                size="lg"
                tone={isDark ? "inverse" : "muted"}
                className={cn("max-w-xl", isDark && "opacity-75")}
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
