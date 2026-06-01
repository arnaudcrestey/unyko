export function SectionHeader({ eyebrow, title, text, align = "left" }: { eyebrow: string; title: string; text?: string; align?: "left" | "center" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-xs font-semibold uppercase tracking-[0.34em] text-gold/80">{eyebrow}</p>
      <h2 className="mt-4 font-serif text-4xl leading-[0.95] text-ivory md:text-6xl">{title}</h2>
      {text ? <p className="mt-6 text-base leading-8 text-ivory/65 md:text-lg">{text}</p> : null}
    </div>
  );
}
