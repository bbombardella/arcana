import { AnimatePresence, motion } from "framer-motion";
import { OracleLoader } from "@components/OracleLoader";
import s from "./InterpPanel.module.scss";

interface Props {
  title: string;
  text: string | null;
  loading: boolean;
  error: string | null;
}

const fadeSlide = {
  initial: { opacity: 0, y: 6 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -6 },
  transition: { duration: 0.3, ease: "easeInOut" },
};

export function InterpPanel({ title, text, loading, error }: Readonly<Props>) {
  return (
    <motion.div
      className={s.panel}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
    >
      <h3 className={s.title}>{title}</h3>
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div key="loader" {...fadeSlide}>
            <OracleLoader />
          </motion.div>
        ) : (
          <motion.p key="text" className={`${s.text} ${error ? s.error : ""}`} {...fadeSlide}>
            {error ?? text ?? ""}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
