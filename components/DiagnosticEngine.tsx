"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, RotateCcw } from "lucide-react";
import { createDiagnosticRun } from "@/lib/diagnostic";
import { dimensions } from "@/lib/content";
import { calculateScores, scoreKeyForDimension } from "@/lib/scoring";
import type { AnswerMap, DiagnosticQuestion } from "@/lib/types";

const scale = [
  { value: 1, label: "Pas du tout" },
  { value: 2, label: "Peu" },
  { value: 3, label: "Partiellement" },
  { value: 4, label: "Majoritairement" },
  { value: 5, label: "Tout à fait" },
] as const;

export function DiagnosticEngine() {
  const [questions, setQuestions] = useState<DiagnosticQuestion[]>([]);
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [step, setStep] = useState(0);

  useEffect(() => {
    setQuestions(createDiagnosticRun());
  }, []);

  if (questions.length === 0) {
    return (
      <section className="mx-auto max-w-5xl px-5 py-16 lg:px-8">
        <div className="premium-card rounded-[2.5rem] p-12 text-center">
          <p className="text-sm text-ivory/60">
            Préparation du diagnostic...
          </p>
        </div>
      </section>
    );
  }

  const currentQuestion = questions[step];
  const isComplete = Object.keys(answers).length === questions.length;
  const scores = isComplete ? calculateScores(questions, answers) : null;
  const progress = Math.round(
    (Object.keys(answers).length / questions.length) * 100
  );

  function answer(value: number) {
    setAnswers((current) => ({
      ...current,
      [currentQuestion.id]: value,
    }));

    if (step < questions.length - 1) {
      setStep((current) => current + 1);
    }
  }

  function restart() {
    setQuestions(createDiagnosticRun());
    setAnswers({});
    setStep(0);
  }

  if (scores) {
    return (
      <section className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          className="premium-card rounded-[2.5rem] p-7 md:p-12"
        >
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="relative flex aspect-square items-center justify-center rounded-full border border-gold/35 bg-gold/5 shadow-halo">
              <div className="absolute inset-[12%] rounded-full border border-ivory/10" />
              <div className="absolute inset-[25%] rounded-full border border-sage/20" />

              <div className="text-center">
                <p className="font-serif text-8xl leading-none text-gold">
                  {scores.indiceUnyko}
                </p>

                <p className="mt-4 text-xs uppercase tracking-[0.34em] text-ivory/55">
                  Indice UNYKO™
                </p>

                <p className="mt-3 text-lg text-sage">{scores.niveau}</p>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-gold/80">
                Lecture de recommandabilité
              </p>

              <h1 className="mt-5 font-serif text-5xl leading-none text-ivory">
                Votre organisation devient plus lisible.
              </h1>

              <p className="mt-6 text-base leading-8 text-ivory/60">
                Le diagnostic mesure les signaux qui influencent la visibilité,
                la crédibilité, la présence, l&apos;autorité et la
                recommandabilité de votre organisation auprès des humains et des
                intelligences artificielles.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {dimensions.map((dimension) => {
                  const value = scores[scoreKeyForDimension(dimension.key)];

                  return (
                    <div
                      key={dimension.key}
                      className="rounded-3xl border border-ivory/10 bg-ink/35 p-5"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-sm text-ivory/70">
                          {dimension.name}
                        </span>

                        <span className="font-serif text-3xl text-gold">
                          {value}
                        </span>
                      </div>

                      <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-ivory/10">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-sage to-gold"
                          style={{ width: `${value}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              <button
                onClick={restart}
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-ivory/15 px-5 py-3 text-sm text-ivory/75 transition hover:border-gold/50 hover:text-gold"
              >
                <RotateCcw size={16} />
                Relancer un diagnostic
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-5xl px-5 py-16 lg:px-8">
      <motion.div
        key={currentQuestion.id}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        className="premium-card overflow-hidden rounded-[2.5rem]"
      >
        <div className="border-b border-ivory/10 p-6 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.34em] text-gold/80">
                Question {step + 1} / {questions.length}
              </p>

              <p className="mt-2 text-sm text-ivory/52">
                {progress}% du diagnostic complété
              </p>
            </div>

            <button
              onClick={restart}
              className="inline-flex items-center gap-2 text-sm text-ivory/60 transition hover:text-gold"
            >
              <RotateCcw size={15} />
              Nouveau tirage
            </button>
          </div>

          <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-ivory/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-sage to-gold transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="p-6 md:p-10">
          <span className="rounded-full border border-gold/25 bg-gold/5 px-4 py-2 text-xs uppercase tracking-[0.22em] text-gold/80">
            {currentQuestion.subDimension}
          </span>

          <h1 className="mt-8 font-serif text-4xl leading-tight text-ivory md:text-6xl">
            {currentQuestion.text}
          </h1>

          <div className="mt-10 grid gap-3 md:grid-cols-5">
            {scale.map((item) => (
              <button
                key={item.value}
                onClick={() => answer(item.value)}
                className="group rounded-3xl border border-ivory/10 bg-ivory/[0.03] p-5 text-left transition hover:border-gold/45 hover:bg-gold/10"
              >
                <span className="font-serif text-4xl text-ivory transition group-hover:text-gold">
                  {item.value}
                </span>

                <span className="mt-4 block text-sm text-ivory/60">
                  {item.label}
                </span>
              </button>
            ))}
          </div>

          <div className="mt-9 flex items-center justify-between text-sm text-ivory/48">
            <span>
              Répondez selon la perception réelle, pas selon l&apos;intention.
            </span>

            <ArrowRight size={18} className="text-gold/70" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}