
import * as React from "react"
import { NavLink } from "react-router-dom";

function SectionHero() {
    return(
        <>
            <section id="hero">
                <div className="hero-container" data-aos="fade-up">
                <h1>Visita Temoaya</h1>
                <h2>Mostrando lo más bello de nuestro municipio.</h2>
                <NavLink to="/Nosotros" className="btn-get-started scrollto">Conoce más</NavLink>
                </div>
            </section>
        </>
    )
}

export default SectionHero