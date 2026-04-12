import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext.jsx'
import { useToast } from '../context/ToastContext.jsx'

export default function Register() {
  const { registerUser } = useApp()
  const { showToast } = useToast()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    firstname: '', lastname: '', email: '',
    phone: '', company: '', password: '', passwordConfirm: ''
  })

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.id]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (form.password !== form.passwordConfirm) {
      showToast('Las contraseñas no coinciden', 'error')
      return
    }

    const result = registerUser({
      firstname: form.firstname, lastname: form.lastname,
      email: form.email, phone: form.phone,
      company: form.company, password: form.password
    })

    if (!result.ok) {
      showToast(result.message, 'error')
      return
    }

    showToast(`¡Bienvenido ${form.firstname}! Tu cuenta ha sido creada`, 'success')
    setForm({ firstname: '', lastname: '', email: '', phone: '', company: '', password: '', passwordConfirm: '' })
    setTimeout(() => navigate('/'), 2000)
  }

  return (
    <section className="section active">
      <header className="section-header">
        <span className="data-label">CREAR CUENTA</span>
        <h2>Únete a WorkHub</h2>
      </header>

      <div className="register-container">
        <aside className="register-benefits">
          <h3>BENEFICIOS DE REGISTRO</h3>
          <ul>
            {[
              'Acceso prioritario a reservas de espacios',
              'Descuentos exclusivos en membresías',
              'Gestión de reservas desde tu panel personal',
              'Acceso a eventos de networking',
              'Soporte dedicado 24/7',
            ].map(benefit => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </aside>

        <form onSubmit={handleSubmit}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="form-group">
              <label htmlFor="firstname" className="form-label">Nombre</label>
              <input type="text" className="form-input" id="firstname" placeholder="Tu nombre" value={form.firstname} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="lastname" className="form-label">Apellido</label>
              <input type="text" className="form-input" id="lastname" placeholder="Tu apellido" value={form.lastname} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-input" id="email" placeholder="tu@email.com" value={form.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="phone" className="form-label">Teléfono</label>
            <input type="tel" className="form-input" id="phone" placeholder="+34 600 000 000" value={form.phone} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="company" className="form-label">Empresa</label>
            <input type="text" className="form-input" id="company" placeholder="Nombre de tu empresa" value={form.company} onChange={handleChange} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="form-group">
              <label htmlFor="password" className="form-label">Contraseña</label>
              <input type="password" className="form-input" id="password" placeholder="••••••••" value={form.password} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="passwordConfirm" className="form-label">Confirmar</label>
              <input type="password" className="form-input" id="passwordConfirm" placeholder="••••••••" value={form.passwordConfirm} onChange={handleChange} required />
            </div>
          </div>
          <button type="submit" className="btn-primary">CREAR CUENTA</button>
        </form>
      </div>
    </section>
  )
}
