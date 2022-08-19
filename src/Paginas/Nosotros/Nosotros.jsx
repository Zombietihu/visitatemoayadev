import Breadcrumbs from '../../Componentes/Breadcrumbs/Breadcrumbs'
import SectionAbout from '../../Componentes/Section/SectionAbout'
function Nosotros() {

    return(
        <>
            <main id="main">
                <Breadcrumbs nombrePagina = "Nosotros" />
                <SectionAbout  />
            </main>
        </>
    )
}

export default Nosotros