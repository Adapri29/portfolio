const openPDF = () => {
    window.open('/public/Curriculum.pdf', '_blank');
};

export const Contact = () => {
  return (
    <ul className="contact">
        <div>
            <a href="https://github.com/Adapri29" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github"></img>
            </a>
        </div>
        <div>
            <a href="https://www.linkedin.com/in/alberto-adamuz-priego-9b01b3276/" target="_blank" rel="noopener noreferrer">
                <img src="https://www.freeiconspng.com/uploads/linkedin-icon-1.png" alt="linkedIn"></img>
            </a>
        </div>
        
        <div>
            <a onClick={openPDF}>
                <img src="https://banner2.cleanpng.com/20180612/ulg/aa89pkfqh.webp" alt="CV"></img>
            </a>
        </div>            
    </ul>
  )
}
