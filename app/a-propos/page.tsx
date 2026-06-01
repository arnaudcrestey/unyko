import { CTASection } from "@/components/CTASection";
import { PageShell } from "@/components/PageShell";

export default function AboutPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-5xl px-5 py-24 text-center lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.34em] text-gold/80">À propos</p>
        <h1 className="mt-6 font-serif text-6xl leading-[0.9] text-ivory md:text-8xl">UNYKO structure ce que les organisations ne savent pas toujours nommer.</h1>
        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-ivory/65">
          Dans un environnement saturé de productions artificielles, le capital confiance devient un actif stratégique. UNYKO le rend visible, mesurable et renforçable avec exigence.
        </p>
      </section>
      <CTASection />
    </PageShell>
  );
}
