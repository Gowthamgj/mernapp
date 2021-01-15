import './App.css';
import React,{useState } from 'react'
import api from "./api/api"
function App() {
  function login(e) {
    e.preventDefault()
    console.log(name,pass)
    new api().checkValid({uname:name,pass: pass},(res)=>{
      if(res.message === 'Valid user'){
        alert(`Hey ${name} you are a valid user`)
      } else {
        alert('Try again with valid credentials')
      }
    })
  }
  const [name,setName] = useState('')
  const [pass,setPass] = useState('')
  return (
    <div className="App">
      <input type="text" name='username' value={name} onChange={(e)=>{setName(e.target.value)}}/>
      <input type='password' name='password' value={pass} onChange={(e)=>{setPass(e.target.value)}}/>
      <button onClick={(e)=>{login(e)}}>login</button>
    </div>
  );
}

export default App;
