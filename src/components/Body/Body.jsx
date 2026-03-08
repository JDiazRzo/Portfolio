import Projects from '../ProjectsSection/Projects';
import Aboutme from '../Aboutme/Aboutme';
import Presentation from '../Presentation/Presentation';
import Getcontact from '../Getcontact/Getcontact';


function Body() {
  return (
    <div className="min-h-screen flex flex-col items-center text-[#ECECEC]">
      <section id="presentation" className="w-full">
        <Presentation />
      </section>
      <section className="w-full py-16">
        <Projects />
      </section>
      <section className="w-full py-16">
        <Aboutme />
      </section>
      <section className="w-full py-16">
        <Getcontact />
      </section>
    </div>
  );
}

export default Body;