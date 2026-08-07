import { Stack } from "@/components/ui/Stack";
import { Text } from "@/components/ui/Text";

export interface EyebrowProps {
  children: string;
  className?: string;
}

/**
 * Small accent-tick label used above a section's heading, e.g. "What We Do".
 * Accent reads at sufficient contrast on both the light section backgrounds
 * and the dark Hero, so there is no separate dark-background variant.
 */
export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <Stack direction="row" gap="sm" align="center" className={className}>
      <span aria-hidden="true" className="bg-accent h-px w-8 shrink-0" />
      <Text
        size="sm"
        weight="semibold"
        className="text-accent tracking-wide uppercase"
      >
        {children}
      </Text>
    </Stack>
  );
}
