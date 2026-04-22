import { createFileRoute } from "@tanstack/react-router";
import { AstroPage } from "@pages/AstroPage.tsx";

export const Route = createFileRoute("/astro")({
  component: AstroPage,
});
