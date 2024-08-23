import React, { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import Loader from "../Loader/Loader";
import { useAppContext } from "../Context/Context";
import "./itemListContainer.css"

const ItemListConteiner = () =>{
  // const {cargarData, productos, filterProducts} = useAppContext()
  const {cargarData, productos} = useAppContext()
  useEffect (() =>{
    cargarData();
  }, [])

  // // Filtro 
  // const [filter, setFilter] = useState({
  //   categoria: "todas",
  //   valorMinimo: 0,
  // })
  // const filterProducts = (productos) =>{
  //   return productos.filter(producto=>{
  //     return(
  //       producto.valor > filter.valorMinimo &&
  //       (
  //         filter.categoria === "todas" ||
  //         producto.categroia === filter.categoria
  //       )
  //     )
  //   })
  // }
  // const filteredProducts = filterProducts(productos)
  return(
    <div className="itemListContainer" >
      {
        productos.length === 0?
        <Loader/>
        :
        // <ItemList productos={filteredProducts} />
        <div >
          <ItemList productos={productos} />
        </div>
      }
    </div>
  )  
}

    

    
export default ItemListConteiner

   