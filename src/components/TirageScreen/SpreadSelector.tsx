import { Link, useParams } from "@tanstack/react-router";
import s from "./TirageScreen.module.scss";

export const SPREAD_SIZES = [1, 3, 5] as const;
export type SpreadSize = (typeof SPREAD_SIZES)[number];
export type SpreadSlug = "single" | "trinity" | "celtic-cross";

export const SPREAD_NAMES: Record<SpreadSize, string> = {
  1: "Carte du jour",
  3: "Passé · Présent · Futur",
  5: "Croix celtique",
};

export const SPREAD_BY_SLUG: Record<SpreadSlug, SpreadSize> = {
  "single":       1,
  "trinity":      3,
  "celtic-cross": 5,
};

const SLUG_BY_SPREAD: Record<SpreadSize, SpreadSlug> = {
  1: "single",
  3: "trinity",
  5: "celtic-cross",
};

export function SpreadSelector() {
  const { spread: currentSlug } = useParams({ from: "/tirage/$spread" });

  return (
    <div className={s.spreadSelector}>
      {SPREAD_SIZES.map((size) => {
        const slug = SLUG_BY_SPREAD[size];
        return (
          <Link
            key={size}
            to="/tirage/$spread"
            params={{ spread: slug }}
            className={`draw-btn ${currentSlug === slug ? "active-spread" : ""}`}
          >
            {SPREAD_NAMES[size]}
          </Link>
        );
      })}
    </div>
  );
}
