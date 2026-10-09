import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Asterisk, Menu, MessageCircle, X } from "lucide-react";
import { NAV_LINKS, WA_DEFAULT_MESSAGE, waLink } from "../data/products";
import { cn } from "../utils/cn";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.4 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.div
        className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-lime"
        style={{ scaleX: progress }}
      />
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[60] transition-all duration-500",
          scrolled ? "border-b border-line bg-void/80 backdrop-blur-xl" : "bg-transparent"
        )}
      >
        <nav className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#" className="group flex items-center gap-2.5" aria-label="Sirot Store">
            <span className="grid size-9 place-items-center rounded-xl bg-lime text-void transition-transform duration-500 group-hover:rotate-180">
              <Asterisk className="size-5" strokeWidth={2.6} />
            </span>
            <span className="font-display text-lg font-bold tracking-tight">
              Sirot<span className="font-serif italic font-normal text-lime"> Store</span>
            </span>
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-mist transition-colors duration-300 hover:text-lime"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href={waLink(WA_DEFAULT_MESSAGE)}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 rounded-full bg-lime px-5 py-2.5 text-sm font-bold text-void shadow-[0_8px_30px_-8px_rgba(200,255,46,0.55)] sm:flex"
            >
              <MessageCircle className="size-4" strokeWidth={2.5} />
              Pesan Sekarang
            </motion.a>
            <button
              onClick={() => setOpen(!open)}
              className="grid size-10 place-items-center rounded-xl border border-line text-white lg:hidden"
              aria-label="Buka menu"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[55] flex flex-col bg-void/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="mt-28 flex flex-col gap-2 px-6">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="border-b border-line py-5 font-display text-3xl font-semibold tracking-tight text-white/90 active:text-lime"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                href={waLink(WA_DEFAULT_MESSAGE)}
                target="_blank"
                rel="noreferrer"
                className="mt-8 flex items-center justify-center gap-2 rounded-full bg-lime py-4 font-display font-bold text-void"
              >
                <MessageCircle className="size-5" strokeWidth={2.5} />
                Pesan Jasa Desain Sekarang
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
