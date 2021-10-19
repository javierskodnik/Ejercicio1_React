import Footer from "./components/Footer";
import {useState, Fragment} from "react";
import Header from "./components/Header";
import Producto from "./components/Producto";


function App() {
  
  //listado de productos con un state
  //primero va la variable que yo voy a tocar, y luego de la "," va la función
  //que se encarga de modificar el estado inicial

  const [productos, guardarProducto] = useState ([
    {id:1, articulo: "Zapatillas Para Tenis", precio: 8000},
    {id:2, articulo: "Camiseta Termica", precio: 2000},
    {id:3, articulo: "Palo de Hockey", precio: 4500},
    {id:4, articulo: "Botines Fútbol 5", precio: 10000},
    {id:5, articulo: "Calza", precio: 2500},

  ])

  return (
    <Fragment className="App">
      <Header />
      <h1>Indumentaria Deportiva - Venta Online</h1>
      {/*vamos a iterar sobre la lista de const producto */}
      
      {productos.map( producto =>
        (
          <Producto 
          
          producto = {producto}
          
          />
        )
      )}

      
      {/*a Footer le vamos el año pasar como propiedad al componente Footer */}
      <Footer 
        anio= {2021}
      />
    </Fragment>
  );
}

export default App;
