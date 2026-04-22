import type { TarotCard } from "./tarot-card.model.ts";

export interface DrawnCard extends TarotCard {
  reversed: boolean;
}
