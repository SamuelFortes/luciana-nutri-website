"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { FadeIn } from "@/components/ui/motion";
import { Quote } from "lucide-react";

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
  return (
    <section id="depoimentos" className="w-full bg-secondary py-20 md:py-28 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-foreground">
              O que meus pacientes dizem
            </h2>
            <p className="max-w-[900px] mx-auto font-body text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Histórias de transformação e bem-estar que me inspiram todos os dias.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} className="mt-16 flex justify-center">
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full max-w-sm sm:max-w-2xl md:max-w-4xl"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/1">
                  <div className="p-2 md:p-4">
                    <Card className="h-full border-border/40 bg-card shadow-sm">
                      <CardContent className="flex flex-col items-center justify-center gap-8 p-8 md:p-14 text-center">
                        <Quote className="h-10 w-10 text-primary opacity-40" />
                        <p className="font-headline text-2xl md:text-3xl italic leading-relaxed text-foreground">
                          "{testimonial.quote}"
                        </p>
                        <div className="flex flex-col items-center justify-center gap-4 pt-4">
                          <Avatar className="h-16 w-16 bg-muted text-muted-foreground">
                            <AvatarFallback className="font-body text-lg font-bold">{testimonial.initials}</AvatarFallback>
                          </Avatar>
                          <div className="flex flex-col items-center space-y-1">
                            <span className="font-body text-xl font-bold text-foreground">{testimonial.name}</span>
                            <span className="font-body font-bold text-primary dark:text-[#FB923C]">{testimonial.result}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-12 bg-background border-border text-foreground hover:bg-accent" />
            <CarouselNext className="hidden sm:flex -right-12 bg-background border-border text-foreground hover:bg-accent" />
          </Carousel>
        </FadeIn>
      </div>
    </section>
  );
}
