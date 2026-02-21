import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [count, setCount]=useState(0);

  const incrementFunction=()=>{
    setCount(count+1);
  };
  const decrementFunction=()=>{
    setCount(count-1);
  };
  const resetFunction=()=>{
    setCount(0);
  };
  
 

  return (
    <>
    <h2>{count}</h2>
    <button onClick={incrementFunction}>increment button</button>
    <button onClick={decrementFunction}>decrement button</button>
    <button onClick={resetFunction}>reset button</button>
    
    </>
  )

};

export default App
