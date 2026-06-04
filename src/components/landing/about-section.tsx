"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

const stats = [
  { value: 500, suffix: "+", label: "Pacientes Atendidos" },
  { value: 5, suffix: "+", label: "Anos de Experiência" },
  { value: 100, suffix: "%", label: "Planos Personalizados" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1800;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="font-headline text-3xl font-bold text-primary">
      {count}
      {suffix}
    </span>
  );
}

export function AboutSection() {
  return (
    <section id="sobre" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto grid items-center gap-12 px-4 md:grid-cols-2 md:px-6">
        {/* Image slides in from left */}
        <FadeIn direction="left" className="relative mx-auto w-full max-w-md">
          <div className="aspect-square overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/images/about-luciana.jpg"
              alt="Luciana Soares Nutricionista"
              width={800}
              height={800}
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </FadeIn>

        {/* Text slides in from right */}
        <FadeIn direction="right" className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
              Sobre Mim
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Sou Luciana Soares, nutricionista apaixonada por ajudar pessoas a encontrarem o equilíbrio e o prazer na alimentação. Minha missão é guiar você em uma jornada de autoconhecimento e saúde, com uma abordagem humanizada e sem julgamentos.
            </p>
          </div>
          <Card className="bg-card p-6">
            <p className="text-card-foreground">
              Com formação em Nutrição e especialização em comportamento alimentar, acredito que comer bem vai além de contar calorias. Trata-se de nutrir o corpo e a mente, respeitando suas individualidades e seu estilo de vida. Vamos juntos construir hábitos saudáveis e duradouros.
            </p>
          </Card>

          {/* Stats counters */}
          <StaggerContainer className="grid grid-cols-3 gap-4 pt-2" delay={0.2}>
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="flex flex-col items-center rounded-xl bg-secondary p-4 text-center">
                  <Counter target={stat.value} suffix={stat.suffix} />
                  <span className="mt-1 text-xs text-muted-foreground">{stat.label}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </FadeIn>
      </div>
    </section>
  );
}
