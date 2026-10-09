import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WA_DEFAULT_MESSAGE, waLink } from "../data/products";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.4, type: "spring", stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      href={waLink(WA_DEFAULT_MESSAGE)}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat WhatsApp Sirot Store"
      className="group fixed bottom-6 right-6 z-[65] flex items-center gap-3 rounded-full bg-lime py-3.5 pl-4 pr-4 text-void shadow-[0_14px_44px_-10px_rgba(200,255,46,0.65)] sm:pr-6"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-lime/40 [animation-duration:2.4s]" />
      <MessageCircle className="size-6" strokeWidth={2.4} />
      <span className="hidden font-display text-sm font-bold sm:block">Chat Admin</span>
    </motion.a>
  );
}
