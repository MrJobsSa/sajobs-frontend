import React from "react";

function AboutUs() {
  return (
    <div>
      {/* HERO */}
      <div style={{
        background: "linear-gradient(135deg, #003A9B, #0057D9)",
        padding: "60px 40px",
        textAlign: "center",
        color: "white"
      }}>
        <h1 style={{ fontSize: "42px", fontWeight: "800", marginBottom: "10px" }}>About SA Jobs</h1>
        <p style={{ fontSize: "18px", color: "#c7d9ff", maxWidth: "600px", margin: "0 auto" }}>
          Connecting South African job seekers with top employers across the country
        </p>
      </div>

      <div className="container" style={{ paddingTop: "40px", paddingBottom: "60px" }}>

        {/* WHO WE ARE */}
        <div className="card">
          <h2 style={{ marginBottom: "10px" }}>Who We Are 🇿🇦</h2>
          <p style={{ color: "#555", lineHeight: "1.8" }}>
            SA Jobs is a South African job advertising platform built to bridge the gap between 
            talented job seekers and employers across the country. We believe that every South African 
            deserves access to quality job opportunities regardless of where they are located.
            Our platform makes it easy for employers to post jobs and for job seekers to find 
            their next career opportunity — all in one place.
          </p>
        </div>

        {/* OUR MISSION */}
        <div className="card">
          <h2 style={{ marginBottom: "10px" }}>Our Mission 🎯</h2>
          <p style={{ color: "#555", lineHeight: "1.8" }}>
            Our mission is simple — to reduce unemployment in South Africa by making job 
            advertising accessible, affordable and effective for businesses of all sizes. 
            Whether you are a small local business or a large corporation, SA Jobs gives 
            you the tools to find the right people for your team.
          </p>
        </div>

        {/* WHAT WE OFFER */}
        <div className="card">
          <h2 style={{ marginBottom: "16px" }}>What We Offer 💼</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
            {[
              { icon: "📢", title: "Job Advertising", desc: "Post your job listings and reach thousands of job seekers across South Africa" },
              { icon: "🔍", title: "Easy Search", desc: "Job seekers can search and filter jobs by title, company, location and job type" },
              { icon: "🔒", title: "Secure Platform", desc: "All employer accounts are verified and secured with encrypted passwords" },
              { icon: "📱", title: "Mobile Friendly", desc: "Access SA Jobs from any device — desktop, tablet or mobile phone" },
            ].map((item) => (
              <div key={item.title} style={{
                background: "#f8faff",
                padding: "20px",
                borderRadius: "10px",
                textAlign: "center",
                border: "1px solid #e0e7ff"
              }}>
                <div style={{ fontSize: "32px", marginBottom: "10px" }}>{item.icon}</div>
                <h3 style={{ color: "#003A9B", marginBottom: "8px", fontSize: "16px" }}>{item.title}</h3>
                <p style={{ color: "#555", fontSize: "14px", lineHeight: "1.6" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* WHY CHOOSE US */}
        <div className="card">
          <h2 style={{ marginBottom: "10px" }}>Why Choose SA Jobs? ⭐</h2>
          <p style={{ color: "#555", lineHeight: "1.8" }}>
            — 100% South African platform built for South Africans<br />
            — Free for job seekers to browse and apply<br />
            — Simple and easy to use for employers<br />
            — Jobs posted instantly and visible to thousands<br />
            — Secure and trusted platform<br />
            — Mobile friendly — access from anywhere
          </p>
        </div>

        {/* CONTACT */}
        <div className="card" style={{ background: "#003A9B", color: "white", textAlign: "center" }}>
          <h2 style={{ color: "white", marginBottom: "10px" }}>Get In Touch 📧</h2>
          <p style={{ color: "#c7d9ff", lineHeight: "1.8" }}>
            Have a question or want to advertise with us?<br />
            We'd love to hear from you!
            <br /><br />
            <strong style={{ color: "white" }}>📧 info@sajobs.co.za</strong><br />
            <strong style={{ color: "white" }}>📍 Johannesburg, South Africa</strong>
          </p>
        </div>

      </div>
    </div>
  );
}

export default AboutUs;