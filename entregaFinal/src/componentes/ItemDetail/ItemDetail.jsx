import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
// import Item from '../Item/Item';
import DetalleProductos from '../DetalleProductos/DetalleProductos';
import { useAppContext } from '../Context/Context';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({nombre, precio, stock}) => {
   
  const { id } = useParams();
  const { agregarAlCarrito, productos, isLoading } = useAppContext(); 
  const [productoSeleccionado, setProductoSeleccionado] = useState({});


  const [cantidadAgregada, setCantidadAgregada] = useState(0)
  const handleOnAdd = (cantidad) =>{
    setCantidadAgregada(cantidad)
    const item = {
      id, nombre, precio
    }
    agregarAlCarrito(item, cantidad)
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
        {/* <p>
            Detalle del componente {productoSeleccionado.nombre}
        </p> */}
        {/* <DetalleProductos  key={productoSeleccionado.id} categoria={productoSeleccionado.categoria} id={productoSeleccionado.id} img ={productoSeleccionado.img} nombre={productoSeleccionado.nombre} caracteristicas={productoSeleccionado.caracteristicas}/> */}
        <div key={productoSeleccionado.id} className='cardProducto'>
          <h5>{productoSeleccionado.categoria}</h5>
          <h3>{productoSeleccionado.nombre}</h3>
          <p>Hola</p>
        </div>
        <div>
          {
            cantidadAgregada > 0? (
              <Link to="/productos/mostarCarrito">Terminar compra</Link>
            ) : (
              <ItemCount   inicial={1} stock={10} onAdd={handleOnAdd}/>
            )
          }
        </div>
        
        {/* (cantidad) => console.log("cantidad agregada", cantidad) */}
    </div>
  )
}

export default ItemDetail