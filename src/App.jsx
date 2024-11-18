import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import { CharactersView } from './Views/CharactersView'
import { SpellsView } from './Views/SpellsView'

function App() {

  const [showView, setShowView] = useState(0)

  return (
    <>
    <NavBar onViewChange={setShowView}/>
    
    {
    showView == 1? (<CharactersView/>) :
    showView == 2? (<SpellsView/>) :
    (<div>Empty</div>)
    }
    
    </>
  )
}

export default App
