import { useState } from 'react';
import './App.css';
import Buttons from './Buttons';

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const addToText = (value) => {
    setText((text) => [...text, value + " "])
  }
  return (
    <>
      <main className='calculator-app'>
        <div className='output'>
          <div className='preveous-operand'>({result})</div>
          <div className='current-operand'>{text}</div>
        </div>
          <Buttons handleClick={addToText}/>
      </main>
    </>
  );
}

export default App;
