// import React //not required now as it is already fulfilled by Babble control
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15);

  // let counter = 15;

  const addValue = ()=>{
    console.log("clicked Add value", Math.random());
    // counter += 1;
    setCounter(counter + 1);  
    // //multiple setCounters will not work
    // setCounter(counter + 1);  
    // setCounter(counter + 1);  
    //next part is similar to Promise await-> it waits for a callback from the last state and then updates the value
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
  }
  const removeValue = ()=>{
    console.log("clicked Remove value", Math.random());
    // counter += 1;
    if (counter == 0)
      console.log("cannot go lesser than 0");
    else
      setCounter(counter - 1);
  }
  
  return (
    <>
      <h2>Chai aur React</h2>
      <h3>Counter value: {counter}</h3>

      <button onClick={addValue} > Add value {counter}</button>
      <button onClick={removeValue}>Remove value {counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App;
