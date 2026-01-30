import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function VendorDashboard() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="dashboard">
        <h2>Vendor Dashboard</h2>

        <div className="stats-grid">
          <div className="stat-card" onClick={() => navigate("/services")}>
            <h3>My Services</h3>
            <p>Manage your services</p>
          </div>

          <div className="stat-card" onClick={() => navigate("/vendor/earnings")}>
            <h3>Earnings</h3>
            <p>View income details</p>
          </div>

          <div className="stat-card" onClick={() => navigate("/profile")}>
            <h3>Profile</h3>
            <p>View & edit profile</p>
          </div>
        </div>
      </div>
    </>
  );
}
