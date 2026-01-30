import React from "react";
import Navbar from "../components/Navbar";

export default function VendorEarnings() {
  return (
    <>
      <Navbar />
      <div className="page">
        <h2>My Earnings</h2>

        <table className="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Service</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2026-01-20</td>
              <td>Cleaning</td>
              <td>LKR 2,500</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
