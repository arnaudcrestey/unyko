import type { DiagnosticQuestion, DimensionKey } from "@/lib/types";

export const questionBanks: Record<DimensionKey, DiagnosticQuestion[]> = {
  credibilite: [
    { id: "cre-01", dimension: "credibilite", subDimension: "cohérence", text: "Votre discours public reste-t-il cohérent avec l'expérience réellement vécue par vos clients, partenaires et équipes ?" },
    { id: "cre-02", dimension: "credibilite", subDimension: "preuves", text: "Vos preuves de valeur sont-elles accessibles, concrètes et compréhensibles sans explication complémentaire ?" },
    { id: "cre-03", dimension: "credibilite", subDimension: "expertise", text: "Votre expertise est-elle identifiable à travers des prises de position stables plutôt qu'à travers une simple présence régulière ?" },
    { id: "cre-04", dimension: "credibilite", subDimension: "professionnalisme", text: "Vos points de contact donnent-ils une impression de maîtrise, de sérieux et de précision ?" },
    { id: "cre-05", dimension: "credibilite", subDimension: "clarté", text: "Une personne qui vous découvre peut-elle comprendre clairement ce que vous faites, pour qui et avec quelle exigence ?" },
    { id: "cre-06", dimension: "credibilite", subDimension: "cohérence", text: "Vos engagements sont-ils formulés avec suffisamment de nuance pour inspirer confiance sans paraître excessifs ?" },
    { id: "cre-07", dimension: "credibilite", subDimension: "preuves", text: "Votre capital confiance repose-t-il sur des exemples vérifiables et pas seulement sur des affirmations ?" },
    { id: "cre-08", dimension: "credibilite", subDimension: "expertise", text: "Votre organisation est-elle associée à un domaine d'excellence précis dans l'esprit de ceux qui vous connaissent ?" },
    { id: "cre-09", dimension: "credibilite", subDimension: "professionnalisme", text: "La qualité de votre suivi renforce-t-elle votre crédibilité après le premier contact ?" },
    { id: "cre-10", dimension: "credibilite", subDimension: "clarté", text: "Vos messages importants évitent-ils les formulations floues, interchangeables ou trop générales ?" },
    { id: "cre-11", dimension: "credibilite", subDimension: "cohérence", text: "Vos équipes décriraient-elles votre promesse avec les mêmes mots et les mêmes repères ?" },
    { id: "cre-12", dimension: "credibilite", subDimension: "preuves", text: "Vos résultats sont-ils reliés à des contextes, des méthodes et des limites clairement assumées ?" },
    { id: "cre-13", dimension: "credibilite", subDimension: "expertise", text: "Votre expertise se voit-elle dans votre manière de questionner avant de proposer ?" },
    { id: "cre-14", dimension: "credibilite", subDimension: "professionnalisme", text: "Votre présence numérique reflète-t-elle le niveau d'exigence que vous souhaitez incarner ?" },
    { id: "cre-15", dimension: "credibilite", subDimension: "clarté", text: "Votre différenciation est-elle suffisamment claire pour être expliquée par quelqu'un d'autre ?" }
  ],
  recommandation: [
    { id: "rec-01", dimension: "recommandation", subDimension: "bouche-à-oreille", text: "Vos clients ou partenaires parlent-ils spontanément de vous lorsque votre sujet apparaît dans une conversation ?" },
    { id: "rec-02", dimension: "recommandation", subDimension: "satisfaction", text: "La satisfaction ressentie après collaboration se transforme-t-elle en envie de transmettre votre nom ?" },
    { id: "rec-03", dimension: "recommandation", subDimension: "ambassadeurs", text: "Disposez-vous de personnes prêtes à défendre votre sérieux sans y être invitées ?" },
    { id: "rec-04", dimension: "recommandation", subDimension: "fidélité", text: "Vos relations importantes se prolongent-elles au-delà d'une mission ou d'un achat isolé ?" },
    { id: "rec-05", dimension: "recommandation", subDimension: "transmission", text: "Les personnes qui vous recommandent savent-elles expliquer précisément pourquoi elles le font ?" },
    { id: "rec-06", dimension: "recommandation", subDimension: "bouche-à-oreille", text: "Votre recommandation naturelle existe-t-elle même lorsque vous ne publiez rien pendant plusieurs semaines ?" },
    { id: "rec-07", dimension: "recommandation", subDimension: "satisfaction", text: "Les retours positifs que vous recevez expriment-ils une confiance durable plutôt qu'un simple contentement ponctuel ?" },
    { id: "rec-08", dimension: "recommandation", subDimension: "ambassadeurs", text: "Avez-vous identifié les personnes qui portent déjà votre crédibilité auprès de nouveaux cercles ?" },
    { id: "rec-09", dimension: "recommandation", subDimension: "fidélité", text: "Vos clients reviennent-ils vers vous lorsque leurs enjeux évoluent ou gagnent en complexité ?" },
    { id: "rec-10", dimension: "recommandation", subDimension: "transmission", text: "Votre proposition est-elle assez mémorisable pour circuler sans être déformée ?" },
    { id: "rec-11", dimension: "recommandation", subDimension: "bouche-à-oreille", text: "Votre nom apparaît-il dans des échanges qualifiés que vous n'avez pas initiés ?" },
    { id: "rec-12", dimension: "recommandation", subDimension: "satisfaction", text: "Vos expériences clients créent-elles des moments suffisamment forts pour être racontés ?" },
    { id: "rec-13", dimension: "recommandation", subDimension: "ambassadeurs", text: "Vos ambassadeurs disposent-ils d'éléments simples pour relayer votre valeur avec justesse ?" },
    { id: "rec-14", dimension: "recommandation", subDimension: "fidélité", text: "Votre organisation conserve-t-elle la confiance lorsque les situations deviennent moins simples ?" },
    { id: "rec-15", dimension: "recommandation", subDimension: "transmission", text: "La recommandation de votre organisation repose-t-elle sur une expérience relationnelle identifiable ?" }
  ],
  communaute: [
    { id: "com-01", dimension: "communaute", subDimension: "appartenance", text: "Les personnes proches de votre organisation ont-elles le sentiment d'appartenir à un cercle identifiable ?" },
    { id: "com-02", dimension: "communaute", subDimension: "engagement", text: "Votre communauté réagit-elle à vos sujets parce qu'ils sont utiles, justes et attendus ?" },
    { id: "com-03", dimension: "communaute", subDimension: "proximité", text: "Vos relations perçoivent-elles une proximité humaine derrière vos outils, contenus et échanges ?" },
    { id: "com-04", dimension: "communaute", subDimension: "interactions", text: "Les interactions autour de vous créent-elles de la compréhension plutôt qu'une simple réaction de surface ?" },
    { id: "com-05", dimension: "communaute", subDimension: "continuité", text: "Votre lien avec les personnes importantes se maintient-il entre deux besoins formels ?" },
    { id: "com-06", dimension: "communaute", subDimension: "appartenance", text: "Votre univers possède-t-il des codes, des mots et des repères que les autres peuvent reconnaître ?" },
    { id: "com-07", dimension: "communaute", subDimension: "engagement", text: "Les échanges que vous suscitez enrichissent-ils réellement votre solidité relationnelle ?" },
    { id: "com-08", dimension: "communaute", subDimension: "proximité", text: "Votre organisation sait-elle rester accessible sans perdre son niveau d'exigence ?" },
    { id: "com-09", dimension: "communaute", subDimension: "interactions", text: "Les conversations avec votre cercle produisent-elles des signaux utiles pour améliorer votre action ?" },
    { id: "com-10", dimension: "communaute", subDimension: "continuité", text: "Votre communauté comprend-elle ce qui évolue chez vous et ce qui reste stable ?" },
    { id: "com-11", dimension: "communaute", subDimension: "appartenance", text: "Votre capital confiance s'appuie-t-il sur des liens entretenus plutôt que sur des contacts dispersés ?" },
    { id: "com-12", dimension: "communaute", subDimension: "engagement", text: "Les personnes engagées autour de vous peuvent-elles contribuer sans effort excessif ?" },
    { id: "com-13", dimension: "communaute", subDimension: "proximité", text: "Vos échanges donnent-ils l'impression d'une attention réelle à la situation de l'autre ?" },
    { id: "com-14", dimension: "communaute", subDimension: "interactions", text: "Votre communauté vous aide-t-elle à repérer les écarts entre intention et perception ?" },
    { id: "com-15", dimension: "communaute", subDimension: "continuité", text: "Votre présence relationnelle est-elle régulière sans devenir intrusive ou mécanique ?" }
  ],
  rayonnement: [
    { id: "ray-01", dimension: "rayonnement", subDimension: "visibilité utile", text: "Votre visibilité est-elle reliée à une utilité claire pour les personnes que vous souhaitez servir ?" },
    { id: "ray-02", dimension: "rayonnement", subDimension: "mémorisation", text: "Votre organisation laisse-t-elle une trace mentale précise après une première découverte ?" },
    { id: "ray-03", dimension: "rayonnement", subDimension: "présence", text: "Votre présence reste-t-elle reconnaissable d'un canal à l'autre sans perdre en sobriété ?" },
    { id: "ray-04", dimension: "rayonnement", subDimension: "influence positive", text: "Vos prises de parole améliorent-elles la qualité de réflexion de votre environnement ?" },
    { id: "ray-05", dimension: "rayonnement", subDimension: "empreinte relationnelle", text: "Les personnes qui vous croisent gardent-elles une impression de sérieux, d'écoute et de clarté ?" },
    { id: "ray-06", dimension: "rayonnement", subDimension: "visibilité utile", text: "Vos contenus ou messages répondent-ils à des questions réelles plutôt qu'à une obligation de présence ?" },
    { id: "ray-07", dimension: "rayonnement", subDimension: "mémorisation", text: "Votre nom est-il associé à une idée forte et stable dans l'esprit de votre cercle ?" },
    { id: "ray-08", dimension: "rayonnement", subDimension: "présence", text: "Votre empreinte visuelle et verbale renforce-t-elle la confiance avant même un échange direct ?" },
    { id: "ray-09", dimension: "rayonnement", subDimension: "influence positive", text: "Votre organisation contribue-t-elle à élever les standards de son marché par sa posture ?" },
    { id: "ray-10", dimension: "rayonnement", subDimension: "empreinte relationnelle", text: "Votre manière d'interagir laisse-t-elle aux autres l'envie de poursuivre la relation ?" },
    { id: "ray-11", dimension: "rayonnement", subDimension: "visibilité utile", text: "Votre présence attire-t-elle les bonnes conversations plutôt que de simples signes d'attention ?" },
    { id: "ray-12", dimension: "rayonnement", subDimension: "mémorisation", text: "Les éléments distinctifs de votre organisation peuvent-ils être rappelés plusieurs jours après un contact ?" },
    { id: "ray-13", dimension: "rayonnement", subDimension: "présence", text: "Votre rayonnement reste-t-il aligné avec votre niveau réel de maturité et d'expertise ?" },
    { id: "ray-14", dimension: "rayonnement", subDimension: "influence positive", text: "Vos messages donnent-ils envie d'agir avec plus de discernement, de confiance et de responsabilité ?" },
    { id: "ray-15", dimension: "rayonnement", subDimension: "empreinte relationnelle", text: "Votre capital confiance grandit-il après chaque interaction significative ?" }
  ]
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
  const selected = (Object.keys(questionBanks) as DimensionKey[]).flatMap((dimension) => shuffle(questionBanks[dimension]).slice(0, 6));
  return shuffle(selected);
}
