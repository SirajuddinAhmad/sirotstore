import { motion } from "framer-motion";
import { BadgePercent, Check, MessageCircle, Sparkles, Zap } from "lucide-react";
import { AI_PRODUCTS, formatIDR, waLink } from "../data/products";
import Reveal from "./Reveal";

const p = AI_PRODUCTS[0];

export default function AiSection() {
  return (
    <section id="ai" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-vio/50 to-transparent" />
        <div className="absolute -right-40 top-1/4 size-[30rem] rounded-full bg-vio/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="overflow-hidden rounded-[2.5rem] border border-line bg-panel">
          <div className="grid lg:grid-cols-2">
            {/* sisi visual */}
            <div className="relative min-h-[22rem] overflow-hidden lg:min-h-full">
              <img
                src={p.image}
                alt="Agen AI Gemini Pro"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-panel max-lg:bg-gradient-to-t max-lg:from-panel max-lg:via-transparent" />
              <motion.span
                initial={{ opacity: 0, y: -16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="absolute left-6 top-6 flex items-center gap-2 rounded-full bg-lime px-4 py-2 text-xs font-bold uppercase tracking-widest text-void shadow-[0_8px_30px_-6px_rgba(200,255,46,0.6)]"
              >
                <Sparkles className="size-4" />
                Best Seller
              </motion.span>
              <span className="absolute bottom-6 left-6 flex items-center gap-2 rounded-full border border-line bg-void/70 px-4 py-2 text-xs font-semibold text-white/85 backdrop-blur">
                <BadgePercent className="size-4 text-lime" />
                Hemat 83% dari harga normal
              </span>
            </div>

            {/* sisi konten */}
            <div className="relative p-8 sm:p-12 lg:p-14">
              <Reveal>
                <p className="font-display text-xs font-medium uppercase tracking-[0.35em] text-lime">
                  ( 02 — Agen AI )
                </p>
                <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.02] tracking-tight sm:text-5xl">
                  Gemini Pro semurah{" "}
                  <em className="font-serif font-normal text-lime">sebungkus rokok.</em>
                </h2>
                <p className="mt-5 max-w-lg leading-relaxed text-mist">{p.description}</p>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mt-8 flex flex-wrap items-end gap-4">
                  <div>
                    <p className="text-sm text-mist line-through decoration-vio/70">
                      {formatIDR(p.originalPrice ?? 0)}/tahun
                    </p>
                    <p className="font-display text-5xl font-bold tracking-tight text-lime sm:text-6xl">
                      {formatIDR(p.price)}
                    </p>
                  </div>
                  <div className="pb-1.5">
                    <p className="rounded-full bg-lime/12 px-3 py-1 text-xs font-bold uppercase tracking-wider text-lime">
                      / 1 tahun penuh
                    </p>
                    <p className="mt-2 flex items-center gap-1.5 text-xs text-mist">
                      <Zap className="size-3.5 text-lime" /> Aktivasi 5–15 menit setelah bayar
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.16}>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-white/85">
                      <span className="grid size-5 shrink-0 place-items-center rounded-full bg-lime/12 text-lime">
                        <Check className="size-3" strokeWidth={3} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.22}>
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href={waLink(p.whatsappMessage)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-10 flex w-full items-center justify-center gap-3 rounded-full bg-lime px-8 py-4.5 font-display text-base font-bold text-void shadow-[0_16px_46px_-12px_rgba(200,255,46,0.55)] sm:w-auto"
                >
                  <MessageCircle className="size-5" strokeWidth={2.4} />
                  Order Gemini Pro Sekarang
                </motion.a>
                <p className="mt-4 text-xs text-mist">
                  Garansi penuh selama masa aktif · Bisa semua perangkat · Proses dibantu admin
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
