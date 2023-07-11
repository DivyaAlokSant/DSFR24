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
    width:"100px",
    
    
  },
  {
    name: "ಅನುದಾನ ಸಂಖ್ಯೆ/ಇಲಾಖೆ",
    selector: "ಅನುದಾನ ಸಂಖ್ಯೆ/ಇಲಾಖೆ",
    sortable: true,
    wrap:true,
    
  },
  {
    name: "ಪ್ರಕರಣಗಳ ಸಂಖ್ಯೆ",
    selector: "ಪ್ರಕರಣಗಳ ಸಂಖ್ಯೆ",
    sortable: true,
    width:"100px",
  },
  {
    name: "ಮೊತ್ತ",
    selector: "ಮೊತ್ತ",
    sortable: true,
    width:"100px",
  },
  
];

// const conditionalRowStyles = [
//    {
//     when: row => row["Year"] === "India's GDP* (` in crore)",
//     format: row => row["Year"].toLocaleString('en-IN',{ style: 'currency', currency: 'INR' })
// }
// ];

const customStyles = styles

const Tablec2k = () => {

  const ctx = useContext(MyContext)

  return (
    <div
      className="App"
      style={{ margin: "40px 0 40px 0" }} >
      <Card>
        <DataTable
          title="ಅನುಬಂಧ 3.2
          ಆಯವ್ಯಯದಲ್ಲಿ ಅವಕಾಶ ಕಲ್ಪಿಸದೆ ಕಾರ್ಯಕಾರಿ ಆದೇಶಗಳ ಮುಖಾಂತರ ಆರ್ಥಿಕ ಇಲಾಖೆಯಿಂದ ಬಿಡುಗಡೆ ಮಾಡಲಾದ ಹೆಚ್ಚುವರಿ ಅವಕಾಶಗಳು
           (ಉಲ್ಲೇಖ: ಕಂಡಿಕೆ :3.6.2.1; ಪುಟ: 90)
          "
          
          columns={columns}
          data={ctx.tables1.Tablec2k}
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

export default Tablec2k;
