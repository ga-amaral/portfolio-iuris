"use client";

import * as React from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealItem } from "@/components/ui/reveal";
import { GlowCard } from "@/components/ui/glow-card";
import { Button } from "@/components/ui/button";
import { services, servicesSection } from "@/data/site-content";
import {
  Zap,
  Search,
  MousePointer,
  FileText,
  Repeat,
  BarChart2,
  ArrowRight,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap,
  Search,
  MousePointer,
  FileText,
  Repeat,
  BarChart2,
  ArrowRight,
};

export default function Services() {
  return (
    <section
      id="servicos"
      className="py-12 md:py-20 lg:py-28 relative"
      aria-labelledby="services-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--color-violet)_0%,_transparent_60%)] opacity-10" aria-hidden="true" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal direction="up">
          <SectionHeading
            eyebrow={servicesSection.eyebrow}
            title={servicesSection.title}
            subtitle={servicesSection.subtitle}
            textAlign="center"
          />
        </Reveal>

        <Reveal direction="up" delay={0.1}>
          <div className="mt-8 md:mt-14 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon];
              return (
                <RevealItem key={service.title} index={i} direction="up">
                  <GlowCard variant="default" hover={true} className="group h-full">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl  ">
                        <Icon className="h-5 w-5 text-purple-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">
                      {service.description}
                    </p>
                    <Button variant="ghost" size="sm" className="self-start group-hover:translate-x-1 transition-transform">
                      <span>Saiba mais</span>
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </GlowCard>
                </RevealItem>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
