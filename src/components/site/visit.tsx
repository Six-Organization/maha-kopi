"use client";

import { MapPin, Clock, Phone, Check, X, ExternalLink } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { SectionHeading } from "@/components/site/section-heading";
import { LinkButton } from "@/components/site/link-button";
import { site } from "@/data/site";

export function Visit() {
  const { tr, pick } = useLanguage();
  const mapSrc = `https://www.google.com/maps?q=${site.address.lat},${site.address.lng}&z=15&output=embed`;

  const services = [
    { on: site.services.dineIn, label: tr("visit.dinein") },
    { on: site.services.takeaway, label: tr("visit.takeaway") },
    { on: site.services.delivery, label: tr("visit.delivery") },
  ];

  return (
    <section id="visit" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading kicker={tr("visit.kicker")} title={tr("visit.title")} />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Map */}
          <div className="relative overflow-hidden rounded-3xl border border-border/60 shadow-md">
            <iframe
              title="MAHA Kopi Bali — Google Maps"
              src={mapSrc}
              className="h-full min-h-[340px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info */}
          <div className="grid gap-4 sm:grid-cols-2">
            <InfoCard icon={MapPin} title={tr("visit.address")} className="sm:col-span-2">
              <p className="text-sm text-muted-foreground">{site.address.line}</p>
              <p className="mt-1 text-xs text-muted-foreground/80">
                Plus Code: {site.address.plusCode}
              </p>
              <LinkButton
                href={site.social.directions}
                target="_blank"
                rel="noreferrer"
                variant="outline"
                className="mt-3 h-8 gap-1.5 rounded-full px-4 text-[0.8rem]"
              >
                {tr("visit.directions")}
                <ExternalLink className="size-3.5" />
              </LinkButton>
            </InfoCard>

            <InfoCard icon={Clock} title={tr("visit.hours")}>
              <p className="text-sm font-medium">
                {tr("visit.everyday")}
              </p>
              <p className="text-sm text-muted-foreground">
                {site.hours.open} – {site.hours.close}
              </p>
            </InfoCard>

            <InfoCard icon={Phone} title={tr("visit.phone")}>
              <a
                href={`tel:${site.phone.tel}`}
                className="text-sm font-medium text-primary hover:underline"
              >
                {site.phone.display}
              </a>
            </InfoCard>

            <InfoCard icon={Check} title={tr("visit.services")} className="sm:col-span-2">
              <ul className="mt-1 flex flex-wrap gap-x-6 gap-y-2">
                {services.map((s) => (
                  <li
                    key={s.label}
                    className="inline-flex items-center gap-1.5 text-sm"
                  >
                    {s.on ? (
                      <Check className="size-4 text-leaf" />
                    ) : (
                      <X className="size-4 text-muted-foreground/60" />
                    )}
                    <span className={s.on ? "" : "text-muted-foreground/60 line-through"}>
                      {s.label}
                    </span>
                  </li>
                ))}
              </ul>
            </InfoCard>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon: Icon,
  title,
  children,
  className,
}: {
  icon: typeof MapPin;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-2xl border border-border/60 bg-card p-5 ${className ?? ""}`}>
      <div className="flex items-center gap-2 text-leaf">
        <Icon className="size-4" />
        <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-foreground">
          {title}
        </h3>
      </div>
      <div className="mt-2">{children}</div>
    </div>
  );
}
