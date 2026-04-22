import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { OracleLoader } from "@components/OracleLoader";
import type { DrawnCard } from "@models/drawn-card.model.ts";
import s from "./CardModal.module.scss";

interface Props {
  card: DrawnCard;
  label: string;
  oracleText: string | null;
  oracleLoading: boolean;
  oracleError: string | null;
  canAskOracle: boolean;
  onAskOracle: () => void;
  onClose: () => void;
}

export function CardModal({ card, label, oracleText, oracleLoading, oracleError, canAskOracle, onAskOracle, onClose }: Readonly<Props>) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const fixedText = card.reversed
    ? `En position renversée, ${card.name.toLowerCase()} apporte son ombre : ${card.reversedKeywords}. Là où la lumière ne pénètre pas encore, cherche la leçon cachée dans l'obscurité.`
    : `${card.name} se dresse devant toi dans toute sa lumière : ${card.keywords}. Laisse cette énergie te traverser et guider tes pas dans les jours à venir.`;

  const hasOracle = !!(oracleText || oracleLoading || oracleError);

  return (
    <motion.div
      className={s.backdrop}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <motion.div
        className={s.modal}
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.3, ease: [0.4, 0.2, 0.2, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={s.close} onClick={onClose}>✕</button>

        <img
          className={`${s.image} ${card.reversed ? s.reversed : ""}`}
          src={card.image}
          alt={card.name}
        />

        <div className={s.info}>
          {label && <p className={s.label}>{label}</p>}

          <h2 className={s.name}>{card.name}</h2>

          {card.reversed && <span className={s.reversedBadge}>Renversé</span>}

          <p className={s.keywords}>
            {card.reversed ? card.reversedKeywords : card.keywords}
          </p>

          <div className={s.divider} />

          <AnimatePresence mode="wait">
            {oracleLoading ? (
              <motion.div
                key="loader"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <OracleLoader />
              </motion.div>
            ) : (
              <motion.p
                key="text"
                className={`${s.interpretation} ${oracleError ? s.error : ""}`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {oracleError ?? (hasOracle ? oracleText : fixedText) ?? ""}
              </motion.p>
            )}
          </AnimatePresence>

          {!hasOracle && canAskOracle && (
            <button className={s.oracleBtn} onClick={onAskOracle}>
              ✦ Consulter l'oracle ✦
            </button>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
