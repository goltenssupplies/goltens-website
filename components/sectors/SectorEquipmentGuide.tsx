import type { LucideIcon } from "lucide-react";

import {
  EquipmentTypeCard,
  type EquipmentTypeCardItem,
  type EquipmentTypeCardLabels,
} from "@/components/sectors/EquipmentTypeCard";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";

export interface SectorEquipmentGuideCategory {
  /** Anchor id of the section (the category id). */
  id: string;
  title: string;
  intro: string;
  icon: LucideIcon;
  equipment: EquipmentTypeCardItem[];
}

export interface SectorEquipmentGuideProps {
  category: SectorEquipmentGuideCategory;
  /** Label above the per-category equipment jump links. */
  indexLabel: string;
  cardLabels: EquipmentTypeCardLabels;
  quoteAnchor: string;
}

/**
 * One equipment category of a sector's equipment guide (H2) — a strong dark
 * introduction band with the category's own jump links to each equipment
 * type, followed by one `EquipmentTypeCard` (H3) per equipment type. Takes
 * plain, already-localized props built by the sector page template, per
 * the `components/sectors/*` contract; it never imports `data/*`.
 */
export function SectorEquipmentGuide({
  category,
  indexLabel,
  cardLabels,
  quoteAnchor,
}: SectorEquipmentGuideProps) {
  const Icon = category.icon;

  return (
    <Section
      id={category.id}
      aria-labelledby={`${category.id}-title`}
      spacing="md"
      className="scroll-mt-36"
    >
      <Container>
        <div className="bg-ink text-canvas relative overflow-hidden rounded-[20px] p-7 sm:p-10 lg:p-12">
          <div
            aria-hidden="true"
            className="bg-grid-pattern text-canvas/[0.06] pointer-events-none absolute inset-0"
          />
          <div
            aria-hidden="true"
            className="bg-gold/[0.12] pointer-events-none absolute -end-24 -top-24 size-72 rounded-full blur-3xl"
          />
          <div className="relative grid gap-8 lg:grid-cols-[auto_1fr] lg:items-start lg:gap-10">
            <span
              aria-hidden="true"
              className="bg-gold/15 text-gold flex size-16 items-center justify-center rounded-2xl"
            >
              <Icon className="size-8" />
            </span>
            <div>
              <Heading
                id={`${category.id}-title`}
                level={2}
                size={3}
                className="text-canvas"
              >
                {category.title}
              </Heading>
              <Text size="lg" className="text-canvas mt-4 max-w-3xl opacity-85">
                {category.intro}
              </Text>
              <nav aria-label={indexLabel} className="mt-7">
                <Text
                  size="xs"
                  weight="semibold"
                  className="text-canvas mb-3 tracking-wide uppercase opacity-60 rtl:tracking-normal"
                >
                  {indexLabel}
                </Text>
                <ul className="flex flex-wrap gap-2">
                  {category.equipment.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="border-canvas/25 text-canvas hover:border-gold hover:text-gold block rounded-sm border px-3 py-1.5 text-sm transition-colors"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-6 lg:mt-10 lg:gap-8">
          {category.equipment.map((item) => (
            <EquipmentTypeCard
              key={item.id}
              item={item}
              labels={cardLabels}
              quoteAnchor={quoteAnchor}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
