import Project1 from '/img/Project1.png';
import SpotlightCard from '../SpotlightCard/SpotLightCard';

function Projects() {
  return (
    <section className="flex flex-col items-center mt-28 px-16 text-[#ECECEC]">

     
      <div className="flex flex-col items-center text-center mb-8">
        <p className="text-sm tracking-widest uppercase text-white/50 mb-2">PROJECTS</p>
        <h2 className="text-3xl font-bold text-white mb-4">Featured Work</h2>
        <hr className="w-1/4 border-2 border-[#3A3C41] rounded mb-4" />
        <p id="projects" className="text-[#C7C7C7] max-w-lg">
          A little showcase of my recent projects using modern frameworks and creative problem-solving.
        </p>
      </div>

     
      <div className="flex justify-center p-8 w-full">
        <SpotlightCard className="w-[320px]" spotlightColor="rgba(0, 229, 255, 0.2)">
          <div className="flex flex-col items-center gap-4 rounded-2xl p-6">
            <img src={Project1} alt="Music Store" className="w-full rounded-xl object-cover" />
            <div className="flex flex-col items-center gap-3 text-center">
              <h2 className="text-xl font-semibold text-white">Music Store</h2>
              <p className="text-[#C7C7C7] text-sm">
                Full stack music instrument store built with React, Tailwind and Supabase. Features product catalog, brand filters, shopping cart and GSAP animations.
              </p>
              <div className="flex gap-3 py-7">
                <a href="https://github.com/JDiazRzo/MusicStore" target="_blank" rel="noopener noreferrer">
                  <button className="bg-white/10 backdrop-blur-md text-white px-5 py-3 rounded-xl text-sm font-medium border border-white/20 hover:bg-white/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 shadow-lg">
                    Code
                  </button>
                </a>
                <a href="https://music-store-xi-opal.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <button className="bg-white/10 backdrop-blur-md text-white px-5 py-3 rounded-xl text-sm font-medium border border-white/20 hover:bg-white/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 shadow-lg">
                    Preview
                  </button>
                </a>
              </div>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}

export default Projects;