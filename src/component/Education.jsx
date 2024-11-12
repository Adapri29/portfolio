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
              image="https://yt3.googleusercontent.com/pqLGHS5fIIzqQznOWa7jMq7rNZZXvdOh_oKLhvdUOc_GfXRQjvtTZKRx-55J2d7PNLPoVpO9PA=s900-c-k-c0x00ffffff-no-rj"
              institution="Universidad de Córdoba"
              startTime="2019-09"
              endTime="2023-06"
            />         
          </li>
        </ul>
    </section>
  )
}
