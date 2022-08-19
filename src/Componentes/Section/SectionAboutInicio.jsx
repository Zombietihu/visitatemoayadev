
import { getIndicadores , indicadores } from '../../Helpers/getIndicadores'
import CountUp from 'react-countup';
import ModalVideo from 'react-modal-video'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChurch , faCity , faGopuram , faHouseUser , faTruckMedical , faRoute, faMountain, faMountainCity } from '@fortawesome/free-solid-svg-icons'

import fotoInicio from '/assets/img/about1.jpg'
import { useEffect } from 'react';
import { useState } from 'react';

function Span( props ){
   /*    const [valorIndicadors, setValorIndicadores] = useState([]);
    setValorIndicadores( 1993 )
    *getIndicadores( props.id )
        .then((value) => {
            
            //setValorIndicadores( parseInt(value[0].value) )
        });*/
    return(
        <>
            <CountUp className="purecounter" end={ props.id  } />
        </>
    );
}

function  SectionAboutInicio() {
    const [isOpen, setOpen] = useState(false)
    const [isOpenVideoComida, setOpenVideoComida] = useState(false)
    
    return(
        <> 
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="MATgQG4J6Js" onClose={() => setOpen(false)} />
        <ModalVideo channel='youtube' autoplay isOpen={isOpenVideoComida} videoId="kG2jVAFeBgU" onClose={() => setOpenVideoComida(false)} />
            <section id="about" className="about">
                <div className="container">

                    <div className="row justify-content-end">
                        <div className="col-lg-11">
                            <div className="row justify-content-end">
                            {
                                indicadores.map((indicador, index) => (  
                    
                                    <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch" key={ index }>
                                        <div className="count-box py-5">
                                        <i className={ indicador.class }></i>
                                         <Span id={ indicador.idIndicador }/> 
                                        <p>{indicador.nombre}</p>
                                        </div>
                                    </div>

                                ))
                            }  
                        
                        </div>
                    </div>
                    </div>

                    <div className="row">

                    <div className="col-lg-6 video-box align-self-baseline position-relative">
                        <img src={ fotoInicio } className="img-fluid" alt="" />
                       

                        <a className="glightbox play-btn mb-4" onClick={()=> setOpen(true)} style={{ cursor: 'pointer'}}></a>

                    </div>

                    <div className="col-lg-6 pt-3 pt-lg-0 content">
                        <h3>Temoaya, cuna de la cultura otomí.</h3>
                        <p className="fst-italic">
                        Temoaya es uno de los 125 municipios del Estado de México, se encuentra en el centro del estado y limita al norte con Jiquipilco; al noreste con Isidro Fabela y Nicolás Romero; al noroeste con Ixtlahuaca; al sur con el municipio de Toluca; al sureste con el municipio de Otzolotepec; y al oeste con el municipio de Almoloya de Juárez.

                        </p>
                        <ul>
                        <li><i className="bx bx-check-double"></i> Centro Ceremonial Otomí. </li>
                        <li><i className="bx bx-check-double"></i> Mirador del Cerro de Catedral.</li>
                        <li><i className="bx bx-check-double"></i> Plaza cívica Miguel Hidalgo y Costilla.</li>
                        <li><i className="bx bx-check-double"></i> Parroquia de Santiago Apóstol.</li>
                        </ul>
                        <p>
                        Los atractivos más importantes de Temoaya están representados por la cultura Otomí, presente en este municipio.
                        </p>
                    </div>

                    </div>

                </div>
            </section>

            <section id="cta" className="cta">
                <div className="container" data-aos="fade-in">

                    <div className="text-center">
                    <h3>Preparate para la aventura.</h3>
                    <p>Sí, es Temoaya, un lugar en el que se puede probar las delicias culinarias hechas con maíz, charales, calabaza, quelites y chorizo además se puede visitar su plaza y encontrar diversas artesanías, sobre todo textiles.</p>
                    <a className="cta-btn" onClick={()=> setOpenVideoComida(true)} style={{ cursor: 'pointer'}}>Ver más</a>
                    </div>

                </div>
            </section>

            <section id="services" className="services ">
      <div className="container">

        <div className="section-title pt-5" data-aos="fade-up">
          <h2>Información útil</h2>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="icon-box" data-aos="fade-up">
              <div className="icon"><i  style={{ color:' #3CCF4E' }}><FontAwesomeIcon icon={faMountainCity} /></i></div>
              <h4 className="title"><a href="">Temoaya</a></h4>
              <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="icon-box" data-aos="fade-up">
              <div className="icon"><i style={{color: '#C70A80' }}><FontAwesomeIcon icon={faGopuram} /></i></div>
              <h4 className="title"><a href="">Centro Ceremonial Otomí</a></h4>
              <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
            </div>
          </div>

          <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="icon-box">
              <div className="icon"><i style={{ color: '#37E2D5' }}><FontAwesomeIcon icon={faChurch} /></i></div>
              <h4 className="title"><a href="">Parroquia de Santiago Apóstol</a></h4>
              <p className="description">Santuario del siglo XVI, estilo barroco, que cuenta con la clásica representación de Santiago Matamoros en la cual se muestra a un guerrero medieval a caballo en actitud de combate.526</p>
            </div>
          </div>
          <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="icon-box">
              <div className="icon"><i style={{ color:'#AF7AB3' }}><FontAwesomeIcon icon={faHouseUser} /></i></div>
              <h4 className="title"><a href="">Casa de la cultura</a></h4>
              <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
          </div>

          <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="icon-box">
              <div className="icon"><i style={{ color: 'red' }}><FontAwesomeIcon icon={faTruckMedical} /></i></div>
              <h4 className="title"><a href="">Servicios de emergencia</a></h4>
              <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
            </div>
          </div>
          <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="icon-box">
              <div className="icon"><i style={{ color: '#FFC300' }}><FontAwesomeIcon icon={faRoute} /></i></div>
              <h4 className="title"><a href="">Ruta Otomí</a></h4>
              <p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
            </div>
          </div>
        </div>

      </div>
    </section>

        </>
    )
}

export default SectionAboutInicio