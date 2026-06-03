"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { Logo } from "@/components/Logo";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ivory/10 bg-ink/85 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <div className="shrink-0 scale-[0.85] origin-left sm:scale-100">
          <Logo />
        </div>

        {/* Desktop */}
        <div className="hidden sm:block">
          <ButtonLink href="/diagnostic/lancer">
            Mesurer votre indice UNYKO
          </ButtonLink>
        </div>

        {/* Mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/20 bg-white/[0.02] text-gold sm:hidden"
        >
          {open ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {open && (
        <div className="border-t border-ivory/10 bg-ink/95 px-5 py-5 sm:hidden">
  <div className="flex justify-end">
    <ButtonLink href="/diagnostic/lancer">
      Mesurer votre indice UNYKO
    </ButtonLink>
  </div>
</div>
      )}
    </header>
  );
}