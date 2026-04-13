import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <Router>
      <nav style={{
  background: "#003A9B",
  padding: "12px 20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: "10px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
}}>
  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
    <span style={{ color: "#00AEEF", fontSize: "24px", fontWeight: "800" }}>SA</span>
    <span style={{ color: "white", fontSize: "24px", fontWeight: "800" }}>Jobs</span>
  </div>
  <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center" }}>
    <Link to="/" style={{ color: "white", textDecoration: "none", fontSize: "14px", fontWeight: "500" }}>Find Jobs</Link>
    <Link to="/dashboard" style={{ color: "white", textDecoration: "none", fontSize: "14px", fontWeight: "500" }}>Post a Job</Link>
    <Link to="/about" style={{ color: "white", textDecoration: "none", fontSize: "14px", fontWeight: "500" }}>About Us</Link>
    <Link to="/login" style={{ color: "white", textDecoration: "none", fontSize: "14px", fontWeight: "500" }}>Login</Link>
    <Link to="/register" style={{
      color: "#003A9B",
      background: "white",
      textDecoration: "none",
      fontSize: "14px",
      fontWeight: "600",
      padding: "6px 14px",
      borderRadius: "6px"
    }}>Register</Link>
  </div>
</nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
       <footer style={{
        background: "#003A9B",
        color: "white",
        padding: "40px 40px 20px 40px",
        marginTop: "60px"
      }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "30px",
          marginBottom: "30px"
        }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
              <span style={{ color: "#00AEEF", fontSize: "24px", fontWeight: "800" }}>SA</span>
              <span style={{ color: "white", fontSize: "24px", fontWeight: "800" }}>Jobs</span>
            </div>
            <p style={{ color: "#c7d9ff", fontSize: "14px", maxWidth: "250px" }}>
              Connecting South African employers with top talent across the country.
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: "16px", fontWeight: "700", marginBottom: "12px" }}>Quick Links</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <a href="/" style={{ color: "#c7d9ff", textDecoration: "none", fontSize: "14px" }}>Find Jobs</a>
              <a href="/dashboard" style={{ color: "#c7d9ff", textDecoration: "none", fontSize: "14px" }}>Post a Job</a>
              <a href="/register" style={{ color: "#c7d9ff", textDecoration: "none", fontSize: "14px" }}>Register</a>
              <a href="/login" style={{ color: "#c7d9ff", textDecoration: "none", fontSize: "14px" }}>Login</a>
              <a href="/about" style={{ color: "#c7d9ff", textDecoration: "none", fontSize: "14px" }}>About Us</a>
              <a href="/privacy-policy" style={{ color: "#c7d9ff", textDecoration: "none", fontSize: "14px" }}>Privacy Policy</a>
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: "16px", fontWeight: "700", marginBottom: "12px" }}>Contact Us</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <p style={{ color: "#c7d9ff", fontSize: "14px" }}>📧 info@sajobs.co.za</p>
              <p style={{ color: "#c7d9ff", fontSize: "14px" }}>📞 +27 12 545 0890</p>
              <p style={{ color: "#c7d9ff", fontSize: "14px" }}>📍 Pretoria, South Africa</p>
            </div>
          </div>
        </div>

        <div style={{
          borderTop: "1px solid #1e4fd8",
          paddingTop: "20px",
          textAlign: "center",
          color: "#c7d9ff",
          fontSize: "13px"
        }}>
          © 2026 SA Jobs. All rights reserved. Built with ❤️ in Mzansi.
        </div>
      </footer>
    </Router>
  );
}

export default App;