import { motion } from "framer-motion";
import luxury from "@/assets/cat-luxury.jpg";
import offroad from "@/assets/cat-offroad.jpg";
import tyres from "@/assets/cat-tyres.jpg";
import accessories from "@/assets/cat-accessories.jpg";

const cats = [
  { img: luxury, name: "Luxury Wheels", count: 5, ar: "جنوط فاخرة" },
  { img: offroad, name: "4×4 Wheels", count: 12, ar: "دفع رباعي" },
  { img: tyres, name: "Performance Tyres", count: 28, ar: "إطارات أداء" },
  { img: accessories, name: "Accessories", count: 17, ar: "إكسسوارات" },
];

function Card({ c, i }: { c: (typeof cats)[number]; i: number }) {
  return (
    <motion.a
      href="#"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
      data-cursor="hover"
      className="group relative block aspect-[3/4] overflow-hidden rounded-sm bg-muted"
    >
      <motion.img
        src={c.img}
        alt={c.name}
        loading="lazy"
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

      <div className="absolute left-0 right-0 top-0 flex items-start justify-between p-5">
        <span className="font-display text-xs tracking-[0.25em] text-gold">0{i + 1}</span>
        <span className="text-xs text-muted-foreground">{c.count} ITEMS</span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="overflow-hidden">
          <motion.h3 className="font-display text-3xl tracking-tight text-foreground md:text-4xl">
            {c.name}
          </motion.h3>
        </div>
        <div className="mt-1 font-arabic text-sm text-muted-foreground">{c.ar}</div>
        <div className="mt-5 flex items-center gap-3 text-xs tracking-[0.25em] text-foreground/70 transition-colors group-hover:text-gold">
          SHOP NOW
          <span className="inline-block transition-transform duration-500 group-hover:translate-x-2">→</span>
        </div>
      </div>
    </motion.a>
  );
}

export function Categories() {
  return (
    <section id="shop" className="relative bg-background py-24 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3 text-xs tracking-[0.3em] text-gold">
              <span className="h-px w-10 bg-gold" /> BROWSE CATEGORIES
            </div>
            <h2 className="font-display text-5xl tracking-tight text-foreground md:text-7xl">
              Find Your <span className="italic gradient-gold-text">Perfect Fit</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            From show-stopping luxury rims to desert-ready 4×4 setups — every
            category is hand-picked for the UAE driver.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cats.map((c, i) => (
            <Card key={i} c={c} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
