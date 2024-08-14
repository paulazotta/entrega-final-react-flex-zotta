import React, { useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import Loader from "../Loader/Loader";
import { useAppContext } from "../Context/Context";

const ItemListConteiner = () =>{
  const {cargarData, productos} = useAppContext()

  useEffect (() =>{
    cargarData();
  })
  // const filtrarProductos = (productos, filtro) =>{
  //   if (filtro ===  "todos"){
  //     return productos;
  //   } else {
  //     return productos.filter((producto) => producto.categoria === filtro)
  //   }
  // }
  // const productosFiltrados = filtrarProductos (productos, filtro);
  return(
    <>
      {
        productos.length === 0?
        <Loader/>
        :
        <ItemList productos={productos} />
      }
    </>
  )  
}

    

    
export default ItemListConteiner

   