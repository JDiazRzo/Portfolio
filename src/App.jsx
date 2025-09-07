import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Intro from './components/Intro'
import MenuBottom from "./components/MenuButtom";
import ModeButtom from './components/ModeButtom'
import LaButtom from './components/LaButtom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <MenuBottom />
      <ModeButtom />
      <LaButtom />
      <Intro />
    </div>
  )
}

export default App
