import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    axios.post("https://sajobs-backend-production.up.railway.app", form)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("employerName", res.data.name);
        localStorage.setItem("employerId", res.data.id);
        setMessage("Login successful! Redirecting...");
        setError("");
        setTimeout(() => {
          window.location.href = "/dashboard";
        }, 1000);
      })
      .catch((err) => {
        setError("Invalid email or password. Please try again.");
        setMessage("");
      });
  };

  return (
    <div className="form-wrapper">
      <div className="form-container">
        <h1>Welcome Back</h1>
        <p>Login to your employer account</p>

        {message && <div className="success-message">{message}</div>}
        {error && <div className="error-message">{error}</div>}

        <input
          name="email"
          type="email"
          placeholder="Email address"
          value={form.email}
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />

        <button className="btn-primary" onClick={handleSubmit}>
          Login
        </button>

        <div className="link">
          Don't have an account? <a href="/register">Register here</a>
        </div>
      </div>
    </div>
  );
}

export default Login;