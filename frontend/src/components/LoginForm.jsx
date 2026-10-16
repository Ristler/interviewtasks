function LoginForm({ form, onChange, onSubmit, error, isLoading }) {
  return (
    <main className="login-page">
      <section className="login-card">
        <div className="login-header">
          <h1>Log in</h1>
        </div>

        <form onSubmit={onSubmit} className="login-form">
          <label>
            Email
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              placeholder="admin@example.com"
              required
            />
          </label>

          <label>
            Password
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={onChange}
              placeholder="password123"
              required
            />
          </label>

          {error ? <p className="error-message">{error}</p> : null}

          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Signing in...' : 'Login'}
          </button>
        </form>
      </section>
    </main>
  )
}

export default LoginForm
