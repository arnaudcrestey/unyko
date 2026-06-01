import { CircleDot, Compass, Gem, Network, Orbit, ShieldCheck } from "lucide-react";
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
    key: "credibilite",
    name: "Crédibilité",
    question: "Pourquoi devrait-on vous croire ?",
    description: "La cohérence perçue entre ce que l'organisation affirme, démontre et incarne dans la durée.",
    subDimensions: ["cohérence", "preuves", "expertise", "professionnalisme", "clarté"],
    Icon: ShieldCheck
  },
  {
    key: "recommandation",
    name: "Recommandation",
    question: "Pourquoi parlerait-on de vous ?",
    description: "La capacité à générer une recommandation naturelle, fidèle et transmissible sans sur-sollicitation.",
    subDimensions: ["bouche-à-oreille", "satisfaction", "ambassadeurs", "fidélité", "transmission"],
    Icon: Network
  },
  {
    key: "communaute",
    name: "Communauté",
    question: "Pourquoi rester autour de vous ?",
    description: "La qualité du lien qui crée appartenance, proximité, interactions utiles et continuité relationnelle.",
    subDimensions: ["appartenance", "engagement", "proximité", "interactions", "continuité"],
    Icon: Orbit
  },
  {
    key: "rayonnement",
    name: "Rayonnement",
    question: "Quelle empreinte laissez-vous ?",
    description: "La présence utile qui nourrit la mémorisation, l'influence positive et l'empreinte relationnelle.",
    subDimensions: ["visibilité utile", "mémorisation", "présence", "influence positive", "empreinte relationnelle"],
    Icon: Compass
  }
];

export const ecosystem = [
  { name: "SYSTIA", role: "Structurer l'activité", question: "Comment l'activité fonctionne-t-elle ?", Icon: CircleDot },
  { name: "ARHI", role: "Structurer les humains", question: "Avec qui l'activité fonctionne-t-elle ?", Icon: Gem },
  { name: "UNYKO", role: "Structurer la confiance", question: "Pourquoi vous recommande-t-on ?", Icon: Orbit }
] as const;
