import React, { useState } from "react";
import axios from "axios";

export default function ReviewsPage() {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");

  const submitReview = async () => {
    try {
      setLoading(true);

      await axios.post(
        "http://localhost:5000/api/reviews",
        { rating, comment },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert("Review submitted ⭐");
      setRating(5);
      setComment("");
    } catch (err) {
      console.error(err);
      alert("Failed to submit review");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={page}>
      <h1>Leave a Review</h1>

      <label>Rating (1–5)</label>
      <input
        type="number"
        min="1"
        max="5"
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        style={input}
      />

      <label>Comment</label>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        style={input}
      />

      <button style={btn} onClick={submitReview} disabled={loading}>
        {loading ? "Submitting..." : "Submit Review"}
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

const input = {
  width: "100%",
  padding: "10px",
  marginBottom: "12px",
  background: "#1e293b",
  color: "white",
  border: "1px solid #334155",
  borderRadius: "6px",
};

const btn = {
  padding: "12px",
  background: "#4f7cff",
  border: "none",
  borderRadius: "8px",
  color: "white",
};
