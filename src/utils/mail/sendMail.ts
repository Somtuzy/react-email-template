import { IContent, renderEmailTemplateToHTML } from './templates/render';
import { transporter, resend, user as nodemailerUser, resendUser } from '@configs/mail'

class Mailer {
  // Sending via nodemailer
  nodemailer = async (to: string, subject: string, content: IContent, sender?: string) => {
    const from = sender || nodemailerUser + "@gmail.com"
    const html = renderEmailTemplateToHTML(content)

    // Send email with Nodemailer
    const data = await transporter.sendMail({
      from,
      to,
      replyTo: from,
      subject,
      sender: from,
      html
    });

    console.log('nodemailer details:', data);

    return { html, data }
  }

  // Sending via resend
  resend = async (to: string, subject: string, content: IContent, sender?: string) => {
    const html = renderEmailTemplateToHTML(content)
    const from = sender || resendUser

    // Send email with Resend
    const { data, error } = await resend.emails.send({
      from: `Somtuzy <${from}>`,
      to,
      subject,
      html,
      replyTo: from
    });

    if (error)
      throw new Error(error.message);

    console.log('resend details:', data);

    return { html, data }
  }
}

export default new Mailer()