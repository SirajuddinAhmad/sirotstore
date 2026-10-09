import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { cn } from "../utils/cn";

const FAQS = [
  {
    q: "Metode pembayaran apa saja yang diterima?",
    a: "Kami menerima transfer bank (BCA, BRI, Mandiri), e-wallet (DANA, OVO, GoPay), dan QRIS. Detail pembayaran akan dikirim admin setelah kamu konfirmasi pesanan via WhatsApp.",
  },
  {
    q: "Apakah jasa desain termasuk revisi?",
    a: "Ya! Setiap pemesanan jasa desain sudah termasuk revisi gratis (2–3 kali tergantung paket). Kami memastikan hasil akhir sesuai dengan brief dan ekspektasimu sebelum file final dikirim.",
  },
  {
    q: "Bagaimana proses aktivasi Gemini Pro 1 tahun?",
    a: "Sangat mudah. Setelah pembayaran, kamu cukup mengirimkan email yang ingin diaktifkan. Admin akan memproses aktivasi dalam 5–15 menit. Akun bergaransi penuh selama 12 bulan — jika ada kendala, kami ganti atau refund.",
  },
  {
    q: "Apakah VPS/RDP benar-benar aktif 24 jam?",
    a: "Betul. Server kami berjalan 24/7 tanpa henti dengan uptime di atas 99%. Kamu bebas menjalankan bot, tools, atau kerja remote kapan pun. Bisa pilih Windows (akses RDP) atau Linux (akses SSH).",
  },
  {
    q: "Berapa lama pengerjaan desain?",
    a: "Standar kami 1–3 hari kerja tergantung kompleksitas dan antrian. Butuh kilat? Tanyakan opsi same-day ke admin — sering kali bisa kami usahakan dengan sedikit biaya tambahan.",
  },
  {
    q: "Apakah berbelanja di Sirot Store aman?",
    a: "100% amanah. Kami sudah menyelesaikan 500+ pesanan dengan rating 4.9/5. Semua transaksi terdokumentasi via WhatsApp dan ada garansi jelas untuk setiap produk digital.",
  },
];

function FaqItem({
  faq,
  open,
  onToggle,
}: {
  faq: (typeof FAQS)[number];
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border transition-colors duration-500",
        open ? "border-lime/35 bg-panel" : "border-line bg-panel/60"
      )}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-display text-base font-semibold tracking-tight sm:text-lg">
          {faq.q}
        </span>
        <span
          className={cn(
            "grid size-9 shrink-0 place-items-center rounded-full border transition-all duration-500",
            open ? "rotate-180 border-lime bg-lime text-void" : "border-line text-lime"
          )}
        >
          <ChevronDown className="size-4" strokeWidth={2.5} />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="px-6 pb-6 text-sm leading-relaxed text-mist">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeading
          index="07"
          eyebrow="FAQ"
          align="center"
          title={
            <>
              Masih ragu?{" "}
              <em className="font-serif font-normal text-lime">Wajar.</em>
            </>
          }
          description="Pertanyaan yang paling sering ditanyakan pelanggan sebelum order."
        />

        <Reveal>
          <div className="space-y-3.5">
            {FAQS.map((faq, i) => (
              <FaqItem
                key={faq.q}
                faq={faq}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
