# DESIGN.md — Mundo visual "Mesa Farta"

Especificação do sistema visual escolhido pelo cliente para o redesign do site Luciana Nutri (ver `docs/direction-proposal-creative.md`, Direção 2, e `docs/direction-research-data.md` para a matéria-prima de pesquisa). Este documento é o contrato: qualquer componente construído sobre a fundação (`globals.css`, `tailwind.config.ts`) deve ser implementável a partir do que está aqui, sem perguntar de volta.

## Tese

Comer bem é prazer caloroso, não privação clínica. A referência de mundo é a cozinha farta e vivida — livros de receita editoriais (Ottolenghi), revistas de gastronomia contemporânea, bistrôs mediterrâneos rústicos — nunca o laboratório, a bula ou o app de contagem de calorias. O site recusa o par verde-menta + creme genérico de "app de nutrição" que ele mesmo tinha antes.

## Paleta

Ancoragem cromática vem da pesquisa (`docs/direction-research-data.md`, seção 3): fundo creme quente, ação em terracota/páprica, um único acento verde pontual (não um segundo eixo cromático). Nunca preto puro no texto — sempre um marrom-expresso escuro.

### Papéis semânticos (light)

| Papel (var CSS) | Hex | Uso |
|---|---|---|
| `--background` | `#FFFBEB` | Fundo geral da página — creme quente |
| `--foreground` | `#3B2313` | Texto padrão — marrom-expresso escuro, nunca preto |
| `--card` / `--popover` | `#FFFDF7` | Superfícies elevadas (cards, popovers, dropdowns) — creme levemente mais claro que o fundo, nunca branco puro |
| `--card-foreground` / `--popover-foreground` | `#3B2313` | Texto sobre superfícies elevadas |
| `--primary` | `#9A3412` | Ação principal — terracota. CTAs de maior peso (ex.: agendar, comprar) |
| `--primary-foreground` | `#FFFFFF` | Texto sobre `--primary` |
| `--secondary` | `#F3E0B8` | Superfície secundária — bege-mostarda suave, para blocos de apoio e badges |
| `--secondary-foreground` | `#3B2313` | Texto sobre `--secondary` |
| `--muted` | `#F5E9D3` | Superfícies de baixo destaque (fundos de seção alternados, inputs desabilitados) |
| `--muted-foreground` | `#6B5642` | Texto secundário/legenda sobre `--muted` — marrom mais suave, nunca cinza |
| `--accent` | `#FBEAD2` | Superfície de hover/seleção neutra e quente (não confundir com o acento verde da tese — este é o hover-state genérico que os ~60 componentes shadcn esperam) |
| `--accent-foreground` | `#3B2313` | Texto sobre `--accent` |
| `--destructive` | `#B91C1C` | Erros e ações destrutivas |
| `--destructive-foreground` | `#FFFFFF` | Texto sobre `--destructive` |
| `--border` / `--input` | `#E8D5B5` | Bordas e contornos de campo — tom areia |
| `--ring` | `#9A3412` (= primary) | Anel de foco — terracota, alto contraste sobre o creme |

### Cores de apoio (não-semânticas, uso pontual)

- **Páprica** `#C2410C` — segunda cor de ação, para CTAs secundários ou hover do `primary`.
- **Verde `#059669`** — o acento verde da tese. É **pontual**: usado apenas em detalhes pequenos e isolados (um ícone de confirmação, um selo, um traço de gráfico), nunca como fundo de seção nem como `--accent`/`--primary` global. Textos escritos em verde sobre fundo claro devem usar uma variante mais escura (`#047857` ou mais escuro) para atingir 4.5:1 — o `#059669` puro passa em elementos grandes/ícones, não em texto pequeno.
- **Marrom profundo `#78350F`** — reforço de autoridade/assinatura, uso comedido (ex.: rodapé, elementos de credencial).

### Papéis semânticos (dark)

Tradução legítima do mundo Mesa Farta — marrom profundo e terracota quente, nunca o cinza-azulado genérico de dark mode:

| Papel | Hex | Uso |
|---|---|---|
| `--background` | `#241408` | Marrom-expresso quase preto, nunca cinza-azulado |
| `--foreground` | `#FBEEDD` | Creme quente sobre o fundo escuro |
| `--card` / `--popover` | `#3A2717` | Marrom-tabaco, uma camada acima do fundo |
| `--card-foreground` / `--popover-foreground` | `#FBEEDD` | — |
| `--primary` | `#E2680F` | Terracota vibrante — precisa clarear em relação ao light para manter contraste sobre fundo escuro |
| `--primary-foreground` | `#241408` | Texto escuro sobre o botão terracota claro (branco/creme sobre esse laranja não atinge 4.5:1) |
| `--secondary` | `#4A3420` | Marrom-canela |
| `--secondary-foreground` | `#FBEEDD` | — |
| `--muted` | `#33210F` | — |
| `--muted-foreground` | `#D9C3AA` | Bege suave, nunca cinza |
| `--accent` | `#4A3420` | Hover neutro quente |
| `--accent-foreground` | `#FBEEDD` | — |
| `--destructive` | `#7F1D1D` | — |
| `--destructive-foreground` | `#FBEEDD` | — |
| `--border` / `--input` | `#4A3420` | — |
| `--ring` | `#FB923C` | Terracota clara — precisa ser mais clara que o `--primary` para permanecer visível como indicador de foco sobre fundo escuro |

### Contraste

Todo par texto/fundo definido acima foi verificado (fórmula WCAG 2.x, luminância relativa) e passa 4.5:1 para texto normal; os pares de botão (`primary`/`primary-foreground`, `destructive`/`destructive-foreground`) passam confortavelmente acima de 5:1. Qualquer novo par introduzido por outro worker deve ser calculado antes de assumido — não presumir.

## Tipografia

Par escolhido pela pesquisa (`docs/direction-research-data.md`, seção 4): **Lora** (título) + **Raleway** (corpo) — substitui o uso único de Literata em tudo, criando hierarquia real.

- `--font-lora` → classe utilitária `font-headline`. Uso: `h1`–`h6`, títulos de seção, headline do hero. Serifa robusta e editorial — carrega o tom "livro de receitas", nunca o tom clínico.
- `--font-raleway` → classe utilitária `font-body`. Uso: parágrafos, labels, botões, navegação. Sans humanista e legível — contraponto ao título, garante que blocos longos de leitura (Sobre, depoimentos) não cansem.

### Escala tipográfica

| Papel | Tamanho (mobile → desktop) | Peso | Fonte |
|---|---|---|---|
| Display (Hero H1) | `2.5rem` → `4rem` | 700 | Lora |
| H2 (título de seção) | `2rem` → `2.75rem` | 700 | Lora |
| H3 (subtítulo/card title) | `1.375rem` → `1.75rem` | 600 | Lora |
| Body grande (lead/intro de seção) | `1.125rem` → `1.25rem` | 400 | Raleway |
| Body padrão | `1rem` | 400 | Raleway |
| Small/legenda | `0.875rem` | 400–500 | Raleway |
| Label/botão | `0.9375rem` | 600 | Raleway |

Regra de medida: parágrafos longos (Sobre, depoimentos) mantêm 65–75ch de largura de linha. `tracking` nunca abaixo de `-0.04em` em títulos grandes.

## Escala de espaçamento

Base 4px, seguindo a escala padrão do Tailwind (`1` = 4px) — sem token novo custom, mas com disciplina de uso:

- Espaço entre elementos dentro de um grupo (ícone+label, campo+erro): `2`–`3` (8–12px).
- Espaço entre blocos relacionados dentro de uma seção (título → parágrafo → CTA): `6`–`8` (24–32px).
- Espaço entre seções da landing: `20`–`32` (80–128px) — o ritmo "farto" pede respiro generoso entre pratos, não seções coladas.
- Regra fixa: mais espaço acima de um título de seção do que abaixo dele (o título pertence visualmente ao conteúdo que introduz).

## Superfície e elevação

- Cards e superfícies elevadas usam `--card` (creme mais claro que o fundo), nunca branco puro, com `border` sutil em `--border` — não depender só de sombra para separar do fundo.
- Sombra: sempre com offset e blur suaves (ex.: `0 8px 24px -8px rgb(59 35 19 / 0.18)` — sombra tingida de marrom-expresso, nunca cinza neutro nem halo colorido sem offset).
- `--radius` mantém-se generoso (`0.8rem`+) — cantos arredondados fazem parte do tom "acolhedor, sem aresta clínica".
- Nunca usar glass/blur como decoração; nunca usar `border-left` colorido em cards/callouts como substituto de hierarquia.

## Layout, ritmo e sobreposição

- Alternância de alinhamento: seções de conteúdo pareado (texto + imagem/prova) alternam esquerda/direita a cada seção subsequente, como um cardápio degustação — nunca duas seções seguidas com a imagem do mesmo lado.
- Sobreposição intencional: fotos podem invadir levemente um bloco de cor sólida adjacente (ex.: a foto do Hero avançando sobre o bloco de texto, ou um card de depoimento avançando sobre a superfície de fundo) — sempre com folga suficiente para não cortar conteúdo textual.
- Grid fluido: nenhuma seção quebra ou perde a composição em larguras comuns de desktop (1280–1600px); mobile-first nas seções que usam sobreposição, para que a invasão de imagem não vire corte acidental em telas estreitas.

## Política de motion

Ver `docs/direction-research-data.md`, seção 6, e o bug corrigido em `src/components/ui/motion.tsx`:

1. **Conteúdo nasce visível por padrão.** Nenhuma seção ou bloco de texto começa com `opacity: 0` como estado estrutural — animação é progressão sobre conteúdo já presente no DOM/render, nunca portão de visibilidade. Isso protege SEO, crawlers e o caminho no-JS.
2. **`prefers-reduced-motion` é respeitado sempre.** Quando o usuário pede menos movimento, o conteúdo aparece direto no estado final, sem deslocamento nem fade.
3. **Deslocamento pequeno, duração curta.** Quando houver reveal de entrada, o teto é 8–16px de deslocamento, 300–400ms, easing `power1.out`/equivalente — nunca o deslocamento grande (40–48px) e duração longa (650ms+) que a implementação anterior usava.
4. **Poucos elementos-chave por view, não a página inteira.** Reserva-se reveal de entrada para 1–2 elementos por seção (ex.: o headline do Hero), nunca para todas as 7+ seções simultaneamente.
5. Efeitos contínuos não relacionados a scroll-reveal (ex.: `FloatAnimation`) não são afetados por esta política de visibilidade, mas devem igualmente respeitar `prefers-reduced-motion`.

## Tratamento de imagem

Fotografia lifestyle sob luz quente ("golden hour"), pessoas em ação/interação real com comida ou ambiente, cores saturadas e vivas — nunca fotografia de estúdio fria, nunca still de prato isolado em fundo branco de catálogo. Onde a foto se sobrepõe a um bloco de cor (ver Layout acima), o corte da imagem é feito por máscara/alpha real da própria imagem, nunca por `clip-path` geométrico genérico simulando um recorte orgânico.

## O que este documento não decide

Composição final de cada seção da landing (hero, sobre, serviços, depoimentos, etc.) é responsabilidade de quem reconstrói `src/components/landing/*` sobre esta fundação — este documento fixa o sistema (cor, tipo, espaço, elevação, ritmo, motion, imagem), não o layout seção a seção.
