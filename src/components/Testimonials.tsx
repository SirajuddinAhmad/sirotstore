import { Quote, Star } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { cn } from "../utils/cn";

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  initials: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Rizky Pratama",
    role: "Owner Thrift Shop",
    quote:
      "Logo-nya langsung naik kelas! Drag-nya cepet, dikasih 3 opsi semua bagus. Toko makin dipercaya pembeli.",
    initials: "RP",
  },
  {
    name: "Salsabila N.",
    role: "Panitia Event Kampus",
    quote:
      "Order poster H-3 acara, selesai dalam 2 hari dan hasilnya estetik banget. Temen-temen sampai nanya desainnya di mana.",
    initials: "SN",
  },
  {
    name: "Dimas Anggara",
    role: "Digital Marketer",
    quote:
      "Gemini Pro setahun cuma 80 ribu, aktivasi 10 menit, akun aman sampai sekarang. Ini deal paling worth it tahun ini.",
    initials: "DA",
  },
  {
    name: "Nadia Rahma",
    role: "Penulis Ebook",
    quote:
      "Cover + layout ebook saya dikerjakan super rapi. Penjualan naik 40% setelah ganti desain. Recommended parah!",
    initials: "NR",
  },
];

export default function Testimonials() {
  return (
    <section id="testimoni" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          index="06"
          eyebrow="Testimoni"
          align="center"
          title={
            <>
              Kata mereka yang{" "}
              <em className="font-serif font-normal text-lime">sudah order.</em>
            </>
          }
        />

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {TESTIMONIALS.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 0.08}
              className={cn(i % 2 === 1 && "xl:translate-y-8")}
            >
              <figure className="card-hover relative flex h-full flex-col rounded-3xl border border-line bg-panel p-7">
                <Quote className="absolute right-6 top-6 size-8 text-lime/15" />
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-3.5 fill-lime text-lime" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-white/85">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                  <span
                    className="grid size-10 place-items-center rounded-full text-xs font-bold text-void"
                    style={{
                      background: `linear-gradient(135deg, ${
                        i % 2 === 0 ? "#c8ff2e, #7db91c" : "#8b7cff, #4a3cb8"
                      })`,
                    }}
                  >
                    {t.initials}
                  </span>
                  <div>
                    <p className="text-sm font-bold">{t.name}</p>
                    <p className="text-xs text-mist">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
