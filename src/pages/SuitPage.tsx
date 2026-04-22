import { Link, useParams } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { TAROT } from "@data/tarot.data.ts";
import { CUPS, SWORDS, WANDS, PENTACLES } from "@data/tarot-minor.data.ts";
import type { TarotCard } from "@models/tarot-card.model.ts";
import s from "./SuitPage.module.scss";

interface SuitConfig {
  label: string;
  cards: TarotCard[];
}

const SUIT_CONFIG: Record<string, SuitConfig> = {
  major:     { label: "Arcanes Majeurs", cards: TAROT },
  cups:      { label: "Coupes",          cards: CUPS },
  swords:    { label: "Épées",           cards: SWORDS },
  wands:     { label: "Bâtons",          cards: WANDS },
  pentacles: { label: "Deniers",         cards: PENTACLES },
};

const SUIT_NAV = [
  { suit: "major",     label: "✦ Majeurs" },
  { suit: "cups",      label: "☽ Coupes" },
  { suit: "swords",    label: "✕ Épées" },
  { suit: "wands",     label: "⌽ Bâtons" },
  { suit: "pentacles", label: "⬡ Deniers" },
];

export function SuitPage() {
  const { suit } = useParams({ from: "/arcanes/$suit" });
  const config = SUIT_CONFIG[suit];

  return (
    <div className={s.screen}>
      <nav className={s.suitNav}>
        {SUIT_NAV.map(({ suit: suitId, label }) => (
          <Link
            key={suitId}
            to="/arcanes/$suit"
            params={{ suit: suitId }}
            className={`${s.suitLink} ${suit === suitId ? s.active : ""}`}
          >
            {label}
          </Link>
        ))}
      </nav>

      <AnimatePresence mode="wait">
        <motion.div
          key={suit}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.22, ease: "easeInOut" }}
          className={s.suitContent}
        >
          <h2 className={s.title}>{config.label}</h2>

          <div className={s.grid}>
            {config.cards.map((card) => {
              const num = card.id.split("-").pop()!;
              return (
                <div key={card.id} className={s.card}>
                  <div className={s.thumbnail}>
                    <img src={card.image} alt={card.name} loading="lazy" />
                  </div>
                  <div className={s.cardInfo}>
                    <div className={s.cardName}>{num} — {card.name}</div>
                    <div className={s.keywords}>{card.keywords}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
