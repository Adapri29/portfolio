import { Navbar } from "./Navbar"

export const Header = () => {
  return (
    <header className="header">
        <a href="#home" className="logo"><span>Adapri</span></a>

        <Navbar>
          <a href="#home" className="active">Home</a>
          <a href="#education">Educación</a>
          <a href="#projects">Proyectos</a>
          <a href="#contact">Contacto</a>
        </Navbar>

    </header>
  )
}
 {/* <i className='bx bx-menu' id="menu-icon"></i> */}