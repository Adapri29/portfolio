
export const Home = () => {
  return (
    <section className="home" id="home">
        <div className="home-content">
        <h1>Hola, soy <span>Alberto</span></h1>
        <h3 className="text-animation">Soy un <span></span></h3>
        <p>
            Ingeniero informático, 
            curioso y abierto a nuevos desafíos. 
            Busco aprender, colaborar y crecer en cada proyecto, 
            explorando oportunidades para aportar y evolucionar continuamente.
        </p>

        <div className="social-icons">
            <a href="https://www.linkedin.com/in/alberto-adamuz-priego-9b01b3276/" target="_blank" rel="noopener noreferrer"><i className='bx bxl-linkedin'></i></a>
            <a href="https://github.com/Adapri29/" target="_blank" rel="noopener noreferrer"><i className='bx bxl-github'></i></a>
        </div>

        <div className="btn-group">
            <a href="/cv.pdf" className="btn" target="_blank" rel="noopener noreferrer">Descargar CV</a>
            <a href="#contact" className="btn">Contactar</a>
        </div>
        </div>
        <div className="home-img">
        <img src="/src/assets/photo.png" atl=""/>
        </div>
    </section>
  )
}
