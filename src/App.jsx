import photo from "./assets/photo.jpeg"
import { AboutMe } from "./component/AboutMe";
import { Education } from "./component/Education";
import { Experience } from "./component/Experience";
import { Projects } from "./component/Projects";
import { Skills } from "./component/Skills";

function App() {


  return (
    <div className="app"> 
        <AboutMe />
        <div className="container"> 
          <div className="container-left">
            <Skills />
            <Projects />
          </div>
          <div className="container-right">
            <Experience />
            <Education />
          </div>
          
          
        </div>

        

    </div>
  );
}

export default App
