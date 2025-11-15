import './Presentation.css'
import Iconm from '../assets/Iconm.webp'
import Iconw from '../assets/Iconw.png'
import Iconb from '../assets/Iconb.png'
import Github from '../assets/github.png'
import Linkedin from '../assets/linkedin.png'
import Instagram from '../assets/Instagram.png'

function Presentation() {

    return (
        <div className='presntion'>

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
                        <img src={Iconb} alt="Iconbased" className='iconbw'/>
                        <p> Based in Mosquera</p>
                    </div>                

                    <div className='bttnbw'> 
                        <img src={Iconw} alt="Iconwork" className='iconbw'/>
                        <p> Avaliable now</p>
                    </div>
                </div>
                
                <div className='bttncv'>
                    <a href="https://www.linkedin.com/in/jeronimo-diaz-rozo-a836b2312/" target="_blank" rel="noopener noreferrer">
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
                                    <img src={Github} alt="githubIC" />
                                </a>
                            </li>

                            <li>
                                <a href="https://www.linkedin.com/in/jeronimo-diaz-rozo-a836b2312/" target="_blank" rel="noopener noreferrer">
                                    <img src={Linkedin} alt="linkeinIC" />
                                </a>
                            </li>
                                
                            <li>
                                <a href="https://www.instagram.com/rdje.roj/" target="_blank" rel="noopener noreferrer">
                                    <img src={Instagram} alt="instaIC" />
                                </a>
                            </li>    

                        </ul>
                    </div>
                </div>
            </div>
            
            <div className='contr'>
                <img src={Iconm} alt="Logo de Jeronimo Diaz" className='imgper'/>
            </div>
            
        </div>
    );
}

export default Presentation;