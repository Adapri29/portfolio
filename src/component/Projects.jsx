import "../styles/Projects.css"
import { ProjectCard } from "./ProjectCard"
import bioterrabot from "/bioterrabot.png"
export const Projects = () => {
  return (
    <section className="projects">
        <h2>Proyectos</h2>
        <hr/>
        <ul>
            <li key="1">
                <ProjectCard 
                  title="BioTerraBot"
                  description= "Robotización para el control de cubiertas vegetales en cultivos ecológicos."
                  image={bioterrabot}
                  technologies={[
                    "https://www.ros.org/imgs/logo-white.png",
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"
                  ]}
                  infoURL="https://bioterrabot.ecovalia.org/"
                />
            </li>
            <li key="2">
                <ProjectCard 
                  title="SIAPEMAD"
                  description= "Sistema inteligente para atención de personas mayores y dependientes."
                  image="https://ambitcluster.org/images/Noticias/2024/04/Siapemad-1.jpg"
                  technologies={[
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
                    "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
                    "https://seeklogo.com/images/P/pandas-logo-56829C6445-seeklogo.com.png"
                  ]}
                  infoURL="https://ambitcluster.org/es/area-de-innovacion/proyectos/3078-siapemad"
                />
            </li>
            
        </ul>
    </section>
  )
}
