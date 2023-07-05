import React, { useContext } from 'react';
import * as XLSX from 'xlsx';
import { userContext } from "./UserContext";

const ChildrenExcelDownload = () => {
  const userCtx = useContext(userContext);

  const handleDownload = () => {
    const childDetails = [];
    
    for (let index = 0; index < userCtx?.childrenArr?.length; index++) {
      const child = userCtx.childrenArr[index];
      const childData = [
        child.Name,
        child.Tz,
        child.ChDateOfBirth,
        child.IdParent
      ];
      childDetails.push(childData);
    }
  
    const worksheet = XLSX.utils.aoa_to_sheet(childDetails);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Children');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
  
    const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'children.xlsx';
    link.click();
  };

  return (
    <button onClick={handleDownload} style={{ textAlign:"center",display:"flex",justifyContent:"center"}}>
      הורדת קובץ אקסל
    </button>
  );
};

export default ChildrenExcelDownload;