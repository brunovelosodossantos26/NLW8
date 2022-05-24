import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "aab7a0190c3d81",
      pass: "88e32c31dffde9"
    }
  });


export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Bruno Veloso <brvelosoo@gmail.com>',
            subject,
            html: body,
        })
    };
}