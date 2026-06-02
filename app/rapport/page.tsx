import { CTASection } from "@/components/CTASection";
import { PageShell } from "@/components/PageShell";

const blocks = ["Indice UNYKO™", "Scores par pilier", "Lecture des écarts", "Priorités de visibilité", "Trajectoire de recommandabilité"];

export default function RapportPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-gold/80">Rapport</p>
            <h1 className="mt-6 font-serif text-6xl leading-[0.9] text-ivory md:text-8xl">Un rapport pour piloter votre recommandabilité.</h1>
            <p className="mt-8 text-lg leading-8 text-ivory/65">Le rapport UNYKO transforme le diagnostic en lecture stratégique de votre visibilité, de votre lisibilité, de votre crédibilité, de votre présence et de votre autorité.</p>
          </div>
          <div className="premium-card rounded-[2.5rem] p-8">
            <div className="grid gap-3">
              {blocks.map((block) => <div key={block} className="rounded-2xl border border-ivory/10 bg-ink/35 px-5 py-4 text-ivory/70">{block}</div>)}
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </PageShell>
  );
}
