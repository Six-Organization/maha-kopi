"use client";

import Image from "next/image";
import { useLanguage } from "@/components/language-provider";
import { SectionHeading } from "@/components/site/section-heading";
import { menuImage, heroSpread } from "@/data/menu-images";
import { venuePhotos, venueHero } from "@/data/venue-images";
import { cn } from "@/lib/utils";

const DISHES: { name: string; label: { id: string; en: string } }[] = [
  { name: "Honey Roasted Chicken", label: { id: "Ayam Bakar Madu", en: "Honey Roasted Chicken" } },
  { name: "BBQ Pork Ribs", label: { id: "BBQ Pork Ribs", en: "BBQ Pork Ribs" } },
  { name: "Chicken Satay", label: { id: "Sate Ayam", en: "Chicken Satay" } },
  { name: "Signature Maha Ice Coffee", label: { id: "Maha Ice Coffee", en: "Maha Ice Coffee" } },
  { name: "Beef Burger", label: { id: "Beef Burger", en: "Beef Burger" } },
  { name: "Chicken Katsu Bowl", label: { id: "Katsu Bowl", en: "Katsu Bowl" } },
];

export function Gallery() {
  const { tr, pick } = useLanguage();

  return (
    <section id="gallery" className="scroll-mt-20 bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker={tr("gallery.kicker")}
          title={tr("gallery.title")}
          subtitle={tr("gallery.subtitle")}
        />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {/* Big feature: venue hero photo if available, else the table spread */}
          <div className="relative col-span-2 row-span-2 aspect-square overflow-hidden rounded-3xl border border-border/60 shadow-sm">
            <Image
              src={venueHero ?? heroSpread}
              alt="MAHA Kopi Bali"
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-5">
              <p className="font-heading text-xl font-bold text-cream drop-shadow">
                {pick({ id: "Santap Bersama", en: "Feast Together" })}
              </p>
              <p className="text-sm text-cream/80">
                {pick({ id: "Ragam menu Indonesia & Western", en: "Indonesian & Western favorites" })}
              </p>
            </div>
          </div>

          {/* Real venue/atmosphere photos (shown once provided) */}
          {venuePhotos.map((v) => (
            <div
              key={v.src}
              className="group relative aspect-square overflow-hidden rounded-2xl border border-border/60 shadow-sm"
            >
              <Image
                src={v.src}
                alt={pick(v.label)}
                fill
                sizes="(min-width: 640px) 25vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/55 to-transparent" />
              <p className="absolute bottom-2 left-3 font-heading text-sm font-semibold text-cream drop-shadow">
                {pick(v.label)}
              </p>
            </div>
          ))}

          {/* Dish cutouts on branded backdrops (fill the rest) */}
          {DISHES.map((d, i) => {
            const img = menuImage(d.name);
            return (
              <div
                key={d.name}
                className={cn(
                  "group relative aspect-square overflow-hidden rounded-2xl border border-border/60 shadow-sm",
                  i % 3 === 0
                    ? "bg-gradient-to-br from-leaf/25 to-primary/20"
                    : "bg-gradient-to-br from-secondary to-accent/70",
                )}
              >
                {img && (
                  <Image
                    src={img}
                    alt={pick(d.label)}
                    fill
                    sizes="(min-width: 640px) 25vw, 50vw"
                    className="object-contain p-3 drop-shadow-md transition-transform duration-500 group-hover:scale-110"
                  />
                )}
                <p className="absolute bottom-2 left-3 font-heading text-sm font-semibold text-espresso/90 drop-shadow-sm">
                  {pick(d.label)}
                </p>
              </div>
            );
          })}
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          {tr("gallery.note")}
        </p>
      </div>
    </section>
  );
}
