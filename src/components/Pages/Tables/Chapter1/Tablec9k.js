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
    name: "ಅನುದಾನ ಸಂಖ್ಯೆ/ ಇಲಾಖೆ",
    selector: "ಅನುದಾನ ಸಂಖ್ಯೆ/ ಇಲಾಖೆ",
    sortable: true,
    wrap:true,
    width:"200px",
  },
  {
    name: "ಮೂಲ ಅವಕಾಶ",
    selector: "ಮೂಲ ಅವಕಾಶ",
    sortable: true,
    
  },
  {
    name: "ಪೂರಕ ಅವಕಾಶ",
    selector: "ಪೂರಕ ಅವಕಾಶ",
    sortable: true,
   
  },
  {
    name: "ಒಟ್ಟು",
    selector: "ಒಟ್ಟು",
    sortable: true,
   
  },{
    name: "ವೆಚ್ಚ",
    selector: "ವೆಚ್ಚ",
    sortable: true,
   
  },{
    name: "ಉಳಿತಾಯ",
    selector: "ಉಳಿತಾಯ",
    sortable: true,
   
  }
  


];

// const conditionalRowStyles = [
//    {
//     when: row => row["Year"] === "India's GDP* (` in crore)",
//     format: row => row["Year"].toLocaleString('en-IN',{ style: 'currency', currency: 'INR' })
// }
// ];

const customStyles = styles

const Tablec9k = () => {

  const ctx = useContext(MyContext)

  return (
    <div
      className="App"
      style={{ margin: "40px 0 40px 0" }} >
      <Card>
        <DataTable
          title="ಅನುಬಂಧ 3.9
          ಅವಕಾಶಗಳು ಬಳಕೆಯಾಗದೆ ಉಳಿದು ಅದರ ಯಾವುದೇ ಭಾಗವನ್ನು ಅಧ್ಯರ್ಪಣೆ ಮಾಡದಿರುವ ವಿವಿಧ ಅನುದಾನ/ವಿನಿಯೋಗಗಳು
          (ಉಲ್ಲೇಖ: ಕಂಡಿಕೆ 3.6.2.5 (ಬಿ); ಪುಟ: 95)
          "
          
          columns={columns}
          data={ctx.tables1.Tablec9k}
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

export default Tablec9k;
