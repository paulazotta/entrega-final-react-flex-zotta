import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import Item from '../Item/Item';
import DetalleProductos from '../DetalleProductos/DetalleProductos';
import { useAppContext } from '../Context/Context';

const ItemDetail = ({productos}) => {
    
 
  const {id} = useParams();
    

    const [productoSeleccionado, setProductoSeleccionado] = useState({})

    useEffect(()=>{
        const findProduct = productos.find(el => el.id ===  parseInt(id))
       setProductoSeleccionado(findProduct)
    },[id, productos])
  
  return (
    <div>
        {/* <p>
            Detalle del componente {productoSeleccionado.nombre}
        </p> */}
        <DetalleProductos  key={productoSeleccionado.id} categoria={productoSeleccionado.categoria} id={productoSeleccionado.id} img ={productoSeleccionado.img} nombre={productoSeleccionado.nombre} caracteristicas={productoSeleccionado.caracteristicas}/>
    </div>
  )
}

export default ItemDetail