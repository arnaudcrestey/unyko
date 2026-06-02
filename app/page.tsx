import { CTASection } from "@/components/CTASection";
import { DimensionGrid } from "@/components/DimensionGrid";
import { Hero } from "@/components/Hero";
import { PageShell } from "@/components/PageShell";
import { SectionHeader } from "@/components/SectionHeader";
import { ecosystem } from "@/lib/content";

export default function HomePage() {
  return (
    <PageShell>
      <Hero />
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionHeader eyebrow="Positionnement" title="Quand l'IA produit partout, la recommandabilité devient décisive." text="UNYKO ne mesure pas le bruit, les impressions ou la popularité. Il analyse les conditions qui rendent une organisation lisible, crédible, présente, légitime et recommandable." />
        <div className="mt-12"><DimensionGrid /></div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionHeader eyebrow="Écosystème Arnaud Crestey" title="Trois piliers pour clarifier l'organisation à l'ère de l'IA." align="center" />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {ecosystem.map(({ Icon, ...pillar }) => (
            <article key={pillar.name} className="premium-card rounded-[2rem] p-7 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 text-gold"><Icon size={22} /></div>
              <h3 className="mt-6 font-serif text-3xl text-ivory">{pillar.name}</h3>
              <p className="mt-2 text-sm text-gold/80">{pillar.role}</p>
              <p className="mt-5 text-sm leading-7 text-ivory/60">{pillar.question}</p>
            </article>
          ))}
        </div>
      </section>
      <CTASection />
    </PageShell>
  );
}
