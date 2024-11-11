import "../styles/Contact.css"

export const Contact = () => {
  return (
    <footer className="contact">
    <h2>Contacto</h2>
    <ul>
        <li>
            <a href="https://github.com/Adapri29" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github"></img>
            </a>
        </li>
        <li>
            <a href="https://www.linkedin.com/in/alberto-adamuz-priego-9b01b3276/" target="_blank" rel="noopener noreferrer">
                <img src="https://www.freeiconspng.com/uploads/linkedin-icon-1.png" alt="linkedIn"></img>
            </a>
        </li>
        
        <li>
            <a href="/public/Curriculum.pdf" target="_blank" rel="noopener noreferrer">
                <img src="https://banner2.cleanpng.com/20180612/ulg/aa89pkfqh.webp" alt="CV"></img>
            </a>
        </li>            
    </ul> 
    </footer>
  )
}
