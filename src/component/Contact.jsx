import "../styles/Contact.css"
import 'boxicons'
export const Contact = () => {
  return (
    <footer className="contact">
        <h2>Contacto</h2>
        <hr className="footer-divider"/>
        <div class="footer-contact">
            <p>Email: <a className="email" href="mailto:adapri29@egmail.com">adapri29@gmail.com</a></p>
            <p>Ubicación: Córdoba, España</p>
        </div>
        
        <div class="social-icons">
            <a href="https://github.com/Adapri29" target="_blank">
                <i class='bx bxl-github' ></i>
            </a> 
            <a href="https://www.linkedin.com/in/alberto-adamuz-priego-9b01b3276/" target="_blank">
                <i class='bx bxl-linkedin'></i>
            </a> 
        </div>

        <a className="cv-button" href="/public/Curriculum.pdf" target="_blank" rel="noopener noreferrer">Descargar CV</a>
        
    </footer>
  )
}
