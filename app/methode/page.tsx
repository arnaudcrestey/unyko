import { CTASection } from "@/components/CTASection";
import { PageShell } from "@/components/PageShell";
import { SectionHeader } from "@/components/SectionHeader";

const methodSteps = [
  {
    number: "01",
    title: "Comprendre",
    text: "Lire ce que l’organisation montre réellement : son activité, son positionnement, son fonctionnement et ses signaux de confiance.",
  },
  {
    number: "02",
    title: "Interpréter",
    text: "Identifier les forces, les fragilités et les éléments qui influencent la perception de l’organisation.",
  },
  {
    number: "03",
    title: "Mesurer",
    text: "Transformer ces signaux en indicateurs simples pour évaluer le niveau de confiance perçu.",
  },
  {
    number: "04",
    title: "Orienter",
    text: "Repérer les leviers prioritaires pour améliorer la compréhension, la crédibilité ou la recommandation.",
  },
  {
    number: "05",
    title: "Préparer l’action",
    text: "Fournir une lecture permettant d’identifier les prochaines actions les plus pertinentes.",
  },
];

export default function MethodePage() {
  return (
    <PageShell>
      <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <SectionHeader
          eyebrow="Méthode UNYKO™"
          title="Comprendre ce qui inspire confiance."
          text="UNYKO analyse les signaux qui permettent à une organisation d’être comprise, crédible, identifiable et naturellement recommandable dans son environnement professionnel."
        />

        <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
          {methodSteps.map((step) => (
            <article
              key={step.number}
              className="premium-card group flex min-h-[245px] flex-col rounded-[1.75rem] p-6 transition-all duration-300 sm:min-h-[270px] sm:rounded-[2rem] sm:p-7 lg:min-h-[300px] lg:p-8"
            >
              <span className="font-serif text-3xl leading-none text-gold/60 sm:text-4xl">
                {step.number}
              </span>

              <h2 className="mt-7 font-serif text-3xl leading-tight text-ivory sm:mt-8 lg:text-[2rem]">
                {step.title}
              </h2>

              <p className="mt-4 text-sm font-light leading-7 text-ivory/62 sm:mt-5">
                {step.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-5 pb-16 text-center sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
        <div className="mx-auto rounded-[2rem] border border-gold/15 bg-white/[0.025] px-6 py-10 shadow-[0_24px_90px_rgba(0,0,0,0.22)] sm:rounded-[2.5rem] sm:px-10 sm:py-14 md:px-14 md:py-16">
          <p className="text-[10px] font-semibold uppercase leading-5 tracking-[0.28em] text-gold/75 sm:text-xs sm:tracking-[0.34em]">
            Dans l’écosystème Arnaud Crestey
          </p>

          <h2 className="mx-auto mt-6 max-w-3xl font-serif text-[2.25rem] leading-[1.05] tracking-[-0.03em] text-ivory sm:text-5xl md:text-6xl">
            UNYKO donne une lecture à la confiance.
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-[15px] font-light leading-8 text-ivory/65 sm:text-base md:text-lg md:leading-9">
            Là où SYSTIA structure l’activité, les systèmes et le pilotage, où
            ARHI éclaire le management, les rôles et les dynamiques humaines,
            UNYKO analyse la capacité globale d’une organisation à être
            comprise, crédible, choisie et recommandée.
          </p>
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}