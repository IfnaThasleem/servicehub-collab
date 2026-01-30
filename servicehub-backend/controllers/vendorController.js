const Order = require("../models/Order");

// ================= DASHBOARD =================
exports.getVendorDashboard = async (req, res) => {
  try {
    const vendorId = req.user._id;

    const totalOrders = await Order.countDocuments({ vendor: vendorId });

    const completedOrders = await Order.countDocuments({
      vendor: vendorId,
      status: "completed",
    });

    const earningsAgg = await Order.aggregate([
      { $match: { vendor: vendorId, status: "completed" } },
      { $group: { _id: null, total: { $sum: "$price" } } },
    ]);

    res.json({
      totalOrders,
      completedOrders,
      totalEarnings: earningsAgg[0]?.total || 0,
    });
  } catch (err) {
    console.error("Vendor dashboard error:", err);
    res.status(500).json({ message: "Vendor dashboard error" });
  }
};

// ================= ORDERS =================
exports.getVendorOrders = async (req, res) => {
  try {
    const orders = await Order.find({ vendor: req.user._id })
      .sort({ createdAt: -1 })
      .populate("service", "name price");

    res.json(orders);
  } catch (err) {
    console.error("Vendor orders error:", err);
    res.status(500).json({ message: "Failed to load vendor orders" });
  }
};
