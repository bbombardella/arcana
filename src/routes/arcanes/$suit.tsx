import { createFileRoute, redirect } from "@tanstack/react-router";
import { SuitPage } from "@pages/SuitPage.tsx";

const VALID_SUITS = ["major", "cups", "swords", "wands", "pentacles"];

export const Route = createFileRoute("/arcanes/$suit")({
  beforeLoad: ({ params }) => {
    if (!VALID_SUITS.includes(params.suit)) {
      throw redirect({ to: "/arcanes/$suit", params: { suit: "major" } });
    }
  },
  component: SuitPage,
});
