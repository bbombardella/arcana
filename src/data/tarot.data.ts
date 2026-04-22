import type { TarotCard } from "@models/tarot-card.model.ts";

export const TAROT: TarotCard[] = [
  { id: "major-00", name: "Le Mat",         image: "/cards/major/00_Fool.jpg",             keywords: "liberté, folie, commencement",           reversedKeywords: "imprudence, stagnation",                    suit: "major" },
  { id: "major-01", name: "Le Magicien",    image: "/cards/major/01_Magician.jpg",         keywords: "volonté, habilité, pouvoir",             reversedKeywords: "manipulation, mauvais usage du pouvoir",    suit: "major" },
  { id: "major-02", name: "La Papesse",     image: "/cards/major/02_High_Priestess.jpg",   keywords: "intuition, sagesse cachée, mystère",     reversedKeywords: "secrets dangereux, blocage intérieur",      suit: "major" },
  { id: "major-03", name: "L'Impératrice",  image: "/cards/major/03_Empress.jpg",          keywords: "fécondité, nature, abondance",           reversedKeywords: "stérilité, excès de contrôle",             suit: "major" },
  { id: "major-04", name: "L'Empereur",     image: "/cards/major/04_Emperor.jpg",          keywords: "autorité, structure, protection",        reversedKeywords: "tyrannie, rigidité, abus",                  suit: "major" },
  { id: "major-05", name: "Le Pape",        image: "/cards/major/05_Hierophant.jpg",       keywords: "tradition, guidance spirituelle",        reversedKeywords: "dogmatisme, conformité aveugle",            suit: "major" },
  { id: "major-06", name: "L'Amoureux",     image: "/cards/major/06_Lovers.jpg",           keywords: "amour, choix, harmonie",                 reversedKeywords: "discorde, mauvais choix, hésitation",       suit: "major" },
  { id: "major-07", name: "Le Chariot",     image: "/cards/major/07_Chariot.jpg",          keywords: "victoire, maîtrise, mouvement",          reversedKeywords: "défaite, perte de contrôle",                suit: "major" },
  // Tradition française : Justice=VIII, Force=XI (numérotation RWS inversée)
  { id: "major-08", name: "La Justice",     image: "/cards/major/11_Justice.jpg",          keywords: "équilibre, vérité, karma",               reversedKeywords: "injustice, déséquilibre moral",             suit: "major" },
  { id: "major-09", name: "L'Hermite",      image: "/cards/major/09_Hermit.jpg",           keywords: "solitude, sagesse, retraite",            reversedKeywords: "isolement, refus d'aide",                   suit: "major" },
  { id: "major-10", name: "La Roue",        image: "/cards/major/10_Wheel_of_Fortune.jpg", keywords: "destin, cycles, chance",                 reversedKeywords: "malchance, résistance au changement",       suit: "major" },
  { id: "major-11", name: "La Force",       image: "/cards/major/08_Strength.jpg",         keywords: "courage, endurance, passion",            reversedKeywords: "faiblesse, lâcheté, violence",              suit: "major" },
  { id: "major-12", name: "Le Pendu",       image: "/cards/major/12_Hanged_Man.jpg",       keywords: "sacrifice, lâcher-prise, perspective",   reversedKeywords: "égoïsme, résistance, stagnation",           suit: "major" },
  { id: "major-13", name: "La Mort",        image: "/cards/major/13_Death.jpg",            keywords: "transformation, fin, renaissance",       reversedKeywords: "peur du changement, blocage",               suit: "major" },
  { id: "major-14", name: "Tempérance",     image: "/cards/major/14_Temperance.jpg",       keywords: "équilibre, patience, guérison",          reversedKeywords: "excès, impatience, manque d'harmonie",      suit: "major" },
  { id: "major-15", name: "Le Diable",      image: "/cards/major/15_Devil.jpg",            keywords: "désir, ombre, matière",                  reversedKeywords: "libération, rupture des chaînes",           suit: "major" },
  { id: "major-16", name: "La Maison Dieu", image: "/cards/major/16_Tower.jpg",            keywords: "révélation soudaine, chaos créateur",    reversedKeywords: "catastrophe évitée, résistance",            suit: "major" },
  { id: "major-17", name: "L'Étoile",       image: "/cards/major/17_Star.jpg",             keywords: "espoir, foi, inspiration",               reversedKeywords: "désespoir, doute, désillusion",             suit: "major" },
  { id: "major-18", name: "La Lune",        image: "/cards/major/18_Moon.jpg",             keywords: "illusion, rêves, inconscient",           reversedKeywords: "confusion dissipée, peurs surmontées",      suit: "major" },
  { id: "major-19", name: "Le Soleil",      image: "/cards/major/19_Sun.jpg",              keywords: "joie, succès, clarté",                   reversedKeywords: "orgueil, superficialité",                   suit: "major" },
  { id: "major-20", name: "Le Jugement",    image: "/cards/major/20_Judgement.jpg",        keywords: "éveil, renaissance, appel",              reversedKeywords: "culpabilité, résistance à l'éveil",         suit: "major" },
  { id: "major-21", name: "Le Monde",       image: "/cards/major/21_World.jpg",            keywords: "accomplissement, complétude, voyage",    reversedKeywords: "inachèvement, blocage du succès",           suit: "major" },
];
