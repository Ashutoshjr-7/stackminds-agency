const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/stackminds");

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected ✅");
});

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Contact = mongoose.model("Contact", contactSchema);

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Email transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
  },
});

// Route
app.post("/contact", async (req, res) => {

  console.log("Request Hit");
  console.log("req.body");

  const { name, email, message } = req.body;


  try {
    // Save to DB
    await Contact.create({ name, email, message });

    console.log("DATA SAVED");

    // Send email
    await transporter.sendMail({
      from: email,
      to: "ashutoshjr.77@gmail.com",
      subject: "New Contact Message",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    res.json({ success: true });

  } catch (error) {
    console.log("Save Error:",error);
    res.status(500).json({ success: false });
  }
});

// Server start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
