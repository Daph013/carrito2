import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Inicio from './pages/Inicio'
import Footer from './components/Footer'
import Tienda from './pages/Tienda'
import Categorias from './pages/Categorias'
import Buscar from './pages/Buscar'


const App = () => {
  return (
    
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/" element={<Inicio/>} />
    <Route path="/inicio" element={<Inicio/>} />
    <Route path="/tienda" element={<Tienda/>} />
    <Route path="/categorias/:id" element={<Categorias/>} />
    <Route path="/buscar" element={<Buscar/>} />

    </Routes>
    <Footer/>
    
    
    </BrowserRouter>
  )
}

export default App