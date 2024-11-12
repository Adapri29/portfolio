

export const ProjectCard = ({title, description, image, technologies, codeURL, infoURL}) => {
  return (
    <article className="project-card">
        <div className="project-card-content">
            <div className="card-image">
                <img src={image} alt={`Captura del Proyecto ${title}`}/>
            </div>
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
                <div className="card-footer">
                    <div className="card-tags">
                        {technologies.map( image => {return <img src={image}/>})}
                    </div>
                    <div className="card-links">
                        {codeURL && <a href={codeURL} target="_blank" className="code-link">Code URL</a>}
                        {infoURL && <a href={infoURL} target="_blank" className="url-link">Info URL</a>}
                    </div>
                </div>
            </div>
        </div>
    </article>
  )
}
