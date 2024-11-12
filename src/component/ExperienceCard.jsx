

export const ExperienceCard = ({company, image, role, startTime, endTime, description}) => {

    return (
        <article>
            <img src={image} alt={company} />
            <div>
                <h3>{role}</h3>
                <h4>{company}</h4>
                <p>{description.slice(0, 100)}...</p>
                <span className="expand" onClick={null}>Ver más</span>
            </div>
        </article>
    )
}
