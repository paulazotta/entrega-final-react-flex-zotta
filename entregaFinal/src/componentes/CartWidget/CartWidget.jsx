import React from 'react';
import bolsa from './assets/bolsa.svg';
import './CartWidget.css';
import { useAppContext } from "../Context/Context";
import { Link } from 'react-router-dom';

function CartWidget() {

  const {carrito} = useAppContext();
 
  return (
    <div   >  
        <img src={bolsa} alt="bolsa-compras"  className='cartWidget' />
        <p>{carrito.length}</p>
        <Link to="/productos/mostarCarrito"></Link>    
    </div>
  )
}
export default CartWidget