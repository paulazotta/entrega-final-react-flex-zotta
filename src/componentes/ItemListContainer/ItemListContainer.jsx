import React, { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import Loader from "../Loader/Loader";
import { useAppContext } from "../Context/Context";
import "./itemListContainer.css"
import { useFilters } from "../hoocks/useFilters";
import { Filters } from "../Filters/Filters";

const ItemListConteiner = () =>{
  const {cargarData, productos} = useAppContext()
  useEffect (() =>{
    cargarData();
  }, [])
  const { filterProducts } = useFilters();
  const productosFiltrados = filterProducts(productos);

  return(
    <div className="itemListContainer">
    {
      productos.length === 0 ?
      <Loader /> :
      <div>
        <Filters /> 
        <ItemList productos={productosFiltrados} />
      </div>
    }
  </div>
  )  
}

    

    
export default ItemListConteiner

   