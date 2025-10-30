const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  role_id: { type: Number, default: 2, required: true }, // 1=admin, 2=user
  password: { type: String, required: true },
  status: {  type: String,  enum: ["active", "inactive"],  default: "active" },
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
