import React from 'react'
import BotonAgregarCarrito from '../BotonAgregarCarrito/BotonAgregarCarrito'
// import './cardDetalle.css'
import { useAppContext } from '../Context/Context';

function DetalleProductos({id, img, nombre, caracteristicas, stock}) {
  const {agregarAlCarrito} = useAppContext();
  // const handleClick = () => {
  //   agregarAlCarrito(id)
  // }

  
  return (
    <div key={id} className='cardDetalle'>
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">{caracteristicas}</p>
        <img src={img} className="card-img-top imgCard" alt={nombre} />
        <p className="card-text">{stock}</p>
        <button onClick={() => agregarAlCarrito(id)}>h</button>
        <ItemCount   inicial={1} stock={10} onAdd={(cantidad) => console.log("cantidad agregada", cantidad)}/>
    </div>
  )

}
export default DetalleProductos
