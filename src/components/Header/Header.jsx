function Header() {
  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed bottom-5 md:top-5 md:bottom-auto left-1/2 -translate-x-1/2 z-50 flex gap-1 md:gap-2 px-3 md:px-5 py-2 bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl">
      <button onClick={() => handleScroll("presentation")} className="px-2 md:px-3 py-2 text-white text-xs md:text-sm rounded-lg hover:bg-white/10 transition-colors duration-200">HOME</button>
      <button onClick={() => handleScroll("projects")} className="px-2 md:px-3 py-2 text-white text-xs md:text-sm rounded-lg hover:bg-white/10 transition-colors duration-200">PROJECTS</button>
      <button onClick={() => handleScroll("aboutme")} className="px-2 md:px-3 py-2 text-white text-xs md:text-sm rounded-lg hover:bg-white/10 transition-colors duration-200">ABOUT ME</button>
      <button onClick={() => handleScroll("contact")} className="px-2 md:px-3 py-2 text-white text-xs md:text-sm rounded-lg hover:bg-white/10 transition-colors duration-200">CONTACT ME</button>
    </header>
  );
}

export default Header;