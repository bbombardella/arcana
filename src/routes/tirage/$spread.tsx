import { createFileRoute, redirect } from "@tanstack/react-router";
import { TiragePage } from "@pages/TiragePage.tsx";
import { SPREAD_BY_SLUG } from "@components/TirageScreen/SpreadSelector.tsx";

export const Route = createFileRoute("/tirage/$spread")({
  beforeLoad: ({ params }) => {
    if (!(params.spread in SPREAD_BY_SLUG)) {
      throw redirect({ to: "/tirage/$spread", params: { spread: "single" } });
    }
  },
  component: TiragePage,
});
