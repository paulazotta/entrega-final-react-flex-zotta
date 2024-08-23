
import './App.css'
import Navbar from './componentes/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetail from './componentes/ItemDetail/ItemDetail'
import Contacto from './componentes/Contacto/Contacto'
import Inicio from './componentes/Inicio/Inicio'
import Error404 from './componentes/Error404/Error404'
import { ContextProvider } from './componentes/Context/Context'
import ItemListConteiner from './componentes/ItemListContainer/ItemListContainer'
import MostrarCarrito from './componentes/MostarCarrito/MostrarCarrito'


function App() {
 
  return (
      
      <div>  
       <ContextProvider>
        <BrowserRouter> 
          <Navbar/>
          <Routes>
            <Route path="" element={<Inicio/>}></Route>
            <Route path="/inicio" element={<Inicio/>}></Route> 
            <Route path='/contacto' element={<Contacto/>} ></Route>
            <Route path='/productos' element={<ItemListConteiner/>}></Route>
            <Route path="/detalle/:id" element={<ItemDetail/>}></Route>
            <Route path='/productos/mostarCarrito' element={<MostrarCarrito/>}></Route>
            <Route path="*" element={<Error404 />} ></Route>
          </Routes> 
        </BrowserRouter>
      </ContextProvider> 
      </div> 
  )
}

export default App