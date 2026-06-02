import { PageShell } from "@/components/PageShell";
import { SectionHeader } from "@/components/SectionHeader";
import { ecosystem } from "@/lib/content";

export default function EcosystemePage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <SectionHeader
          eyebrow="Écosystème"
          title="SYSTIA, ARHI et UNYKO clarifient trois dimensions de l'organisation."
          text="SYSTIA rend l'activité pilotable. ARHI rend les rôles et décisions lisibles. UNYKO mesure ce qui rend une organisation visible, crédible et recommandable à l'ère de l'IA."
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {ecosystem.map(({ Icon, ...pillar }) => (
            <article
              key={pillar.name}
              className="premium-card rounded-[2rem] p-8"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 text-gold">
                <Icon size={22} />
              </div>

              <h2 className="mt-8 font-serif text-5xl text-ivory">
                {pillar.name}
              </h2>

              <p className="mt-3 text-gold/80">{pillar.role}</p>

              <p className="mt-6 text-sm leading-7 text-ivory/60">
                {pillar.question}
              </p>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}