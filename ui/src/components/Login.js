import React,{useState } from 'react'
import { useHistory } from "react-router-dom";
import api from "../api/api"

export function Login(props) {
    function validate(e,h) {
        e.preventDefault()
        console.log(name,pass,history)
        new api().checkValid({uname:name,pass: pass},(res)=>{
          if(res.message === 'Valid user'){
            alert(`Hey ${name} you are a valid user`)
            history.push('/dashboard')
          } else {
            alert('Try again with valid credentials')
          }
        })
      }
    const history = useHistory()
    const [name,setName] = useState('')
    const [pass,setPass] = useState('')
    return(
        <div>
            <input type="text" name='username' value={name} onChange={(e)=>{setName(e.target.value)}}/>
            <input type='password' name='password' value={pass} onChange={(e)=>{setPass(e.target.value)}}/>
            <button onClick={(e)=>{validate(e,history)}}>login</button>
        </div>
    )
}