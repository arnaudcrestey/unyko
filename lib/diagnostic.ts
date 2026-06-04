import type { DiagnosticQuestion, DimensionKey } from "@/lib/types";

export const questionBanks: Record<DimensionKey, DiagnosticQuestion[]> = {
  lisibilite: [
    {
      id: "lis-01",
      dimension: "lisibilite",
      subDimension: "clarté",
      text: "Comprend-on rapidement ce que vous faites et à qui vous vous adressez ?",
    },
    {
      id: "lis-02",
      dimension: "lisibilite",
      subDimension: "positionnement",
      text: "Votre activité est-elle facile à résumer en quelques mots ?",
    },
    {
      id: "lis-03",
      dimension: "lisibilite",
      subDimension: "promesse",
      text: "Les personnes qui vous connaissent expliquent-elles facilement ce que vous apportez ?",
    },
    {
      id: "lis-04",
      dimension: "lisibilite",
      subDimension: "offre",
      text: "Vos offres sont-elles présentées assez clairement pour éviter la confusion ?",
    },
    {
      id: "lis-05",
      dimension: "lisibilite",
      subDimension: "différenciation",
      text: "Ce qui vous rend différent est-il évident pour vos futurs clients ?",
    },
    {
      id: "lis-06",
      dimension: "lisibilite",
      subDimension: "langage",
      text: "Votre discours évite-t-il les phrases trop générales que tout le monde pourrait utiliser ?",
    },
    {
      id: "lis-07",
      dimension: "lisibilite",
      subDimension: "cible",
      text: "Vos publics prioritaires se reconnaissent-ils facilement dans votre communication ?",
    },
    {
      id: "lis-08",
      dimension: "lisibilite",
      subDimension: "problème",
      text: "Expliquez-vous clairement le problème que vous aidez à résoudre ?",
    },
    {
      id: "lis-09",
      dimension: "lisibilite",
      subDimension: "parcours",
      text: "Un visiteur sait-il rapidement quoi faire après avoir découvert votre site ?",
    },
    {
      id: "lis-10",
      dimension: "lisibilite",
      subDimension: "mémorisation",
      text: "Votre nom et votre message restent-ils facilement en mémoire ?",
    },
    {
      id: "lis-11",
      dimension: "lisibilite",
      subDimension: "cohérence",
      text: "Votre site, vos réseaux et vos documents racontent-ils la même histoire ?",
    },
    {
      id: "lis-12",
      dimension: "lisibilite",
      subDimension: "IA",
      text: "Vos contenus permettent-ils de comprendre facilement votre activité ?",
    },
    {
      id: "lis-13",
      dimension: "lisibilite",
      subDimension: "structure",
      text: "Vos contenus sont-ils organisés de façon simple et facile à parcourir ?",
    },
    {
      id: "lis-14",
      dimension: "lisibilite",
      subDimension: "identité",
      text: "Votre identité visuelle et vos mots permettent-ils de vous reconnaître facilement ?",
    },
    {
      id: "lis-15",
      dimension: "lisibilite",
      subDimension: "singularité",
      text: "Votre singularité reste-t-elle claire dans un environnement très concurrentiel ?",
    },
  ],

  credibilite: [
    {
      id: "cre-01",
      dimension: "credibilite",
      subDimension: "preuves",
      text: "Montrez-vous des preuves concrètes de ce que vous annoncez ?",
    },
    {
      id: "cre-02",
      dimension: "credibilite",
      subDimension: "résultats",
      text: "Vos résultats sont-ils expliqués avec des exemples clairs ?",
    },
    {
      id: "cre-03",
      dimension: "credibilite",
      subDimension: "expertise",
      text: "Votre expertise se voit-elle dans votre manière d’expliquer les problèmes ?",
    },
    {
      id: "cre-04",
      dimension: "credibilite",
      subDimension: "fiabilité",
      text: "Votre organisation tient-elle ses engagements avec régularité ?",
    },
    {
      id: "cre-05",
      dimension: "credibilite",
      subDimension: "professionnalisme",
      text: "Vos premiers contacts donnent-ils une impression sérieuse et maîtrisée ?",
    },
    {
      id: "cre-06",
      dimension: "credibilite",
      subDimension: "transparence",
      text: "Est-il facile d’identifier qui vous êtes, ce que vous faites et comment vous travaillez ?",
    },
    {
      id: "cre-07",
      dimension: "credibilite",
      subDimension: "alignement",
      text: "L’expérience réelle correspond-elle à ce que votre communication promet ?",
    },
    {
      id: "cre-08",
      dimension: "credibilite",
      subDimension: "témoignages",
      text: "Disposez-vous d’avis ou de retours clients précis et rassurants ?",
    },
    {
      id: "cre-09",
      dimension: "credibilite",
      subDimension: "méthode",
      text: "Votre manière de travailler est-elle expliquée simplement ?",
    },
    {
      id: "cre-10",
      dimension: "credibilite",
      subDimension: "cohérence interne",
      text: "Vos équipes décrivent-elles votre organisation de la même manière que vos supports officiels ?",
    },
    {
      id: "cre-11",
      dimension: "credibilite",
      subDimension: "management",
      text: "Votre façon de diriger ou d'organiser votre activité renforce-t-elle la confiance ?",
    },
    {
      id: "cre-12",
      dimension: "credibilite",
      subDimension: "climat",
      text: "Votre manière de travailler contribue-t-elle à une expérience positive pour vos clients ou partenaires ?",
    },
    {
      id: "cre-13",
      dimension: "credibilite",
      subDimension: "responsabilité",
      text: "Votre organisation sait-elle reconnaître et corriger ses erreurs ?",
    },
    {
      id: "cre-14",
      dimension: "credibilite",
      subDimension: "autorité",
      text: "Votre nom est-il associé à un haut niveau d’exigence ?",
    },
    {
      id: "cre-15",
      dimension: "credibilite",
      subDimension: "IA",
      text: "Trouve-t-on en ligne assez d’éléments fiables pour vous faire confiance ?",
    },
  ],

  presence: [
    {
      id: "pre-01",
      dimension: "presence",
      subDimension: "visibilité",
      text: "Êtes-vous présent là où vos publics cherchent des réponses ?",
    },
    {
      id: "pre-02",
      dimension: "presence",
      subDimension: "régularité",
      text: "Votre présence publique est-elle régulière dans le temps ?",
    },
    {
      id: "pre-03",
      dimension: "presence",
      subDimension: "canaux",
      text: "Chaque canal que vous utilisez a-t-il un rôle clair ?",
    },
    {
      id: "pre-04",
      dimension: "presence",
      subDimension: "attention",
      text: "Vos contenus attirent-ils les bonnes personnes plutôt qu’une simple visibilité ?",
    },
    {
      id: "pre-05",
      dimension: "presence",
      subDimension: "continuité",
      text: "Restez-vous présent dans l’esprit de vos publics entre deux contacts ?",
    },
    {
      id: "pre-06",
      dimension: "presence",
      subDimension: "SEO",
      text: "Votre site répond-il aux vraies questions que se posent vos prospects ?",
    },
    {
      id: "pre-07",
      dimension: "presence",
      subDimension: "AEO",
      text: "Vos contenus apportent-ils des réponses simples à des questions précises ?",
    },
    {
      id: "pre-08",
      dimension: "presence",
      subDimension: "GEO",
      text: "Vos contenus expliquent-ils clairement dans quels cas vous recommander ?",
    },
    {
      id: "pre-09",
      dimension: "presence",
      subDimension: "preuve sociale",
      text: "Votre présence en ligne montre-t-elle que d’autres vous font déjà confiance ?",
    },
    {
      id: "pre-10",
      dimension: "presence",
      subDimension: "écosystème",
      text: "Existez-vous aussi ailleurs que sur votre propre site ?",
    },
    {
      id: "pre-11",
      dimension: "presence",
      subDimension: "cohérence",
      text: "Vos informations essentielles sont-elles cohérentes partout en ligne ?",
    },
    {
      id: "pre-12",
      dimension: "presence",
      subDimension: "rythme",
      text: "Votre rythme de publication est-il tenable dans la durée ?",
    },
    {
      id: "pre-13",
      dimension: "presence",
      subDimension: "lisibilité numérique",
      text: "Votre présence en ligne aide-t-elle à comprendre rapidement ce que vous apportez ?",
    },
    {
      id: "pre-14",
      dimension: "presence",
      subDimension: "conversations",
      text: "Vos prises de parole créent-elles des échanges utiles avec les bonnes personnes ?",
    },
    {
      id: "pre-15",
      dimension: "presence",
      subDimension: "maturité IA",
      text: "Votre organisation est-elle assez documentée en ligne pour être bien comprise ?",
    },
  ],

  autorite: [
    {
      id: "aut-01",
      dimension: "autorite",
      subDimension: "point de vue",
      text: "Votre organisation exprime-t-elle un point de vue clair sur son métier ?",
    },
    {
      id: "aut-02",
      dimension: "autorite",
      subDimension: "expertise",
      text: "Votre expertise aide-t-elle vos publics à mieux décider ?",
    },
    {
      id: "aut-03",
      dimension: "autorite",
      subDimension: "méthode",
      text: "Avez-vous une méthode de travail clairement identifiable ?",
    },
    {
      id: "aut-04",
      dimension: "autorite",
      subDimension: "standards",
      text: "Votre manière de travailler élève-t-elle le niveau attendu dans votre domaine ?",
    },
    {
      id: "aut-05",
      dimension: "autorite",
      subDimension: "discernement",
      text: "Vos contenus apportent-ils plus de recul que des réponses génériques ?",
    },
    {
      id: "aut-06",
      dimension: "autorite",
      subDimension: "preuves",
      text: "Vos références montrent-elles une vraie maîtrise de votre sujet ?",
    },
    {
      id: "aut-07",
      dimension: "autorite",
      subDimension: "prise de parole",
      text: "Vos prises de parole créent-elles des repères utiles pour les autres ?",
    },
    {
      id: "aut-08",
      dimension: "autorite",
      subDimension: "tiers",
      text: "Des clients, partenaires ou experts confirment-ils votre légitimité ?",
    },
    {
      id: "aut-09",
      dimension: "autorite",
      subDimension: "management",
      text: "Votre organisation est-elle dirigée de façon claire et rassurante ?",
    },
    {
      id: "aut-10",
      dimension: "autorite",
      subDimension: "culture",
      text: "Votre culture interne se voit-elle dans la qualité de vos services ?",
    },
    {
      id: "aut-11",
      dimension: "autorite",
      subDimension: "responsabilité",
      text: "Assumez-vous clairement vos choix, vos limites et vos critères de qualité ?",
    },
    {
      id: "aut-12",
      dimension: "autorite",
      subDimension: "spécialisation",
      text: "Votre expertise est-elle assez précise pour être clairement reconnue ?",
    },
    {
      id: "aut-13",
      dimension: "autorite",
      subDimension: "réputation",
      text: "Votre réputation confirme-t-elle réellement votre expertise ?",
    },
    {
      id: "aut-14",
      dimension: "autorite",
      subDimension: "IA",
      text: "Trouve-t-on assez de sources fiables pour vous associer à une expertise précise ?",
    },
    {
      id: "aut-15",
      dimension: "autorite",
      subDimension: "influence",
      text: "Influencez-vous la manière dont vos clients ou partenaires font leurs choix ?",
    },
  ],

  recommandabilite: [
    {
      id: "rec-01",
      dimension: "recommandabilite",
      subDimension: "transmission",
      text: "Une personne satisfaite peut-elle expliquer facilement pourquoi vous recommander ?",
    },
    {
      id: "rec-02",
      dimension: "recommandabilite",
      subDimension: "prescription",
      text: "Vos clients ou partenaires savent-ils dans quels cas vous recommander ?",
    },
    {
      id: "rec-03",
      dimension: "recommandabilite",
      subDimension: "mémoire",
      text: "Votre nom revient-il naturellement quand un besoin correspond à votre expertise ?",
    },
    {
      id: "rec-04",
      dimension: "recommandabilite",
      subDimension: "confiance",
      text: "Inspirez-vous assez confiance pour qu’une personne vous recommande sans hésiter ?",
    },
    {
      id: "rec-05",
      dimension: "recommandabilite",
      subDimension: "expérience",
      text: "Votre expérience client donne-t-elle envie de parler de vous spontanément ?",
    },
    {
      id: "rec-06",
      dimension: "recommandabilite",
      subDimension: "management",
      text: "Les personnes qui travaillent avec vous recommanderaient-elles spontanément votre organisation ?",
    },
    {
      id: "rec-07",
      dimension: "recommandabilite",
      subDimension: "interne",
      text: "Les personnes qui collaborent avec vous recommanderaient-elles votre organisation à d'autres ?",
    },
    {
      id: "rec-08",
      dimension: "recommandabilite",
      subDimension: "réputation",
      text: "Les retours à votre sujet décrivent-ils une valeur claire et stable ?",
    },
    {
      id: "rec-09",
      dimension: "recommandabilite",
      subDimension: "désirabilité",
      text: "Votre organisation donne-t-elle envie d’être associée à son niveau d’exigence ?",
    },
    {
      id: "rec-10",
      dimension: "recommandabilite",
      subDimension: "cohérence",
      text: "Votre promesse, votre expérience et votre réputation racontent-elles la même chose ?",
    },
    {
      id: "rec-11",
      dimension: "recommandabilite",
      subDimension: "IA",
      text: "Est-il facile d'expliquer pourquoi vous recommander plutôt qu'un autre acteur de votre secteur ?",
    },
    {
      id: "rec-12",
      dimension: "recommandabilite",
      subDimension: "GEO",
      text: "Trouve-t-on assez de signaux publics pour vous recommander en confiance ?",
    },
    {
      id: "rec-13",
      dimension: "recommandabilite",
      subDimension: "AEO",
      text: "Vos contenus répondent-ils aux questions que l’on se pose avant de recommander quelqu’un ?",
    },
    {
      id: "rec-14",
      dimension: "recommandabilite",
      subDimension: "preuve sociale",
      text: "Vos avis et témoignages rendent-ils votre valeur facile à transmettre ?",
    },
    {
      id: "rec-15",
      dimension: "recommandabilite",
      subDimension: "synthèse",
      text: "Êtes-vous recommandable parce que vous êtes clair, crédible, présent, légitime et fiable ?",
    },
  ],
};

function shuffle<T>(items: T[]): T[] {
  const next = [...items];

  for (let index = next.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [next[index], next[randomIndex]] = [next[randomIndex], next[index]];
  }

  return next;
}

export function createDiagnosticRun(): DiagnosticQuestion[] {
  const selected = (Object.keys(questionBanks) as DimensionKey[]).flatMap(
    (dimension) => shuffle(questionBanks[dimension]).slice(0, 5)
  );

  return shuffle(selected);
}
