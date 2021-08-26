import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let prompt = "Enter a value:";
  let normalInput = "";
  // [variable, function]
  // [let stateInput, function setStateInput(newValue) { stateInput = newValue }]
  let [ stateInput, setStateInput] = useState('');

  let [ buttonValue, setButtonValue ] = useState(false);

  return (
    <div className="App">
      {/* normal variable below (correlates to normalInput variable) */}
      <input placeholder={prompt + '1'} id="firstInput" value={normalInput} onChange={(e) => {console.log(e.target.value); normalInput = e.target.value}} />
      {/* state variable below (correlates to stateInput variable) */}
      <input placeholder={prompt + '2'} id="secondInput" value={stateInput} onChange={(e) => {console.log(e.target.value); setStateInput(e.target.value)}} />
      
      <h1>Normal: {normalInput}</h1>
      <h1>State: {stateInput}</h1>


      <button onClick={(e) => {setButtonValue(!buttonValue)}} 
        style={{backgroundColor: buttonValue ? 'blue' : 'red'}}>{buttonValue ? "Login" : "Signup"}</button>
        {console.log(buttonValue)}
    </div>
  );
}

export default App;
