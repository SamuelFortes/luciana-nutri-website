"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Users, ClipboardList, HeartPulse, BookOpen } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem, motion } from "@/components/ui/motion";

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
    <section id="servicos" className="w-full bg-secondary py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
              Serviços Oferecidos
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Ofereço um cuidado completo e individualizado para transformar sua saúde e bem-estar.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="mx-auto mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={service.title}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="h-full"
                >
                  <Card className="group flex h-full flex-col items-center text-center shadow-lg transition-shadow duration-300 hover:shadow-2xl">
                    <CardHeader className="items-center pb-2">
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="h-8 w-8 text-primary transition-colors duration-300 group-hover:text-primary" />
                      </motion.div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
