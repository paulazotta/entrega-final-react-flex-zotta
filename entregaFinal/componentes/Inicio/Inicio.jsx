import React from 'react'
import './inicio.css';

function Inicio() {
 
  return (
    <div>
       <h1>Diagnóstico Automotor</h1>
       <p>Todo lo necesario para el correcto diagnóstico de <strong>averías automotrices</strong></p>
      <h3>Descubrí todos los equipos en la sección de <strong>productos</strong></h3>
      <img src="../src/componentes/Productos/assets/inicio.jpg" alt="Imagen de referencia" className='imgInicio'/>
      
    </div>
  )
}

export default Inicio