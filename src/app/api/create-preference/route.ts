import { NextResponse } from "next/server";
import { Preference } from "mercadopago";
import { getMercadoPagoClient } from "@/lib/mercado-pago";

export async function POST() {
  try {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
    if (!siteUrl) {
      throw new Error("NEXT_PUBLIC_SITE_URL não configurado");
    }

    const preference = new Preference(getMercadoPagoClient());
    const result = await preference.create({
      body: {
        items: [
          {
            id: "ebook-nutricao",
            title: "E-book: Desvende os Segredos da Nutrição",
            quantity: 1,
            unit_price: 49.9,
            currency_id: "BRL",
          },
        ],
        back_urls: {
          success: `${siteUrl}/checkout?status=success`,
          failure: `${siteUrl}/checkout?status=failure`,
          pending: `${siteUrl}/checkout?status=pending`,
        },
        auto_return: "approved",
        notification_url: `${siteUrl}/api/mp-webhook`,
      },
    });

    return NextResponse.json({ initPoint: result.init_point });
  } catch (error) {
    console.error("Erro ao criar preferência do Mercado Pago:", error);
    return NextResponse.json(
      { error: "Não foi possível iniciar o pagamento." },
      { status: 500 }
    );
  }
}
