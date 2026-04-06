import { useState } from 'react'
import './App.css'
import Header1 from './components/Header1'
import AdminHeader from './components/AdminHeader'
import AdminDisponibilidad from './components/AdminDisponibilidad'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header1/>
    <AdminHeader/>
    <AdminDisponibilidad/>
    <Footer/>
    </>
  )
}

export default App
