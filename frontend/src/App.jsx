import { useState } from 'react'
import './App.css'
import { loginUser } from './api/authApi'
import LoginForm from './components/LoginForm'
import LandingPage from './components/LandingPage'

const initialForm = {
  email: 'admin@example.com',
  password: 'password123',
}

function App() {
  const [form, setForm] = useState(initialForm)
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const data = await loginUser(form)
      setUser(data.user)
    } catch (submitError) {
      setError(submitError.message)
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogout = () => {
    setUser(null)
    setError('')
    setForm(initialForm)
  }

  if (user) {
    return <LandingPage user={user} onLogout={handleLogout} />
  }

  return (
    <LoginForm
      form={form}
      onChange={handleChange}
      onSubmit={handleSubmit}
      error={error}
      isLoading={isLoading}
    />
  )
}

export default App
