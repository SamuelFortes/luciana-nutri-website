# Pesquisa de Direção de Design — Luciana Nutri (redesign/frontend-v2)

> Documento de **matéria-prima**, não de decisão final. Cada afirmação abaixo é rastreável a uma busca real executada contra a base local da skill `ui-ux-pro-max` (`python .claude/skills/ui-ux-pro-max/scripts/search.py "<query>" --domain <domínio>`, a partir da raiz do repo). Nenhum dado foi inventado; onde a base não retornou algo, isso está dito explicitamente. Não há CSS, componentes ou decisão de design final aqui — é o cardápio para quem for desenhar o prato.

**Produto:** site de nutricionista (consultoria/serviço profissional liberal) com captação de lead via WhatsApp e venda de um infoproduto (e-book) via checkout próprio (Mercado Pago). Site atual: paleta pastel verde-menta + creme, CTA laranja, tipografia Literata (serifa) em corpo e título, landing page padrão de seção única revelada por scroll.

---

## 1. Perfil do produto

Buscas executadas (domínio `product`):

1. `"nutritionist health coach wellness consultation" --domain product`
2. `"online course ebook digital product sales" --domain product`
3. `"professional services consulting personal brand" --domain product`

A base não tem uma categoria literal "nutricionista"/"profissional liberal com infoproduto", mas retorna três perfis próximos que, somados, descrevem o produto real:

- **Biohacking / Longevity App** — style rec. primária *Biomimetic/Organic 2.0*, paleta "Cellular Pink/Red + DNA Blue". Não serve: é para apps de tracking de dados biológicos, não para uma landing de captação humana.
- **Beauty/Spa/Wellness Service** — style rec. primária *Soft UI Evolution + Neumorphism*, secundárias *Glassmorphism*, *Minimalism & Swiss Style*; padrão de landing *Hero-Centric Design + Social Proof*; paleta "Soft pastels (Pink #FFB6C1, Sage #90EE90) + Cream + Gold accents". É o perfil mais próximo do "serviço de bem-estar com atendimento individual e prova social" que o site precisa (a seção de depoimentos/antes-depois já existe no CONTENT-TRUTH).
- **Mental Health App** — style rec. *Neumorphism + Accessible & Ethical*, padrão *Social Proof-Focused*, paleta "Calm Pastels + Trust colors". Confirma que o domínio saúde/bem-estar cruza com acessibilidade como requisito, não como opção.
- **Online Course/E-learning** e **Digital Products/Downloads** (para a parte de e-book/checkout) — recomendam *Claymorphism + Vibrant & Block-based* / *Motion-Driven*, padrão *Feature-Rich Showcase + Conversion/Social Proof*. Não cabe ao site inteiro (é vibrante e bloco-colorido demais para uma consulta de saúde), mas confirma que a seção de e-book pode ser tratada com um pattern de conversão mais explícito (preço, urgência, CTA) do que o resto do site.
- **B2B Service / Legal Services** — style rec. *Accessible & Ethical + Minimalism & Swiss Style*, paleta "Professional blue + neutral grey" / "Navy Blue + Gold + White". Relevante pela dimensão "profissional liberal formal", mas o tom "advocacia/corporate" é frio demais para um atendimento de nutrição, que é pessoal e acolhedor.
- **Luxury/Premium Brand** — style rec. *Liquid Glass + Glassmorphism*, paleta "Black + Gold (#FFD700) + White". Relevante para dar peso de marca pessoal (Luciana como profissional de alto padrão), mas não deve dominar sozinho — precisa ser temperado com o lado "cuidado humano" e não "luxo frio".

**Conclusão do perfil:** o produto real é uma composição de três eixos que a base trata separadamente — *bem-estar/saúde acolhedora* (Beauty/Spa, Mental Health), *credibilidade profissional* (B2B/Legal → Accessible & Ethical), e *conversão de infoproduto* (Digital Products) só na seção de e-book. Nenhum perfil único da base cobre o site inteiro sozinho.

---

## 2. Estilos candidatos

Buscas executadas (domínio `style`):

4. `"biomimetic organic natural" --domain style`
5. `"accessible ethical healthcare trust" --domain style`
6. `"editorial warm minimal personal brand" --domain style` (retornou Minimalism & Swiss Style)
7. `"soft ui neumorphism spa wellness pastel" --domain style`
8. `"dark mode tech dashboard data dense" --domain style` (busca de controle, para descartar)

| Estilo (ID exato na base) | Descrição da base | Veredito |
|---|---|---|
| **`organic-biophilic`** — Organic Biophilic | Nature, organic shapes, verde, sustentável, arredondado, fluido, wellness, terroso, texturas naturais. Cores: #228B22 (Forest Green), #8B4513 (Earth Brown), #87CEEB (Sky Blue), #F5F5DC (Beige). Cantos 16-24px, sombras naturais. Best for: wellness apps, sustainability, health apps, organic food. Complexidade: Low. | **Serve.** É literalmente "wellness/health apps, organic food" — alinhado ao core do produto — e tem complexidade baixa (viável para o escopo). |
| **`nature-distilled`** — Nature Distilled | Terroso/muted, tons de pele, madeira, solo, areia, terracota, calor humano, materiais orgânicos. Cores: Terracotta #C67B5C, Sand Beige #D4C4A8, Warm Clay #B5651D, Soft Cream #F5F0E1. Complexidade: Low. | **Serve, e é o melhor candidato para substituir o verde-menta/creme atual.** Best for inclui "spa/beauty" e "wellness brands" e entrega uma paleta terrosa quente que rompe com o pastel genérico sem virar corporativo frio. |
| **`accessible-and-ethical`** — Accessible & Ethical | Alto contraste, texto grande (16px+), navegação por teclado, foco visível, semântica. Cores: pares de alto contraste (4.5:1 base, 7:1 reforçado). Best for: government, healthcare, education, legal compliance, public. Complexidade: Low. | **Serve como camada transversal, não como "visual" isolado.** Não é uma estética distinta (é regras de acessibilidade), mas como o produto é saúde/consultoria, essas regras devem ser aplicadas por cima de qualquer estilo visual escolhido — não é opcional. |
| **`minimalism-and-swiss-style`** — Minimalism & Swiss Style | Clean, espaçoso, funcional, grid-based, sans-serif, monocromático (preto/branco), sem sombra/gradiente. Best for: **enterprise apps, dashboards, documentation sites, SaaS platforms, professional tools**. | **Descartado como base de todo o site.** A própria base marca "best for" como enterprise/SaaS/dashboard — exatamente o oposto de uma landing de nutricionista, que precisa de calor humano, fotos, depoimentos. Pode emprestar só a disciplina de grid/whitespace, não a identidade monocromática fria. |
| **`neumorphism`** — Neumorphism | Soft UI, embutido/relevo, pastéis claros (#C8E0F4, #F5E0E8, #E8E8E8), cantos 12-16px, sombras suaves duplas. Best for: health/wellness apps, meditação, fitness trackers. Accessibility: **risk:high**. | **Descartado.** Combina tematicamente com wellness, mas a própria base marca risco de acessibilidade **alto** (contraste baixo por natureza do estilo) — incompatível com o requisito de saúde/profissional liberal que exige confiança e legibilidade, e conflita direto com o item 5 (diretrizes de acessibilidade prioridade 1). |
| **`biomimetic-organic-2-0`** — Biomimetic/Organic 2.0 | Formas celulares/fluidas, animações "breathing", cores bioluminescentes, WebGL, complexidade **High**. Best for: sustainability tech, biotech avançado, arte generativa. | **Descartado.** Complexidade alta (canvas/WebGL, física de animação) é over-engineering para uma landing de captação de um profissional autônomo; e o "biotech avançado" foge do tom humano/acolhedor do produto. |
| **`data-dense-dashboard`** — Data-Dense Dashboard | Múltiplos gráficos/widgets, KPI cards, tabelas de dados. Best for: BI, analytics, enterprise reporting. | **Descartado (busca de controle).** Confirma o que o CHANGE pediu para excluir: nada no site de nutricionista precisa de densidade de dados ou dashboard. |

**Estilos sobreviventes para compor a direção:** `organic-biophilic` + `nature-distilled` como base visual (calor, natureza, wellness), com `accessible-and-ethical` como camada de regras obrigatórias por cima, e um empréstimo pontual de disciplina de grid do `minimalism-and-swiss-style` (sem adotar sua paleta monocromática) para a seção de e-book/checkout, onde clareza de preço e CTA importa mais que atmosfera.

---

## 3. Paletas

Buscas executadas (domínio `color`):

9. `"wellness health natural earthy" --domain color`
10. `"nutrition food healthy consulting" --domain color`
11. `"terracotta earthy artisan warm clay" --domain color`
12. `"spa beauty premium self-care" --domain color`

Paletas concretas retornadas, ligadas aos estilos sobreviventes:

- **Recipe & Cooking App** (busca 11) — Primary `#9A3412`, Secondary `#C2410C`, Accent `#059669`, Background `#FFFBEB`, Foreground `#0F172A`, Card `#FFFFFF`. Nota da base: "Warm terracotta + fresh green". **Casa diretamente com `nature-distilled`** e é a paleta mais forte para romper com o verde-menta genérico do site atual, mantendo um acento verde (recall de "saúde/nutrição") sem repetir o tom pastel.
- **Mental Health App** (busca 9) — Primary `#8B5CF6`, Accent `#059669`, Background `#FAF5FF`. Nota: "Calming lavender + wellness green". Alternativa mais fria/lavanda; mantida como opção B, menos alinhada ao "calor terroso" pedido.
- **Calorie & Nutrition Counter** (busca 10) — Primary `#059669`, Accent `#EA580C`, Background `#ECFDF5`. Nota: "Healthy green + macro orange". **Importante registrar:** esta é estruturalmente a MESMA lógica de cor do site atual (verde + laranja), então é a paleta que a base sugeriria "por padrão" para nutrição — e é exatamente a que o CHANGE pede para abandonar. Cito-a aqui só para mostrar que o problema não é a base estar errada, é que essa opção-padrão já foi tentada e faz o site parecer genérico.
- **Luxury/Premium Brand** (busca 12) — Primary `#1C1917`, Accent `#A16207` (ouro), Background `#FAFAF9`. Nota: "Premium black + gold accent". Serve como reforço de credibilidade/autoridade pessoal (marca da própria Luciana) se for usado com moderação (ex.: acabamentos, não fundo geral) — não veio de uma busca de wellness, mas de "luxury/premium", relevante pelo eixo de credibilidade profissional do item 1.
- Beauty/Spa/Wellness Service (já citada no item 1, busca 1 do domínio product) — Primary `#EC4899`, Secondary `#F9A8D4`, Accent `#8B5CF6`, Background `#FDF2F8`. Nota: "Soft pink + lavender luxury". Descartada como paleta principal: é a mesma família pastel-feminina que o produto já tenta deixar para trás.

**Direção de paleta recomendada com base nos dados:** terracota/verde da Recipe App (`#9A3412` / `#C2410C` / `#059669` / `#FFFBEB`) como base cromática, com o preto/ouro do Luxury Brand reservado para elementos de autoridade (ex.: assinatura, seção "sobre", credenciais) — não como fundo dominante.

---

## 4. Tipografia

Buscas executadas (domínio `typography`):

13. `"warm humanist serif display sans body pairing" --domain typography`
14. `"wellness health editorial friendly" --domain typography`

Pares retornados e avaliação (o problema a resolver: hoje Literata é usada em corpo E título, achatando a hierarquia):

- **Wellness Calm** — Heading **Lora**, Body **Raleway**. Mood: "calm, wellness, health, relaxing, natural, organic". Best for: "Health apps, wellness, spa, meditation, yoga, organic brands". Nota da base: "Lora's organic curves with Raleway's elegant simplicity". **Melhor candidato.** Resolve o problema diretamente: mantém um título com serifa (curvas orgânicas, mantendo algo do tom atual) mas troca o corpo para uma sans (Raleway) — cria hierarquia real entre título e corpo, e o "mood" bate exatamente com o produto (health/wellness/organic).
- **Medical Clean** — Heading **Figtree**, Body **Noto Sans** (sans + sans). Mood: "medical, clean, accessible, professional, healthcare, trustworthy". Alternativa **caso se queira reduzir ainda mais o peso "editorial/serifa"** e priorizar tom clínico-acessível; sacrifica o calor humano da serifa em heading.
- **Soft Rounded** — Heading **Varela Round**, Body **Nunito Sans**. Mood: "soft, rounded, friendly, wellness, soft UI". Combina tematicamente com `neumorphism` (já descartado no item 2), então mantém consistência de descarte — não recomendado como par principal.
- **SaaS Mobile Boutique (Calistoga + Inter)** e **Playful Creative (Fredoka + Nunito)** e **Handwritten Charm (Caveat + Quicksand)** também retornaram nas buscas mas não correspondem ao produto (SaaS/fintech, infantil/lúdico, script pessoal-casual respectivamente) — descartados.

**Recomendação tipográfica:** par **Lora (heading) + Raleway (body)** — resolve o achatamento de hierarquia do site atual mantendo um pouco do caráter de serifa que já existe na marca, sem repetir Literata em tudo.

---

## 5. Diretrizes UX críticas

Buscas executadas (domínio `ux`):

15. `"contrast text focus keyboard navigation" --domain ux`
16. `"touch target size spacing mobile" --domain ux`
17. `"form label error validation helper text" --domain ux`
18. `"navigation anchor link predictable" --domain ux`
19. `"hamburger menu mobile navigation accessible" --domain ux`

**Prioridade 1 — Acessibilidade (severidade High, obrigatórias):**
- *Keyboard Navigation*: navegação completa por teclado com foco visível em todo controle operável; ordem de tab alinhada à ordem visual; nada de keyboard traps.
- *Contrast Readability*: texto escuro sobre fundo claro; nunca cinza-sobre-cinza (`text-gray-900` sobre branco = bom; `text-gray-400` sobre `gray-100` = ruim). Isso restringe diretamente as paletas do item 3 — qualquer combinação escolhida precisa ser validada em contraste real, não só copiada literalmente.
- *Focus Appearance* (severidade Medium, mas normativa WCAG 2.2 AAA): indicador de foco com perímetro mínimo de 2px CSS e contraste de estado 3:1 (`outline: 2px solid currentColor; outline-offset: 2px`).
- *ARIA Labels*: botões só-ícone (ex.: hambúrguer, ícones de WhatsApp/Instagram no rodapé e contato — já presentes no CONTENT-TRUTH) precisam de `aria-label`.

**Prioridade 2 — Toque e interação (severidade High):**
- *Touch Target Size*: não existe um único número universal — usar 44pt (iOS) / 48dp (Android) / regra WCAG Target Size específica para web (mínimo efetivo ~24px CSS + exceções da própria regra). Não tratar 44px como lei universal do site inteiro, mas garantir que nenhum alvo de toque real fique abaixo do mínimo aplicável à plataforma.
- *Touch Spacing*: mínimo de 8px de espaçamento entre alvos de toque adjacentes.
- *Touch Friendly*: aumentar alvos no mobile — nada de reaproveitar tamanho de botão desktop.

**Formulários (severidade High):**
- *Focusable Error Summary*: em qualquer formulário (o site hoje não tem formulário de captura direto, só links de WhatsApp/checkout — mas se o redesign introduzir um formulário de contato/agendamento, isso se aplica) — resumo de erro no topo do form, foco movido para seu heading/container após submit falho, cada item linkado ao campo inválido, mantendo também o erro inline.
- *Error Messages*: erros devem ser anunciados via `aria-live` ou `role="alert"` — nunca só indicação visual (borda vermelha sozinha).

**Navegação (severidade High/Medium):**
- *Smooth Scroll*: os links de âncora do header (`#inicio`, `#sobre`, `#servicos` etc., já mapeados no CONTENT-TRUTH) devem usar `scroll-behavior: smooth`, não pulo direto.
- *Sticky Navigation*: como o header é fixo (confirmado no CONTENT-TRUTH: "Fixo no topo"), o `padding-top` do body/primeira seção precisa compensar a altura do nav para não sobrepor conteúdo.
- *Back Button*: preservar histórico de navegação corretamente (relevante para a navegação entre `/` e `/checkout`).

---

## 6. Motion

Busca adicional executada (domínio `ux`):

20. `"prefers-reduced-motion animation accessibility" --domain ux`
21. `"content hidden initial opacity scroll reveal" --domain ux` (retorno pouco relevante — nenhum item bateu diretamente no termo "opacidade inicial oculta"; resultados foram sobre overflow, smooth scroll e code splitting, sem relação direta — registrado aqui para constar a tentativa)

Busca adicional executada (domínio `gsap`):

22. `"scroll reveal stagger fade in" --domain gsap`

**O que a base oferece (presets de motion, domínio `gsap`):**
- **Scroll Reveal** (tier *Subtle*): `gsap.from(el, { opacity: 0, y: 12, duration: 0.35, ease: 'power1.out', scrollTrigger: {...toggleActions: 'play none none reverse'} })`. Regra explícita da base: **"Don't reveal below-the-fold content needed for SEO/crawlers as invisible-by-default without a no-JS fallback"** — e também instrui usar `matchMedia('(prefers-reduced-motion: reduce)')` para pular a animação e já renderizar o estado final.
- **Stagger List** (tier Subtle e Complex): mesmas regras de fallback de `prefers-reduced-motion`; a variante Complex (SplitText por caractere) é restrita a headlines curtas (~8 palavras), nunca parágrafos.

**Cruzamento com a regra geral do domínio `ux` (busca 20):**
- *Reduced Motion* (severidade High): checar `prefers-reduced-motion` sempre; nunca ignorar a preferência do usuário.
- *Excessive Motion* (severidade High): animar no máximo 1-2 elementos-chave por view; não animar tudo o que se move.

**Observação específica sobre o bug real do projeto:** `src/components/ui/motion.tsx` hoje aplica `initial={{ opacity: 0 }}` (e variantes `hidden: { opacity: 0 }`) a **todas** as seções da landing (`FadeIn`, `StaggerContainer`/`StaggerItem`), sem nenhum `prefers-reduced-motion` check e sem fallback para JS desabilitado/crawlers — ou seja, todo o conteúdo textual da página nasce invisível até o Intersection Observer (`useInView`) disparar. Isso bate ponto a ponto com o "Don't" citado acima (busca 22) e com a regra "Reduced Motion" (busca 20), e já causou um bug real de captura de screenshot no projeto (baselines Playwright).

**Recomendação de política de motion para o redesign, fundamentada nos dados acima:**
1. Nenhuma seção inteira deve nascer com `opacity: 0` como padrão estrutural — isso viola tanto a regra de fallback do preset *Scroll Reveal* quanto o princípio de "1-2 elementos-chave por view", já que hoje é aplicado a 7+ seções simultaneamente.
2. Onde houver reveal de entrada, usar o preset *Scroll Reveal* (tier Subtle) da base como teto de intensidade: deslocamento pequeno (8-16px), 300-400ms, `power1.out`, sem repetir em todas as seções.
3. Implementar obrigatoriamente o `matchMedia`/`prefers-reduced-motion` check que a base recomenda em todos os presets — hoje ausente no `motion.tsx` atual.
4. Garantir estado final renderizado por padrão (conteúdo visível) e a animação como progressão, não como gate de visibilidade — coerente com a regra "Don't reveal below-the-fold content needed for SEO/crawlers as invisible-by-default without a no-JS fallback".
5. Reservar stagger/`SplitText` (tier Complex) no máximo para o headline do Hero, nunca para blocos de texto longos (ex.: parágrafos da seção "Sobre").

---

## Resumo de rastreabilidade

22 buscas reais executadas contra a base (`product`: 3, `style`: 5, `color`: 4, `typography`: 2, `ux`: 6, `gsap`: 1, mais 1 tentativa de busca em `ux` com retorno fraco registrada como tal). Nenhuma paleta, estilo, par tipográfico ou regra de UX/motion citada acima foi inventada — todas vêm de uma das 22 chamadas listadas por número em cada seção.
