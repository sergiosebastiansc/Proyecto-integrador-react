import { createContext, useContext, useState } from 'react'

const AppContext = createContext(null)

const initialSpaces = [
  { id: 1, name: "Oficina Ejecutiva",  type: "Oficina Privada",    capacity: 4,  price: "$45/hr", available: true,  desc: "Suite privada con paredes de vidrio acústico.",              image: "https://i.pinimg.com/736x/90/a8/9e/90a89e3f99c17873590a8236034247cb.jpg" },
  { id: 2, name: "Sala De Directorio", type: "Sala de Reuniones",  capacity: 12, price: "$80/hr", available: true,  desc: "Sala de conferencias principal con tecnología 4K.",           image: "https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?q=80&w=870&auto=format&fit=crop" },
  { id: 3, name: "Sala Flexible",      type: "Escritorio Abierto", capacity: 1,  price: "$15/hr", available: true,  desc: "Escritorio abierto en zona de alta luminosidad.",             image: "https://plus.unsplash.com/premium_photo-1661962361446-f450f3f21495?q=80&w=1372&auto=format&fit=crop" },
  { id: 4, name: "Espacio Dinámico",   type: "Estudio Creativo",   capacity: 6,  price: "$60/hr", available: false, desc: "Espacio para prototipado y diseño creativo.",                 image: "https://media.istockphoto.com/id/1257975650/photo/modern-home-office-interior.jpg?s=612x612&w=0&k=20&c=ZztiG2rvoPSysDiomgZEOkftHGSN3HibCkzBEJ4E38U=" },
]

export function AppProvider({ children }) {
  const [spaces, setSpaces]               = useState(initialSpaces)
  const [bookings, setBookings]           = useState([])
  const [registeredUsers, setRegisteredUsers] = useState([])

  // --- Spaces ---
  function toggleAvailability(id) {
    setSpaces(prev => prev.map(s => s.id === id ? { ...s, available: !s.available } : s))
  }

  // --- Bookings ---
  function addBooking(spaceId, date, time, user) {
    const booking = {
      id: 'BK-' + Date.now().toString(36).toUpperCase(),
      spaceId: Number(spaceId),
      date,
      time,
      user,
      createdAt: new Date().toISOString(),
    }
    setBookings(prev => [...prev, booking])
    return booking
  }

  function cancelBooking(bookingId) {
    setBookings(prev => prev.filter(b => b.id !== bookingId))
  }

  // --- Users ---
  function registerUser(userData) {
    const exists = registeredUsers.find(u => u.email === userData.email)
    if (exists) return { ok: false, message: 'Este correo ya está registrado' }
    setRegisteredUsers(prev => [...prev, { ...userData, registeredAt: new Date().toISOString() }])
    return { ok: true }
  }

  function loginUser(email, password) {
    // Por ahora acepta cualquier credencial (preparado para backend)
    // Cuando tengas backend: reemplaza esto por fetch('/api/auth/login')
    if (!email || !password) return { ok: false, message: 'Completa todos los campos' }
    return { ok: true }
  }

  return (
    <AppContext.Provider value={{
      spaces, toggleAvailability,
      bookings, addBooking, cancelBooking,
      registeredUsers, registerUser, loginUser,
    }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  return useContext(AppContext)
}
