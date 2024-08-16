import React, { useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import Loader from "../Loader/Loader";
import { useAppContext } from "../Context/Context";

const ItemListConteiner = () =>{
  const {cargarData, productos} = useAppContext()

  useEffect (() =>{
    cargarData();
  }, [])

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

   