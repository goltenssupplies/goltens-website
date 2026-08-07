import Image from "next/image";

import { Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";

const STAGGER_SECONDS = 0.05;

export interface KnowledgeGalleryProps {
  title: string;
  images: string[];
}

/**
 * A static image grid — no lightbox/carousel, the same restrained
 * `rounded-[20px]`/`object-cover` photo treatment used everywhere else on
 * the site. Only rendered by the page when `images` is non-empty.
 */
export function KnowledgeGallery({ title, images }: KnowledgeGalleryProps) {
  if (images.length === 0) return null;

  return (
    <div>
      <Reveal>
        <Heading level={2} tone="inverse" className="mb-10 lg:mb-12">
          {title}
        </Heading>
      </Reveal>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((src, index) => (
          <Reveal key={src} delay={index * STAGGER_SECONDS}>
            <div className="relative aspect-video overflow-hidden rounded-[20px]">
              <Image
                src={src}
                alt=""
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover contrast-110 saturate-105 sepia-[0.08]"
              />
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
