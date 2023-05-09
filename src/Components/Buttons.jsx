import '../app.css'

export function Buttons () {
  function handleButtonClick (value) {

  }

  return (
    <div className='buttons__con'>
      <div className='button__group'>
        <div className='clear dark' onClick={handleButtonClick('C')}>C</div>
        <div className='dark' onClick={handleButtonClick('/')}>/</div>
      </div>
      <div className='button__group'>
        <div onClick={handleButtonClick('7')}>7</div>
        <div onClick={handleButtonClick('8')}>8</div>
        <div onClick={handleButtonClick('9')}>9</div>
        <div className='dark' onClick={handleButtonClick('*')}>*</div>
      </div>
      <div className='button__group'>
        <div onClick={handleButtonClick('4')}>4</div>
        <div onClick={handleButtonClick('5')}>5</div>
        <div onClick={handleButtonClick('6')}>6</div>
        <div className='dark' onClick={handleButtonClick('-')}>-</div>
      </div>
      <div className='button__group'>
        <div onClick={handleButtonClick('1')}>1</div>
        <div onClick={handleButtonClick('2')}>2</div>
        <div onClick={handleButtonClick('3')}>3</div>
        <div className='dark' onClick={handleButtonClick('+')}>+</div>
      </div>
      <div className='button__group'>
        <div>.</div>
        <div className='zero' onClick={handleButtonClick('0')}>0</div>
        <div className='dark' onClick={handleButtonClick('=')}>=</div>
      </div>
    </div>
  )
}
