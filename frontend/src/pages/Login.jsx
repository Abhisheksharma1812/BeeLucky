import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import "../css/auth.css";  // ✅ import here

const API = import.meta.env.VITE_API || 'http://localhost:4000/api'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const res = await axios.post(API + '/auth/login', { email, password })
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('user', JSON.stringify(res.data.user))
      navigate('/')
    } catch (err) {
      setMsg(err.response?.data?.msg || 'Login failed')
    }
  }

  return (
    <div className="page">
      <div className="card auth-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required />
          <button className="btn" type="submit">Login</button>
        </form>
        <p className="message">{msg}</p>
        <p>Don’t have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  )
}
