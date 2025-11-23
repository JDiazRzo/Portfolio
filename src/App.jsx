import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Body from "./components/Body";
import './App.css';
import Header from "./components/Header";


function App() {

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);


  return (
    <div className="App">
      
      <Header theme={theme} setTheme={setTheme} />

      <Body />
      
    </div>
  );
}

export default App;
