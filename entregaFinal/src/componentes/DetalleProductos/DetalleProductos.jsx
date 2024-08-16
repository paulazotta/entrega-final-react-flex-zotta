import React from 'react'
import BotonAgregarCarrito from '../BotonAgregarCarrito/BotonAgregarCarrito'
// import './cardDetalle.css'
import { useAppContext } from '../Context/Context';

function DetalleProductos({id, img, nombre, caracteristicas}) {
  const {agregarAlCarrito} = useAppContext();
  // const handleClick = () => {
  //   agregarAlCarrito(id)
  // }

  
  return (
    <div key={id} className='cardDetalle'>
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">{caracteristicas}</p>
        <img src={img} className="card-img-top imgCard" alt={nombre} />
        <button onClick={() => agregarAlCarrito(id)}>Agregar al carrito</button>
    </div>
  )

}
export default DetalleProductos
