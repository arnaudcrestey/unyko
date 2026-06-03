import Link from "next/link";
import { CircleMark } from "@/components/CircleMark";
import { Logo } from "@/components/Logo";

export default function VitrinePage() {
  return (
    <main className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-ink px-5 py-8 text-center text-ivory sm:px-6 md:px-8">
      {/* Halo principal */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(215,181,109,0.14),transparent_58%)]" />

      {/* Halo supérieur */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_40%)]" />

      {/* Cercles */}
      <div className="absolute h-[145vmin] w-[145vmin] rounded-full border border-gold/5" />
      <div className="absolute h-[105vmin] w-[105vmin] rounded-full border border-gold/5" />
      <div className="absolute h-[72vmin] w-[72vmin] rounded-full border border-gold/10" />

      {/* Dégradé bas */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink via-ink/70 to-transparent" />

      {/* Contenu */}
      <section className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center">
        {/* Symbole */}
        <CircleMark className="mb-6 w-24 opacity-90 sm:w-32 md:mb-10 md:w-52 lg:w-60" />

        {/* Logo */}
        <div className="origin-center scale-[1.15] sm:scale-[1.45] md:scale-[2] lg:scale-[2.3]">
          <Logo />
        </div>

        {/* Signature */}
        <p className="mt-8 max-w-[95vw] text-[9px] uppercase leading-5 tracking-[0.25em] text-gold/85 sm:mt-12 sm:text-[10px] sm:tracking-[0.38em] md:text-xs md:tracking-[0.55em]">
          Compris. Crédible. Recommandé.
        </p>

        <div className="mt-5 h-px w-20 bg-gold/25 sm:w-24" />

        {/* Titre */}
        <h1 className="mt-10 w-full max-w-[760px] font-serif text-[3rem] leading-[1] tracking-[-0.055em] text-ivory sm:mt-12 sm:text-5xl md:mt-14 md:max-w-[900px] md:text-6xl lg:text-7xl">
          <span className="block">Les moteurs de recherche indexent.</span>
          <span className="mt-4 block">Les IA recommandent.</span>
        </h1>

        {/* Texte */}
        <p className="mt-8 max-w-[620px] px-1 text-[16px] font-light leading-8 text-ivory/70 sm:text-base md:mt-10 md:max-w-2xl md:text-lg md:leading-9">
          UNYKO mesure ce qui rend une organisation compréhensible, crédible et
          recommandable à l&apos;ère de l&apos;intelligence artificielle.
        </p>

        {/* Bouton */}
        <Link
          href="/diagnostic"
          className="mt-12 inline-flex h-[58px] items-center justify-center rounded-full border border-gold/35 px-12 text-[11px] font-medium uppercase tracking-[0.32em] text-ivory transition-all duration-300 hover:border-gold/70 hover:bg-gold/10 sm:h-[60px] sm:px-14 sm:text-xs"
        >
          Commencer
        </Link>
      </section>
    </main>
  );
}
