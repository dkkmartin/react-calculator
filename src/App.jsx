import { useState } from 'react'
import { Buttons } from './Components/Buttons'
import { Screen } from './Components/Screen'
import './app.css'

function App () {
  const [calculation, setCalculation] = useState('')

  function handleChangeOnScreen (value) {
    setCalculation((prevCalc) => prevCalc + value)
  }

  return (
    <div className='calculator__con'>
      <Screen calculation={calculation} onChange={setCalculation}></Screen>
      <Buttons onClick={() => handleChangeOnScreen(value)}></Buttons>
    </div>
  )
}

export default App
