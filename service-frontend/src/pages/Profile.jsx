import React from "react";
import Navbar from "../components/Navbar";

export default function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <Navbar />
      <div className="page">
        <h2>My Profile</h2>

        <div className="profile-card">
          <p><b>Name:</b> {user?.name}</p>
          <p><b>Email:</b> {user?.email}</p>
          <p><b>Role:</b> {user?.role}</p>

          {user?.role === "vendor" && (
            <p><b>Business Name:</b> Vendor Services</p>
          )}

          <button>Edit Profile</button>
        </div>
      </div>
    </>
  );
}
