import type { TarotCard } from "@models/tarot-card.model.ts";

// ── CUPS — Eau · émotions, relations, intuition ───────────────────────────────

export const CUPS: TarotCard[] = [
  { id: "cups-01", name: "As de Coupes",       image: "/cards/cups/Cups01.jpg", keywords: "amour naissant, intuition éveillée, nouveau départ émotionnel", reversedKeywords: "vide intérieur, blocage affectif, offre refusée",              suit: "cups" },
  { id: "cups-02", name: "Deux de Coupes",     image: "/cards/cups/Cups02.jpg", keywords: "union, réciprocité, partenariat harmonieux",                    reversedKeywords: "rupture, désaccord, déséquilibre dans la relation",           suit: "cups" },
  { id: "cups-03", name: "Trois de Coupes",    image: "/cards/cups/Cups03.jpg", keywords: "célébration, amitié, joie partagée",                            reversedKeywords: "excès, jalousie, isolement déguisé en fête",                  suit: "cups" },
  { id: "cups-04", name: "Quatre de Coupes",   image: "/cards/cups/Cups04.jpg", keywords: "contemplation, mélancolie, retrait du monde",                   reversedKeywords: "éveil, opportunité saisie, sortie de l'apathie",              suit: "cups" },
  { id: "cups-05", name: "Cinq de Coupes",     image: "/cards/cups/Cups05.jpg", keywords: "deuil, perte, regret",                                          reversedKeywords: "acceptation, reconstruction, regard vers ce qui reste",       suit: "cups" },
  { id: "cups-06", name: "Six de Coupes",      image: "/cards/cups/Cups06.jpg", keywords: "nostalgie, enfance, innocence retrouvée",                       reversedKeywords: "passé qui retient, idéalisation, refus de grandir",           suit: "cups" },
  { id: "cups-07", name: "Sept de Coupes",     image: "/cards/cups/Cups07.jpg", keywords: "illusions, fantasmes, multitude de choix",                      reversedKeywords: "confusion, dispersion, rêves sans fondement",                 suit: "cups" },
  { id: "cups-08", name: "Huit de Coupes",     image: "/cards/cups/Cups08.jpg", keywords: "abandon, départ vers l'essentiel, quête de sens",               reversedKeywords: "peur de quitter, errance sans but, attachement malsain",     suit: "cups" },
  { id: "cups-09", name: "Neuf de Coupes",     image: "/cards/cups/Cups09.jpg", keywords: "satisfaction, vœu exaucé, plénitude",                           reversedKeywords: "excès, désillusion, bonheur de façade",                      suit: "cups" },
  { id: "cups-10", name: "Dix de Coupes",      image: "/cards/cups/Cups10.jpg", keywords: "bonheur familial, harmonie durable, accomplissement",            reversedKeywords: "discorde, rêves brisés, foyer dysfonctionnel",                suit: "cups" },
  { id: "cups-11", name: "Valet de Coupes",    image: "/cards/cups/Cups11.jpg", keywords: "créativité, message du cœur, sensibilité naissante",             reversedKeywords: "immaturité émotionnelle, caprices, manque de profondeur",    suit: "cups" },
  { id: "cups-12", name: "Cavalier de Coupes", image: "/cards/cups/Cups12.jpg", keywords: "romantisme, proposition, invitation sincère",                    reversedKeywords: "séduction vaine, instabilité, promesses non tenues",         suit: "cups" },
  { id: "cups-13", name: "Reine de Coupes",    image: "/cards/cups/Cups13.jpg", keywords: "empathie profonde, intuition, soin maternel",                   reversedKeywords: "dépendance affective, noyade dans l'émotion, manipulation",  suit: "cups" },
  { id: "cups-14", name: "Roi de Coupes",      image: "/cards/cups/Cups14.jpg", keywords: "sagesse émotionnelle, compassion maîtrisée, équilibre du cœur", reversedKeywords: "répression émotionnelle, manipulation, déséquilibre caché",  suit: "cups" },
];

// ── SWORDS — Air · pensée, conflit, vérité ────────────────────────────────────

export const SWORDS: TarotCard[] = [
  { id: "swords-01", name: "As d'Épées",        image: "/cards/swords/Swords01.jpg", keywords: "clarté tranchante, vérité, percée intellectuelle",              reversedKeywords: "confusion, abus de pouvoir, pensée trouble",               suit: "swords" },
  { id: "swords-02", name: "Deux d'Épées",      image: "/cards/swords/Swords02.jpg", keywords: "impasse, décision suspendue, équilibre précaire",               reversedKeywords: "choix assumé, libération, fin du déni",                   suit: "swords" },
  { id: "swords-03", name: "Trois d'Épées",     image: "/cards/swords/Swords03.jpg", keywords: "chagrin, trahison, douleur assumée",                            reversedKeywords: "guérison, pardon accordé, deuil traversé",                suit: "swords" },
  { id: "swords-04", name: "Quatre d'Épées",    image: "/cards/swords/Swords04.jpg", keywords: "repos, retraite nécessaire, récupération",                      reversedKeywords: "épuisement nié, stagnation, incapacité à s'arrêter",     suit: "swords" },
  { id: "swords-05", name: "Cinq d'Épées",      image: "/cards/swords/Swords05.jpg", keywords: "conflit, victoire amère, défaite",                              reversedKeywords: "réconciliation, dépassement des rancœurs, paix retrouvée", suit: "swords" },
  { id: "swords-06", name: "Six d'Épées",       image: "/cards/swords/Swords06.jpg", keywords: "transition, passage vers le calme, éloignement salvateur",      reversedKeywords: "résistance au changement, traversée bloquée",             suit: "swords" },
  { id: "swords-07", name: "Sept d'Épées",      image: "/cards/swords/Swords07.jpg", keywords: "ruse, secret, stratégie solitaire",                             reversedKeywords: "confession, dénouement d'une tromperie, vérité qui éclate", suit: "swords" },
  { id: "swords-08", name: "Huit d'Épées",      image: "/cards/swords/Swords08.jpg", keywords: "emprisonnement mental, paralysie, limitation auto-imposée",     reversedKeywords: "libération, clarté retrouvée, chaînes brisées",           suit: "swords" },
  { id: "swords-09", name: "Neuf d'Épées",      image: "/cards/swords/Swords09.jpg", keywords: "angoisse nocturne, cauchemars, culpabilité qui ronge",           reversedKeywords: "espoir renaissant, fin du tourment, aide acceptée",       suit: "swords" },
  { id: "swords-10", name: "Dix d'Épées",       image: "/cards/swords/Swords10.jpg", keywords: "fin douloureuse, effondrement, trahison totale",                reversedKeywords: "renaissance après le fond, retournement de situation",     suit: "swords" },
  { id: "swords-11", name: "Valet d'Épées",     image: "/cards/swords/Swords11.jpg", keywords: "curiosité vive, vigilance, intelligence prompte",               reversedKeywords: "bavardage, manque de tact, esprit brouillon",             suit: "swords" },
  { id: "swords-12", name: "Cavalier d'Épées",  image: "/cards/swords/Swords12.jpg", keywords: "action rapide, ambition tranchante, fougue intellectuelle",     reversedKeywords: "imprudence, agressivité, précipitation aveugle",          suit: "swords" },
  { id: "swords-13", name: "Reine d'Épées",     image: "/cards/swords/Swords13.jpg", keywords: "indépendance, franchise, clarté mentale souveraine",            reversedKeywords: "froideur, amertume, jugement impitoyable",                suit: "swords" },
  { id: "swords-14", name: "Roi d'Épées",       image: "/cards/swords/Swords14.jpg", keywords: "intellect souverain, autorité juste, vérité sans concession",   reversedKeywords: "tyrannie mentale, manipulation froide, jugement corrompu", suit: "swords" },
];

// ── WANDS — Feu · passion, créativité, action ─────────────────────────────────

export const WANDS: TarotCard[] = [
  { id: "wands-01", name: "As de Bâtons",       image: "/cards/wands/Wands01.jpg", keywords: "inspiration soudaine, élan créateur, nouveau départ ardent",   reversedKeywords: "potentiel inexploité, blocage de l'élan, feu étouffé",    suit: "wands" },
  { id: "wands-02", name: "Deux de Bâtons",     image: "/cards/wands/Wands02.jpg", keywords: "vision, planification, pouvoir en devenir",                    reversedKeywords: "peur de l'inconnu, hésitation, repli sur soi",            suit: "wands" },
  { id: "wands-03", name: "Trois de Bâtons",    image: "/cards/wands/Wands03.jpg", keywords: "expansion, anticipation, succès en route",                     reversedKeywords: "retards, obstacles imprévus, impatience mal placée",      suit: "wands" },
  { id: "wands-04", name: "Quatre de Bâtons",   image: "/cards/wands/Wands04.jpg", keywords: "célébration, foyer retrouvé, stabilité méritée",               reversedKeywords: "instabilité du foyer, travail inachevé, fête prématurée", suit: "wands" },
  { id: "wands-05", name: "Cinq de Bâtons",     image: "/cards/wands/Wands05.jpg", keywords: "compétition, désaccord, chaos fertile",                        reversedKeywords: "accord trouvé, évitement du conflit, énergie gaspillée",  suit: "wands" },
  { id: "wands-06", name: "Six de Bâtons",      image: "/cards/wands/Wands06.jpg", keywords: "victoire publique, reconnaissance, triomphe",                  reversedKeywords: "arrogance, échec exposé, gloire fragile",                 suit: "wands" },
  { id: "wands-07", name: "Sept de Bâtons",     image: "/cards/wands/Wands07.jpg", keywords: "défense, persévérance, position tenue coûte que coûte",        reversedKeywords: "épuisement, abandon, capitulation",                       suit: "wands" },
  { id: "wands-08", name: "Huit de Bâtons",     image: "/cards/wands/Wands08.jpg", keywords: "rapidité, nouvelles qui arrivent, mouvement soudain",          reversedKeywords: "retards, chaos, précipitation qui déraille",              suit: "wands" },
  { id: "wands-09", name: "Neuf de Bâtons",     image: "/cards/wands/Wands09.jpg", keywords: "résilience, dernière épreuve, prudence du vétéran",             reversedKeywords: "paranoïa, épuisement des défenses, rigidité excessive",   suit: "wands" },
  { id: "wands-10", name: "Dix de Bâtons",      image: "/cards/wands/Wands10.jpg", keywords: "fardeau, surcharge, responsabilité trop lourde",               reversedKeywords: "libération, délégation, dépôt des armes",                suit: "wands" },
  { id: "wands-11", name: "Valet de Bâtons",    image: "/cards/wands/Wands11.jpg", keywords: "enthousiasme débordant, idées nouvelles, aventure",             reversedKeywords: "dispersion, manque de direction, feu de paille",          suit: "wands" },
  { id: "wands-12", name: "Cavalier de Bâtons", image: "/cards/wands/Wands12.jpg", keywords: "fougue, passion brûlante, mouvement sans frein",               reversedKeywords: "instabilité, imprudence, jalousie enflammée",             suit: "wands" },
  { id: "wands-13", name: "Reine de Bâtons",    image: "/cards/wands/Wands13.jpg", keywords: "charisme solaire, confiance rayonnante, créativité incarnée",   reversedKeywords: "jalousie, autoritarisme, épuisement de soi",              suit: "wands" },
  { id: "wands-14", name: "Roi de Bâtons",      image: "/cards/wands/Wands14.jpg", keywords: "vision de meneur, leadership charismatique, maîtrise du feu",  reversedKeywords: "despotisme, impulsivité, ego qui brûle tout",             suit: "wands" },
];

// ── PENTACLES — Terre · matière, argent, corps, temps ────────────────────────

export const PENTACLES: TarotCard[] = [
  { id: "pentacles-01", name: "As de Deniers",       image: "/cards/pentacles/Pents01.jpg", keywords: "opportunité matérielle, abondance, graine d'un nouveau projet", reversedKeywords: "occasion manquée, avarice, richesse bloquée",              suit: "pentacles" },
  { id: "pentacles-02", name: "Deux de Deniers",     image: "/cards/pentacles/Pents02.jpg", keywords: "équilibre, jonglage habile, adaptabilité",                      reversedKeywords: "désorganisation, excès de prudence, équilibre rompu",      suit: "pentacles" },
  { id: "pentacles-03", name: "Trois de Deniers",    image: "/cards/pentacles/Pents03.jpg", keywords: "collaboration, maîtrise artisanale, travail reconnu",            reversedKeywords: "médiocrité, manque de coopération, effort solitaire",      suit: "pentacles" },
  { id: "pentacles-04", name: "Quatre de Deniers",   image: "/cards/pentacles/Pents04.jpg", keywords: "sécurité, épargne, contrôle du patrimoine",                     reversedKeywords: "avarice, peur de perdre, rigidité matérielle",             suit: "pentacles" },
  { id: "pentacles-05", name: "Cinq de Deniers",     image: "/cards/pentacles/Pents05.jpg", keywords: "précarité, exclusion, perte matérielle",                        reversedKeywords: "aide reçue, récupération, sortie de la disette",           suit: "pentacles" },
  { id: "pentacles-06", name: "Six de Deniers",      image: "/cards/pentacles/Pents06.jpg", keywords: "générosité, partage, équité dans le don",                       reversedKeywords: "dettes, déséquilibre, charité qui asservit",               suit: "pentacles" },
  { id: "pentacles-07", name: "Sept de Deniers",     image: "/cards/pentacles/Pents07.jpg", keywords: "patience, attente des fruits, bilan en cours de route",          reversedKeywords: "frustration, impatience, travail qui ne porte pas",        suit: "pentacles" },
  { id: "pentacles-08", name: "Huit de Deniers",     image: "/cards/pentacles/Pents08.jpg", keywords: "travail assidu, apprentissage, perfectionnement",                reversedKeywords: "routine écrasante, perfectionnisme paralysant, labeur vain", suit: "pentacles" },
  { id: "pentacles-09", name: "Neuf de Deniers",     image: "/cards/pentacles/Pents09.jpg", keywords: "indépendance méritée, luxe, raffinement solitaire",              reversedKeywords: "dépendance financière, superficialité, confort illusoire",  suit: "pentacles" },
  { id: "pentacles-10", name: "Dix de Deniers",      image: "/cards/pentacles/Pents10.jpg", keywords: "héritage, richesse durable, lignée accomplie",                   reversedKeywords: "conflits familiaux, instabilité financière, héritage toxique", suit: "pentacles" },
  { id: "pentacles-11", name: "Valet de Deniers",    image: "/cards/pentacles/Pents11.jpg", keywords: "ambition studieuse, pragmatisme, fiabilité en devenir",          reversedKeywords: "manque d'ambition, procrastination, tête dans les nuages",  suit: "pentacles" },
  { id: "pentacles-12", name: "Cavalier de Deniers", image: "/cards/pentacles/Pents12.jpg", keywords: "méthode, patience laborieuse, travail constant",                 reversedKeywords: "stagnation, routine excessive, entêtement stérile",         suit: "pentacles" },
  { id: "pentacles-13", name: "Reine de Deniers",    image: "/cards/pentacles/Pents13.jpg", keywords: "générosité terrestre, confort offert, pragmatisme nourricier",   reversedKeywords: "insécurité matérielle, matérialisme, soin étouffant",       suit: "pentacles" },
  { id: "pentacles-14", name: "Roi de Deniers",      image: "/cards/pentacles/Pents14.jpg", keywords: "prospérité maîtrisée, fiabilité, empire bâti patiemment",        reversedKeywords: "corruption, matérialisme excessif, pouvoir par l'argent",   suit: "pentacles" },
];

// ── Export groupé ──────────────────────────────────────────────────────────────

export const TAROT_MINOR: TarotCard[] = [
  ...CUPS,
  ...SWORDS,
  ...WANDS,
  ...PENTACLES,
];
