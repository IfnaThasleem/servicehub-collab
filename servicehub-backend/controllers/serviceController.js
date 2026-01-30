const Service = require("../models/Service");

// ================= CREATE =================
exports.createService = async (req, res) => {
  try {
    const { name, description, price, category } = req.body;

    const service = await Service.create({
      name,
      description,
      price,
      category,
      vendor: req.user._id,
    });

    res.status(201).json({
      message: "Service created successfully",
      service,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ================= GET ALL =================
exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.find()
      .populate("vendor", "name email role")
      .sort({ createdAt: -1 });

    res.json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ================= GET ONE =================
exports.getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id).populate(
      "vendor",
      "name email role"
    );

    if (!service)
      return res.status(404).json({ message: "Service not found" });

    res.json(service);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ================= UPDATE =================
exports.updateService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);

    if (!service)
      return res.status(404).json({ message: "Service not found" });

    if (
      service.vendor.toString() !== req.user._id.toString() &&
      req.user.role !== "admin"
    ) {
      return res.status(403).json({ message: "Not authorized" });
    }

    Object.assign(service, req.body);
    const updated = await service.save();

    res.json({ message: "Service updated successfully", service: updated });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ================= DELETE =================
exports.deleteService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);

    if (!service)
      return res.status(404).json({ message: "Service not found" });

    if (
      service.vendor.toString() !== req.user._id.toString() &&
      req.user.role !== "admin"
    ) {
      return res.status(403).json({ message: "Not authorized" });
    }

    await Service.deleteOne({ _id: service._id });

    res.json({ message: "Service deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
