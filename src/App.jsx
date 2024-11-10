import photo from "./assets/photo.jpeg"
import { AboutMe } from "./component/AboutMe";
import { Experience } from "./component/Experience";
import { Skills } from "./component/Skills";

function App() {


  return (
    <div className="app"> 
        <AboutMe />
        <div className="container"> 
          <Skills />
          <Experience />
        </div>

    </div>
  );
}

export default App
