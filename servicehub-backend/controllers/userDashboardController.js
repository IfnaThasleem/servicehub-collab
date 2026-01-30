const Order = require("../models/Order");

exports.getUserDashboard = async (req, res) => {
  try {
    const userId = req.user._id;

    const orders = await Order.find({ customer: userId })
      .populate("service", "name")
      .sort({ createdAt: -1 });

    const pending = orders.filter(o => o.status === "pending").length;
    const inProgress = orders.filter(o => o.status === "inProgress").length;
    const completed = orders.filter(o => o.status === "completed").length;

    res.json({
      pending,
      inProgress,
      completed,
      recentOrders: orders.slice(0, 5),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "User dashboard failed" });
  }
};
