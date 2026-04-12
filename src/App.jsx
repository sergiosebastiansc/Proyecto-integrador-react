import { Routes, Route } from 'react-router-dom'
import { AppProvider } from './context/AppContext.jsx'
import { ToastProvider } from './context/ToastContext.jsx'

import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Toast from './components/Toast.jsx'
import DecorGrid from './components/DecorGrid.jsx'

import Home from './pages/Home.jsx'
import Booking from './pages/Booking.jsx'
import MyBookings from './pages/MyBookings.jsx'
import Contact from './pages/Contact.jsx'
import Register from './pages/Register.jsx'
import Admin from './pages/Admin.jsx'
import Login from './pages/Login.jsx'

export default function App() {
  return (
    <AppProvider>
      <ToastProvider>
        <DecorGrid />
        <Routes>
          {/* Login — sin Navbar ni Footer */}
          <Route path="/login" element={
            <>
              <Login />
              <Toast />
            </>
          } />

          {/* App principal — con Navbar y Footer */}
          <Route path="/*" element={
            <>
              <Navbar />
              <main>
                <Routes>
                  <Route path="/"            element={<Home />} />
                  <Route path="/booking"     element={<Booking />} />
                  <Route path="/my-bookings" element={<MyBookings />} />
                  <Route path="/contact"     element={<Contact />} />
                  <Route path="/register"    element={<Register />} />
                  <Route path="/admin"       element={<Admin />} />
                </Routes>
              </main>
              <Footer />
              <Toast />
            </>
          } />
        </Routes>
      </ToastProvider>
    </AppProvider>
  )
}
