import { useState, useCallback } from "react";
import { callCard, callSpread, callAstro } from "@api/oracle.ts";
import type { DrawnCard } from "@models/drawn-card.model.ts";
import type { ZodiacSign } from "@models/zodiac-sign.model.ts";
import { TAROT } from "@data/tarot.data.ts";
import { TAROT_MINOR } from "@data/tarot-minor.data.ts";

const FULL_DECK = [...TAROT, ...TAROT_MINOR];

function useOracleState() {
  const [text, setText] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const call = useCallback(async (fn: () => Promise<string>, errorMsg: string) => {
    setText(null);
    setError(null);
    setLoading(true);
    try {
      setText(await fn());
    } catch {
      setError(errorMsg);
    } finally {
      setLoading(false);
    }
  }, []);

  const reset = useCallback(() => {
    setText(null);
    setError(null);
    setLoading(false);
  }, []);

  return { text, loading, error, call, reset };
}

export function useOracle() {
  const { text, loading, error, call, reset } = useOracleState();

  const interpretCard = useCallback(
    (card: DrawnCard, index: number, spreadSize: number) => {
      call(
        () => callCard(card.id, card.reversed, {
          index,
          spreadSize,
        }),
        "Le voile reste épais ce soir. Réessaie quand les étoiles seront propices."
      );
    },
    [call]
  );

  const interpretSpread = useCallback(
    (cards: DrawnCard[], spreadSize: number) => {
      call(
        () => callSpread(cards.map((c) => ({ id: c.id, reversed: c.reversed })), spreadSize),
        "Les arcanes refusent de parler d'une seule voix ce soir."
      );
    },
    [call]
  );

  const interpretAstro = useCallback(
    (sign: ZodiacSign) => {
      const randomCard = FULL_DECK[Math.floor(Math.random() * FULL_DECK.length)];
      call(
        () => callAstro(
          { name: sign.name, element: sign.element },
          { id: randomCard.id, reversed: false }
        ),
        "Les planètes refusent de parler ce soir."
      );
    },
    [call]
  );

  return { text, loading, error, interpretCard, interpretSpread, interpretAstro, reset };
}
