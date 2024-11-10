import "../styles/AboutMe.css"
import photo from "../assets/photo.jpeg"
import { Contact } from "./Contact";


export const AboutMe = () => {

    return (
        <section className="about">
            <div className="header">
                <img
                        src={photo}
                        alt="Alberto Adamuz Priego"
                />
                <div>

                <h1>Adapri</h1>
                <h2>Alberto Adamuz Priego</h2>
        
                </div>
            </div>

            <p>
                    Ingeniero informático, 
                    curioso y abierto a nuevos desafíos. 
                    Busco aprender, colaborar y crecer en cada proyecto, 
                    explorando oportunidades para aportar y evolucionar continuamente.
            </p>

        </section>
    )
}
