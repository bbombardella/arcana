import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/arcanes/")({
  beforeLoad: () => {
    throw redirect({ to: "/arcanes/$suit", params: { suit: "major" } });
  },
});
