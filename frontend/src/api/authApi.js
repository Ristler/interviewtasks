const loginUser = async (credentials) => {
  const response = await fetch('/api/login', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error('Login failed. Please try again.')
  }

  return data
}

export { loginUser }
