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
  { href: "/methode", label: "Méthode" },
  { href: "/rapport", label: "Rapport" },
  { href: "/offres", label: "Offres" },
  { href: "/ecosysteme", label: "Écosystème" },
] as const;

export const dimensions: DimensionDefinition[] = [
  {
    key: "lisibilite",
    name: "Lisibilité",
    question: "Comprend-on clairement qui vous êtes ?",
    description:
      "La capacité de l’organisation à rendre son activité, ses offres et sa différence immédiatement compréhensibles.",
    subDimensions: [
      "activité",
      "positionnement",
      "offres",
      "message",
      "différenciation",
    ],
    Icon: ScanText,
  },

  {
    key: "credibilite",
    name: "Crédibilité",
    question: "Pourquoi devrait-on vous croire ?",
    description:
      "La capacité de l’organisation à prouver ce qu’elle affirme par ses résultats, sa méthode et son professionnalisme.",
    subDimensions: [
      "preuves",
      "résultats",
      "fiabilité",
      "méthode",
      "professionnalisme",
    ],
    Icon: ShieldCheck,
  },

  {
    key: "presence",
    name: "Présence",
    question: "Existez-vous réellement dans votre environnement ?",
    description:
      "La capacité de l’organisation à être visible, identifiable et cohérente dans ses espaces numériques, professionnels et relationnels.",
    subDimensions: [
      "visibilité",
      "contenus",
      "réseaux",
      "partenaires",
      "écosystème",
    ],
    Icon: Eye,
  },

  {
    key: "autorite",
    name: "Autorité",
    question: "Êtes-vous identifié comme une référence ?",
    description:
      "La reconnaissance de l’expertise, de la légitimité, du management et de la qualité de pilotage de l’organisation.",
    subDimensions: [
      "expertise",
      "management",
      "légitimité",
      "gouvernance",
      "leadership",
    ],
    Icon: Landmark,
  },

  {
    key: "recommandabilite",
    name: "Recommandabilité",
    question: "Pourquoi vous recommanderait-on ?",
    description:
      "La capacité de l’organisation à être recommandée grâce à son expérience, ses relations, ses collaborateurs et la confiance qu’elle inspire.",
    subDimensions: [
      "confiance",
      "expérience",
      "collaborateurs",
      "partenaires",
      "ressources humaines",
      "transmission",
    ],
    Icon: BadgeCheck,
  },
];

export const ecosystem = [
  {
    name: "SYSTIA",
    role: "Structurer l’activité",
    question: "Comment l’activité devient-elle lisible, cohérente et pilotable ?",
    Icon: CircleDot,
  },

  {
    name: "ARHI",
    role: "Comprendre les dynamiques humaines",
    question:
      "Comment le management, les rôles, les talents et les décisions gagnent-ils en clarté ?",
    Icon: Gem,
  },

  {
    name: "UNYKO",
    role: "Mesurer la confiance globale",
    question:
      "Pourquoi une organisation devient-elle lisible, crédible, présente, légitime et recommandable ?",
    Icon: Network,
  },
] as const;

export const methodSteps = [
  [
    "Lire",
    "Identifier les signaux qui rendent l’organisation compréhensible, crédible et digne de confiance.",
  ],

  [
    "Mesurer",
    "Évaluer la lisibilité, la crédibilité, la présence, l’autorité et la recommandabilité de l’organisation.",
  ],

  [
    "Comprendre",
    "Relier les signaux observés à l’activité, au management, à la communication, aux ressources humaines et à l’environnement professionnel.",
  ],

  [
    "Orienter",
    "Identifier les leviers prioritaires pour renforcer la confiance, la cohérence et la capacité de recommandation.",
  ],

  [
    "Préparer l’écosystème",
    "Transformer le diagnostic en point d’entrée vers les bons leviers : structuration, dynamique humaine ou stratégie de confiance.",
  ],
] as const;