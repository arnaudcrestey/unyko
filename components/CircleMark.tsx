export function CircleMark({ className = "" }: { className?: string }) {
  return (
    <div className={`relative aspect-square rounded-full border border-gold/45 gold-ring ${className}`} aria-hidden="true">
      <div className="absolute inset-[18%] rounded-full border border-ivory/10" />
      <div className="absolute inset-[34%] rounded-full border border-sage/25" />
      <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold shadow-halo" />
    </div>
  );
}
