const express = require("express");
const router = express.Router();

const { protect, authorizeRoles } = require("../middleware/authMiddleware");
const {
  getVendorDashboard,
  getVendorOrders,
} = require("../controllers/vendorController");

router.get(
  "/dashboard",
  protect,
  authorizeRoles("vendor"),
  getVendorDashboard
);

router.get(
  "/orders",
  protect,
  authorizeRoles("vendor"),
  getVendorOrders
);

module.exports = router;
