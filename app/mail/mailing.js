import nodemailer from 'nodemailer'

const sendEmail = async (email, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: 465,
            secure: true,
            auth: {
                user: process.env.MAIL_USERNAME,
                pass: process.env.MAIL_PASSWORD
            },
        })
        await transporter.sendMail({
            from: process.env.MAIL_FROM,
            to: email,
            subject: subject,
            text: text
        });
        console.log('Mail sent too ' + email + ' successfully')
    } catch (error) {
        if (error) throw error;
        console.log('Email was not sent')
    }
}

export default sendEmail;