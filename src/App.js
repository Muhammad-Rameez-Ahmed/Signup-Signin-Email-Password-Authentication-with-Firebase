import logo from './logo.svg';
import './App.css';

import { Route,Routes } from 'react-router-dom' 
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import Navbar from './Components/Navbar';
import Todo from './Components/Todo'



function App() {
  return (
    <>
      <Navbar/>
      <div className='App'>
      <Routes>
      <Route path="/" element={<Todo/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
      
      </Routes>
      </div>
    </>

  );
}

export default App;
