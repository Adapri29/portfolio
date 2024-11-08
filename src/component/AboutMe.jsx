const openPDF = () => {
    window.open('/public/Curriculum.pdf', '_blank');
};


export const AboutMe = () => {

    return (
        <div className="about-me">
            <div className="info-container">
            <img
                src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/06/Things-Fate-Change-About-Gilgamesh-Mythology.jpg"
                alt="Alberto Adamuz Priego"
            />
            <div>
                <h1>Adapri</h1>
                <h2>Alberto Adamuz Priego</h2>
                <button onClick={openPDF}>Descargar CV</button>
            </div>
            </div>
            <p>
                Ingeniero informático, 
                curioso y abierto a nuevos desafíos. 
                Busco aprender, colaborar y crecer en cada proyecto, 
                explorando oportunidades para aportar y evolucionar continuamente.
            </p>
        
        </div>
    )
}
