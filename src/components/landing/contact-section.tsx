import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Instagram, Mail, MapPin } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import Link from "next/link";

export function ContactSection() {
  return (
    <section id="contato" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto grid items-start gap-12 px-4 md:grid-cols-2 md:px-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Entre em Contato</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Tem alguma dúvida ou quer agendar sua consulta? Fale comigo por um dos canais abaixo ou envie uma mensagem pelo formulário.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Canais de Atendimento</h3>
             <div className="flex items-center gap-4">
                <Button variant="outline" size="icon" asChild>
                    <Link href="#" aria-label="WhatsApp">
                        <WhatsAppIcon className="h-5 w-5" />
                    </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                    <Link href="#" aria-label="Instagram">
                        <Instagram className="h-5 w-5" />
                    </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                    <Link href="#" aria-label="Email">
                        <Mail className="h-5 w-5" />
                    </Link>
                </Button>
             </div>
          </div>
          <div className="space-y-2">
             <h3 className="text-lg font-semibold">Localização</h3>
             <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5" />
                <span>Av. Principal, 123 - Sala 4, São Paulo - SP</span>
             </div>
          </div>
        </div>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome</Label>
            <Input id="name" placeholder="Seu nome completo" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="seu@email.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Mensagem</Label>
            <Textarea id="message" placeholder="Escreva sua mensagem aqui..." rows={5} />
          </div>
          <Button type="submit" className="w-full md:w-auto">Enviar Mensagem</Button>
        </form>
      </div>
    </section>
  );
}
