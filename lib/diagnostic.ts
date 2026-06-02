import type { DiagnosticQuestion, DimensionKey } from "@/lib/types";

export const questionBanks: Record<DimensionKey, DiagnosticQuestion[]> = {
  lisibilite: [
    { id: "lis-01", dimension: "lisibilite", subDimension: "clarté", text: "Une personne qui vous découvre comprend-elle en moins d'une minute ce que votre organisation rend possible ?" },
    { id: "lis-02", dimension: "lisibilite", subDimension: "position", text: "Votre positionnement se distingue-t-il clairement des acteurs qui utilisent les mêmes mots que vous ?" },
    { id: "lis-03", dimension: "lisibilite", subDimension: "promesse", text: "Votre promesse est-elle formulée de manière assez précise pour être répétée sans déformation ?" },
    { id: "lis-04", dimension: "lisibilite", subDimension: "mémorisation", text: "Votre nom reste-t-il associé à une idée simple et forte après une première découverte ?" },
    { id: "lis-05", dimension: "lisibilite", subDimension: "différenciation", text: "Votre différence repose-t-elle sur un angle identifiable plutôt que sur une accumulation de services ?" },
    { id: "lis-06", dimension: "lisibilite", subDimension: "clarté", text: "Vos messages importants évitent-ils les formulations trop générales ou interchangeables ?" },
    { id: "lis-07", dimension: "lisibilite", subDimension: "position", text: "Votre cible prioritaire peut-elle se reconnaître rapidement dans votre manière de présenter l'organisation ?" },
    { id: "lis-08", dimension: "lisibilite", subDimension: "promesse", text: "Votre proposition explique-t-elle le problème traité avant de présenter la solution ?" },
    { id: "lis-09", dimension: "lisibilite", subDimension: "mémorisation", text: "Vos repères visuels et verbaux facilitent-ils la reconnaissance de votre organisation ?" },
    { id: "lis-10", dimension: "lisibilite", subDimension: "différenciation", text: "Votre discours montre-t-il ce que vous refusez autant que ce que vous proposez ?" },
    { id: "lis-11", dimension: "lisibilite", subDimension: "clarté", text: "Vos supports principaux hiérarchisent-ils les informations sans créer de surcharge ?" },
    { id: "lis-12", dimension: "lisibilite", subDimension: "position", text: "Votre organisation occupe-t-elle une place nette dans l'esprit de ses publics prioritaires ?" },
    { id: "lis-13", dimension: "lisibilite", subDimension: "promesse", text: "Votre promesse permet-elle de comprendre le bénéfice avant les moyens utilisés ?" },
    { id: "lis-14", dimension: "lisibilite", subDimension: "mémorisation", text: "Vos prises de parole répètent-elles les bons repères sans paraître mécaniques ?" },
    { id: "lis-15", dimension: "lisibilite", subDimension: "différenciation", text: "Votre singularité reste-t-elle lisible dans un environnement saturé de contenus générés par IA ?" },
  ],

  credibilite: [
    { id: "cre-01", dimension: "credibilite", subDimension: "preuves", text: "Vos preuves sont-elles assez concrètes pour soutenir votre discours sans explication supplémentaire ?" },
    { id: "cre-02", dimension: "credibilite", subDimension: "cohérence", text: "Votre expérience réelle correspond-elle à ce que vos supports annoncent ?" },
    { id: "cre-03", dimension: "credibilite", subDimension: "expertise", text: "Votre expertise apparaît-elle dans votre manière de poser les problèmes autant que dans vos réponses ?" },
    { id: "cre-04", dimension: "credibilite", subDimension: "professionnalisme", text: "Vos points de contact donnent-ils une impression de précision, de sérieux et de maîtrise ?" },
    { id: "cre-05", dimension: "credibilite", subDimension: "fiabilité", text: "Votre organisation tient-elle ses promesses avec régularité, même dans les situations complexes ?" },
    { id: "cre-06", dimension: "credibilite", subDimension: "preuves", text: "Vos résultats sont-ils contextualisés plutôt que présentés comme des affirmations isolées ?" },
    { id: "cre-07", dimension: "credibilite", subDimension: "cohérence", text: "Vos équipes décriraient-elles votre niveau d'exigence avec les mêmes repères ?" },
    { id: "cre-08", dimension: "credibilite", subDimension: "expertise", text: "Votre organisation est-elle associée à un domaine d'excellence précis ?" },
    { id: "cre-09", dimension: "credibilite", subDimension: "professionnalisme", text: "La qualité de vos échanges renforce-t-elle votre crédibilité après le premier contact ?" },
    { id: "cre-10", dimension: "credibilite", subDimension: "fiabilité", text: "Vos interlocuteurs savent-ils à quoi s'attendre lorsqu'ils travaillent avec vous ?" },
    { id: "cre-11", dimension: "credibilite", subDimension: "preuves", text: "Vos cas, références ou exemples sont-ils faciles à trouver et à comprendre ?" },
    { id: "cre-12", dimension: "credibilite", subDimension: "cohérence", text: "Votre présence publique reste-t-elle alignée avec votre niveau réel de maturité ?" },
    { id: "cre-13", dimension: "credibilite", subDimension: "expertise", text: "Vos prises de parole apportent-elles un discernement que l'on ne trouve pas partout ?" },
    { id: "cre-14", dimension: "credibilite", subDimension: "professionnalisme", text: "Votre organisation inspire-t-elle du sérieux avant même un rendez-vous ?" },
    { id: "cre-15", dimension: "credibilite", subDimension: "fiabilité", text: "Votre réputation se construit-elle sur des expériences répétées plutôt que sur des promesses fortes ?" },
  ],

  presence: [
    { id: "pre-01", dimension: "presence", subDimension: "visibilité", text: "Votre organisation apparaît-elle dans les espaces où vos publics cherchent réellement des repères ?" },
    { id: "pre-02", dimension: "presence", subDimension: "régularité", text: "Votre présence se maintient-elle sans dépendre d'efforts ponctuels ou de pics d'activité ?" },
    { id: "pre-03", dimension: "presence", subDimension: "canaux", text: "Vos canaux principaux servent-ils une intention claire plutôt qu'une simple occupation de l'espace ?" },
    { id: "pre-04", dimension: "presence", subDimension: "attention", text: "Vos contenus attirent-ils une attention qualifiée plutôt qu'une réaction superficielle ?" },
    { id: "pre-05", dimension: "presence", subDimension: "continuité", text: "Votre organisation reste-t-elle présente dans les moments où vos publics ne sont pas encore prêts à agir ?" },
    { id: "pre-06", dimension: "presence", subDimension: "visibilité", text: "Votre visibilité permet-elle de mieux comprendre votre utilité ?" },
    { id: "pre-07", dimension: "presence", subDimension: "régularité", text: "Votre rythme de prise de parole est-il soutenable dans la durée ?" },
    { id: "pre-08", dimension: "presence", subDimension: "canaux", text: "Chaque canal utilisé renforce-t-il une facette précise de votre position ?" },
    { id: "pre-09", dimension: "presence", subDimension: "attention", text: "Vos messages créent-ils des conversations pertinentes avec les bonnes personnes ?" },
    { id: "pre-10", dimension: "presence", subDimension: "continuité", text: "Votre présence conserve-t-elle une cohérence même lorsque vos sujets évoluent ?" },
    { id: "pre-11", dimension: "presence", subDimension: "visibilité", text: "Votre organisation est-elle visible sans paraître surexposée ?" },
    { id: "pre-12", dimension: "presence", subDimension: "régularité", text: "Votre présence s'appuie-t-elle sur un système plutôt que sur l'inspiration du moment ?" },
    { id: "pre-13", dimension: "presence", subDimension: "canaux", text: "Vos supports prioritaires sont-ils adaptés à la maturité de vos publics ?" },
    { id: "pre-14", dimension: "presence", subDimension: "attention", text: "Votre organisation sait-elle retenir l'attention par la justesse plutôt que par l'intensité ?" },
    { id: "pre-15", dimension: "presence", subDimension: "continuité", text: "Votre présence installe-t-elle progressivement une familiarité professionnelle ?" },
  ],

  autorite: [
    { id: "aut-01", dimension: "autorite", subDimension: "point de vue", text: "Votre organisation exprime-t-elle un point de vue reconnaissable sur son sujet ?" },
    { id: "aut-02", dimension: "autorite", subDimension: "expertise", text: "Votre expertise aide-t-elle vos publics à mieux décider ?" },
    { id: "aut-03", dimension: "autorite", subDimension: "preuves", text: "Vos preuves soutiennent-elles vos convictions de manière structurée ?" },
    { id: "aut-04", dimension: "autorite", subDimension: "standards", text: "Votre organisation élève-t-elle les standards attendus dans son domaine ?" },
    { id: "aut-05", dimension: "autorite", subDimension: "influence", text: "Vos prises de parole orientent-elles les discussions importantes de votre marché ?" },
    { id: "aut-06", dimension: "autorite", subDimension: "point de vue", text: "Votre point de vue reste-t-il stable même lorsque les tendances changent ?" },
    { id: "aut-07", dimension: "autorite", subDimension: "expertise", text: "Votre organisation sait-elle expliquer les nuances que d'autres simplifient trop vite ?" },
    { id: "aut-08", dimension: "autorite", subDimension: "preuves", text: "Vos références démontrent-elles une maîtrise plutôt qu'une simple activité ?" },
    { id: "aut-09", dimension: "autorite", subDimension: "standards", text: "Votre manière de travailler donne-t-elle envie d'adopter des critères plus exigeants ?" },
    { id: "aut-10", dimension: "autorite", subDimension: "influence", text: "Votre nom est-il associé à des décisions, des arbitrages ou des orientations utiles ?" },
    { id: "aut-11", dimension: "autorite", subDimension: "point de vue", text: "Votre organisation assume-t-elle clairement ce qu'elle considère comme important ?" },
    { id: "aut-12", dimension: "autorite", subDimension: "expertise", text: "Vos contenus montrent-ils une profondeur supérieure aux réponses génériques produites par IA ?" },
    { id: "aut-13", dimension: "autorite", subDimension: "preuves", text: "Vos preuves sont-elles reliées à une méthode identifiable ?" },
    { id: "aut-14", dimension: "autorite", subDimension: "standards", text: "Votre exigence est-elle perceptible dans vos mots, vos choix et vos livrables ?" },
    { id: "aut-15", dimension: "autorite", subDimension: "influence", text: "Votre parole crée-t-elle un repère que d'autres peuvent citer ou transmettre ?" },
  ],

  recommandabilite: [
    { id: "rec-01", dimension: "recommandabilite", subDimension: "transmission", text: "Une personne satisfaite peut-elle expliquer facilement pourquoi elle devrait vous recommander ?" },
    { id: "rec-02", dimension: "recommandabilite", subDimension: "prescription", text: "Votre organisation est-elle citée lorsque le bon besoin apparaît dans une conversation ?" },
    { id: "rec-03", dimension: "recommandabilite", subDimension: "réputation", text: "Votre réputation repose-t-elle sur une perception précise plutôt que sur une notoriété vague ?" },
    { id: "rec-04", dimension: "recommandabilite", subDimension: "mémorisation", text: "Votre nom revient-il naturellement lorsque l'on cherche une expertise de votre domaine ?" },
    { id: "rec-05", dimension: "recommandabilite", subDimension: "désirabilité", text: "Votre organisation donne-t-elle envie d'être associée à son niveau d'exigence ?" },
    { id: "rec-06", dimension: "recommandabilite", subDimension: "transmission", text: "Vos éléments de langage facilitent-ils la transmission par des tiers ?" },
    { id: "rec-07", dimension: "recommandabilite", subDimension: "prescription", text: "Vos meilleurs interlocuteurs savent-ils dans quelles situations vous recommander ?" },
    { id: "rec-08", dimension: "recommandabilite", subDimension: "réputation", text: "Votre réputation confirme-t-elle votre positionnement plutôt que de le rendre flou ?" },
    { id: "rec-09", dimension: "recommandabilite", subDimension: "mémorisation", text: "Votre organisation possède-t-elle une phrase, une idée ou un repère qui se retient facilement ?" },
    { id: "rec-10", dimension: "recommandabilite", subDimension: "désirabilité", text: "Votre niveau de présence et de crédibilité crée-t-il une préférence avant le premier échange ?" },
    { id: "rec-11", dimension: "recommandabilite", subDimension: "transmission", text: "Votre proposition reste-t-elle claire lorsqu'elle est racontée par quelqu'un d'autre ?" },
    { id: "rec-12", dimension: "recommandabilite", subDimension: "prescription", text: "Les personnes qui vous connaissent identifient-elles les bons moments pour vous prescrire ?" },
    { id: "rec-13", dimension: "recommandabilite", subDimension: "réputation", text: "Les retours à votre sujet décrivent-ils une valeur stable et reconnaissable ?" },
    { id: "rec-14", dimension: "recommandabilite", subDimension: "mémorisation", text: "Votre organisation reste-t-elle présente dans l'esprit de ses publics entre deux interactions ?" },
    { id: "rec-15", dimension: "recommandabilite", subDimension: "désirabilité", text: "Votre organisation est-elle recommandable parce qu'elle est lisible, crédible, présente et légitime ?" },
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