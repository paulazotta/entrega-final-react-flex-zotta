import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css';

function Navbar() {
  return (
    <div>
      <nav>
        <ul>
            <li className='lista'>
                <p>Inicio</p>
            </li>
            <li>
                <p>Productos</p>
            </li>
            <li>
                <p>Contacto</p>
            </li>
            <CartWidget/>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar

