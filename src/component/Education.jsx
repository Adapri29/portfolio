import "../styles/Education.css"
import { EducationCard } from "./EducationCard"

export const Education = () => {
  return (
    <section className="education">
        <h2>Educación</h2>
        <ul>
          <li>
            <EducationCard 
              title="Grado de Ingeniería Informática"
              subtitle="Especialidad Computación"
              institution="Universidad de Córdoba"
              location={{
                city:"Córdoba",
                country:"España",
              }}
              startTime="2019-09"
              endTime="2023-06"
            />         
          </li>
        </ul>
    </section>
  )
}
