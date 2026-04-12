import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useApp } from '../context/AppContext.jsx'
import { useToast } from '../context/ToastContext.jsx'
import '../css/acceso.css'

export default function Login() {
  const { loginUser } = useApp()
  const { showToast } = useToast()
  const navigate = useNavigate()

  const [form, setForm] = useState({ email: '', password: '' })

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.id]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()

    // Preparado para backend: cuando tengas API, reemplaza loginUser()
    // por: const res = await fetch('/api/auth/login', { method: 'POST', ... })
    const result = loginUser(form.email, form.password)

    if (!result.ok) {
      showToast(result.message, 'error')
      return
    }

    showToast('¡Ingreso exitoso! Bienvenido', 'success')
    setTimeout(() => navigate('/'), 1000)
  }

  return (
    <main>
      <div className="login-wrapper">
        <form className="stratum-card" onSubmit={handleSubmit}>

          <div className="card-header">
            <span className="data-label">WorkHub // Acceso</span>
            <div className="status-dot"></div>
          </div>

          <h2 className="card-title">Bienvenido</h2>
          <p className="card-desc">Introduce tus credenciales para continuar</p>

          <div className="form-group">
            <label htmlFor="email" className="form-label">Correo electrónico</label>
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="tu@email.com"
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input
              type="password"
              id="password"
              className="form-input"
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange}
              required
              autoComplete="current-password"
            />
          </div>

          <button type="submit" className="btn-primary">Ejecutar Ingreso</button>

          <Link to="/" className="back-link">← Volver al inicio</Link>

        </form>
      </div>
    </main>
  )
}
