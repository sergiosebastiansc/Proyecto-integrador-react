import './App.css'
import Header1 from './components/Header1'
import AdminHeader from './components/AdminHeader'
import AdminDisponibilidad from './components/AdminDisponibilidad'
import Registro from './components/Registro'
import Contacto from './components/Contacto'
import CarouselHero from './components/CarouselHero'
import Footer from './components/Footer'
import Home from './home.jsx'

function App() {
  return (
    <>
      <Header1 />
      <Home />
      <AdminHeader />
      <AdminDisponibilidad />
      <Registro />
      <Contacto />
      <CarouselHero />
      <Footer />
    </>
  )
}

export default App
