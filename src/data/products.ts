// ------------------------------------------------------------------
// Sirot Store — data produk & helper WhatsApp
// ------------------------------------------------------------------

export const WA_NUMBER = "6285141182961"; // 0851-4118-2961

export const waLink = (message: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

export const formatIDR = (n: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(n);

export const WA_DEFAULT_MESSAGE =
  "Halo Sirot Store! Saya ingin memesan jasa desain. Mohon informasinya.";

export interface DesignService {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  priceStart: number;
  unit: string;
  features: string[];
  badge?: string;
}

export const DESIGN_SERVICES: DesignService[] = [
  {
    id: "logo",
    name: "Desain Logo",
    tagline: "Identitas yang melekat",
    description:
      "Logo original dengan konsep kuat untuk brand, UMKM, komunitas, hingga esports.",
    image: "/images/logo.jpg",
    priceStart: 50000,
    unit: "paket",
    features: ["3 alternatif konsep", "File AI, PNG, SVG & PDF", "Revisi hingga puas", "Hak cipta penuh"],
    badge: "Paling Laris",
  },
  {
    id: "poster",
    name: "Desain Poster",
    tagline: "Visual yang berhenti discroll",
    description:
      "Poster event, promosi, dan kampanye dengan komposisi berani dan detail rapi.",
    image: "/images/poster.jpg",
    priceStart: 20000,
    unit: "desain",
    features: ["Ukuran bebas (A4–A1)", "Siap cetak CMYK", "1–2 hari pengerjaan"],
  },
  {
    id: "banner",
    name: "Desain Banner",
    tagline: "Sorotan untuk promosimu",
    description:
      "Banner digital & spanduk cetak untuk marketplace, media sosial, dan offline.",
    image: "/images/banner.jpg",
    priceStart: 25000,
    unit: "desain",
    features: ["Web banner & spanduk", "Semua ukuran platform", "File siap cetak & upload"],
  },
  {
    id: "stiker",
    name: "Desain Stiker",
    tagline: "Kecil-kecil viral",
    description:
      "Stiker die-cut untuk kemasan, merchandise, WhatsApp, dan komunitas.",
    image: "/images/stiker.jpg",
    priceStart: 15000,
    unit: "desain",
    features: ["Gaya bebas request", "Sheet & satuannya", "Siap cetak vinyl"],
  },
  {
    id: "ebook",
    name: "Desain Ebook",
    tagline: "Kontenmu, kelas dunia",
    description:
      "Cover dan layout ebook profesional yang nyaman dibaca dan siap dijual.",
    image: "/images/ebook.jpg",
    priceStart: 40000,
    unit: "paket",
    features: ["Cover 3D mockup", "Layout hingga 30 halaman", "Format PDF & ePub"],
  },
];

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  originalPrice?: number;
  period: string;
  features: string[];
  badge?: string;
  highlight?: boolean;
  whatsappMessage: string;
}

export const AI_PRODUCTS: Product[] = [
  {
    id: "gemini-pro",
    name: "Gemini Pro / Plus",
    description:
      "Agen AI premium untuk riset, coding, menulis, dan produktivitas harianmu — aktif penuh 12 bulan.",
    image: "/images/ai.jpg",
    price: 80000,
    originalPrice: 480000,
    period: "1 tahun",
    badge: "Hemat 83%",
    highlight: true,
    features: [
      "Aktif 12 bulan penuh",
      "Akun aman & bergaransi",
      "Proses aktivasi 5–15 menit",
      "Bisa semua perangkat",
      "Garansi penuh selama durasi",
    ],
    whatsappMessage:
      "Halo Sirot Store! Saya tertarik memesan Gemini Pro/Plus 1 Tahun (Rp80.000). Bagaimana cara ordernya?",
  },
];

export const VPS_PRODUCTS: Product[] = [
  {
    id: "vps-4gb",
    name: "VPS / RDP 4GB",
    description:
      "Cocok untuk bot, tools otomasi, dan kebutuhan remote ringan. Aktif 24 jam nonstop.",
    image: "/images/vps.jpg",
    price: 45000,
    period: "1 bulan",
    features: [
      "RAM 4 GB — 2 Core CPU",
      "Storage 80 GB SSD",
      "Uptime 24/7 nonstop",
      "Lokasi server Singapore",
    ],
    whatsappMessage:
      "Halo Sirot Store! Saya ingin memesan VPS/RDP RAM 4GB Core 2 (1 bulan). Mohon infonya.",
  },
  {
    id: "vps-8gb",
    name: "VPS / RDP 8GB",
    description:
      "Performa ekstra untuk multitasking berat, rendering, dan workload intensif tanpa lag.",
    image: "/images/vps.jpg",
    price: 75000,
    period: "1 bulan",
    badge: "Populer",
    highlight: true,
    features: [
      "RAM 8 GB — 4 Core CPU",
      "Storage 160 GB SSD",
      "Bandwidth tanpa batas",
      "Uptime 24/7 nonstop",
      "Lokasi server Singapore",
    ],
    whatsappMessage:
      "Halo Sirot Store! Saya ingin memesan VPS/RDP RAM 8GB Core 4 (1 bulan). Mohon infonya.",
  },
];

export const NAV_LINKS = [
  { label: "Desain", href: "#desain" },
  { label: "Agen AI", href: "#ai" },
  { label: "VPS / RDP", href: "#vps" },
  { label: "Cara Order", href: "#cara-order" },
  { label: "FAQ", href: "#faq" },
];
