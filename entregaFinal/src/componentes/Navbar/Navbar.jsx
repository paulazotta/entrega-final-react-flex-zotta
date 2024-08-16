import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css';
import { Link } from 'react-router-dom';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// // import Navbar from 'react-bootstrap/Navbar';

function Navbar() {
  return (
    <div>
    <header>
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
            <CartWidget/>
        </ul>
      </nav>
    </header>
  </div>
)
}

export default Navbar

