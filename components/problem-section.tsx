"use client";

import * as React from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealItem } from "@/components/ui/reveal";
import { GlowCard } from "@/components/ui/glow-card";
import { problemSection, problems } from "@/data/site-content";
import {
  Zap,
  FileText,
  BarChart2,
  MousePointer,
  Target,
  MessageSquare,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap,
  FileText,
  BarChart2,
  MousePointer,
  Target,
  MessageSquare,
};

export default function ProblemSection() {
  return (
    <section
      id="problema"
      className="py-12 md:py-20 lg:py-28 relative"
      aria-labelledby="problem-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-violet)_0%,_transparent_60%)] opacity-10" aria-hidden="true" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal direction="up">
          <SectionHeading
            eyebrow={problemSection.eyebrow}
            title={problemSection.title}
            subtitle={problemSection.subtitle}
            textAlign="center"
          />
        </Reveal>

        <Reveal direction="up" delay={0.1}>
          <div className="mt-8 md:mt-14 lg:mt-16 grid auto-rows-fr items-stretch grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {problems.map((problem, i) => {
              const Icon = iconMap[problem.icon];
              return (
                <RevealItem key={problem.title} index={i} direction="up" className="h-full">
                  <GlowCard 
                    variant="default" 
                    hover={true}
                    className="group h-full"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl  ">
                        <Icon className="h-5 w-5 text-purple-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">
                        {problem.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {problem.description}
                    </p>
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
