const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8080;
const sendEmail = require('./mailer');
const bodyParser = require('body-parser');
require('dotenv').config();

app.use(cors());

app.get("/api/home", (req, res) => {
  res.json({ message: "This is the 'home' API endpoint, there is nothing else to see here..."});
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});


app.use(bodyParser.json());

app.post('/api/email', (req, res) => {
    console.log(req.body);
    console.log("Email with SMTP host: " + process.env.SMTP_HOST);
    sendEmail(req.body, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).send('Error sending email');
      } else {
        console.log('Email sent: ' + info.response);
        res.status(200).send('Email sent');
      }
    });
  });