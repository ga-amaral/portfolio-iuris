"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { site } from "@/data/site-content";

export function WhatsAppButton() {
  const prefersReducedMotion = useReducedMotion();
  const [isHovered, setIsHovered] = React.useState(false);

  const whatsappLink =
    site.whatsappUrl + "?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Iuris%20M%C3%ADdia%20e%20quero%20gerar%20mais%20clientes.";

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Abrir WhatsApp: ${site.whatsappDisplay}`}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-br from-purple-600 to-violet-600 shadow-[0_8px_30px_rgba(139,61,255,0.4)] transition-all duration-300 hover:scale-110 hover:shadow-[0_12px_40px_rgba(139,61,255,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05050A]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={prefersReducedMotion ? {} : { scale: [1, 1.05, 1] }}
      transition={prefersReducedMotion ? {} : { duration: 2, repeat: Infinity, ease: "easeInOut" }}
      style={{ opacity: 1 }}
    >
      <MessageCircle className="h-7 w-7 text-white" aria-hidden="true" />
      <motion.span
        className="absolute -right-3 bottom-1/2 -translate-y-1/2 whitespace-nowrap bg-[#05050A] px-3 py-1.5 rounded-full text-xs font-medium text-white border border-purple-500/50 shadow-lg opacity-0 pointer-events-none"
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 10 }}
        transition={{ duration: 0.2 }}
      >
        WhatsApp
      </motion.span>
    </motion.a>
  );
}