import express from 'express';
import sendMail from '@utils/mail/sendMail';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/send-email', async (req, res) => {
  try {
    const content = {
      1: "Hey there, Stranger!",
      2: "This is a test message."
    }
    const { html, details } = await sendMail('example@gmail.com', 'Testing', content)
    console.log('mail details: ', details);

    return res.status(200).json({
      success: true,
      message: "Email sent successfully!",
      html
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

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
