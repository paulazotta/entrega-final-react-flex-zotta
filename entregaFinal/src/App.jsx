
import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetail from './componentes/ItemDetail/ItemDetail'
import Contacto from './componentes/Contacto/Contacto'
import Inicio from './componentes/Inicio/Inicio'
import Error404 from './componentes/Error404/Error404'
import { ContextProvider, useAppContext } from './componentes/Context/Context'
import ItemListConteiner from './componentes/ItemListContainer/ItemListContainer'
import MostrarCarrito from './componentes/MostarCarrito/MostrarCarrito'
import ItemCount from './componentes/ItemCount/ItemCount'

import { useContext, useState } from 'react'



// Dolar blue a través de una API. Traigo la info y la pongo en la variable dolarBlue. 
//   fetch("https://dolarapi.com/v1/dolares/blue")
//   .then(response => response.json())
//   .then(data => {
//   let dolarBlue = {
//     venta: data.venta
//   }
//   console.log(dolarBlue)
// });



function App() {
 
 

  return (
      
      <div>  
       <ContextProvider>
        <BrowserRouter> 
        
         <p> hola mundo</p>
          {/* <NavBar changeFilters={setFilter}></NavBar> */}
          <NavBar/>
          <ItemCount inicial={1} stock={10} onAdd={(cantidad) => console.log("cantidad agregada", cantidad)}/>
          {/* <Filter filterState={filterProducts} setFilterState={setFilterProducts} /> */}

          {/* <ItemListConteiner productos={filteredProducts}/>*/}

          <Routes>
            <Route path="" element={<Inicio/>}></Route>
            <Route path="/inicio" element={<Inicio/>}></Route> 
            {/* <Route path='/prueba' element={<p>Etiqueta de prueba</p>} ></Route> */}
            <Route path='/contacto' element={<Contacto/>} ></Route>
            
            <Route path='/productos' element={<ItemListConteiner/>}></Route>
            
            <Route path='/productos/mostarCarrito' element={<MostrarCarrito/>}></Route>
          
            <Route path="/detalle/:id" element={<ItemDetail/>}></Route>
            <Route path="*" element={<Error404 />} ></Route>
          </Routes> 
         
        </BrowserRouter>
      </ContextProvider> 
      </div> 
  )
}

export default App