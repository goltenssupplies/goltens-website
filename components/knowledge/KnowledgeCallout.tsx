import { Info } from "lucide-react";

import { Text } from "@/components/ui/Text";

export interface KnowledgeCalloutProps {
  title: string;
  body: string;
}

/**
 * "Important Note" callout — a left accent-bar aside (RTL-aware: the bar
 * sits on the *start* edge), not a bordered card. Reads as an inline
 * editorial note within the article's own flow rather than another box
 * competing with the surrounding content. Each instance is one section's
 * own real note, never a generic filler tip.
 */
export function KnowledgeCallout({ title, body }: KnowledgeCalloutProps) {
  return (
    <div className="border-gold bg-gold/[0.05] flex gap-3 rounded-e-md border-s-[3px] py-3 ps-5 pe-4">
      <Info
        aria-hidden="true"
        className="text-gold mt-0.5 size-4 shrink-0"
      />
      <div className="space-y-1">
        <Text size="sm" weight="semibold" tone="inverse">
          {title}
        </Text>
        <Text size="sm" tone="inverse" className="leading-[1.7] opacity-75">
          {body}
        </Text>
      </div>
    </div>
  );
}
