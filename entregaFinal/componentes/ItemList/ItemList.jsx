import React from 'react';
import Item from '../Item/Item';
import "./itemList.css"
import ItemCount from '../ItemCount/ItemCount';

const ItemList = ({productos}) => {  
  return (
    <div>
    {
        productos.map((el)=>{
            return (
                <Item key={el.id} id={el.id} img= {el.img} nombre={el.nombre} valor={el.valor} categoria={el.categoria} stock={el.stock}/>
            )  
        })

    }
    
</div>
  )
}

export default ItemList