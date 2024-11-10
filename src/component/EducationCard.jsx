

export const EducationCard = ({title, subtitle, institution, location, startTime, endTime}) => {
  return (
    <article>
        <h3>{title}</h3>
        {subtitle && <h4>{subtitle}</h4>}
        <p>{institution}</p>
        <p>{location.city}, {location.country}</p>
        <p>
        <time>{startTime}</time> - 
        <time>{endTime}</time>
        </p>
    </article>  
  )
}
