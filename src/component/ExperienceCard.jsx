

export const ExperienceCard = ({company, role, startTime, endTime, location, description}) => {

    return (
        <article>
            <h3>{company}</h3>
            <h4>{role}</h4>
            <p><time>{startTime} - {endTime}</time></p>
            <p>{location.city}, {location.country}</p>
            <p>{description}</p>
        </article>
    )
}
