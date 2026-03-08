import { FaFolder } from "react-icons/fa";
import abt from '/img/abt.jpg';
import LogoLoop from "../LogoLoop/LogoLoop";
import SpotlightCard from "../SpotlightCard/SpotLightCard";

const icons = [
  {src: "/Portfolio/Icons/css.svg", alt: "css"},
  {src: "/Portfolio/Icons/git.svg", alt: "git"},
  {src: "/Portfolio/Icons/github.svg", alt: "github"},
  {src: "/Portfolio/Icons/html.svg", alt: "html"},
  {src: "/Portfolio/Icons/js.svg", alt: "javascript"},
  {src: "/Portfolio/Icons/mongo.svg", alt: "mongodb"},
  {src: "/Portfolio/Icons/node.svg", alt: "nodejs"},
  {src: "/Portfolio/Icons/postgre.svg", alt: "postgreSQL"},
  {src: "/Portfolio/Icons/python.svg", alt: "python"},
  {src: "/Portfolio/Icons/react.svg", alt: "react"},
  {src: "/Portfolio/Icons/tailwind.svg", alt: "tailwind"},
  {src: "/Portfolio/Icons/tensorfl.svg", alt: "tensorflow"},
];

function Aboutme() {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-center mt-28 px-6 md:px-10 gap-10 md:gap-16">

        <div className="flex flex-col text-center md:text-left">
          <div>
            <p id="aboutme" className="text-sm tracking-widest uppercase text-white/50 mb-2">ABOUT ME</p>
            <h2 className="text-2xl text-white mb-5 max-w-[500px]">
              Junior Developer | Exploring new technologies and challenges
            </h2>
            <hr className="border-2 border-[#3A3C41] w-3/4 mb-5 mx-auto md:mx-0" />
            <p className="text-base md:text-lg leading-relaxed max-w-[500px] text-[#C7C7C7] mb-5">
              I'm a junior full stack developer with a growing interest in machine learning. 
              I build modern web applications using React, Node.js and Supabase, 
              and I'm currently expanding into AI and data-driven solutions. Always learning, always building.
            </p>
            <h3 className="text-2xl text-white">Code. Design. Learn. Repeat.</h3>
          </div>

          <div className="flex gap-4 mt-8 flex-wrap justify-center md:justify-start">
            <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)" className="w-[200px] h-[150px] rounded-2xl">
              <div className="flex flex-col items-center justify-center gap-1 p-2 h-full text-center">
                <h2 className="text-sm uppercase text-white">Education</h2>
                <p className="text-xs text-white">Universidad EAN - Systems Engineer</p>
                <p className="text-xs text-white">2023 - 2027</p>
              </div>
            </SpotlightCard>

            <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)" className="w-[200px] h-[150px] rounded-2xl">
              <div className="flex flex-col items-center justify-center gap-1 p-2 h-full text-center">
                <FaFolder className="w-6 h-6" />
                <h2 className="text-sm uppercase text-white">Projects</h2>
                <p className="text-xs text-white">1</p>
              </div>
            </SpotlightCard>
          </div>
        </div>

        <div className="flex-shrink-0">
          <img src={abt} alt="Foto personal" className="w-[250px] md:w-[350px] h-auto object-cover rounded-3xl" />
        </div>

      </section>

      <div className="logo-white w-full mt-16 relative overflow-hidden py-9">
        <LogoLoop
          logos={icons}
          speed={90}
          direction="left"
          logoHeight={70}
          gap={80}
          pauseOnHover
          fadeOut
          fadeOutColor="transparent"
        />
      </div>
    </>
  );
}

export default Aboutme;