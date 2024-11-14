import "../styles/Education.css"
import { EducationCard } from "./EducationCard"

export const Education = () => {
  return (
    <section className="education">
        <h2>Educación</h2>
        <hr/>
        <ul>
          <li>
            <EducationCard 
              title="Grado de Ingeniería Informática"
              image="https://imgs.search.brave.com/4irCyxhpw83LLDLetb7KRbH9in6XQbEhLMFZ6zCG5Tk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9iL2I3L0xv/Z291bmljb3Jkb2Jh/LnN2Zy8yMjBweC1M/b2dvdW5pY29yZG9i/YS5zdmcucG5n"
              institution="Universidad de Córdoba"
              startTime="2019-09"
              endTime="2023-06"
            />         
          </li>
          <hr/>
        </ul>
    </section>
  )
}

