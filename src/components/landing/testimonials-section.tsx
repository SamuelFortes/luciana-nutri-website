import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const testimonials = [
  {
    id: "testimonial-1",
    name: "Juliana S.",
    quote: "A Luciana mudou minha vida! Aprendi a comer sem culpa e com muito mais energia. O acompanhamento dela é incrível e super humano.",
    result: "-11kgs e voltou a usar biquíni na praia!",
    initials: "JS",
  },
  {
    id: "testimonial-2",
    name: "Marcos P.",
    quote: "Nunca pensei que conseguiria atingir meus objetivos de forma tão leve. O plano alimentar é delicioso e fácil de seguir. Recomendo demais!",
    result: "-18 kgs e colocou o shape",
    initials: "MP",
  },
  {
    id: "testimonial-3",
    name: "Carla F.",
    quote: "Profissional maravilhosa! Muito atenciosa e dedicada. Me ajudou a entender meu corpo e a fazer as pazes com a comida.",
    result: "-19.5 kgs e feliz com as roupas",
    initials: "CF",
  },
];

export function TestimonialsSection() {
  const images = PlaceHolderImages;

  return (
    <section id="depoimentos" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">O que meus pacientes dizem</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Histórias de transformação e bem-estar que me inspiram todos os dias.
            </p>
          </div>
        </div>
        <div className="mt-12 flex justify-center">
           <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-sm sm:max-w-xl md:max-w-4xl lg:max-w-6xl"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => {
                const avatarImage = images.find(img => img.id === `${testimonial.id}-avatar`);
                const beforeImage = images.find(img => img.id === `${testimonial.id}-before`);
                const afterImage = images.find(img => img.id === `${testimonial.id}-after`);
                
                return (
                  <CarouselItem key={testimonial.id} className="md:basis-1/1">
                    <div className="p-1">
                      <Card className="h-full shadow-md overflow-hidden">
                        <CardContent className="grid md:grid-cols-2 items-center justify-center gap-8 p-6 md:p-10">
                           <div className="flex flex-col justify-center space-y-4 text-center md:text-left">
                              <p className="text-lg italic text-foreground leading-relaxed">
                                "{testimonial.quote}"
                              </p>
                              <div className="flex items-center justify-center md:justify-start gap-3 pt-2">
                                <Avatar className="h-12 w-12">
                                  {avatarImage && <AvatarImage src={avatarImage.imageUrl} alt={testimonial.name} data-ai-hint={avatarImage.imageHint} />}
                                  <AvatarFallback>{testimonial.initials}</AvatarFallback>
                                </Avatar>
                                <span className="font-semibold text-lg">{testimonial.name}</span>
                              </div>
                           </div>
                           <div className="flex flex-col items-center gap-4">
                               <div className="grid grid-cols-2 gap-4 w-full">
                                    {beforeImage && (
                                        <div className="relative aspect-[2/3] w-full overflow-hidden rounded-lg shadow-lg">
                                            <Image src={beforeImage.imageUrl} alt={`Antes - ${testimonial.name}`} fill className="object-cover" data-ai-hint={beforeImage.imageHint} />
                                            <div className="absolute bottom-2 left-2 bg-black/50 text-white px-2 py-1 text-xs rounded-md">Antes</div>
                                        </div>
                                    )}
                                    {afterImage && (
                                        <div className="relative aspect-[2/3] w-full overflow-hidden rounded-lg shadow-lg">
                                            <Image src={afterImage.imageUrl} alt={`Depois - ${testimonial.name}`} fill className="object-cover" data-ai-hint={afterImage.imageHint} />
                                            <div className="absolute bottom-2 left-2 bg-primary/80 text-primary-foreground px-2 py-1 text-xs rounded-md">Depois</div>
                                        </div>
                                    )}
                               </div>
                               <p className="font-semibold text-primary text-center mt-2">{testimonial.result}</p>
                           </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
