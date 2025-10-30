// models/Payment.js
const mongoose = require('mongoose');
const paymentSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  email: { type: String, required: true },
  transactionId: { type: String, required: true },
  screenshotUrl: { type: String }, // optional
  status: { type: String, enum: ["pending", "verified", "rejected"], default: "pending" },
  createdAt: { type: Date, default: Date.now },
});


module.exports = mongoose.model('Payments', paymentSchema);
