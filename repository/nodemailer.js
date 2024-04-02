const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.gmail,
        pass: process.env.pass
    }
});

const sendConfirmationEmail = async (email, confirmationCode) => {
    try {
        if (!email || !confirmationCode) {
            throw new Error('Email or confirmation code is missing.');
        }

        const mailOptions = {
            from: process.env.gmail,
            to: email,
            subject: 'Email Confirmation',
            html: `<p>Click the following button to confirm your email:</p>
                   <a href="http://localhost:3006/reposit/confirm/${confirmationCode}">
                       <button style="padding: 10px 20px; background-color: #007bff; color: #fff; border: none; border-radius: 5px; cursor: pointer;">Confirm Email</button>
                   </a>`
        };
        

        await transporter.sendMail(mailOptions);
        console.log('Confirmation email sent');
    } catch (error) {
        console.error('Error sending confirmation email:', error);
        throw error;
    }
};

module.exports = sendConfirmationEmail;
