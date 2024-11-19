import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import { CharactersView } from './Views/CharactersView'
import { SpellsView } from './Views/SpellsView'


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
      <div/>
    )
    }
    
    </div>
  )
}

export default App
