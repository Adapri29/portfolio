

export const ProjectCard = ({title, description, image, technologies, codeURL, infoURL}) => {
  return (
    <article class="project-card">
        <div class="card-image">
            <img src={image} alt={`Captura del Proyecto ${title}`}/>
        </div>
        <div class="card-content">
            <h3 class="card-title">{title}</h3>
            <p class="card-description">{description}</p>
            <div class="card-footer">
                <div class="card-tags">
                    {technologies.map( image => {return <img src={image}/>})}
                </div>
                <div class="card-links">
                    {codeURL && <a href={codeURL} target="_blank" class="code-link">Code URL</a>}
                    {infoURL && <a href={infoURL} target="_blank" class="url-link">Info URL</a>}
                </div>
            </div>
        </div>
    </article>
  )
}
