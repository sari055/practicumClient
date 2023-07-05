import React, { useContext } from 'react'
import { BrowserRouter } from 'react-router-dom'
import UserContext from './UserContext';
import PForm from './PForm'
import { userContext } from './UserContext';
 
export default function Explainations(props)
{
    const userCtx=useContext(userContext);
    
  return(
  <div >  
   <h1 style={{display:"flex",justifyContent:"center",textAlign:"center",marginTop:"10%"}}>שלום</h1>
      <h3 style={{display:"flex",justifyContent:"center",textAlign:"center",marginTop:"5%",marginLeft:"10%",marginRight:"10%"}}>
        {userCtx.firstName} {userCtx.lastName}
      </h3>
    <br></br><h4 style={{display:"flex",justifyContent:"center",textAlign:"center",marginTop:"5%",marginLeft:"10%",marginRight:"10%"}}>אנו שמחים שבחרת להצטרף אלינו </h4>
    <br></br><h4 style={{display:"flex",justifyContent:"center",textAlign:"center",marginTop:"1%",marginLeft:"10%",marginRight:"10%"}}>!!ברכות על הצטרפותך</h4>
  </div>
  );  
}