import './Presentation.css'
import { FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa';
import { MdOutlineWork } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Iconm from '../assets/Iconm.webp'
import CV from '../assets/CV.pdf';


function Presentation() {

    return (
        <section className='presntion'>
            <div className='contl'>
                <div className='iphp'>
                    <div className='inf'>
                        <h1>Hi, I'm Jeronimo Diaz</h1>

                        <h2>
                            Systems Engineer / React developer
                        </h2>

                        <p>
                            Passionate about learning new technologies and building innovative solutions that improve user experience.
                        </p>
                    </div>
                </div>
                
                <div className='bttnsbw'>
                    <div className='bttnbw'>
                        <FaLocationDot />
                        <p> Based in Mosquera</p>
                    </div>                

                    <div className='bttnbw'> 
                        <MdOutlineWork />
                        <p> Avaliable now</p>
                    </div>
                </div>
                
                <div className='bttncv'>
                    <a href={CV} download="Jeronimo-Diaz-CV.pdf">
                        <button>Download CV</button>
                    </a>
                </div>

                <hr />

                <div className='fmosm'>
                    <p>
                        Follow me on:
                    </p>

                    <div className='sml'>
                        <ul>
                            <li>
                                <a href="https://github.com/JDiazRzo" target="_blank" rel="noopener noreferrer">
                                    <FaGithub />
                                </a>
                            </li>

                            <li>
                                <a href="https://www.linkedin.com/in/jeronimo-diaz-rozo-a836b2312/" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin />
                                </a>
                            </li>
                                
                            <li>
                                <a href="https://www.instagram.com/rdje.roj/" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram />
                                </a>
                            </li>    

                        </ul>
                    </div>
                </div>
            </div>
            
            <div className='contr'>
                <img src={Iconm} alt="Logo de Jeronimo Diaz" className='imgper'/>
            </div>
            
        </section>
    );
}

export default Presentation;
