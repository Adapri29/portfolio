

export const EducationCard = ({title, image, institution, startTime, endTime}) => {
  return (
    <article>
      <img src={image} alt={institution}/>
      <div>
          <h3>{institution}</h3>
          <p>{title}</p>
          <p><time>{startTime} - {endTime}</time></p>  
      </div>
    </article>  
  )
}
