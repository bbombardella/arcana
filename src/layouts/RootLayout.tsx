import { Outlet, Link, useRouterState } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { StarField } from "@components/StarField";
import { Sigil } from "@components/Sigil";

function AnimatedOutlet() {
  const segment = useRouterState({
    select: (s) => s.location.pathname.split("/")[1],
  });

  return (
    <motion.div
      key={segment}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="screen-wrapper"
    >
      <Outlet />
    </motion.div>
  );
}

export function RootLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const isTirage = pathname.startsWith("/tirage");
  const isAstro = pathname.startsWith("/astro");
  const isArcanes = pathname.startsWith("/arcanes");

  return (
    <>
      <StarField />
      <div className="app">
        <header>
          <Sigil />
          <h1>Arcana</h1>
          <p>Laisse les étoiles te guider à travers le voile</p>
        </header>

        <nav>
          <Link
            to="/tirage/$spread"
            params={{ spread: "single" }}
            className={isTirage ? "active" : ""}
          >
            ✦ Tirage
          </Link>
          <Link
            to="/astro"
            className={isAstro ? "active" : ""}
          >
            ☽ Astrologie
          </Link>
          <Link
            to="/arcanes/$suit"
            params={{ suit: "major" }}
            className={isArcanes ? "active" : ""}
          >
            ⬡ Les Arcanes
          </Link>
        </nav>

        <main>
          <AnimatedOutlet />
        </main>
      </div>
    </>
  );
}
