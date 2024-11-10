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
                role="Ingeniero Informático I+D+i"
                startTime="2023-06"
                endTime="Actual"
                location= {{
                  city: "Córdoba",
                  country: "España",
                }}
                description="Ingeniero Informático encargado del desarrollo 
                            y la implementación de proyectos tecnológicos multidisciplinarios, 
                            incluyendo inteligencia artificial, aplicaciones web y móviles, y experiencias de realidad virtual."
              />
            </li>
        </ul>
    </section>
  )
}
