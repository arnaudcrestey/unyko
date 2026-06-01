# Architecture UNYKO

## 1. Architecture complète

UNYKO est livré comme une application Next.js App Router structurée autour d'une page reine `/diagnostic`, d'une page signature `/vitrine` et d'un parcours de compréhension qui pousse naturellement vers la mesure de l'Indice UNYKO™.

Routes :

- `/` — accueil stratégique et introduction de l'Indice UNYKO™.
- `/diagnostic` — page reine, explication du diagnostic et des 4 dimensions.
- `/diagnostic/lancer` — diagnostic front V1 avec tirage aléatoire et scoring.
- `/methode` — méthode Révéler, Mesurer, Renforcer.
- `/rapport` — projection du rapport de capital confiance.
- `/offres` — formats d'accompagnement centrés sur le diagnostic.
- `/ecosysteme` — lecture SYSTIA, ARHI, UNYKO.
- `/vitrine` — page signature ultra premium.
- `/a-propos` — fondation stratégique.

## 2. Composants

- `PageShell` orchestre header, footer et fond relationnel.
- `Header`, `Footer`, `Logo` assurent la cohérence de navigation.
- `CircleMark` matérialise le cercle comme symbole principal.
- `Hero`, `SectionHeader`, `DimensionGrid`, `CTASection` composent le récit premium.
- `DiagnosticEngine` gère le tirage, la progression, les réponses, le calcul et l'affichage des scores.

## 3. Types TypeScript

Les types clés isolent les dimensions, questions, réponses, niveaux et scores afin de préparer la connexion future à Supabase, n8n et OpenAI sans modifier le modèle métier.

## 4. Données du diagnostic

`questionBanks` contient 4 banques de 15 questions : crédibilité, recommandation, communauté et rayonnement. Chaque lancement sélectionne 6 questions par dimension, puis mélange les 24 questions pour éviter deux diagnostics identiques.

## 5. Stratégie responsive

L'expérience est mobile-first : blocs empilés sur petits écrans, grilles en deux ou trois colonnes dès les largeurs moyennes, cercles adaptatifs en `vmin` ou en conteneurs fluides, navigation desktop enrichie et CTA maintenu visible.
