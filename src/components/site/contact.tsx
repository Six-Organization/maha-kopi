"use client";

import { MessageCircle, Phone } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { LinkButton } from "@/components/site/link-button";
import { InstagramGlyph } from "@/components/site/icons";
import { site } from "@/data/site";

export function Contact() {
  const { tr } = useLanguage();

  return (
    <section id="contact" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-border/60 bg-gradient-to-br from-[oklch(0.5_0.09_150)] to-[oklch(0.4_0.06_52)] px-6 py-16 text-center shadow-xl sm:px-12">
          <div aria-hidden className="pointer-events-none absolute inset-0 opacity-20">
            <div className="absolute -right-10 -top-10 size-52 rounded-full bg-gold blur-2xl" />
            <div className="absolute -bottom-16 -left-10 size-52 rounded-full bg-leaf blur-2xl" />
          </div>

          <div className="relative">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              {tr("contact.kicker")}
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-cream text-balance sm:text-4xl">
              {tr("contact.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-md text-cream/80">
              {tr("contact.subtitle")}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <LinkButton
                href={`https://wa.me/${site.phone.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="h-11 gap-2 rounded-full bg-cream px-6 text-sm text-espresso hover:bg-cream/90"
              >
                <MessageCircle className="size-4" />
                {tr("contact.whatsapp")}
              </LinkButton>
              <LinkButton
                href={`tel:${site.phone.tel}`}
                variant="outline"
                className="h-11 gap-2 rounded-full border-cream/30 bg-transparent px-6 text-sm text-cream hover:bg-cream/10 hover:text-cream"
              >
                <Phone className="size-4" />
                {tr("contact.call")}
              </LinkButton>
              <LinkButton
                href={site.social.instagram}
                target="_blank"
                rel="noreferrer"
                variant="outline"
                className="h-11 gap-2 rounded-full border-cream/30 bg-transparent px-6 text-sm text-cream hover:bg-cream/10 hover:text-cream"
              >
                <InstagramGlyph className="size-4" />
                {site.social.instagramHandle}
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
