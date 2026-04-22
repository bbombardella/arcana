import { useState } from "react";
import { InterpPanel } from "@components/InterpPanel";
import { useOracle } from "@hooks/useOracle";
import type { ZodiacSign } from "@models/zodiac-sign.model.ts";
import { SIGNS } from "@data/signs.data.ts";
import s from "./AstroScreen.module.scss";

export function AstroScreen() {
  const [selected, setSelected] = useState<ZodiacSign | null>(null);
  const oracle = useOracle();

  const handleAstroReading = async () => {
    if (!selected) return;
    oracle.reset();
    await oracle.interpretAstro(selected);
  };

  return (
    <div className={s.screen}>
      <p className={s.intro}>Quel signe gouverne ton âme ce soir ?</p>

      <div className={s.grid}>
        {SIGNS.map((sign) => (
          <div
            key={sign.name}
            className={`${s.sign} ${selected?.name === sign.name ? s.active : ""}`}
            onClick={() => { setSelected(sign); oracle.reset(); }}
          >
            <span className={s.symbol}>{sign.symbol}</span>
            <div className={s.signName}>{sign.name}</div>
            <div className={s.dates}>{sign.dates}</div>
          </div>
        ))}
      </div>

      <div className="separator" />

      {selected && (
        <button className="oracle-btn" onClick={handleAstroReading} disabled={oracle.loading}>
          ☽ Demander l'oracle ☽
        </button>
      )}

      {(oracle.text || oracle.loading || oracle.error) && (
        <InterpPanel
          title={`${selected?.symbol ?? "☽"} ${selected?.name ?? ""}`}
          text={oracle.text}
          loading={oracle.loading}
          error={oracle.error}
        />
      )}
    </div>
  );
}
