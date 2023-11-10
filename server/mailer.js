const nodemailer = require('nodemailer');

function sendEmail(data, callback) {
  let transporter = nodemailer.createTransport({
    
    service: "Outlook365",
    auth: {
       user: process.env.SMTP_LOGIN,
       pass: process.env.SMTP_KEY
    },

  });

  let mailOptions = {
    from: process.env.SMTP_EMAIL_ADDRESS, 
    to: process.env.SMTP_EMAIL_ADDRESS,
    subject: 'Testing Internal Form Submission',
    text: `Form data: ${JSON.stringify(data)}`
  };

  transporter.sendMail(mailOptions, callback);
}

module.exports = sendEmail;
