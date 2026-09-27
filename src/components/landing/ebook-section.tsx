import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ShoppingCart } from "lucide-react";
import { FadeIn } from "@/components/ui/motion";

export function EbookSection() {
  const ebookImage = PlaceHolderImages.find((img) => img.id === "ebook-cover");

  return (
    <section id="ebook" className="relative z-0 w-full bg-primary py-20 md:py-28 lg:py-32">
      <div className="container mx-auto grid items-center gap-12 px-4 md:grid-cols-2 md:px-6">
        {/* Mockup — left */}
        <FadeIn direction="right" className="relative mx-auto w-full max-w-sm">
          {ebookImage && (
            <div
              className="aspect-[3/4] overflow-hidden rounded-xl"
              style={{ boxShadow: "0 24px 48px -16px rgb(36 20 8 / 0.45)" }}
            >
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
        </FadeIn>

        {/* Pitch and price — right */}
        <FadeIn direction="left" className="flex flex-col justify-center space-y-6 text-primary-foreground">
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Desvende os Segredos da Nutrição
            </h2>
            <p className="max-w-[560px] font-body text-primary-foreground/85 md:text-lg">
              Meu novo e-book é o guia definitivo para você transformar sua alimentação e alcançar seus objetivos de forma saudável e prazerosa. Chega de dietas restritivas!
            </p>
          </div>

          <div className="space-y-1">
            <p className="font-body text-sm font-medium uppercase tracking-wide text-primary-foreground/85">
              Oferta Especial por Tempo Limitado
            </p>
            <p className="font-headline text-5xl font-bold md:text-6xl">Apenas R$ 49,90</p>
          </div>

          <div>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/checkout">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Adquirir Agora
              </Link>
            </Button>
            <p className="mt-3 font-body text-xs text-primary-foreground/85">
              O preço pode aumentar a qualquer momento.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
