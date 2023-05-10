import '../app.css'

// eslint-disable-next-line react/prop-types
export function Buttons ({ calc, equals, clearScreen }) {
  function handleClick (buttonValue) {
    calc(prevCalculation => prevCalculation + buttonValue)
  }

  return (
    <div className='buttons__con'>
      <div className='button__group'>
        <div className='clear dark' onClick={clearScreen}>C</div>
        <div className='dark' onClick={() => handleClick('/')}>/</div>
      </div>
      <div className='button__group'>
        <div onClick={() => handleClick('7')}>7</div>
        <div onClick={() => handleClick('8')}>8</div>
        <div onClick={() => handleClick('9')}>9</div>
        <div className='dark' onClick={() => handleClick('*')}>*</div>
      </div>
      <div className='button__group'>
        <div onClick={() => handleClick('4')}>4</div>
        <div onClick={() => handleClick('5')}>5</div>
        <div onClick={() => handleClick('6')}>6</div>
        <div className='dark' onClick={() => handleClick('-')}>-</div>
      </div>
      <div className='button__group'>
        <div onClick={() => handleClick('1')}>1</div>
        <div onClick={() => handleClick('2')}>2</div>
        <div onClick={() => handleClick('3')}>3</div>
        <div className='dark' onClick={() => handleClick('+')}>+</div>
      </div>
      <div className='button__group'>
        <div onClick={() => handleClick('.')}>.</div>
        <div className='zero' onClick={() => handleClick('0')}>0</div>
        <div className='dark' onClick={equals}>=</div>
      </div>
    </div>
  )
}
