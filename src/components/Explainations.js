import React, { useContext } from 'react'
import { BrowserRouter } from 'react-router-dom'
import UserContext from './UserContext';
import PForm from './PForm'
import { userContext } from './UserContext';
 
export default function Explainations(props)
{
    const userCtx=useContext(userContext);
    
  return(
  <div style={{display:"flex",justifyContent:"center"}}>  
   <h1 >שלום</h1>
      <h3>
        {userCtx.firstName} {userCtx.lastName}
      </h3>
  </div>
  );  
}