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
  className,
}: ContactCardProps) {
  const isInverse = tone === "inverse";

  const body = (
    <Stack
      direction="row"
      gap="sm"
      align="start"
      className={cn("group", className)}
    >
      <span
        aria-hidden="true"
        className={cn(
          "flex size-10 shrink-0 items-center justify-center rounded-sm transition-colors duration-300",
          isInverse
            ? "bg-canvas/10 text-canvas"
            : "bg-stone text-primary group-hover:bg-primary group-hover:text-canvas",
        )}
      >
        {icon}
      </span>
      <Stack gap="none">
        <Text
          size="sm"
          tone={isInverse ? "inverse" : "muted"}
          className={isInverse ? "opacity-60" : undefined}
        >
          {label}
        </Text>
        <Text
          weight="semibold"
          tone={isInverse ? "inverse" : "ink"}
          className={cn(
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
      className="block w-fit"
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {body}
    </a>
  );
}
