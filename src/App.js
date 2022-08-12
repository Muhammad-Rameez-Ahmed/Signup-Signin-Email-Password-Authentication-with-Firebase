import logo from './logo.svg';
import './App.css';

import { Route,Routes } from 'react-router-dom' 
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import Navbar from './Components/Navbar';
import Todo from './Components/Todo'
import React,{useState,useEffect} from 'react';
import {auth} from './firebase'


function App() {
  const [user ,setUser] =useState(null);
  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      if (user) setUser(user)
      else setUser(null)
    })

  },[])


  return (
    <>
      <Navbar user={user}/>
      <div className='App'>
      <Routes>
      <Route path="" element={<Todo user={user}/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
      
      </Routes>
      </div>
    </>

  );
}

export default App;
