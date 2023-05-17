import { MailDataRequired, setApiKey, send } from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";

const apiKey = process.env.SENDGRID_API_KEY;
console.log("apiKey", apiKey);
if (!apiKey) {
  throw new Error("SENDGRID_API_KEY não está definida nas variáveis de ambiente.");
}

setApiKey(apiKey as string);

async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  try {
    console.log("REQ.BODY", req.body);
    console.log("apiKey", apiKey);
    const msg: MailDataRequired = {
      to: "blacklistnt@gmail.com", // Seu e-mail onde receberá os e-mails
      from: "blacklistnt@gmail.com", // O endereço de e-mail do seu site aqui
      subject: `${req.body.subject}`,
      html: `<div>You've got a mail</div>`,
    };

    await send(msg);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message });
    }
    return res.status(500).json({ error: "Erro desconhecido ao enviar o e-mail." });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
