import { social_links } from "../models/data"
import { LinkIcons } from "./LinkIcons"

export const Home = () => {
  return (
    <section className="home" id="home">
        <div className="home-img">
            <img src="photo.webp" alt="Fotografía de Alberto"/>
        </div>
        <div className="home-content">
            <h1>Soy <span>Alberto</span></h1>
            <h2 className="text-animation"><span></span></h2>
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

            <LinkIcons icons={social_links}/>
            
        </div>
    </section>
  )
}
