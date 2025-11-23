import { FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaDatabase, FaGit, FaPython } from 'react-icons/fa';
import './SliderLa.css';

function SliderLa() {
  const icons = [<FaJs />, <FaReact />, <FaNodeJs />, <FaHtml5 />, <FaCss3Alt />, <FaDatabase />, <FaGit />, <FaPython />];

  return (
    <section className="SliderLaContainer">
      <div className="slider">
        {[...icons, ...icons].map((icon, index) => (
          <span key={index} className="icon">{icon}</span>
        ))}
      </div>
    </section>
  );
}

export default SliderLa;
