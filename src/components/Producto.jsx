import React from 'react';
import { Fragment } from 'react';


const Producto = ({producto, productos, changuito, agregarProducto}) => {

    //vamos a poner una declaración para que cada vez que querramos usar la propiedad,
    //no useamos producto.propiedad

    const {id, articulo, precio} = producto;

    //funcion para agregar productos al changuito
    const seleccionarProducto = (id) => {
        //vamos a quedarnos con el producto que tenga el id que viene por parametro
        const producto = productos.filter(
            producto => producto.id === id
        )[0];
        agregarProducto([...changuito, producto]);
        //console.log(producto);
        console.log(changuito);

    }

    //funciona para quitar productos del changuito
    const eliminarProducto = (id) => {
        //primero me quedo con el producto que no estoy borrando
        //recorremos la lista del changuito y nos quedamos con los que no son los que queremos eliminar
        const productos = changuito.filter( producto => producto.id !== id);
        
        //despues agregamos ese filtro
        agregarProducto(productos);
        //console.log("Quitando del changuito: ", id)

        }
    
    return ( 
        <Fragment>
            <div>
                <h3>{id} {articulo} {precio}</h3>
                {
                    productos
                    ?
                        <button
                            type="button"
                            onClick={ () => seleccionarProducto(id)}
                        >Comprar</button>
                    :
                        <button
                            type="button"
                            onClick={() => eliminarProducto(id)}
                        >Eliminar</button>
                }
            </div>
        </Fragment>
        
     );
}
 
export default Producto;