

export const EducationCard = ({title, image, institution, startTime, endTime}) => {
  return (
    <article>
      <img src={image} alt={institution}/>
      <div>
          <h3>{institution}</h3>
          <h4>{title}</h4>
          <p><time>{startTime} - {endTime}</time></p>  
      </div>
    </article>  
  )
}
