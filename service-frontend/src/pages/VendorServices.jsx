import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

export default function VendorServices() {
  const [services, setServices] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) return;

    const fetchServices = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/services/vendor",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setServices(res.data);
      } catch {
        console.error("Failed to load vendor services");
      }
    };

    fetchServices();
  }, [token]);

  return (
    <div style={page}>
      <Navbar role="vendor" />
      <h2>🛠 My Services</h2>

      {services.length === 0 ? (
        <p>No services found</p>
      ) : (
        services.map((s) => (
          <div key={s._id} style={card}>
            <h4>{s.name}</h4>
            <p>{s.category}</p>
            <p>Rs. {s.price}</p>
          </div>
        ))
      )}
    </div>
  );
}

const page = {
  padding: "2rem",
  minHeight: "100vh",
  background: "#020617",
  color: "white",
};

const card = {
  background: "#0f172a",
  padding: "1rem",
  borderRadius: "12px",
  marginBottom: "1rem",
};
