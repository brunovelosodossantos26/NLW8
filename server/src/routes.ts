import express from 'express';
import nodemailer from 'nodemailer';
import { prisma } from './prisma';


export const routes = express.Router();

var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "aab7a0190c3d81",
      pass: "88e32c31dffde9"
    }
  });

routes.post('/feedbacks', async (req,res) =>{
    const {type, comment, screeshot} = req.body;
    const feedback = 

    await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Bruno Veloso <brvelosoo@gmail.com>',
        subject: 'Novo feedback',
        html: [
            `<div style="font-family: sans-serif; font-size:16px; color: #111;">`,
            `<p>Tipo de feedback: ${type}</p>`,
            `<p>Comentário: ${comment}</p>`,
            `</div>`,
        ].join('\n')
    })

    return res.status(201).json({date : feedback})
})