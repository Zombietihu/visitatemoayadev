import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import NavBar       from './Componentes/NavBar/NavBar'
import Index        from './Paginas/Inicio/index'
import Nosotros     from './Paginas/Nosotros/Nosotros'
import Equipo       from './Paginas/Equipo/Equipo'
import Pueblos      from './Paginas/Pueblos/Pueblos'
import Fotografias  from './Paginas/Fotografias/Fotografias'
import Blog         from './Paginas/Blog/Blog'
import BlogPueblo   from './Paginas/Blog/BlogPueblo'
import Contacto     from './Paginas/Contacto/Contacto'
import Footer       from './Componentes/Footer/Footer'

function App() {
    return (
    <>
    <BrowserRouter>
      <NavBar />
      
      <Routes>
          <Route exact path="/" element={<Index />} />
          <Route exact path="/nosotros" element={<Nosotros />} />
          <Route exact path="/equipo" element={<Equipo />} />
          <Route exact path="/pueblos" element={<Pueblos />} />

          <Route exact path="/pueblos/:puebloId" element={<BlogPueblo />} />

          <Route exact path="/fotografias" element={<Fotografias />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
     </BrowserRouter>
    </>
  )
}

export default App
