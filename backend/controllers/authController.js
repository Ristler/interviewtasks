const validateLoginPayload = ({ email, password }) => {
  if (!email || !password) {
    return false
  }

  return true
}

const healthCheck = (_req, res) => {
  return res.json({ status: 'ok' })
}

const loginUser = (req, res) => {
  const { email, password } = req.body || {}

  if (!validateLoginPayload({ email, password })) {
    return res.status(400).json({
      success: false,
      message: 'Email and password are required.',
    })
  }

  if (email === 'admin@example.com' && password === 'password123') {
    return res.json({
      success: true,
      message: 'Login successful',
      user: {
        name: 'Alex Morgan',
        email,
      },
    })
  }

  return res.status(401).json({
    success: false,
    message: 'Invalid email or password.',
  })
}

export { healthCheck, loginUser }
