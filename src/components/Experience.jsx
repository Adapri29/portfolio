import {employment, education} from '../models/data.js'
import { ExperienceCard } from './ExperienceCard.jsx'


export const Experience = () => {

  return (
    <section className="experience" id="experience">
        <h2>Experiencia</h2>

        <div className="experience-container">
            <div className='employment'>
                {employment.map((item) => (
                    <ExperienceCard
                        key={item.id}
                        img={item.img}
                        title={item.company} 
                        subtitle={item.role}
                        starTime={item.startTime}
                        endTime={item.endTime}
                    />
                ))}
            </div>

            <div className='education'>
                {education.map((item) => (
                    <ExperienceCard
                        key={item.id}
                        img={item.img}
                        title={item.study} 
                        subtitle={item.institution}
                        starTime={item.startTime}
                        endTime={item.endTime}
                    />
                ))}
            </div>
            
        </div>

    </section>
  )
}
