# Contrato de Verdade do Produto - Luciana Nutri Website

Este documento estabelece a "verdade" absoluta do frontend atual. Ele serve como contrato para qualquer reconstrução da interface. Se não estiver aqui, pode ser descartado; se estiver aqui, deve ser rigorosamente mantido.

## 1. MAPA DE ROTAS

- `/` (via `src/app/page.tsx`): Página principal (Landing Page). Rota estática/SSG. Agrega as seções do site.
- `/checkout` (via `src/app/checkout/page.tsx`): Página de venda do e-book. Renderizada no cliente (Client Component com `useSearchParams` encapsulado em `Suspense`) para capturar status da URL.
- `/api/create-preference` (via `src/app/api/create-preference/route.ts`): Rota de API (POST), dinâmica. Criação da intenção de pagamento no Mercado Pago.
- `/api/mp-webhook` (via `src/app/api/mp-webhook/route.ts`): Rota de API (GET/POST), dinâmica. Recebe notificação de pagamento do Mercado Pago e envia o e-mail.
- `/sitemap.xml` (via `src/app/sitemap.ts`): Geração dinâmica do mapa do site para SEO.
- `/robots.txt` (via `src/app/robots.ts`): Geração das permissões para rastreadores web.
- `/opengraph-image` e `/twitter-image`: Rotas dinâmicas que geram a imagem de metadados das redes sociais via JSX (`next/og`).

---

## 2. INVENTÁRIO DE SEÇÕES

Para os componentes em `src/components/landing/`, documenta-se seu propósito, ordem na página principal e todo o texto literal.

### 2.1. header.tsx
- **Propósito:** Navegação principal, troca de tema e botão CTA persistente.
- **Ordem:** Fixo no topo de todas as sessões.
- **Textos literais:**
  - "LucianaNutri"
  - "Início"
  - "Sobre"
  - "Serviços"
  - "Depoimentos"
  - "E-book"
  - "Contato"
  - "Agende sua Consulta"
  - "Abrir menu" (sr-only, invisível)
  - "Menu de navegação" (VisuallyHidden, leitores de tela)

### 2.2. hero-section.tsx
- **Propósito:** Primeira dobra (First Fold) que introduz a profissional e capta a atenção inicial.
- **Ordem:** 1ª seção da `page.tsx`
- **Textos literais:**
  - "Transforme sua relação com a comida."
  - "Descubra o prazer de uma alimentação saudável e equilibrada, sem restrições e com foco no seu bem-estar."
  - "Agende sua Consulta"

### 2.3. about-section.tsx
- **Propósito:** Apresentação da nutricionista, missão e métricas profissionais.
- **Ordem:** 2ª seção
- **Textos literais:**
  - "Sobre Mim"
  - "Sou Luciana Soares, nutricionista apaixonada por ajudar pessoas a encontrarem o equilíbrio e o prazer na alimentação. Minha missão é guiar você em uma jornada de autoconhecimento e saúde, com uma abordagem humanizada e sem julgamentos."
  - "Com formação em Nutrição e especialização em comportamento alimentar, acredito que comer bem vai além de contar calorias. Trata-se de nutrir o corpo e a mente, respeitando suas individualidades e seu estilo de vida. Vamos juntos construir hábitos saudáveis e duradouros."
  - "Pacientes Atendidos" (acompanha contador até 500+)
  - "Anos de Experiência" (acompanha contador até 5+)
  - "Planos Personalizados" (acompanha contador até 100%)

### 2.4. services-section.tsx
- **Propósito:** Lista de abordagens e serviços de nutrição.
- **Ordem:** 3ª seção
- **Textos literais:**
  - "Serviços Oferecidos"
  - "Ofereço um cuidado completo e individualizado para transformar sua saúde e bem-estar."
  - "Consultas Online e Presencial"
  - "Atendimento personalizado onde você estiver, com a mesma qualidade e atenção."
  - "Plano Alimentar Personalizado"
  - "Planos criados sob medida para seus objetivos, rotina e preferências alimentares."
  - "Acompanhamento Nutricional"
  - "Suporte contínuo para ajustar seu plano, tirar dúvidas e manter a motivação em alta."
  - "Educação Alimentar"
  - "Aprenda a fazer escolhas conscientes e a construir uma relação saudável com a comida."

### 2.5. testimonials-section.tsx
- **Propósito:** Prova social exibindo resultados dos clientes (antes e depois).
- **Ordem:** 4ª seção
- **Textos literais:**
  - "O que meus pacientes dizem"
  - "Histórias de transformação e bem-estar que me inspiram todos os dias."
  - "A Luciana mudou minha vida! Aprendi a comer sem culpa e com muito mais energia. O acompanhamento dela é incrível e super humano."
  - "Juliana S."
  - "-11kgs e voltou a usar biquíni na praia!"
  - "Nunca pensei que conseguiria atingir meus objetivos de forma tão leve. O plano alimentar é delicioso e fácil de seguir. Recomendo demais!"
  - "Marcos P."
  - "-18 kgs e colocou o shape"
  - "Profissional maravilhosa! Muito atenciosa e dedicada. Me ajudou a entender meu corpo e a fazer as pazes com a comida."
  - "Carla F."
  - "-19.5 kgs e feliz com as roupas"
  - "Antes" (label na imagem)
  - "Depois" (label na imagem)

### 2.6. tips-section.tsx
- **Propósito:** Fornecer leitura complementar extraindo artigos externos.
- **Ordem:** 5ª seção
- **Textos literais:**
  - "Leituras Recomendadas"
  - "Artigos de fontes confiáveis, selecionados por Luciana — conteúdo de terceiros, não de autoria dela."

### 2.7. ebook-section.tsx
- **Propósito:** Pitch e CTA para o infoproduto (E-book).
- **Ordem:** 6ª seção
- **Textos literais:**
  - "Desvende os Segredos da Nutrição"
  - "Meu novo e-book é o guia definitivo para você transformar sua alimentação e alcançar seus objetivos de forma saudável e prazerosa. Chega de dietas restritivas!"
  - "Oferta Especial por Tempo Limitado"
  - "Apenas R$ 49,90"
  - "Adquirir Agora"
  - "O preço pode aumentar a qualquer momento."

### 2.8. contact-section.tsx
- **Propósito:** Informações de contato direto e localização física.
- **Ordem:** 7ª seção
- **Textos literais:**
  - "Entre em Contato"
  - "Tem alguma dúvida ou quer agendar sua consulta? Fale comigo por um dos canais abaixo."
  - "Canais de Atendimento"
  - "Localização"
  - "Av. Principal, 123 - Sala 4, São Paulo - SP"

### 2.9. footer.tsx
- **Propósito:** Rodapé de encerramento da página.
- **Ordem:** Última seção
- **Textos literais:**
  - "LucianaNutri"
  - "© [AnoAtual] Luciana Soares. Todos os direitos reservados."

### 2.10. recommended-article-card.tsx
- **Propósito:** Renderizar cada artigo consumido na `tips-section.tsx`.
- **Ordem:** Renderizado dentro da seção 5.
- **Textos literais:**
  - "Leia no " (Ex: "Leia no Revista Saúde")

---

## 3. CTAs E DESTINOS

- **Header / Hero Section:**
  - "Agende sua Consulta" -> Link montado para o WhatsApp com mensagem pré-formatada via `getWhatsAppLink()`.
- **Navegação (Header):**
  - "Início" -> href: `#inicio`
  - "Sobre" -> href: `#sobre`
  - "Serviços" -> href: `#servicos`
  - "Depoimentos" -> href: `#depoimentos`
  - "E-book" -> href: `#ebook`
  - "Contato" -> href: `#contato`
- **Ebook Section:**
  - "Adquirir Agora" -> href: `/checkout`
- **Contact Section:**
  - Botão Ícone WhatsApp -> `https://wa.me/558681039944`
  - Botão Ícone Instagram -> `https://www.instagram.com/nutri.lusoares/`
  - Botão Ícone Email -> `#`
- **Footer:**
  - Ícone WhatsApp -> `https://wa.me/558681039944`
  - Ícone Instagram -> `https://www.instagram.com/nutri.lusoares/`
  - Ícone Email -> `#`
- **Recommended Article Card:**
  - "Leia no [Fonte]" -> href: `article.link` (Destino externo, abre em nova aba).
- **Checkout Page (Bônus, página de conversão):**
  - "Comprar com Mercado Pago" -> handler assíncrono `handleCheckout` que requisita o backend para criar a preferência e redireciona ao portal do MP.
  - "Voltar ao site" -> href: `/#ebook`

---

## 4. INTEGRAÇÕES E CONTRATOS

### 4.1. WhatsApp (`src/lib/whatsapp.ts`)
- **A UI fornece:** Chamada de função `getWhatsAppLink(mensagem)`.
- **A UI recebe:** Um link URL no formato da API `wa.me`, passando o número (`558681039944`) e o texto encodeado (`Olá, Luciana! Gostaria de agendar uma consulta.`).

### 4.2. Fluxo de pagamento do e-book (Mercado Pago)
Arquivos envolvidos: `src/app/api/create-preference/route.ts` + `src/lib/mercado-pago.ts` + `src/app/checkout/page.tsx`
- **A UI fornece:** Uma requisição POST sem corpo.
- **O servidor faz:** Configura o cliente do Mercado Pago (`MP_ACCESS_TOKEN`) e cria a preference com os dados do E-book (R$ 49.90). Configura o `back_urls` para voltar pro frontend e o `notification_url` para o webhook.
- **A UI recebe:** JSON contendo o link de redirecionamento do MP (`{ initPoint: string }`).

### 4.3. Webhook do MP (`src/app/api/mp-webhook/route.ts`)
- **O Mercado Pago fornece:** POST no webhook notificando atualização de pagamento.
- **A UI/Servidor reage:** Busca os detalhes com `id` e se for `approved`, extrai `payer.email` e envia para disparo do E-book (Brevo).

### 4.4. Envio de E-mail Brevo (`src/lib/send-ebook-email.ts`)
- **Contrato:** Requisição de disparo por API (POST HTTP).
- **Enviado:** O endereço de e-mail do cliente, a string HTML padrão e os cabeçalhos com o `api-key`.
- **Retorno:** Não retorna os dados para o frontend, mas o backend valida o status (se der erro, joga exceção).

### 4.5. Artigos recomendados (`src/lib/recommended-articles.ts`)
- **Contrato:** Consumo de um feed RSS em XML (`https://saude.abril.com.br/alimentacao/feed/`).
- **A UI (Servidor) fornece:** O link do Feed.
- **A UI recebe:** Array customizado (3 itens limpos) contendo título, excerto (até 140 char), link, domínio da fonte e favicon, via `rss-parser`.

### 4.6. Imagens Simuladas (`src/lib/placeholder-images.ts` / `.json`)
- **Contrato:** Leitura síncrona do JSON injetando descrições e URLs do Unsplash para renderização das imagens na Hero, About, Ebook e Testimonials.

### 4.7. Variáveis de Ambiente (`.env.example`)
- `MP_ACCESS_TOKEN`
- `NEXT_PUBLIC_SITE_URL`
- `BREVO_API_KEY`
- `BREVO_SENDER_EMAIL`
- `BREVO_SENDER_NAME`
- `EBOOK_DOWNLOAD_URL`

---

## 5. SUPERFÍCIE DE SEO E METADADOS

- **Configurações Padrão (`layout.tsx`):**
  - **Title:** `Luciana Soares Nutricionista` (Default) e template (`%s | Luciana Soares Nutricionista`).
  - **Description:** `Consultas de nutrição online e presencial com Luciana Soares: planos alimentares personalizados, acompanhamento nutricional e educação alimentar sem dietas restritivas.`
  - **Open Graph:** Tipo `website`, Locale `pt_BR`, `url` igual ao `NEXT_PUBLIC_SITE_URL`.
  - **Twitter:** Card do tipo `summary_large_image`.
- **Metadados em `sitemap.ts`:**
  - Gera `/` (peso 1) e `/checkout` (peso 0.8) mensalmente.
- **Metadados em `robots.ts`:**
  - Permite acesso root (`/`) total e aponta o sitemap da URL base.
- **OG Images Dinâmicas (`opengraph-image.tsx`, `twitter-image.tsx`, `src/lib/og-image.tsx`):**
  - Renderiza uma imagem PNG (1200x630px) no próprio servidor usando `next/og`. O design consiste na marca "Luciana Nutri" e no slogan "Nutrição personalizada para transformar sua relação com a comida", num fundo de gradiente.

---

## 6. ASSETS

Conteúdo e localização de arquivos estáticos da pasta `public/` referenciados nas páginas (outros assets podem existir mas não são referenciados no código mapeado):
- `/favicon.svg` (utilizado no Header / Metadata de ícone do site).
- `/images/hero-luciana.jpg` (referenciado pelo `Image` nativo no `hero-section.tsx`).
- `/images/about-luciana.jpg` (referenciado pelo `Image` nativo no `about-section.tsx`).
> *Nota: Demais imagens do site não são locais, mas sim instâncias remotas injetadas via `placeholder-images.json`.*

---

## 7. COMPORTAMENTOS INTERATIVOS

- **Tema Claro/Escuro:**
  Implementado no `theme-toggle.tsx`. Adiciona a classe `.dark` ao HTML caso o `localStorage` indique o tema dark ou se a preferência de media do OS for dark. Há uma suave animação com `framer-motion` alternando ícones Lua/Sol no clique.
- **Menu Mobile:**
  Implementado na `header.tsx` usando um componente `Sheet` do `@radix-ui/react-dialog`. O estado de abertura controla visibilidade e cliques nos links do menu mobile automaticamente disparam a função de fechar a gaveta do menu.
- **Carrosséis:**
  Apresentes na `testimonials-section.tsx` com `Carousel` nativo construído sobre `embla-carousel-react`, configurado em looping (`opts={{ loop: true }}`).
- **Acordeões / Perguntas de FAQ:**
  **Não estão implementados** nas páginas mapeadas, muito embora o pacote `@radix-ui/react-accordion` esteja instanciado no projeto.
- **Toasts:**
  Implementado globalmente pela hierarquia no `<Toaster />` do layout e consumido pelo `useToast()` no `checkout/page.tsx` para apresentar mensagens de alerta como "Não foi possível iniciar o pagamento".
- **Validação de Formulário (`react-hook-form` / `zod`):**
  **Ausente / Inexistente.** Os pacotes estão descritos no `package.json`, porém os 10 arquivos originais de UI da Landing Page não comportam ou acionam tags `<form>`. A seção de contato utiliza estritamente botões com âncoras para links sociais em vez de um sistema de envios de e-mail por formulário.

---

## 8. RISCOS DE REGRESSÃO

1. **Se o redesign quebrar ou isolar a `Hero Section` ou o botão de Contato**, o negócio perde a injeção do lead via **WhatsApp**, causando abandono e perda de conversão primária de consultas.
2. **Se o redesign modificar o link da rota de `/checkout` ou os estados dos botões no `handleCheckout`**, a chamada ao `POST /api/create-preference` do Mercado Pago falhará e as vendas do E-book não ocorrerão.
3. **Se o redesign esquecer de manter a `tips-section` SSR validando array vázio (`if (articles.length === 0) return null`)**, o site pode quebrar (runtime error) caso a API do RSS falhe ou troque a estrutura do portal terceirizado de alimentação (Revista Saúde).
4. **Se o redesign sobrescrever o `layout.tsx` de forma irresponsável**, o ranqueamento orgânico que sustenta as clínicas (SEO) despencará (as tags estáticas e a rota de `sitemap` serão órfãs).
5. **Se o redesign comprometer os IDs do DOM da `Header` (`#inicio`, `#sobre`, etc.)**, toda a navegação "Smooth Scroll" será irremediavelmente quebrada.
