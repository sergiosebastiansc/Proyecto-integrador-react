// AdminDisponibilidad.jsx — WorkHub Coworking
// Reemplaza AdminHeader.jsx con lógica real de disponibilidad
// Los estilos (.strata-grid, .stratum-card, .toggle-switch, etc.)
// ya están en index.css — no hay que agregar nada de CSS.

/*----------->import { useState } from 'react'

// ─── Datos de espacios (mismo array que app.js original) ─────────────────────
// Cuando el equipo cree un archivo compartido (ej: src/data/spaces.js),
// reemplaza esto por: import { spaces as spacesIniciales } from '../data/spaces'
const spacesIniciales = [
  { id: 1, name: 'Oficina Ejecutiva',  type: 'Oficina Privada',    available: true  },
  { id: 2, name: 'Sala De Directorio', type: 'Sala de Reuniones',  available: true  },
  { id: 3, name: 'Sala Flexible',      type: 'Escritorio Abierto', available: true  },
  { id: 4, name: 'Espacio Dinámico',   type: 'Estudio Creativo',   available: false },
]

// ─── Toggle Switch ────────────────────────────────────────────────────────────
function ToggleSwitch({ checked, onChange }) {
  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="slider" />
    </label>
  )
}

// ─── Toast de notificación ────────────────────────────────────────────────────
function Toast({ message, type, visible }) {
  return (
    <div
      id="toast"
      role="alert"
      aria-live="assertive"
      className={`toast ${type} ${visible ? 'show' : ''}`}
    >
      <span className="status-dot" />
      <span id="toast-message">{message}</span>
    </div>
  )
}

// ─── Componente principal ─────────────────────────────────────────────────────
export default function AdminDisponibilidad() {
  const [spaces, setSpaces] = useState(spacesIniciales)
  const [toast, setToast]   = useState({ visible: false, message: '', type: 'success' })

  // Equivale a showToast() de app.js
  function showToast(message, type = 'success') {
    setToast({ visible: true, message, type })
    setTimeout(() => setToast(t => ({ ...t, visible: false })), 3500)
  }

  // Equivale a toggleAvailability() de app.js
  function toggleAvailability(id) {
    setSpaces(prev =>
      prev.map(space => {
        if (space.id !== id) return space
        const updated = { ...space, available: !space.available }
        showToast(
          updated.available ? 'Disponibilidad activada' : 'Espacio marcado como ocupado'
        )
        return updated
      })
    )
  }

  return (
    <>
      {/* Sección Admin — misma estructura que el HTML original */}
     /*--------------> <section id="admin" className="section active">
        <header className="section-header">
          <span className="data-label">GESTIÓN DE DISPONIBILIDAD</span>
          <h2>Control de Espacios</h2>
        </header>

        <div className="strata-grid" id="admin-spaces-container">
          {spaces.map((space, index) => (
            <div
              key={space.id}
              className="stratum-card"
              style={{
                borderLeft: space.available
                  ? '4px solid var(--success)'
                  : '4px solid var(--danger)',
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="card-header">
                <div className="card-title">{space.name}</div>
                <ToggleSwitch
                  checked={space.available}
                  onChange={() => toggleAvailability(space.id)}
                />
              </div>
              <div className="card-desc">ID: #{space.id} | {space.type}</div>
              <div className="card-meta">
                <span>Estado: {space.available ? 'ABIERTO' : 'CERRADO'}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Toast de notificación */}
      /* -------------> <Toast message={toast.message} type={toast.type} visible={toast.visible} />
    </>
  )
}
