import React from 'react'
import { Link, useMatch, useResolvedPath } from "react-router-dom"

import {auth} from '../firebase';
import {useNavigate} from 'react-router-dom'
 
const Navbar = ({user}) => {
  const navigate=useNavigate();
  return (
    <>

      <nav className="nav">
        <Link to="/" className="site-title">
          Todo
        </Link>
        <ul>

          {
            user?
            
            <button onClick={()=>{
            auth.signOut()
            navigate('/signin')}} style={{ cursor: 'pointer'}}>LOGOUT</button>
             
            
            :
            <>
            <CustomLink to="/signin">Signin</CustomLink>
            <CustomLink to="/signup">Signup</CustomLink>
            
            
         
          </>
          }

        
        </ul>
      </nav>

    </>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}


export default Navbar