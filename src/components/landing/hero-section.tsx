import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-nutritionist");

  return (
    <section id="inicio" className="relative w-full overflow-hidden bg-secondary">
      <div className="container mx-auto grid min-h-[calc(100vh-5rem)] items-center gap-12 px-4 md:grid-cols-2 md:px-6">
        <div className="flex flex-col items-start space-y-6 text-left">
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Transforme sua relação com a comida.
          </h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl">
            Descubra o prazer de uma alimentação saudável e equilibrada, sem restrições e com foco no seu bem-estar.
          </p>
          <Button size="lg" asChild>
            <Link href="#contato">Agende sua Consulta</Link>
          </Button>
        </div>
        <div className="relative flex h-full min-h-[50vh] items-center justify-center">
          {heroImage && (
            <div className="relative h-[80vh] w-full max-w-md overflow-hidden rounded-t-full">
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover object-top"
                priority
                data-ai-hint={heroImage.imageHint}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
