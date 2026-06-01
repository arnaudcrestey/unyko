import type { AnswerMap, DiagnosticQuestion, DiagnosticScores, DimensionKey, TrustLevel } from "@/lib/types";

const dimensionScoreKeys: Record<DimensionKey, keyof Omit<DiagnosticScores, "indiceUnyko" | "niveau">> = {
  credibilite: "scoreCredibilite",
  recommandation: "scoreRecommandation",
  communaute: "scoreCommunaute",
  rayonnement: "scoreRayonnement"
};

export function getTrustLevel(score: number): TrustLevel {
  if (score <= 40) return "Fragile";
  if (score <= 60) return "Émergent";
  if (score <= 75) return "Solide";
  if (score <= 90) return "Référent";
  return "Remarquable";
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
    credibilite: [],
    recommandation: [],
    communaute: [],
    rayonnement: []
  };

  questions.forEach((question) => {
    const answer = answers[question.id];
    if (typeof answer === "number") grouped[question.dimension].push(answer);
  });

  const scoreCredibilite = normalize(average(grouped.credibilite));
  const scoreRecommandation = normalize(average(grouped.recommandation));
  const scoreCommunaute = normalize(average(grouped.communaute));
  const scoreRayonnement = normalize(average(grouped.rayonnement));
  const indiceUnyko = Math.round(average([scoreCredibilite, scoreRecommandation, scoreCommunaute, scoreRayonnement]));

  return {
    scoreCredibilite,
    scoreRecommandation,
    scoreCommunaute,
    scoreRayonnement,
    indiceUnyko,
    niveau: getTrustLevel(indiceUnyko)
  };
}

export function scoreKeyForDimension(dimension: DimensionKey): keyof Omit<DiagnosticScores, "indiceUnyko" | "niveau"> {
  return dimensionScoreKeys[dimension];
}
