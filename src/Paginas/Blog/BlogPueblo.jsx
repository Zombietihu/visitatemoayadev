import Breadcrumbs from '../../Componentes/Breadcrumbs/Breadcrumbs'
import Blog from "./Blog"
import { localidades } from "../../Helpers/localidadesTemoaya"
import { useParams } from 'react-router-dom'

function BlogPueblo() {

    let { puebloId } = useParams();
    const nombreLocalidad = localidades.filter( ( loc ) => loc.mapa.includes( puebloId ) ) ;
    return(
        <>
        <main id="main">
            <Breadcrumbs nombrePagina = {nombreLocalidad[0].nom_loc}  localidades ={ localidades }/>
            <Blog />
        </main>
        </>
    )
}

export default BlogPueblo