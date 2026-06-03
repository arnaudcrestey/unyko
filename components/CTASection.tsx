import { ButtonLink } from "@/components/ButtonLink";

export function CTASection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <div className="premium-card relative overflow-hidden rounded-[2.5rem] p-8 text-center md:p-14">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-halo blur-2xl" />

        <div className="relative mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-gold/80">
            Diagnostic UNYKO
          </p>

          <h2 className="mt-5 font-serif text-4xl leading-none text-ivory md:text-6xl">
            Être compris. Inspirer confiance.
            <br />
            Être recommandé.
          </h2>

          <p className="mt-6 text-base leading-8 text-ivory/60">
            Découvrez ce que votre organisation inspire aujourd&apos;hui :
            sa clarté, sa crédibilité, sa réputation et ce qui donne envie de
            la recommander.
          </p>

          <div className="mt-10">
            <ButtonLink href="/diagnostic/lancer">
              Mesurer votre indice UNYKO
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}