function SectionTeam(props) {

    const equipo = [
        {
            id: 1,
            foto: "assets/img/team/team-1.jpg",
            twiter: "",
            facebook: "",
            instagram: "",
            linkedin: "",
            nombre: "Walter White",
            puesto: "Chief Executive Officer",
            presentacion: "Animi est delectus alias quam repellendus nihil nobis dolor. Est sapiente occaecati et dolore. Omnis aut ut nesciunt explicabo qui. Eius nam deleniti ut omnis repudiandae perferendis qui. Neque non quidem sit sed pariatur quia modi ea occaecati. Incidunt ea non est corporis in."

        },
        {
            id: 2,
            foto: "assets/img/team/team-2.jpg",
            twiter: "",
            facebook: "",
            instagram: "",
            linkedin: "",
            nombre: "Sarah Jhonson",
            puesto: "Product Manager",
            presentacion: "Animi est delectus alias quam repellendus nihil nobis dolor. Est sapiente occaecati et dolore. Omnis aut ut nesciunt explicabo qui. Eius nam deleniti ut omnis repudiandae perferendis qui. Neque non quidem sit sed pariatur quia modi ea occaecati. Incidunt ea non est corporis in."

        },
        {
            id: 3,
            foto: "assets/img/team/team-3.jpg",
            twiter: "",
            facebook: "",
            instagram: "",
            linkedin: "",
            nombre: "Amanda Jepson",
            puesto: "Accountant",
            presentacion: "Animi est delectus alias quam repellendus nihil nobis dolor. Est sapiente occaecati et dolore. Omnis aut ut nesciunt explicabo qui. Eius nam deleniti ut omnis repudiandae perferendis qui. Neque non quidem sit sed pariatur quia modi ea occaecati. Incidunt ea non est corporis in."

        },
        {
            id: 4,
            foto: "assets/img/team/team-4.jpg",
            twiter: "",
            facebook: "",
            instagram: "",
            linkedin: "",
            nombre: "William Anderson",
            puesto: "CTO",
            presentacion: "Animi est delectus alias quam repellendus nihil nobis dolor. Est sapiente occaecati et dolore. Omnis aut ut nesciunt explicabo qui. Eius nam deleniti ut omnis repudiandae perferendis qui. Neque non quidem sit sed pariatur quia modi ea occaecati. Incidunt ea non est corporis in."

        },
        {
            id: 5,
            foto: "assets/img/team/team-5.jpg",
            twiter: "",
            facebook: "",
            instagram: "",
            linkedin: "",
            nombre: "Niall Katz",
            puesto: "Marketing",
            presentacion: "Animi est delectus alias quam repellendus nihil nobis dolor. Est sapiente occaecati et dolore. Omnis aut ut nesciunt explicabo qui. Eius nam deleniti ut omnis repudiandae perferendis qui. Neque non quidem sit sed pariatur quia modi ea occaecati. Incidunt ea non est corporis in."

        }
    ]

    return(
        <>
         <section id="team" className="team">
      <div className="container">

        <div className="row">
        { equipo.map( (integrante) =>
        
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch" key={ integrante.id }>
            <div className="member" data-aos="fade-up">
              <div className="member-img">
                <img src={ integrante.foto } className="img-fluid" alt="" />
                <div className="social">
                  <a href={ integrante.twiter }><i className="bi bi-twitter"></i></a>
                  <a href={ integrante.facebook }><i className="bi bi-facebook"></i></a>
                  <a href={ integrante.instagram }><i className="bi bi-instagram"></i></a>
                  <a href={ integrante.linkedin }><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>{ integrante.nombre }</h4>
                <span>{ integrante.puesto }</span>
                <p>{ integrante.presentacion }</p>
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

export default SectionTeam