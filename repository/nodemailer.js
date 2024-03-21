// confirmationEmail.js

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.gmail,
        pass: process.env.pass
    }
});

const sendConfirmationEmail = async (email, confirmationCode) => {
    const mailOptions = {
        from: process.env.gmail,
        to: email,
        subject: 'Email Confirmation',
        text: `Click the following link to confirm your email: http://localhost:3006/confirm/${confirmationCode}`
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Confirmation email sent');
    } catch (error) {
        console.log('Error sending confirmation email:', error);
    }
};

module.exports = sendConfirmationEmail;
