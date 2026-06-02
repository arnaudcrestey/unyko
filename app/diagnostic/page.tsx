Pour ce fichier, il faut garder **la version Codex / nouvelle direction** et supprimer tout l’ancien bloc `main`.

Remplace tout le fichier par ceci :

```tsx
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { DimensionGrid } from "@/components/DimensionGrid";
import { PageShell } from "@/components/PageShell";
import { SectionHeader } from "@/components/SectionHeader";

export default function DiagnosticPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-gold/80">
              Page reine
            </p>

            <h1 className="mt-6 font-serif text-6xl leading-[0.9] text-ivory md:text-8xl">
              Diagnostic de recommandabilité organisationnelle.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-ivory/65">
              L&apos;Indice UNYKO™ révèle pourquoi une organisation devient
              visible, lisible, crédible, présente, autoritaire et
              recommandable à l&apos;ère de l&apos;IA.
            </p>

            <div className="mt-10">
              <ButtonLink href="/diagnostic/lancer">
                Lancer le diagnostic
              </ButtonLink>
            </div>
          </div>

          <div className="premium-card rounded-[2.5rem] p-8">
            <p className="text-xs uppercase tracking-[0.34em] text-gold/80">
              V1 fonctionnelle
            </p>

            <div className="mt-7 grid gap-5 text-sm leading-7 text-ivory/60">
              <p>25 questions tirées aléatoirement à chaque lancement.</p>
              <p>
                5 questions par pilier : lisibilité, crédibilité, présence,
                autorité, recommandabilité.
              </p>
              <p>
                Calcul immédiat des cinq scores et de l&apos;Indice UNYKO™.
              </p>
              <p>Architecture prête pour Supabase, n8n et OpenAI.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <SectionHeader
          eyebrow="Les 5 piliers"
          title="Une lecture propriétaire de la recommandabilité."
        />

        <div className="mt-12">
          <DimensionGrid />
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}
```

Ensuite clique **Mark as resolved**.
