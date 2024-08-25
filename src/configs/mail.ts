import nodemailer from 'nodemailer';
import { Resend } from 'resend';

export const user = process.env.MAIL_USER
export const resendUser = process.env.RESEND_EMAIL_FROM

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user,
      pass: process.env.MAIL_PASSWORD
    },
});

export const resend = new Resend(process.env.RESEND_API_KEY)