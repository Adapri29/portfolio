

export const ExperienceCard = ({img, company, role, starTime, endTime="Actualidad"}) => {
    console.log(endTime)
    return (
        <article className="experience-card">
            <div className="experience-img">
                <img src={img} alt={company}/>
            </div>
            <div className="experience-content">
                <h3>{company}</h3>
                <p>{role}</p>
                <h4>{starTime} - {endTime}</h4>
            </div>
        </article>
    )
}
