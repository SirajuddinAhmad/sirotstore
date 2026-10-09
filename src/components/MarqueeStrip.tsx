import { Asterisk } from "lucide-react";

const ITEMS = [
  "Desain Poster",
  "Desain Banner",
  "Logo Premium",
  "Stiker Custom",
  "Ebook",
  "Gemini Pro 1 Tahun",
  "VPS RAM 4GB",
  "RDP RAM 8GB",
];

export default function MarqueeStrip() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <section className="relative my-6 overflow-hidden py-6" aria-hidden>
      <div className="-mx-4 -rotate-1 bg-lime py-3.5 shadow-[0_10px_60px_-10px_rgba(200,255,46,0.35)]">
        <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap">
          {row.map((text, i) => (
            <span
              key={i}
              className="flex items-center gap-8 font-display text-sm font-bold uppercase tracking-[0.2em] text-void"
            >
              {text}
              <Asterisk className="size-5" strokeWidth={2.6} />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
