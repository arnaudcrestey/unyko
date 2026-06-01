import { CircleMark } from "@/components/CircleMark";
import { Logo } from "@/components/Logo";

export default function VitrinePage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ink px-6 text-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(215,181,109,0.18),transparent_46%)]" />
      <div className="absolute h-[86vmin] w-[86vmin] rounded-full border border-gold/20" />
      <div className="absolute h-[62vmin] w-[62vmin] rounded-full border border-ivory/10" />
      <div className="relative z-10 flex max-w-3xl flex-col items-center">
        <CircleMark className="mb-12 w-52 md:w-72" />
        <Logo />
        <h1 className="mt-10 font-serif text-6xl leading-none text-ivory md:text-8xl">Structurer la confiance.</h1>
        <p className="mt-8 max-w-xl text-base leading-8 text-ivory/65 md:text-lg">
          UNYKO révèle, mesure et renforce le capital confiance des organisations.
        </p>
      </div>
    </main>
  );
}
