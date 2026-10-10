export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  email: string;
  whatsappDisplay: string;
  whatsappUrl: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface HeroContent {
  label: string;
  title: string;
  highlight: string;
  subtitle: string;
  ctas: {
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
  };
  indicators: string[];
  demoStats: {
    label: string;
    value: string;
  }[];
}

export interface MetricsStripItem {
  label: string;
}

export interface Problem {
  icon: string;
  title: string;
  description: string;
}

export interface SectionContent {
  eyebrow: string;
  title: string;
  subtitle: string;
}

export interface AcquisitionStep {
  number: string;
  icon: string;
  title: string;
  description: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface CaseStudy {
  category: string;
  title: string;
  challenge: string;
  solution: string;
  mainMetric: string;
  secondaryMetrics: string[];
  tags: string[];
}

export interface AuthorityContent {
  text: string;
  indicators: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface BillingOption {
  value: string;
  label: string;
}

export interface ContactForm {
  title: string;
  description: string;
  buttonLabel: string;
  fields: {
    name: { label: string; placeholder: string; required: boolean };
    whatsapp: { label: string; placeholder: string; required: boolean };
    email: { label: string; placeholder: string; required: boolean };
    billing: { label: string; required: boolean; options: BillingOption[] };
    message: { label: string; placeholder: string; required: boolean };
  };
  submitLabel: string;
  successMessage: string;
  errorMessage: string;
  webhookUrl: string;
}

export interface FooterContent {
  copyright: string;
  links: { label: string; href: string }[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const site: SiteConfig = {
  name: "Iuris Mídia",
  tagline: "Performance & Automação",
  description: "A Iuris Mídia não é apenas gestão de tráfego. Ela constrói uma estrutura tecnológica completa para captar, organizar e converter leads em clientes. Meta Ads, Google Ads, Landing pages, CRM, Automação, Dados, Crescimento previsível.",
  email: "iurismidia@gmail.com",
  whatsappDisplay: "(14) 99131-4552",
  whatsappUrl: "https://wa.me/5514991314552",
};

export const nav: NavItem[] = [
  { label: "Início", href: "#inicio" },
  { label: "Resultados", href: "#resultados" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Método", href: "#metodo" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export const hero: HeroContent = {
  label: "TRÁFEGO PAGO • CRM • AUTOMAÇÃO",
  title: "Transformo tráfego pago em um sistema previsível de aquisição de clientes.",
  highlight: "sistema previsível de aquisição de clientes",
  subtitle: "Campanhas de Meta Ads e Google Ads conectadas a landing pages, CRM, automações e dados para gerar leads e ajudar sua empresa a vender mais.",
  ctas: {
    primary: { label: "Quero gerar mais clientes", href: "#contato" },
    secondary: { label: "Ver resultados", href: "#resultados" },
  },
  indicators: ["Meta Ads", "Google Ads", "CRM", "Automação", "Tracking"],
  demoStats: [
    { label: "Leads gerados", value: "+128" }, // DEMONSTRATIVO
    { label: "CPL", value: "R$ 18,40" }, // DEMONSTRATIVO
    { label: "Taxa de contato", value: "84%" }, // DEMONSTRATIVO
    { label: "Reuniões agendadas", value: "32" }, // DEMONSTRATIVO
  ],
};

export const metricsStrip: MetricsStripItem[] = [
  { label: "Meta Ads + Google Ads" },
  { label: "Landing pages de conversão" },
  { label: "CRM integrado ao funil" },
  { label: "Automação de follow-up" },
];

export const problems: Problem[] = [
  {
    icon: "Zap",
    title: "Leads sem resposta rápida",
    description: "Leads esfriam enquanto a equipe não consegue atender no tempo ideal.",
  },
  {
    icon: "FileText",
    title: "Falta de organização comercial",
    description: "Sem CRM estruturado, o funil de vendas vira caos e oportunidades se perdem.",
  },
  {
    icon: "BarChart2",
    title: "Campanhas sem tracking confiável",
    description: "Decisões baseadas em achismo porque os dados não estão conectados.",
  },
  {
    icon: "MousePointer",
    title: "Landing pages que não convertem",
    description: "Páginas genéricas que não comunicam valor e não guiam para a ação.",
  },
  {
    icon: "Target",
    title: "Dificuldade para medir vendas",
    description: "Não saber de onde vieram os clientes impede escalar o que funciona.",
  },
  {
    icon: "MessageSquare",
    title: "Dependência de WhatsApp sem processo",
    description: "Atendimento manual, sem automação, não escala e gera gargalo.",
  },
];

export const problemSection: SectionContent = {
  eyebrow: "O PROBLEMA",
  title: "Anúncios sozinhos não resolvem seu problema de vendas.",
  subtitle:
    "O clique é apenas o começo. Sem estrutura, o investimento em tráfego vira lead perdido, atendimento lento e falta de previsibilidade.",
};

export const acquisitionSteps: AcquisitionStep[] = [
  {
    number: "1",
    icon: "Target",
    title: "Estratégia e oferta",
    description: "Definimos oferta, público, canais e metas antes de investir um real.",
  },
  {
    number: "2",
    icon: "Zap",
    title: "Meta Ads e Google Ads",
    description: "Campanhas estruturadas com criativos testados e segmentação precisa.",
  },
  {
    number: "3",
    icon: "MousePointer",
    title: "Landing page de conversão",
    description: "Páginas otimizadas para capturar lead qualificado, não só clique.",
  },
  {
    number: "4",
    icon: "FileText",
    title: "CRM para organizar leads",
    description: "Kanban personalizado: cada lead no estágio certo, sem cair no esquecimento.",
  },
  {
    number: "5",
    icon: "Repeat",
    title: "Automação de follow-up",
    description: "Sequências automáticas no WhatsApp e e-mail para nutrir e agendar.",
  },
  {
    number: "6",
    icon: "BarChart2",
    title: "Dashboard de resultados",
    description: "Visão única: investimento, leads, CPL, reuniões, vendas e ROAS em tempo real.",
  },
];

export const services: Service[] = [
  {
    icon: "Zap",
    title: "Meta Ads",
    description: "Campanhas no Facebook e Instagram com criativos testados, segmentação avançada e otimização contínua de custo por lead.",
  },
  {
    icon: "Search",
    title: "Google Ads",
    description: "Rede de Pesquisa, Display e YouTube para capturar demanda ativa e remarketing inteligente.",
  },
  {
    icon: "MousePointer",
    title: "Landing pages",
    description: "Páginas de alta conversão, copy persuasiva, design orientado a ação e testes A/B contínuos.",
  },
  {
    icon: "FileText",
    title: "CRM personalizado",
    description: "Kanban adaptado ao seu funil: etapas, automações de tarefas, distribuição de leads e visão de pipeline.",
  },
  {
    icon: "Repeat",
    title: "Automação de atendimento",
    description: "Fluxos no n8n e APIs: respostas instantâneas, qualificação, agendamento e reengajamento no WhatsApp e e-mail.",
  },
  {
    icon: "BarChart2",
    title: "Tracking e dashboards",
    description: "GA4, GTM, CAPI, UTM padronizado. Dashboards com receita, leads, CPL, reuniões, taxa de contato e ROAS.",
  },
];

export const servicesSection: SectionContent = {
  eyebrow: "SERVIÇOS",
  title: "Soluções que fazem o funil avançar.",
  subtitle:
    "A Iuris Mídia não é apenas gestão de tráfego. Ela constrói uma estrutura tecnológica completa para captar, organizar e converter leads em clientes.",
};

export const cases: CaseStudy[] = [
  {
    category: "Escritório de advocacia",
    title: "Leads qualificados e CRM organizado",
    challenge: "Recebia leads desqualificados do tráfego e não tinha processo comercial estruturado.",
    solution: "Estrutura completa: Meta Ads + landing page + CRM Kanban + automação de qualificação e agendamento.",
    mainMetric: "200 contratos fechados",
    secondaryMetrics: ["1.762 leads", "1.300 leads qualificados", "924 reuniões", "Ticket médio de R$ 6 mil"],
    tags: ["Meta Ads", "CRM", "Automação", "Qualificação"],
  },
  {
    category: "Clínica",
    title: "Captação e agendamento automatizado",
    challenge: "Dependia de indicação e WhatsApp manual; agenda ociosa e leads perdidos.",
    solution: "Google Ads + Meta Ads para captação, landing page de agendamento, CRM com etapas de funil, automação de confirmação e lembrete.",
    mainMetric: "+86 agendamentos/mês",
    secondaryMetrics: ["CPL de R$ 32,90", "Taxa de comparecimento 78%", "ROAS de 5,1x"],
    tags: ["Google Ads", "Meta Ads", "Agendamento", "Automação"],
  },
  {
    category: "E-commerce",
    title: "Performance e ROAS escalável",
    challenge: "ROAS instável, dependência de poucas campanhas, tracking incompleto.",
    solution: "Estrutura de funil completo: Google Shopping + Search + Meta Ads, CAPI + GA4 + GTM, dashboards de produto e funil, otimização semanal.",
    mainMetric: "ROAS de 4,8x",
    secondaryMetrics: ["+148% receita", "CPL de R$ 18,90", "Ticket médio de R$ 229"],
    tags: ["Google Ads", "Meta Ads", "Tracking", "Dashboards"],
  },
  {
    category: "Empresa de serviços",
    title: "Landing page, tráfego e automação integrados",
    challenge: "Site institucional não convertia; tráfego direcionado para página genérica.",
    solution: "Landing page de conversão + Meta Ads + Google Ads + CRM + automação de follow-up via WhatsApp e e-mail + dashboard unificado.",
    mainMetric: "2 contratos fechados",
    secondaryMetrics: ["1.457 cliques", "13.573 impressões", "CPC médio de R$ 0,47", "Custo de R$ 683,62", "Ticket médio de R$ 2 mil"],
    tags: ["Landing Page", "Meta Ads", "Google Ads", "CRM", "Automação"],
  },
];

export const authority: AuthorityContent = {
  text: "Eu uno estratégia de tráfego pago e tecnologia para criar um processo de aquisição mais organizado, mensurável e preparado para crescer.",
  indicators: [
    "Meta Ads e Google Ads",
    "Landing pages orientadas a conversão",
    "CRM Kanban personalizado",
    "Automações com n8n e APIs",
    "Dashboards e leitura de dados",
  ],
};

export const process: ProcessStep[] = [
  {
    number: "01",
    title: "Diagnóstico",
    description: "Analiso seu momento atual: oferta, público, canais, ferramentas e gargalos comerciais.",
    icon: "Search",
  },
  {
    number: "02",
    title: "Estratégia",
    description: "Desenho o funil completo: estrutura de campanhas, páginas, CRM, automações e métricas-chave.",
    icon: "Target",
  },
  {
    number: "03",
    title: "Estrutura e rastreamento",
    description: "Implemento landing pages, CRM, pixel, CAPI, GTM, GA4 e UTM padronizado antes de ligar tráfego.",
    icon: "FileText",
  },
  {
    number: "04",
    title: "Campanhas e automações",
    description: "Lanço tráfego pago, ativo fluxos de follow-up, qualificação e agendamento. Acompanho diariamente.",
    icon: "Zap",
  },
  {
    number: "05",
    title: "Otimização contínua",
    description: "Reuniões semanais de performance: ajustes de criativo, segmentação, lances, páginas e automações.",
    icon: "TrendingUp",
  },
];

export const contact: ContactForm = {
  title: "Pronto para transformar tráfego pago em clientes?",
  description: "Preencha o formulário. Vou analisar seu cenário e entrar em contato para entender como estruturar uma operação de aquisição mais eficiente.",
  buttonLabel: "Quero mais clientes",
  fields: {
    name: {
      label: "Nome",
      placeholder: "Seu nome completo",
      required: true,
    },
    whatsapp: {
      label: "WhatsApp",
      placeholder: "(11) 99999-9999",
      required: true,
    },
    email: {
      label: "E-mail",
      placeholder: "seu@email.com",
      required: true,
    },
    billing: {
      label: "Faturamento mensal aproximado",
      required: true,
      options: [
        { value: "ate-10k", label: "Até R$ 10 mil" },
        { value: "10k-50k", label: "R$ 10 mil a R$ 50 mil" },
        { value: "50k-100k", label: "R$ 50 mil a R$ 100 mil" },
        { value: "100k-500k", label: "R$ 100 mil a R$ 500 mil" },
        { value: "acima-500k", label: "Acima de R$ 500 mil" },
      ],
    },
    message: {
      label: "Mensagem (opcional)",
      placeholder: "Conte brevemente sobre seu negócio e desafio atual...",
      required: false,
    },
  },
  submitLabel: "Solicitar análise",
  successMessage: "Recebi sua solicitação. Entrarei em contato em até 1 dia útil.",
  errorMessage: "Ocorreu um erro ao enviar. Tente novamente ou me chame direto no WhatsApp: https://wa.me/5514991314552",
  webhookUrl: "https://n8n.globalportfolio.com.br/webhook/portfolio",
};

export const footer: FooterContent = {
  copyright: "© 2026 Iuris Mídia. Todos os direitos reservados.",
  links: [
    { label: "Política de Privacidade", href: "/privacidade" },
    { label: "Termos de Uso", href: "/termos" },
  ],
};

export const faq: FAQItem[] = [
  {
    question: "Qual o investimento mínimo para começar?",
    answer: "Recomendo a partir de R$ 3.000/mês em mídia para ter volume suficiente de dados e otimizar. O valor ideal depende do seu ticket médio e margem.",
  },
  {
    question: "Em quanto tempo vejo resultados?",
    answer: "Primeiros leads costumam aparecer na primeira semana. Resultados consistentes e previsíveis (CPL estável, reuniões agendadas) em 30 a 60 dias.",
  },
  {
    question: "Preciso ter CRM ou vocês implementam?",
    answer: "Implemento do zero: CRM (Kanban no Notion, Kommo, HubSpot ou outro), automações, integrações e dashboards. Você não precisa ter nada pronto.",
  },
  {
    question: "Como funciona o acompanhamento?",
    answer: "Reunião semanal de 30 min (ou quinzenal) para revisar métricas, testar hipóteses e alinhar próximos passos. Dashboards acessíveis 24/7.",
  },
  {
    question: "Atende qualquer nicho?",
    answer: "Foco em B2B de alto ticket (serviços, consultorias, advocacia, saúde, educação, tecnologia) e e-commerce com ticket acima de R$ 500. Não atendo infoprodutos de baixo ticket ou afiliados.",
  },
  {
    question: "E se eu já tenho equipe de vendas?",
    answer: "Perfeito. Integro o funil ao processo comercial existente: distribuição automática de leads, etapas de pipeline alinhadas, relatórios de conversão por vendedor.",
  },
];
