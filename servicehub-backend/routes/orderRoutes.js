const express = require("express");
const router = express.Router();
const {
  createOrder,
  getVendorOrders,
  getCustomerOrders,
  updateOrderStatus,
  getAllOrders,
} = require("../controllers/orderController");

const { protect, authorizeRoles } = require("../middleware/authMiddleware");

// Customer
router.post("/", protect, authorizeRoles("user"), createOrder);
router.get("/customer", protect, authorizeRoles("user"), getCustomerOrders);

// Vendor
router.get("/vendor", protect, authorizeRoles("vendor"), getVendorOrders);
router.put("/:id/status", protect, authorizeRoles("vendor", "admin"), updateOrderStatus);

// Admin
router.get("/", protect, authorizeRoles("admin"), getAllOrders);

module.exports = router;
