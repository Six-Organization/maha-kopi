"use client";

import { Trees, HeartHandshake, Wallet, Navigation } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { SectionHeading } from "@/components/site/section-heading";

export function Why() {
  const { tr } = useLanguage();

  const items = [
    { icon: Trees, t: "why.spacious.title", d: "why.spacious.desc" },
    { icon: HeartHandshake, t: "why.friendly.title", d: "why.friendly.desc" },
    { icon: Wallet, t: "why.value.title", d: "why.value.desc" },
    { icon: Navigation, t: "why.access.title", d: "why.access.desc" },
  ] as const;

  return (
    <section id="why" className="scroll-mt-20 bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker={tr("why.kicker")}
          title={tr("why.title")}
          subtitle={tr("why.subtitle")}
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div
              key={it.t}
              className="group rounded-2xl border border-border/60 bg-card p-6 transition-shadow hover:shadow-lg"
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-leaf/10 text-leaf transition-colors group-hover:bg-leaf group-hover:text-leaf-foreground">
                <it.icon className="size-6" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold">
                {tr(it.t)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {tr(it.d)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
