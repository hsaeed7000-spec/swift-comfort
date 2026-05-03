export function Marquee() {
  const items = [
    "Luxury Wheels",
    "4×4 Gear",
    "Performance Tyres",
    "Accessories",
    "UAE Delivery",
    "Premium Quality",
  ];
  const row = [...items, ...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-border bg-background py-8">
      <div className="marquee-track flex w-max gap-12 whitespace-nowrap">
        {row.map((t, i) => (
          <div key={i} className="flex items-center gap-12">
            <span className="font-display text-3xl tracking-wider text-foreground/90 md:text-5xl">
              {t}
            </span>
            <span className="text-gold">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
