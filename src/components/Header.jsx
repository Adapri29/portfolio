import { Navbar } from "./Navbar"

export const Header = () => {

  const renderLinks = (activeSection) => (
    <>
      <a href="#home" className={activeSection === "home" ? "active" : ""}>
        Home
      </a>
      <a href="#projects" className={activeSection === "projects" ? "active" : ""}>
        Proyectos
      </a>
    </>
  );

  return (
    <header className="header">
        <a href="#home" className="logo"><span>Adapri</span></a>

        <Navbar renderLinks={renderLinks}/>

    </header>
  )
}
