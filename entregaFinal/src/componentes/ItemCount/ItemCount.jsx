import React, { useState } from 'react'
import { useAppContext } from '../Context/Context';
import "./ItemCount.css"

const ItemCount = ({stock, inicial, onAdd}) => {
    const {agregarAlCarrito} = useAppContext()
    const [cantidad, setCantidad] = useState(inicial);

    const incrementar = () =>{
        if (cantidad < stock){
            setCantidad(cantidad+1)
        }
    }
    const decrementar = () =>{
        if (cantidad > 1){
            setCantidad(cantidad-1)
        }
    }
  return (
    <div className='contador'>
        <div className='contadorCantidad'>
            <button onClick={decrementar}>-</button>
            <h5>{cantidad}</h5>
            <button onClick={incrementar}>+</button>
        </div>
        <div>
            <button onClick={() => onAdd(cantidad)} inicial={1} stock={stock}  disabled={!stock}>Agregar al carrito</button>
        </div>
        
    </div>
  )
}


export default ItemCount
