// Footer.jsx — WorkHub Coworking
// Los estilos vienen del index.css (ya están definidos por el equipo)

import { useState } from 'react'

const socialLinks = [
  {
    href: 'https://instagram.com',
    label: 'Instagram',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    href: 'https://x.com',
    label: 'X',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18.901 5.998h2.998l-6.52 7.454 7.659 9.548h-6.03l-4.727-5.852-5.408 5.852H3.902l7.02-7.597L3.5 5.998h6.184l4.242 5.27 4.975-5.27z" />
      </svg>
    ),
  },
  {
    href: 'https://facebook.com',
    label: 'Facebook',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
]

export default function Footer() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <footer>
      <div className="footer-content">

        {/* Marca */}
        <div className="footer-brand">
          <span className="logo">
            WorkHub<span>.Coworking</span>
          </span>
          <small className="footer-copyright">
            © 2024 Todos los derechos reservados
          </small>
        </div>

        {/* Redes sociales */}
        <nav aria-label="Redes sociales" className="footer-social">
          {socialLinks.map(({ href, label, icon }, index) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              style={hoveredIndex === index ? {
                color: 'var(--accent)',
                borderColor: 'var(--accent)',
                background: 'rgba(59,130,246,0.1)',
                transform: 'translateY(-3px)',
              } : {}}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {icon}
            </a>
          ))}
        </nav>

      </div>
    </footer>
  )
}
