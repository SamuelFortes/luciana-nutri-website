"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Instagram, Mail, MapPin } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem, motion } from "@/components/ui/motion";

const socialLinks = [
  { icon: WhatsAppIcon, label: "WhatsApp", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Mail, label: "Email", href: "#" },
];

const formFields = [
  { id: "name", label: "Nome", placeholder: "Seu nome completo", type: "text" },
  { id: "email", label: "Email", placeholder: "seu@email.com", type: "email" },
];

export function ContactSection() {
  return (
    <section id="contato" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto grid items-start gap-12 px-4 md:grid-cols-2 md:px-6">
        {/* Info side slides from left */}
        <FadeIn direction="left" className="space-y-6">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
              Entre em Contato
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Tem alguma dúvida ou quer agendar sua consulta? Fale comigo por um dos canais abaixo ou envie uma mensagem pelo formulário.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Canais de Atendimento</h3>
            <div className="flex items-center gap-4">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <motion.div key={label} whileHover={{ scale: 1.15, y: -3 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" size="icon" asChild>
                    <Link href={href} aria-label={label}>
                      <Icon className="h-5 w-5" />
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Localização</h3>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5 shrink-0 text-primary" />
              <span>Av. Principal, 123 - Sala 4, São Paulo - SP</span>
            </div>
          </div>
        </FadeIn>

        {/* Form slides from right with staggered fields */}
        <FadeIn direction="right">
          <StaggerContainer className="space-y-4" delay={0.1}>
            {formFields.map((field) => (
              <StaggerItem key={field.id}>
                <div className="space-y-2">
                  <Label htmlFor={field.id}>{field.label}</Label>
                  <Input
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    className="transition-shadow duration-200 focus:shadow-md"
                  />
                </div>
              </StaggerItem>
            ))}
            <StaggerItem>
              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                  id="message"
                  placeholder="Escreva sua mensagem aqui..."
                  rows={5}
                  className="transition-shadow duration-200 focus:shadow-md"
                />
              </div>
            </StaggerItem>
            <StaggerItem>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button type="submit" className="w-full md:w-auto">
                  Enviar Mensagem
                </Button>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </FadeIn>
      </div>
    </section>
  );
}
