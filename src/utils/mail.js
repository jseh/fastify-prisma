const nodemailer = require('nodemailer');


// Create a transporter object
const transporter = nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port: 2525,
    secure: false, // use SSL
    auth: {
        user: 'a36833d0656c54',
        pass: 'ea933b60bb1abe',
    }
});

// Configure the mailoptions object
const mailOptions = {
    from: 'yourusername@email.com',
    to: 'yourfriend@email.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

// Send the email
// transporter.sendMail(mailOptions, function (error, info) {
//     if (error) {
//         console.log('Error:', error);
//     } else {
//         console.log('Email sent:', info.response);
//     }
// });




// const info = await transporter.sendMail({
//     from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
//     to: "bar@example.com, baz@example.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>", // html body
// });

// console.log("Message sent: %s", info.messageId);