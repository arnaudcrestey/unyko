import { ButtonLink } from "@/components/ButtonLink";
import { DimensionGrid } from "@/components/DimensionGrid";
import { PageShell } from "@/components/PageShell";
import { SectionHeader } from "@/components/SectionHeader";

const evolutionCards = [
  {
    title: "Avant",
    subtitle: "Être visible",
    text: "Les organisations cherchaient principalement à être trouvées dans les moteurs de recherche.",
  },
  {
    title: "Aujourd'hui",
    subtitle: "Être compris",
    text: "Les contenus, les preuves et la cohérence deviennent essentiels pour être clairement identifiés et reconnus.",
  },
  {
    title: "Demain",
    subtitle: "Inspirer confiance",
    text: "Les organisations qui inspirent confiance deviennent plus facilement choisies, recommandées et mémorisées.",
  },
];

const levels = [
  "Expertise invisible",
  "Organisation repérable",
  "Confiance émergente",
  "Référence montante",
  "Référence de confiance",
];

export default function DiagnosticPage() {
  return (
    <PageShell>
      <section className="mx-auto w-full max-w-7xl px-5 pb-12 pt-12 sm:px-6 sm:pb-16 sm:pt-16 lg:px-8 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-14">
          <div className="text-center lg:text-left">
            <p className="text-[10px] font-semibold uppercase leading-5 tracking-[0.26em] text-gold/80 sm:text-xs sm:tracking-[0.34em]">
              Diagnostic UNYKO™
            </p>

            <h1 className="mx-auto mt-5 max-w-none font-serif text-[3.2rem] leading-[0.94] tracking-[-0.05em] text-ivory sm:mt-6 sm:text-6xl md:text-7xl lg:mx-0 lg:text-8xl">
  Mesurez votre recommandabilité.
</h1>

            <p className="mx-auto mt-6 max-w-[34rem] text-[15px] font-light leading-8 text-ivory/62 sm:mt-7 sm:text-base md:text-lg md:leading-9 lg:mx-0 lg:max-w-2xl">
              UNYKO mesure la capacité d’une organisation à être comprise,
              crédible, mémorable et recommandée. Un diagnostic pensé pour
              l’époque où la confiance devient plus stratégique que la simple
              visibilité.
            </p>
          </div>

          <aside className="premium-card rounded-[1.75rem] p-6 sm:rounded-[2.25rem] sm:p-8 lg:p-10">
            <p className="text-[10px] font-semibold uppercase leading-5 tracking-[0.26em] text-gold/80 sm:text-xs sm:tracking-[0.34em]">
              Ce que mesure UNYKO
            </p>

            <div className="mt-6 grid gap-4 text-sm font-light leading-7 text-ivory/62 sm:mt-7 sm:gap-5">
  <p>La clarté de votre activité et de votre positionnement.</p>
  <p>La confiance inspirée par vos preuves et vos résultats.</p>
  <p>Votre présence dans votre environnement professionnel.</p>
  <p>La qualité de votre expertise, de votre management et de votre pilotage.</p>
  <p>Ce qui donne naturellement envie de vous recommander.</p>
</div>
          </aside>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeader
          eyebrow="Pourquoi ce diagnostic existe"
          title="La visibilité ne suffit plus."
          text="Être visible ne garantit plus d’être choisi. Dans un monde saturé d’informations, les organisations les plus fortes sont celles qui inspirent confiance, démontrent leur valeur et deviennent naturellement recommandables."
        />

        <p className="mt-8 max-w-2xl text-[10px] font-semibold uppercase leading-6 tracking-[0.24em] text-gold/75 sm:mt-9 sm:text-xs sm:tracking-[0.28em]">
          Trois évolutions expliquent ce changement.
        </p>

        <div className="mt-7 grid gap-4 sm:gap-5 md:grid-cols-3">
          {evolutionCards.map((card) => (
            <article
              key={card.title}
              className="premium-card rounded-[1.75rem] p-6 sm:rounded-[2rem] sm:p-8"
            >
              <h3 className="font-serif text-2xl leading-tight text-ivory md:text-3xl">
                {card.title}
              </h3>

              <p className="mt-4 text-sm text-gold/80">{card.subtitle}</p>

              <p className="mt-5 text-sm font-light leading-7 text-ivory/60">
                {card.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeader
          eyebrow="Les piliers de l’indice"
          title="Une lecture globale de la recommandabilité."
          text="UNYKO analyse les facteurs qui construisent durablement la confiance : votre message, vos preuves, votre réputation, votre cohérence et votre capacité à être recommandé."
        />

        <div className="mt-9 sm:mt-12">
          <DimensionGrid />
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeader
          eyebrow="Indice UNYKO™"
          title="Cinq profils pour comprendre votre organisation."
          text="Chaque profil révèle la manière dont votre organisation est comprise, perçue et recommandée."
        />

        <div className="mt-9 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-5">
          {levels.map((level, index) => (
            <article
              key={level}
              className="premium-card relative overflow-hidden rounded-[1.75rem] p-6"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-gold/70 sm:text-xs sm:tracking-[0.28em]">
                Profil {index + 1}
              </p>

              <p className="mt-5 font-serif text-2xl leading-tight text-ivory">
                {level}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 pb-20 pt-6 sm:px-6 sm:pb-24 lg:px-8">
        <div className="premium-card rounded-[1.75rem] px-6 py-9 text-center sm:rounded-[2rem] sm:px-10 sm:py-12 lg:px-14 lg:py-14">
          <p className="text-[10px] font-semibold uppercase leading-5 tracking-[0.26em] text-gold/75 sm:text-xs sm:tracking-[0.28em]">
            Comprendre avant d’évaluer
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl font-serif text-[2.25rem] leading-[0.98] tracking-[-0.04em] text-ivory sm:text-5xl md:text-6xl">
            Découvrez la méthode UNYKO™
          </h2>

          <p className="mx-auto mt-6 max-w-[34rem] text-[15px] font-light leading-8 text-ivory/60 sm:text-base lg:max-w-2xl">
            Avant de lancer votre diagnostic, découvrez les principes qui
            permettent à UNYKO d’analyser la confiance, la lisibilité et la
            recommandabilité d’une organisation.
          </p>

          <div className="mt-9 flex justify-center">
            <ButtonLink href="/methode">
              Découvrir la méthode
            </ButtonLink>
          </div>
        </div>
      </section>
    </PageShell>
  );
}