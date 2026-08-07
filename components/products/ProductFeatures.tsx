import { CheckCircle2 } from "lucide-react";

import { Grid } from "@/components/ui/Grid";
import { Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { Stack } from "@/components/ui/Stack";
import { Text } from "@/components/ui/Text";

export interface ProductFeaturesProps {
  title: string;
  items: string[];
}

/**
 * "Features" — a checklist grid, the same `CheckCircle2` capability-list
 * treatment `BrandFeatures`'s "Procurement Capabilities" section already
 * uses. Only rendered by the product page when `features_en/ar` is set.
 */
export function ProductFeatures({ title, items }: ProductFeaturesProps) {
  return (
    <div>
      <Reveal>
        <Heading level={2} tone="inverse" className="mb-8">
          {title}
        </Heading>
      </Reveal>
      <Grid columns={2} gap="md">
        {items.map((feature) => (
          <Stack key={feature} direction="row" gap="sm" align="start">
            <CheckCircle2 aria-hidden="true" className="text-gold mt-0.5 size-5 shrink-0" />
            <Text tone="inverse" className="opacity-80">
              {feature}
            </Text>
          </Stack>
        ))}
      </Grid>
    </div>
  );
}
