"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealItem } from "@/components/ui/reveal";
import { process } from "@/data/site-content";
import { FileText, Search, Target, TrendingUp, Zap } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Search,
  Target,
  FileText,
  Zap,
  TrendingUp,
};

export default function ProcessSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="metodo"
      className="relative overflow-hidden py-12 md:py-20 lg:py-28"
      aria-labelledby="process-heading"
    >
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-purple)_0%,_transparent_70%)] opacity-10" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal direction="up">
          <SectionHeading
            eyebrow="COMO FUNCIONA"
            title="Do investimento em anúncio à venda: um processo conectado."
            textAlign="center"
          />
        </Reveal>

        <div className="relative mx-auto mt-10 max-w-5xl sm:mt-12">
          <motion.div
            aria-hidden="true"
            className="absolute bottom-5 left-5 top-5 w-px origin-top bg-gradient-to-b from-purple-500 via-violet-500 to-blue-500 md:left-1/2"
            initial={prefersReducedMotion ? false : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.9, ease: "easeOut" }}
          />

          <div className="space-y-3 sm:space-y-4">
            {process.map((step, index) => {
              const Icon = iconMap[step.icon];
              const isLeft = index % 2 === 0;

              return (
                <RevealItem key={step.number} index={index} direction="up">
                  <div className="relative grid grid-cols-[2.75rem_minmax(0,1fr)] items-stretch md:grid-cols-[minmax(0,1fr)_3.5rem_minmax(0,1fr)]">
                    <article
                      className={`col-start-2 row-start-1 flex min-w-0 items-center gap-4 rounded-2xl border border-white/[0.08] bg-[#0C0B19]/90 p-4 sm:p-5 ${isLeft ? "md:col-start-1 md:flex-row-reverse md:text-right" : "md:col-start-3"}`}
                    >
                      <span aria-hidden="true" className="grid size-11 shrink-0 place-items-center rounded-xl border border-purple-500/25 bg-gradient-to-br from-purple-500/20 to-blue-500/15 text-purple-300">
                        <Icon className="size-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block font-display text-base font-semibold text-white sm:text-lg">
                          {step.title}
                        </span>
                        <span className="mt-1 block text-sm leading-5 text-muted-foreground">
                          {step.description}
                        </span>
                      </span>
                    </article>
                    <span className="absolute left-0 top-3.5 z-10 grid size-10 place-items-center rounded-full border border-purple-400/40 bg-[#10101D] font-display text-xs font-bold text-purple-200 shadow-[0_0_20px_rgba(139,61,255,0.18)] md:static md:col-start-2 md:row-start-1 md:my-auto md:size-12">
                      {step.number}
                    </span>
                  </div>
                </RevealItem>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
