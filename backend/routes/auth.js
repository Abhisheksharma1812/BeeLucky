
const express = require("express");
const multer = require("multer");
const path = require("path");
const auth = require("../middleware/auth");
const cors = require('cors');
const {
  getAllUsers,
  getAllPayments,
  userTransaction,
  registerUser,
  loginUser,
  toggleUserStatus,
  updatePaymentStatus,
  deleteUser,
  getMe,
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

router.get("/user", auth, getMe);
router.get("/users-all", auth, getAllUsers);
router.get("/user-transaction/:id", auth, userTransaction);
router.get("/payments-all", auth, getAllPayments);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/save-payment", upload.single("screenshot"), savePayment);
router.put("/payment/:id/approve", auth, updatePaymentStatus);
router.put("/user/:id/status", auth, toggleUserStatus);
router.delete("/user/:id", auth, deleteUser);



module.exports = router;
