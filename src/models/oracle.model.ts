import type { ZodiacSign } from "./zodiac-sign.model.ts";

export interface OracleCardRef {
  id: string;
  reversed: boolean;
}

export interface OraclePosition {
  index: number;
  spreadSize: number;
}

export type OracleSignRef = Pick<ZodiacSign, "name" | "element">;
