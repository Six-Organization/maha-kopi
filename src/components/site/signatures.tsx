"use client";

import Image from "next/image";
import { UtensilsCrossed } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { MenuTagBadge } from "@/components/site/menu-tag";
import { signatureItems, itemFromPrice, formatPrice } from "@/data/menu";
import { menuImage } from "@/data/menu-images";

export function Signatures() {
  const { tr, pick } = useLanguage();

  return (
    <section className="border-y border-border/60 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          <UtensilsCrossed className="size-4" />
          {tr("sig.kicker")}
        </div>
        <h2 className="mt-3 font-heading text-3xl font-bold text-cream sm:text-4xl">
          {tr("sig.title")}
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {signatureItems.map(({ item }) => {
            const from = itemFromPrice(item);
            const img = menuImage(item.name);
            return (
              <div
                key={item.name}
                className="flex gap-4 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-4 backdrop-blur-sm"
              >
                {img && (
                  <div className="relative size-24 shrink-0 self-center overflow-hidden rounded-xl bg-cream/10">
                    <Image
                      src={img}
                      alt={item.name}
                      fill
                      sizes="96px"
                      className="object-contain p-1"
                    />
                  </div>
                )}
                <div className="flex min-w-0 flex-1 flex-col">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-heading text-lg font-semibold text-cream">
                      {item.name}
                    </h3>
                    {from !== undefined && (
                      <span className="shrink-0 font-heading font-bold text-gold">
                        {typeof item.price === "number"
                          ? formatPrice(item.price)
                          : pick({ id: "mulai ", en: "from " }) + formatPrice(from)}
                      </span>
                    )}
                  </div>
                  {item.desc && (
                    <p className="mt-2 line-clamp-3 text-sm text-primary-foreground/70">
                      {pick(item.desc)}
                    </p>
                  )}
                  <div className="mt-auto flex flex-wrap gap-2 pt-3">
                    {item.tags?.map((tag) => <MenuTagBadge key={tag} tag={tag} />)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
