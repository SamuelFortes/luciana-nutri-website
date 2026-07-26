const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email";

export async function sendEbookEmail(to: string, name?: string) {
  const apiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.BREVO_SENDER_EMAIL;
  const senderName = process.env.BREVO_SENDER_NAME ?? "Luciana Soares Nutricionista";
  const downloadUrl = process.env.EBOOK_DOWNLOAD_URL;

  if (!apiKey || !senderEmail || !downloadUrl) {
    throw new Error(
      "Variáveis de ambiente do envio de e-book não configuradas (BREVO_API_KEY, BREVO_SENDER_EMAIL, EBOOK_DOWNLOAD_URL)"
    );
  }

  const response = await fetch(BREVO_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "api-key": apiKey,
    },
    body: JSON.stringify({
      sender: { email: senderEmail, name: senderName },
      to: [{ email: to, name }],
      subject: "Seu e-book chegou! 🎉",
      htmlContent: `
        <p>Olá${name ? ` ${name}` : ""}!</p>
        <p>Obrigada pela compra. Seu e-book <strong>Desvende os Segredos da Nutrição</strong> está pronto para download:</p>
        <p><a href="${downloadUrl}">Baixar meu e-book</a></p>
        <p>Qualquer dúvida, é só responder este e-mail.</p>
        <p>Um abraço,<br/>Luciana Soares</p>
      `,
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Falha ao enviar e-mail via Brevo (${response.status}): ${body}`);
  }
}
