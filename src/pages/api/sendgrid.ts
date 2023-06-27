import nodemailer from "nodemailer";
import sendgridTransport from "nodemailer-sendgrid-transport";
import { NextApiRequest, NextApiResponse } from "next";

const emailRoute = process.env.MAILADRESS;

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: process.env.SENDGRID_API_KEY,
    },
  })
);

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { email, name, description } = req.body;

    if (!email.trim() || !name.trim() || !description.trim()) {
      return res.status(403).send("");
    }

    const message = {
      from: "geniusbot24@gmail.com",
      to: emailRoute,
      subject: `Nova mensagem de contato - ${name}`,
      html: `<p><b>Nome:${name}</b><br /><p><b>Email:</b> ${email}<br /><b>Mensagem:</b> ${description}</p>`,
      replyTo: email,
    };

    await transporter.sendMail(message);

    return res.send("Email Enviado");
  } catch (err: any) {
    return res.json({
      error: true,
      message: err.message,
    });
  }
};
