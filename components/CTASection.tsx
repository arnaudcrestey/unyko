import { ButtonLink } from "@/components/ButtonLink";

export function CTASection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <div className="premium-card relative overflow-hidden rounded-[2.5rem] p-8 text-center md:p-14">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-halo blur-2xl" />
        <div className="relative mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-gold/80">Diagnostic UNYKO</p>
          <h2 className="mt-5 font-serif text-4xl leading-none text-ivory md:text-6xl">Mesurer ce qui fait recommander.</h2>
          <p className="mt-6 text-base leading-8 text-ivory/60">
            Lancez une lecture structurée de votre capital confiance et identifiez les leviers qui consolident votre solidité relationnelle.
          </p>
          <div className="mt-9"><ButtonLink href="/diagnostic/lancer">Lancer le diagnostic</ButtonLink></div>
        </div>
      </div>
    </section>
  );
}
