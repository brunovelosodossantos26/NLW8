import express from 'express';
import nodemailer from 'nodemailer';
import { prisma } from './prisma';

const app = express();

app.use(express.json())

app.post('/feedbacks', async (req,res) =>{
    const {type, comment, screeshot} = req.body;
    const feedback = await prisma.feedback.create({
        data:{
            type,
            comment,
            screeshot,
        }
    })
    return res.status(201).json({date : feedback})
})

app.listen(3333, () => {
    console.log('HTTP server runnimg!')
})