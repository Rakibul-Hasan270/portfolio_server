const express = require("express");
const cors = require("cors");
require('dotenv').config();
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Email configuration
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "rakibx270@gmail.com",
        pass: process.env.APP_PASSWORD,
    },
});

// API endpoint
app.post("/send-email", async (req, res) => {
    const { from_name, from_email, message } = req.body;
    
    // const mailOptions = {
    //     from: from_email,
    //     to: "rakibx270@gmail.com",
    //     subject: `Message from ${from_name}`,
    //     text: message,
    // };

     const mailOptions = {
        from: "rakibx270@gmail.com",
        to: "rakibx270@gmail.com",
        subject: `Message from ${from_name}`,
        text: `senderName: ${from_name} || senderEmail: ${from_email} || sesnderMessage: ${message}`,
        replyTo: from_email
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to send email" });
    }
})

app.get('/', async (req, res) => {
    res.send({ message: 'deploy success' });
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})