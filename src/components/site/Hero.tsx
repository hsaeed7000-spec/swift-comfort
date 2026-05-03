import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import wheel from "@/assets/hero-wheel.png";

const splitWords = (str: string) => str.split(" ");

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const wheelY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const wheelRot = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const wheelScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const fade = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const headline = ["Built", "For", "The", "Road."];

  return (
    <section ref={ref} className="relative min-h-screen w-full overflow-hidden bg-background grain">
      {/* radial glow */}
      <div
        className="absolute inset-0 opacity-80"
        style={{ background: "var(--gradient-radial-gold)" }}
      />

      {/* huge ghost text */}
      <motion.div
        style={{ y: titleY, opacity: fade }}
        className="pointer-events-none absolute inset-x-0 top-[18%] select-none text-center"
      >
        <span className="font-display text-[28vw] leading-none tracking-tighter text-white/[0.04]">
          FASTWAVE
        </span>
      </motion.div>

      {/* spinning wheel */}
      <motion.div
        style={{ y: wheelY, rotate: wheelRot, scale: wheelScale }}
        className="absolute right-[-15%] top-1/2 z-10 -translate-y-1/2 md:right-[-8%]"
      >
        <motion.img
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          src={wheel}
          alt="Premium gold alloy wheel"
          width={1280}
          height={1280}
          className="h-[80vh] w-auto max-w-none drop-shadow-[0_40px_80px_rgba(212,160,80,0.35)]"
        />
      </motion.div>

      {/* content */}
      <div className="relative z-20 mx-auto flex min-h-screen max-w-[1600px] flex-col justify-end px-6 pb-24 pt-40 md:px-12 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mb-6 flex items-center gap-3 text-xs tracking-[0.3em] text-gold"
        >
          <span className="h-px w-10 bg-gold" />
          UAE&apos;S PREMIER WHEEL DESTINATION
        </motion.div>

        <h1 className="font-display text-[14vw] leading-[0.85] tracking-tight text-foreground md:text-[10vw]">
          {headline.map((word, wi) => (
            <span key={wi} className="mr-[0.2em] inline-block overflow-hidden align-bottom">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 1.1,
                  delay: 1.5 + wi * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`inline-block ${word === "Road." ? "italic gradient-gold-text" : ""}`}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <div className="mt-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.1 }}
            className="max-w-md text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            Premium alloy wheels, performance tyres and 4×4 gear for those who
            demand the best. Serving all UAE.
          </motion.p>

          <motion.a
            href="#shop"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.3 }}
            data-cursor="hover"
            className="group relative inline-flex items-center gap-4 overflow-hidden rounded-full border border-gold/40 px-8 py-4 font-display text-xs tracking-[0.3em] text-foreground transition-colors hover:text-background"
          >
            <span className="absolute inset-0 -z-10 origin-bottom scale-y-0 bg-gold transition-transform duration-500 group-hover:scale-y-100" />
            EXPLORE COLLECTION
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.4, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2 text-[10px] tracking-[0.4em] text-muted-foreground"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-block"
        >
          ↓ SCROLL
        </motion.span>
      </motion.div>
    </section>
  );
}
