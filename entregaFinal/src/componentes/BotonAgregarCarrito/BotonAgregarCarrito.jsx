import React from 'react';
import { useState } from 'react';
import './botonCarrito.css';
import Button from 'react-bootstrap/Button';
import { useAppContext } from '../Context/Context';

function BotonAgregarCarrito() {
  const {agregarAlCarrito} = useAppContext();
    
  // useState
    const [agregar, quitar] = useState(true)

    // Ternario
    const textoBoton = agregar ?  "Agregar al carrito" : 'Quitar del carrito'
    
    // Agrego la actualización del estado
    
    const handleClick = () => {
      
        quitar (!agregar)
    }
  return (
    <div>
      <Button variant="info" onClick={handleClick}>{textoBoton}</Button>{' '}
      {/* <button onClick={handleClick} className='botonCarrito'>
        {textoBoton}
      </button> */}
    </div>
  )
}

export default BotonAgregarCarrito