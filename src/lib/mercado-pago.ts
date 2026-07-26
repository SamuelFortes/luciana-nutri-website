import { MercadoPagoConfig } from "mercadopago";

export function getMercadoPagoClient() {
  const accessToken = process.env.MP_ACCESS_TOKEN;
  if (!accessToken) {
    throw new Error("MP_ACCESS_TOKEN não configurado");
  }
  return new MercadoPagoConfig({ accessToken });
}
