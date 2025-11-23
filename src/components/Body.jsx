import { Link } from 'react-router-dom'
import './Body.css';
import Projects from './Projects';
import Aboutme from './Aboutme';
import Presentation from './Presention';
import Getcontact from './getcontact';


function Body() {
  return (
    <div className="body">

      <section id="presentation">
        <Presentation />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="aboutme">
        <Aboutme />
      </section>

      <section id="contact">
        <Getcontact />
      </section>

    </div>
  );
}

export default Body;

