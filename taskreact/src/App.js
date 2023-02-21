import './App.css'

import FirstComponent from './components/FirstComponent'
import AnotherComponent from './components/anotherComponent'
import Images from './components/Images'
import Hooks from './components/Hooks'
import List from './components/List'
import RenderCond from './components/RenderCond'

function App() {
  return (
    <div className="App">
      <h2>Olá, mundo</h2>
      <FirstComponent />
      <AnotherComponent />
      <Images />
      <Hooks />
      <List />
      <RenderCond x={8} y={10} />
    </div>
  )
}

export default App
