import './App.css'

function App() {
  const internships = [
    {
      role: "Frontend Developer Intern",
      company: "TechNova",
      location: "Remote",
      stipend: "₹15,000/month",
      deadline: "2 Aug 2026",
      mode: "Remote",
      skills: "React, CSS, JavaScript"
    },
    {
      role: "Data Analyst Intern",
      company: "DataSphere",
      location: "Noida",
      stipend: "₹12,000/month",
      deadline: "5 Aug 2026",
      mode: "Hybrid",
      skills: "Excel, SQL, Python"
    },
    {
      role: "Software Engineer Intern",
      company: "CodeNest",
      location: "Bangalore",
      stipend: "₹20,000/month",
      deadline: "8 Aug 2026",
      mode: "On-site",
      skills: "DSA, C++, Java"
    }
  ]

  return (
    <div className="app">
      <div className="dashboard">

        {/* Navbar */}
        <nav className="navbar">
          <div>
            <h1 className="logo">OfferOrbit 🚀</h1>
            <p className="tagline">Track internships like a menace</p>
          </div>

          <button className="profile-btn">My Profile</button>
        </nav>

        {/* Hero */}
        <section className="hero">
          <div className="hero-text">
            <h2>Find, track and manage your dream internships ✨</h2>
            <p>
              Organize your applications, discover opportunities, and stay on top
              of deadlines without losing your sanity.
            </p>
          </div>

          <div className="hero-box">
            <h3>Today’s Goal</h3>
            <p>Apply to 2 internships and update your tracker.</p>
          </div>
        </section>

        {/* Stats */}
        <section className="stats">
          <div className="card">
            <h2>12</h2>
            <p>Applications Sent</p>
          </div>

          <div className="card">
            <h2>5</h2>
            <p>Responses Received</p>
          </div>

          <div className="card">
            <h2>3</h2>
            <p>Interviews Scheduled</p>
          </div>

          <div className="card">
            <h2>7</h2>
            <p>Saved Internships</p>
          </div>
        </section>

        {/* Main layout */}
        <div className="main-layout">

          {/* Left side */}
          <div className="left-panel">

            {/* Search + Filters */}
            <section className="search-section">
              <input
                type="text"
                placeholder="Search internship roles, companies, skills..."
                className="search-bar"
              />

              <div className="filters">
                <button>Remote</button>
                <button>Frontend</button>
                <button>Data</button>
                <button>High Stipend</button>
              </div>
            </section>

            {/* Internship Cards */}
            <section className="internships">
              <h2>Recommended Internships</h2>

              {internships.map((internship, index) => (
                <div className="internship-card" key={index}>
                  <div className="internship-top">
                    <div>
                      <h3>{internship.role}</h3>
                      <p className="company">{internship.company}</p>
                    </div>
                    <span className="mode-badge">{internship.mode}</span>
                  </div>

                  <div className="internship-details">
                    <p><strong>Location:</strong> {internship.location}</p>
                    <p><strong>Stipend:</strong> {internship.stipend}</p>
                    <p><strong>Deadline:</strong> {internship.deadline}</p>
                    <p><strong>Skills:</strong> {internship.skills}</p>
                  </div>

                  <div className="internship-actions">
                    <button>Apply</button>
                    <button className="secondary-btn">Save</button>
                  </div>
                </div>
              ))}
            </section>
          </div>

          {/* Right side */}
          <aside className="right-panel">
            <div className="side-card">
              <h3>Application Tracker</h3>
              <ul>
                <li>🟣 Applied - 12</li>
                <li>🔵 Interviewing - 3</li>
                <li>🟢 Offers - 1</li>
                <li>🔴 Rejected - 2</li>
              </ul>
            </div>

            <div className="side-card">
              <h3>Quick Tips</h3>
              <ul>
                <li>Tailor resume for each role</li>
                <li>Keep LinkedIn updated</li>
                <li>Apply before deadlines</li>
                <li>Track every application</li>
              </ul>
            </div>

            <div className="side-card">
              <h3>Upcoming Deadline</h3>
              <p><strong>Frontend Developer Intern</strong></p>
              <p>TechNova</p>
              <p>Deadline: 2 Aug 2026</p>
            </div>
          </aside>

        </div>
      </div>
    </div>
  )
}

export default App