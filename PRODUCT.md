# PRODUCT.md — Luciana Nutri

Contexto duradouro do produto. Deriva integralmente de `docs/CONTENT-TRUTH.md` — nenhum fato aqui é inventado; onde este documento generaliza, a fonte literal está em CONTENT-TRUTH.

## O que é

Site institucional de uma profissional liberal (nutricionista) com dois objetivos de negócio, nesta ordem de prioridade:

1. **Captação de lead por WhatsApp** — o visitante clica em "Agende sua Consulta" (ou variações) e é levado a uma conversa pré-formatada no WhatsApp (`https://wa.me/558681039944`, mensagem "Olá, Luciana! Gostaria de agendar uma consulta."). Este é o caminho de conversão primário; qualquer regressão aqui é a pior falha possível do produto.
2. **Venda de um e-book (infoproduto)** — R$ 49,90, comprado via checkout próprio integrado ao Mercado Pago (`/checkout` → `POST /api/create-preference` → redirecionamento ao Mercado Pago → webhook `/api/mp-webhook` confirma pagamento aprovado → e-mail automático via Brevo entrega o link de download).

Não há formulário de contato tradicional nem captura de e-mail avulsa: toda a conversão do site passa por um destes dois caminhos.

## Quem é a Luciana

Luciana Soares, nutricionista, com formação em Nutrição e especialização em comportamento alimentar. Atende online e presencialmente. Seu posicionamento central, nas suas próprias palavras (Seção 2.3 do CONTENT-TRUTH): ajudar pessoas a "encontrarem o equilíbrio e o prazer na alimentação", com "abordagem humanizada e sem julgamentos", indo "além de contar calorias". O produto existe para transmitir isso visualmente: o oposto de dieta como privação e de nutrição como ciência fria/punitiva.

Métricas que ela usa para construir autoridade (Seção 2.3): 500+ pacientes atendidos, 5+ anos de experiência, 100% planos personalizados.

Serviços oferecidos (Seção 2.4): consultas online e presenciais, plano alimentar personalizado, acompanhamento nutricional contínuo, educação alimentar.

## Quem é o visitante

Uma pessoa que já tentou dietas restritivas antes e carrega alguma fadiga ou desconfiança em relação a elas — o site fala diretamente com essa cicatriz ("sem restrições", "sem julgamentos", "chega de dietas restritivas"). Chega ao site por dois caminhos prováveis: (a) buscando uma nutricionista para consulta (decisão mais lenta, precisa de prova social e credibilidade — depoimentos com resultados reais, seção 2.5), ou (b) capturado pelo pitch do e-book (decisão de impulso, baixo valor — R$ 49,90 —, precisa de clareza de oferta e um CTA de compra óbvio).

O visitante não é um paciente clínico buscando um dashboard de dados nem um consumidor de luxo buscando exclusividade: é alguém buscando acolhimento e permissão para comer bem sem culpa.

## Estrutura do produto (para contexto, não para reimplementar)

Rotas: `/` (landing, estática), `/checkout` (venda do e-book, client component), `/api/create-preference` e `/api/mp-webhook` (integração Mercado Pago), `/sitemap.xml`, `/robots.txt`, imagens OG dinâmicas.

Seções da landing, em ordem: Header (nav fixo) → Hero → Sobre → Serviços → Depoimentos → Leituras Recomendadas → E-book → Contato → Footer. O detalhamento textual completo de cada seção, todos os CTAs e seus destinos, e os riscos de regressão estão em `docs/CONTENT-TRUTH.md` — este arquivo não repete essa lista para evitar que as duas fontes divirjam.

## Riscos que qualquer trabalho neste produto deve respeitar

- O botão de WhatsApp (Header e Hero) e o fluxo de checkout do e-book são os únicos dois caminhos de receita do site; nenhuma mudança visual pode quebrar seus destinos ou estados.
- Os IDs de âncora do menu (`#inicio`, `#sobre`, `#servicos`, `#depoimentos`, `#ebook`, `#contato`) sustentam a navegação por scroll suave do Header.
- SEO depende do `layout.tsx` (metadata, OG) e da rota `sitemap.ts` permanecerem íntegros, e do conteúdo da página nascer visível para crawlers (não atrás de animação condicionada a JS).

## Direção visual em vigor

O mundo visual "Mesa Farta" (calor, fartura, comida real, sem clichê clínico) foi escolhido pelo cliente e está especificado em `DESIGN.md`. Este PRODUCT.md não define paleta, tipografia ou layout — isso é responsabilidade do DESIGN.md.
