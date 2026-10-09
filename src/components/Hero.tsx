import { motion } from "framer-motion";
import {
  ArrowDown,
  BadgeCheck,
  MessageCircle,
  Server,
  Sparkles,
  Star,
} from "lucide-react";
import { WA_DEFAULT_MESSAGE, waLink } from "../data/products";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const } },
};

const STATS = [
  { value: "500+", label: "Pesanan Selesai" },
  { value: "4.9/5", label: "Rating Pelanggan" },
  { value: "±15 mnt", label: "Respon Admin" },
  { value: "24/7", label: "Layanan Aktif" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44">
      {/* latar: glow + grid */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 size-[34rem] rounded-full bg-lime/10 blur-[140px] animate-glow-pulse" />
        <div className="absolute top-1/3 -right-52 size-[36rem] rounded-full bg-vio/15 blur-[160px]" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "radial-gradient(ellipse 90% 60% at 50% 0%, black 30%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 90% 60% at 50% 0%, black 30%, transparent 75%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-10">
          {/* kolom teks */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="lg:col-span-7"
          >
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-lime opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-lime" />
                </span>
                Marketplace Digital Indonesia
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-8 font-display text-[2.9rem] font-semibold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl xl:text-[5.4rem]"
            >
              desain{" "}
              <em className="font-serif text-lime font-normal">memukau,</em>
              <br />
              AI{" "}
              <em className="font-serif font-normal text-white/60">canggih,</em>
              <br />
              <span className="text-outline">VPS</span> stabil
              <span className="text-lime">.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-7 max-w-xl text-base leading-relaxed text-mist sm:text-lg"
            >
              Sirot Store adalah marketplace satu atap untuk jasa desain grafis
              profesional, Agen AI Gemini premium setahun penuh, hingga VPS/RDP
              kencang. Cepat, amanah, dan ramah kantong.
            </motion.p>

            <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href={waLink(WA_DEFAULT_MESSAGE)}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-full bg-lime px-7 py-4 font-display text-base font-bold text-void shadow-[0_16px_46px_-12px_rgba(200,255,46,0.6)]"
              >
                <MessageCircle className="size-5 transition-transform duration-300 group-hover:-rotate-12" strokeWidth={2.4} />
                Pesan Jasa Desain Sekarang
              </motion.a>
              <a
                href="#desain"
                className="group flex items-center gap-2 rounded-full border border-line px-6 py-4 font-display text-base font-semibold text-white/85 transition-colors duration-300 hover:border-lime/50 hover:text-lime"
              >
                Jelajahi Produk
                <ArrowDown className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
            </motion.div>

            <motion.div variants={item} className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                {["RP", "SN", "DA", "NR"].map((initial, i) => (
                  <span
                    key={initial}
                    className="grid size-10 place-items-center rounded-full border-2 border-void text-[0.65rem] font-bold text-void"
                    style={{
                      background: `linear-gradient(135deg, ${
                        i % 2 === 0 ? "#c8ff2e, #7db91c" : "#8b7cff, #4a3cb8"
                      })`,
                    }}
                  >
                    {initial}
                  </span>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3.5 fill-lime text-lime" />
                  ))}
                </div>
                <p className="mt-1 text-xs text-mist">
                  <span className="font-semibold text-white">4.9/5</span> dari 500+ pelanggan
                  puas
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* kolom visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:col-span-5"
          >
            <div className="absolute -inset-4 rotate-3 rounded-[2.5rem] border border-lime/20" />
            <div className="absolute -inset-10 -z-10 rounded-full bg-lime/15 blur-[100px]" />

            <div className="relative overflow-hidden rounded-[2rem] border border-line">
              <img
                src="/images/hero.jpg"
                alt="Visual futuristik Sirot Store"
                className="aspect-[4/5] w-full object-cover sm:aspect-[5/5.4]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent" />
            </div>

            {/* kartu mengambang */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="glass absolute -left-4 top-10 flex items-center gap-3 rounded-2xl px-4 py-3 sm:-left-8"
            >
              <span className="grid size-10 place-items-center rounded-xl bg-vio/20 text-vio">
                <Sparkles className="size-5" />
              </span>
              <div>
                <p className="text-xs font-bold">Gemini Pro — 1 Tahun</p>
                <p className="text-xs text-lime">Rp80.000</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="glass absolute -right-3 bottom-28 flex items-center gap-3 rounded-2xl px-4 py-3 sm:-right-6"
            >
              <span className="grid size-10 place-items-center rounded-xl bg-lime/15 text-lime">
                <Server className="size-5" />
              </span>
              <div>
                <p className="text-xs font-bold">VPS 8GB · 4 Core</p>
                <p className="flex items-center gap-1.5 text-xs text-mist">
                  <span className="size-1.5 rounded-full bg-lime" /> Online 24/7
                </p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.6 }}
              className="glass absolute -bottom-5 left-6 flex items-center gap-2.5 rounded-2xl px-4 py-3"
            >
              <BadgeCheck className="size-5 text-lime" />
              <p className="text-xs font-bold">500+ pesanan selesai</p>
            </motion.div>
          </motion.div>
        </div>

        {/* statistik */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-24 grid grid-cols-2 divide-line rounded-3xl border border-line bg-panel/60 backdrop-blur sm:grid-cols-4 sm:divide-x"
        >
          {STATS.map((s) => (
            <div key={s.label} className="px-6 py-7 text-center sm:py-8">
              <p className="font-display text-3xl font-bold tracking-tight text-lime sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-mist">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
