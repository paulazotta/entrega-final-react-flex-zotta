import React, { createContext, useContext, useState } from 'react'
import arrayProductos from '../Productos/arrayProductos';

// 1. Creo las funciones para usar el contexto
// Creo el contexto 
const AppContext = createContext(); 

// para que la función sepa qué contexto usar

export const useAppContext = () => useContext(AppContext);

// 2. Armo el provider

export const ContextProvider = (props) => {
    const [productos, setProductos] = useState([]);
    const [carrito, setCarrito] = useState ([]);

    function cargarData () {
        arrayProductos()
        .then(response => {
            setProductos(response);
        })
        .catch(err => console.error(err));
    }


    function agregarAlCarrito (id) {
        const carritoAuxiliar = [...carrito];
        const productoAAgregar = productos.find (el=> el.id === id);
        carritoAuxiliar.push(productoAAgregar);
        setCarrito(carritoAuxiliar);
    }
  return (
    <div>
      <AppContext.Provider value={{productos, carrito, cargarData, agregarAlCarrito}}>
        {props.children}
      </AppContext.Provider>
    </div>
  )
}