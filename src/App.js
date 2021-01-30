//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import React from 'react';
import UserForm from './components/Form.js';
import Result from './components/Result.js';
function App() {
  const [state, setState]=useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:""
  });
  return (
    <div className="App">
      <UserForm inputs={state} setInputs={setState} />
      <Result data={state}/>
    </div>
  );
}

export default App;
