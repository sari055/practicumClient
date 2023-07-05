import { useState, useContext, createContext } from "react";
export const userContext = createContext();


export default function UserContext(props) {

     const[name,setName]=useState('')
     const [tz,setTz]=useState('')
   const[chDateOfBirth,setChDateOfBirth]=useState('')
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [identity,setIdentity]=useState('');
  const[dateOfBirth,setDateOfBirth]=useState('');
  const[hMO,setHMO]=useState('');
  const[type,setType]=useState('');
  const [idFromData,setIdFromData]=useState(0)
//   const[chName,setChName]=useState('');
//   const[chIdentity,setChIdentity]=useState('');
//   const[chDateOfBirth,setChDateOfBirth]=useState('');
  const [hasChildren,setHasChildrean]=useState();
  const [childrenArr,setChildrenArr]=useState([]);
    return (
        <userContext.Provider value={{ firstName,setFirstName, lastName, setLastName,identity,setIdentity,dateOfBirth,setDateOfBirth,hMO,setHMO,type,setType,hasChildren,setHasChildrean,childrenArr,setChildrenArr,name,setName,tz,setTz,chDateOfBirth,setChDateOfBirth,idFromData,setIdFromData}}>
            {props.children}
        </userContext.Provider>
    );
}