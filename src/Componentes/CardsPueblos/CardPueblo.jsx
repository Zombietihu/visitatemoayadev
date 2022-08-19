
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { localidades } from "../../Helpers/localidadesTemoaya"

function CardPueblo() {
    const [ locacidadesState , setLocalidadesState ] = useState( localidades );

    const buscar = ( e )=>{
        
        const muestaLocalidades = localidades.filter( ( loc ) => loc.nom_loc.toLowerCase().includes( e.toLowerCase() ) ) ;
        setLocalidadesState( muestaLocalidades );
    }

    return( 
        <>
        <section id="team" className="team">
            <div className="container">
                <h3 class="sidebar-title">Buscar</h3>
                <div class="searchPueblos">
                    <form action="">
                        <input
                            type="text"
                            onChange={ ( event ) => buscar(  event.target.value ) }
                        />
                        <button disabled ><i class="bi bi-search"></i></button>
                    </form>
                </div>

                <div className="row">
                
                    { locacidadesState.map( ( localidad )=>
                    <div class="col-lg-4 col-md-6 d-flex align-items-stretch" key={ localidad.mapa }>
                        <div class="member" data-aos="fade-up">
                            <div class="member-img">
                                <img src="https://random.imagecdn.app/500/300" class="img-fluid" alt="" />
                                <div class="social">
                                <a href=""><i class="bi bi-twitter"></i></a>
                                <a href=""><i class="bi bi-facebook"></i></a>
                                <a href=""><i class="bi bi-instagram"></i></a>
                                <a href=""><i class="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                            <div class="member-info">
                                <h4>{ localidad.nom_loc }</h4>
                                <span> { localidad.pob_total } habitantes</span>
                                <p>Animi est delectus alias quam repellendus nihil nobis dolor. Est sapiente occaecati et dolore. Omnis aut ut nesciunt explicabo qui. Eius nam deleniti ut omnis repudiandae perferendis qui. Neque non quidem sit sed pariatur quia modi ea occaecati. Incidunt ea non est corporis in.</p>
                                <NavLink 
                                    to={ `/Pueblos/${ localidad.mapa }`}
                                    className="btn btn-vermas">
                                    Ver más
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </section>
        </>
    )
}

export default CardPueblo