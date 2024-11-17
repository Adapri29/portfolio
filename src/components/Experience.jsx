import {experience} from '../models/data.js'
import { ExperienceCard } from './ExperienceCard.jsx'


export const Experience = () => {
    console.log(experience)
  return (
    <section className="experience" id="experience">
        <h2>Experiencia</h2>

        <div className="experience-container">
            {experience.map((item) => (
                <ExperienceCard
                    key={item.id}
                    img={item.img}
                    company={item.company} 
                    role={item.role}
                    starTime={item.startTime}
                    endTime={item.endTime}
                />
            ))}
            
        </div>
    </section>
  )
}
