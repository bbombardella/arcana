import type {ZodiacSign} from '@models/zodiac-sign.model.ts';

export const SIGNS: ZodiacSign[] = [
    {symbol: "♈\uFE0E", name: "Bélier", dates: "21 mars – 19 avr", element: "Feu cardinal, Mars"},
    {symbol: "♉\uFE0E", name: "Taureau", dates: "20 avr – 20 mai", element: "Terre fixe, Vénus"},
    {symbol: "♊\uFE0E", name: "Gémeaux", dates: "21 mai – 20 juin", element: "Air mutable, Mercure"},
    {symbol: "♋\uFE0E", name: "Cancer", dates: "21 juin – 22 juil", element: "Eau cardinal, Lune"},
    {symbol: "♌\uFE0E", name: "Lion", dates: "23 juil – 22 août", element: "Feu fixe, Soleil"},
    {symbol: "♍\uFE0E", name: "Vierge", dates: "23 août – 22 sept", element: "Terre mutable, Mercure"},
    {symbol: "♎\uFE0E", name: "Balance", dates: "23 sept – 22 oct", element: "Air cardinal, Vénus"},
    {symbol: "♏\uFE0E", name: "Scorpion", dates: "23 oct – 21 nov", element: "Eau fixe, Pluton"},
    {symbol: "♐\uFE0E", name: "Sagittaire", dates: "22 nov – 21 déc", element: "Feu mutable, Jupiter"},
    {symbol: "♑\uFE0E", name: "Capricorne", dates: "22 déc – 19 jan", element: "Terre cardinal, Saturne"},
    {symbol: "♒\uFE0E", name: "Verseau", dates: "20 jan – 18 fév", element: "Air fixe, Uranus"},
    {symbol: "♓\uFE0E", name: "Poissons", dates: "19 fév – 20 mars", element: "Eau mutable, Neptune"},
];
