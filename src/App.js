import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import stringSimilarity from 'string-similarity';

function App() {

  const [result, setResult] = useState();
  const [str1, setStr1] = useState();
  const [str2, setStr2] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    const result = stringSimilarity.compareTwoStrings(e.target.str1.value, e.target.str2.value)
    
    setResult(result);
    setStr1(e.target.str1.value);
    setStr2(e.target.str2.value);

    e.target.str1.value = null;
    e.target.str2.value = null;
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor='str1'>String 1</label>
        <input id='str1' type='text' name='str1'/>
        <label htmlFor='str2'>String 2</label>
        <input id='str2' type='text' name='str2'/>
        <button type='submit'>SUBMIT</button>
      </form>
      <div>String1: {str1}</div>
      <div>String1: {str2}</div>
      <div>Result: {result}</div>
    </div>
  );
}

export default App;

