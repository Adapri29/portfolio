
export const Header = () => {
  return (
    <header className="header">
        <a href="#home" className="logo"><span>Adapri</span></a>

        <i className='bx bx-menu' id="menu-icon"></i>

        <nav className="navbar">
          <a href="#home" className="active">Home</a>
          <a href="#education">Educación</a>
          <a href="#projects">Proyectos</a>
          <a href="#contact">Contacto</a>
        </nav>

    </header>
  )
}
