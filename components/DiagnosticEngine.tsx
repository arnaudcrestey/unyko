"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, RotateCcw } from "lucide-react";
import { createDiagnosticRun } from "@/lib/diagnostic";
import { dimensions } from "@/lib/content";
import { calculateScores, scoreKeyForDimension } from "@/lib/scoring";
import type {
  AnswerMap,
  DiagnosticQuestion,
  DiagnosticScores,
  DimensionKey,
} from "@/lib/types";

const scale = [
  { value: 1, label: "Pas du tout" },
  { value: 2, label: "Peu" },
  { value: 3, label: "Partiellement" },
  { value: 4, label: "Majoritairement" },
  { value: 5, label: "Tout à fait" },
] as const;

const analysisSteps = [
  "Lecture de votre profil",
  "Identification des signaux dominants",
  "Évaluation des leviers prioritaires",
  "Construction de votre analyse stratégique",
  "Préparation de votre orientation",
];
type AiAnalysis = {
  lecture: string;
  risque: string;
  levier: string;
  orientation: string;
  systia?: boolean;
  arhi?: boolean;
  unyko?: boolean;
};

const dimensionAdvice: Record<
  DimensionKey,
  { risk: string; lever: string; insight: string }
> = {
  lisibilite: {
    risk: "Confusion",
    lever: "Clarifier votre message avant d’amplifier votre visibilité.",
    insight:
      "Votre organisation semble plus solide que ce qu’elle laisse comprendre au premier regard.",
  },
  credibilite: {
    risk: "Doute",
    lever:
      "Rendre vos preuves plus visibles, plus concrètes et plus faciles à vérifier.",
    insight:
      "Votre crédibilité existe, mais elle doit être davantage démontrée que simplement affirmée.",
  },
  presence: {
    risk: "Absence dans les bons espaces",
    lever:
      "Documenter votre valeur là où vos publics cherchent réellement des réponses.",
    insight:
      "Votre valeur peut être réelle, mais rester insuffisamment présente dans les espaces qui construisent la confiance.",
  },
  autorite: {
    risk: "Autorité silencieuse",
    lever: "Affirmer un point de vue clair, mémorisable et reconnaissable.",
    insight:
      "Votre expertise gagne à devenir un repère identifiable, pas seulement une compétence perçue.",
  },
  recommandabilite: {
    risk: "Transmission difficile",
    lever: "Formuler ce qui donne naturellement envie de vous recommander.",
    insight:
      "Votre organisation doit permettre aux autres d’expliquer simplement pourquoi vous choisir.",
  },
};

function getScoreEntries(scores: DiagnosticScores) {
  return dimensions.map((dimension) => ({
    ...dimension,
    value: scores[scoreKeyForDimension(dimension.key)],
  }));
}

function getLowestDimension(scores: DiagnosticScores) {
  return getScoreEntries(scores).reduce((lowest, current) =>
    current.value < lowest.value ? current : lowest
  );
}

function getHighestDimension(scores: DiagnosticScores) {
  return getScoreEntries(scores).reduce((highest, current) =>
    current.value > highest.value ? current : highest
  );
}

function getUnykoProfile(scores: DiagnosticScores) {
  const lowest = getLowestDimension(scores);
  const highest = getHighestDimension(scores);

  if (scores.indiceUnyko <= 40) {
    return {
      name: "Expertise invisible",
      headline:
        "Votre valeur existe. Elle n’est pas encore suffisamment lisible.",
      summary:
        "Vos réponses indiquent que votre organisation ne produit pas encore assez de signaux clairs pour être rapidement comprise, crue et recommandée.",
      next:
        "La priorité n’est pas d’être plus visible. Elle est d’abord de rendre votre valeur compréhensible.",
      priority: lowest.name,
      strength: highest.name,
    };
  }

  if (scores.indiceUnyko <= 60) {
    return {
      name: "Organisation repérable",
      headline:
        "Votre organisation est visible. Sa valeur reste difficile à transmettre.",
      summary:
        "Votre organisation commence à être identifiable, mais sa recommandation dépend encore trop de votre capacité à l’expliquer vous-même.",
      next:
        "Le levier principal consiste à transformer votre activité en message simple, preuve visible et parcours clair.",
      priority: lowest.name,
      strength: highest.name,
    };
  }

  if (scores.indiceUnyko <= 75) {
    return {
      name: "Confiance émergente",
      headline:
        "Vous inspirez confiance. Il faut maintenant rendre cette confiance évidente.",
      summary:
        "Votre organisation possède déjà des signaux crédibles. L’enjeu est de mieux les organiser pour faciliter la compréhension, la mémorisation et la recommandation.",
      next:
        "Vous n’avez pas forcément besoin de faire plus. Vous avez surtout besoin de rendre vos signaux plus cohérents.",
      priority: lowest.name,
      strength: highest.name,
    };
  }

  if (scores.indiceUnyko <= 90) {
    return {
      name: "Référence montante",
      headline: "Votre organisation devient naturellement recommandable.",
      summary:
        "Vos réponses révèlent une organisation lisible, crédible et capable d’inspirer confiance dans son environnement.",
      next:
        "L’étape suivante consiste à transformer cette solidité en position de référence plus nette.",
      priority: lowest.name,
      strength: highest.name,
    };
  }

  return {
    name: "Référence de confiance",
    headline:
      "Votre organisation réunit les signaux d’une référence naturelle.",
    summary:
      "Lisibilité, crédibilité, présence, autorité et recommandabilité convergent. Votre organisation peut devenir une source citée, choisie et recommandée.",
    next:
      "L’enjeu n’est plus seulement d’être choisi, mais de devenir une référence évidente dans votre domaine.",
    priority: lowest.name,
    strength: highest.name,
  };
}

function SignatureUnyko({ scores }: { scores: DiagnosticScores }) {
  const entries = getScoreEntries(scores);
  const size = 360;
  const center = size / 2;
  const baseRadius = 112;

  const points = entries.map((entry, index) => {
    const angle = -Math.PI / 2 + (index * 2 * Math.PI) / entries.length;
    const radius = 42 + (entry.value / 100) * baseRadius;

    return {
      ...entry,
      x: center + Math.cos(angle) * radius,
      y: center + Math.sin(angle) * radius,
      orbitX: center + Math.cos(angle) * 142,
      orbitY: center + Math.sin(angle) * 142,
    };
  });

  const polygon = points.map((point) => `${point.x},${point.y}`).join(" ");

  return (
    <div className="relative mx-auto w-full max-w-[430px] rounded-[2rem] border border-ivory/10 bg-[#080B0C]/70 p-4 shadow-halo sm:p-6">
      <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_center,rgba(215,183,106,0.16),transparent_58%)]" />

      <svg viewBox={`0 0 ${size} ${size}`} className="relative z-10 w-full">
        <defs>
          <radialGradient id="signatureGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#D7B76A" stopOpacity="0.35" />
            <stop offset="45%" stopColor="#8EA091" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#D7B76A" stopOpacity="0" />
          </radialGradient>
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <circle cx={center} cy={center} r="158" fill="url(#signatureGlow)" />

        {[42, 76, 110, 144].map((radius) => (
          <circle
            key={radius}
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke="rgba(244,239,226,0.08)"
            strokeWidth="1"
          />
        ))}

        {points.map((point) => (
          <line
            key={`axis-${point.key}`}
            x1={center}
            y1={center}
            x2={point.orbitX}
            y2={point.orbitY}
            stroke="rgba(244,239,226,0.08)"
            strokeWidth="1"
          />
        ))}

        <polygon
          points={polygon}
          fill="rgba(215,183,106,0.16)"
          stroke="#D7B76A"
          strokeWidth="2"
          filter="url(#softGlow)"
        />

        {points.map((point) => (
          <g key={point.key}>
            <circle
              cx={point.x}
              cy={point.y}
              r="5"
              fill="#D7B76A"
              filter="url(#softGlow)"
            />
            <circle
              cx={point.x}
              cy={point.y}
              r="13"
              fill="none"
              stroke="rgba(215,183,106,0.18)"
            />
          </g>
        ))}

        <circle cx={center} cy={center} r="7" fill="#8EA091" />
        <circle
          cx={center}
          cy={center}
          r="23"
          fill="none"
          stroke="rgba(142,160,145,0.22)"
        />
      </svg>

      <div className="relative z-20 mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-5">
        {entries.map((entry) => (
          <div
            key={entry.key}
            className="flex min-w-0 items-center justify-between rounded-2xl border border-ivory/10 bg-ivory/[0.025] px-3 py-2 lg:block lg:px-2 lg:text-center"
          >
            <p className="truncate text-[10px] uppercase tracking-[0.14em] text-ivory/45 lg:text-[8px] lg:tracking-[0.08em]">
              {entry.name}
            </p>

            <p className="ml-3 shrink-0 font-serif text-xl text-gold lg:ml-0 lg:mt-1 lg:text-base">
              {entry.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DiagnosticEngine() {
  const [questions, setQuestions] = useState<DiagnosticQuestion[]>([]);
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [step, setStep] = useState(0);
  const [aiAnalysis, setAiAnalysis] = useState<AiAnalysis | null>(null);
  const [aiLoading, setAiLoading] = useState(false);
  const [analysisStep, setAnalysisStep] = useState(0);
  const [showAnalysisScreen, setShowAnalysisScreen] = useState(false);

  useEffect(() => {
    setQuestions(createDiagnosticRun());
  }, []);

  const isComplete =
    questions.length > 0 && Object.keys(answers).length === questions.length;

  const scores = useMemo(() => {
    if (!isComplete) return null;
    return calculateScores(questions, answers);
  }, [answers, isComplete, questions]);

useEffect(() => {
  if (!scores) return;

  const currentScores = scores;
  let cancelled = false;

  async function generateAnalysis() {
    try {
      setShowAnalysisScreen(true);
      setAnalysisStep(0);

      for (let i = 0; i < analysisSteps.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 1200));

        if (!cancelled) {
          setAnalysisStep(i + 1);
        }
      }

      setAiLoading(true);
      setAiAnalysis(null);

      const profile = getUnykoProfile(currentScores);
      const lowest = getLowestDimension(currentScores);
      const highest = getHighestDimension(currentScores);

      const response = await fetch("/api/analyse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          profile: profile.name,
          indice: currentScores.indiceUnyko,
          lisibilite: currentScores.scoreLisibilite,
          credibilite: currentScores.scoreCredibilite,
          presence: currentScores.scorePresence,
          autorite: currentScores.scoreAutorite,
          recommandabilite: currentScores.scoreRecommandabilite,
          pointFort: highest.name,
          levierPrioritaire: lowest.name,
        }),
      });

      const data = (await response.json()) as AiAnalysis;

      if (!cancelled) {
        setAiAnalysis(data);

        await new Promise((resolve) => setTimeout(resolve, 1000));

        setShowAnalysisScreen(false);
      }
    } catch (error) {
      console.error(error);

      if (!cancelled) {
        setShowAnalysisScreen(false);
      }
    } finally {
      if (!cancelled) {
        setAiLoading(false);
      }
    }
  }

  generateAnalysis();

  return () => {
    cancelled = true;
  };
}, [scores]);
  if (questions.length === 0) {
    return (
      <section className="mx-auto max-w-5xl px-5 py-14 lg:px-8">
        <div className="premium-card rounded-[2rem] p-10 text-center">
          <p className="text-sm text-ivory/60">Préparation du diagnostic...</p>
        </div>
      </section>
    );
  }

  const currentQuestion = questions[step];
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
  setAiAnalysis(null);
  setAiLoading(false);
  setAnalysisStep(0);
  setShowAnalysisScreen(false);
}

  if (showAnalysisScreen) {
  return (
    <section className="mx-auto flex min-h-[calc(100svh-90px)] max-w-4xl items-center px-4 py-6 sm:px-5 sm:py-10 lg:px-8">
      <div className="premium-card w-full rounded-[1.75rem] px-5 py-8 text-center sm:rounded-[2.5rem] sm:p-10">
        <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-gold/75 sm:text-xs sm:tracking-[0.3em]">
          Analyse UNYKO™
        </p>

        <h1 className="mx-auto mt-5 max-w-2xl font-serif text-[2.25rem] leading-[0.98] tracking-[-0.04em] text-ivory sm:text-5xl">
          UNYKO analyse votre organisation
        </h1>

        <p className="mx-auto mt-6 max-w-[34rem] text-[15px] font-light leading-8 text-ivory/60 sm:text-base">
          Nous interprétons vos réponses pour identifier les principaux leviers
          de confiance, de lisibilité et de recommandation.
        </p>

        <div className="mx-auto mt-8 max-w-xl space-y-3 text-left sm:mt-10 sm:space-y-4">
          {analysisSteps.map((step, index) => (
            <div
              key={step}
              className={`rounded-2xl border px-4 py-3 text-sm leading-6 transition-all sm:px-5 sm:py-4 sm:text-base ${
                index < analysisStep
                  ? "border-gold/30 bg-gold/10 text-ivory"
                  : "border-ivory/10 text-ivory/35"
              }`}
            >
              {index < analysisStep ? "✓ " : ""}
              {step}
            </div>
          ))}
        </div>

        {analysisStep === analysisSteps.length && (
          <p className="mt-7 text-base font-semibold text-gold sm:text-lg">
  ✓ Analyse terminée. Préparation de votre synthèse...
</p>
        )}
      </div>
    </section>
  );
}

  if (scores) {
    const profile = getUnykoProfile(scores);
    const lowest = getLowestDimension(scores);
    const highest = getHighestDimension(scores);
    const advice = dimensionAdvice[lowest.key];

    return (
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-5 sm:py-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          className="premium-card overflow-hidden rounded-[2rem] sm:rounded-[2.75rem]"
        >
          <div className="grid gap-0 xl:grid-cols-[0.92fr_1.08fr]">
            <div className="border-b border-ivory/10 p-6 sm:p-8 lg:p-12 xl:border-b-0 xl:border-r">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold/80">
                Profil UNYKO™
              </p>

              <h1 className="mt-5 font-serif text-4xl leading-[0.98] text-ivory sm:text-5xl lg:text-6xl">
                {profile.name}
              </h1>

              <p className="mt-5 max-w-xl font-serif text-2xl leading-tight text-ivory/86 sm:text-3xl">
                {profile.headline}
              </p>

              <p className="mt-6 max-w-xl text-sm leading-7 text-ivory/60 sm:text-base sm:leading-8">
                {profile.summary}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.75rem] border border-gold/20 bg-gold/[0.06] p-5 sm:p-6">
                  <p className="text-xs uppercase tracking-[0.24em] text-gold/70">
                    Indice UNYKO™
                  </p>
                  <p className="mt-4 font-serif text-6xl leading-none text-gold sm:text-7xl">
                    {scores.indiceUnyko}
                  </p>
                  <p className="mt-2 text-sm text-ivory/50">sur 100</p>
                </div>

                <div className="rounded-[1.75rem] border border-ivory/10 bg-ink/35 p-5 sm:p-6">
                  <p className="text-xs uppercase tracking-[0.24em] text-ivory/45">
                    Profil UNYKO™
                  </p>
                  <p className="mt-4 font-serif text-3xl text-ivory">
                    {profile.name}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-ivory/52">
                    Lecture synthétique de votre maturité de confiance.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 lg:p-12">
              <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.3em] text-gold/75">
                Signature de confiance
              </p>

              <SignatureUnyko scores={scores} />

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.75rem] border border-ivory/10 bg-ink/35 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-ivory/45">
                    Point fort
                  </p>
                  <p className="mt-3 font-serif text-3xl text-ivory">
                    {highest.name}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-ivory/52">
                    C’est aujourd’hui votre signal le plus solide.
                  </p>
                </div>

                <div className="rounded-[1.75rem] border border-gold/20 bg-gold/[0.06] p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-gold/70">
                    Levier prioritaire
                  </p>
                  <p className="mt-3 font-serif text-3xl text-ivory">
                    {lowest.name}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-ivory/58">
                    {advice.lever}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-ivory/10 p-6 sm:p-8 lg:p-12">
            <div className="grid gap-4 lg:grid-cols-3">
              <div className="rounded-[1.75rem] border border-ivory/10 bg-ink/35 p-5 sm:p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-gold/70">
                  Analyse UNYKO™
                </p>
                <p className="mt-4 text-sm leading-7 text-ivory/62">
                  {aiLoading
                    ? "Analyse stratégique en cours..."
                    : aiAnalysis?.lecture ?? advice.insight}
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-ivory/10 bg-ink/35 p-5 sm:p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-gold/70">
                  Risque principal
                </p>
                <p className="mt-4 text-sm leading-7 text-ivory/62">
                  {aiLoading
                    ? "Identification du point de vigilance..."
                    : aiAnalysis?.risque ??
                      "Ce risque peut freiner la confiance, la compréhension et la recommandation."}
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-gold/25 bg-gold/[0.07] p-5 sm:p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-gold/80">
                  Levier stratégique
                </p>
                <p className="mt-4 text-sm leading-7 text-ivory/64">
                  {aiLoading
                    ? "Préparation de l’orientation..."
                    : aiAnalysis?.levier ?? profile.next}
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-[2rem] border border-gold/20 bg-[radial-gradient(circle_at_top_right,rgba(215,183,106,0.13),transparent_44%),rgba(244,239,226,0.025)] p-6 sm:p-8">
              <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-gold/75">
                    Écosystème Arnaud Crestey
                  </p>

                  <h2 className="mt-3 font-serif text-3xl leading-tight text-ivory sm:text-4xl">
                    Et maintenant?
                  </h2>

                  <p className="mt-4 max-w-3xl text-sm leading-7 text-ivory/58 sm:text-base sm:leading-8">
                    {aiAnalysis?.orientation ??
                      "Votre diagnostic révèle plus qu’un score. Il montre comment votre activité, votre message, votre organisation et votre confiance sont perçus. Une lecture stratégique permet d’identifier où agir en priorité."}
                  </p>
                </div>

                <a
                  href="https://www.systia.fr/contact"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 text-sm font-semibold text-ink transition hover:bg-ivory sm:w-auto"
                >
                  Découvrir SYSTIA
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            <button
              onClick={restart}
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-ivory/15 px-5 py-3 text-sm text-ivory/75 transition hover:border-gold/50 hover:text-gold"
            >
              <RotateCcw size={16} />
              Relancer un diagnostic
            </button>
          </div>
        </motion.div>
      </section>
    );
  }

  return (
  <section className="mx-auto flex min-h-[calc(100svh-90px)] max-w-4xl items-center px-4 py-6 sm:px-5 lg:px-8">
    <motion.div
      key={currentQuestion.id}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      className="premium-card w-full overflow-hidden rounded-[1.75rem] sm:rounded-[2.5rem]"
    >
      <div className="border-b border-ivory/10 px-5 py-4 sm:px-8 sm:py-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-gold/80 sm:text-xs">
              Question {step + 1} / {questions.length}
            </p>

            <p className="mt-1 text-xs text-ivory/45 sm:text-sm">
              {progress}% complété · moins de 2 min
            </p>
          </div>

          <button
            onClick={restart}
            className="inline-flex items-center gap-2 text-xs text-ivory/50 transition hover:text-gold sm:text-sm"
          >
            <RotateCcw size={14} />
            Recommencer
          </button>
        </div>

        <div className="mt-4 h-1 overflow-hidden rounded-full bg-ivory/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-sage to-gold transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="px-5 py-6 sm:px-8 sm:py-9">
        <span className="rounded-full border border-gold/20 bg-gold/5 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-gold/75 sm:text-xs">
          {currentQuestion.subDimension}
        </span>

        <h1 className="mt-5 font-serif text-[1.55rem] leading-[1.14] tracking-[-0.025em] text-ivory sm:text-3xl md:text-5xl">
          {currentQuestion.text}
        </h1>

        <div className="mt-7">
          <div className="mb-3 flex items-center justify-between px-1 text-[11px] text-ivory/40 sm:text-xs">
            <span>Pas du tout</span>
            <span>Tout à fait</span>
          </div>

          <div className="grid grid-cols-5 gap-2">
            {scale.map((item) => (
              <button
                key={item.value}
                onClick={() => answer(item.value)}
                aria-label={item.label}
                className="group flex h-12 items-center justify-center rounded-2xl border border-ivory/10 bg-ivory/[0.03] transition hover:border-gold/45 hover:bg-gold/10 sm:h-16 sm:rounded-3xl"
              >
                <span className="font-serif text-2xl text-ivory transition group-hover:text-gold sm:text-3xl">
                  {item.value}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4 text-xs text-ivory/42 sm:text-sm">
          <span>Répondez selon la perception réelle.</span>
          <ArrowRight size={16} className="shrink-0 text-gold/70" />
        </div>
      </div>
    </motion.div>
  </section>
);
}