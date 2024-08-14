import React from 'react';
import { useState } from 'react';
import './botonCarrito.css';

function BotonAgregarCarrito() {
    // useState
    const [agregar, quitar] = useState(true)

    // Ternario
    const textoBoton = agregar ?  'Agregar al carrito' : 'Quitar del carrito'
    
    // Agrego la actualización del estado
    const handleClick = () => {
        quitar (!agregar)
    }
  return (
    <div>
      <button onClick={handleClick} className='botonCarrito'>
        {textoBoton}
      </button>
    </div>
  )
}

export default BotonAgregarCarrito