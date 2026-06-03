"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, CheckCircle, Shield, Star, ArrowLeft, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { PlaceHolderImages } from "@/lib/placeholder-images";

// TODO: Substitua pelo link de pagamento gerado no painel do Mercado Pago
// Acesse: https://www.mercadopago.com.br/tools/create
const MERCADO_PAGO_LINK = "https://link.mercadopago.com.br/SEU-LINK-AQUI";

const EBOOK_BENEFITS = [
  "Guia completo com mais de 80 páginas",
  "Cardápios semanais prontos para usar",
  "Mais de 40 receitas saudáveis e saborosas",
  "Estratégias para comer bem sem sofrer",
  "Dicas para leitura de rótulos e compras",
  "Bônus: Lista de substituições inteligentes",
];

const TESTIMONIALS = [
  {
    name: "Ana Paula S.",
    text: "Mudou completamente minha relação com a comida. Recomendo demais!",
    stars: 5,
  },
  {
    name: "Carlos M.",
    text: "Prático, direto e sem enrolação. Já apliquei na semana seguinte.",
    stars: 5,
  },
  {
    name: "Fernanda L.",
    text: "As receitas são incríveis e fáceis de fazer no dia a dia.",
    stars: 5,
  },
];

export default function CheckoutPage() {
  const ebookImage = PlaceHolderImages.find((img) => img.id === "ebook-cover");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur sticky top-0 z-10">
        <div className="container mx-auto flex items-center justify-between px-4 py-3 md:px-6">
          <Link
            href="/#ebook"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar ao site
          </Link>
          <p className="text-sm font-semibold text-primary">Compra 100% Segura</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-10 md:px-6 md:py-16">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16 items-start">

            {/* Left — capa do e-book */}
            <div className="flex flex-col items-center gap-4">
              {ebookImage && (
                <div className="w-full max-w-xs aspect-[3/4] overflow-hidden rounded-xl shadow-2xl">
                  <Image
                    src={ebookImage.imageUrl}
                    alt={ebookImage.description}
                    width={600}
                    height={800}
                    className="h-full w-full object-cover"
                    data-ai-hint={ebookImage.imageHint}
                  />
                </div>
              )}
              {/* avaliações */}
              <div className="flex flex-col items-center gap-1">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">+200 leitoras satisfeitas</p>
              </div>
            </div>

            {/* Right — detalhes e compra */}
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-1">
                  E-book
                </p>
                <h1 className="font-headline text-3xl font-bold tracking-tighter text-foreground md:text-4xl">
                  Desvende os Segredos da Nutrição
                </h1>
                <p className="mt-3 text-muted-foreground">
                  O guia definitivo para transformar sua alimentação e alcançar seus objetivos de forma saudável, sem dietas restritivas e com prazer.
                </p>
              </div>

              {/* O que está incluído */}
              <div>
                <p className="font-semibold text-foreground mb-3">O que você vai receber:</p>
                <ul className="flex flex-col gap-2">
                  {EBOOK_BENEFITS.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <Separator />

              {/* Preço e CTA */}
              <div className="rounded-xl border border-border bg-card p-5 flex flex-col gap-4">
                <div className="flex items-end gap-3">
                  <p className="text-4xl font-bold text-primary">R$ 49,90</p>
                  <p className="text-sm text-muted-foreground line-through mb-1">R$ 97,00</p>
                </div>
                <p className="flex items-center gap-1.5 text-sm font-medium text-foreground">
                  <Zap className="h-4 w-4 text-primary" />
                  Oferta por tempo limitado — o preço pode aumentar a qualquer momento
                </p>
                <Button
                  size="lg"
                  className="w-full text-base font-bold"
                  onClick={() => window.open(MERCADO_PAGO_LINK, "_blank")}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Comprar com Mercado Pago
                </Button>
                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <Shield className="h-3.5 w-3.5" />
                  Pagamento seguro — Pix, cartão de crédito ou boleto
                </div>
              </div>

              {/* Entrega */}
              <p className="text-xs text-muted-foreground text-center">
                Após a confirmação do pagamento, você receberá o e-book por e-mail em até 5 minutos.
              </p>
            </div>
          </div>

          {/* Depoimentos */}
          <div className="mt-16">
            <h2 className="font-headline text-2xl font-bold text-center text-foreground mb-8">
              O que dizem nossas leitoras
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              {TESTIMONIALS.map((t) => (
                <div key={t.name} className="rounded-xl border border-border bg-card p-5 flex flex-col gap-3">
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">"{t.text}"</p>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-border mt-16 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Luciana Soares Nutricionista. Todos os direitos reservados.
      </footer>
    </div>
  );
}
