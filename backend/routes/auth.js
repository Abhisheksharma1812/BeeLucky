
const express = require("express");
const multer = require("multer");
const path = require("path");
const auth = require("../middleware/auth");
const cors = require('cors');
const {
  getAllUsers,
  getAllPayments,
  registerUser,
  loginUser,
  toggleUserStatus,
  deleteUser,
} = require("../controllers/adminContoller");

const {
  savePayment,
} = require("../controllers/userController");

const router = express.Router();
const app = express();
app.use(cors());
app.use(express.json());

// ---------------------- Multer config ----------------------
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });


// Routes
router.get("/users-all", auth, getAllUsers);
router.get("/payments-all", auth, getAllPayments);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/save-payment", upload.single("screenshot"), savePayment);
router.put("/user/:id/status", auth, toggleUserStatus);
router.delete("/user/:id", auth, deleteUser);




/* router.get("/users-all",auth, async (req, res) => {
  try {

     const loggedInUserId = req.user.id; // 👈 use .id instead of ._id

    const users = await User.find({ _id: { $ne: loggedInUserId } });

    res.status(200).json({
      success: true,
      count: users.length,
      data: users,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});



router.get("/payments-all",auth, async (req, res) => {
  try {
    // Populate the correct ref field from Payments model
    const payments = await Payments.find({}).populate("user_id", "username email");

    res.status(200).json({
      success: true,
      count: payments.length,
      data: payments,
    });
  } catch (error) {
    console.error("Error fetching payments:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});




// ---------------------- Register ----------------------
router.post("/register", async (req, res) => {
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
});

// ---------------------- Login ----------------------
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ msg: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ msg: "Invalid email or password" });

    const token = jwt.sign(
      { id: user._id, email: user.email },
      JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      token,
      user: { id: user._id, username: user.username, email: user.email,role_id: user.role_id},
    });
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
});

// ---------------------- Save Payment ----------------------
router.post("/save-payment", upload.single("screenshot"), async (req, res) => {
  try {
    const { email, transactionId } = req.body;

    const newPayment = new Payments({
      user_id: req.user.id, // auto from token
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
});



// Toggle user status
router.put("/user/:id/status",auth, async (req, res) => {
  try {
       // console.log("User to toggle:", req.params.id);
  //return false;

    const user = await User.findById(req.params.id);

    if (!user) return res.status(404).json({ message: "User not found" });

    // Toggle status
    user.status = user.status === "active" ? "inactive" : "active";
    await user.save();

    res.json({ success: true, status: user.status });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


 */

module.exports = router;
