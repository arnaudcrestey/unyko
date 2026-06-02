import { CTASection } from "@/components/CTASection";
import { PageShell } from "@/components/PageShell";
import { SectionHeader } from "@/components/SectionHeader";
import { methodSteps } from "@/lib/content";

export default function MethodePage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <SectionHeader
          eyebrow="Méthode"
          title="Une méthode pour rendre une organisation compréhensible, crédible et recommandable."
          text="UNYKO analyse les signaux qui influencent la visibilité, la crédibilité et la recommandation d'une organisation. La méthode transforme une présence dispersée en position claire et recommandable."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-5">
          {methodSteps.map(([title, text], index) => (
            <article
              key={title}
              className="premium-card rounded-[2rem] p-8"
            >
              <span className="font-serif text-5xl text-gold/80">
                0{index + 1}
              </span>

              <h2 className="mt-8 font-serif text-4xl text-ivory">
                {title}
              </h2>

              <p className="mt-5 text-sm leading-7 text-ivory/60">
                {text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}