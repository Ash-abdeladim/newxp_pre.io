// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    // Create transporter
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'ashraf.abdeladim0@gmail.com', // Your Gmail email address
            pass: 'Ashraf2000' // Your Gmail password
        }
    });

    // Email options
    let mailOptions = {
        from: '"Your Name" <your-email@gmail.com>',
        to: 'recipient@example.com', // Recipient's email address
        subject: 'New Message from Contact Form',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Email sent successfully');
        }
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
