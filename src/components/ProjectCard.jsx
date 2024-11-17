import { LinkIcons } from "./LinkIcons"


export const ProjectCard = ({img, title, description, tags, codeLink="", infoLink=""}) => {
  return (
    <article className="project-card">
        <div
            className="project-card-background"
            style={{backgroundImage: `url(${img})`, backgroundSize: "cover"}}
        ></div>
        <div className="project-card-content">
            <h3>{title}</h3>
            <div className="tags">
                {tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                ))}
            </div>
            <p>{description}</p>
            <LinkIcons icons={[
                {
                    link:codeLink,
                    icon: "bx bxl-github",
                    aria: "Código del proyecto"
                },
                {
                    link:infoLink,
                    icon: "bx bx-info-circle",
                    aria: "Información del proyecto"
                }
            ]}/>
        </div>
    </article>
  )
}
