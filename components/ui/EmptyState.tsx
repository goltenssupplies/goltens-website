import type { ReactNode } from "react";

import { Heading } from "@/components/ui/Heading";
import { Stack } from "@/components/ui/Stack";
import { Text } from "@/components/ui/Text";
import { cn } from "@/lib/utils";

export interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  /** Typically a single Button. */
  action?: ReactNode;
  /** "ink" (default) for light grounds; "inverse" for dark grounds like `PremiumDarkSection`. */
  tone?: "ink" | "inverse";
  className?: string;
}

/** Placeholder for a list, search result, or dashboard panel with no data — not a loading state, see LoadingSkeleton for that. */
export function EmptyState({
  icon,
  title,
  description,
  action,
  tone = "ink",
  className,
}: EmptyStateProps) {
  const isInverse = tone === "inverse";

  return (
    <Stack
      align="center"
      gap="sm"
      className={cn("py-16 text-center", className)}
    >
      {icon && (
        <span
          aria-hidden="true"
          className={isInverse ? "text-canvas/40" : "text-ink-muted"}
        >
          {icon}
        </span>
      )}
      <Heading level={3} size={4} tone={isInverse ? "inverse" : "ink"}>
        {title}
      </Heading>
      {description && (
        <Text
          tone={isInverse ? "inverse" : "muted"}
          className={cn("max-w-sm", isInverse && "opacity-70")}
        >
          {description}
        </Text>
      )}
      {action && <div className="mt-2">{action}</div>}
    </Stack>
  );
}
