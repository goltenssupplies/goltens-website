import { Card } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { Text } from "@/components/ui/Text";

export interface ProductSpecificationItem {
  label: string;
  value: string;
  /** Optional section heading — when at least one item sets this, the list renders grouped instead of flat. */
  group?: string;
}

export interface ProductSpecificationsProps {
  title: string;
  items: ProductSpecificationItem[];
}

function SpecificationRows({ items }: { items: ProductSpecificationItem[] }) {
  return (
    <Card variant="glass" padding="md" className="border-gold/15 divide-y divide-canvas/10">
      {items.map((item) => (
        <div key={item.label} className="flex items-center justify-between gap-4 py-3 first:pt-0 last:pb-0">
          <Text size="sm" tone="inverse" className="opacity-60">
            {item.label}
          </Text>
          <Text size="sm" tone="inverse" weight="medium">
            {item.value}
          </Text>
        </div>
      ))}
    </Card>
  );
}

/**
 * "Technical Information" — a simple label/value row list, `Card
 * variant="glass"` like every other content card on the site. Only
 * rendered by the product page when `specifications` is set.
 *
 * Flat by default (unchanged from before). When one or more items carry a
 * `group`, renders one labeled section per distinct group instead (in
 * first-appearance order) — a product opts in by adding `group_en`/
 * `group_ar` to its `specifications`; every product that doesn't keeps
 * today's single flat list.
 */
export function ProductSpecifications({ title, items }: ProductSpecificationsProps) {
  const hasGroups = items.some((item) => item.group);

  const groups = hasGroups
    ? items.reduce<{ group: string; items: ProductSpecificationItem[] }[]>((acc, item) => {
        const groupLabel = item.group ?? "";
        const existing = acc.find((entry) => entry.group === groupLabel);
        if (existing) {
          existing.items.push(item);
        } else {
          acc.push({ group: groupLabel, items: [item] });
        }
        return acc;
      }, [])
    : null;

  return (
    <div>
      <Reveal>
        <Heading level={2} tone="inverse" className="mb-8">
          {title}
        </Heading>
      </Reveal>
      <div className="max-w-2xl space-y-8">
        {groups
          ? groups.map((group, index) => (
              <Reveal key={group.group || index} delay={0.05 + index * 0.03}>
                {group.group && (
                  <Text size="sm" tone="inverse" weight="semibold" className="mb-3 opacity-80">
                    {group.group}
                  </Text>
                )}
                <SpecificationRows items={group.items} />
              </Reveal>
            ))
          : (
              <Reveal delay={0.05}>
                <SpecificationRows items={items} />
              </Reveal>
            )}
      </div>
    </div>
  );
}
