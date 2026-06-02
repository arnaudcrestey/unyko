import { ButtonLink } from "@/components/ButtonLink";
import { PageShell } from "@/components/PageShell";
import { SectionHeader } from "@/components/SectionHeader";

const offers = [
  [
    "Diagnostic",
    "Mesure de l'Indice UNYKO™ et analyse des cinq piliers : lisibilité, crédibilité, présence, autorité et recommandabilité."
  ],
  [
    "Optimisation",
    "Correction des signaux faibles qui limitent la visibilité, la compréhension et la crédibilité de l'organisation."
  ],
  [
    "Accompagnement IA",
    "Développer la capacité de l'organisation à être comprise, identifiée et recommandée par les intelligences artificielles."
  ]
] as const;

export default function OffresPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <SectionHeader
          eyebrow="Offres"
          title="Des solutions pour développer la recommandabilité."
          text="Chaque offre part de l'Indice UNYKO™. La mesure précède l'optimisation, puis l'organisation renforce durablement sa visibilité, sa crédibilité et sa capacité à être recommandée."
          align="center"
        />

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {offers.map(([title, text]) => (
            <article
              key={title}
              className="premium-card rounded-[2rem] p-8"
            >
              <h2 className="font-serif text-4xl text-ivory">
                {title}
              </h2>

              <p className="mt-5 min-h-28 text-sm leading-7 text-ivory/60">
                {text}
              </p>

              <ButtonLink href="/diagnostic">
                Commencer
              </ButtonLink>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
