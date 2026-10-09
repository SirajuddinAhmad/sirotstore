import {
  Headset,
  Paintbrush,
  RefreshCcw,
  ShieldCheck,
  Wallet,
  Zap,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FEATURES: Feature[] = [
  {
    icon: Zap,
    title: "Proses Kilat",
    description:
      "Desain selesai 1–3 hari, aktivasi Gemini cuma hitungan menit, VPS nyala segera setelah bayar.",
  },
  {
    icon: ShieldCheck,
    title: "Amanah & Bergaransi",
    description:
      "Ratusan transaksi sukses. Semua produk digital dilindungi garansi penuh selama masa aktif.",
  },
  {
    icon: Wallet,
    title: "Harga Ramah Kantong",
    description:
      "Harga pelajar, kualitas profesional. Cocok untuk UMKM, mahasiswa, dan kreator konten.",
  },
  {
    icon: RefreshCcw,
    title: "Revisi Hingga Puas",
    description:
      "Setiap jasa desain termasuk revisi gratis. Kami tidak berhenti sebelum kamu bilang sempurna.",
  },
  {
    icon: Paintbrush,
    title: "Kualitas Premium",
    description:
      "Dikerjakan desainer & teknisi berpengalaman dengan standar portofolio internasional.",
  },
  {
    icon: Headset,
    title: "Support 24/7",
    description:
      "Admin fast-respon siang malam via WhatsApp. Konsultasi gratis sebelum order, tanpa komitmen.",
  },
];

export default function WhyUs() {
  return (
    <section id="keunggulan" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          index="04"
          eyebrow="Kenapa Sirot Store"
          align="center"
          title={
            <>
              Dibangun di atas{" "}
              <em className="font-serif font-normal text-lime">kepercayaan.</em>
            </>
          }
          description="Kami tahu belanja jasa digital butuh keyakinan. Ini alasan ratusan pelanggan kembali lagi."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.08}>
              <div className="card-hover group h-full rounded-3xl border border-line bg-panel p-8">
                <span className="grid size-13 place-items-center rounded-2xl bg-lime/12 text-lime transition-all duration-500 group-hover:bg-lime group-hover:text-void group-hover:shadow-[0_10px_30px_-8px_rgba(200,255,46,0.5)]">
                  <f.icon className="size-6" strokeWidth={2.2} />
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold tracking-tight">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">{f.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
