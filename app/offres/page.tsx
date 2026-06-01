import { ButtonLink } from "@/components/ButtonLink";
import { PageShell } from "@/components/PageShell";
import { SectionHeader } from "@/components/SectionHeader";

const offers = [
  ["Diagnostic", "Mesure initiale de l'Indice UNYKO™ et lecture des quatre dimensions."],
  ["Structuration", "Clarification des preuves, des messages et des cercles de recommandation naturelle."],
  ["Pilotage", "Suivi de l'évolution du capital confiance dans la durée."]
] as const;

export default function OffresPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <SectionHeader eyebrow="Offres" title="Des formats sobres pour consolider la confiance." text="Chaque offre part du diagnostic. La mesure précède la structuration, puis la consolidation s'inscrit dans la durée." align="center" />
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {offers.map(([title, text]) => (
            <article key={title} className="premium-card rounded-[2rem] p-8">
              <h2 className="font-serif text-4xl text-ivory">{title}</h2>
              <p className="mt-5 min-h-28 text-sm leading-7 text-ivory/60">{text}</p>
              <ButtonLink href="/diagnostic">Commencer</ButtonLink>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
