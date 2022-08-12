import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import {auth} from '../firebase'

const Signin = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  
  const navigate =useNavigate();

  const handleSubmit = async(event) => {
    event.preventDefault();
    console.log(`${email} `)
    console.log(`${password}`)
    
    try{
      const  result=await auth.createUserWithEmailAndPassword(email,password)
    window.M.toast({html: `welcome ${result.user.email}`})
    navigate('/')
  }catch(error){
      window.M.toast({html: error.message})
  }


  }
  return (
    <>
      <h1>Signin</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label><br></br>
          <input placeholder='Enter Email' value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" />
        </div>
        <div><br></br>
          <label>Password</label><br></br>
          <input placeholder='Enter Password' value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" />
        </div>
        <br></br>
        <button type='submit'> submit</button>
      </form>
    </>
  )
}

export default Signin;