import { motion } from "framer-motion";
import { useState } from "react";

export function Nav() {
  const [lang, setLang] = useState<"EN" | "AR">("EN");
  const links = [
    { en: "Home", ar: "الرئيسية" },
    { en: "Shop", ar: "المتجر" },
    { en: "About", ar: "من نحن" },
    { en: "Contact", ar: "اتصل" },
  ];
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 right-0 top-0 z-50 mix-blend-difference"
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-6 md:px-12">
        <a href="/" className="font-display text-xl tracking-[0.3em] text-white">
          FASTWAVE
        </a>
        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l, i) => (
            <a
              key={i}
              href="#"
              className="group relative font-display text-xs tracking-[0.25em] text-white/80 hover:text-white"
            >
              {lang === "EN" ? l.en.toUpperCase() : l.ar}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-white transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <button
          onClick={() => setLang(lang === "EN" ? "AR" : "EN")}
          className="font-display text-xs tracking-[0.3em] text-white/80 hover:text-white"
        >
          {lang} <span className="text-white/30">/</span> {lang === "EN" ? "AR" : "EN"}
        </button>
      </div>
    </motion.header>
  );
}
