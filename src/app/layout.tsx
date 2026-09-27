import type {Metadata} from 'next';
import { Lora, Raleway } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

const lora = Lora({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-lora',
  display: 'swap',
});

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-raleway',
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
const title = 'Luciana Soares Nutricionista';
const description =
  'Consultas de nutrição online e presencial com Luciana Soares: planos alimentares personalizados, acompanhamento nutricional e educação alimentar sem dietas restritivas.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description,
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: title,
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${lora.variable} ${raleway.variable}`}>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
