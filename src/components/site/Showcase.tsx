import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import wheel from "@/assets/hero-wheel.png";

export function Showcase() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rot = useTransform(scrollYProgress, [0, 1], [-180, 180]);
  const x = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]);

  return (
    <section ref={ref} className="relative overflow-hidden border-y border-border bg-background py-32 md:py-48">
      <div
        className="absolute inset-0 opacity-40"
        style={{ background: "var(--gradient-radial-gold)" }}
      />
      <motion.div
        style={{ rotate: rot, x }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <img
          src={wheel}
          alt=""
          aria-hidden
          className="h-[120vh] max-h-[1200px] w-auto opacity-30 mix-blend-screen"
        />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 text-center md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-6 flex items-center justify-center gap-3 text-xs tracking-[0.3em] text-gold"
        >
          <span className="h-px w-10 bg-gold" />
          ENGINEERED IN MOTION
          <span className="h-px w-10 bg-gold" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-display text-5xl leading-[0.95] tracking-tight text-foreground md:text-8xl"
        >
          Every Wheel <br />
          Tells A <span className="italic gradient-gold-text">Story.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-8 max-w-xl text-base text-muted-foreground md:text-lg"
        >
          Forged from the finest aluminum alloys, finished by hand, balanced by
          machine. Built for performance — designed to be seen.
        </motion.p>
      </div>
    </section>
  );
}
