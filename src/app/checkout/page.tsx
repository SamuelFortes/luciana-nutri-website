"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ShoppingCart,
  CheckCircle,
  Shield,
  Star,
  ArrowLeft,
  Zap,
  Clock,
  RefreshCw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { FadeIn, StaggerContainer, StaggerItem, FloatAnimation, motion } from "@/components/ui/motion";
import { ThemeToggle } from "@/components/theme-toggle";
import { LogoIcon } from "@/components/icons/logo-icon";

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

const TRUST_BADGES = [
  {
    icon: Clock,
    title: "Acesso Imediato",
    desc: "Receba o e-book em até 5 minutos após o pagamento",
  },
  {
    icon: Shield,
    title: "Pagamento Seguro",
    desc: "Pix, cartão de crédito ou boleto bancário",
  },
  {
    icon: RefreshCw,
    title: "7 Dias de Garantia",
    desc: "Não gostou? Devolvemos 100% do seu dinheiro",
  },
];

export default function CheckoutPage() {
  const ebookImage = PlaceHolderImages.find((img) => img.id === "ebook-cover");

  return (
    <div className="min-h-screen bg-background">

      {/* ── Header ── */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/90 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">

          <motion.div whileHover={{ x: -3 }} transition={{ type: "spring", stiffness: 400 }}>
            <Link
              href="/#ebook"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Voltar ao site</span>
            </Link>
          </motion.div>

          <Link href="/" className="flex items-center gap-2 font-bold text-foreground">
            <LogoIcon className="h-6 w-6 text-primary" />
            <span className="font-headline hidden sm:block">LucianaNutri</span>
          </Link>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
              <Shield className="h-3.5 w-3.5 text-primary" />
              Compra Segura
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-secondary">
        {/* Blobs */}
        <motion.div
          className="pointer-events-none absolute -left-40 -top-40 h-[450px] w-[450px] rounded-full bg-primary/20 blur-[110px]"
          animate={{ scale: [1, 1.18, 1], opacity: [0.4, 0.75, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute -right-40 bottom-0 h-[350px] w-[350px] rounded-full bg-accent/50 blur-[90px]"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        <div className="container mx-auto grid items-center gap-10 px-4 py-12 md:grid-cols-2 md:gap-16 md:px-6 md:py-20">

          {/* Capa flutuante */}
          <FadeIn direction="left" className="flex flex-col items-center gap-6">
            <FloatAnimation>
              <motion.div
                whileHover={{ rotate: -2, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="w-full max-w-xs overflow-hidden rounded-2xl shadow-2xl aspect-[3/4]"
              >
                {ebookImage ? (
                  <Image
                    src={ebookImage.imageUrl}
                    alt={ebookImage.description}
                    width={600}
                    height={800}
                    className="h-full w-full object-cover"
                    data-ai-hint={ebookImage.imageHint}
                    priority
                  />
                ) : (
                  <div className="h-full w-full bg-primary/20" />
                )}
              </motion.div>
            </FloatAnimation>

            {/* Estrelas com stagger */}
            <div className="flex flex-col items-center gap-2">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.1, type: "spring", stiffness: 400 }}
                  >
                    <Star className="h-6 w-6 fill-primary text-primary" />
                  </motion.div>
                ))}
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="text-sm font-medium text-muted-foreground"
              >
                +200 leitoras satisfeitas
              </motion.p>
            </div>
          </FadeIn>

          {/* Detalhes + compra */}
          <FadeIn direction="right" className="flex flex-col gap-6">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, ease: "easeOut" }}
                className="mb-1 text-sm font-bold uppercase tracking-widest text-primary"
              >
                E-book exclusivo
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
                className="font-headline text-3xl font-bold tracking-tighter text-foreground leading-[1.2] md:text-4xl"
              >
                Desvende os Segredos da Nutrição
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.52, ease: "easeOut" }}
                className="mt-3 text-muted-foreground md:text-lg"
              >
                O guia definitivo para transformar sua alimentação e alcançar seus objetivos de forma saudável, sem dietas restritivas e com muito prazer.
              </motion.p>
            </div>

            {/* Benefícios */}
            <StaggerContainer className="flex flex-col gap-2.5" delay={0.5}>
              <p className="font-semibold text-foreground">O que você vai receber:</p>
              {EBOOK_BENEFITS.map((benefit) => (
                <StaggerItem key={benefit}>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">{benefit}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <Separator />

            {/* Card de preço */}
            <FadeIn delay={0.6}>
              <div className="relative overflow-hidden rounded-2xl border border-border bg-background p-6 shadow-xl">
                {/* Shimmer */}
                <div className="shimmer pointer-events-none absolute inset-0" />

                {/* Preço */}
                <div className="mb-2 flex items-end gap-3">
                  <div className="relative">
                    <motion.div
                      className="absolute inset-0 rounded-lg bg-primary/20 blur-sm"
                      animate={{ scale: [1, 1.18, 1], opacity: [0.5, 0.9, 0.5] }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <p className="relative text-4xl font-bold text-primary">R$ 49,90</p>
                  </div>
                  <p className="mb-1 text-sm text-muted-foreground line-through">R$ 97,00</p>
                  <span className="mb-1 rounded-full bg-primary/15 px-2.5 py-0.5 text-xs font-bold text-primary">
                    -49%
                  </span>
                </div>

                <p className="mb-5 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                  <Zap className="h-3.5 w-3.5 text-primary" />
                  Oferta por tempo limitado — o preço pode aumentar a qualquer momento
                </p>

                {/* CTA com pulse ring */}
                <div className="relative">
                  <motion.div
                    className="absolute inset-0 rounded-lg bg-primary/30"
                    animate={{ scale: [1, 1.05, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
                  />
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      size="lg"
                      className="relative z-10 w-full text-base font-bold"
                      onClick={() => window.open(MERCADO_PAGO_LINK, "_blank")}
                    >
                      <ShoppingCart className="mr-2 h-5 w-5" />
                      Comprar com Mercado Pago
                    </Button>
                  </motion.div>
                </div>

                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <Shield className="h-3.5 w-3.5" />
                  Pix · Cartão de crédito · Boleto
                </div>
              </div>
            </FadeIn>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-center text-xs text-muted-foreground"
            >
              Após confirmação do pagamento, você recebe o e-book por e-mail em até 5 minutos.
            </motion.p>
          </FadeIn>
        </div>
      </section>

      <div className="h-24 bg-gradient-to-b from-secondary to-background" aria-hidden />

      {/* ── Trust badges ── */}
      <section className="container mx-auto px-4 pb-16 md:px-6">
        <StaggerContainer className="grid gap-6 sm:grid-cols-3">
          {TRUST_BADGES.map((badge) => {
            const Icon = badge.icon;
            return (
              <StaggerItem key={badge.title}>
                <motion.div
                  whileHover={{ y: -5, boxShadow: "0 12px 40px -8px hsl(var(--primary)/0.2)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center shadow-sm"
                >
                  <div className="rounded-full bg-primary/10 p-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="font-semibold text-foreground">{badge.title}</p>
                  <p className="text-sm text-muted-foreground">{badge.desc}</p>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </section>

      <div className="h-24 bg-gradient-to-b from-background to-secondary" aria-hidden />

      {/* ── Depoimentos ── */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="mb-10 text-center">
            <h2 className="font-headline text-2xl font-bold text-foreground sm:text-3xl">
              O que dizem nossas leitoras
            </h2>
            <p className="mt-2 text-muted-foreground">
              Resultados reais de quem já transformou sua alimentação
            </p>
          </FadeIn>

          <StaggerContainer className="grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <StaggerItem key={t.name}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 280 }}
                  className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-6 shadow-md"
                >
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="flex-1 text-sm italic text-muted-foreground">"{t.text}"</p>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <div className="h-24 bg-gradient-to-b from-secondary to-background" aria-hidden />

      {/* ── Footer ── */}
      <footer className="py-10 text-center text-xs text-muted-foreground">
        <div className="mb-2 flex items-center justify-center gap-2">
          <LogoIcon className="h-5 w-5 text-primary" />
          <span className="font-headline text-sm font-bold text-foreground">LucianaNutri</span>
        </div>
        <p>© {new Date().getFullYear()} Luciana Soares Nutricionista. Todos os direitos reservados.</p>
        <motion.div whileHover={{ x: -3 }} transition={{ type: "spring", stiffness: 400 }} className="mt-3 inline-block">
          <Link href="/#ebook" className="text-primary hover:underline">
            ← Voltar ao site
          </Link>
        </motion.div>
      </footer>
    </div>
  );
}
