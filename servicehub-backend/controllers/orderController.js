const Order = require("../models/Order");
const Service = require("../models/Service");

// ========================
// Customer: Create Order
// ========================
exports.createOrder = async (req, res) => {
  try {
    const { serviceId, scheduledDate, notes } = req.body;

    const service = await Service.findById(serviceId);
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    const order = await Order.create({
      customer: req.user._id,
      vendor: service.vendor,
      service: service._id,
      totalPrice: service.price,
      scheduledDate,
      notes,
    });

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ========================
// Vendor: Get Orders
// ========================
exports.getVendorOrders = async (req, res) => {
  const orders = await Order.find({ vendor: req.user._id })
    .populate("customer", "name email")
    .populate("service", "name price")
    .sort({ scheduledDate: 1 });

  const grouped = {
    pending: [],
    inProgress: [],
    completed: [],
  };

  orders.forEach(o => grouped[o.status].push(o));
  res.json(grouped);
};

// ========================
// Customer: Get Orders
// ========================
exports.getCustomerOrders = async (req, res) => {
  const orders = await Order.find({ customer: req.user._id })
    .populate("service", "name price")
    .populate("vendor", "name email");

  res.json(orders);
};

// ========================
// Update Status
// ========================
exports.updateOrderStatus = async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (!order) return res.status(404).json({ message: "Order not found" });

  if (
    req.user.role === "vendor" &&
    order.vendor.toString() !== req.user._id.toString()
  ) {
    return res.status(403).json({ message: "Forbidden" });
  }

  order.status = req.body.status;
  await order.save();

  res.json(order);
};

// ========================
// Admin
// ========================
exports.getAllOrders = async (req, res) => {
  const orders = await Order.find()
    .populate("customer vendor service", "name email price");
  res.json(orders);
};
