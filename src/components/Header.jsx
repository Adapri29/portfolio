import { Navbar } from "./Navbar"

const renderLinks = (activeSection) => (
  <>
    <a href="#home" className={activeSection === "home" ? "active" : ""}>
      Home
    </a>
    <a href="#projects" className={activeSection === "projects" ? "active" : ""}>
      Proyectos
    </a>
    <a href="#experience" className={activeSection === "experience" ? "active" : ""}>
      Experiencia
    </a>
  </>
);


export const Header = () => {
  return (
    <header className="header">
        <a href="#home" className="logo"><span>Adapri</span></a>

        <Navbar renderLinks={renderLinks} initialSection="home"/>

    </header>
  )
}
