"use client";

import * as React from "react";
import Image from "next/image";
import { Search, Download } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { SectionHeading } from "@/components/site/section-heading";
import { MenuTagBadge } from "@/components/site/menu-tag";
import { LinkButton } from "@/components/site/link-button";
import {
  menu,
  formatPrice,
  type MenuCategory,
  type MenuItem,
} from "@/data/menu";
import { menuImage } from "@/data/menu-images";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export function MenuSection() {
  const { tr, pick } = useLanguage();
  const [active, setActive] = React.useState<string>("all");
  const [query, setQuery] = React.useState("");

  const q = query.trim().toLowerCase();

  const filtered: MenuCategory[] = React.useMemo(() => {
    return menu
      .filter((cat) => active === "all" || cat.id === active)
      .map((cat) => ({
        ...cat,
        items: cat.items.filter((item) => {
          if (!q) return true;
          const hay = (
            item.name +
            " " +
            (item.desc ? item.desc.en + " " + item.desc.id : "")
          ).toLowerCase();
          return hay.includes(q);
        }),
      }))
      .filter((cat) => cat.items.length > 0);
  }, [active, q]);

  return (
    <section id="menu" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker={tr("menu.kicker")}
          title={tr("menu.title")}
          subtitle={tr("menu.subtitle")}
        />

        {/* Controls */}
        <div className="mt-10 flex flex-col gap-4">
          <div className="relative mx-auto w-full max-w-md">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={tr("menu.search")}
              className="w-full rounded-full border border-border bg-card py-2.5 pl-10 pr-4 text-sm outline-none transition-colors focus:border-leaf focus:ring-2 focus:ring-leaf/20"
            />
          </div>

          <div className="-mx-4 flex snap-x gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0">
            <Pill active={active === "all"} onClick={() => setActive("all")}>
              {tr("menu.all")}
            </Pill>
            {menu.map((cat) => (
              <Pill
                key={cat.id}
                active={active === cat.id}
                onClick={() => setActive(cat.id)}
              >
                {pick(cat.label)}
              </Pill>
            ))}
          </div>
        </div>

        {/* Groups */}
        <div className="mt-12 space-y-14">
          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground">{tr("menu.empty")}</p>
          )}
          {filtered.map((cat) => (
            <div key={cat.id} className="scroll-mt-24" id={`menu-${cat.id}`}>
              <div className="mb-6 flex items-end justify-between gap-4 border-b border-border/60 pb-3">
                <div>
                  {cat.kicker && (
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-leaf">
                      {pick(cat.kicker)}
                    </p>
                  )}
                  <h3 className="font-heading text-2xl font-bold">
                    {pick(cat.label)}
                  </h3>
                </div>
                <span className="shrink-0 text-sm text-muted-foreground">
                  {cat.items.length}
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {cat.items.map((item) => (
                  <MenuItemCard key={item.name} item={item} pick={pick} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tax note + download */}
        <div className="mt-14 flex flex-col items-center gap-4 text-center">
          <LinkButton
            href="/maha-kopi-menu.pdf"
            target="_blank"
            rel="noreferrer"
            variant="outline"
            className="h-10 gap-1.5 rounded-full px-5"
          >
            <Download className="size-4" />
            {tr("menu.download")}
          </LinkButton>
          <p className="max-w-md text-xs text-muted-foreground">
            * {pick(site.taxNote)}
          </p>
        </div>
      </div>
    </section>
  );
}

function Pill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "shrink-0 snap-start whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-colors",
        active
          ? "border-primary bg-primary text-primary-foreground shadow-sm"
          : "border-border bg-card text-foreground/75 hover:border-leaf/40 hover:text-foreground",
      )}
    >
      {children}
    </button>
  );
}

function MenuItemCard({
  item,
  pick,
}: {
  item: MenuItem;
  pick: (v: { id: string; en: string }) => string;
}) {
  const img = menuImage(item.name);
  return (
    <div className="flex gap-4 rounded-2xl border border-border/60 bg-card p-4 transition-shadow hover:shadow-md">
      {/* Dish photo */}
      <div className="relative size-24 shrink-0 self-center overflow-hidden rounded-xl bg-gradient-to-br from-secondary to-accent/60 sm:size-28">
        {img ? (
          <Image
            src={img}
            alt={item.name}
            fill
            sizes="112px"
            className="object-contain p-1 drop-shadow-sm"
          />
        ) : (
          <div className="flex size-full items-center justify-center">
            <span className="font-heading text-2xl text-leaf/40">☕</span>
          </div>
        )}
      </div>

      {/* Details */}
      <div className="flex min-w-0 flex-1 flex-col">
      <div className="flex items-start justify-between gap-3">
        <h4 className="font-heading text-base font-semibold leading-snug">
          {item.name}
        </h4>
        {typeof item.price === "number" && (
          <span className="shrink-0 font-heading text-base font-bold text-primary">
            {formatPrice(item.price)}
          </span>
        )}
      </div>

      {item.desc && (
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {pick(item.desc)}
        </p>
      )}

      {/* Variants */}
      {item.variants && (
        <div className="mt-3 flex flex-wrap gap-2">
          {item.variants.map((v) => (
            <span
              key={v.label.en}
              className="inline-flex items-center gap-1.5 rounded-lg bg-secondary px-2.5 py-1 text-xs font-medium"
            >
              {pick(v.label)}
              <span className="font-bold text-primary">{formatPrice(v.price)}</span>
            </span>
          ))}
        </div>
      )}

      <div className="mt-auto flex flex-wrap items-center gap-2 pt-3">
        {item.tags?.map((tag) => <MenuTagBadge key={tag} tag={tag} />)}
        {item.addon && (
          <span className="text-xs font-medium text-muted-foreground">
            + {pick(item.addon)}
          </span>
        )}
      </div>
      </div>
    </div>
  );
}
