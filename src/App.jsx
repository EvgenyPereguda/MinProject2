import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import { CharactersView } from './Views/CharactersView'
import { SpellsView } from './Views/SpellsView'

import HPLogo from "./assets/HP.png";

function App() {

  const [showView, setShowView] = useState(0);
  const [inputText, setInputText] = useState("");
  

  return (
    <div >
    <NavBar onViewChange={setShowView} onInputText={setInputText}/>
    
    {
    showView == 1? (<CharactersView input={inputText}/>) :
    showView == 2? (<SpellsView input={inputText}/>) :
    (
      <div>
        <div className='center'>
              <img className="image-scale" src={HPLogo} alt="Harry Potter logo" />
        </div>
      </div>
    )
    }
    
    </div>
  )
}

export default App
