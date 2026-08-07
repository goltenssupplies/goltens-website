import { CalendarClock, Clock } from "lucide-react";

import { KnowledgeBreadcrumb } from "@/components/knowledge/KnowledgeBreadcrumb";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { Stack } from "@/components/ui/Stack";
import { Text } from "@/components/ui/Text";

export interface KnowledgeArticleHeaderProps {
  title: string;
  excerpt: string;
  categoryLabel: string;
  lastUpdatedLabel: string;
  readingTimeLabel: string;
  homeLabel: string;
  knowledgeLabel: string;
  navLabel: string;
}

/**
 * The article's editorial header — breadcrumb, category eyebrow, title,
 * excerpt, and a slim metadata row, all on the page's plain dark
 * background. Deliberately carries no image and no button: the lead photo
 * lives in `KnowledgeArticleHeroImage` right below it, and the page's one
 * CTA lives at the end of the article, not duplicated up here.
 */
export function KnowledgeArticleHeader({
  title,
  excerpt,
  categoryLabel,
  lastUpdatedLabel,
  readingTimeLabel,
  homeLabel,
  knowledgeLabel,
  navLabel,
}: KnowledgeArticleHeaderProps) {
  return (
    <Reveal>
      <Stack gap="sm" className="max-w-[46rem]">
        <KnowledgeBreadcrumb
          homeLabel={homeLabel}
          knowledgeLabel={knowledgeLabel}
          currentLabel={title}
          navLabel={navLabel}
          tone="inverse"
        />
        <Eyebrow>{categoryLabel}</Eyebrow>
        <Heading level={1} size={2} tone="inverse">
          {title}
        </Heading>
        <Text size="lg" tone="inverse" className="opacity-75">
          {excerpt}
        </Text>
        <Stack direction="row" gap="sm" wrap className="opacity-60">
          <Stack direction="row" gap="xs" align="center">
            <CalendarClock aria-hidden="true" className="text-gold size-4" />
            <Text size="sm" tone="inverse">
              {lastUpdatedLabel}
            </Text>
          </Stack>
          <Stack direction="row" gap="xs" align="center">
            <Clock aria-hidden="true" className="text-gold size-4" />
            <Text size="sm" tone="inverse">
              {readingTimeLabel}
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Reveal>
  );
}
