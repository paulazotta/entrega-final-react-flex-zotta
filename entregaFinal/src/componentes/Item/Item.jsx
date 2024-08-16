// Va a mostrar un item en particular
// por props tiene que recibir producto y valor

import React from 'react'
import BotonAgregarCarrito from '../BotonAgregarCarrito/BotonAgregarCarrito'
import { Link } from 'react-router-dom';
import { useAppContext } from '../Context/Context';

import "./item.css"

function Item({img, nombre, valor, id, categoria}) {
    
    const {agregarAlCarrito} = useAppContext();
    
    
    return (
      <div className='cardContainer'>
          <div key={id} className="card"> 
          <img src={img} className="imgCard" alt={nombre} />
          <h5 className="card-title">{nombre}</h5>
          <p className="card-text">USD {valor}</p>
          <p className="card-text">Uso recomendado:{categoria}</p>
          <Link to={`/detalle/${id}`}>
            <button type="button" className="btn btn-primary">Ver detalle</button>
          </Link>
          <button onClick={() => agregarAlCarrito(id)}>Agregar al carrito</button>
          {/* <button>Agregar al carrito</button> */}
          {/* <button type="button" className="btn btn-primary" onClick={() => agregarAlCarrito(id)}>Agregar al carrito</button> */}
          {/* <BotonAgregarCarrito/> */}
        </div>
      </div>
    
      

  )
}

export default Item