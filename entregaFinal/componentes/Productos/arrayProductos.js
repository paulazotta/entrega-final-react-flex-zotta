const productos = [
    {
        id: 1,
        img: "../src/componentes/Productos/assets/MD_808Pro.jpg",
        caracteristicas: "Lectura y borrado de averías 1",
        nombre: "Autel MD808 Pro",
        valor: 900,
        categoria: "particular"
        
    },
    {
        id: 2,
        img: "../src/componentes/Productos/assets/MS_905Mini.jpg",
        caracteristicas: "Lectura y borrado de averías 2",
        nombre: "MaxiSys MS905 Mini",
        valor: 2000,
        categoria: "taller"
        
    },
    {
        id: 3,
        img: "../src/componentes/Productos/assets/MS_906BT.jpg",
        caracteristicas: "Lectura y borrado de averías 3",
        nombre: "MaxiSys MS906 BT",
        valor: 3000,
        categoria: "taller"
        
    },
    {
        id: 4,
        img: "../src/componentes/Productos/assets/AL_329.jpg",
        caracteristicas: "Lectura y borrado de averías 4",
        nombre: "AutoLink AL329",
        valor: 200,
        categoria: "particular"
        
    },
    {
        id: 5,
        img: "../src/componentes/Productos/assets/AL_529HD.jpg",
        caracteristicas: "Lectura y borrado de averías 5",
        nombre: "AutoLink AL529 HD",
        valor: 400,
        categoria: "particular"
        
    },
    {
        id: 6,
        img: "../src/componentes/Productos/assets/MD_808Pro.jpg",
        caracteristicas: "Lectura y borrado de averías 6",
        nombre: "MaxiDiag MD808 Pro",
        valor: 600,
        categoria: "particular"
        
    },
    
]

export default function arrayProductos (){
    return new Promise (resolve => {
        console.log("funciona")
        setTimeout(()=>{
            resolve (productos)
        }, 1000)
    })
}