import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div style={page}>
      <Navbar role="admin" />

      <h2 style={{ marginBottom: "0.5rem" }}>Admin Dashboard</h2>
      <p style={{ color: "#94a3b8", marginBottom: "2rem" }}>
        System overview & management
      </p>

      {/* ===== STATS ===== */}
      <div style={grid}>
        <div
          style={card}
          onClick={() => navigate("/admin/manage", { state: { tab: "customers" } })}
        >
          <h3>👥 Users</h3>
          <p>View all customers</p>
        </div>

        <div
          style={card}
          onClick={() => navigate("/admin/manage", { state: { tab: "vendors" } })}
        >
          <h3>🛠 Vendors</h3>
          <p>Approve / suspend vendors</p>
        </div>

        <div
          style={card}
          onClick={() => navigate("/admin/manage", { state: { tab: "orders" } })}
        >
          <h3>📦 Orders</h3>
          <p>Track all bookings</p>
        </div>

        <div
          style={card}
          onClick={() => navigate("/admin/manage", { state: { tab: "services" } })}
        >
          <h3>🧰 Services</h3>
          <p>Manage platform services</p>
        </div>

        <div
          style={profileCard}
          onClick={() => navigate("/profile")}
        >
          <h3>👤 Profile</h3>
          <p>Edit admin profile</p>
        </div>
      </div>
    </div>
  );
}

/* ================= STYLES ================= */
const page = {
  minHeight: "100vh",
  background: "#020617",
  color: "white",
  padding: "2rem",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "1.5rem",
};

const card = {
  background: "#0f172a",
  padding: "1.5rem",
  borderRadius: "14px",
  cursor: "pointer",
  transition: "all 0.25s ease",
};

const profileCard = {
  ...card,
  background: "linear-gradient(135deg, #4f7cff, #1e40af)",
};
