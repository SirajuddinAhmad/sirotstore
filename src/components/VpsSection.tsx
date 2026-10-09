import { motion } from "framer-motion";
import {
  Check,
  Cpu,
  Globe,
  MemoryStick,
  MessageCircle,
  MonitorSmartphone,
  ShieldCheck,
  Terminal,
  Zap,
} from "lucide-react";
import { VPS_PRODUCTS, formatIDR, waLink, type Product } from "../data/products";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { cn } from "../utils/cn";

function VpsCard({ product, index }: { product: Product; index: number }) {
  const [ram, core] = product.id === "vps-4gb" ? ["4 GB", "2 Core"] : ["8 GB", "4 Core"];
  return (
    <Reveal delay={index * 0.12}>
      <article
        className={cn(
          "card-hover relative flex h-full flex-col overflow-hidden rounded-[2rem] border p-8 sm:p-10",
          product.highlight
            ? "border-lime/40 bg-gradient-to-b from-lime/[0.07] to-panel"
            : "border-line bg-panel"
        )}
      >
        {product.badge && (
          <span className="absolute right-7 top-7 rounded-full bg-lime px-3.5 py-1.5 text-[0.65rem] font-bold uppercase tracking-widest text-void">
            {product.badge}
          </span>
        )}

        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-mist">
          <Terminal className="size-4 text-lime" />
          VPS / RDP — {product.period}
        </div>

        <h3 className="mt-4 font-display text-3xl font-bold tracking-tight">
          {product.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-mist">{product.description}</p>

        {/* spek utama */}
        <div className="mt-7 grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-line bg-void/50 p-4">
            <MemoryStick className="size-5 text-lime" />
            <p className="mt-2.5 font-display text-2xl font-bold">{ram}</p>
            <p className="text-xs text-mist">RAM DDR4</p>
          </div>
          <div className="rounded-2xl border border-line bg-void/50 p-4">
            <Cpu className="size-5 text-vio" />
            <p className="mt-2.5 font-display text-2xl font-bold">{core}</p>
            <p className="text-xs text-mist">vCPU Dedicated</p>
          </div>
        </div>

        <div className="mt-8 flex items-end gap-2">
          <p className="font-display text-4xl font-bold tracking-tight text-lime sm:text-5xl">
            {formatIDR(product.price)}
          </p>
          <p className="pb-1 text-sm text-mist">/{product.period}</p>
        </div>

        <ul className="mt-7 space-y-3">
          {product.features.map((f) => (
            <li key={f} className="flex items-center gap-2.5 text-sm text-white/85">
              <span className="grid size-5 shrink-0 place-items-center rounded-full bg-lime/12 text-lime">
                <Check className="size-3" strokeWidth={3} />
              </span>
              {f}
            </li>
          ))}
        </ul>

        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          href={waLink(product.whatsappMessage)}
          target="_blank"
          rel="noreferrer"
          className={cn(
            "mt-9 flex items-center justify-center gap-2.5 rounded-full py-4 font-display text-sm font-bold transition-all duration-300",
            product.highlight
              ? "bg-lime text-void shadow-[0_16px_46px_-12px_rgba(200,255,46,0.55)]"
              : "border border-line bg-white/5 text-white hover:border-lime hover:bg-lime hover:text-void"
          )}
        >
          <MessageCircle className="size-4" strokeWidth={2.5} />
          Pesan {product.name}
        </motion.a>
      </article>
    </Reveal>
  );
}

export default function VpsSection() {
  return (
    <section id="vps" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 bottom-0 size-[28rem] rounded-full bg-lime/8 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          index="03"
          eyebrow="VPS / RDP Bulanan"
          align="center"
          title={
            <>
              Komputasi awan{" "}
              <em className="font-serif font-normal text-lime">tanpa drama.</em>
            </>
          }
          description="Server kencang untuk bot, otomasi, rendering, dan remote work. Setup instan, uptime 24 jam, harga bersahabat."
        />

        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
          {VPS_PRODUCTS.map((p, i) => (
            <VpsCard key={p.id} product={p} index={i} />
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mx-auto mt-10 flex max-w-5xl flex-wrap items-center justify-center gap-x-10 gap-y-4 rounded-2xl border border-line bg-panel/70 px-8 py-5 text-xs font-semibold text-mist backdrop-blur">
            <span className="flex items-center gap-2">
              <Zap className="size-4 text-lime" /> Setup instan setelah pembayaran
            </span>
            <span className="flex items-center gap-2">
              <MonitorSmartphone className="size-4 text-lime" /> Windows RDP & Linux SSH
            </span>
            <span className="flex items-center gap-2">
              <Globe className="size-4 text-lime" /> Latency rendah Asia Tenggara
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-lime" /> Garansi uptime 24/7
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
