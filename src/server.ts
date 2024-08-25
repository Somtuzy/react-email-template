import express, { Request, Response } from 'express';
import mailer from '@utils/mail/sendMail';

const app = express();
const port = process.env.PORT || 3000;

app.post('/send-email', async (req: Request, res: Response) => {
  try {
    // Send email via resend
    const sendMailViaResend = mailer['resend']
    const { html: resendHTML, data: resendDetails } = await sendMailViaResend('somtuzy@outlook.com', 'Testing', {
      message: "You logged into your account on a new device. Please let us know if this wasnt you or reset your password."
    })

    // Send email via nodemailer
    const sendMailViaNodeMailer = mailer['nodemailer']
    const { html: nodemailerHTML, data: nodemailerDetails } = await sendMailViaNodeMailer('somtuzy@outlook.com', 'Testing', {
      message: "You logged into your account on a new device. Please let us know if this wasnt you or reset your password."
    })

    return res.status(200).json({
      success: true,
      message: "Email sent successfully!",
      data: {
        resend: {
          html: resendHTML,
          details: resendDetails
        },
        nodemailer: {
          html: nodemailerHTML,
          details: nodemailerDetails
        }}
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to send email',
      details: error.message
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
