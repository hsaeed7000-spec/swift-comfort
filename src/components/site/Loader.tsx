import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let raf = 0;
    let p = 0;
    const tick = () => {
      p += Math.random() * 4 + 1;
      if (p >= 100) {
        p = 100;
        setProgress(100);
        setTimeout(() => setDone(true), 400);
        return;
      }
      setProgress(p);
      raf = requestAnimationFrame(() => setTimeout(tick, 40));
    };
    tick();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-display text-2xl tracking-[0.5em] text-foreground/80"
          >
            FASTWAVE
          </motion.div>
          <div className="mt-6 h-px w-64 overflow-hidden bg-border">
            <motion.div
              className="h-full bg-gold"
              style={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>
          <div className="mt-3 font-display text-xs tracking-[0.3em] text-muted-foreground tabular-nums">
            {String(Math.floor(progress)).padStart(3, "0")}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
