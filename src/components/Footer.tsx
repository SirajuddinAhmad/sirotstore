import { Asterisk, AtSign, Clock, Mail, MessageCircle, Phone } from "lucide-react";
import { WA_DEFAULT_MESSAGE, waLink } from "../data/products";

const SERVICE_LINKS = [
  "Desain Poster",
  "Desain Banner",
  "Desain Logo",
  "Desain Stiker",
  "Desain Ebook",
];

const PRODUCT_LINKS = [
  { label: "Gemini Pro 1 Tahun", href: "#ai" },
  { label: "VPS / RDP 4GB · 2 Core", href: "#vps" },
  { label: "VPS / RDP 8GB · 4 Core", href: "#vps" },
  { label: "Cara Order", href: "#cara-order" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-line">
      <div className="mx-auto max-w-7xl px-5 pt-16 sm:px-8">
        <div className="grid gap-12 pb-14 md:grid-cols-2 lg:grid-cols-4">
          {/* brand */}
          <div>
            <a href="#" className="flex items-center gap-2.5">
              <span className="grid size-9 place-items-center rounded-xl bg-lime text-void">
                <Asterisk className="size-5" strokeWidth={2.6} />
              </span>
              <span className="font-display text-lg font-bold tracking-tight">
                Sirot<span className="font-serif italic font-normal text-lime"> Store</span>
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-mist">
              Marketplace digital untuk jasa desain grafis, Agen AI premium, dan
              VPS/RDP kencang. Cepat, amanah, ramah kantong.
            </p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-xs font-semibold text-mist transition-colors hover:border-lime/50 hover:text-lime"
            >
              <AtSign className="size-4" />
              sirotstore
            </a>
          </div>

          {/* layanan */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-[0.25em] text-white/70">
              Jasa Desain
            </h4>
            <ul className="mt-5 space-y-3">
              {SERVICE_LINKS.map((l) => (
                <li key={l}>
                  <a
                    href="#desain"
                    className="text-sm text-mist transition-colors hover:text-lime"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* produk digital */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-[0.25em] text-white/70">
              Produk Digital
            </h4>
            <ul className="mt-5 space-y-3">
              {PRODUCT_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-mist transition-colors hover:text-lime"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* kontak */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-[0.25em] text-white/70">
              Hubungi Kami
            </h4>
            <ul className="mt-5 space-y-4 text-sm text-mist">
              <li>
                <a
                  href={waLink(WA_DEFAULT_MESSAGE)}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 transition-colors hover:text-lime"
                >
                  <Phone className="size-4 shrink-0 text-lime" />
                  0851-4118-2961 (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-lime" />
                halo@sirotstore.id
              </li>
              <li className="flex items-center gap-3">
                <Clock className="size-4 shrink-0 text-lime" />
                Layanan 24 jam, setiap hari
              </li>
              <li>
                <a
                  href={waLink(WA_DEFAULT_MESSAGE)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-flex items-center gap-2 rounded-full bg-lime px-4 py-2.5 font-semibold text-void transition-transform hover:scale-105"
                >
                  <MessageCircle className="size-4" />
                  Chat Admin Sekarang
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-line py-7 text-xs text-mist sm:flex-row">
          <p>© {year} Sirot Store. Seluruh hak cipta dilindungi.</p>
          <p className="flex items-center gap-1.5">
            Dibuat dengan
            <Asterisk className="size-3.5 text-lime" />
            di Indonesia
          </p>
        </div>
      </div>

      {/* watermark raksasa */}
      <div
        aria-hidden
        className="pointer-events-none select-none overflow-hidden leading-none"
      >
        <p className="translate-y-[0.22em] whitespace-nowrap text-center font-display text-[19vw] font-bold uppercase tracking-tight text-white/[0.035]">
          Sirot Store
        </p>
      </div>
    </footer>
  );
}
