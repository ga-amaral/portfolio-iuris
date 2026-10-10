# SPEC — Site Iuris Mídia (Performance & Automação)

Referência visual: linguagem premium/futurista (dark, roxo/azul, glow controlado, SaaS high-ticket). Não copiar marcas, logos, textos, rostos ou composição de nenhuma referência.

## Mensagem
"A Iuris Mídia não é apenas gestão de tráfego. Ela constrói uma estrutura tecnológica completa para captar, organizar e converter leads em clientes." (Meta Ads, Google Ads, Landing pages, CRM, Automação, Dados, Crescimento previsível.)

## Visual
- Fundo quase preto com azul-marinho profundo; cards escuros com bordas roxo/azul luminosas; gradientes roxo/violeta/azul elétrico com pontos de magenta; partículas e linhas discretas.
- Paleta: bg #05050A/#070711; bg2 #0C0B19; cards #10101D/#121122; roxo #8B3DFF; roxo vibrante #A855F7; azul #2563EB/#3B82F6; magenta #D946EF; branco #F8FAFC; texto secundário #A1A1AA; verde #22C55E SÓ para status positivo/crescimento.
- Glow só em: CTAs, cards em hover, ícones, linhas/detalhes de gráficos, Hero, métricas. Sem exagero de neon.
- Tipografia: Inter (texto) + Space Grotesk (títulos). Títulos grandes, trechos-chave em gradiente roxo→azul.
- Sem fotos de pessoas/stock. Mockups feitos em CSS/componentes.
- Só português do Brasil, sem lorem ipsum. Contraste adequado, teclado, labels acessíveis, prefers-reduced-motion respeitado.
- Mobile excelente.

## Header
Fixo, translúcido, glassmorphism leve. Logo textual "IM" / "Iuris Mídia" + "Performance & Automação". Links: Início, Resultados, Soluções, Método, Sobre, Contato. Botão roxo "Quero mais clientes". Mobile: hamburger acessível.

## Hero (80–90% da altura da primeira tela)
Esquerda: label "TRÁFEGO PAGO • CRM • AUTOMAÇÃO"; H1 "Transformo tráfego pago em um sistema previsível de aquisição de clientes." (trecho "sistema previsível de aquisição de clientes" em gradiente); sub "Campanhas de Meta Ads e Google Ads conectadas a landing pages, CRM, automações e dados para gerar leads e ajudar sua empresa a vender mais."; CTA primário "Quero gerar mais clientes"; secundário outline "Ver resultados"; indicadores: Meta Ads, Google Ads, CRM, Automação, Tracking.
Direita (sem foto): dashboard flutuante, card CRM/Kanban, gráfico crescente, card "Novo lead recebido", fluxo de nós conectados, elemento circular abstrato roxo/azul, brilho suave. Números editáveis (marcados como demonstrativos no código): "Leads gerados: +128", "CPL: R$ 18,40", "Taxa de contato: 84%", "Reuniões agendadas: 32".
Abaixo: faixa com 4 itens: "Meta Ads + Google Ads", "Landing pages de conversão", "CRM integrado ao funil", "Automação de follow-up".

## Problema
Título "Anúncios sozinhos não resolvem seu problema de vendas." Sub "O clique é apenas o começo. Sem estrutura, o investimento em tráfego vira lead perdido, atendimento lento e falta de previsibilidade." Cards com ícone: Leads sem resposta rápida; Falta de organização comercial; Campanhas sem tracking confiável; Landing pages que não convertem; Dificuldade para medir vendas; Dependência de WhatsApp sem processo. Hover: borda roxa suave, sombra, elevação leve.

## Sistema de aquisição
Título "Mais do que tráfego: um sistema completo para gerar clientes." Linha conectada com 6 etapas: 1 Estratégia e oferta; 2 Meta Ads e Google Ads; 3 Landing page de conversão; 4 CRM para organizar leads; 5 Automação de follow-up; 6 Dashboard de resultados. Cada etapa: número, ícone, nome curto, descrição de uma frase, conector roxo/azul. Mobile: vertical.

## Serviços
Título "Soluções que fazem o funil avançar." 6 cards: Meta Ads; Google Ads; Landing pages; CRM personalizado; Automação de atendimento; Tracking e dashboards. Ícone, título, descrição curta, seta, hover elegante.

## Resultados (cases)
Título "Resultados que falam mais alto." 4 cases placeholder (NÃO inventar resultados reais; usar "+XX leads", "CPL de R$ XX", "+XX% em reuniões", "ROAS de X,X", claramente placeholders): 1 Escritório de advocacia — leads qualificados e CRM; 2 Clínica — captação e agendamento automatizado; 3 E-commerce — performance e ROAS; 4 Empresa de serviços — landing page, tráfego e automação. Cada: categoria, título, desafio, solução, métrica principal, secundárias, tags, mockup abstrato em CSS.

## Autoridade — "Por que trabalhar comigo?"
Texto: "Eu uno estratégia de tráfego pago e tecnologia para criar um processo de aquisição mais organizado, mensurável e preparado para crescer." Indicadores: Meta Ads e Google Ads; Landing pages orientadas a conversão; CRM Kanban personalizado; Automações com n8n e APIs; Dashboards e leitura de dados. Mockup de dashboard: cards receita/leads/CPL/reuniões, gráfico de linha, Kanban com etapas, roxo e azul.

## Como funciona
Título "Do investimento em anúncio à venda: um processo conectado." Timeline 5 etapas: 01 Diagnóstico; 02 Estratégia; 03 Estrutura e rastreamento; 04 Campanhas e automações; 05 Otimização contínua. Título, texto curto, ícone.

## CTA final + formulário
Faixa mais clara que o fundo (tema roxo/azul). Título "Pronto para transformar tráfego pago em clientes?" Texto "Preencha o formulário. Vou analisar seu cenário e entrar em contato para entender como estruturar uma operação de aquisição mais eficiente." Botão "Quero mais clientes". Form: Nome, WhatsApp, E-mail, Faturamento mensal aproximado, Mensagem opcional, botão "Solicitar análise". Validação, máscara de telefone BR, loading, mensagens de erro, POST para process.env.NEXT_PUBLIC_LEAD_WEBHOOK_URL, estado de sucesso elegante sem sair da página.

## Animações (Framer Motion)
Fade+slide discreto nas seções; flutuação leve nos cards do Hero; glow suave no hover dos botões; linhas de conexão com animação discreta; cards surgindo no scroll. Respeitar prefers-reduced-motion (useReducedMotion). Sem comprometer performance/legibilidade.

## Arquitetura
app/page.tsx, app/layout.tsx, app/globals.css, components/{header,hero,problem-section,acquisition-system,services,case-studies,authority-section,process-section,contact-form,footer}.tsx, components/ui/*, data/site-content.ts (TODO texto/links/serviços/cases/métricas/contato/CTA/FAQ), lib/utils.ts. README.md com instalação, dev, build, deploy Vercel e NEXT_PUBLIC_LEAD_WEBHOOK_URL.

## Qualidade
Nada genérico; `npm run build` sem erros.
