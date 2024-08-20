import { render } from "@react-email/components";
import EmailTemplate from '@utils/mail/templates/EmailTemplate'
import { transporter, user } from '@configs/nodemailer'

const sendMail = async (to: string, subject: string, content: {[key: number]: string}, from = user) => {
    const html = render(<EmailTemplate content={content}/>)
  
    // Send email with Nodemailer
    const details = await transporter.sendMail({
      from,
      to,
      subject,
      sender: "The Baddest Team",
      html
    });

    return { html, details }
}

export default sendMail