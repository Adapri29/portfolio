import { ProjectCard } from "./ProjectCard"

const projects = [
    {
        id: 1,
        img: "/bioterrabot.png",
        title: "BioTerraBot",
        description: "Robotización para el control de cubiertas vegetales en cultivos ecológicos.",
        tags: ["Python", "ROS"],
        infoLink:"https://bioterrabot.ecovalia.org/",

    },
    {
        id: 2,
        img: "https://ambitcluster.org/images/Noticias/2024/04/Siapemad-1.jpg",
        title: "SIAPEMAD",
        description: "Sistema inteligente para atención de personas mayores y dependientes.",
        tags: ["Python", "Machine Learning"],
        infoLink:"https://ambitcluster.org/es/area-de-innovacion/proyectos/3078-siapemad",
    },
    
]

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
