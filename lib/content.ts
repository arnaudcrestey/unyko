import {
  BadgeCheck,
  CircleDot,
  Eye,
  Gem,
  Landmark,
  Network,
  ScanText,
  ShieldCheck,
} from "lucide-react";

import type { DimensionDefinition } from "@/lib/types";

export const navItems = [
  { href: "/diagnostic", label: "Diagnostic" },
  { href: "/methode", label: "Méthode" },
  { href: "/rapport", label: "Rapport" },
  { href: "/offres", label: "Offres" },
  { href: "/ecosysteme", label: "Écosystème" },
  { href: "/vitrine", label: "Vitrine" },
] as const;

export const dimensions: DimensionDefinition[] = [
  {
    key: "lisibilite",
    name: "Lisibilité",
    question: "Comprend-on clairement qui vous êtes ?",
    description:
      "La capacité de l'organisation à être immédiatement comprise.",
    subDimensions: [
      "clarté",
      "positionnement",
      "compréhension",
      "différenciation",
      "cohérence",
    ],
    Icon: ScanText,
  },

  {
    key: "credibilite",
    name: "Crédibilité",
    question: "Pourquoi devrait-on vous croire ?",
    description:
      "La cohérence perçue entre ce que l'organisation affirme, démontre et incarne.",
    subDimensions: [
      "preuves",
      "expertise",
      "références",
      "cohérence",
      "professionnalisme",
    ],
    Icon: ShieldCheck,
  },

  {
    key: "presence",
    name: "Présence",
    question: "Existez-vous réellement dans votre environnement ?",
    description:
      "La présence de l'organisation dans les espaces numériques et professionnels.",
    subDimensions: [
      "site",
      "contenus",
      "linkedin",
      "citations",
      "visibilité",
    ],
    Icon: Eye,
  },

  {
    key: "autorite",
    name: "Autorité",
    question: "Êtes-vous identifié comme une référence ?",
    description:
      "La reconnaissance de l'expertise et de la légitimité de l'organisation.",
    subDimensions: [
      "expertise",
      "spécialisation",
      "légitimité",
      "réputation",
      "leadership",
    ],
    Icon: Landmark,
  },

  {
    key: "recommandabilite",
    name: "Recommandabilité",
    question: "Pourquoi vous recommanderait-on ?",
    description:
      "La capacité de l'organisation à être recommandée par les humains et les IA.",
    subDimensions: [
      "transmission",
      "réputation",
      "confiance",
      "citation",
      "recommandation",
    ],
    Icon: BadgeCheck,
  },
];

export const ecosystem = [
  {
    name: "SYSTIA",
    role: "Structurer l'activité",
    question: "Comment l'activité devient-elle lisible et pilotable ?",
    Icon: CircleDot,
  },

  {
    name: "ARHI",
    role: "Structurer les humains",
    question: "Comment les rôles, les talents et les décisions gagnent-ils en clarté ?",
    Icon: Gem,
  },

  {
    name: "UNYKO",
    role: "Développer la recommandabilité",
    question:
      "Pourquoi une organisation devient-elle visible, crédible et recommandable ?",
    Icon: Network,
  },
] as const;

export const methodSteps = [
  [
    "Lire",
    "Identifier les signaux qui rendent l'organisation visible, compréhensible et crédible.",
  ],

  [
    "Mesurer",
    "Transformer la lisibilité, la présence, l'autorité et la recommandabilité en indicateurs exploitables.",
  ],

  [
    "Prioriser",
    "Définir les actions qui renforcent durablement la visibilité et la recommandation.",
  ],

  [
    "Optimiser",
    "Renforcer les signaux qui influencent la perception humaine et IA.",
  ],

  [
    "Préparer l'IA",
    "Développer la capacité de l'organisation à être comprise et recommandée par les moteurs conversationnels.",
  ],
] as const;