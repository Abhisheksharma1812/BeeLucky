const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Payments = require("../models/Payments");
const UserPoints = require("../models/UserPoints");


const JWT_SECRET = process.env.JWT_SECRET || "secret123";

// ✅ Get all users (except logged-in one)
exports.getAllUsers = async (req, res) => {
  try {
    const loggedInUserId = req.user.id;
    const users = await User.find({ _id: { $ne: loggedInUserId } });

    res.status(200).json({
      success: true,
      count: users.length,
      data: users,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// ✅ Get all payments
exports.getAllPayments = async (req, res) => {
  try {
    const payments = await Payments.find({}).populate("user_id", "username email");
    res.status(200).json({
      success: true,
      count: payments.length,
      data: payments,
    });
  } catch (error) {
    console.error("Error fetching payments:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// ✅ Register user
exports.registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password)
      return res.status(400).json({ msg: "All fields required" });

    const existing = await User.findOne({ email });
    if (existing)
      return res.status(400).json({ msg: "Email already registered" });

    const hash = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hash });
    await user.save();

    res.json({ msg: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};

// ✅ Login user
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user){
      return res.status(400).json({ msg: "Invalid email or password" });
    }else if(user.status !== "active") {
      return res.status(403).json({ msg: "User account is inactive. Please contact admin." });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ msg: "Invalid email or password" });

    const token = jwt.sign({ id: user._id, email: user.email, role_id: user.role_id }, JWT_SECRET, {
      expiresIn: "30d",
    });


     // ✅ Save token in user meta (database)
    user.token = token;
    await user.save();

    res.json({
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role_id: user.role_id,
      },
    });
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};

// ✅ Toggle user status
exports.toggleUserStatus = async (req, res) => {

  try {
    const user = await User.findById(req.params.id);
    if (!user)
      return res.status(404).json({ message: "User not found" });

    user.status = user.status === "active" ? "inactive" : "active";
    await user.save();

    res.json({ success: true, status: user.status });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



exports.updatePaymentStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { amount } = req.body;

  //  console.log([id,amount]); return false;

    const payment = await Payments.findById(id).populate("user_id");
    if (!payment) return res.status(404).json({ message: "Payment not found" });

    payment.amount = amount;
    payment.status = "completed";
    await payment.save();

    // ✅ Assign points
    const user = await User.findById(payment.user_id);
    const points = new UserPoints({
      user_id: user._id,
      points: amount,
      payment_id: payment._id,
    });
    await points.save();

    user.points = (user.points || 0) + amount;
    await user.save();

    res.json({
      success: true,
      message: "Payment approved and points assigned",
      payment,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};


exports.userTransaction = async (req, res) => {
  try {
    const userId = req.params.id;

      //   console.log("Transactions response:", userId);
 //return;
    const transactions = await Payments.find({ user_id: userId }).sort({ createdAt: -1 });

        //console.log("Transactions response:", transactions); return;

    res.json({
      success: true,
      message: "User transactions fetched successfully",
      transactions,
    });
  } catch (error) {
    console.error("Error fetching user transactions:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};



exports.getMe = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, JWT_SECRET);

    

    const user = await User.findById(decoded.id).select("-password");

    // console.log("Fetched user data:", user); return;
       res.json({
      success: true,
      message: "User details fetched successfully",
      user,
    });
  

  } catch (err) {
    res.status(401).json({ msg: "Invalid or expired token" });
  }
};


/*
exports.togglePaymentStatus = async (req, res) => {

  try {
    const payment = await Payments.findById(req.params.id);
    if (!payment)
      return res.status(404).json({ message: "Payment not found" });

    payment.status = payment.status === "pending" ? "completed" : "pending";
    await payment.save();

    res.json({ success: true, status: payment.status });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

*/

// ✅ Delete User (Admin only)
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    await user.deleteOne();
    res.status(200).json({ success: true, message: "User deleted successfully" });
  } catch (err) {
    console.error("Error deleting user:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};