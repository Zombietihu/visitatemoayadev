import SubRuta from "../SubRuta/SubRuta"
function Breadcrumbs( props ) {
    return(
        <>
        <section id="breadcrumbs" className="breadcrumbs">
            <div className="breadcrumb-hero">
                <div className="container">
                    <div className="breadcrumb-hero">
                        <h2>{ props.nombrePagina }</h2>
                        <p>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium. </p>
                    </div>
                </div>
            </div>
            <SubRuta localidades ={ props.localidades }/>
        </section>
        </>
    )
}

export default Breadcrumbs