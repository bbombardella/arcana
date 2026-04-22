export type Suit = 'major' | 'cups' | 'swords' | 'wands' | 'pentacles';

export interface TarotCard {
  id: string;
  name: string;
  image: string;
  keywords: string;
  reversedKeywords: string;
  suit: Suit;
}
