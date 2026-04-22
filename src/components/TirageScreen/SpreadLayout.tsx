import { TarotCard } from "@components/TarotCard";
import type { DrawnCard } from "@models/drawn-card.model.ts";
import { SPREAD_LABELS } from "@data/spread-labels.data.ts";
import type { SpreadSize } from "./SpreadSelector.tsx";
import s from "./TirageScreen.module.scss";

const CROSS_POSITIONS = [null, 0, null, 3, 1, 4, null, 2, null] as const;
const CROSS_LABELS = ["", "Situation", "", "Passé", "Obstacle", "Futur", "", "Fondation", ""];

interface Props {
  spread: SpreadSize;
  drawn: DrawnCard[];
  onSelectCard: (index: number) => void;
}

export function SpreadLayout({ spread, drawn, onSelectCard }: Readonly<Props>) {
  if (spread === 5) {
    return (
      <div className={s.cross}>
        {CROSS_POSITIONS.map((pi, ci) =>
          pi === null ? (
            <div key={`empty-${ci}`} />
          ) : (
            <div key={ci} className={s.cardSlot}>
              <span className={s.positionLabel}>{CROSS_LABELS[ci]}</span>
              <TarotCard card={drawn[pi] ?? null} onClick={() => onSelectCard(pi)} index={pi} />
            </div>
          )
        )}
      </div>
    );
  }

  return (
    <div className={s.spread}>
      {Array.from({ length: spread }, (_, i) => (
        <div key={i} className={s.cardSlot}>
          <span className={s.positionLabel}>{SPREAD_LABELS[spread][i]}</span>
          <TarotCard card={drawn[i] ?? null} onClick={() => onSelectCard(i)} index={i} />
        </div>
      ))}
    </div>
  );
}
