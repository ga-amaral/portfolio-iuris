# Iuris Mídia — Performance & Automação

Site institucional de alta performance para a Iuris Mídia, especialista em tráfego pago, CRM, automação e crescimento previsível.

## Stack

- **Framework**: Next.js 16 (App Router)
- **Linguagem**: TypeScript (strict)
- **Estilização**: Tailwind CSS v4 (CSS-first, tokens em `app/globals.css`)
- **Animações**: Framer Motion (respeita `prefers-reduced-motion`)
- **Ícones**: Lucide React
- **Utilitários**: clsx + tailwind-merge (`lib/utils.ts`)

## Estrutura

```
├── app/
│   ├── globals.css          # Tokens de design (cores, fontes, utilitários)
│   ├── layout.tsx           # Layout raiz, fonts (Inter + Space Grotesk)
│   └── page.tsx             # Composição das seções
├── components/
│   ├── ui/                  # Componentes base reutilizáveis
│   │   ├── button.tsx
│   │   ├── section-heading.tsx
│   │   ├── gradient-text.tsx
│   │   ├── reveal.tsx
│   │   └── glow-card.tsx
│   ├── header.tsx
│   ├── hero.tsx
│   ├── problem-section.tsx
│   ├── acquisition-system.tsx
│   ├── services.tsx
│   ├── case-studies.tsx
│   ├── authority-section.tsx
│   ├── process-section.tsx
│   ├── contact-form.tsx
│   └── footer.tsx
├── data/
│   └── site-content.ts      # TODO o conteúdo do site (tipado, em PT-BR)
├── lib/
│   └── utils.ts             # cn() — clsx + tailwind-merge
└── public/
```

## Tokens de Design (globals.css)

As variáveis CSS customizadas definem a paleta:

```css
:root {
  --color-bg: #05050A;
  --color-bg2: #0C0B19;
  --color-surface: #10101D;
  --color-surface2: #121122;
  --color-purple: #8B3DFF;
  --color-violet: #A855F7;
  --color-blue: #3B82F6;
  --color-electric: #2563EB;
  --color-magenta: #D946EF;
  --color-fg: #F8FAFC;
  --color-muted: #A1A1AA;
  --color-success: #22C55E;
}
```

Utilitário `.text-gradient` aplica gradiente roxo→azul no texto.

## Desenvolvimento

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento (Turbopack)
npm run dev

# Verificar tipos
npx tsc --noEmit

# Build de produção
npm run build

# Iniciar servidor de produção
npm start
```

## Deploy na Vercel

1. Conecte o repositório na Vercel
2. Configure a variável de ambiente em **Settings > Environment Variables** (marque **Production**):
   - `NEXT_PUBLIC_LEAD_WEBHOOK_URL` = `https://n8n.globalportfolio.com.br/webhook/portfolio`
   - ⚠️ Como é `NEXT_PUBLIC_`, o valor é embutido no build — após alterar, faça **redeploy**.
3. No n8n: o nó Webhook deve ter método **POST**, workflow **publicado/ativo**, e em **Options > Allowed Origins (CORS)** adicione o domínio do site (ex.: `https://seudominio.com.br`).
4. Deploy automático a cada push na branch principal.

## Variáveis de Ambiente

| Variável | Obrigatória | Descrição |
|----------|-------------|-----------|
| `NEXT_PUBLIC_LEAD_WEBHOOK_URL` | Sim (produção) | Endpoint POST do n8n para receber leads. Em dev, pode apontar para servidor local de teste. Veja `.env.example`. |

Para testar localmente sem enviar para produção, suba um servidor descartável (ex.: `npx http-server` ou Node) e aponte `NEXT_PUBLIC_LEAD_WEBHOOK_URL=http://localhost:PORTA/webhook` no `.env.local`.

## Editando o Conteúdo

Todo o texto, links, serviços, cases, métricas e FAQ ficam em **`data/site-content.ts`**.

### Exemplo: alterar hero

```typescript
export const hero: HeroContent = {
  label: "NOVO LABEL",
  title: "Novo título principal.",
  highlight: "trecho em gradiente",
  subtitle: "Nova descrição...",
  ctas: {
    primary: { label: "CTA Principal", href: "#contato" },
    secondary: { label: "CTA Secundário", href: "#resultados" },
  },
  indicators: ["Item 1", "Item 2"],
  demoStats: [
    { label: "Leads", value: "+200" }, // DEMONSTRATIVO
    // ...
  ],
};
```

### Exemplo: adicionar serviço

```typescript
export const services: Service[] = [
  // ...existentes
  {
    icon: "NewIcon", // nome do ícone em lucide-react
    title: "Novo Serviço",
    description: "Descrição curta do serviço.",
  },
];
```

### Exemplo: editar case study (placeholders)

```typescript
export const cases: CaseStudy[] = [
  {
    category: "Categoria",
    title: "Título do Case",
    challenge: "Desafio enfrentado",
    solution: "Solução implementada",
    mainMetric: "+XX leads", // PLACEHOLDER
    secondaryMetrics: ["CPL de R$ XX", "ROAS de X,X"],
    tags: ["Tag1", "Tag2"],
  },
];
```

**Importante**: Os ícones usam nomes do `lucide-react` (ex: `"Zap"`, `"BarChart2"`, `"Target"`). O mapeamento é feito nos componentes.

## Acessibilidade

- Semântica HTML5 correta (`header`, `main`, `section`, `footer`, `nav`)
- Landmarks ARIA (`role="banner"`, `role="contentinfo"`, `aria-labelledby`)
- Foco visível em todos os elementos interativos
- Labels associados aos inputs
- `aria-invalid` + `aria-describedby` para erros de validação
- `prefers-reduced-motion` respeitado em todas as animações
- Contraste WCAG AA em modo dark

## Performance

- Componentes client-side apenas onde necessário (`"use client"`)
- Imagens otimizadas via `next/image` (quando houver)
- Fontes otimizadas com `next/font` (Inter + Space Grotesk)
- Animações leves com `transform` e `opacity`
- Build estático (SSG) por padrão

## Qualidade

```bash
# TypeScript strict
npx tsc --noEmit

# ESLint
npm run lint

# Build completo
npm run build
```

## Licença

© 2026 Iuris Mídia. Todos os direitos reservados.