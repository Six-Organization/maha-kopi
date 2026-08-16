"use client";

import Image from "next/image";
import { Sprout, Sunset, Coffee } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { SectionHeading } from "@/components/site/section-heading";
import { venueOutdoor } from "@/data/venue-images";

export function About() {
  const { tr, pick } = useLanguage();

  const features = [
    { icon: Sprout, t: "about.feature.rice.title", d: "about.feature.rice.desc" },
    { icon: Sunset, t: "about.feature.sunset.title", d: "about.feature.sunset.desc" },
    { icon: Coffee, t: "about.feature.coffee.title", d: "about.feature.coffee.desc" },
  ] as const;

  return (
    <section id="about" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text */}
          <div>
            <SectionHeading
              align="left"
              kicker={tr("about.kicker")}
              title={tr("about.title")}
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/80">
              <p>{tr("about.p1")}</p>
              <p>{tr("about.p2")}</p>
            </div>

            <dl className="mt-8 grid gap-4 sm:grid-cols-3">
              {features.map((f) => (
                <div
                  key={f.t}
                  className="rounded-2xl border border-border/60 bg-card p-4"
                >
                  <f.icon className="size-6 text-leaf" />
                  <dt className="mt-3 font-heading text-base font-semibold">
                    {tr(f.t)}
                  </dt>
                  <dd className="mt-1 text-sm text-muted-foreground">
                    {tr(f.d)}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Photo panel */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border/60 shadow-xl sm:aspect-square lg:aspect-[4/5]">
              <Image
                src={venueOutdoor}
                alt="MAHA Kopi Bali outdoor terrace with rice-field view"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-heading text-lg font-semibold text-cream">
                  {pick({ id: "Duduk & Nikmati", en: "Sit & Savor" })}
                </p>
                <p className="text-sm text-cream/80">Kelating, Tabanan · Bali</p>
              </div>
            </div>
            {/* rating chip */}
            <div className="absolute -left-3 -top-3 rounded-2xl border border-border/60 bg-card px-4 py-3 shadow-lg">
              <p className="font-heading text-2xl font-bold text-espresso">4,9★</p>
              <p className="text-xs text-muted-foreground">91 Google reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
