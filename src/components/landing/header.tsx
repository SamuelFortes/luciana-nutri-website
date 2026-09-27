"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { LogoIcon } from "@/components/icons/logo-icon";
import { ThemeToggle } from "@/components/theme-toggle";
import { motion, useScroll, useSpring } from "framer-motion";
import { getWhatsAppLink, SCHEDULE_CONSULTATION_MESSAGE } from "@/lib/whatsapp";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#ebook", label: "E-book" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      if (scrolled !== isScrolled) setIsScrolled(scrolled);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-colors duration-150",
        isScrolled
          ? "border-b border-foreground/10 bg-background/95 backdrop-blur-sm"
          : "border-b border-transparent bg-transparent"
      )}
    >
      {/* Scroll progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] origin-left bg-primary"
        style={{ scaleX }}
      />

      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="#inicio" className="flex items-center gap-2 text-xl font-bold text-foreground">
          <LogoIcon className="h-7 w-7 text-primary" />
          <span className="font-headline">LucianaNutri</span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              prefetch={true}
              className="group relative whitespace-nowrap text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          <ThemeToggle />
          <Button asChild>
            <Link href={getWhatsAppLink(SCHEDULE_CONSULTATION_MESSAGE)} target="_blank" rel="noopener noreferrer">
              Agende sua Consulta
            </Link>
          </Button>
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background">
              <VisuallyHidden asChild>
                <SheetTitle>Menu de navegação</SheetTitle>
              </VisuallyHidden>
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <Link href="#inicio" className="flex items-center gap-2 text-xl font-bold" onClick={closeMobileMenu}>
                    <LogoIcon className="h-7 w-7 text-primary" />
                    <span className="font-headline">LucianaNutri</span>
                  </Link>
                </div>
                <nav className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMobileMenu}
                      className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <Button asChild className="mt-8 w-full">
                  <Link
                    href={getWhatsAppLink(SCHEDULE_CONSULTATION_MESSAGE)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMobileMenu}
                  >
                    Agende sua Consulta
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
