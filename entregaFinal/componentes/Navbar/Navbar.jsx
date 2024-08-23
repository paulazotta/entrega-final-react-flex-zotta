import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css';
import { Link } from 'react-router-dom';



function Navbar() {

  return (
   
      <nav>
        <ul>
            <li>
              <Link to="/Inicio" className="nav-link">Inicio</Link>
            </li>
            <li>
              <Link to="/productos" className="nav-link">Productos</Link>
            </li>
            <li>
            <Link to="/contacto" className="nav-link">Contacto</Link>
            </li>
            <Link to='/productos/mostarCarrito'>
              <CartWidget/>
            </Link>
            
        </ul>
      </nav>
  
  
)
}

export default Navbar

