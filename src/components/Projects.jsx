import Project1 from '../assets/Project1.webp';
import Project2 from '../assets/Project2.webp';
import './Projects.css';

function Projects() {
    
    return (

        <section id="proyectos" className='projects'>

            <div className='prjtxt'>
                <p>PROJECTS</p>
                <h2>Featured Work</h2>
                <hr />
                <p>
                    A little showcase of my recent projects using modern frameworks and creative problem-solving.
                </p>
            </div>
            
            <div className='projgrid'>

                <div className='proj'>
                    <img src={Project1} alt="Imagen de portada de la bitacora" className='projectimg'/>
                    
                    <div className='prjinfo'>
                        <h2>Life Log</h2>
                        <p> Academic activity related to a life log, made with HTML, CSS and JS </p>

                        <a href="https://github.com/JDiazRzo/my-bitacora" target="_blank" rel="noopener noreferrer">
                            <button>Code</button>
                        </a>
                        
                        <a href="https://jdiazrzo.github.io/my-bitacora/" target="_blank" rel="noopener noreferrer">
                            <button>Preview</button>
                        </a>
                    </div>
                </div>

                <div className='proj'>
                    <img src={Project2} alt="Imagen de portada del proyecto Music Store" className='projectimg'/>

                    <div className='prjinfo'>
                        <h2>Music Store</h2>
                        <p> Online guitar store using React, HTML and Tailwind CSS, with API integration. </p>

                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <button>Code</button>
                        </a>

                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <button>Preview</button>
                        </a>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Projects;
