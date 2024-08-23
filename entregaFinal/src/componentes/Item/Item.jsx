// Va a mostrar un item en particular
// por props tiene que recibir producto y valor

import React from 'react'
import BotonAgregarCarrito from '../BotonAgregarCarrito/BotonAgregarCarrito'
import { Link } from 'react-router-dom';
import { useAppContext } from '../Context/Context';
import ItemCount from '../ItemCount/ItemCount';
import "./item.css"

function Item({img, nombre, valor, id, categoria, stock}) {
    
    const {agregarAlCarrito} = useAppContext();
    const handleAddToCart = (cantidad) => {
      agregarAlCarrito(id, cantidad);
  };
   
    
    return (
      <div className='cardContainer'>
        <div key={id} className="card"> 
          <img src={img} className="imgCard" alt={nombre} />
          <h5 className="card-title">{nombre}</h5>
          <p className="card-text">USD {valor}</p>
          <p className="card-text">Uso recomendado: {categoria}</p>
          <p className="card-text">Stock: {stock}</p>
          <Link to={`/detalle/${id}`}>
            <button type="button" className="btn btn-primary">Ver detalle</button>
          </Link>
          <ItemCount stock={stock} inicial={1} onAdd={handleAddToCart} />
          {/* <button onClick={() => agregarAlCarrito(id)}>Agregar al carrito</button> */}
        </div>

        {/* <main className='card-container'>
          <ul>
            <li key={id}>
              <img src={img} className="imgCard" alt={nombre} />
              <div>
                <strong>{nombre}</strong>
              </div>
              <h4>USD {valor}</h4>
              <p>Uso recomendado: {categoria}</p>
              <p>Stock: {stock}</p>
              <Link to={`/detalle/${id}`}>
                <button type="button" className="btn btn-primary">Ver detalle</button>
              </Link>
              <button onClick={() => agregarAlCarrito(id)}>Agregar al carrito</button>
            </li>
          </ul>
        </main> */}
      </div>
    
      

  )
}

export default Item