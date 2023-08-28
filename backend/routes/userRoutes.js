const express = require("express");
const {
  registerUser,
  loginUser,
  allUsers,
} = require("../controllers/userControllers");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

router.route("/signup").post(registerUser);

router.post("/login", loginUser);

router.get("/", protect, allUsers);

module.exports = router;
