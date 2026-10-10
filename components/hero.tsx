"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  TrendingUp,
  Sparkles,
  Zap,
  Users,
  Calendar,
  CheckCircle2,
  Layers,
  Repeat,
  Target,
  MousePointer2,
  Activity,
} from "lucide-react";
import { hero, metricsStrip } from "@/data/site-content";
import { Button } from "@/components/ui/button";
import { GradientText } from "@/components/ui/gradient-text";

// 4 distinct, coherent icons for the 4 metrics items
const metricIcons = [Target, MousePointer2, Layers, Repeat];

export default function Hero() {
  const chartGradientId = useId();
  const areaGradientId = useId();
  const shouldReduceMotion = useReducedMotion();

  // Highlight splitting
  const highlightIndex = hero.title.indexOf(hero.highlight);
  const titleBefore = highlightIndex !== -1 ? hero.title.slice(0, highlightIndex) : hero.title;
  const titleAfter = highlightIndex !== -1 ? hero.title.slice(highlightIndex + hero.highlight.length) : "";

  // Floating animations respecting reduced motion
  const floatingAnimate1 = shouldReduceMotion ? undefined : { y: [0, -8, 0] };
  const floatingAnimate2 = shouldReduceMotion ? undefined : { y: [0, 8, 0] };
  const floatingAnimate3 = shouldReduceMotion ? undefined : { y: [0, -6, 0] };

  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[88vh] flex-col justify-between overflow-hidden pt-24 pb-10 sm:pt-28 sm:pb-14 lg:pt-32 lg:pb-16"
    >
      {/* Background ambient lighting effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[520px] w-[860px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-purple-600/20 via-violet-500/15 to-blue-600/20 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -right-28 -z-10 h-[400px] w-[400px] rounded-full bg-blue-600/15 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 -left-20 -z-10 h-[340px] w-[340px] rounded-full bg-purple-600/15 blur-[110px]"
      />

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="flex flex-col items-start gap-6 lg:col-span-7 xl:col-span-6">
            {/* Category / Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1.5 shadow-[0_0_20px_rgba(139,61,255,0.18)] backdrop-blur-md">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-purple-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-purple-400" />
              </span>
              <span className="text-xs font-semibold tracking-wider text-purple-300 uppercase">
                {hero.label}
              </span>
            </div>

            {/* Main Headline */}
            <h1
              id="hero-title"
              className="font-[Space_Grotesk] text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[3.2rem] xl:text-[3.5rem] leading-[1.12]"
            >
              {titleBefore}
              <GradientText
                from="#8B3DFF"
                via="#A855F7"
                to="#3B82F6"
                className="font-extrabold"
              >
                {hero.highlight}
              </GradientText>
              {titleAfter}
            </h1>

            {/* Subtitle */}
            <p className="max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg lg:text-xl">
              {hero.subtitle}
            </p>

            {/* Call to Actions */}
            <div className="flex w-full flex-col gap-3.5 pt-2 sm:w-auto sm:flex-row sm:items-center">
              <Button
                variant="primary"
                size="lg"
                href={hero.ctas.primary.href}
                rightIcon={<ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
                className="w-full sm:w-auto"
              >
                {hero.ctas.primary.label}
              </Button>
              <Button
                variant="outline"
                size="lg"
                href={hero.ctas.secondary.href}
                className="w-full sm:w-auto"
              >
                {hero.ctas.secondary.label}
              </Button>
            </div>

            {/* Technology Indicators / Badges */}
            <div className="flex flex-col gap-2 pt-2">
              <span className="text-xs font-medium tracking-wide text-zinc-400/90 uppercase">
                Estrutura integrada:
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {hero.indicators.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-[#0C0B19]/80 px-2.5 py-1 text-xs font-medium text-zinc-300 backdrop-blur-sm transition-colors hover:border-purple-500/40 hover:bg-[#121122]"
                  >
                    <CheckCircle2 size={13} className="text-purple-400" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Premium Futuristic Tech Showcase */}
          <div className="relative flex items-center justify-center lg:col-span-5 xl:col-span-6">
            <div className="relative w-full max-w-lg lg:max-w-none">
              {/* Abstract Glowing Orbit Backdrop */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-6 -z-10 flex items-center justify-center"
              >
                <div className="size-80 rounded-full bg-gradient-to-tr from-purple-600/30 via-violet-500/20 to-blue-600/25 blur-3xl sm:size-96" />
                <svg
                  className="absolute size-[340px] sm:size-[420px] text-purple-500/20 opacity-60"
                  viewBox="0 0 400 400"
                  fill="none"
                >
                  <circle
                    cx="200"
                    cy="200"
                    r="190"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeDasharray="4 6"
                  />
                  <circle
                    cx="200"
                    cy="200"
                    r="140"
                    stroke="url(#orbitGradient)"
                    strokeWidth="1.5"
                    strokeOpacity="0.4"
                  />
                  <defs>
                    <linearGradient id="orbitGradient" x1="0" y1="0" x2="400" y2="400">
                      <stop offset="0%" stopColor="#8B3DFF" />
                      <stop offset="50%" stopColor="#A855F7" />
                      <stop offset="100%" stopColor="#2563EB" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Connected Nodes Flow Strip (Top of Mockup) */}
              <div className="mb-3 flex items-center justify-between rounded-xl border border-white/[0.08] bg-[#0C0B19]/90 px-3.5 py-2 backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-purple-300">
                  <Activity size={13} className="text-purple-400 animate-pulse" />
                  FLUXO ATIVO
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-zinc-400">
                  <span className="rounded bg-purple-500/20 px-1.5 py-0.5 font-mono text-[10px] text-white">Tráfego</span>
                  <span className="text-purple-400">→</span>
                  <span className="rounded bg-blue-500/20 px-1.5 py-0.5 font-mono text-[10px] text-white">Landing Page</span>
                  <span className="text-purple-400">→</span>
                  <span className="rounded bg-purple-500/20 px-1.5 py-0.5 font-mono text-[10px] text-white">CRM</span>
                  <span className="text-purple-400">→</span>
                  <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 font-mono text-[10px] text-emerald-400">Venda</span>
                </div>
              </div>

              {/* Main Central Dashboard Card */}
              <div className="relative rounded-2xl border border-purple-500/30 bg-[#10101D]/95 p-4.5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_35px_rgba(139,61,255,0.15)] backdrop-blur-xl">
                {/* Dashboard Window Header */}
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-3.5">
                  <div className="flex items-center gap-2">
                    <span className="size-2.5 rounded-full bg-red-500/80" />
                    <span className="size-2.5 rounded-full bg-yellow-500/80" />
                    <span className="size-2.5 rounded-full bg-green-500/80" />
                    <span className="ml-2 font-mono text-[11px] font-medium tracking-wide text-zinc-400">
                      pipeline-monitor.im
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-400">
                    <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Tempo real
                  </div>
                </div>

                {/* Dashboard Metrics (from demoStats: Leads gerados & CPL) */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {/* Metric 0: Leads gerados */}
                  <div className="rounded-xl border border-white/[0.06] bg-[#0C0B19]/80 p-3 transition-colors hover:border-purple-500/30">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-medium text-zinc-400">
                        {hero.demoStats[0]?.label ?? "Leads gerados"}
                      </span>
                      <span className="inline-flex items-center gap-0.5 text-[10px] font-semibold text-emerald-400">
                        <TrendingUp size={11} /> +38%
                      </span>
                    </div>
                    <div className="mt-1 flex items-baseline gap-1.5">
                      <span className="font-[Space_Grotesk] text-2xl font-bold tracking-tight text-white">
                        {hero.demoStats[0]?.value ?? "+128"}
                      </span>
                      <span className="text-[10px] text-zinc-500">no ciclo</span>
                    </div>
                  </div>

                  {/* Metric 1: CPL */}
                  <div className="rounded-xl border border-white/[0.06] bg-[#0C0B19]/80 p-3 transition-colors hover:border-purple-500/30">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-medium text-zinc-400">
                        {hero.demoStats[1]?.label ?? "CPL"}
                      </span>
                      <span className="inline-flex items-center gap-0.5 text-[10px] font-semibold text-purple-400">
                        <Sparkles size={11} /> -24%
                      </span>
                    </div>
                    <div className="mt-1 flex items-baseline gap-1.5">
                      <span className="font-[Space_Grotesk] text-2xl font-bold tracking-tight text-white">
                        {hero.demoStats[1]?.value ?? "R$ 18,40"}
                      </span>
                      <span className="text-[10px] text-zinc-500">custo/lead</span>
                    </div>
                  </div>
                </div>

                {/* SVG Growing Performance Chart */}
                <div className="mt-4 rounded-xl border border-white/[0.06] bg-[#0C0B19]/60 p-3.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-white/90">Curva de Conversão & Volume</span>
                    <span className="font-mono text-[10px] text-zinc-400">Últimos 30 dias</span>
                  </div>

                  <div className="relative mt-2.5 h-28 w-full sm:h-32">
                    <svg
                      className="size-full overflow-visible"
                      viewBox="0 0 320 120"
                      preserveAspectRatio="none"
                      aria-label="Gráfico de crescimento contínuo de leads"
                    >
                      <defs>
                        <linearGradient id={chartGradientId} x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#8B3DFF" />
                          <stop offset="60%" stopColor="#A855F7" />
                          <stop offset="100%" stopColor="#3B82F6" />
                        </linearGradient>
                        <linearGradient id={areaGradientId} x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#A855F7" stopOpacity="0.35" />
                          <stop offset="70%" stopColor="#3B82F6" stopOpacity="0.08" />
                          <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
                        </linearGradient>
                      </defs>

                      {/* Horizontal Grid lines */}
                      <line x1="0" y1="20" x2="320" y2="20" stroke="#FFFFFF" strokeOpacity="0.05" strokeDasharray="3 3" />
                      <line x1="0" y1="60" x2="320" y2="60" stroke="#FFFFFF" strokeOpacity="0.05" strokeDasharray="3 3" />
                      <line x1="0" y1="100" x2="320" y2="100" stroke="#FFFFFF" strokeOpacity="0.05" strokeDasharray="3 3" />

                      {/* Area Fill */}
                      <path
                        d="M0,105 Q45,95 85,75 T170,55 T255,30 T320,10 L320,120 L0,120 Z"
                        fill={`url(#${areaGradientId})`}
                      />

                      {/* Primary Growth Curve */}
                      <path
                        d="M0,105 Q45,95 85,75 T170,55 T255,30 T320,10"
                        fill="none"
                        stroke={`url(#${chartGradientId})`}
                        strokeWidth="3"
                        strokeLinecap="round"
                      />

                      {/* Peak Glowing Point */}
                      <circle cx="320" cy="10" r="5" fill="#3B82F6" />
                      <circle cx="320" cy="10" r="8" fill="#3B82F6" opacity="0.4" className="animate-ping" />
                    </svg>
                  </div>
                </div>

                {/* Floating Micro-Card: Novo Lead Recebido (Overlapping Top-Right) */}
                <motion.div
                  animate={floatingAnimate1}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-3 sm:-right-6 w-52 sm:w-56 rounded-xl border border-purple-500/40 bg-[#121122]/95 p-3 shadow-[0_12px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(139,61,255,0.2)] backdrop-blur-xl"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-purple-500/20 text-purple-300 shadow-[0_0_12px_rgba(139,61,255,0.3)]">
                      <Zap size={16} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="truncate text-xs font-semibold text-white">Novo lead recebido</span>
                        <span className="text-[9px] text-zinc-400">Agora</span>
                      </div>
                      <p className="truncate text-[10px] text-zinc-400">Meta Ads • Qualificado</p>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center justify-between border-t border-white/[0.06] pt-1.5 text-[10px]">
                    <span className="text-zinc-400">Notificação WhatsApp</span>
                    <span className="font-semibold text-emerald-400">Enviada • 2s</span>
                  </div>
                </motion.div>

                {/* Floating Micro-Card: Kanban / CRM & Reuniões (Overlapping Bottom-Left) */}
                <motion.div
                  animate={floatingAnimate2}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -bottom-8 -left-3 sm:-left-6 w-56 sm:w-64 rounded-xl border border-blue-500/40 bg-[#121122]/95 p-3.5 shadow-[0_14px_35px_rgba(0,0,0,0.5),0_0_20px_rgba(59,130,246,0.2)] backdrop-blur-xl"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-white">
                      <Calendar size={13} className="text-blue-400" />
                      {hero.demoStats[3]?.label ?? "Reuniões agendadas"}
                    </div>
                    <span className="rounded bg-blue-500/20 px-1.5 py-0.5 font-[Space_Grotesk] text-xs font-bold text-blue-400">
                      {hero.demoStats[3]?.value ?? "32"}
                    </span>
                  </div>

                  {/* Mini Kanban Columns Preview */}
                  <div className="mt-2.5 grid grid-cols-3 gap-1.5 text-[9px]">
                    <div className="rounded border border-white/[0.06] bg-[#0C0B19]/80 p-1">
                      <span className="text-zinc-400 block truncate">Novos</span>
                      <span className="font-bold text-white">48</span>
                    </div>
                    <div className="rounded border border-purple-500/30 bg-purple-500/10 p-1">
                      <span className="text-purple-300 block truncate">Contato</span>
                      <span className="font-bold text-purple-200">
                        {hero.demoStats[2]?.value ?? "84%"}
                      </span>
                    </div>
                    <div className="rounded border border-emerald-500/30 bg-emerald-500/10 p-1">
                      <span className="text-emerald-400 block truncate">Fechando</span>
                      <span className="font-bold text-emerald-400">18</span>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Micro-Badge: Taxa de Contato (Overlapping Bottom-Right) */}
                <motion.div
                  animate={floatingAnimate3}
                  transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-5 right-4 hidden sm:flex items-center gap-2 rounded-lg border border-purple-500/30 bg-[#10101D]/90 px-3 py-1.5 shadow-[0_10px_25px_rgba(0,0,0,0.4)] backdrop-blur-md"
                >
                  <Users size={13} className="text-purple-400" />
                  <span className="text-xs text-zinc-400">
                    {hero.demoStats[2]?.label ?? "Taxa de contato"}:
                  </span>
                  <span className="font-[Space_Grotesk] text-xs font-bold text-white">
                    {hero.demoStats[2]?.value ?? "84%"}
                  </span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Metrics Strip (Faixa de 4 Itens com Ícones Distintos) */}
      <div className="mx-auto mt-14 w-full max-w-7xl px-4 sm:px-6 lg:mt-16 lg:px-8">
        <div className="rounded-2xl border border-white/[0.08] bg-[#10101D]/70 p-2 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
          <div className="grid grid-cols-2 divide-y divide-white/[0.06] sm:divide-y-0 sm:divide-x sm:divide-white/[0.06] lg:grid-cols-4">
            {metricsStrip.map((item, index) => {
              const Icon = metricIcons[index] ?? CheckCircle2;
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-3 px-4 py-3.5 transition-colors hover:bg-white/[0.02]"
                >
                  <span
                    aria-hidden="true"
                    className="grid size-9 shrink-0 place-items-center rounded-xl border border-purple-500/25 bg-gradient-to-br from-purple-500/15 to-blue-500/10 text-purple-400 shadow-[0_0_15px_rgba(139,61,255,0.12)]"
                  >
                    <Icon size={18} strokeWidth={1.8} />
                  </span>
                  <span className="text-xs font-semibold tracking-tight text-white sm:text-sm">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
