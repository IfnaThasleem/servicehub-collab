import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function PaymentPage() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");

  const handlePay = async () => {
    try {
      setLoading(true);

      // DEMO payment success → create order / update booking
      await axios.post(
        "http://localhost:5000/api/payments",
        { status: "paid" },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert("Payment successful ✅");
      navigate("/user/dashboard");
    } catch (err) {
      console.error(err);
      alert("Payment failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={page}>
      <h1>Payment</h1>
      <p>Total Amount</p>
      <h2>Rs. 5000</h2>

      <button style={btn} onClick={handlePay} disabled={loading}>
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </div>
  );
}

/* ===== STYLES ===== */
const page = {
  minHeight: "100vh",
  background: "#020617",
  color: "white",
  padding: "2rem",
};

const btn = {
  padding: "12px 20px",
  background: "#4f7cff",
  border: "none",
  borderRadius: "8px",
  color: "white",
  fontSize: "16px",
};
