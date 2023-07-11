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
    width:"50px",  
    
  },
  {
    name: "ಅನುದಾನ ಸಂಖ್ಯೆ",
    selector: "ಅನುದಾನ ಸಂಖ್ಯೆ",
    sortable: true,
    wrap:true,
    width:"80px",
  },
  {
    name: "ಸರ್ಕಾರಿ ಆದೇಶ ಸಂಖ್ಯೆ",
    selector: "ಸರ್ಕಾರಿ ಆದೇಶ ಸಂಖ್ಯೆ",
    sortable: true,
    wrap:true,
    width:"100px",
  },
  {
    name: "ದಿನಾಂಕ",
    selector: "ದಿನಾಂಕ",
    sortable: true,
    width:"100px",
  },
  {
    name: "ಮೊತ್ತ",
    selector: "ಮೊತ್ತ",
    sortable: true,
    width:"60px",
    wrap: true,
  },
  {
    name: "ಜಾರಿ ಮಾಡಿದ ಅಧಿಕಾರಿ",
    selector: "ಜಾರಿ ಮಾಡಿದ ಅಧಿಕಾರಿ",
    sortable: true,
    wrap:true,
   
    
  },
  {
    name: "ತಿರಸ್ಕರಣೆಗೆ ಕಾರಣ",
    selector: "ತಿರಸ್ಕರಣೆಗೆ ಕಾರಣ",
    sortable: true,
    wrap:true,
  },
 
  
];

// const conditionalRowStyles = [
//    {
//     when: row => row["Year"] === "India's GDP* (` in crore)",
//     format: row => row["Year"].toLocaleString('en-IN',{ style: 'currency', currency: 'INR' })
// }
// ];

const customStyles = styles

const Tablec7k = () => {

  const ctx = useContext(MyContext)

  return (
    <div
      className="App"
      style={{ margin: "40px 0 40px 0" }} >
      <Card>
        <DataTable
          title="ಅನುಬಂಧ ೩.೭
          ದೋಷಪೂರಿತ ಪುನರ್ವಿನಿಯೋಗ ಆದೇಶಗಳು 
          (ಉಲ್ಲೇಖ: ಕಂಡಿಕೆ ೩.೬.೨.೪(ಬಿ); ಪುಟ 95)
          "
          
          columns={columns}
          data={ctx.tables1.Tablec7k}
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

export default Tablec7k;
