import { motion } from "framer-motion";
import { ArrowUpRight, Check, MessageCircle } from "lucide-react";
import { DESIGN_SERVICES, formatIDR, waLink, type DesignService } from "../data/products";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { cn } from "../utils/cn";

const SPANS = [
  "lg:col-span-4",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-4",
  "md:col-span-2 lg:col-span-6",
];

function ServiceCard({ service }: { service: DesignService }) {
  const message = `Halo Sirot Store! Saya ingin memesan Jasa ${service.name} (mulai ${formatIDR(
    service.priceStart
  )}). Mohon info lebih lanjut.`;

  return (
    <article className="group card-hover flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-panel">
      <div className="img-zoom relative h-52 overflow-hidden sm:h-60">
        <img
          src={service.image}
          alt={service.name}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-panel via-panel/20 to-transparent" />
        {service.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-lime px-3.5 py-1.5 text-[0.65rem] font-bold uppercase tracking-widest text-void">
            {service.badge}
          </span>
        )}
        <span className="absolute right-4 top-4 grid size-11 translate-y-2 place-items-center rounded-full bg-void/70 text-lime opacity-0 backdrop-blur transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight className="size-5" />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-2xl font-semibold tracking-tight">
              {service.name}
            </h3>
            <p className="mt-1 font-serif italic text-base text-mist">“{service.tagline}”</p>
          </div>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-mist">{service.description}</p>

        <ul className="mt-5 space-y-2.5">
          {service.features.map((f) => (
            <li key={f} className="flex items-center gap-2.5 text-sm text-white/80">
              <span className="grid size-5 shrink-0 place-items-center rounded-full bg-lime/12 text-lime">
                <Check className="size-3" strokeWidth={3} />
              </span>
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center justify-between gap-4 pt-7">
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-mist">
              Mulai dari
            </p>
            <p className="mt-1 font-display text-xl font-bold text-lime">
              {formatIDR(service.priceStart)}
              <span className="ml-1 text-xs font-medium text-mist">/{service.unit}</span>
            </p>
          </div>
          <a
            href={waLink(message)}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-line bg-white/5 px-5 py-3 text-sm font-bold transition-all duration-300 hover:border-lime hover:bg-lime hover:text-void"
          >
            <MessageCircle className="size-4" />
            Pesan
          </a>
        </div>
      </div>
    </article>
  );
}

export default function DesignServices() {
  return (
    <section id="desain" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            index="01"
            eyebrow="Jasa Desain"
            title={
              <>
                Lima layanan, satu standar:
                <br />
                <em className="font-serif font-normal text-lime">memukau.</em>
              </>
            }
            description="Poster, banner, logo, stiker, sampai ebook — dikerjakan desainer berpengalaman dengan revisi hingga kamu puas."
          />
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6"
        >
          {DESIGN_SERVICES.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.06} className={cn("col-span-1", SPANS[i])}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </motion.div>

        <Reveal delay={0.15} className="mt-12 text-center">
          <p className="text-sm text-mist">
            Butuh desain lain?{" "}
            <a
              href={waLink("Halo Sirot Store! Saya punya kebutuhan desain custom. Bisa konsultasi?")}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-lime underline decoration-lime/40 underline-offset-4 transition-colors hover:decoration-lime"
            >
              Konsultasi gratis via WhatsApp
            </a>{" "}
            — kami siap bantu.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
