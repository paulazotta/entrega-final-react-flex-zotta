import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
// import Item from '../Item/Item';
import DetalleProductos from '../DetalleProductos/DetalleProductos';
import { useAppContext } from '../Context/Context';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = () => {
   
  const { id } = useParams();
  const { agregarAlCarrito, productos, isLoading } = useAppContext(); 
  const [productoSeleccionado, setProductoSeleccionado] = useState({});


  const [cantidadAgregada, setCantidadAgregada] = useState(0)
  const handleOnAdd = (cantidad) =>{
    setCantidadAgregada(cantidad)
    const item = {
      id: productoSeleccionado.id,
      nombre: productoSeleccionado.nombre,
      valor: productoSeleccionado.valor,
      caracteristicas: productoSeleccionado.caracteristicas,
      cantidad,
    }
    agregarAlCarrito(item.id, item.cantidad, item.nombre, item.valor)
  }

    useEffect(() => {
        if (!isLoading && productos && productos.length > 0) {
            const findProduct = productos.find(el => el.id === parseInt(id));
            setProductoSeleccionado(findProduct);
        }
    }, [isLoading, productos, id]);

    if (isLoading) {
        return <div>Cargando...</div>; 
    }
  
  return (
    <div>
        <div key={productoSeleccionado.id} className='cardProducto'>
          <h5>{productoSeleccionado.categoria}</h5>
          <h3>{productoSeleccionado.nombre}</h3>
          <h4>{productoSeleccionado.valor}</h4>
          <p>{productoSeleccionado.caracteristicas}</p>
        </div>
        <div>
          {
            cantidadAgregada > 0? (
            <>
              <ItemCount/>
              <Link to="/productos/mostarCarrito">
                <button>Terminar compra</button> </Link>
              </>
            ) : (
            <>
              <p>Selecciona la cantidad deseada</p>
              <ItemCount   inicial={0} stock={10} onAdd={handleOnAdd}/>
              </>
            )
          }
        </div>
        
        {/* (cantidad) => console.log("cantidad agregada", cantidad) */}
    </div>
  )
}

export default ItemDetail