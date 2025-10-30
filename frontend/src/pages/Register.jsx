import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

const API = import.meta.env.VITE_API || 'http://localhost:4000/api'

export default function Register() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      await axios.post(API + '/register', { username, email, password })
      navigate('/login')
    } catch (err) {
      setMsg(err.response?.data?.msg || 'Registration failed')
    }
  }

  return (
    <div className="page">
      <div className="card auth-box">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" value={username} onChange={e=>setUsername(e.target.value)} required />
          <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required />
          <button className="btn" type="submit">Register</button>
        </form>
        <p className="message">{msg}</p>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  )
}
