import { useState } from 'react'
import './App.css'
import Header1 from './components/Header1'
import AdminHeader from './components/AdminHeader'
import AdminDisponibilidad from './components/AdminDisponibilidad'
import Login from './components/Login'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import BookingSection from './components/Reservas'
import MyBookingsSection from './components/MiReserva'
import CarouselHero from './components/CarouselHero'
import Home from './components/Home'
import Register from './components/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header1/>
    <AdminHeader/>
    <Home/>
    <CarouselHero/>
    <Login/>
    <BookingSection/>
    <MyBookingsSection/>
    <AdminDisponibilidad/>
     <Contacto/>
      <Register/>
    <Footer/> 
    </>
  )
}

export default App
