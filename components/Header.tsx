import { navItems } from "@/lib/content";
import { ButtonLink } from "@/components/ButtonLink";
import { Logo } from "@/components/Logo";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ivory/10 bg-ink/75 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-7 text-sm text-ivory/70 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-gold">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <ButtonLink href="/diagnostic">Mesurer l'Indice</ButtonLink>
        </div>
      </div>
    </header>
  );
}
