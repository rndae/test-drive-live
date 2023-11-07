const nodemailer = require('nodemailer');

function sendEmail(data, callback) {
  let transporter = nodemailer.createTransport({
    /*host: process.env.SMTP_HOST, //SMTP host
    port: process.env.SMTP_PORT, //SMTP port
    secure: process.env.SMTP_SECURE, //SMTP secure boolean. true for 465, false for other ports
    auth: {
      user: process.env.SMTP_LOGIN, //SMTP server login
      pass: process.env.SMTP_KEY //SMTP server key
    }*/
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
