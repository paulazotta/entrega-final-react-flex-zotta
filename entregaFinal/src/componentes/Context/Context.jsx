import React, { createContext, useContext, useState, useEffect } from 'react'
import {initializeApp} from "firebase/app";
import {addDoc, collection, getDocs, getFirestore} from "firebase/firestore";
import Swal from 'sweetalert2';

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
const ordersCollection = collection (db, "ordenes");



// 1. Creo las funciones para usar el contexto
// Creo el contexto 
const AppContext = createContext(); 

// para que la función sepa qué contexto usar

export const useAppContext = () => useContext(AppContext);

// 2. Armo el provider

export const ContextProvider = (props) => {
    const [productos, setProductos] = useState([]);
    const [carrito, setCarrito] = useState ([]);
  
  //    // Agregar useEffect para cargar los datos al montar el componente
  //    useEffect(() => {
  //     cargarData();
  // }, []);

    function cargarData () {
        
      getDocs(productsCollection).then(snapshot => {
        let arrayProductos = snapshot.docs.map(el => el.data());
        setProductos(arrayProductos)
        }).catch (err => console.error(err));
    };
    
    function agregarAlCarrito (id) {
        const carritoAuxiliar = [...carrito];
        const productoAAgregar = productos.find (el=> el.id === id);
        carritoAuxiliar.push(productoAAgregar);
        setCarrito(carritoAuxiliar);
        
        // Sweet alert 
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Producto agregado correctamente",
          showConfirmButton: false,
          timer: 1500
        });
    };

    function crearOrden (){
      if (carrito.length > 0){
        const nuevaOrden = {
          nombre: "Paula",
          telefono: 15151515,
          productos: carrito,
        };
        // console.log(nuevaOrden)
        addDoc(ordersCollection, nuevaOrden).then(response =>{
          console.log("orden creada con el id:", response.id);
          setCarrito([]);
        }).catch (err => {
          alert ("Por favor intente de nuevo en unos minutos");
          Swal.fire({
            icon: "error",
            title: "Algo salió mal",
            text: "Por favor intentá de nuevo en unos minutos",
            
          });
        });
      } else {
        Swal.fire({
          icon: "info",
          title: "Tu carrito está vacío",
          text: "Podés ver y agregar los equipos que quieras desde la sección de productos",
          
        });
      }   
    };
  return (
    <div>
      <AppContext.Provider value={{productos, carrito, setCarrito, cargarData, agregarAlCarrito, crearOrden}}>
        {props.children}
      </AppContext.Provider>
    </div>
  )
}