import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/tirage/")({
  beforeLoad: () => {
    throw redirect({ to: "/tirage/$spread", params: { spread: "single" } });
  },
});
