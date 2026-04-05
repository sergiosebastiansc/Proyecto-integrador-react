import { useState } from 'react'
import './App.css'
import Header1 from './components/Header1'
import AdminHeader from './components/AdminHeader'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header1/>
    <AdminHeader/>  
    </>
  )
}

export default App
