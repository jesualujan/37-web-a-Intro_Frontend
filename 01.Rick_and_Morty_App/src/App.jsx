import Character from './Components/Character/Character'
import Navbar from './Components/Navbar/Navbar'
import PagButtons from './Components/PagButtons/PagButtons'
import './App.css'

function App() {
 

  return (
    <>
    {/*de esta forma llamo a mis componentes */}
      <Navbar />
      <Character />
      <PagButtons />
    </>
  )
}

export default App
