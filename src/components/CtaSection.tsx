import { motion } from "framer-motion";
import { Clock, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import { WA_DEFAULT_MESSAGE, waLink } from "../data/products";
import Reveal from "./Reveal";

export default function CtaSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-line">
            <img
              src="/images/hero.jpg"
              alt=""
              aria-hidden
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-void/82" />
            <div className="absolute -top-24 left-1/2 size-[26rem] -translate-x-1/2 rounded-full bg-lime/15 blur-[120px]" />

            <div className="relative px-6 py-20 text-center sm:px-12 sm:py-28">
              <span className="inline-flex items-center gap-2 rounded-full border border-lime/40 bg-lime/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-lime">
                <Sparkles className="size-4" />
                Konsultasi Gratis
              </span>

              <h2 className="mx-auto mt-7 max-w-3xl font-display text-4xl font-semibold leading-[1.02] tracking-tight sm:text-6xl">
                Siap memulai?{" "}
                <em className="font-serif font-normal text-lime">
                  Admin menunggumu.
                </em>
              </h2>
              <p className="mx-auto mt-5 max-w-xl leading-relaxed text-mist">
                Ceritakan kebutuhanmu — desain, AI, atau server. Kami balas cepat,
                kasih rekomendasi jujur, tanpa tekanan untuk langsung beli.
              </p>

              <div className="mt-10 flex flex-col items-center gap-4">
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  href={waLink(WA_DEFAULT_MESSAGE)}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-full bg-lime px-9 py-5 font-display text-lg font-bold text-void shadow-[0_20px_60px_-15px_rgba(200,255,46,0.7)]"
                >
                  <MessageCircle className="size-6" strokeWidth={2.4} />
                  Pesan Jasa Desain Sekarang
                </motion.a>
                <p className="font-display text-sm font-semibold tracking-wide text-white/70">
                  WhatsApp Admin — 0851-4118-2961
                </p>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-semibold text-mist">
                <span className="flex items-center gap-2">
                  <Clock className="size-4 text-lime" /> Respon ±15 menit
                </span>
                <span className="flex items-center gap-2">
                  <ShieldCheck className="size-4 text-lime" /> Garansi penuh
                </span>
                <span className="flex items-center gap-2">
                  <Sparkles className="size-4 text-lime" /> Tanpa biaya konsultasi
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
