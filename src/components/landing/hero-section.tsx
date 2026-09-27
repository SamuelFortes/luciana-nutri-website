import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/motion";
import { getWhatsAppLink, SCHEDULE_CONSULTATION_MESSAGE } from "@/lib/whatsapp";

export function HeroSection() {
  return (
    <section id="inicio" className="relative z-10 w-full overflow-visible bg-background">
      <div className="container relative mx-auto min-h-[calc(100vh-5rem)] px-4 py-16 md:px-6">
        <div className="flex min-h-[calc(100vh-8rem)] flex-col justify-center gap-16 md:flex-row md:items-center md:justify-center md:gap-4 lg:gap-10">
          {/* Text side */}
          <FadeIn
            className="relative z-20 flex max-w-xl flex-1 flex-col items-start space-y-5 text-left"
            direction="up"
          >
            <h1 className="font-headline text-5xl font-bold leading-[1.05] tracking-tighter text-foreground sm:text-6xl md:text-7xl">
              Transforme sua relação com a comida.
            </h1>

            <p className="max-w-[440px] font-body text-lg text-muted-foreground md:text-xl">
              Descubra o prazer de uma alimentação saudável e equilibrada, sem restrições e com foco no seu bem-estar.
            </p>

            <Button size="lg" asChild>
              <Link href={getWhatsAppLink(SCHEDULE_CONSULTATION_MESSAGE)} target="_blank" rel="noopener noreferrer">
                Agende sua Consulta
              </Link>
            </Button>
          </FadeIn>

          {/* Image side — a solid color block sits behind the photo, offset up-left so the
              two overlap instead of floating separately in empty cream; the photo itself
              bleeds past the section's own bottom edge into About on desktop (z-10 section
              vs About's z-0). Pulled left on desktop so it closes the dead space instead of
              stranding the text block on an island. */}
          <FadeIn
            direction="right"
            className="relative z-10 mx-auto w-full max-w-md shrink-0"
          >
            <div
              aria-hidden
              className="absolute -left-6 -top-6 z-0 h-[82%] w-[88%] rounded-[2.5rem] bg-secondary md:-left-10 md:-top-8 md:h-[78%] md:w-[82%]"
            />
            <div className="relative z-10 h-[62vh] min-h-[420px] w-full md:-mb-20 md:h-[calc(62vh+5rem)]">
              <div className="relative h-full w-full overflow-hidden rounded-t-full rounded-br-[3rem]">
                <Image
                  src="/images/hero-luciana.jpg"
                  alt="Retrato de Luciana Soares, nutricionista"
                  fill
                  className="object-cover object-[50%_12%]"
                  priority
                />
                {/* Warm vignette — the source photo has a cold gray studio backdrop;
                    multiply-blending a terracota gradient over it (clear at the face,
                    fully warmed by the edges) grades the gray toward the page's own
                    palette instead of leaving a mismatched rectangle of gray. */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_32%,transparent_16%,hsl(var(--primary)/0.55)_60%,hsl(var(--primary)/0.92)_100%)] mix-blend-multiply"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
