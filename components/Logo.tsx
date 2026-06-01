import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="UNYKO accueil">
      <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-gold/50 bg-gold/5 shadow-halo">
        <span className="h-3.5 w-3.5 rounded-full border border-sage/60" />
      </span>
      <span className="font-serif text-2xl tracking-[0.22em] text-ivory transition group-hover:text-gold">UNYKO</span>
    </Link>
  );
}
