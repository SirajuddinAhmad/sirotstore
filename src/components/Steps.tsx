import {
  MessageCircle,
  MousePointerClick,
  PackageCheck,
  QrCode,
  type LucideIcon,
} from "lucide-react";
import { WA_DEFAULT_MESSAGE, waLink } from "../data/products";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

interface Step {
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
}

const STEPS: Step[] = [
  {
    icon: MousePointerClick,
    number: "01",
    title: "Pilih Layanan",
    description:
      "Telusuri katalog — jasa desain, Gemini Pro, atau VPS/RDP. Temukan yang paling cocok dengan kebutuhanmu.",
  },
  {
    icon: MessageCircle,
    number: "02",
    title: "Chat via WhatsApp",
    description:
      "Klik tombol pesan, kamu langsung terhubung ke admin. Diskusikan brief, harga, dan deadline.",
  },
  {
    icon: QrCode,
    number: "03",
    title: "Bayar Aman",
    description:
      "Transfer bank, QRIS, DANA, OVO, atau GoPay. Konfirmasi otomatis dicek admin dalam hitungan menit.",
  },
  {
    icon: PackageCheck,
    number: "04",
    title: "Terima Hasilnya",
    description:
      "File desain, akun aktif, atau akses server dikirim langsung ke kamu. Garansi tetap berlaku.",
  },
];

export default function Steps() {
  return (
    <section id="cara-order" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-lime/40 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          index="05"
          eyebrow="Cara Order"
          align="center"
          title={
            <>
              Empat langkah,{" "}
              <em className="font-serif font-normal text-lime">nol ribet.</em>
            </>
          }
          description="Dari pilih produk sampai terima hasil — semuanya lewat satu chat WhatsApp."
        />

        <div className="relative grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <div className="pointer-events-none absolute left-0 right-0 top-14 hidden h-px bg-gradient-to-r from-transparent via-line to-transparent xl:block" />
          {STEPS.map((s, i) => (
            <Reveal key={s.number} delay={i * 0.1}>
              <div className="group relative h-full rounded-3xl border border-line bg-panel p-7 transition-colors duration-500 hover:border-lime/40">
                <div className="flex items-start justify-between">
                  <span className="grid size-14 place-items-center rounded-2xl border border-line bg-void text-lime transition-all duration-500 group-hover:border-lime/50 group-hover:shadow-[0_0_30px_-6px_rgba(200,255,46,0.45)]">
                    <s.icon className="size-6" strokeWidth={2.1} />
                  </span>
                  <span className="font-display text-5xl font-bold text-white/8 transition-colors duration-500 group-hover:text-lime/25">
                    {s.number}
                  </span>
                </div>
                <h3 className="mt-7 font-display text-xl font-semibold tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">{s.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.25} className="mt-12 text-center">
          <a
            href={waLink(WA_DEFAULT_MESSAGE)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-lime/40 bg-lime/10 px-8 py-4 font-display font-bold text-lime transition-all duration-300 hover:bg-lime hover:text-void"
          >
            <MessageCircle className="size-5" />
            Mulai Langkah Pertama
          </a>
        </Reveal>
      </div>
    </section>
  );
}
