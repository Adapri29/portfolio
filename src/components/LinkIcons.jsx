
export const LinkIcons = ({icons}) => {
  console.log(icons)
  return (
    <div className="link-icons">
      {icons.map((icon)=>(
        icon.link ? (<a key={icon.icon} href={icon.link} target="_blank" rel="noopener noreferrer"><i className={icon.icon}></i></a>):null
      ))}
        
    </div>
  )
}
