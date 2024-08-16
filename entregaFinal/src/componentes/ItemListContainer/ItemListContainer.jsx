import React, { useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import Loader from "../Loader/Loader";
import { useAppContext } from "../Context/Context";

const ItemListConteiner = () =>{
  const {cargarData, productos} = useAppContext()

  useEffect (() =>{
    cargarData();
  }, [productos])
  // const filtrarProductos = (productos, filtro) =>{
  //   if (filtro ===  "todos"){
  //     return productos;
  //   } else {
  //     return productos.filter((producto) => producto.categoria === filtro)
  //   }
  // }
  // const productosFiltrados = filtrarProductos (productos, filtro);
  return(
    <div className="itemListContainer">
      {
        productos.length === 0?
        <Loader/>
        :
        <ItemList productos={productos} />
      }
    </div>
  )  
}

    

    
export default ItemListConteiner

   