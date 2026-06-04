"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ShoppingCart, Sparkles } from "lucide-react";
import { FadeIn, FloatAnimation, motion } from "@/components/ui/motion";

export function EbookSection() {
  const ebookImage = PlaceHolderImages.find((img) => img.id === "ebook-cover");

  return (
    <section id="ebook" className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto grid items-center gap-12 px-4 md:grid-cols-2 md:px-6">
        {/* Text content slides from left */}
        <FadeIn direction="left" className="flex flex-col justify-center space-y-6">
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl">
              Desvende os Segredos da Nutrição
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Meu novo e-book é o guia definitivo para você transformar sua alimentação e alcançar seus objetivos de forma saudável e prazerosa. Chega de dietas restritivas!
            </p>
          </div>

          {/* Price card with shimmer glow */}
          <Card className="relative overflow-hidden bg-background shadow-lg">
            {/* Shimmer sweep */}
            <motion.div
              className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-primary/10 to-transparent"
              animate={{ translateX: ["−100%", "200%"] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
            />
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center gap-2 text-lg font-semibold text-muted-foreground">
                <Sparkles className="h-4 w-4 text-primary" />
                Oferta Especial por Tempo Limitado
                <Sparkles className="h-4 w-4 text-primary" />
              </div>

              {/* Pulsing price */}
              <div className="relative my-3 inline-block">
                <motion.div
                  className="absolute inset-0 rounded-xl bg-primary/20 blur-md"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <p className="relative text-4xl font-bold text-primary">Apenas R$ 49,90</p>
              </div>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button size="lg" className="mt-4 w-full">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Adquirir Agora
                </Button>
              </motion.div>
              <p className="mt-3 text-xs text-muted-foreground">O preço pode aumentar a qualquer momento.</p>
            </CardContent>
          </Card>
        </FadeIn>

        {/* Floating book image */}
        <FadeIn direction="right" className="relative mx-auto w-full max-w-sm">
          {ebookImage && (
            <FloatAnimation>
              <motion.div
                whileHover={{ rotate: -3, scale: 1.04 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="aspect-[3/4] overflow-hidden rounded-xl shadow-2xl"
              >
                <Image
                  src={ebookImage.imageUrl}
                  alt={ebookImage.description}
                  width={600}
                  height={800}
                  className="h-full w-full object-cover"
                  data-ai-hint={ebookImage.imageHint}
                />
              </motion.div>
            </FloatAnimation>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
