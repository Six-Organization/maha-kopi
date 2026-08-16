"use client";

import { Flame, Leaf, Star, Sparkles } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import type { MenuTag } from "@/data/menu";
import { cn } from "@/lib/utils";

// Solid, opaque chips so they stay legible on both light cards and the dark
// "Signatures" section.
const CONFIG: Record<
  MenuTag,
  { key: string; icon: typeof Star; className: string; fillIcon?: boolean }
> = {
  popular: {
    key: "tag.popular",
    icon: Star,
    className: "bg-gold text-espresso border-transparent",
    fillIcon: true,
  },
  signature: {
    key: "tag.signature",
    icon: Sparkles,
    className: "bg-espresso text-gold border-transparent",
  },
  spicy: {
    key: "tag.spicy",
    icon: Flame,
    className: "bg-clay text-white border-transparent",
  },
  veg: {
    key: "tag.veg",
    icon: Leaf,
    className: "bg-leaf text-leaf-foreground border-transparent",
  },
};

export function MenuTagBadge({ tag }: { tag: MenuTag }) {
  const { tr } = useLanguage();
  const c = CONFIG[tag];
  const Icon = c.icon;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[0.65rem] font-semibold shadow-sm",
        c.className,
      )}
    >
      <Icon className={cn("size-3", c.fillIcon && "fill-current")} />
      {tr(c.key)}
    </span>
  );
}
