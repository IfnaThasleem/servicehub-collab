const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const { getUserDashboard } = require("../controllers/userDashboardController");

const router = express.Router();

router.get("/dashboard", protect, getUserDashboard);

module.exports = router;
