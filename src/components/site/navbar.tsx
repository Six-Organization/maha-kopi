"use client";

import * as React from "react";
import { Menu, Phone } from "lucide-react";
import { Logo } from "@/components/site/logo";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { LinkButton } from "@/components/site/link-button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#about", key: "nav.about" },
  { href: "#why", key: "nav.why" },
  { href: "#menu", key: "nav.menu" },
  { href: "#gallery", key: "nav.gallery" },
  { href: "#visit", key: "nav.visit" },
] as const;

export function Navbar() {
  const { tr } = useLanguage();
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/85 backdrop-blur-md shadow-sm"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="shrink-0" aria-label="MAHA Kopi Bali — home">
          <Logo />
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground"
            >
              {tr(l.key)}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <LanguageSwitcher className="hidden sm:inline-flex" />
          <LinkButton
            href={`tel:${site.phone.tel}`}
            className="hidden h-9 gap-1.5 rounded-full px-4 md:inline-flex"
          >
            <Phone className="size-4" />
            {tr("nav.reserve")}
          </LinkButton>

          {/* Mobile */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full md:hidden"
                  aria-label="Open menu"
                />
              }
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle className="text-left">
                  <Logo />
                </SheetTitle>
              </SheetHeader>
              <div className="mt-2 flex flex-col gap-1 px-4">
                {LINKS.map((l) => (
                  <SheetClose
                    key={l.href}
                    render={
                      <a
                        href={l.href}
                        className="rounded-lg px-3 py-2.5 text-base font-medium text-foreground/90 transition-colors hover:bg-accent"
                      />
                    }
                  >
                    {tr(l.key)}
                  </SheetClose>
                ))}
                <SheetClose
                  render={
                    <a
                      href="#contact"
                      className="rounded-lg px-3 py-2.5 text-base font-medium text-foreground/90 transition-colors hover:bg-accent"
                    />
                  }
                >
                  {tr("nav.contact")}
                </SheetClose>
              </div>
              <div className="mt-4 flex flex-col gap-3 px-4">
                <LanguageSwitcher />
                <LinkButton
                  href={`tel:${site.phone.tel}`}
                  className="h-10 gap-1.5 rounded-full"
                >
                  <Phone className="size-4" />
                  {tr("nav.reserve")}
                </LinkButton>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
