import { Header } from "@/components/landing/header";
import { HeroSection } from "@/components/landing/hero-section";
import { AboutSection } from "@/components/landing/about-section";
import { ServicesSection } from "@/components/landing/services-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { TipsSection } from "@/components/landing/tips-section";
import { EbookSection } from "@/components/landing/ebook-section";
import { ContactSection } from "@/components/landing/contact-section";
import { Footer } from "@/components/landing/footer";

function Fade({ from, to }: { from: string; to: string }) {
  return <div className={`h-28 bg-gradient-to-b ${from} ${to}`} aria-hidden />;
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <Fade from="from-secondary" to="to-background" />
        <AboutSection />
        <Fade from="from-background" to="to-secondary" />
        <ServicesSection />
        <Fade from="from-secondary" to="to-background" />
        <TestimonialsSection />
        <Fade from="from-background" to="to-secondary" />
        <TipsSection />
        {/* Tips → Ebook: ambos bg-secondary, sem transição de cor */}
        <EbookSection />
        <Fade from="from-secondary" to="to-background" />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
