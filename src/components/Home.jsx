import { LinkIcons } from "./LinkIcons"

const icons = [
    {
        link:"https://www.linkedin.com/in/alberto-adamuz-priego-9b01b3276/",
        icon: "bx bxl-linkedin"
    },
    {
        link:"https://github.com/Adapri29/",
        icon: "bx bxl-github"
    }
]

export const Home = () => {
  return (
    <section className="home" id="home">
        <div className="home-img">
            <img src="/photo.png" atl=""/>
        </div>
        <div className="home-content">
            <h1>Hola, soy <span>Alberto</span></h1>
            <h2 className="text-animation">Soy <span></span></h2>
            <p>
                Ingeniero informático, 
                curioso y abierto a nuevos desafíos. 
                Busco aprender, colaborar y crecer en cada proyecto, 
                explorando oportunidades para aportar y evolucionar continuamente.
            </p>

            <div className="btn-group">
                <a href="/cv.pdf" className="btn" target="_blank" rel="noopener noreferrer">Descargar CV</a>
                <a href="#contact" className="btn">Contactar</a>
            </div>

            <LinkIcons icons={icons}/>
            
        </div>
    </section>
  )
}
