"use client";

import { MapPin, Star, ArrowRight, Coffee } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { LinkButton } from "@/components/site/link-button";
import { site } from "@/data/site";
import { menuStats } from "@/data/menu";

export function Hero() {
  const { tr } = useLanguage();

  return (
    <section id="top" className="relative isolate overflow-hidden">
      {/* Backdrop: warm sky + sun + rice terraces */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.95_0.05_80)] via-[oklch(0.96_0.03_90)] to-background" />
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1440 720"
          preserveAspectRatio="xMidYMax slice"
        >
          {/* sun */}
          <circle cx="1080" cy="210" r="120" fill="oklch(0.86 0.11 78)" opacity="0.55" />
          <circle cx="1080" cy="210" r="80" fill="oklch(0.9 0.1 82)" opacity="0.7" />
          {/* distant hills */}
          <path
            d="M0 470 Q 360 400 720 460 T 1440 440 V720 H0 Z"
            fill="oklch(0.62 0.07 150)"
            opacity="0.35"
          />
          {/* rice terraces */}
          <path
            d="M0 540 Q 400 490 800 540 T 1440 520 V720 H0 Z"
            fill="oklch(0.58 0.09 150)"
            opacity="0.5"
          />
          <path
            d="M0 620 Q 480 570 960 620 T 1440 610 V720 H0 Z"
            fill="oklch(0.5 0.1 150)"
            opacity="0.7"
          />
          {/* paddy rows */}
          {Array.from({ length: 7 }).map((_, i) => (
            <path
              key={i}
              d={`M0 ${650 + i * 10} Q 480 ${610 + i * 10} 960 ${650 + i * 10} T 1440 ${640 + i * 10}`}
              fill="none"
              stroke="oklch(0.45 0.09 150)"
              strokeWidth="1.5"
              opacity="0.35"
            />
          ))}
        </svg>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-20 pt-32 sm:px-6 sm:pb-28 sm:pt-40 lg:pt-44">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-leaf/30 bg-card/70 px-3 py-1 text-xs font-semibold text-leaf backdrop-blur">
            <Coffee className="size-3.5" />
            {tr("hero.badge")}
          </span>

          <h1 className="mt-5 font-heading text-4xl font-bold leading-[1.05] text-espresso text-balance sm:text-5xl lg:text-6xl">
            {tr("hero.title")}
          </h1>

          <p className="mt-5 max-w-xl text-base text-foreground/75 sm:text-lg">
            {tr("hero.subtitle")}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <LinkButton href="#menu" className="h-11 gap-2 rounded-full px-6 text-sm">
              {tr("hero.cta.menu")}
              <ArrowRight className="size-4" />
            </LinkButton>
            <LinkButton
              href={site.social.directions}
              target="_blank"
              rel="noreferrer"
              variant="outline"
              className="h-11 gap-2 rounded-full bg-card/60 px-6 text-sm backdrop-blur"
            >
              <MapPin className="size-4" />
              {tr("hero.cta.directions")}
            </LinkButton>
          </div>

          {/* Stats */}
          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-4">
            <Stat
              value={site.rating.toString().replace(".", ",")}
              label={tr("hero.stat.rating")}
              icon={<Star className="size-4 fill-gold text-gold" />}
            />
            <Stat value={`${site.reviewCount}`} label={tr("hero.stat.reviews")} />
            <Stat value={`${menuStats.items}+`} label={tr("hero.stat.menu")} />
          </dl>
        </div>
      </div>
    </section>
  );
}

function Stat({
  value,
  label,
  icon,
}: {
  value: string;
  label: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border/60 bg-card/70 p-4 backdrop-blur">
      <dt className="flex items-center gap-1.5 font-heading text-2xl font-bold text-espresso">
        {icon}
        {value}
      </dt>
      <dd className="mt-1 text-xs font-medium text-muted-foreground">{label}</dd>
    </div>
  );
}
