const nodemailer = require('nodemailer', 'math');
const crypto = require('crypto');


// Create a transporter object using SMTP transport
let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'booraraman2000@gmail.com',  // Your email address
        pass: 'csya nwxa rlpv yksn'  // Application-specific password
    }
});


// Function to generate OTP of a given length
function generateOTP(length) {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charsLength = chars.length;
    let otp = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = crypto.randomInt(0, charsLength);
        otp += chars[randomIndex];
    }

    return otp;
}


const otp = generateOTP(6);
console.log('Generated OTP:', otp);

let mailOptions = {
    from: 'booraraman2000@gmail.com',
    to: 'booraraman2004@gmail.com', 
    subject: 'OTP For Verification',          
    text:'The OTP For Verification Is '+otp
};


transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
});
