import * as React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css'
import logo from '../../assets/img/lagartija.png'


function NavBar() {

    /** Constantes para la funcionalidad del NavBar Movile */
    const [navExpandido , setNavExpandido ]     = useState( false );
    const [dropExpandido , setDropExpandido ]   = useState( false );
    const [deepExpandido , setDeepExpandido ]   = useState( false );

    const classToggle           = "bi mobile-nav-toggle ";
    const classToggleMovile     = navExpandido ? "bi-x ": "bi-list ";
    const classNavBarMovile     = navExpandido ? "navbar navbar-mobile": "navbar";
    const classDropMovile       = dropExpandido ? "dropdown-active": "";
    const classDeepDropMovile   = deepExpandido ? "dropdown-active": "";

    const expandNav         = ()=>{ setNavExpandido ( !navExpandido ); }   
    const expandDropdown    = ()=>{ setDropExpandido ( !dropExpandido ); }
    const expandDeeppdown   = ()=>{ setDeepExpandido ( !deepExpandido ); }



    return(
        <>
        <header id="header" className="fixed-top d-flex align-items-center">
            <div className="container d-flex align-items-center justify-content-between">
                <div className="logo">
                    <img src={logo} />
                    <h1 className="text-light" >
                        <NavLink 
                            to="/"
                            className="color-titulo">
                            Visita temoaya
                        </NavLink>
                    </h1>
                </div>

                <nav id="navbar" className={ classNavBarMovile } >
                    <ul>
                    <li>
                    <NavLink to="/">
                        Inicio
                    </NavLink>
                    </li>
                        
                        <li>
                            <NavLink to="/Pueblos">
                                Pueblos
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Fotografias">
                                Fotografias
                            </NavLink>
                        </li>
                        <li className="dropdown"><a href="#"><span>Nosotros</span> <i className="bi bi-chevron-down" onClick={ expandDropdown }></i></a>
                            <ul className={ classDropMovile }>
                                <li>
                                    <NavLink to="/Nosotros">
                                        Nosotros
                                    </NavLink>      
                                </li>
                                <li>
                                    <NavLink to="/Equipo">
                                        Equipo
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <NavLink to="/Contacto">
                                Contacto
                            </NavLink>
                        </li>

                        <li>
                            <NavLink 
                                to="/Equipo"
                                className="getstarted">
                                Equipo
                            </NavLink>
                        </li>
                    </ul>
                    <i className={ classToggle + classToggleMovile } onClick={ expandNav }></i>
                </nav>

            </div>
        </header>
        </>
    )
}
export default NavBar