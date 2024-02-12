import { NextApiRequest, NextApiResponse } from 'next';
import { MailerSend, EmailParams, Sender, Recipient } from 'mailer-send-ts';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { name, email, message_comp } = await req.json();
  console.log(name, email, message_comp);

  const mailerSend = new MailerSend({ apiKey: process.env.MAILER_SEND_API_KEY! });

  const sentFrom = new Sender(process.env.EMAIL_FROM!, process.env.EMAIL_FROM_NAME);
  const recipients = [new Recipient(process.env.EMAIL_TO!, process.env.EMAIL_TO_NAME)];

  const emailParams = new EmailParams()
    .setFrom(sentFrom)
    .setTo(recipients)
    .setSubject(`New message_comp from ${name} (${email})`)
    .setText(message_comp)
    .setHtml(`<p>${message_comp}</p>`);

  try {
    const response = await mailerSend.email.send(emailParams);
    console.log(response);
    return NextResponse.json("message_comp", {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed send:" + error },
      {
        status: 500,
      }
    );  }
}