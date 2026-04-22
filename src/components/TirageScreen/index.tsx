import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CardModal } from "@components/CardModal";
import { InterpPanel } from "@components/InterpPanel";
import { useOracle } from "@hooks/useOracle.ts";
import { SpreadSelector, SPREAD_NAMES } from "./SpreadSelector.tsx";
import { SpreadLayout } from "./SpreadLayout.tsx";
import type { SpreadSize } from "./SpreadSelector.tsx";
import type { DrawnCard } from "@models/drawn-card.model.ts";
import { TAROT } from "@data/tarot.data.ts";
import { TAROT_MINOR } from "@data/tarot-minor.data.ts";
import { SPREAD_LABELS } from "@data/spread-labels.data.ts";
import s from "./TirageScreen.module.scss";

const CROSS_POSITIONS = [null, 0, null, 3, 1, 4, null, 2, null] as const;
const CROSS_LABELS = ["", "Situation", "", "Passé", "Obstacle", "Futur", "", "Fondation", ""];
const FULL_DECK = [...TAROT, ...TAROT_MINOR];

const FLIP_BACK_MS = (spread: SpreadSize) => 700 + spread * 100;

interface Props {
  spread: SpreadSize;
}

function drawDeck(n: number): DrawnCard[] {
  return [...FULL_DECK]
    .sort(() => Math.random() - 0.5)
    .slice(0, n)
    .map((c) => ({ ...c, reversed: Math.random() > 0.65 }));
}

function getLabel(index: number, spread: SpreadSize): string {
  if (spread === 5) {
    const ci = CROSS_POSITIONS.indexOf(index as 0 | 1 | 2 | 3 | 4);
    return ci !== -1 ? CROSS_LABELS[ci] : "";
  }
  return SPREAD_LABELS[spread][index] ?? "";
}

export function TirageScreen({ spread }: Readonly<Props>) {
  const [drawn, setDrawn] = useState<DrawnCard[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const oracle = useOracle();
  const spreadOracle = useOracle();

  const resetAll = () => {
    oracle.reset();
    spreadOracle.reset();
    setSelectedIndex(null);
  };

  const handleDraw = () => {
    setDrawn([]);
    resetAll();
    setTimeout(() => setDrawn(drawDeck(spread)), FLIP_BACK_MS(spread));
  };

  const handleSelectCard = (index: number) => {
    setSelectedIndex(index);
    oracle.reset();
  };

  const handleAskOracle = () => {
    if (selectedIndex !== null) {
      oracle.interpretCard(drawn[selectedIndex], selectedIndex, spread);
    }
  };

  const handleSpreadReading = () => {
    spreadOracle.reset();
    spreadOracle.interpretSpread(drawn, spread);
  };

  const selectedCard = selectedIndex !== null ? drawn[selectedIndex] : null;
  const showSpreadReading = spread > 1 && drawn.length > 0;

  return (
    <div className={s.screen}>
      <SpreadSelector />

      <div className="separator" />
      <AnimatePresence mode="wait">
        <motion.div
          key={spread}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
          <SpreadLayout spread={spread} drawn={drawn} onSelectCard={handleSelectCard} />
        </motion.div>
      </AnimatePresence>
      <div className="separator" />

      <button className={`draw-btn ${s.drawBtn}`} onClick={handleDraw}>
        ✦ Révéler les arcanes ✦
      </button>

      {drawn.length > 0 && (
        <p className="small-note">Clique sur une carte retournée pour voir son sens</p>
      )}

      {showSpreadReading && (
        <button
          className={`oracle-btn ${s.spreadReadingBtn}`}
          onClick={handleSpreadReading}
          disabled={spreadOracle.loading}
        >
          ☽ Lecture globale du tirage ☽
        </button>
      )}

      {(spreadOracle.text || spreadOracle.loading || spreadOracle.error) && (
        <InterpPanel
          title={`✦ ${SPREAD_NAMES[spread]}`}
          text={spreadOracle.text}
          loading={spreadOracle.loading}
          error={spreadOracle.error}
        />
      )}

      <AnimatePresence>
        {selectedCard && selectedIndex !== null && (
          <CardModal
            key="card-modal"
            card={selectedCard}
            label={getLabel(selectedIndex, spread)}
            oracleText={oracle.text}
            oracleLoading={oracle.loading}
            oracleError={oracle.error}
            canAskOracle={true}
            onAskOracle={handleAskOracle}
            onClose={() => setSelectedIndex(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
