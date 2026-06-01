import { PageShell } from "@/components/PageShell";
import { SectionHeader } from "@/components/SectionHeader";
import { ecosystem } from "@/lib/content";

export default function EcosystemePage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <SectionHeader eyebrow="Écosystème" title="SYSTIA, ARHI et UNYKO répondent à une même exigence humaine." text="Comment l'intelligence artificielle peut-elle aider une organisation à rester profondément humaine ? Chaque pilier structure une partie essentielle de cette réponse." />
        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {ecosystem.map(({ Icon, ...pillar }) => (
            <article key={pillar.name} className="premium-card rounded-[2rem] p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 text-gold"><Icon size={22} /></div>
              <h2 className="mt-8 font-serif text-5xl text-ivory">{pillar.name}</h2>
              <p className="mt-3 text-gold/80">{pillar.role}</p>
              <p className="mt-6 text-sm leading-7 text-ivory/60">{pillar.question}</p>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
