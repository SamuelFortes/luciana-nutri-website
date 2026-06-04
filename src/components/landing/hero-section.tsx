"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "@/components/ui/motion";

const titleWords = ["Transforme", "sua", "relação", "com", "a", "comida."];

export function HeroSection() {
  return (
    <section id="inicio" className="relative w-full overflow-hidden bg-secondary">
      {/* Animated gradient blobs */}
      <motion.div
        className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-accent/40 blur-[100px]"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="container mx-auto grid min-h-[calc(100vh-5rem)] items-center gap-12 px-4 md:grid-cols-2 md:px-6">
        {/* Text side */}
        <div className="flex flex-col items-start space-y-6 text-left">
          {/* Word-by-word title reveal */}
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            {titleWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.15 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mr-[0.28em] inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85, ease: "easeOut" }}
            className="max-w-[600px] text-muted-foreground md:text-xl"
          >
            Descubra o prazer de uma alimentação saudável e equilibrada, sem restrições e com foco no seu bem-estar.
          </motion.p>

          {/* CTA with pulse ring */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.05, ease: "easeOut" }}
            className="relative"
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-primary/40"
              animate={{ scale: [1, 1.55, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
            />
            <Button size="lg" asChild className="relative z-10">
              <Link href="#contato">Agende sua Consulta</Link>
            </Button>
          </motion.div>
        </div>

        {/* Floating image side */}
        <div className="relative flex h-full min-h-[50vh] items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[80vh] w-full max-w-md"
          >
            <motion.div
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative h-full w-full overflow-hidden rounded-t-full"
            >
              <Image
                src="/images/hero-luciana.jpg"
                alt="Luciana Soares Nutricionista"
                fill
                className="object-cover object-top"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
