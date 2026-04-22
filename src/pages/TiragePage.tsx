import { useParams } from "@tanstack/react-router";
import { TirageScreen } from "@components/TirageScreen";
import { SPREAD_BY_SLUG } from "@components/TirageScreen/SpreadSelector.tsx";
import type { SpreadSlug } from "@components/TirageScreen/SpreadSelector.tsx";

export function TiragePage() {
  const { spread: spreadSlug } = useParams({ from: "/tirage/$spread" });
  const spreadSize = SPREAD_BY_SLUG[spreadSlug as SpreadSlug];

  return <TirageScreen key={spreadSlug} spread={spreadSize} />;
}
