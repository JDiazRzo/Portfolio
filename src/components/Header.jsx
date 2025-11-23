import "./Header.css";

function Header({ theme, setTheme }) {

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="header">
      <button onClick={() => handleScroll("presentation")}>HOME</button>
      <button onClick={() => handleScroll("projects")}>PROJECTS</button>
      <button onClick={() => handleScroll("aboutme")}>ABOUT ME</button>
      <button onClick={() => handleScroll("contact")}>CONTACT ME</button>
    </header>
  );
}

export default Header;
