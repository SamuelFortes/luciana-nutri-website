import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Instagram, Mail } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { LogoIcon } from "@/components/icons/logo-icon";

export function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background py-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 text-center md:flex-row md:text-left">
        <div className="flex flex-col items-center gap-2 md:items-start">
           <Link href="#inicio" className="flex items-center gap-2 text-xl font-bold text-foreground">
            <LogoIcon className="h-7 w-7 text-primary" />
            <span className="font-headline">LucianaNutri</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Luciana Soares. Todos os direitos reservados.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="#" aria-label="WhatsApp">
              <WhatsAppIcon className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="#" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="#" aria-label="Email">
              <Mail className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
