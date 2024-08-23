import React from 'react'
import { useAppContext } from '../Context/Context'
import "./MostrarCarrito.css"
import Swal from 'sweetalert2';

const MostrarCarrito = () => {
  
    const {carrito, clearCart, removeItem} = useAppContext();

    const total = carrito.reduce((acc, el) => acc + (el.valor * el.cantidad), 0);

    const realizarPago = () => {
        Swal.fire({
            title: "En unos segundos serás redirigio a otra página para hace el pago",
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
          });
    };
   
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
                        </div>
                    ))}  
                </div>
                <div>
                    <p>Total de la compra USD {total}</p>
                    <button onClick={realizarPago}>Realizar pago</button>
                    <button onClick={clearCart}>Limpiar carrito</button>
                </div>
            </div>
            )
        }
    </div>
  );

};
export default MostrarCarrito
