"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/data/site-content";

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const prefersReducedMotion = useReducedMotion();

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const buttonRef = React.useRef<HTMLButtonElement>(null);

  const goTo = (e: React.MouseEvent<HTMLElement>, href: string) => {
    const target = document.querySelector(href);
    setIsOpen(false);
    if (!target) return;
    e.preventDefault();
    history.replaceState(null, "", href);
    requestAnimationFrame(() => target.scrollIntoView({ behavior: "smooth", block: "start" }));
  };

  React.useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || isOpen
          ? "bg-[#05050A]/90 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      )}
      role="banner"
    >
      <nav
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        aria-label="Navegação principal"
      >
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-[Space_Grotesk] text-xl font-bold text-white">
              IM
            </span>
            <span className="hidden sm:block text-sm text-muted-foreground">
              {site.tagline}
            </span>
          </div>

          <div className="hidden md:flex md:items-center md:gap-8">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <Button size="sm" href="#contato">
              Quero mais clientes
            </Button>
          </div>

          <button
            ref={buttonRef}
            className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <motion.div
          id="mobile-menu"
          className="md:hidden overflow-hidden transition-opacity duration-200"
          initial={false}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? "auto" : 0,
          }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.2 }}
          style={{ overflow: "hidden" }}
          aria-hidden={!isOpen}
          inert={!isOpen}
        >
          <div className="py-4 space-y-3 border-t border-white/5">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-2 py-2 text-base font-medium text-muted-foreground hover:text-white"
                onClick={(e) => goTo(e, item.href)}
              >
                {item.label}
              </a>
            ))}
            <Button className="w-full mt-2" href="#contato" onClick={(e) => goTo(e, "#contato")}>
              Quero mais clientes
            </Button>
          </div>
        </motion.div>
      </nav>
    </header>
  );
}