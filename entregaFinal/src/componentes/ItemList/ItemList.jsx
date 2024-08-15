// Acá se va a renderizar la lista de todos los items 
// Vamos a pasar todos los productos 
// Acá vamos a crear las cards

import React from 'react';
import Item from '../Item/Item';
import "./itemList.css"


const ItemList = ({productos}) => {  
  return (
    <div>
    {
        productos.map((el)=>{
            return (
                <Item key={el.id} id={el.id} img= {el.img} nombre={el.nombre} valor={el.valor} categoria={el.categoria}/>
            )  
        })

    }
</div>
  )
}

export default ItemList