import { Link, useNavigate } from "react-router-dom";

export default function Navbar({ role }) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav style={nav}>
      <h2 style={logo}>ServiceHub</h2>

      <div style={links}>
        {/* ================= ADMIN ================= */}
        {role === "admin" && (
          <>
            <NavItem to="/admin/dashboard" label="Dashboard" />
            <NavItem to="/admin/manage" label="Manage Users" />
            <NavItem to="/services" label="Services" />
            <NavItem to="/orders" label="Orders" />
          </>
        )}

        {/* ================= VENDOR ================= */}
        {role === "vendor" && (
          <>
            <NavItem to="/vendor/dashboard" label="Dashboard" />
            <NavItem to="/vendor/services" label="My Services" />
            <NavItem to="/vendor/earnings" label="Earnings" />
            <NavItem to="/orders" label="Orders" />
          </>
        )}

        {/* ================= USER ================= */}
        {role === "user" && (
          <>
            <NavItem to="/user/dashboard" label="Dashboard" />
            <NavItem to="/services" label="Services" />
            <NavItem to="/orders" label="My Orders" />
          </>
        )}

        {/* ================= LOGOUT ================= */}
        <button style={logoutBtn} onClick={logout}>
          Logout
        </button>
      </div>
    </nav>
  );
}

/* ================= REUSABLE LINK ================= */
const NavItem = ({ to, label }) => (
  <Link to={to} style={link}>
    {label}
  </Link>
);

/* ================= STYLES ================= */
const nav = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem 2rem",
  background: "#020617",
  borderBottom: "1px solid #1e293b",
};

const logo = {
  color: "#4f7cff",
  margin: 0,
};

const links = {
  display: "flex",
  gap: "1.2rem",
  alignItems: "center",
};

const link = {
  color: "#e5e7eb",
  textDecoration: "none",
  fontWeight: "500",
};

const logoutBtn = {
  padding: "6px 12px",
  background: "#ef4444",
  border: "none",
  borderRadius: "6px",
  color: "white",
  cursor: "pointer",
};
