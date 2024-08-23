import React, { useState } from 'react'
import { useAppContext } from '../Context/Context';
import "./ItemCount.css"
import Swal from 'sweetalert2';

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
    
    const handleAddToCart = () => {
        if (cantidad > 0) {
            onAdd(cantidad);
            
        } else {
            Swal.fire({
                icon: "info",
                title: "Tu carrito está vacío",
                text: "Seleccioná la cantidad de equipos que querés",
                
              });
            
        }
    };
    // const textoBoton = cantidad > 0 ?  "Ver carrito" : 'Agregar al carrito'
  
  return (
    <div className='contador'>
        <div className='contadorCantidad'>
            <button onClick={decrementar}>-</button>
            <h5>{cantidad}</h5>
            <button onClick={incrementar}>+</button>
        </div>
        <div>
            <button onClick={handleAddToCart} inicial={0} stock={stock}  disabled={!stock}>Agregar al carrito</button>
        </div>
        
    </div>
  )
}


export default ItemCount
