import React , { useState,useContext ,ReactDOM} from "react";
import { BrowserRouter,Link,Route,Routes, useNavigate } from "react-router-dom";
import ChildForm from './ChildForm'
import App from "../App";
import { userContext } from "./UserContext";
import { useForm} from "react-hook-form";
import axios, { formToJSON } from "axios";
import { render } from "react-dom";
import changeChild from './ChildForm'
import AddChild from './ChildForm'
import XLSX from 'xlsx';
import ChildrenExcelDownload from "./ChildrenExcelDownload ";

export default function PForm(props) { 
  const userCtx = useContext(userContext);
  const {register,handleSubmit,formState: { errors },} = useForm({ mode: "onBlur",mode:"onChange"});
  const navigate=useNavigate();
  const [nextChild,setNextChild]=useState([])
  



  const child=(numOfChildren)=>
  { 
      userCtx.setHasChildrean(numOfChildren.target.value) ;   
      let children=[];
      for (let i = 0; i < numOfChildren.target.value; i++) 
       {
        children.push(<childForm index={i} userCtx={userCtx}></childForm>)
       }
        console.log(children)
        setNextChild(children); 
  } 
const onSubmit=(data)=>
  {

     let parent={
     firstName : userCtx.firstName,
     lastName: userCtx.lastName,    
     dateOfBirth: userCtx.dateOfBirth,
     tz: userCtx.identity,
      type:userCtx.type,
      hMO:userCtx.hMO}
      let children=[]
   
      axios.post(`https://localhost:44391/api/Parent`, parent)
      .then(r => {
        console.log(r);
        axios.get(`https://localhost:44391/api/Parent/tz/${parent.tz}`)
          .then((res) => {
            console.log(res.data);
            userCtx.setIdFromData(res.data);
            for (let index = 0; index < userCtx.childrenArr.length; index++) 
            {
              userCtx.childrenArr[index].IdParent=res.data;
            }; 
            for (let index = 0; index < userCtx.childrenArr.length; index++) 
            {
              console.log(userCtx.childrenArr[index])
            }; 
            for (let index = 0; index < userCtx.childrenArr.length; index++) {
              axios.post(`https://localhost:44391/api/Child`, {
                name: userCtx.childrenArr[index].Name,
                tz: userCtx.childrenArr[index].Tz,
                dateOfBirth: userCtx.childrenArr[index].ChDateOfBirth,
               idParent: userCtx.childrenArr[index].IdParent // Use the correct parent ID here
              }).then((suc) => {console.log(suc);navigate(`/Exel`)}).catch(error => console.log(error))
            }
          })
      });            
       }
 
    return (
    
      <div onSubmit={handleSubmit(onSubmit)} style={{ textAlign:"center",display:"flex",justifyContent:"center"}}>
   <form style={{width:"20%",height:"5%"}} >
  <div className="form-group">
    <label >שם פרטי</label>
    <input type="text" className="form-control"  placeholder="שם פרטי" required="required" defaultValue={userCtx.firstName} {...register("test1", {pattern: /[A-Za-z-א-ת]/})} onChange={(e)=>{userCtx.setFirstName(e.target.value) ;}} /> 
    {errors.test1 && <p style={{color:'red'}}>נא לכניס אותיות בלבד</p>}
  </div>
  <div className="form-group">
    <label >שם משפחה</label>
    <input type="text" className="form-control"  placeholder="שם משפחה" required="required" defaultValue={userCtx.lastName} {...register("test2", {pattern: /[A-Za-z-א-ת]/})} onChange={(e)=>{userCtx.setLastName(e.target.value);}}/>
     {errors.test2 && <p style={{color:'red'}}>נא להכניס אותיות בלבד</p>}
  </div>
  <div className="form-group">
    <label 
    >תעודת זהות</label>
    <input type="text "className="form-control"  placeholder="תעודת זהות" required="required" {...register("id", {maxLength: 9,minLength:9,pattern:/[0-9]/})} onChange={(e)=>{userCtx.setIdentity(e.target.value)}} defaultValue={userCtx.identity}/>
 {errors.id &&<p style={{color:'red'}}>נא להכניס 9 מספרים בלבד</p>}

  </div>
  <div className="form-group">
    <label >תאריך לידה</label>
    <input type="date" className="form-control" id="exampleInputFile" placeholder="תאריך לידה" required="required" {...register("date", { required: true })} onChange={(e)=>{userCtx.setDateOfBirth(e.target.value)}} defaultValue={userCtx.dateOfBirth}/>
    {errors.date &&<p style={{color:'red'}}>נא להכניס תאריך תקין </p>}

  </div>

  <label>מין</label>
   <select className="form-control"  required="required" onChange={(e)=>{userCtx.setType(e.target.value)}} defaultValue={userCtx.type}>מין
           <option value={"זכר"}> זכר</option>
           <option value={"נקבה"}> נקבה</option>
           </select>  
           <label>קופת חולים</label>            
           <select className="form-control" placeholder="קופת חולים " required="required" onChange={(e)=>{userCtx.setHMO(e.target.value)}} defaultValue={userCtx.hMO}>קופת חולים
          <option value={"מאוחדת"}> מאוחדת</option>
          <option value={"כללית"}> כללית</option>
          <option value={"מכבי"}> מכבי</option>
          <option value={"לאומית"}> לאומית</option>
          </select>  
     
          <div className="form-group">
    <label >מספר ילדים</label>
    <input type="number"  className="form-control" id="exampleInputFile" placeholder="מספר ילדים"{...register("chNumber", { maxLength:20})}  onInput={child}  defaultValue={userCtx.hasChildren}/>
    {errors.chNumber &&<p style={{color:'red'}}>מספר ילדיפ גדול מ-20 </p>}
   {nextChild.map((c,index)=><ChildForm key={index} userCtx={userCtx}> {nextChild[index]} </ChildForm> )}

  </div>
  
          <input type="submit" className="btn btn-primary btn-lg btn-block" value="שמירה"></input>
</form>
      </div>
   //תיכף הסוללה שלי תסכים להידלק
   //איפה שלחת את קוד האבא ?
   // בשורה 109 ?
   //כן

    );
}
