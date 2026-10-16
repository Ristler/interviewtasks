const loginUser = async (credentials) => {
  const response = await fetch('/api/login', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  })

  const responseText = await response.text()
  let data = null

  if (responseText) {
    try {
      data = JSON.parse(responseText)
    } catch {
      data = null
    }
  }

  if (!response.ok) {
    throw new Error('Error')
  }

  return data
}

export { loginUser }
