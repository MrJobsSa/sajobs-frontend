import React, { useState, useEffect } from "react";
import axios from "axios";

function Dashboard() {
  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    description: "",
    type: "Full-Time",
    salary: ""
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const employerName = localStorage.getItem("employerName");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("employerName");
    window.location.href = "/login";
  };

  const handleSubmit = () => {
    axios.post("https://sajobs-backend-production.up.railway.app/api/jobs", form, {
  headers: { authorization: localStorage.getItem("token") }
})
      .then((res) => {
        setMessage("Job posted successfully! ✅");
        setError("");
        setForm({ title: "", company: "", location: "", description: "", type: "Full-Time", salary: "" });
      })
      .catch((err) => {
        setError("Something went wrong. Please try again.");
        setMessage("");
      });
  };

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-header">
        <h1>Welcome, {employerName} 👋</h1>
        <button className="btn-logout" onClick={handleLogout}>Logout</button>
      </div>

      <div className="form-container" style={{ maxWidth: "100%" }}>
        <h1>Post a New Job</h1>
        <p>Fill in the details below to post a job listing</p>

        {message && <div className="success-message">{message}</div>}
        {error && <div className="error-message">{error}</div>}

        <input name="title" placeholder="Job Title e.g. Software Developer" value={form.title} onChange={handleChange} />
        <input name="company" placeholder="Company Name" value={form.company} onChange={handleChange} />
        <input name="location" placeholder="Location e.g. Johannesburg" value={form.location} onChange={handleChange} />
        <input name="salary" placeholder="Salary e.g. R15,000 - R20,000 per month" value={form.salary} onChange={handleChange} />

        <select name="type" value={form.type} onChange={handleChange}>
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
          <option value="Contract">Contract</option>
          <option value="Internship">Internship</option>
          <option value="Remote">Remote</option>
        </select>

        <textarea name="description" placeholder="Job Description — include responsibilities, requirements and benefits" value={form.description} onChange={handleChange} />

        <button className="btn-primary" onClick={handleSubmit}>Post Job</button>
      </div>
    </div>
  );
}

export default Dashboard;