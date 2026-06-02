import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ShoppingCart } from "lucide-react";

export function EbookSection() {
  const ebookImage = PlaceHolderImages.find((img) => img.id === "ebook-cover");

  return (
    <section id="ebook" className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto grid items-center gap-12 px-4 md:grid-cols-2 md:px-6">
        <div className="flex flex-col justify-center space-y-6">
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl">
              Desvende os Segredos da Nutrição
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Meu novo e-book é o guia definitivo para você transformar sua alimentação e alcançar seus objetivos de forma saudável e prazerosa. Chega de dietas restritivas!
            </p>
          </div>
          <Card className="bg-background shadow-lg">
            <CardContent className="p-6 text-center">
              <p className="text-lg font-semibold text-muted-foreground">Oferta Especial por Tempo Limitado</p>
              <p className="my-2 text-4xl font-bold text-primary">Apenas R$ 49,90</p>
              <Button size="lg" className="w-full mt-4">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Adquirir Agora
              </Button>
               <p className="mt-3 text-xs text-muted-foreground">O preço pode aumentar a qualquer momento.</p>
            </CardContent>
          </Card>
        </div>
        <div className="relative mx-auto w-full max-w-sm">
          {ebookImage && (
             <div className="aspect-[3/4] overflow-hidden rounded-xl shadow-2xl transition-transform duration-300 hover:scale-105">
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
        </div>
      </div>
    </section>
  );
}
