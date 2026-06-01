import Link from "next/link";
import type { ReactNode } from "react";

export function ButtonLink({ href, children, variant = "primary" }: { href: string; children: ReactNode; variant?: "primary" | "secondary" }) {
  const classes = variant === "primary"
    ? "border-gold/60 bg-gold text-ink hover:bg-ivory"
    : "border-ivory/15 bg-ivory/5 text-ivory hover:border-gold/50 hover:text-gold";

  return (
    <Link href={href} className={`inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-medium transition ${classes}`}>
      {children}
    </Link>
  );
}
