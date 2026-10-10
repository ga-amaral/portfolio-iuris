"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealItem } from "@/components/ui/reveal";
import { GlowCard } from "@/components/ui/glow-card";
import { acquisitionSteps } from "@/data/site-content";
import {
  Target,
  Zap,
  MousePointer,
  FileText,
  Repeat,
  BarChart2,
  ChevronRight,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Target,
  Zap,
  MousePointer,
  FileText,
  Repeat,
  BarChart2,
  ChevronRight,
};

export default function AcquisitionSystem() {
  const prefersReducedMotion = useReducedMotion();
  const last = acquisitionSteps.length - 1;

  return (
    <section
      id="solucoes"
      className="py-12 md:py-20 lg:py-28 relative"
      aria-label="Sistema de aquisição"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-purple)_0%,_transparent_70%)] opacity-10" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal direction="up">
          <SectionHeading
            eyebrow="SISTEMA DE AQUISIÇÃO"
            title="Mais do que tráfego: um sistema completo para gerar clientes."
            textAlign="center"
          />
        </Reveal>

        <ol className="mt-8 md:mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8 md:gap-y-10 list-none p-0">
          {acquisitionSteps.map((step, i) => {
            const Icon = iconMap[step.icon];
            const endOfRow = i % 3 === 2;
            return (
              <li key={step.number} className="relative">
                <RevealItem index={i} direction="up" className="h-full">
                  <GlowCard variant="elevated" hover={true} className="h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-12 w-12 shrink-0 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/25 to-blue-500/25">
                        <Icon className="h-6 w-6 text-purple-300" />
                      </div>
                      <span className="text-sm font-bold tracking-widest text-purple-400">
                        {step.number.padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </GlowCard>
                </RevealItem>

                {i < last && (
                  <>
                    {/* conector vertical (mobile) */}
                    <motion.span
                      aria-hidden="true"
                      className="md:hidden absolute left-1/2 -bottom-8 h-8 w-0.5 -translate-x-1/2 origin-top bg-gradient-to-b from-purple-500 to-blue-500"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2, duration: prefersReducedMotion ? 0 : 0.5 }}
                    />
                    {/* conector horizontal (desktop) */}
                    {!endOfRow && (
                      <motion.span
                        aria-hidden="true"
                        className="hidden md:block absolute top-1/2 -right-10 h-0.5 w-10 origin-left bg-gradient-to-r from-purple-500 to-blue-500"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + i * 0.1, duration: prefersReducedMotion ? 0 : 0.5 }}
                      />
                    )}
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
