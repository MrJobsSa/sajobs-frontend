import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [jobs, setJobs] = useState([]);
  const [editJob, setEditJob] = useState(null);
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("");
  const token = localStorage.getItem("token");
  const employerId = parseInt(localStorage.getItem("employerId"));

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = () => {
    axios.get("https://sajobs-backend-production.up.railway.app/api/jobs")
      .then((res) => setJobs(res.data))
      .catch((err) => console.error(err));
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this job?")) {
      axios.delete(`https://sajobs-backend-production.up.railway.app/api/jobs/${id}`, {
        headers: { authorization: token }
      })
        .then(() => fetchJobs())
        .catch((err) => console.error(err));
    }
  };

  const handleEdit = (job) => {
    setEditJob({ ...job });
  };

  const handleEditChange = (e) => {
    setEditJob({ ...editJob, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = () => {
    axios.put(`https://sajobs-backend-production.up.railway.app/api/jobs/${editJob.id}`, editJob, {
      headers: { authorization: token }
    })
      .then(() => {
        setEditJob(null);
        fetchJobs();
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      {/* HERO SECTION */}
      <div className="hero">
        <h1>Find Your Dream Job</h1>
        <p>Search thousands of jobs from top employers</p>
        <div className="hero-search">
          <input
            placeholder="Job title, company or location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button>Search Jobs</button>
        </div>
        {/* FILTER */}
      <div className="container">
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          style={{ width: "100%", padding: "12px", marginBottom: "24px", border: "1px solid #d1d5db", borderRadius: "8px", fontSize: "15px", outline: "none" }}
        >
          <option value="">All Job Types</option>
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
          <option value="Contract">Contract</option>
          <option value="Internship">Internship</option>
          <option value="Remote">Remote</option>
        </select>
      </div>
      </div>

      {/* JOB LISTINGS */}
      <div className="container">
        <h2 style={{ fontSize: "20px", fontWeight: "700", color: "#333", marginBottom: "20px" }}>
          {jobs.length} Jobs Available
        </h2>

        {jobs.length === 0 ? (
          <p style={{ color: "#888" }}>No jobs posted yet.</p>
        ) : (
         jobs.filter(job =>
        (job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.company.toLowerCase().includes(search.toLowerCase()) ||
        job.location.toLowerCase().includes(search.toLowerCase())) &&
        (filterType === "" || job.type === filterType)
).map((job) => (
            <div key={job.id} className="card">
              {editJob && editJob.id === job.id ? (
                <div>
                  <input name="title" value={editJob.title} onChange={handleEditChange} placeholder="Job Title" />
                  <input name="company" value={editJob.company} onChange={handleEditChange} placeholder="Company" />
                  <input name="location" value={editJob.location} onChange={handleEditChange} placeholder="Location" />
                  <textarea name="description" value={editJob.description} onChange={handleEditChange} placeholder="Description" />
                  <div className="actions">
                    <button className="btn-success" onClick={handleEditSubmit}>Save</button>
                    <button className="btn-gray" onClick={() => setEditJob(null)}>Cancel</button>
                  </div>
                </div>
              ) : (
                <div>
                 <h2>{job.title}</h2>
<p className="company">🏢 {job.company}</p>
<p className="location">📍 {job.location}</p>
{job.salary && <p className="location">💰 {job.salary}</p>}
{job.type && <p className="location">💼 {job.type}</p>}
<p className="description">{job.description}</p>
                  <div className="actions">
                  {token && job.employer_id === employerId && <button className="btn-edit" onClick={() => handleEdit(job)}>Edit</button>}
                  {token && job.employer_id === employerId && <button className="btn-danger" onClick={() => handleDelete(job.id)}>Delete</button>}
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Home;