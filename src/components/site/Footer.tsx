import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-background pb-10 pt-24 md:pt-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-display text-5xl leading-none tracking-tight text-foreground md:text-8xl"
        >
          Let&apos;s Build <br />
          Your <span className="italic gradient-gold-text">Setup.</span>
        </motion.h3>

        <div className="mt-16 grid grid-cols-2 gap-10 border-t border-border pt-10 md:grid-cols-4">
          <div>
            <div className="mb-4 text-xs tracking-[0.25em] text-gold">VISIT</div>
            <p className="text-sm text-muted-foreground">
              Dubai · Abu Dhabi · Sharjah <br /> United Arab Emirates
            </p>
          </div>
          <div>
            <div className="mb-4 text-xs tracking-[0.25em] text-gold">CONTACT</div>
            <p className="text-sm text-muted-foreground">
              hello@fastwave.ae <br /> +971 50 000 0000
            </p>
          </div>
          <div>
            <div className="mb-4 text-xs tracking-[0.25em] text-gold">SHOP</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-gold">Luxury Wheels</a></li>
              <li><a href="#" className="hover:text-gold">4×4 Gear</a></li>
              <li><a href="#" className="hover:text-gold">Tyres</a></li>
            </ul>
          </div>
          <div>
            <div className="mb-4 text-xs tracking-[0.25em] text-gold">FOLLOW</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-gold">Instagram</a></li>
              <li><a href="#" className="hover:text-gold">TikTok</a></li>
              <li><a href="#" className="hover:text-gold">WhatsApp</a></li>
            </ul>
          </div>
        </div>

        {/* Massive logo */}
        <div className="mt-20 overflow-hidden">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[22vw] leading-none tracking-tighter gradient-gold-text"
          >
            FASTWAVE
          </motion.div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <span>© 2026 Fastwave. All rights reserved.</span>
          <span>Crafted with precision in the UAE.</span>
        </div>
      </div>
    </footer>
  );
}
