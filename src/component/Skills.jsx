import '../styles/Skills.css'
import { PolygonDiv } from './PolygonDiv'


export const Skills = () => {

    const polygonPanelContainer = 'polygon(0% 10%, 100% 0%, 90% 90%, 10% 98%)';
    const polygonPanel = 'polygon(0% 13%, 99% 2%, 89% 88%, 0% 97%)';

    return (      
            <div className='skills'> 
                <PolygonDiv polygonPanel={polygonPanel} polygonPanelContainer={polygonPanelContainer}>
                    <div className="skills-container">
                        <h1>Habilidades</h1>
                        <ul>
                            <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png" /></li>
                            <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" /></li>
                            <li><img src="https://static-00.iconduck.com/assets.00/unity-icon-999x1024-kgzo1ar1.png" /></li>
                            <li><img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" /></li>
                            <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Keras_logo.svg/768px-Keras_logo.svg.png" /></li>
                            <li><img src="https://seeklogo.com/images/P/pandas-logo-56829C6445-seeklogo.com.png" /></li>
                            <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/OpenCV_Logo_with_text_svg_version.svg/1200px-OpenCV_Logo_with_text_svg_version.svg.png" /></li>
                            <li><img src="https://res.cloudinary.com/dtbpucouh/image/upload/v1676917917/MySQL-Logo_slj0o5.png" /></li>

                        </ul>
                    </div>    
                </PolygonDiv>
            </div>
    )
}
