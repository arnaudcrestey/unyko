import { ButtonLink } from "@/components/ButtonLink";
import { CircleMark } from "@/components/CircleMark";

export function Hero() {
  return (
    <section className="relative mx-auto grid min-h-[82vh] max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
      <div className="relative z-10">
        <p className="text-xs font-semibold uppercase tracking-[0.34em] text-gold/80">Indice UNYKO™</p>
        <h1 className="mt-6 max-w-5xl font-serif text-6xl leading-[0.88] tracking-[-0.04em] text-ivory md:text-8xl">
          Structurer le capital confiance.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-ivory/65">
          UNYKO mesure la solidité relationnelle d&#39;une organisation : sa crédibilité, sa recommandation naturelle, sa communauté et son empreinte relationnelle.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/diagnostic">Découvrir le diagnostic</ButtonLink>
          <ButtonLink href="/vitrine" variant="secondary">Voir la page signature</ButtonLink>
        </div>
      </div>
      <div className="relative mx-auto w-full max-w-[520px]">
        <div className="absolute inset-0 rounded-full bg-halo blur-2xl" />
        <CircleMark className="relative w-full" />
        <div className="premium-card absolute left-1/2 top-1/2 w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full p-8 text-center">
          <p className="font-serif text-6xl text-gold">84</p>
          <p className="mt-2 text-xs uppercase tracking-[0.34em] text-ivory/55">Indice UNYKO</p>
          <p className="mt-5 text-sm leading-6 text-ivory/60">Un score de lecture du capital confiance. Jamais une mesure de popularité.</p>
        </div>
      </div>
    </section>
  );
}
