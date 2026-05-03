import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { damping: 25, stiffness: 250, mass: 0.4 });
  const sy = useSpring(y, { damping: 25, stiffness: 250, mass: 0.4 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a, button, [data-cursor='hover']"));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      style={{ translateX: sx, translateY: sy }}
      className="pointer-events-none fixed left-0 top-0 z-[90] hidden md:block"
    >
      <motion.div
        animate={{ scale: hover ? 2.4 : 1, opacity: hover ? 0.5 : 1 }}
        transition={{ type: "spring", damping: 20 }}
        className="-ml-[6px] -mt-[6px] h-3 w-3 rounded-full bg-gold mix-blend-difference"
      />
    </motion.div>
  );
}
