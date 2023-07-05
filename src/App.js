
import React from "react";
import Form from "./components/PForm"
import Explainations from './components/Explainations'
import EnterPage from "./components/EnterPage";
import PForm from "./components/PForm";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ChildForm from "./components/ChildForm";
import UserCtx from './components/UserContext'
import UserContext from "./components/UserContext";
import { CSSProperties } from "react";
import ChildrenExcelDownload from "./components/ChildrenExcelDownload ";


function App() {
  
 
  return (
    <div className="App">    
  <BrowserRouter>
    <div style={{textAlign:"center",padding:"2%"}}><Link className="btn btn-primary btn-lg active" to='./Explainations'  >הנחיות</Link></div>
    <div style={{textAlign:"center"}}><Link className="btn btn-primary btn-lg active" to='./PForm'>מילוי הטופס</Link></div>
    <Routes>
      <Route path="/Exel" element={<UserContext><ChildrenExcelDownload></ChildrenExcelDownload></UserContext>}></Route>
      <Route path="/Explainations" element={<UserContext><EnterPage></EnterPage></UserContext>}></Route>
      <Route path="/Pform" element={<UserContext><PForm/></UserContext>}></Route>
      {/* <Route path="/ChildForm" element={<ChildForm></ChildForm>}> </Route>  */}
    </Routes>
    </BrowserRouter> 
    </div>
  );
}

export default App;
