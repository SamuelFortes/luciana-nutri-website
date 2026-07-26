import { NextRequest, NextResponse } from "next/server";
import { Payment } from "mercadopago";
import { getMercadoPagoClient } from "@/lib/mercado-pago";
import { sendEbookEmail } from "@/lib/send-ebook-email";

// Em memória: reseta a cada deploy/restart do serviço no Render.
// Suficiente para baixo volume; se o volume crescer, trocar por um
// KV/DB externo (ex.: Upstash Redis, free tier) para evitar reenvios
// em caso de reinício durante o intervalo de retry do Mercado Pago.
const processedPayments = new Set<string>();

export async function POST(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const body = await request.json().catch(() => null);

    const paymentId =
      url.searchParams.get("data.id") ??
      body?.data?.id ??
      (url.searchParams.get("topic") === "payment"
        ? url.searchParams.get("id")
        : null);

    if (!paymentId) {
      return NextResponse.json({ received: true });
    }

    if (processedPayments.has(paymentId)) {
      return NextResponse.json({ received: true, alreadyProcessed: true });
    }

    const payment = new Payment(getMercadoPagoClient());
    const paymentInfo = await payment.get({ id: paymentId });

    if (paymentInfo.status === "approved") {
      const email = paymentInfo.payer?.email;
      const name = paymentInfo.payer?.first_name ?? undefined;

      if (email) {
        await sendEbookEmail(email, name);
        processedPayments.add(paymentId);
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Erro ao processar webhook do Mercado Pago:", error);
    // 500 para o Mercado Pago tentar reenviar o webhook depois.
    return NextResponse.json({ error: "internal" }, { status: 500 });
  }
}

export async function GET() {
  // O Mercado Pago às vezes faz uma checagem GET simples na URL do webhook.
  return NextResponse.json({ ok: true });
}
