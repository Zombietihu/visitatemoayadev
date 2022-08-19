import Breadcrumbs from '../../Componentes/Breadcrumbs/Breadcrumbs'
import SectionFotos from "../../Componentes/Section/SectionFotos"


function Fotografias() {
  return(  
    <>
     <main id="main">
        <Breadcrumbs nombrePagina = "Galeria" />
        <SectionFotos />
     </main>
    </>
  )
}

export default Fotografias