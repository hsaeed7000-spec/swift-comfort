import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ to }: { to: number }) {
  const v = useMotionValue(0);
  const rounded = useTransform(v, (n) => Math.floor(n).toString());
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  useEffect(() => {
    if (inView) {
      const c = animate(v, to, { duration: 2.2, ease: [0.22, 1, 0.36, 1] });
      return c.stop;
    }
  }, [inView, to, v]);
  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export function Stats() {
  const items = [
    { n: 600, label: "Products in Stock" },
    { n: 15, label: "Years Experience" },
    { n: 50, label: "Premium Brands" },
    { n: 7, label: "Emirates Served" },
  ];
  return (
    <section className="relative border-b border-border bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-[1600px] grid-cols-2 gap-y-12 px-6 md:grid-cols-4 md:px-12">
        {items.map((it, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className="border-l border-gold/30 pl-5"
          >
            <div className="flex items-baseline gap-1 font-display text-6xl tracking-tight text-foreground md:text-7xl">
              <Counter to={it.n} />
              <span className="text-gold">+</span>
            </div>
            <div className="mt-3 text-xs tracking-[0.25em] text-muted-foreground">
              {it.label.toUpperCase()}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
