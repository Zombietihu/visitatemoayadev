import SectionAboutInicio from "../../Componentes/Section/SectionAboutInicio";
import SectionHero from "../../Componentes/Section/SectionHero";

function Index() {
    return(
        <>
            <SectionHero />
            <main id="main">
                <SectionAboutInicio />
            </main>
        </>
        
    )
}

export default Index