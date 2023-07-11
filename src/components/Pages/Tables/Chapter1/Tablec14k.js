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
    name: "ವರ್ಷ",
    selector: "ವರ್ಷ",
    width:"100px",
    
  },
  {
    name: "ಅನುದಾನಗಳ ಸಂಖ್ಯೆ/ವಿವರ",
    selector: "ಅನುದಾನಗಳ ಸಂಖ್ಯೆ/ವಿವರ",
    sortable: true,
    wrap:true,
    width:"250px",
  },
  {
    name: "ಮೊತ್ತ",
    selector: "ಮೊತ್ತ",
    sortable: true,
    width:"200px",
  },
  {
    name: "ಷರಾ",
    selector: "ಷರಾ",
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

const Tablec14k = () => {

  const ctx = useContext(MyContext)

  return (
    <div
      className="App"
      style={{ margin: "40px 0 40px 0" }} >
      <Card>
        <DataTable
          title="ಅನುಬಂಧ 3.14
          ಸಕ್ರಮಗೊಳಿಸಬೇಕಾಗಿರುವ ಹೆಚ್ಚಾದ ವೆಚ್ಚಗಳು
           (ಉಲ್ಲೇಖ : ಕಂಡಿಕೆ 3.6.2.6; ಪುಟ: 96)
          "
          
          columns={columns}
          data={ctx.tables1.Tablec14k}
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

export default Tablec14k;
