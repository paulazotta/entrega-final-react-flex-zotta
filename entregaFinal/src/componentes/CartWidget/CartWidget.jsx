import React from 'react';
import bolsa from './assets/bolsa.svg';
import './CartWidget.css';
import { useAppContext } from "../Context/Context";


function CartWidget() {
  const {carrito, setCarrito, crearOrden} = useAppContext();
  const handleCarrito = () => {
    console.log("Ahora vas a ver el carrito", carrito);
    console.log ("orden creada");
    crearOrden();
    setCarrito([]);
    console.log("se limpió el carrito")
  }
  return (
    <div onClick={() => handleCarrito()}>
      <img src={bolsa} alt="bolsa-compras"  className='cartWidget' />
      <p>{carrito.length}</p>
    </div>
  )
}

export default CartWidget