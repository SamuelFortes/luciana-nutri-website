import Link from "next/link";
import { Instagram, Mail } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { LogoIcon } from "@/components/icons/logo-icon";

export function Footer() {
  return (
    <footer className="w-full border-t border-foreground/10 bg-background py-12">
      <div className="container mx-auto flex flex-col items-center justify-between gap-8 px-4 text-center md:flex-row md:text-left">
        <div className="flex flex-col items-center gap-4 md:items-start">
           <Link href="#inicio" className="flex items-center gap-3 text-2xl font-bold text-foreground">
            <LogoIcon className="h-8 w-8 text-primary" />
            <span className="font-headline tracking-tight">LucianaNutri</span>
          </Link>
          <p className="font-body text-sm text-foreground/70">
            © {new Date().getFullYear()} Luciana Soares. Todos os direitos reservados.
          </p>
        </div>
        <div className="flex items-center gap-6">
          <Link href="https://wa.me/558681039944" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer" className="text-foreground/70 transition-colors hover:text-primary">
            <WhatsAppIcon className="h-6 w-6" />
          </Link>
          <Link href="https://www.instagram.com/nutri.lusoares/" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="text-foreground/70 transition-colors hover:text-primary">
            <Instagram className="h-6 w-6" />
          </Link>
          <Link href="#" aria-label="Email" className="text-foreground/70 transition-colors hover:text-primary">
            <Mail className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
