"use client";

import * as React from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealItem } from "@/components/ui/reveal";
import { GlowCard } from "@/components/ui/glow-card";
import { authority } from "@/data/site-content";
import {
  Zap,
  MousePointer,
  FileText,
  Repeat,
  BarChart2,
  Users,
  Target,
  TrendingUp,
  GitBranch,
} from "lucide-react";

const indicatorIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Meta Ads e Google Ads": Zap,
  "Landing pages orientadas a conversão": MousePointer,
  "CRM Kanban personalizado": FileText,
  "Automações com n8n e APIs": Repeat,
  "Dashboards e leitura de dados": BarChart2,
};

const dashboardMetrics = [
  { label: "Receita", value: "R$ 127k", icon: TrendingUp, color: "text-green-400" },
  { label: "Leads", value: "1.284", icon: Users, color: "text-purple-400" },
  { label: "CPL Médio", value: "R$ 18,40", icon: Target, color: "text-blue-400" },
  { label: "Reuniões", value: "342", icon: GitBranch, color: "text-violet-400" },
];

const kanbanColumns = [
  { title: "Novos", count: 12, color: "bg-blue-500/50" },
  { title: "Qualificados", count: 8, color: "bg-purple-500/50" },
  { title: "Proposta", count: 5, color: "bg-violet-500/50" },
  { title: "Fechados", count: 3, color: "bg-green-500/50" },
];

export default function AuthoritySection() {
  return (
    <section
      id="sobre"
      className="py-12 md:py-20 lg:py-28 relative"
      aria-labelledby="authority-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-magenta)_0%,_transparent_60%)] opacity-10" aria-hidden="true" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <Reveal direction="up">
            <SectionHeading
              eyebrow="AUTORIDADE"
              title="Por que trabalhar comigo?"
            />
            <RevealItem index={0} direction="up" baseDelay={0.1}>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                {authority.text}
              </p>
            </RevealItem>

<RevealItem index={1} direction="up" baseDelay={0.2}>
                <div className="mt-8 space-y-4">
                  {authority.indicators.map((indicator) => {
                    const Icon = indicatorIcons[indicator];
                    return (
                      <div
                        key={indicator}
                        className="flex items-start gap-4 p-4 bg-[#0C0B19] rounded-xl border border-white/5 group-hover:border-purple-500/30 transition-colors"
                      >
                        <div className="flex-shrink-0 mt-0.5">
                          <Icon className="h-6 w-6 text-purple-400" />
                        </div>
                        <p className="text-white">{indicator}</p>
                      </div>
                    );
                  })}
                </div>
              </RevealItem>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <div className="space-y-6">
              <GlowCard variant="elevated" hover={false}>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-semibold tracking-widest uppercase text-purple-400">
                    Dashboard de Resultados
                  </span>
                  <div className="flex gap-1.5">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    <div className="h-2 w-2 rounded-full bg-yellow-500" />
                    <div className="h-2 w-2 rounded-full bg-red-500" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {dashboardMetrics.map((metric) => {
                    const Icon = metric.icon;
                    return (
                      <div
                        key={metric.label}
                        className="p-4 bg-[#0C0B19] rounded-xl border border-white/5"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <Icon className={`h-4 w-4 ${metric.color}`} />
                          <span className="text-xs text-muted-foreground">{metric.label}</span>
                        </div>
                        <p className="font-[Space_Grotesk] text-xl font-bold text-white">{metric.value}</p>
                      </div>
                    );
                  })}
                </div>
                <div className="h-32 bg-[#0C0B19] rounded-xl border border-white/5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-blue-500/5" />
                  <svg className="relative h-full w-full" viewBox="0 0 400 128" aria-hidden="true">
                    <defs>
                      <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#8B3DFF" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.1" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M20,100 L60,70 L100,85 L140,50 L180,65 L220,40 L260,55 L300,35 L340,45 L380,30"
                      stroke="url(#chartGradient)"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="filter drop-shadow-[0_0_10px_rgba(139,61,255,0.5)]"
                    />
                    <path
                      d="M20,100 L60,70 L100,85 L140,50 L180,65 L220,40 L260,55 L300,35 L340,45 L380,30 L380,100 L20,100 Z"
                      fill="url(#chartGradient)"
                      opacity="0.3"
                    />
                  </svg>
                </div>
              </GlowCard>

              <GlowCard variant="elevated" hover={false}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold tracking-widest uppercase text-purple-400">
                    Pipeline Kanban
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {kanbanColumns.map((col) => (
                    <div key={col.title} className="min-w-0 rounded-xl border border-white/5 bg-[#080812] p-1.5 sm:p-2">
                      <div className="mb-2 flex min-w-0 items-center justify-between gap-1">
                        <span className="truncate text-[9px] font-medium text-muted-foreground sm:text-[11px]">{col.title}</span>
                        <span className="shrink-0 rounded bg-white/5 px-1 text-[9px] text-white/70">{col.count}</span>
                      </div>
                      <div className="space-y-1.5" aria-hidden="true">
                        {[0, 1].map((lead) => (
                          <div key={lead} className="flex items-center gap-1.5 rounded-md border border-white/5 bg-[#10101D] p-1.5">
                            <span className={`size-2 shrink-0 rounded-full ${col.color}`} />
                            <span className="min-w-0 flex-1 space-y-1">
                              <span className="block h-1 w-4/5 rounded-full bg-white/20" />
                              <span className="block h-1 w-1/2 rounded-full bg-white/10" />
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </GlowCard>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
