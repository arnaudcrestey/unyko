# Architecture UNYKO

## 1. Architecture complète

UNYKO est livré comme une application Next.js App Router structurée autour d'une page reine `/diagnostic`, d'une page signature `/vitrine` et d'un parcours de compréhension qui pousse naturellement vers la mesure de l'Indice UNYKO™.

Routes :

- `/` — accueil stratégique et introduction de l'indice de recommandabilité organisationnelle.
- `/diagnostic` — page reine, explication du diagnostic et des 5 piliers.
- `/diagnostic/lancer` — diagnostic front V1 avec tirage aléatoire et scoring.
- `/methode` — méthode Lire, Mesurer, Prioriser.
- `/rapport` — projection du rapport de visibilité, lisibilité, crédibilité, présence, autorité et recommandabilité.
- `/offres` — formats d'accompagnement centrés sur l'Indice UNYKO™.
- `/ecosysteme` — lecture SYSTIA, ARHI, UNYKO.
- `/vitrine` — page signature ultra premium.
- `/a-propos` — fondation stratégique.

## 2. Composants

- `PageShell` orchestre header, footer et fond premium.
- `Header`, `Footer`, `Logo` assurent la cohérence de navigation.
- `CircleMark` matérialise le cercle comme symbole principal.
- `Hero`, `SectionHeader`, `DimensionGrid`, `CTASection` composent le récit premium.
- `DiagnosticEngine` gère le tirage, la progression, les réponses, le calcul et l'affichage des scores.

## 3. Types TypeScript

Les types clés isolent les piliers, questions, réponses, niveaux et scores afin de préparer la connexion future à Supabase, n8n et OpenAI sans modifier le modèle métier.

## 4. Données du diagnostic

`questionBanks` contient 5 banques de 15 questions : lisibilité, crédibilité, présence, autorité et recommandabilité. Chaque lancement sélectionne 5 questions par pilier, puis mélange les 25 questions pour éviter deux diagnostics identiques.

## 5. Stratégie responsive

L'expérience est mobile-first : blocs empilés sur petits écrans, grilles en deux ou trois colonnes dès les largeurs moyennes, cercles adaptatifs en `vmin` ou en conteneurs fluides, navigation desktop enrichie et CTA maintenu visible.
