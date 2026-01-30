import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

export default function ServicesPage() {
  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");

  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/services").then((res) => {
      setServices(res.data);
    });
  }, []);

  const bookService = async () => {
    if (!date) return alert("Select date");

    await axios.post(
      "http://localhost:5000/api/orders",
      {
        serviceId: selectedService._id,
        scheduledDate: date,
        notes,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    alert("Service booked successfully");
    setSelectedService(null);
    setDate("");
    setNotes("");
  };

  return (
    <div style={page}>
      <Navbar role={role} />

      <div style={content}>
        <h2>Services</h2>

        <div style={grid}>
          {services.map((s) => (
            <div key={s._id} style={card}>
              <h3>{s.name}</h3>
              <p>{s.description}</p>
              <p><b>Rs. {s.price}</b></p>

              {role === "user" && (
                <button style={btn} onClick={() => setSelectedService(s)}>
                  Book Service
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ================= BOOKING MODAL ================= */}
      {selectedService && (
        <div style={overlay}>
          <div style={modal}>
            <h3>Book {selectedService.name}</h3>

            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} style={input} />
            <textarea placeholder="Notes" value={notes} onChange={(e) => setNotes(e.target.value)} style={input} />

            <button style={btn} onClick={bookService}>Confirm Booking</button>
            <button style={cancelBtn} onClick={() => setSelectedService(null)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ================= STYLES ================= */
const page = { minHeight: "100vh", background: "#020617", color: "white" };
const content = { padding: "2rem" };
const grid = { display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: "1.5rem" };
const card = { background: "#0f172a", padding: "1.5rem", borderRadius: "12px" };
const btn = { marginTop: "10px", padding: "8px", width: "100%", background: "#22c55e", border: "none", borderRadius: "6px" };
const cancelBtn = { ...btn, background: "#ef4444" };
const overlay = { position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", display: "flex", alignItems: "center", justifyContent: "center" };
const modal = { background: "#0f172a", padding: "2rem", borderRadius: "12px", width: "350px" };
const input = { width: "100%", padding: "10px", marginBottom: "10px" };
