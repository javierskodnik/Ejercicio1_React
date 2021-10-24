import React from 'react';

const Footer = (props) => {
    //con java script calculo el año
    
    /* ahora comentamos lo que hicimos en Java y vamos a pasarle 
    el valor por la propiedad "año" definida en el componente Footer
    const fecha = new Date().getFullYear()
    */
    
    return (
        <div>
            <footer class="py-3 my-4">
                <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Inicio</a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Terminos y Condiciones</a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Acerca de Nosotros</a></li>
                </ul>
                <p class="text-center text-muted">© 2021 Company, Inc</p>
                
            </footer>
        {
        //para meter el año adentro del componente footer le pongo una llave {}
        //ahora AÑO ya no toma mas el valor de la constante definida dentro de la función
        //Footer, si no que lo toma de la propiedad declarada en el componente "Footer"
        //<h2>Año {props.anio} </h2>
        }   
        
        </div>
    );
}
 
export default Footer;