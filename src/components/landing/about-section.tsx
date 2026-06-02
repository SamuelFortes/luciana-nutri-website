import Image from "next/image";
import { Card } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function AboutSection() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === "about-nutritionist");

  return (
    <section id="sobre" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto grid items-center gap-12 px-4 md:grid-cols-2 md:px-6">
        <div className="relative mx-auto w-full max-w-md">
          {aboutImage && (
             <div className="aspect-square overflow-hidden rounded-xl shadow-lg">
                <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    width={800}
                    height={800}
                    className="h-full w-full object-cover"
                    data-ai-hint={aboutImage.imageHint}
                />
             </div>
          )}
        </div>
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Sobre Mim</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Sou Luciana Soares, nutricionista apaixonada por ajudar pessoas a encontrarem o equilíbrio e o prazer na alimentação. Minha missão é guiar você em uma jornada de autoconhecimento e saúde, com uma abordagem humanizada e sem julgamentos.
            </p>
          </div>
          <Card className="bg-card p-6">
            <p className="text-card-foreground">
              Com formação em Nutrição e especialização em comportamento alimentar, acredito que comer bem vai além de contar calorias. Trata-se de nutrir o corpo e a mente, respeitando suas individualidades e seu estilo de vida. Vamos juntos construir hábitos saudáveis e duradouros.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
