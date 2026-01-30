const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

/* ================= MIDDLEWARE ================= */
app.use(cors());
app.use(express.json());

/* ================= DATABASE ================= */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => {
    console.error("❌ MongoDB error:", err.message);
    process.exit(1);
  });

/* ================= ROUTES ================= */
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const userDashboardRoutes = require("./routes/userDashboardRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const orderRoutes = require("./routes/orderRoutes");
const vendorRoutes = require("./routes/vendorRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/users", userDashboardRoutes); // dashboard + profile
app.use("/api/services", serviceRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/vendor", vendorRoutes);

/* ================= ROOT ================= */
app.get("/", (req, res) => {
  res.send("ServiceHub API Running 🚀");
});

/* ================= 404 ================= */
app.use((req, res) => {
  res.status(404).json({ message: "API route not found" });
});

/* ================= SERVER ================= */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
