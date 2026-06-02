import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";

const tips = [
  {
    id: "tip-1",
    title: "5 Mitos sobre Dietas Detox",
    excerpt: "Descubra a verdade por trás das dietas detox e como realmente limpar seu organismo.",
  },
  {
    id: "tip-2",
    title: "A Importância da Hidratação",
    excerpt: "Saiba por que beber água é crucial para sua saúde e quantas vezes você deve se hidratar.",
  },
  {
    id: "tip-3",
    title: "Lanches Saudáveis para o Dia a Dia",
    excerpt: "Ideias práticas e deliciosas para manter a energia entre as refeições principais.",
  },
];

export function TipsSection() {
  const images = PlaceHolderImages;

  return (
    <section id="dicas" className="w-full bg-secondary py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Blog & Dicas de Nutrição</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Informações e dicas para enriquecer sua jornada por uma vida mais saudável.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tips.map((tip) => {
            const image = images.find(img => img.id === tip.id);
            return (
              <Card key={tip.id} className="overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl">
                 {image && (
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={image.imageUrl}
                      alt={tip.title}
                      width={600}
                      height={400}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={image.imageHint}
                    />
                  </div>
                 )}
                <CardHeader>
                  <CardTitle className="font-headline">{tip.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{tip.excerpt}</p>
                   <Link href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Leia mais <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
