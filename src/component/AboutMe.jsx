import "../styles/AboutMe.css"
import photo from "../assets/photo.jpeg"

const openPDF = () => {
    window.open('/public/Curriculum.pdf', '_blank');
};


export const AboutMe = () => {

    return (
        <div className="about-me">
            <div className="info-container">
            <div className="info-container-left">
                <img
                    src={photo}
                    alt="Alberto Adamuz Priego"
                />
                <button onClick={openPDF}>Descargar CV</button>
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
            <div className="contact">
                <a href="https://github.com/Adapri29" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github"></img>
                </a>
                <a href="https://www.linkedin.com/in/alberto-adamuz-priego-9b01b3276/" target="_blank" rel="noopener noreferrer">
                    <img src="https://www.freeiconspng.com/uploads/linkedin-icon-1.png" alt="linkedIn"></img>
                </a>
            </div>
        
        </div>
    )
}
