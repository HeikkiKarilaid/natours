const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  //1) Create a transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,

    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
      //in g-mail activate less secure app option
    },
  });
  //2) Define the email options
  const mailOptions = {
    from: 'Heikki <heikki.karilaid.001@mail.ee>',
    to: options.email,
    subject: options.subject,
    text: options.message,
    // html:
  };
  //3) Send the email
  await transporter.sendMail(mailOptions);
  console.log('Email sent successfully');
};

module.exports = sendEmail;
