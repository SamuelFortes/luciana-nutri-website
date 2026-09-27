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
    <section id="contato" className="w-full bg-secondary py-20 md:py-28 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn className="mx-auto max-w-4xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-foreground sm:text-4xl">
            Entre em Contato
          </h2>
          <p className="mt-4 font-body text-muted-foreground md:text-xl/relaxed">
            Tem alguma dúvida ou quer agendar sua consulta? Fale comigo por um dos canais abaixo.
          </p>

          <div className="mt-14 grid gap-12 border-t border-foreground/15 pt-14 text-left md:grid-cols-[1.3fr_1fr] md:gap-16">
            {/* Canais de Atendimento */}
            <div className="space-y-6">
              <h3 className="font-headline text-xl font-semibold text-foreground">Canais de Atendimento</h3>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <motion.div key={label} whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-2xl border border-foreground/10 bg-card py-3 pl-3 pr-5 shadow-sm transition-all hover:border-primary/40 hover:shadow-md"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="font-body font-semibold text-foreground">{label}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Localização */}
            <div className="space-y-6 md:border-l md:border-foreground/15 md:pl-16">
              <h3 className="font-headline text-xl font-semibold text-foreground">Localização</h3>
              <div className="flex items-start gap-3">
                <MapPin className="h-6 w-6 shrink-0 text-primary" />
                <span className="font-body text-lg text-muted-foreground">
                  Av. Principal, 123 - Sala 4, São Paulo - SP
                </span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
