import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comprar E-book: Desvende os Segredos da Nutrição",
  description:
    "Adquira o e-book de nutrição da Luciana Soares por R$ 49,90 e receba por e-mail em minutos.",
};

export default function CheckoutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
