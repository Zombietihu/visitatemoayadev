import Breadcrumbs from '../../Componentes/Breadcrumbs/Breadcrumbs'
import SectionContacto from '../../Componentes/Section/SectionContacto'

function Contacto() {
    return(
        <>
        <main id="main">
            <Breadcrumbs nombrePagina = "Contacto"/>
            <SectionContacto />
        </main>
        </>
    )
}

export default Contacto