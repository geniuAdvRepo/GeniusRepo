import sgMail, { MailDataRequired } from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";

const apiKey = process.env.NEXT_PUBLIC_SENDGRID_API_KEY;
console.log("apikey", apiKey);

if (!apiKey) {
  throw new Error(
    "SENDGRID_API_KEY não está definida nas variáveis de ambiente."
  );
}

sgMail.setApiKey(
  process.env.NEXT_PUBLIC_SENDGRID_API_KEY
    ? process.env.NEXT_PUBLIC_SENDGRID_API_KEY
    : ""
);
async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  try {
    // console.log("REQ.BODY", req.body);
    // const { subject } = req.body;

    const msg: MailDataRequired = {
      to: "blacklistnt@gmail.com",
      from: "blacklistnt@gmail.com",
      subject: `Formulario do Site! `,
      html: `<div>You've got a mail</div>`,
    };
    await sgMail.send(msg).catch((err) => console.log("err", err));
    console.log("Email sent");
    return res.status(200).json({ error: "email enviado" });
  } catch (error) {
    console.log("Error sending email:", error);
    return res
      .status(500)
      .json({ error: "Erro desconhecido ao enviar o e-mail." });
  }
}

export default sendEmail;
