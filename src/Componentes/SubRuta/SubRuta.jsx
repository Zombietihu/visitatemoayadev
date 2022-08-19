
import { useContext, useState } from "react";
import { NavLink , useLocation, useParams} from "react-router-dom";

function SubRuta(props) {

    const { pathname }  = useLocation();   
    let contadorRutas =  1;
    let linkRuta = "";
    const rutasActuales =  pathname.split('/');
    const numeroDeRutas = rutasActuales.length;
    const claveANombre =( ruta ) =>{
        if( ruta === ""){
            return "Inicio"
        }else if( !isNaN(+ruta) ){
            const muestaLocalidades = props.localidades.filter( ( loc ) => loc.mapa.includes( ruta ) ) ;
            return muestaLocalidades[0].nom_loc;
        }

        return ruta;
    }
    const rutaAIr = ( ruta ) =>{
        if( contadorRutas < numeroDeRutas ){
            contadorRutas++;
            return regresaLink( ruta );
        }else{
            return regresaNombre( ruta );
        }
    }
    const regresaLink = ( ruta ) =>{
        if( ruta === ""){
            return <NavLink  to="/">Inicio</NavLink>

        }else if( !isNaN(+ruta) ){

            linkRuta = linkRuta+"/"+ruta ;
            return <NavLink  to={ linkRuta }>{claveANombre( ruta )}</NavLink>

        }else{

            linkRuta = linkRuta+"/"+ruta ;
            return <NavLink  to={ linkRuta }>{ ruta }</NavLink>
        }

    }
    const regresaNombre = ( ruta ) =>{
        if( !isNaN(+ruta) ){

            return claveANombre( ruta )

        }else{
            return ruta;
        }
    }

    return(
        <>
            <div className="container">
                <ol>
                    { rutasActuales.map( ( ruta ) =>
                        <li 
                            key={ ruta }>
                            { rutaAIr( ruta ) }
                        </li>
                    )}
                </ol>
            </div>
        </>
    )
}

export default SubRuta