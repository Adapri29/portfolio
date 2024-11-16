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

export const Footer = () => {
  return (
    <footer className="footer" id="contact">
        <LinkIcons icons={icons}/>
        <p className="copyright">
          © 2024 Alberto Adamuz Priego | Todos los Derechos Reservados
        </p>
    </footer>
  )
}
