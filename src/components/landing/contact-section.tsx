"use client";

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
    <section id="contato" className="w-full bg-secondary py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn className="mx-auto flex max-w-3xl flex-col items-center space-y-12 text-center">
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-5xl text-foreground">
              Entre em Contato
            </h2>
            <p className="font-body text-muted-foreground md:text-xl/relaxed">
              Tem alguma dúvida ou quer agendar sua consulta? Fale comigo por um dos canais abaixo.
            </p>
          </div>
          
          <div className="space-y-6">
            <h3 className="font-headline text-xl font-semibold text-foreground">Canais de Atendimento</h3>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <motion.div key={label} whileHover={{ scale: 1.05, y: -4 }} whileTap={{ scale: 0.95 }}>
                  <Link 
                    href={href} 
                    aria-label={label} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl"
                  >
                    <Icon className="h-8 w-8" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="border-border/50 flex w-full max-w-md flex-col items-center space-y-4 border-t pt-8">
            <h3 className="font-headline text-xl font-semibold text-foreground">Localização</h3>
            <div className="font-body flex items-center justify-center gap-3 text-lg text-muted-foreground">
              <MapPin className="h-6 w-6 shrink-0 text-primary" />
              <span>Av. Principal, 123 - Sala 4, São Paulo - SP</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
