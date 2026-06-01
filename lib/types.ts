import type { LucideIcon } from "lucide-react";

export type DimensionKey = "credibilite" | "recommandation" | "communaute" | "rayonnement";

export type TrustLevel = "Fragile" | "Émergent" | "Solide" | "Référent" | "Remarquable";

export type DiagnosticQuestion = {
  id: string;
  dimension: DimensionKey;
  text: string;
  subDimension: string;
};

export type DimensionDefinition = {
  key: DimensionKey;
  name: string;
  question: string;
  description: string;
  subDimensions: string[];
  Icon?: LucideIcon;
};

export type DiagnosticScores = {
  scoreCredibilite: number;
  scoreRecommandation: number;
  scoreCommunaute: number;
  scoreRayonnement: number;
  indiceUnyko: number;
  niveau: TrustLevel;
};

export type AnswerMap = Record<string, number>;
