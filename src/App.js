import Footer from "./components/Footer";
import {useState } from "react";
import { Fragment } from "react";
import Header from "./components/Header";
import Producto from "./components/Producto";
import Changuito from "./components/Changuito";


function App() {
  
  //listado de productos con un state
  //primero va la variable que yo voy a tocar, y luego de la "," va la función
  //que se encarga de modificar el estado inicial
 

  const [productos, guardarProductos] = useState ([
  
    {id:1, articulo: "Zapatillas Para Tenis", precio: 8000},
    {id:2, articulo: "Camiseta Termica", precio: 2000},
    {id:3, articulo: "Palo de Hockey", precio: 4500},
    {id:4, articulo: "Botines Fútbol 5", precio: 10000},
    {id:5, articulo: "Calza", precio: 2500},

  ]);

  //State para changuito

  const [changuito, agregarProducto] = useState ([]);

  return (
    <Fragment className="App">
      <Header/>
      <h3 pb-2 border-bottom>Indumentaria Deportiva - Venta Online</h3>
      
      {productos.map(producto =>
        (
          <Producto 
            //para que cada producto sea único, se le asigna una key. Es el id del producto
            key = {producto.id}
            producto = {producto}

            // vamos a pasar la lista de productos para poder hacer "seleccionar productos"
            productos = {productos}
            changuito = {changuito}
            agregarProducto = {agregarProducto}
          />
        )
      )}

      <Changuito
        changuito={changuito}
        agregarProducto = {agregarProducto}
      
      />

      <Footer 
        anio= {2021}
      />
    </Fragment>
  );
}

export default App;
