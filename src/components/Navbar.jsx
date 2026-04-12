import { Link, useLocation } from 'react-router-dom'
import logoIcon from './assets/isotipo.svg'

export default function Navbar() {
  const { pathname } = useLocation()

  const links = [
    { to: '/register', label: 'REGÍSTRATE' },
    { to: '/booking', label: 'RESERVA' },
    { to: '/my-bookings', label: 'MIS RESERVAS' },
    { to: '/contact', label: 'CONTACTO' },
    { to: '/admin', label: 'ADMIN', muted: true },
  ]

  return (
    <header id="mainNavWrapper">
      <nav className="navbar navbar-expand-lg" id="mainNav">
        <div className="container-fluid">

          <Link className="navbar-brand logo" to="/">
            <img src={logoIcon} alt="WorkHub isotipo" width="28" height="28" />
            WorkHub<span>.Coworking</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarContent">
            <ul className="navbar-nav">
              {links.map(link => (
                <li className="nav-item" key={link.to}>
                  <Link
                    className={`nav-link ${link.muted ? 'text-secondary' : ''} ${pathname === link.to ? 'active-link' : ''}`}
                    to={link.to}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </nav>
    </header>
  )
}
