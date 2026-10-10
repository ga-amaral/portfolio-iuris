"use client";

import * as React from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealItem } from "@/components/ui/reveal";
import { GlowCard } from "@/components/ui/glow-card";
import { cases } from "@/data/site-content";
import {
  Building2,
  HeartPulse,
  ShoppingCart,
  Briefcase,
  CheckCircle2,
  Calendar,
  MessageSquare,
  TrendingUp,
  Clock,
  Sparkles,
  Zap,
} from "lucide-react";

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Escritório de advocacia": Building2,
  "Clínica": HeartPulse,
  "E-commerce": ShoppingCart,
  "Empresa de serviços": Briefcase,
};

// ==========================================
// MOCKUP 1: Advocacia (Kanban de Leads / CRM)
// ==========================================
function LawFirmMockup() {
  return (
    <div className="relative rounded-xl border border-white/[0.08] bg-[#0C0B19]/90 p-4 font-sans text-xs">
      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-white/[0.06] pb-2.5 mb-3">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-purple-400" />
          <span className="font-mono text-[10px] uppercase tracking-wider text-purple-300">
            CRM Jurídico • Funil de Contratos
          </span>
        </div>
        <span className="rounded bg-purple-500/20 px-2 py-0.5 font-mono text-[9px] text-purple-200">
          Qualificação 74%
        </span>
      </div>

      {/* 4-Column Kanban (proporcional aos dados: 1762 leads → 1300 qualif → 924 reuniões → 200 fechados ≈ 9:6.5:4.5:1) */}
      <div className="grid grid-cols-4 gap-2">
        {/* Col 1: Novos Leads */}
        <div className="rounded-lg border border-white/[0.05] bg-[#121122]/70 p-2">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-semibold text-zinc-400">Novos Leads</span>
            <span className="rounded bg-white/10 px-1.5 text-[9px] text-zinc-300">1.762</span>
          </div>
          <div className="space-y-1.5">
            <div className="rounded border border-purple-500/20 bg-[#16152b] p-1.5 shadow-sm">
              <p className="font-medium text-white truncate text-[11px]">Holding Patrimonial</p>
              <div className="mt-1 flex items-center justify-between text-[9px] text-zinc-400">
                <span className="text-purple-300">Meta Ads</span>
                <span>R$ 25k+</span>
              </div>
            </div>
            <div className="rounded border border-white/[0.05] bg-[#16152b]/50 p-1.5">
              <p className="font-medium text-zinc-300 truncate text-[11px]">Direito Tributário</p>
              <span className="text-[9px] text-zinc-500">Google Ads</span>
            </div>
          </div>
        </div>

        {/* Col 2: Qualificados */}
        <div className="rounded-lg border border-purple-500/30 bg-[#121122]/80 p-2">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-semibold text-purple-300">Qualificados</span>
            <span className="rounded bg-purple-500/20 px-1.5 text-[9px] text-purple-200">1.300</span>
          </div>
          <div className="space-y-1.5">
            <div className="rounded border border-purple-500/40 bg-purple-500/10 p-1.5 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-white truncate text-[11px]">Societário B2B</p>
                <CheckCircle2 size={11} className="text-purple-400" />
              </div>
              <div className="mt-1 flex items-center justify-between text-[9px]">
                <span className="text-purple-300">Triagem OK</span>
                <span className="text-emerald-400">Score 9.5</span>
              </div>
            </div>
          </div>
        </div>

        {/* Col 3: Reuniões Agendadas */}
        <div className="rounded-lg border border-blue-500/30 bg-[#121122]/70 p-2">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-semibold text-blue-300">Reuniões</span>
            <span className="rounded bg-blue-500/20 px-1.5 text-[9px] text-blue-200">924</span>
          </div>
          <div className="space-y-1.5">
            <div className="rounded border border-blue-500/30 bg-blue-500/10 p-1.5">
              <p className="font-medium text-white truncate text-[11px]">Dr. Associado</p>
              <div className="mt-1 flex items-center justify-between text-[9px] text-blue-300">
                <span>Agendado</span>
                <span>Hoje 15h</span>
              </div>
            </div>
          </div>
        </div>

        {/* Col 4: Contratos Fechados */}
        <div className="rounded-lg border border-emerald-500/30 bg-[#121122]/70 p-2">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-semibold text-emerald-400">Fechados</span>
            <span className="rounded bg-emerald-500/20 px-1.5 text-[9px] text-emerald-300">200</span>
          </div>
          <div className="space-y-1.5">
            <div className="rounded border border-emerald-500/30 bg-emerald-500/10 p-1.5">
              <p className="font-medium text-white truncate text-[11px]">Contrato 200</p>
              <div className="mt-1 flex items-center justify-between text-[9px] text-emerald-300">
                <span>Assinado</span>
                <span>R$ 6.000</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer status */}
      <div className="mt-3 flex items-center justify-between border-t border-white/[0.05] pt-2 text-[10px] text-zinc-400">
        <span className="flex items-center gap-1">
          <Zap size={11} className="text-purple-400" /> Follow-up automatizado
        </span>
        <span className="font-mono text-emerald-400">Ticket médio: R$ 6 mil</span>
      </div>
    </div>
  );
}

// ==========================================
// MOCKUP 2: Clínica (Agenda / Calendário & Mensagens)
// ==========================================
function ClinicMockup() {
  return (
    <div className="relative rounded-xl border border-white/[0.08] bg-[#0C0B19]/90 p-4 font-sans text-xs">
      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-white/[0.06] pb-2.5 mb-3">
        <div className="flex items-center gap-2">
          <Calendar size={13} className="text-blue-400" />
          <span className="font-mono text-[10px] uppercase tracking-wider text-blue-300">
            Agenda Médica & Confirmação Automática
          </span>
        </div>
        <span className="rounded bg-emerald-500/20 px-2 py-0.5 font-mono text-[9px] text-emerald-300">
          78% comparecimento
        </span>
      </div>

      {/* Metrics Dashboard */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-3">
        <div className="rounded border border-white/[0.05] bg-[#121122]/70 p-2 text-center">
          <p className="font-mono text-white text-lg">+86</p>
          <p className="text-[9px] text-zinc-400 mt-0.5">Agendamentos/mês</p>
        </div>
        <div className="rounded border border-white/[0.05] bg-[#121122]/70 p-2 text-center">
          <p className="font-mono text-white text-lg">R$ 32,90</p>
          <p className="text-[9px] text-zinc-400 mt-0.5">CPL</p>
        </div>
        <div className="rounded border border-emerald-500/30 bg-emerald-500/10 p-2 text-center">
          <p className="font-mono text-emerald-300 text-lg">5,1x</p>
          <p className="text-[9px] text-emerald-300 mt-0.5">ROAS</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {/* Agenda Slots */}
        <div className="space-y-1.5 rounded-lg border border-white/[0.06] bg-[#121122]/70 p-2">
          <div className="flex items-center justify-between text-[10px] text-zinc-400 mb-1">
            <span className="font-semibold text-zinc-300">Consultas de Hoje</span>
            <span className="text-purple-300">78% ocupação</span>
          </div>

          <div className="flex items-center justify-between rounded border border-emerald-500/30 bg-emerald-500/10 px-2 py-1">
            <div className="flex items-center gap-1.5">
              <Clock size={11} className="text-emerald-400" />
              <span className="font-medium text-white text-[10px]">09:00 • Avaliação</span>
            </div>
            <span className="text-[9px] font-semibold text-emerald-300">Confirmado</span>
          </div>

          <div className="flex items-center justify-between rounded border border-emerald-500/30 bg-emerald-500/10 px-2 py-1">
            <div className="flex items-center gap-1.5">
              <Clock size={11} className="text-emerald-400" />
              <span className="font-medium text-white text-[10px]">11:30 • Procedimento</span>
            </div>
            <span className="text-[9px] font-semibold text-emerald-300">Confirmado</span>
          </div>

          <div className="flex items-center justify-between rounded border border-purple-500/30 bg-purple-500/10 px-2 py-1">
            <div className="flex items-center gap-1.5">
              <Clock size={11} className="text-purple-400" />
              <span className="font-medium text-white text-[10px]">14:00 • Retorno</span>
            </div>
            <span className="text-[9px] font-semibold text-purple-300">Lembrete 2h</span>
          </div>
        </div>

        {/* WhatsApp Message Preview */}
        <div className="rounded-lg border border-white/[0.06] bg-[#121122]/70 p-2 flex flex-col justify-between">
          <div className="flex items-center gap-1.5 text-[10px] text-zinc-400 mb-1.5 border-b border-white/[0.05] pb-1">
            <MessageSquare size={11} className="text-emerald-400" />
            <span className="font-mono text-emerald-300">Fluxo WhatsApp Bot</span>
          </div>

          <div className="space-y-1.5 text-[10px]">
            <div className="rounded-md bg-[#1d1b33] p-1.5 text-zinc-300">
              <p className="text-[9px] leading-tight">
                &ldquo;Olá Mariana! Sua consulta está confirmada para hoje às 11:30. Deseja rota?&rdquo;
              </p>
            </div>
            <div className="rounded-md bg-emerald-950/60 border border-emerald-500/30 p-1.5 text-right text-emerald-200">
              <p className="text-[9px] leading-tight font-medium">
                &ldquo;Sim, já estou a caminho! ✓✓&rdquo;
              </p>
            </div>
          </div>

          <div className="mt-1 text-[9px] text-zinc-400 flex items-center justify-between pt-1 border-t border-white/[0.05]">
            <span>Google Ads → Form → Bot</span>
            <span className="text-emerald-400 font-medium">78% comparecimento</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// MOCKUP 3: E-commerce (Gráfico de ROAS & Produtos)
// ==========================================
function EcommerceMockup() {
  const chartId = React.useId();

  return (
    <div className="relative rounded-xl border border-white/[0.08] bg-[#0C0B19]/90 p-4 font-sans text-xs">
      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-white/[0.06] pb-2.5 mb-2.5">
        <div className="flex items-center gap-2">
          <TrendingUp size={13} className="text-purple-400" />
          <span className="font-mono text-[10px] uppercase tracking-wider text-purple-300">
            Escala de ROAS & Atribuição CAPI
          </span>
        </div>
        <div className="flex items-center gap-1 rounded bg-purple-500/20 px-2 py-0.5 font-mono text-[9px] text-purple-200">
          <Sparkles size={10} className="text-purple-300" />
          ROAS Médio: 4.8x
        </div>
      </div>

      {/* SVG Growth Chart */}
      <div className="rounded-lg border border-white/[0.06] bg-[#121122]/70 p-2.5">
        <div className="flex items-center justify-between text-[10px] text-zinc-400 mb-1">
          <span>Receita (Meta + Google Shopping)</span>
          <span className="font-mono text-emerald-400 font-semibold">+148% faturamento</span>
        </div>

        <div className="h-20 w-full">
          <svg className="size-full overflow-visible" viewBox="0 0 280 70" preserveAspectRatio="none">
            <defs>
              <linearGradient id={chartId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8B3DFF" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Area */}
            <path
              d="M0,60 Q40,55 80,45 T160,30 T220,18 T280,6 L280,70 L0,70 Z"
              fill={`url(#${chartId})`}
            />
            {/* Revenue Line */}
            <path
              d="M0,60 Q40,55 80,45 T160,30 T220,18 T280,6"
              fill="none"
              stroke="#A855F7"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Ad Spend Baseline */}
            <path
              d="M0,65 Q70,64 140,62 T280,58"
              fill="none"
              stroke="#64748B"
              strokeWidth="1.5"
              strokeDasharray="3 3"
            />
            <circle cx="280" cy="6" r="4" fill="#3B82F6" />
          </svg>
        </div>

        <div className="mt-1 flex items-center justify-between text-[9px] text-zinc-400">
          <span className="flex items-center gap-1">
            <span className="size-1.5 rounded-full bg-purple-400" /> Faturamento
          </span>
          <span className="flex items-center gap-1">
            <span className="size-1.5 rounded-full bg-zinc-500" /> Investimento controlado
          </span>
        </div>
      </div>

      {/* Top Products */}
      <div className="mt-2.5 grid grid-cols-2 gap-2 text-[10px]">
        <div className="rounded border border-white/[0.05] bg-[#121122]/50 p-1.5 flex items-center justify-between">
          <span className="truncate text-white font-medium">Produto Principal A</span>
          <span className="rounded bg-emerald-500/20 px-1 py-0.2 text-[9px] font-mono text-emerald-300">
            ROAS 5.6x
          </span>
        </div>
        <div className="rounded border border-white/[0.05] bg-[#121122]/50 p-1.5 flex items-center justify-between">
          <span className="truncate text-white font-medium">Kit Upsell Remarketing</span>
          <span className="rounded bg-purple-500/20 px-1 py-0.2 text-[9px] font-mono text-purple-200">
            ROAS 4.2x
          </span>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// MOCKUP 4: Serviços (Landing Page + Funil)
// ==========================================
function ServicesCompanyMockup() {
  return (
    <div className="relative rounded-xl border border-white/[0.08] bg-[#0C0B19]/90 p-4 font-sans text-xs">
      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-white/[0.06] pb-2.5 mb-2.5">
        <div className="flex items-center gap-2">
          <Briefcase size={13} className="text-purple-400" />
          <span className="font-mono text-[10px] uppercase tracking-wider text-purple-300">
            Landing Page Alta Conversão + Funil Integrado
          </span>
        </div>
        <span className="rounded bg-emerald-500/20 px-2 py-0.5 font-mono text-[9px] text-emerald-300">
          2 contratos fechados
        </span>
      </div>

      {/* Metrics Dashboard */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-3">
        <div className="rounded border border-white/[0.05] bg-[#121122]/70 p-2 text-center">
          <p className="font-mono text-white text-lg">1.457</p>
          <p className="text-[9px] text-zinc-400 mt-0.5">Cliques</p>
        </div>
        <div className="rounded border border-white/[0.05] bg-[#121122]/70 p-2 text-center">
          <p className="font-mono text-white text-lg">13.573</p>
          <p className="text-[9px] text-zinc-400 mt-0.5">Impressões</p>
        </div>
        <div className="rounded border border-white/[0.05] bg-[#121122]/70 p-2 text-center">
          <p className="font-mono text-white text-lg">R$ 0,47</p>
          <p className="text-[9px] text-zinc-400 mt-0.5">CPC médio</p>
        </div>
        <div className="rounded border border-white/[0.05] bg-[#121122]/70 p-2 text-center">
          <p className="font-mono text-white text-lg">R$ 683,62</p>
          <p className="text-[9px] text-zinc-400 mt-0.5">Custo total</p>
        </div>
        <div className="rounded border border-emerald-500/30 bg-emerald-500/10 p-2 text-center">
          <p className="font-mono text-emerald-300 text-lg">2</p>
          <p className="text-[9px] text-emerald-300 mt-0.5">Contratos</p>
        </div>
      </div>

      {/* Mini LP Wireframe */}
      <div className="rounded-lg border border-purple-500/30 bg-[#121122]/80 p-2.5 mb-2.5">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-purple-400" />
            <span className="text-[10px] font-bold text-white">Preview Landing Page Otimizada</span>
          </div>
          <span className="rounded bg-purple-500/20 px-1.5 py-0.2 text-[9px] text-purple-200">
            Testes A/B
          </span>
        </div>

        <div className="rounded border border-white/[0.06] bg-[#17162e] p-2 space-y-1.5">
          <div className="h-2 w-3/4 rounded bg-gradient-to-r from-purple-400 to-blue-400" />
          <div className="h-1.5 w-1/2 rounded bg-zinc-600" />
          <div className="flex items-center gap-2 pt-1">
            <div className="h-4 flex-1 rounded bg-black/40 border border-white/10 px-1.5 text-[8px] text-zinc-400 flex items-center">
              seu@email.com
            </div>
            <div className="h-4 rounded bg-gradient-to-r from-purple-500 to-blue-500 px-2 text-[8px] font-semibold text-white flex items-center">
              Solicitar Orçamento
            </div>
          </div>
        </div>
      </div>

      {/* Connected Funnel Pipeline */}
      <div className="rounded-lg border border-white/[0.06] bg-[#121122]/60 p-2">
        <div className="text-[10px] text-zinc-400 mb-1.5 font-semibold">
          Fluxo Conectado de Captação
        </div>
        <div className="flex items-center justify-between text-[9px] flex-wrap gap-1">
          <span className="rounded border border-white/10 bg-white/5 px-1.5 py-0.5 text-zinc-300">
            Anúncio (13.573 imp.)
          </span>
          <span className="text-purple-400">→</span>
          <span className="rounded border border-purple-500/30 bg-purple-500/20 px-1.5 py-0.5 text-purple-200 font-semibold">
            LP Conversão (1.457 cliques)
          </span>
          <span className="text-purple-400">→</span>
          <span className="rounded border border-blue-500/30 bg-blue-500/20 px-1.5 py-0.5 text-blue-200">
            CRM Webhook
          </span>
          <span className="text-purple-400">→</span>
          <span className="rounded border border-emerald-500/30 bg-emerald-500/20 px-1.5 py-0.5 text-emerald-300 font-semibold">
            2 Contratos Fechados
          </span>
        </div>
      </div>
    </div>
  );
}

// Map mockups by case category
function renderCaseMockup(category: string) {
  switch (category) {
    case "Escritório de advocacia":
      return <LawFirmMockup />;
    case "Clínica":
      return <ClinicMockup />;
    case "E-commerce":
      return <EcommerceMockup />;
    case "Empresa de serviços":
      return <ServicesCompanyMockup />;
    default:
      return <LawFirmMockup />;
  }
}

export default function CaseStudies() {
  return (
    <section
      id="resultados"
      className="py-12 md:py-20 lg:py-28 relative"
      aria-labelledby="cases-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-purple)_0%,_transparent_70%)] opacity-10 pointer-events-none" aria-hidden="true" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal direction="up">
          <SectionHeading
            eyebrow="RESULTADOS"
            title="Resultados que falam mais alto."
            textAlign="center"
          />
        </Reveal>

        <Reveal direction="up" delay={0.1}>
          <div className="mt-8 md:mt-14 lg:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {cases.map((caseStudy, i) => {
              const CategoryIcon = categoryIcons[caseStudy.category] ?? Briefcase;
              return (
                <RevealItem key={caseStudy.title} index={i} direction="up">
                  <GlowCard variant="default" hover={true} className="h-full">
                    <div>
                      {/* Top Category Badge & Title */}
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div>
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-purple-300 bg-purple-500/10 rounded-full mb-3 border border-purple-500/20">
                            <CategoryIcon className="h-3.5 w-3.5 text-purple-400" />
                            {caseStudy.category}
                          </span>
                          <h3 className="font-[Space_Grotesk] text-xl lg:text-2xl font-bold text-white leading-snug">
                            {caseStudy.title}
                          </h3>
                        </div>
                      </div>

                      {/* Challenge & Solution */}
                      <div className="space-y-3 mb-5">
                        <div className="rounded-lg bg-[#0C0B19]/70 border border-white/[0.04] p-3">
                          <p className="text-[10px] font-semibold text-purple-300 uppercase tracking-wider mb-0.5">
                            Desafio
                          </p>
                          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                            {caseStudy.challenge}
                          </p>
                        </div>
                        <div className="rounded-lg bg-[#0C0B19]/70 border border-white/[0.04] p-3">
                          <p className="text-[10px] font-semibold text-blue-300 uppercase tracking-wider mb-0.5">
                            Solução
                          </p>
                          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                            {caseStudy.solution}
                          </p>
                        </div>
                      </div>

                      {/* Metrics Section */}
                      <div className="rounded-xl border border-white/[0.06] bg-[#0C0B19]/90 p-3.5 mb-5">
                        <div className="mb-2.5">
                          <p className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider mb-1">
                            Métrica principal
                          </p>
                          <p className="font-[Space_Grotesk] text-2xl font-extrabold bg-gradient-to-r from-purple-400 via-violet-300 to-blue-400 bg-clip-text text-transparent">
                            {caseStudy.mainMetric}
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {caseStudy.secondaryMetrics.map((metric, mi) => (
                            <span
                              key={mi}
                              className="px-2.5 py-1 text-xs text-zinc-300 bg-[#121122] rounded-full border border-white/5"
                            >
                              {metric}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="hidden sm:flex flex-wrap gap-1.5 mb-5">
                        {caseStudy.tags.map((tag, ti) => (
                          <span
                            key={ti}
                            className="px-2 py-0.5 text-[11px] font-medium text-zinc-400 bg-white/[0.03] rounded border border-white/[0.06]"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Custom Real Abstract Mockup per Case */}
                      <div className="hidden sm:block mb-5">
                        {renderCaseMockup(caseStudy.category)}
                      </div>
                    </div>
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
