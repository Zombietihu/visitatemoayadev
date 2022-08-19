import Breadcrumbs from '../../Componentes/Breadcrumbs/Breadcrumbs'
import CardPueblo from "../../Componentes/CardsPueblos/CardPueblo"

function Pueblos() {
    return(
        <main id="main">
            <Breadcrumbs nombrePagina = "Pueblos" />
            <CardPueblo />
        </main>
        
    )
}

export default Pueblos