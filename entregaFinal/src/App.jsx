import { useState } from 'react'
import './App.css'

import {BrowserRouter, Routes, Route} from "react-router-dom"
import CartWidget from './componentes/CartWidget/CartWidget'
import Navbar from './componentes/Navbar/Navbar'


function App() {
  
  
  return (
    <>
  <BrowserRouter>
    <Navbar/>
    <Routes>
      
      <Route path='/prueba' element={<p>Etiqueta de prueba</p>} />
    </Routes>
    
    <p>Hola </p>
  </BrowserRouter>
  
    
    
   
   
       
    </>
  )
}

export default App
