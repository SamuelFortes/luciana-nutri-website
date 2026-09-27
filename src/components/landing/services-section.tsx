import { Users, ClipboardList, HeartPulse, BookOpen } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";

const services = [
  {
    icon: Users,
    title: "Consultas Online e Presencial",
    description: "Atendimento personalizado onde você estiver, com a mesma qualidade e atenção.",
  },
  {
    icon: ClipboardList,
    title: "Plano Alimentar Personalizado",
    description: "Planos criados sob medida para seus objetivos, rotina e preferências alimentares.",
  },
  {
    icon: HeartPulse,
    title: "Acompanhamento Nutricional",
    description: "Suporte contínuo para ajustar seu plano, tirar dúvidas e manter a motivação em alta.",
  },
  {
    icon: BookOpen,
    title: "Educação Alimentar",
    description: "Aprenda a fazer escolhas conscientes e a construir uma relação saudável com a comida.",
  },
];

export function ServicesSection() {
  return (
    <section id="servicos" className="relative z-0 w-full bg-background py-20 md:py-28 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn className="mx-auto flex max-w-2xl flex-col items-center space-y-4 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
            Serviços Oferecidos
          </h2>
          <p className="font-body text-muted-foreground md:text-lg">
            Ofereço um cuidado completo e individualizado para transformar sua saúde e bem-estar.
          </p>
        </FadeIn>

        <StaggerContainer className="mx-auto mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={service.title}>
                <div
                  className={
                    i > 0
                      ? "flex h-full flex-col items-center space-y-3 border-foreground/10 pt-8 text-center sm:border-t-0 sm:pt-0 lg:border-l lg:pl-8 lg:pt-0"
                      : "flex h-full flex-col items-center space-y-3 text-center"
                  }
                >
                  <Icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
                  <h3 className="font-headline text-xl font-semibold">{service.title}</h3>
                  <p className="font-body text-sm text-muted-foreground">{service.description}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
