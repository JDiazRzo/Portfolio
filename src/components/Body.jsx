import { Link } from 'react-router-dom'
import './Body.css';
import Projects from './Projects';
import Aboutme from './Aboutme';
import Presentation from './Presention';
import Getcontact from './getcontact';


function Body() {
  return (
    <div className="body">

        <Presentation />

        <Projects />

        <Aboutme />

        <Getcontact />
      
    </div>
  );
}

export default Body;

