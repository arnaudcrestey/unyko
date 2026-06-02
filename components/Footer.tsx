import Link from "next/link";
import { Logo } from "@/components/Logo";
import { ecosystem, navItems } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-ivory/10 bg-night/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <Logo />

          <p className="mt-5 max-w-sm text-sm leading-7 text-ivory/60">
            UNYKO mesure l&apos;indice de recommandabilité organisationnelle des
            marques, équipes et dirigeants à l&apos;ère de l&apos;IA.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gold/80">
            Parcours
          </p>

          <div className="mt-5 grid gap-3 text-sm text-ivory/60">
            {navItems.map((item) => (
              <Link
                className="hover:text-gold"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}

            <Link className="hover:text-gold" href="/a-propos">
              À propos
            </Link>
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gold/80">
            Écosystème
          </p>

          <div className="mt-5 grid gap-3 text-sm text-ivory/60">
            {ecosystem.map((pillar) => (
              <span key={pillar.name}>
                {pillar.name} — {pillar.role}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}