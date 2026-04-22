# Arcana — Contexte projet pour Claude Code

## Vision

Application web de tirage de tarot, esthétique **witchy/occulte**, inspirée de l'ambiance
de la série *Agatha All Along* (sombre, mystique, théâtral). L'app s'appelle **Arcana**.

L'expérience doit être immersive : animations soignées, ambiance sonore possible à terme,
deux modes (significations fixes + oracle IA). Pas une app utilitaire — une expérience.

---

## Stack technique

| Choix | Justification |
|---|---|
| **React + Vite** | SPA, pas de SSR nécessaire |
| **TypeScript + React Compiler** | mémoïsation auto, moins de useMemo/useCallback |
| **TanStack Router v1** | file-based routing, type-safe params, code splitting auto |
| **Framer Motion** | animations de cartes (flip 3D, stagger, transitions de vue) |
| **AWS Lambda + API Gateway** | proxy oracle IA — URL via `VITE_ORACLE_API_URL` |
| **Canvas 2D maison** | fond étoilé + glyphes astrologiques dans StarField.tsx |
| **SCSS Modules** | pas de Tailwind — trop générique pour cette esthétique |

**Pas de backend frontend** — tout client-side. L'oracle passe par une Lambda AWS (plus d'appel Scaleway direct, plus de clé API côté frontend, pas de streaming SSE).

---

## Design system

### Palette (CSS variables dans `src/index.scss`)

```css
--ink: #0a0812;          /* fond global */
--deep: #110e1c;         /* fond cartes/panels */
--veil: #1a1530;
--mist: #241e3a;         /* hover states */
--bone: #e8dfc8;         /* texte principal */
--parchment: #c8b99a;    /* texte secondaire */
--gold: #c9a84c;         /* accent principal */
--gold-dim: #7a5c1e;     /* borders au repos */
--crimson: #8b1a2f;      /* accents renversé / CTA oracle */
--amethyst: #6b3fa0;     /* toggle actif */
--starlight: #d4c9f0;    /* texte interprétations */
--glow: rgba(201,168,76,0.15);
```

### Typographie

- **Display / titres** : `Cinzel Decorative` (Google Fonts) — serif décoratif, gothique élégant
- **Corps / texte** : `Crimson Pro` (Google Fonts) — serif humaniste, lisible, supporte l'italique
- Jamais Arial, Inter, Roboto ou toute font système

### Règles visuelles

- Fond toujours sombre (#0a0812), jamais de fond blanc
- Borders : `1px solid var(--gold-dim)` au repos, `var(--gold)` au hover/actif
- Box-shadow uniquement via `var(--glow)` — jamais de shadow grise
- Animations : `cubic-bezier(0.4, 0.2, 0.2, 1)` pour les flips de cartes
- Pas de border-radius élevé — max 6px pour les cartes, 4px pour les panels
- Boutons : transparents avec border gold, jamais de fond plein sauf `.oracle-btn` (crimson)
- Les `<Link>` TanStack Router qui remplacent des boutons doivent avoir `text-decoration: none` + `display: inline-block`

---

## Routing (TanStack Router — file-based)

```
src/routes/
├── __root.tsx              # RootLayout (header, nav, toggle oracle, AnimatedOutlet)
├── index.tsx               # redirect → /tirage/single
├── $.tsx                   # catch-all → redirect /tirage/single
├── astro.tsx               # /astro
├── tirage/
│   └── $spread.tsx         # /tirage/:spread (single | trinity | celtic-cross)
└── arcanes/
    ├── index.tsx           # redirect → /arcanes/major
    └── $suit.tsx           # /arcanes/:suit (major | cups | swords | wands | pentacles)
```

### Slugs de tirage

| Slug | Cartes | Disposition |
|---|---|---|
| `single` | 1 | Carte unique |
| `trinity` | 3 | Passé · Présent · Futur |
| `celtic-cross` | 5 | Croix celtique (grille 3×3) |

### Validation des params

Chaque route avec param a un `beforeLoad` qui redirige vers la valeur par défaut si le param est invalide.
`SPREAD_BY_SLUG` exporté depuis `SpreadSelector.tsx`, `VALID_SUITS` inline dans `arcanes/$suit.tsx`.

### Transitions de route

`AnimatedOutlet` dans `RootLayout` : `motion.div` keyed sur le premier segment du pathname.
Pas d'`AnimatePresence` (évite le double-animation avec TanStack `<Outlet>`).
Les animations intra-route (changement de suit dans `/arcanes`) utilisent `AnimatePresence mode="wait"` local.

---

## Structure des fichiers

```
src/
├── routes/                        # file-based routing (TanStack Router)
│   ├── __root.tsx
│   ├── index.tsx
│   ├── $.tsx
│   ├── astro.tsx
│   ├── tirage/$spread.tsx
│   └── arcanes/
│       ├── index.tsx
│       └── $suit.tsx
├── layouts/
│   └── RootLayout.tsx             # header, nav Links, toggle oracle, AnimatedOutlet
├── pages/
│   ├── TiragePage.tsx             # lit $spread → TirageScreen
│   ├── AstroPage.tsx              # wraps AstroScreen
│   └── SuitPage.tsx               # grille + sous-nav suits
├── contexts/
│   └── oracle.context.ts          # OracleContext { aiEnabled }
├── api/
│   └── oracle.ts                  # callCard, callSpread, callAstro → Lambda AWS
├── styles/
│   └── _mixins.scss               # cinzel(), parchment(), panel(), flex-col-center(), streaming-cursor()
├── data/
│   ├── tarot.data.ts              # TAROT[] — 22 arcanes majeurs (suit: 'major', id: 'major-00'…)
│   ├── tarot-minor.data.ts        # CUPS, SWORDS, WANDS, PENTACLES, TAROT_MINOR (56 cartes)
│   ├── spread-labels.data.ts      # SPREAD_LABELS
│   └── signs.data.ts              # SIGNS[] — 12 signes astrologiques
├── models/
│   ├── tarot-card.model.ts        # TarotCard { id, name, image, keywords, reversedKeywords, suit }
│   ├── drawn-card.model.ts        # DrawnCard extends TarotCard { reversed }
│   └── zodiac-sign.model.ts       # ZodiacSign
├── hooks/
│   └── useOracle.ts               # useOracle() → { text, loading, error, interpretCard, interpretSpread, interpretAstro, reset }
├── components/
│   ├── StarField/
│   ├── TarotCard/
│   ├── CardModal/
│   ├── InterpPanel/
│   ├── TirageScreen/
│   │   ├── index.tsx              # reçoit spread: SpreadSize en prop
│   │   ├── SpreadSelector.tsx     # <Link> vers /tirage/$spread, exporte SPREAD_BY_SLUG, SpreadSlug
│   │   ├── SpreadLayout.tsx
│   │   └── TirageScreen.module.scss
│   ├── AstroScreen/
│   └── Sigil/
├── router.ts                      # createRouter({ routeTree }) — routeTree auto-généré
├── routeTree.gen.ts               # AUTO-GÉNÉRÉ par @tanstack/router-plugin — ne pas éditer
└── index.scss                     # design tokens globaux, classes utilitaires (.draw-btn, .separator…)
```

### Alias de chemins (vite.config.ts + tsconfig.app.json)

```ts
'@components' → src/components
'@models'     → src/models
'@data'       → src/data
'@assets'     → src/assets
'@hooks'      → src/hooks
'@styles'     → src/styles
'@api'        → src/api
'@pages'      → src/pages
'@layouts'    → src/layouts
'@contexts'   → src/contexts
```

**Règle** : toujours utiliser ces alias — jamais de chemins relatifs `../../`.
Exception : imports entre fichiers d'un même dossier composant.
SCSS : `@use '@styles/mixins' as *`.

---

## Données

### Modèle TarotCard

```ts
interface TarotCard {
  id: string;          // 'major-00', 'cups-01', 'swords-14'…
  name: string;
  image: string;       // '/cards/major/00_Fool.jpg', '/cards/cups/Cups01.jpg'…
  keywords: string;
  reversedKeywords: string;
  suit: Suit;          // 'major' | 'cups' | 'swords' | 'wands' | 'pentacles'
}
```

78 cartes au total : 22 majeurs + 56 mineurs (14 × 4 suits).
IDs exportés dans `card-ids.json` à la racine (pour l'API Lambda).

### Deck de tirage

`FULL_DECK = [...TAROT, ...TAROT_MINOR]` — 78 cartes, utilisé dans `TirageScreen` et `useOracle`.

### Formats de tirage

```ts
const SPREAD_BY_SLUG = { 'single': 1, 'trinity': 3, 'celtic-cross': 5 }
const SPREAD_LABELS  = { 1: ["Votre arcane"], 3: ["Passé","Présent","Futur"], 5: [...] }
```

Le tirage en 5 cartes (croix celtique) : grille 3×3, cellules vides aux coins, position centrale = Obstacle.

---

## Appels API Oracle (Lambda AWS)

Base URL : `VITE_ORACLE_API_URL` (variable d'environnement)

Trois endpoints `POST`, réponse `text/plain` (pas de streaming) :

| Route | Payload |
|---|---|
| `/oracle/card` | `{ card: { id, reversed }, position?: { index, label, spreadSize }, lang }` |
| `/oracle/spread` | `{ cards: [{ id, reversed }], spreadSize, lang }` |
| `/oracle/astro` | `{ sign: { name, element }, card: { id, reversed }, lang }` |

Voir `src/api/oracle.ts` — fonctions `callCard`, `callSpread`, `callAstro`.

---

## Variables d'environnement

```env
VITE_ORACLE_API_URL=https://<api-gateway-id>.execute-api.<region>.amazonaws.com
```

Voir `.env.example` pour le template.

---

## Conventions de code

- Composants : PascalCase, **un dossier par composant** `components/MonComposant/` avec `index.tsx` + `MonComposant.module.scss`
- Pages : `src/pages/`, pas de dossier — fichier simple `TiragePage.tsx`
- Layouts : `src/layouts/`, même convention
- Routes : `src/routes/`, file-based TanStack Router — export `const Route = createFileRoute(...)({})`
- Hooks : camelCase préfixé `use`
- Models : kebab-case suffixé `.model.ts`
- Data : kebab-case suffixé `.data.ts`
- Pas de `any` TypeScript
- Props typées avec `interface Props` + `Readonly<>`
- **Pas de styles inline** — SCSS Modules, import toujours sous `s`
- `@keyframes` partagés dans `_mixins.scss` via `@mixin`
- Classes conditionnelles : `` `${s.foo} ${condition ? s.bar : ""}` ``
- `import type` pour les types TS

---

## Ce qui reste à faire (par priorité)

### 1. Historique des tirages

- Persister dans `localStorage` : `{ date, spread, cards: DrawnCard[], interpretation? }`
- Route `/journal` (4e onglet nav)

### 4. Améliorations UX

- Son : ambiance sonore au tirage (optionnel, toggle)
- Animation de mélange du paquet avant tirage
- Partage d'un tirage via URL (cards encodées en query params)
- Haptics mobile (navigator.vibrate)

---

## CI/CD

Un seul workflow `.github/workflows/cicd.yml`, déclenché sur push `main`, PR sur `infra/**`, et `workflow_dispatch`.

### Jobs

```
changes → terraform (si infra/** modifiée) → deploy
```

- **changes** : détecte si `infra/**` a changé (`dorny/paths-filter`)
- **terraform** : plan toujours, apply sur push `main` ou `workflow_dispatch action=apply`. Poste le plan en commentaire sur les PRs. Exporte les outputs Terraform (`S3_BUCKET`, `CLOUDFRONT_DISTRIBUTION_ID`) comme GitHub Actions variables.
- **deploy** : `needs: [changes, terraform]`, tourne si terraform a réussi **ou** a été skippé (`terraform.result == 'success' || 'skipped'`). Build Vite → `aws s3 sync dist/ s3://$S3_BUCKET/ --delete` → invalidation CloudFront `/*`.

### Cache

Pas de `--cache-control` dans le sync S3 — CloudFront utilise `Managed-CachingOptimized` + invalidation à chaque déploiement. Le cache navigateur est géré par les headers par défaut.

### Auth AWS

OIDC (rôle IAM + trust policy GitHub) — pas de clés longue durée. Secret `AWS_ROLE_ARN` dans les GitHub Secrets.

---

## Instructions

Pense à bien mettre à jour ce fichier `CLAUDE.md` après chaque changement significatif.
