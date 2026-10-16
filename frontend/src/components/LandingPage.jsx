function LandingPage({ user, onLogout }) {
  return (
    <main className="landing-page">
      <div className="landing-card">
        <p className="eyebrow">Welcome back</p>
        <h1>Landing page</h1>
        <p className="welcome-message">
          Hello, <strong>{user.name}</strong>.
        </p>

        <div className="metrics">
          <div>
            <span className="label">Department</span>
            <strong>Engineering</strong>
          </div>
          <div>
            <span className="label">Status</span>
            <strong>Available</strong>
          </div>
          <div>
            <span className="label">Tasks</span>
            <strong>4 active</strong>
          </div>
        </div>

        <button type="button" className="secondary-button" onClick={onLogout}>
          Log out
        </button>
      </div>
    </main>
  )
}

export default LandingPage
