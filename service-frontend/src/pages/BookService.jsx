import React, { useState } from "react";
import Navbar from "../components/Navbar";

export default function BookService() {
  const [form, setForm] = useState({
    date: "",
    address: "",
    notes: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Data:", form);
    alert("Service booked successfully!");
  };

  return (
    <>
      <Navbar />
      <div className="page">
        <h2>Book Service</h2>

        <form className="form" onSubmit={handleSubmit}>
          <input
            type="date"
            name="date"
            required
            onChange={handleChange}
          />

          <input
            type="text"
            name="address"
            placeholder="Service Address"
            required
            onChange={handleChange}
          />

          <textarea
            name="notes"
            placeholder="Additional notes"
            onChange={handleChange}
          />

          <button type="submit">Confirm Booking</button>
        </form>
      </div>
    </>
  );
}
