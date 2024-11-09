import "../styles/AboutMe.css"
import photo from "../assets/photo.jpeg"
import { Contact } from "./Contact";


export const AboutMe = () => {

    return (
        <div className="about-me">
            <div className="info-container">
            <div className="info-container-left">
                <img
                    src={photo}
                    alt="Alberto Adamuz Priego"
                />
            </div>
            <div className="info-container-right">
                <h1>Adapri</h1>
                <h2>Alberto Adamuz Priego</h2>
                <p>adapri29@gmail.com</p>
            </div>
            </div>
            <p>
                Ingeniero informático, 
                curioso y abierto a nuevos desafíos. 
                Busco aprender, colaborar y crecer en cada proyecto, 
                explorando oportunidades para aportar y evolucionar continuamente.
            </p>

            <Contact />
        
        </div>
    )
}
