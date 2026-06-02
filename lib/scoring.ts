import type { AnswerMap, DiagnosticQuestion, DiagnosticScores, DimensionKey, RecommendationLevel } from "@/lib/types";

const dimensionScoreKeys: Record<DimensionKey, keyof Omit<DiagnosticScores, "indiceUnyko" | "niveau">> = {
  lisibilite: "scoreLisibilite",
  credibilite: "scoreCredibilite",
  presence: "scorePresence",
  autorite: "scoreAutorite",
  recommandabilite: "scoreRecommandabilite"
};

export function getRecommendationLevel(score: number): RecommendationLevel {
  if (score <= 40) return "Illisible";
  if (score <= 60) return "Repérable";
  if (score <= 75) return "Crédible";
  if (score <= 90) return "Prescripteur";
  return "Incontournable";
}

function average(values: number[]): number {
  if (values.length === 0) return 0;
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function normalize(value: number): number {
  return Math.round(((value - 1) / 4) * 100);
}

export function calculateScores(questions: DiagnosticQuestion[], answers: AnswerMap): DiagnosticScores {
  const grouped: Record<DimensionKey, number[]> = {
    lisibilite: [],
    credibilite: [],
    presence: [],
    autorite: [],
    recommandabilite: []
  };

  questions.forEach((question) => {
    const answer = answers[question.id];
    if (typeof answer === "number") grouped[question.dimension].push(answer);
  });

  const scoreLisibilite = normalize(average(grouped.lisibilite));
  const scoreCredibilite = normalize(average(grouped.credibilite));
  const scorePresence = normalize(average(grouped.presence));
  const scoreAutorite = normalize(average(grouped.autorite));
  const scoreRecommandabilite = normalize(average(grouped.recommandabilite));
  const indiceUnyko = Math.round(average([scoreLisibilite, scoreCredibilite, scorePresence, scoreAutorite, scoreRecommandabilite]));

  return {
    scoreLisibilite,
    scoreCredibilite,
    scorePresence,
    scoreAutorite,
    scoreRecommandabilite,
    indiceUnyko,
    niveau: getRecommendationLevel(indiceUnyko)
  };
}

export function scoreKeyForDimension(dimension: DimensionKey): keyof Omit<DiagnosticScores, "indiceUnyko" | "niveau"> {
  return dimensionScoreKeys[dimension];
}
