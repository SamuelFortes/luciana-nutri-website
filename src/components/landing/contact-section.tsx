"use client";

import { Button } from "@/components/ui/button";
import { Instagram, Mail, MapPin } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import Link from "next/link";
import { FadeIn, motion } from "@/components/ui/motion";

const socialLinks = [
  { icon: WhatsAppIcon, label: "WhatsApp", href: "https://wa.me/558681039944" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/nutri.lusoares/" },
  { icon: Mail, label: "Email", href: "#" },
];

export function ContactSection() {
  return (
    <section id="contato" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn className="mx-auto flex max-w-2xl flex-col items-center space-y-8 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
              Entre em Contato
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Tem alguma dúvida ou quer agendar sua consulta? Fale comigo por um dos canais abaixo.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Canais de Atendimento</h3>
            <div className="flex items-center justify-center gap-4">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <motion.div key={label} whileHover={{ scale: 1.15, y: -3 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" size="icon" asChild>
                    <Link href={href} aria-label={label} target="_blank" rel="noopener noreferrer">
                      <Icon className="h-5 w-5" />
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Localização</h3>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5 shrink-0 text-primary" />
              <span>Av. Principal, 123 - Sala 4, São Paulo - SP</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
