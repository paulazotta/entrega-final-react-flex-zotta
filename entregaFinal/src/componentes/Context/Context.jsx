import React, { createContext, useContext, useState } from 'react'
import arrayProductos from '../Productos/arrayProductos';
import {initializeApp} from "firebase/app";
import {collection, getDocs, getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjOUbLlh3kF6D38EnFhK_M7onjL3LKH8E",
  authDomain: "react-flex-paulazotta.firebaseapp.com",
  projectId: "react-flex-paulazotta",
  storageBucket: "react-flex-paulazotta.appspot.com",
  messagingSenderId: "825040831188",
  appId: "1:825040831188:web:56faee867500ad6ad7f141"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore (app)

const productsCollection = collection (db, "productos");

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

    getDocs(productsCollection).then(snapshot => {
      console.log(snapshot)
    })



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