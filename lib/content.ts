import { BadgeCheck, CircleDot, Eye, Gem, Landmark, Network, ScanText, ShieldCheck } from "lucide-react";
import type { DimensionDefinition } from "@/lib/types";

export const navItems = [
  { href: "/diagnostic", label: "Diagnostic" },
  { href: "/methode", label: "Méthode" },
  { href: "/rapport", label: "Rapport" },
  { href: "/offres", label: "Offres" },
  { href: "/ecosysteme", label: "Écosystème" },
  { href: "/vitrine", label: "Vitrine" }
] as const;

export const dimensions: DimensionDefinition[] = [
  {
    key: "lisibilite",
    name: "Lisibilité",
    question: "Comprend-on immédiatement ce que vous rendez possible ?",
    description: "La capacité de votre organisation à être comprise, située et mémorisée sans effort dans un environnement saturé par l'IA.",
    subDimensions: ["clarté", "position", "promesse", "mémorisation", "différenciation"],
    Icon: ScanText
  },
  {
    key: "credibilite",
    name: "Crédibilité",
    question: "Pourquoi devrait-on vous prendre au sérieux ?",
    description: "La cohérence entre votre discours, vos preuves, votre niveau d'exigence et la perception de votre expertise.",
    subDimensions: ["preuves", "cohérence", "expertise", "professionnalisme", "fiabilité"],
    Icon: ShieldCheck
  },
  {
    key: "presence",
    name: "Présence",
    question: "Existez-vous clairement dans l'esprit de votre marché ?",
    description: "Une visibilité utile, régulière et identifiable, qui installe votre organisation sans bruit inutile ni posture artificielle.",
    subDimensions: ["visibilité", "régularité", "canaux", "attention", "continuité"],
    Icon: Eye
  },
  {
    key: "autorite",
    name: "Autorité",
    question: "Votre parole crée-t-elle un repère ?",
    description: "La force de vos convictions, de votre expertise et de vos prises de position pour devenir une référence sobre et durable.",
    subDimensions: ["point de vue", "expertise", "preuves", "standards", "influence"],
    Icon: Landmark
  },
  {
    key: "recommandabilite",
    name: "Recommandabilité",
    question: "Pourquoi parlerait-on de vous au bon moment ?",
    description: "La capacité de votre organisation à être recommandée naturellement parce qu'elle est claire, crédible, présente et légitime.",
    subDimensions: ["transmission", "prescription", "réputation", "mémorisation", "désirabilité"],
    Icon: BadgeCheck
  }
];

export const ecosystem = [
  { name: "SYSTIA", role: "Structurer l'activité", question: "Comment l'activité devient-elle lisible et pilotable ?", Icon: CircleDot },
  { name: "ARHI", role: "Structurer les humains", question: "Comment les rôles, les talents et les décisions gagnent-ils en clarté ?", Icon: Gem },
  { name: "UNYKO", role: "Mesurer la recommandabilité", question: "Pourquoi une organisation devient-elle visible, crédible et recommandable ?", Icon: Network }
] as const;

export const methodSteps = [
  ["Lire", "Identifier ce qui rend votre organisation visible, compréhensible et crédible dans un marché augmenté par l'IA."],
  ["Mesurer", "Transformer la lisibilité, la présence, l'autorité et la recommandabilité en scores exploitables."],
  ["Prioriser", "Définir les actions qui renforcent votre position sans ajouter de bruit ni diluer votre exigence."]
] as const;
