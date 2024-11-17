import PropTypes from 'prop-types';

export const LinkIcons = ({icons}) => {
  return (
    <div className="link-icons">
      {icons.map((icon)=>(
        icon.link ? (<a key={icon.icon} href={icon.link} target="_blank" rel="noopener noreferrer" aria-label={icon.aria}><i className={icon.icon}></i></a>):null
      ))}
        
    </div>
  )
}

LinkIcons.propTypes = {
  icons: PropTypes.arrayOf(
    PropTypes.shape({
      link:PropTypes.string,
      icon:PropTypes.string.isRequired,
    }).isRequired,
  )
}
