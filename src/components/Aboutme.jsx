import './Aboutme.css';
import Photo1 from '../assets/Photo1.webp'
import Iconc from '../assets/Iconc.png'
import Icons from '../assets/Icons.png'
import Iconp from '../assets/Iconp.png'
import SliderLa from './SliderLa'

function Aboutme () {
    return (
        
        <div className='abtme'>

            <div className='contl'>

                <div className='inf'>
                    <p>ABOUT ME</p>

                    <h2>Junior Developer | Exploring new technologies and challenges</h2>

                    <hr />

                    <p>
                        Hi, I'm Jeronimo Diaz, a systems engineer and junior front-end developer passionate about transforming ideas into engaging and functional interfaces.
                        I specialize in React and CSS, building clear and efficient projects that enhance the user experience.
                        I enjoy solving problems in an organized way and finding solutions, while continuing to expand my knowledge of backend and APIs.
                    </p>

                    <h3>Code. Design. Learn. Repeat.</h3>
                </div>
                
                <div className='abtcomp'>
                    <div className='lang'>
                        <div className='langtxt'>
                            <img src={Iconc} alt="Iconcode" className='icl'/>
                            <h2>Languages</h2>
                        </div>
                        <SliderLa />
                    </div>

                    <div className='stdy'>
                        <img src={Icons} alt="Iconstudy" className='icc'/>
                        <h2>Education</h2>
                        <p>Universidad EAN - Systems Engineer</p>
                    </div>

                    <div className='contproj'>
                        <img src={Iconp} alt="Iconcarpet" className='icp'/>
                        <h2>Projects</h2>
                        <p>3</p>
                    </div>
                </div>
                
                
            </div>

            <div className='contr'>
                <img src={Photo1} alt="Foto personal" className='pimg'/>
            </div>

        </div>
    );
}



export default Aboutme;