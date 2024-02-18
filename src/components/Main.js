import React , {useState} from 'react'
import "./main.css"

function Main() {
  const[input , setInput] = useState('');
  const[result , setResult] = useState('');

  const handleOnClick = (event) => {

try {
  if(event.target.value !== '=' && event.target.value !== 'DEL' && event.target.value !== 'CLR'){

    setInput((prevInput) => {
      return prevInput + event.target.value
    })

  }

  else if(event.target.value === '='){
// eslint-disable-next-line
   setResult(eval(input));
   setInput('')

  }

  else if(event.target.value === 'CLR'){

    setResult('');
    setInput('')

  }

  else if (event.target.value === 'DEL'){
    setInput((prevInput) => {
      return prevInput.slice(0,prevInput.length-1)
    })
  }

} catch (error) {

    return alert("unexpected input value");
}
  

     
  

  }

  
return (
    <>
    <div className='container'>
    <div className='box'>
      <div className='display'>
      <div className='result'>{result}</div>
      <div className='input'>{input}</div>
       
      </div>
      <div className='inputs'>
        <button value='CLR'onClick={handleOnClick}>CLR</button>
        <button value='/' onClick={handleOnClick}>/</button>
        <button value='*' onClick={handleOnClick}>X</button>
        <button value='+' onClick={handleOnClick}>+</button>
        <button value='-' onClick={handleOnClick}>-</button>
        <button value='.' onClick={handleOnClick}>.</button>
        <button value='9' onClick={handleOnClick}>9</button>
        <button value='8' onClick={handleOnClick}>8</button>
        <button value='7' onClick={handleOnClick}>7</button>
        <button value='6' onClick={handleOnClick}>6</button>
        <button value='5' onClick={handleOnClick}>5</button>
        <button value='4' onClick={handleOnClick}>4</button>
        <button value='3' onClick={handleOnClick}>3</button>
        <button value='2' onClick={handleOnClick}>2</button>
        <button value='1' onClick={handleOnClick}>1</button>
        <button value='DEL'onClick={handleOnClick}>DEL</button>
        <button value='0' onClick={handleOnClick}>0</button>
        <button value='=' onClick={handleOnClick}>=</button>
        
      </div>
    </div>
    </div>
    
    </>
  )
}

export default Main
