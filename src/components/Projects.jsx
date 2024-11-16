import { ProjectCard } from "./ProjectCard"
import {projects} from '../models/data.js'

export const Projects = () => {
  return (
    <section className="projects" id="projects">
        <h2>Proyectos</h2>
        <div className="projects-grid">
            {projects.map((project)=>(
                <ProjectCard key={project.id} title={project.title} description={project.description} img={project.img} tags={project.tags} infoLink={project.infoLink}/>
            ))}
        </div>
    </section>
    
  )
}
