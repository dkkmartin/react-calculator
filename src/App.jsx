import { useState } from 'react'
import { Buttons } from './Components/Buttons'
import { Screen } from './Components/Screen'
import './app.css'

export default function App () {
  const [calculation, setCalculation] = useState('')

  function evalCalculation () {
    // eslint-disable-next-line no-eval
    const result = eval(calculation)
    setCalculation(result)
  }

  function clearSreen () {
    setCalculation('')
  }

  return (
    <div className='calculator__con'>
      <Screen calcForScreen={calculation}></Screen>
      <Buttons clearScreen={clearSreen} equals={evalCalculation} calc={setCalculation}></Buttons>
    </div>
  )
}
