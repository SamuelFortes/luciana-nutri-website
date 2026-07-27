export const WHATSAPP_NUMBER = "558681039944";

export const SCHEDULE_CONSULTATION_MESSAGE =
  "Olá, Luciana! Gostaria de agendar uma consulta.";

export function getWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
