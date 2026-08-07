import Image from "next/image";

import { Reveal } from "@/components/ui/Reveal";
import { Text } from "@/components/ui/Text";
import { getSectorImage } from "@/lib/sectors";

export interface KnowledgeArticleHeroImageProps {
  image: string | null;
  caption?: string;
}

/**
 * The article's lead photo — a contained, fixed-aspect figure below the
 * header, not a viewport-height banner. Supports the article instead of
 * dominating the page: capped width, rounded corners, no text overlay.
 */
export function KnowledgeArticleHeroImage({
  image,
  caption,
}: KnowledgeArticleHeroImageProps) {
  return (
    <Reveal delay={0.05}>
      <figure>
        <div className="relative aspect-[21/9] overflow-hidden rounded-[20px] shadow-[0_20px_48px_rgba(0,0,0,0.35)]">
          <Image
            src={getSectorImage(image)}
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 64rem, 100vw"
            className="object-cover contrast-110 saturate-105 sepia-[0.08]"
          />
        </div>
        {caption && (
          <Text
            as="figcaption"
            size="sm"
            tone="inverse"
            className="mt-3 opacity-50"
          >
            {caption}
          </Text>
        )}
      </figure>
    </Reveal>
  );
}
