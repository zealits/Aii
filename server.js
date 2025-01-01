const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path"); // Import path module
require("dotenv").config({ path: path.resolve(__dirname, "config/config.env") });
const app = express();
const PORT = 4020;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Serve the React build folder
const buildPath = path.join(__dirname, "./Aii/dist"); // Update 'dist' if you configured a different output directory
app.use(express.static(buildPath));

// POST endpoint to send email

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  console.log(name, email, message);

  // Configure the transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMPT_HOST,
    port: process.env.SMPT_PORT,
    secure: process.env.SMPT_PORT === "465", // true for 465, false for other ports
    auth: {
      user: process.env.SMPT_MAIL, // SMTP username
      pass: process.env.SMPT_PASSWORD, // SMTP password
    },
  });

  // Define the email options
  const mailOptions = {
    from: process.env.SMPT_MAIL, // Sender address
    to: "aniketkhillare172002@gmail.com, info@aiiventure.com",
    subject: "New Message from AIi Ventures Contact Form", // Subject line
    html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; background-color: #f9f9f9;">
          <h2 style="color: #333;">New Message from AIi Ventures Contact Form</h2>
          <p style="font-size: 16px; color: #555;">You have received a new message:</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="font-size: 16px; color: #333;"><strong>Name:</strong> ${name}</p>
          <p style="font-size: 16px; color: #333;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #1a73e8;">${email}</a></p>
          <p style="font-size: 16px; color: #333;"><strong>Message:</strong></p>
          <div style="font-size: 14px; color: #555; padding: 10px; background-color: #fff; border: 1px solid #ddd; border-radius: 4px;">
            ${message.replace(/\n/g, "<br>")} <!-- Converts newlines to <br> for better formatting -->
          </div>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="font-size: 14px; color: #999;">This message was sent from the AIi Ventures website. Please do not reply directly to this email.</p>
        </div>
      `, // HTML body
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
});

// Handle React routing by serving index.html for unmatched routes
app.get("*", (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
