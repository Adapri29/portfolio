import "../styles/AboutMe.css"
import photo from "../assets/photo.png"
import { Contact } from "./Contact";


export const AboutMe = () => {

    return (
        <header className="about">
            <div className="container">
                <div className="img-container">
                    <img    
                            className="photo"
                            src={photo}
                            alt="Alberto Adamuz Priego"
                    />
                </div>
                <div className="info-container">

                <h1>Adapri</h1>
                <h2>Alberto Adamuz Priego</h2>
                <p>
                    Ingeniero informático, 
                    curioso y abierto a nuevos desafíos. 
                    Busco aprender, colaborar y crecer en cada proyecto, 
                    explorando oportunidades para aportar y evolucionar continuamente.
                </p>
                </div>
            </div>
            

        </header>
    )
}
