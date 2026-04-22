import { motion } from "framer-motion";
import type { DrawnCard } from "@models/drawn-card.model.ts";
import s from "./TarotCard.module.scss";

interface Props {
  card: DrawnCard | null;
  onClick?: () => void;
  index?: number;
}

export function TarotCard({ card, onClick, index = 0 }: Readonly<Props>) {
  return (
    <motion.div
      className={`${s.card} ${card ? s.flipped : ""}`}
      animate={{ rotateY: card ? 180 : 0 }}
      transition={{ duration: 0.7, ease: [0.4, 0.2, 0.2, 1], delay: index * 0.1 }}
      onClick={card ? onClick : undefined}
    >
      <div className={s.back}>
        <span className={s.backSymbol}>✦</span>
      </div>
      <div className={s.face}>
        {card && (
          <>
            <img
              className={`${s.image} ${card.reversed ? s.reversed : ""}`}
              src={card.image}
              alt={card.name}
            />
            <div className={s.nameOverlay}>
              <span className={s.name}>{card.name}</span>
              {card.reversed && <span className={s.rev}>Renversé</span>}
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}
