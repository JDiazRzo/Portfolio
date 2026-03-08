import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { MdOutlineWork } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import CV from '/docs/CV.pdf';
import Pfp from '/img/Pfp.jpg'

function Presentation() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-16 mt-20 md:mt-28 px-6 md:px-16 max-w-5xl mx-auto">
      
      <div className="flex flex-col text-center md:text-left">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold mb-3">Hi, I'm Jeronimo Diaz</h1>
          <h2 className="text-xl md:text-3xl text-[#b5b5b5] mb-5">Systems Engineer / React developer</h2>
          <p className="text-base md:text-lg leading-relaxed max-w-[500px] text-[#C7C7C7]">
            Passionate about learning new technologies and building innovative solutions that improve user experience.
          </p>
        </div>

        <div className="flex items-center justify-center md:justify-start gap-5 mt-5">
          <div className="flex items-center gap-2">
            <FaLocationDot className="w-5 h-5 text-white" />
            <p className="text-sm text-[#C7C7C7]">Based in Mosquera</p>
          </div>
          <div className="flex items-center gap-2">
            <MdOutlineWork className="w-5 h-5 text-white" />
            <p className="text-sm text-[#C7C7C7]">Available now</p>
          </div>
        </div>

        <div className="mt-5 flex justify-center md:justify-start">
          <a href={CV} download="Jeronimo-Diaz-CV.pdf">
            <button className="bg-white/10 backdrop-blur-md text-white px-5 py-3 rounded-xl text-sm font-medium border border-white/20 hover:bg-white/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 shadow-lg">
              Download CV
            </button>
          </a>
        </div>

        <hr className="w-3/4 border-2 border-[#3A3C41] rounded my-6 mx-auto md:mx-0" />

        <div className="flex items-center justify-center md:justify-start gap-5">
          <p className="font-medium text-white">Follow me on:</p>
          <ul className="flex gap-5 list-none">
            <li>
              <a href="https://github.com/JDiazRzo" target="_blank" rel="noopener noreferrer">
                <FaGithub className="w-6 h-6 text-white hover:text-[#3A76D9] hover:-translate-y-0.5 transition-all duration-200" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/jeronimo-diaz-rozo-a836b2312/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="w-6 h-6 text-white hover:text-[#3A76D9] hover:-translate-y-0.5 transition-all duration-200" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/jdr.ro07/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="w-6 h-6 text-white hover:text-[#3A76D9] hover:-translate-y-0.5 transition-all duration-200" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] mx-2 flex-shrink-0">
        <img src={Pfp} className="w-full h-full object-cover rounded-2xl" />
      </div>

    </section>
  );
}

export default Presentation;