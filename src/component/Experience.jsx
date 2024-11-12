import "../styles/Experience.css"
import { ExperienceCard } from "./ExperienceCard"

export const Experience = () => {
  return (
    <section className="experience">
        <h2>Experiencia</h2>
        <ul>
            <li>
              <ExperienceCard 
                company="Fundación CETEMET"
                image="https://www.railwayinnovationhub.com/wp-content/uploads/2019/05/CETEMET-logo-web.png"
                role="Ingeniero Informático I+D+i"
                startTime="2023-06"
                endTime="Actual"
                description="Ingeniero Informático encargado del desarrollo 
                            y la implementación de proyectos tecnológicos multidisciplinarios, 
                            incluyendo inteligencia artificial, aplicaciones web y móviles, y experiencias de realidad virtual."
              />
            </li>
        </ul>
    </section>
  )
}
