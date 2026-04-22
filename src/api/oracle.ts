import type { OracleCardRef, OraclePosition, OracleSignRef } from "@models/oracle.model.ts";

const BASE_URL = import.meta.env.VITE_ORACLE_API_URL as string;

async function post(path: string, body: unknown): Promise<string> {
  const res = await fetch(`${BASE_URL}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`Oracle error: ${res.status}`);
  return res.text();
}

export function callCard(
  cardId: string,
  reversed: boolean,
  position?: OraclePosition
): Promise<string> {
  return post("/oracle/card", {
    card: { id: cardId, reversed },
    ...(position ? { position } : {}),
    lang: "fr",
  });
}

export function callSpread(cards: OracleCardRef[], spreadSize: number): Promise<string> {
  return post("/oracle/spread", { cards, spreadSize, lang: "fr" });
}

export function callAstro(sign: OracleSignRef, card: OracleCardRef): Promise<string> {
  return post("/oracle/astro", { sign, card, lang: "fr" });
}
