import type { LucideIcon } from "lucide-react";

export type DimensionKey =
  | "lisibilite"
  | "credibilite"
  | "presence"
  | "autorite"
  | "recommandabilite";

export type RecommendationLevel =
  | "Illisible"
  | "Repérable"
  | "Crédible"
  | "Prescripteur"
  | "Incontournable";

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
  scoreLisibilite: number;
  scoreCredibilite: number;
  scorePresence: number;
  scoreAutorite: number;
  scoreRecommandabilite: number;
  indiceUnyko: number;
  niveau: RecommendationLevel;
};

export type AnswerMap = Record<string, number>;