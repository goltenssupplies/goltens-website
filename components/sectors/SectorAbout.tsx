import { Info } from "lucide-react";

import { Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { Stack } from "@/components/ui/Stack";
import { Text } from "@/components/ui/Text";

export interface SectorAboutProps {
  title: string;
  intro: string;
  categories?: string[];
  complianceNote?: string;
}

/**
 * "About [Sector]" — a professional intro paragraph, an optional row of
 * product-family tag chips (same chip treatment `BrandFeatures`'s
 * "Industries Served" already uses, for a consistent visual language), and
 * an optional standards/compliance line. Only rendered by the page
 * template when a sector has curated `about` content — same "never a
 * generic/irrelevant default" rule as `SectorApplications`/`SectorProjects`.
 */
export function SectorAbout({ title, intro, categories, complianceNote }: SectorAboutProps) {
  return (
    <div>
      <Reveal>
        <Heading level={2} tone="inverse" className="mb-6">
          {title}
        </Heading>
        <Text size="lg" tone="inverse" className="max-w-3xl leading-[1.8] opacity-85">
          {intro}
        </Text>
      </Reveal>

      {categories && categories.length > 0 && (
        <Reveal delay={0.05}>
          <Stack direction="row" gap="sm" wrap className="mt-8">
            {categories.map((category) => (
              <span
                key={category}
                className="border-gold/25 bg-gold/10 text-gold rounded-sm border px-4 py-2 text-sm font-medium"
              >
                {category}
              </span>
            ))}
          </Stack>
        </Reveal>
      )}

      {complianceNote && (
        <Reveal delay={0.08}>
          <div className="border-gold/20 bg-gold/[0.06] mt-8 flex max-w-3xl items-start gap-3 rounded-[16px] border p-5">
            <Info aria-hidden="true" className="text-gold mt-0.5 size-5 shrink-0" />
            <Text size="sm" tone="inverse" className="opacity-80">
              {complianceNote}
            </Text>
          </div>
        </Reveal>
      )}
    </div>
  );
}
