import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";

export interface EquipmentProjectMatrixRow {
  id: string;
  title: string;
  description: string;
  equipment: { id: string; label: string }[];
}

export interface EquipmentProjectMatrixProps {
  /** Anchor id of the section. */
  id: string;
  title: string;
  intro: string;
  equipmentLabel: string;
  rows: EquipmentProjectMatrixRow[];
}

/**
 * "Equipment by project type" (H2) — answers "I have this type of project,
 * what equipment might I need?" Each project row links straight to the
 * matching equipment-type guides further down the page. Project titles are
 * deliberately not headings, so the page outline keeps equipment types as
 * its only H3s.
 */
export function EquipmentProjectMatrix({
  id,
  title,
  intro,
  equipmentLabel,
  rows,
}: EquipmentProjectMatrixProps) {
  return (
    <Section
      id={id}
      aria-labelledby={`${id}-title`}
      spacing="md"
      className="scroll-mt-28"
    >
      <Container>
        <Heading id={`${id}-title`} level={2} size={3} tone="inverse">
          {title}
        </Heading>
        <Text tone="muted" className="mt-4 max-w-3xl">
          {intro}
        </Text>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4">
          {rows.map((row) => (
            <li
              key={row.id}
              className="border-border flex flex-col rounded-[14px] border bg-white p-5"
            >
              <Text weight="semibold" tone="inverse">
                {row.title}
              </Text>
              <Text size="sm" tone="muted" className="mt-1.5">
                {row.description}
              </Text>
              <Text
                size="xs"
                weight="semibold"
                tone="muted"
                className="mt-4 mb-2 tracking-wide uppercase rtl:tracking-normal"
              >
                {equipmentLabel}
              </Text>
              <ul className="mt-auto flex flex-wrap gap-1.5">
                {row.equipment.map((equipment) => (
                  <li key={equipment.id}>
                    <a
                      href={`#${equipment.id}`}
                      className="border-border text-ink hover:border-gold hover:text-ink block rounded-sm border px-2.5 py-1 text-sm transition-colors"
                    >
                      {equipment.label}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
