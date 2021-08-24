import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let prompt = "Enter a puppy's name:";
  let normalInput = "";
  let [ stateInput, setStateInput] = useState('');

  return (
    <div className="App">
      {/* normal variable below */}
      <input placeholder={prompt + '1'} id="firstInput" onChange={(e) => {console.log(e.target.value)}} />
      {/* state variable below */}
      <input placeholder={prompt + '2'} id="secondInput" onChange={(e) => {console.log(e.target.value)}} />
    </div>
  );
}

export default App;
