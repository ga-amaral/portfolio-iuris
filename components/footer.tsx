"use client";

import * as React from "react";
import { Reveal } from "@/components/ui/reveal";
import { footer, nav, site } from "@/data/site-content";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative border-t border-white/5 bg-[#05050A]"
      role="contentinfo"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <Reveal direction="up">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-[Space_Grotesk] text-xl font-bold text-white">
                  IM
                </span>
                <span className="text-sm text-muted-foreground">
                  {site.tagline}
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                {site.description}
              </p>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.1}>
            <nav aria-label="Navegação do rodapé">
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Navegação
              </h4>
              <ul className="space-y-3">
                {nav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-white transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Contato
              </h4>
              <address className="not-italic text-sm text-muted-foreground space-y-2">
                <p>
                  <a
                    href={site.whatsappUrl + "?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Iuris%20M%C3%ADdia%20e%20quero%20gerar%20mais%20clientes."}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                    aria-label={`Abrir WhatsApp: ${site.whatsappDisplay}`}
                  >
                    WhatsApp: {site.whatsappDisplay}
                  </a>
                </p>
                <p>
                  <a
                    href={`mailto:${site.email}`}
                    className="hover:text-white transition-colors"
                    aria-label={`Enviar e-mail para ${site.email}`}
                  >
                    E-mail: {site.email}
                  </a>
                </p>
              </address>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.3}>
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Legal
              </h4>
              <ul className="space-y-3">
                {footer.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal direction="up" delay={0.4}>
          <div className="mt-12 pt-8 border-t border-white/5">
            <p className="text-center text-sm text-muted-foreground">
              {footer.copyright}
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
