import type { ReactNode } from "react";
import { Header } from "@/components/Header";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />

      <main className="relative overflow-hidden">
        <div className="circle-grid pointer-events-none fixed inset-0 opacity-40" />
        {children}
      </main>
    </>
  );
}