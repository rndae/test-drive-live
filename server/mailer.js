const nodemailer = require('nodemailer');

function sendEmail(data, callback) {
  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, //SMTP host
    port: process.env.SMTP_PORT, //SMTP port
    secure: process.env.SMTP_SECURE, //SMTP secure boolean. true for 465, false for other ports
    auth: {
      user: process.env.SMTP_LOGIN, //SMTP server login
      pass: process.env.SMTP_KEY //SMTP server key
    }
  });

  let mailOptions = {
    from: process.env.SMTP_EMAIL_ADDRESS, //from email in SMTP
    to: 'your-email@example.com',
    subject: 'Form Submission',
    text: `Form data: ${JSON.stringify(data)}` // replace with form data
  };

  transporter.sendMail(mailOptions, callback);
}

module.exports = sendEmail;
