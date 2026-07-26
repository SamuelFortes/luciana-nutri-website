# Luciana Nutri — Website

Site institucional + checkout de e-book da nutricionista Luciana Soares, feito em Next.js (App Router).

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Variáveis de ambiente

Copie `.env.example` para `.env.local` e preencha:

| Variável | Descrição |
|---|---|
| `MP_ACCESS_TOKEN` | Access token de produção do Mercado Pago (Developers → sua aplicação → Credenciais) |
| `NEXT_PUBLIC_SITE_URL` | URL pública do site (usada em SEO, sitemap, robots.txt e nos retornos do checkout) |
| `BREVO_API_KEY` | API key do Brevo (Settings → SMTP & API) |
| `BREVO_SENDER_EMAIL` / `BREVO_SENDER_NAME` | Remetente verificado no Brevo para o envio do e-book |
| `EBOOK_DOWNLOAD_URL` | Link direto para o PDF do e-book |

Sem essas variáveis, o site funciona normalmente, mas o fluxo de compra do e-book (`/checkout`) não consegue criar a preferência de pagamento nem enviar o e-mail de entrega.

## Scripts

| Comando | O que faz |
|---|---|
| `npm run dev` | Servidor de desenvolvimento com hot-reload |
| `npm run build` | Build de produção |
| `npm run start` | Sobe o build de produção (precisa rodar `build` antes) |
| `npm run lint` | Lint do projeto |

## Deploy

Hospedado no [Render](https://render.com) como **Web Service** (não Static Site — o projeto tem rotas de API em `src/app/api/`, que precisam de servidor Node rodando):

- Build command: `npm install && npm run build`
- Start command: `npm run start`
- Configurar as variáveis de ambiente da tabela acima no painel do serviço.

## Estrutura

- `src/app/page.tsx` — landing page
- `src/app/checkout/` — página de compra do e-book + integração com Mercado Pago
- `src/app/api/create-preference/` — cria a preferência de pagamento (Checkout Pro) no Mercado Pago
- `src/app/api/mp-webhook/` — recebe a notificação de pagamento aprovado e dispara o e-mail via Brevo
- `src/components/landing/` — seções da home
- `src/components/ui/` — componentes de UI (shadcn/radix)
