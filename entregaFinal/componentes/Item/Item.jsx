import React from 'react'
import { Link } from 'react-router-dom';
import "./item.css"

function Item({img, nombre, valor, id, categoria, stock}) {

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
        </div>
      </div>
  )
}

export default Item