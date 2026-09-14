import { Send } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { Text } from "@/components/ui/Text";
import { cn } from "@/lib/utils";

export interface SendRequirementCTAProps {
  /** Locale-relative href, e.g. `/send-requirement` or `/send-requirement?product=...` — resolved through the site's locale-aware `Button`/`Link`. */
  href: string;
  label: string;
  /**
   * "link" (default): a small icon+text link — used inside `ProductHero`'s
   * button row, next to `SectorQuoteCTA`, and in the homepage's closing CTA
   * actions row. Never competes with the primary action beside it.
   * "banner": a compact standalone card (title + description + button) —
   * used only on the Global Sourcing sector page, where sourcing an
   * unlisted item is the sector's whole premise, making this the primary
   * call to action there instead of a secondary link.
   */
  variant?: "link" | "banner";
  /** "banner" only. */
  title?: string;
  /** "banner" only. */
  description?: string;
  /** "link" only — set when the surrounding background is dark (e.g. `ProductHero`'s photo hero, the homepage's dark closing CTA) so the link stays legible. Default assumes a light surrounding background. */
  onDark?: boolean;
  /** "link" only — renders as a solid gold `accent` button instead of the default subtle ghost link, for the rare case this link *is* the primary action (e.g. a closing CTA banner) rather than a secondary one beside another button. Every other call site omits this and keeps the original subtle treatment. */
  prominent?: boolean;
  className?: string;
}

/**
 * The site's one "Send Your Requirement" entry point. Purely presentational
 * — every string is a prop, translated by the caller via `next-intl` (same
 * convention as `SectorQuoteCTA`/`ProductHero`), so this component never
 * needs to know which locale it's rendering in.
 */
export function SendRequirementCTA({
  href,
  label,
  variant = "link",
  title,
  description,
  onDark = false,
  prominent = false,
  className,
}: SendRequirementCTAProps) {
  if (variant === "banner") {
    return (
      <Reveal>
        <Card
          variant="premium"
          padding="lg"
          className={cn(
            "border-gold/30 flex flex-col items-center gap-4 rounded-2xl text-center",
            className,
          )}
        >
          {title && (
            <Heading level={3} size={3} tone="ink">
              {title}
            </Heading>
          )}
          {description && (
            <Text tone="muted" className="max-w-xl">
              {description}
            </Text>
          )}
          <Button
            href={href}
            variant="accent"
            size="lg"
            iconStart={<Send className="size-4" aria-hidden="true" />}
          >
            {label}
          </Button>
        </Card>
      </Reveal>
    );
  }

  return (
    <Button
      href={href}
      variant={prominent ? "accent" : "ghost"}
      size={prominent ? "lg" : "sm"}
      iconStart={<Send className="size-4" aria-hidden="true" />}
      className={cn(
        // The "link" variant's label is a full sentence (unlike every other
        // Button call site's short 2-3 word label), so the base
        // `whitespace-nowrap`/fixed `h-9` from `buttonVariants` — correct
        // for short labels — must be relaxed here specifically, or the
        // label overflows its container on narrow mobile viewports instead
        // of wrapping to a second line.
        "h-auto min-h-9 py-2 whitespace-normal",
        !prominent && onDark ? "text-canvas hover:bg-canvas/10" : undefined,
        className,
      )}
    >
      {label}
    </Button>
  );
}
