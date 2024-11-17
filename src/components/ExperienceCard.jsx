

export const ExperienceCard = ({img, title, subtitle, starTime, endTime="Actualidad"}) => {
    console.log(endTime)
    return (
        <article className="experience-card">
            <div className="experience-img">
                <img src={img} alt={title}/>
            </div>
            <div className="experience-content">
                <h3>{title}</h3>
                <p>{subtitle}</p>
                <h4>{starTime} - {endTime}</h4>
            </div>
        </article>
    )
}
