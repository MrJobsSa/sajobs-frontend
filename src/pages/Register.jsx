import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    axios.post("https://sajobs-backend-production.up.railway.app", form)
      .then((res) => {
        setMessage("Registration successful! You can now login.");
        setError("");
        setForm({ name: "", email: "", password: "" });
      })
      .catch((err) => {
        setError("Something went wrong. Please try again.");
        setMessage("");
      });
  };

  return (
    <div className="form-wrapper">
      <div className="form-container">
        <h1>Create Account</h1>
        <p>Register as an employer to post jobs</p>

        {message && <div className="success-message">{message}</div>}
        {error && <div className="error-message">{error}</div>}

        <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} />
        <input name="email" type="email" placeholder="Email address" value={form.email} onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} />

        <button className="btn-primary" onClick={handleSubmit}>Register</button>

        <div className="link">
          Already have an account? <a href="/login">Login here</a>
        </div>
      </div>
    </div>
  );
}

export default Register;