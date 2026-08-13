import type { ReactNode } from "react";

import { Stack } from "@/components/ui/Stack";
import { Text } from "@/components/ui/Text";
import { cn } from "@/lib/utils";

export interface ContactCardProps {
  icon: ReactNode;
  label: string;
  value: ReactNode;
  /** Wraps the value in a link, e.g. `mailto:`, `tel:`, or a WhatsApp URL. */
  href?: string;
  /** Opens `href` in a new tab (`target="_blank" rel="noopener noreferrer"`) — for a real external link like a brand's official website, not the site's own `tel:`/`mailto:`/WhatsApp links. */
  external?: boolean;
  /** "inverse" for dark grounds (Contact CTA, Footer); "ink" for light grounds (RFQ page). Defaults to "ink". */
  tone?: "inverse" | "ink";
  /** "md" (default) is the original size. "sm" shrinks the icon badge and
   * value text — for narrow contexts like a row of three cards, where the
   * default size wraps a long value (an email address) too aggressively. */
  size?: "sm" | "md";
  className?: string;
}

/** Icon + label + value, e.g. for a phone/email/address listing. Optionally a link. */
export function ContactCard({
  icon,
  label,
  value,
  href,
  external,
  tone = "ink",
  size = "md",
  className,
}: ContactCardProps) {
  const isInverse = tone === "inverse";
  const isCompact = size === "sm";

  const body = (
    <Stack
      direction="row"
      gap="sm"
      align="start"
      className={cn("group w-full min-w-0", className)}
    >
      <span
        aria-hidden="true"
        className={cn(
          "flex shrink-0 items-center justify-center rounded-sm transition-colors duration-300",
          isCompact ? "size-8" : "size-10",
          isInverse
            ? "bg-canvas/10 text-canvas"
            : "bg-stone text-primary group-hover:bg-primary group-hover:text-canvas",
        )}
      >
        {icon}
      </span>
      <Stack gap="none" className="min-w-0 flex-1">
        <Text
          size="sm"
          tone={isInverse ? "inverse" : "muted"}
          className={isInverse ? "opacity-60" : undefined}
        >
          {label}
        </Text>
        <Text
          size={isCompact ? "sm" : "md"}
          weight="semibold"
          tone={isInverse ? "inverse" : "ink"}
          className={cn(
            "break-words",
            href && "transition-colors",
            href && !isInverse && "group-hover:text-primary",
            href && isInverse && "group-hover:text-accent",
          )}
        >
          {value}
        </Text>
      </Stack>
    </Stack>
  );

  if (!href) return body;

  return (
    <a
      href={href}
      className="block w-full min-w-0"
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {body}
    </a>
  );
}
