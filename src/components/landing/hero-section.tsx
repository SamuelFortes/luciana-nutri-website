import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/motion";
import { getWhatsAppLink, SCHEDULE_CONSULTATION_MESSAGE } from "@/lib/whatsapp";

export function HeroSection() {
  return (
    <section id="inicio" className="relative z-10 w-full overflow-visible bg-background">
      <div className="container mx-auto grid min-h-[calc(100vh-5rem)] items-center gap-12 px-4 py-16 md:grid-cols-2 md:px-6">
        {/* Text side */}
        <FadeIn className="flex flex-col items-start space-y-6 text-left" direction="up">
          <h1 className="font-headline text-4xl font-bold leading-[1.15] tracking-tighter text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Transforme sua relação com a comida.
          </h1>

          <p className="max-w-[560px] font-body text-lg text-muted-foreground md:text-xl">
            Descubra o prazer de uma alimentação saudável e equilibrada, sem restrições e com foco no seu bem-estar.
          </p>

          <Button size="lg" asChild>
            <Link href={getWhatsAppLink(SCHEDULE_CONSULTATION_MESSAGE)} target="_blank" rel="noopener noreferrer">
              Agende sua Consulta
            </Link>
          </Button>
        </FadeIn>

        {/* Image side — bleeds past the section's own bottom edge into About on desktop */}
        <FadeIn direction="right" className="relative flex h-full min-h-[50vh] items-center justify-center md:justify-end">
          <div className="relative h-[70vh] w-full max-w-md md:-mb-20 md:h-[calc(70vh+5rem)]">
            <div className="relative h-full w-full overflow-hidden rounded-t-full">
              <Image
                src="/images/hero-luciana.jpg"
                alt="Retrato de Luciana Soares, nutricionista"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
