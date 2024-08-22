import React from 'react';
import bolsa from './assets/bolsa.svg';
import './CartWidget.css';
import { useAppContext } from "../Context/Context";
import MostrarCarrito from '../MostarCarrito/MostrarCarrito';
import { Link } from 'react-router-dom';

function CartWidget() {
  
  
  const {carrito, crearOrden, cantidadTotal} = useAppContext();
 
  
  const handleCarrito = () => { 
    crearOrden();
    <MostrarCarrito/>
    
    
  }

  return (
    <div onClick={() => handleCarrito()}  >
      {/* <div >
        <span className='cantidadCarrito'>1</span>
        <h5>Nombre producto</h5>
        <p>Precio producto</p>
      </div> */}
        <img src={bolsa} alt="bolsa-compras"  className='cartWidget' />
        <p>{carrito.length}</p>
        <Link to="/productos/mostarCarrito" style={{display: cantidadTotal > 0 ? "block" : "none"}}></Link>
        {cantidadTotal}
        
    </div>
  )
}
export default CartWidget