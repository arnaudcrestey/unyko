import { dimensions } from "@/lib/content";

export function DimensionGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {dimensions.map(({ Icon, ...dimension }, index) => (
        <article key={dimension.key} className="premium-card group rounded-[2rem] p-7 transition hover:border-gold/35">
          <div className="flex items-start justify-between gap-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/35 bg-gold/10 text-gold">
              {Icon ? <Icon size={20} /> : null}
            </div>
            <span className="font-serif text-4xl text-ivory/15">0{index + 1}</span>
          </div>
          <h3 className="mt-7 font-serif text-3xl text-ivory">{dimension.name}</h3>
          <p className="mt-3 text-sm text-gold/80">{dimension.question}</p>
          <p className="mt-5 text-sm leading-7 text-ivory/60">{dimension.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {dimension.subDimensions.map((sub) => <span key={sub} className="rounded-full border border-ivory/10 px-3 py-1 text-xs text-ivory/55">{sub}</span>)}
          </div>
        </article>
      ))}
    </div>
  );
}
