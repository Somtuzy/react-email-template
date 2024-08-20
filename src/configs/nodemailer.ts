import nodemailer from 'nodemailer';

export const user = process.env.MAIL_USER

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user,
      pass: process.env.MAIL_PASSWORD
    },
});