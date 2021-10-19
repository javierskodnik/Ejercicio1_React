import React from 'react';

const Footer = (props) => {
    //con java script calculo el año
    
    /* ahora comentamos lo que hicimos en Java y vamos a pasarle 
    el valor por la propiedad "año" definida en el componente Footer
    const fecha = new Date().getFullYear()
    */
    
    return ( 
        //para meter el año adentro del componente footer le pongo una llave {}
        //ahora AÑO ya no toma mas el valor de la constante definida dentro de la función
        //Footer, si no que lo toma de la propiedad declarada en el componente "Footer"
        <h2>Año {props.anio} </h2>
    );
}
 
export default Footer;