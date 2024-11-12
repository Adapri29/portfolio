import { AboutMe } from "./component/AboutMe";
import { Contact } from "./component/Contact";
import { Education } from "./component/Education";
import { Experience } from "./component/Experience";
import { Projects } from "./component/Projects";
import { Skills } from "./component/Skills";

function App() {


  return (
    <div className="app"> 
      <div className="background"></div>
      <div className="content">
          <AboutMe/>
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Contact />
      </div>
    </div>
  );
}

export default App
