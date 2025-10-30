const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Payments = require("../models/Payments");

const JWT_SECRET = process.env.JWT_SECRET || "secret123";




// ✅ Save Payment
exports.savePayment = async (req, res) => {
  try {
    const { email, transactionId } = req.body;

    const newPayment = new Payments({
      user_id: req.user.id,
      email,
      transactionId,
      screenshotUrl: req.file ? `/uploads/${req.file.filename}` : null,
    });

    await newPayment.save();

    res.json({
      success: true,
      message: "Payment submitted successfully!",
      data: newPayment,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Server error" });
  }
};
