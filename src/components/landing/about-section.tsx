import Image from "next/image";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";

const stats = [
  { value: "500+", label: "Pacientes Atendidos" },
  { value: "5+", label: "Anos de Experiência" },
  { value: "100%", label: "Planos Personalizados" },
];

export function AboutSection() {
  return (
    <section id="sobre" className="relative z-0 w-full bg-secondary py-20 md:py-28 lg:py-32">
      <div className="container mx-auto grid items-center gap-12 px-4 md:grid-cols-2 md:px-6">
        {/* Image — left, per the Z-pattern reversal from the Hero */}
        <FadeIn direction="left" className="relative mx-auto w-full max-w-md">
          <div className="relative aspect-square overflow-hidden rounded-xl">
            <Image
              src="/images/about-luciana.jpg"
              alt="Luciana Soares trabalhando em seu consultório"
              width={800}
              height={800}
              className="h-full w-full object-cover"
            />
            {/* Same warm-wash treatment as the Hero, tuned lighter: unifies the two
                photos' color temperature against the cooler tones of the source room. */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,transparent_55%,hsl(var(--secondary)/0.35)_100%)]"
            />
          </div>
        </FadeIn>

        {/* Text — right */}
        <FadeIn direction="right" className="flex flex-col justify-center space-y-6">
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
              Sobre Mim
            </h2>
            <p className="max-w-[65ch] font-body text-muted-foreground md:text-lg">
              Sou Luciana Soares, nutricionista apaixonada por ajudar pessoas a encontrarem o equilíbrio e o prazer na alimentação. Minha missão é guiar você em uma jornada de autoconhecimento e saúde, com uma abordagem humanizada e sem julgamentos.
            </p>
            <p className="max-w-[65ch] font-body text-muted-foreground md:text-lg">
              Com formação em Nutrição e especialização em comportamento alimentar, acredito que comer bem vai além de contar calorias. Trata-se de nutrir o corpo e a mente, respeitando suas individualidades e seu estilo de vida. Vamos juntos construir hábitos saudáveis e duradouros.
            </p>
          </div>

          {/* Stats — hairlines and whitespace, never boxed cards */}
          <StaggerContainer className="grid grid-cols-3 gap-6 pt-4">
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="border-t border-foreground/20 pt-3">
                  <span className="block font-headline text-2xl font-bold text-primary sm:text-3xl">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-xs text-muted-foreground sm:text-sm">
                    {stat.label}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </FadeIn>
      </div>
    </section>
  );
}
