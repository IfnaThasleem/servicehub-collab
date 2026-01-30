import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function UserDashboard() {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  return (
    <div style={page}>
      <Navbar role={role} />

      <div style={content}>
        <h2>User Dashboard</h2>

        <div style={grid}>
          <Card title="Browse Services" onClick={() => navigate("/services")} />
          <Card title="My Orders" onClick={() => navigate("/orders")} />
          <Card title="Profile" onClick={() => alert("/profile")} />
        </div>
      </div>
    </div>
  );
}

const Card = ({ title, onClick }) => (
  <div style={card} onClick={onClick}>
    <h3>{title}</h3>
  </div>
);

const page = { minHeight: "100vh", background: "#020617", color: "white" };
const content = { padding: "2rem" };
const grid = { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "1.5rem" };
const card = {
  background: "#0f172a",
  padding: "2rem",
  borderRadius: "12px",
  cursor: "pointer",
};
