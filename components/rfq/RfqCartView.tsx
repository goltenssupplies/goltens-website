"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { ClipboardList, Minus, Plus, X } from "lucide-react";

import { useRfqCart } from "@/components/rfq/RfqCartContext";
import { RfqForm } from "@/components/rfq/RfqForm";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";
import { IconButton } from "@/components/ui/IconButton";
import { Stack } from "@/components/ui/Stack";
import { Text } from "@/components/ui/Text";
import { Link } from "@/i18n/navigation";
import { getSectorImage } from "@/lib/sectors";

/**
 * `/rfq`'s content — entirely client-rendered since the cart lives in
 * `localStorage` (`RfqCartContext`). The itemized list feeds directly into
 * `RfqForm`'s submission, so both live under one component.
 */
export function RfqCartView() {
  const t = useTranslations("rfq");
  const { items, removeItem, setQuantity } = useRfqCart();

  if (items.length === 0) {
    return (
      <EmptyState
        tone="inverse"
        icon={<ClipboardList aria-hidden="true" className="size-10" />}
        title={t("emptyTitle")}
        description={t("emptyBody")}
        action={
          <Button href="/sectors" variant="accent" size="md">
            {t("browseSectors")}
          </Button>
        }
      />
    );
  }

  return (
    <Stack gap="xl">
      <Card
        variant="glass"
        padding="md"
        className="border-gold/15 divide-y divide-canvas/10"
      >
        {items.map((item) => (
          <div
            key={item.slug}
            className="flex flex-wrap items-center gap-4 py-4 first:pt-0 last:pb-0"
          >
            <Link
              href={item.href}
              className="relative size-16 shrink-0 overflow-hidden rounded-lg"
            >
              <Image
                src={getSectorImage(item.image)}
                alt=""
                fill
                sizes="64px"
                className="object-cover"
              />
            </Link>

            <Link
              href={item.href}
              className="hover:text-gold min-w-0 flex-1 transition-colors"
            >
              <Text weight="semibold" tone="inverse" className="truncate">
                {item.name}
              </Text>
            </Link>

            <div className="flex items-center gap-1.5">
              <IconButton
                icon={<Minus aria-hidden="true" className="size-3.5" />}
                aria-label={t("decreaseQuantity")}
                variant="secondary"
                size="sm"
                className="border-canvas/20 text-canvas size-8"
                onClick={() => setQuantity(item.slug, item.quantity - 1)}
                disabled={item.quantity <= 1}
              />
              <Text
                tone="inverse"
                weight="medium"
                className="w-8 text-center tabular-nums"
              >
                {item.quantity}
              </Text>
              <IconButton
                icon={<Plus aria-hidden="true" className="size-3.5" />}
                aria-label={t("increaseQuantity")}
                variant="secondary"
                size="sm"
                className="border-canvas/20 text-canvas size-8"
                onClick={() => setQuantity(item.slug, item.quantity + 1)}
              />
            </div>

            <IconButton
              icon={<X aria-hidden="true" className="size-4" />}
              aria-label={t("removeLabel", { name: item.name })}
              variant="ghost"
              size="sm"
              className="text-canvas/60 hover:text-canvas"
              onClick={() => removeItem(item.slug)}
            />
          </div>
        ))}
      </Card>

      <RfqForm />
    </Stack>
  );
}
