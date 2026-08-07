import { Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { Stack } from "@/components/ui/Stack";

export interface ProductApplicationsProps {
  title: string;
  items: string[];
}

/**
 * "Applications" — the same compact tag-chip treatment `SectorAbout`
 * already renders for its `categories` list. Only rendered by the product
 * page when `applications_en/ar` is set on the product.
 */
export function ProductApplications({ title, items }: ProductApplicationsProps) {
  return (
    <div>
      <Reveal>
        <Heading level={2} tone="inverse" className="mb-6">
          {title}
        </Heading>
        <Stack direction="row" gap="sm" wrap>
          {items.map((item) => (
            <span
              key={item}
              className="border-gold/25 bg-gold/10 text-gold rounded-sm border px-4 py-2 text-sm font-medium"
            >
              {item}
            </span>
          ))}
        </Stack>
      </Reveal>
    </div>
  );
}
