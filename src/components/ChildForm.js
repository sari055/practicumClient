  import axios from 'axios';
import React, { useState,useContext } from 'react';
 import { useForm } from 'react-hook-form';
import { userContext } from './UserContext';
//  import { useNavigate } from 'react-router-dom';
//  import {childContext} from './ChildContext';
 export default function ChildForm({userCtx})
 {
    const {register,formState: { errors },} = useForm({ mode: "onBlur"});
     let newChild;
     const addchild=()=>
     { console.log("addchild")
     newChild={ Name: userCtx.name, 
                Tz: userCtx.tz,
                ChDateOfBirth:userCtx.chDateOfBirth,
                IdParent:0
              }
      userCtx.childrenArr.push(newChild)
      userCtx.setChildrenArr(userCtx.childrenArr)
      console.log(userCtx.childrenArr)
     }
    return(
  
    <div  >
  <form>
          <div className="form-group">
  <label >שם</label>
  <input type="text" className="form-control"  placeholder="שם"  {...register("test", {pattern: /[A-Za-z-א-ת]/})}  onInput={(e)=>{userCtx.setName(e.target.value);}} /> 
  {errors.test && <p style={{color:'red'}}>נא להכניס אותיות בלבד</p>}
  </div>
  <div className="form-group">
  <label >תעודת זהות</label>
  <input type="text "className="form-control" id="exampleInputFile" placeholder="תעודת זהות"{...register("id1", { maxLength: 9,minLength:9})} onInput={(e)=>{userCtx.setTz(e.target.value); }}/>
  {errors.id1 &&<p style={{color:'red'}}>נא להכניס 9 מספרים בלבד</p>}
  </div>
  <div className="form-group">
  <label >תאריך לידה</label>
  <input type="date" className="form-control" id="exampleInputFile" placeholder="תאריך לידה" onInput={(e)=>{userCtx.setChDateOfBirth(e.target.value); }}/>
  </div>
  <input type='checkbox' onChange={addchild}></input>
    </form>
    </div>)
  }
