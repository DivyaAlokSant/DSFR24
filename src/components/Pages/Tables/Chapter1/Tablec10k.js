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
    name: "ಅನುದಾನ ಸಂಖ್ಯೆ",
    selector: "ಅನುದಾನ ಸಂಖ್ಯೆ",
    sortable: true,
    wrap:true,
    width:"100px",
  },
  {
    name: "ಇಲಾಖೆ/ವರ್ಗ",
    selector: "ಇಲಾಖೆ/ವರ್ಗ",
    sortable: true,
    
  },
  {
    name: "ಬಳಕೆಯಾಗದ ಅವಕಾಶಗಳು",
    selector: "ಬಳಕೆಯಾಗದ ಅವಕಾಶಗಳು",
    sortable: true,
    width:"150px",
  } 

];

// const conditionalRowStyles = [
//    {
//     when: row => row["Year"] === "India's GDP* (` in crore)",
//     format: row => row["Year"].toLocaleString('en-IN',{ style: 'currency', currency: 'INR' })
// }
// ];

const customStyles = styles

const Tablec10k = () => {

  const ctx = useContext(MyContext)

  return (
    <div
      className="App"
      style={{ margin: "40px 0 40px 0" }} >
      <Card>
        <DataTable
          title="ಅನುಬಂಧ 3.10
          ಬಳಕೆಯಾಗದೇ ಉಳಿದ ಸಂಪೂರ್ಣ ಅವಕಾಶಗಳ ಅಧ್ಯರ್ಪಣೆ
          (ಉಲ್ಲೇಖ: ಕಂಡಿಕೆ 3.6.2.5(ಬಿ); ಪುಟ: 96) 
          "
          
          columns={columns}
          data={ctx.tables1.Tablec10k}
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

export default Tablec10k;
