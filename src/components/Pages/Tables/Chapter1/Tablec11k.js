import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import SortIcon from "@material-ui/icons/ArrowDownward";
import "./Tables.css";

import { MyContext } from "../../../../Context/MyProvider";
import { styles } from "../helpers";
// import { Tooltip } from "@material-ui/core";


const columns = [

 
  
    {
      name: "ಕ್ರಮ ಸಂಖ್ಯೆ",
      selector: "ಕ್ರಮ ಸಂಖ್ಯೆ",
      width:"90px",  
      
    },
  {
    name: "ಅನುದಾನ ಇಲಾಖೆ",
    selector: "ಅನುದಾನ ಸಂಖ್ಯೆ/ಇಲಾಖೆ",
    sortable: true,
    wrap:true,
    width:"100px",
  },
  {
    name: "ಅನುದಾನ/ಇಲಾಖೆ",
    selector: "1",
    sortable: true,
    wrap:true,
    width:"200px",
  },
  {
    name: "ಬಳಕೆಯಾಗದ ಅನುದಾನ",
    selector: "ಬಳಕೆಯಾಗದ ಅನುದಾನ",
    sortable: true,
    
  },
  {
    name: "ಅಧ್ಯರ್ಪಣೆ",
    selector: "ಅಧ್ಯರ್ಪಣೆ",
    sortable: true,
   
  },
  {
    name: "ಅಧ್ಯರ್ಪಣೆ ಮಾಡದ ಮೊತ್ತ",
    selector: "ಅಧ್ಯರ್ಪಣೆ ಮಾಡದ ಮೊತ್ತ",
    sortable: true,
    
  },
  

];

// const conditionalRowStyles = [
//    {
//     when: row => row["Year"] === "India's GDP* (` in crore)",
//     format: row => row["Year"].toLocaleString('en-IN',{ style: 'currency', currency: 'INR' })
// }
// ];

const customStyles = styles

const Tablec11k = () => {

  const ctx = useContext(MyContext)

  return (
    <div
      className="App"
      style={{ margin: "40px 0 40px 0" }} >
      <Card>
        <DataTable
          title="ಅನುಬಂಧ 3.11
          ಬಳಕೆಯಾಗದೇ ಉಳಿದ ಅವಕಾಶಗಳ ಅಧ್ಯರ್ಪಣೆ
          (ಉಲ್ಲೇಖ: ಕಂಡಿಕೆ 3.6.2.5(ಬಿ); ಪುಟ: 96) 
          "
          
          columns={columns}
          data={ctx.tables1.Tablec11k}
          defaultSortField="title"
          sortIcon={<SortIcon />}
          customStyles={customStyles}
          striped
          // conditionalRowStyles={conditionalRowStyles}
          highlightOnHover
          pointerOnHover
        />
      </Card>
    </div>
  );
}

export default Tablec11k;
