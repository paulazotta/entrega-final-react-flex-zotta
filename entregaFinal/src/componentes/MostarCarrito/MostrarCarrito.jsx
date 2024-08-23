import React, { useState } from 'react'
import { useAppContext } from '../Context/Context'
import "./MostrarCarrito.css"


const MostrarCarrito = () => {
  
    const {carrito, clearCart, removeItem, agregarAlCarrito} = useAppContext();

    // if(cantidadTotal === 0){
    //     return(
    //         <div>
    //             <h3>No hay productos agregados</h3>
    //             <Link to="/">Productos</Link>
    //         </div>
    //     )
    // }
    const total = carrito.reduce((acc, el) => acc + (el.valor * el.cantidad), 0)
    // const incrementar = () =>{
    //     if (cantidad < stock){
    //         setCantidad(cantidad+1)
    //     }
    // }
    // const decrementar = () =>{
    //     if (cantidad > 1){
    //         setCantidad(cantidad-1)
    //     }
    // }
  return (
    <div className='containerMostrarCarrito'>
        {carrito.lenght === 0? (
            <h1>Carrito vacío</h1>
        ) : (
            <div>
                <div>
                    {carrito.map((el) =>(
                        
                        <div key={el.id} className='mostrarCarrito'> 
                            <p>{el.nombre}</p>
                            <p> USD {el.valor}</p>
                            <p>{el.cantidad}</p>
                            <p>Total USD {el.valor * el.cantidad}</p>
                            <button  onClick={() => removeItem(el.id)} className='botonQuitar'> X </button>
                            
                            {/* <p>Total $ {" "} {Number.parseFloat(el.valor * el.cantidadTotal).toFixed(2)}</p> */}
                            
                            
                            {/* <button onClick={() => removeItem(el.id)} className='botonCantidad'> - </button> */}
                            
                            {/* <button onClick={incrementar} className='botonCantidad'>+</button> */}
                            
                            {/* <p>Total a pagar USD {total}</p> */}
                            
                        </div>
                        )
                    )}
                </div>
                <div>
                    <p>Total de la compra USD {total}</p>
                    <button>Realizar pago</button>
                    <button onClick={clearCart}>Limpiar carrito</button>
                </div>
            
            </div>
        )}
        {/* {carrito.map(carritoItem => {
            const {cantidadTotal, precioTotal} = calcularTotal(carritoItem.productos)
        return(
            <div key={carritoItem.id}>
                <h2>Order Id: {carritoItem.id}</h2>

            </div>
        )
        })} */}
        {/* {carrito.map(p => <CartItem key={p.id} {...p}/>)} */}
        {/* <h3>Total: ${total}</h3>
        <button onClick={() => clearCart()}> Limpiar carrito</button>
        <Link to="/checkout">Checkout</Link> */}
      {/* {carrito.lenght === 0 ? 
      (console.log ("vacio"))
        :
        (
           console.log("hay productos") 
        // <div>
        //     <span className='cantidadCarrito'>1</span>
        //     <h5>Nombre producto</h5>
        //     <p>Precio producto</p>
        //     <button>Finalizar compra</button>
        // </div>
        )
      }   */}
    </div>
  )

}

// 
export default MostrarCarrito
