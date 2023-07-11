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
    width:"90px",
  },
  {
    name: "ಇಲಾಖೆ",
    selector: "ಇಲಾಖೆ",
    sortable: true,
    wrap:true,
  },
  {
    name: "ಪ್ರಕರಣಗಳು",
    selector: "ಪ್ರಕರಣಗಳು",
    sortable: true,
    width:"90px",
  },
  {
    name: "ಒಟ್ಟು ಅವಕಾಶ",
    selector: "ಒಟ್ಟು ಅವಕಾಶ",
    sortable: true,
    width:"90px",
  },
  {
    name: "ಅಧ್ಯರ್ಪಣೆ ಮಾಡಿದ ಮೊತ್ತ",
    selector: "ಅಧ್ಯರ್ಪಣೆ ಮಾಡಿದ ಮೊತ್ತ",
    sortable: true,
    width:"90px",
  },
  {
    name: "ಒಟ್ಟು ಅವಕಾಶಗಳ ಶೇಕಡವಾರು",
    selector: "ಒಟ್ಟು ಅವಕಾಶಗಳ ಶೇಕಡವಾರು",
    sortable: true,
    width:"90px",
  },
  

];

// const conditionalRowStyles = [
//    {
//     when: row => row["Year"] === "India's GDP* (` in crore)",
//     format: row => row["Year"].toLocaleString('en-IN',{ style: 'currency', currency: 'INR' })
// }
// ];

const customStyles = styles

const Tablec13k = () => {

  const ctx = useContext(MyContext)

  return (
    <div
      className="App"
      style={{ margin: "40px 0 40px 0" }} >
      <Card>
        <DataTable
          title="ಅನುಬಂಧ 3.13
          30 ಮತ್ತು 31 ಮಾರ್ಚ್‌ 2022ರಂದು ಅಧ್ಯರ್ಪಣೆ ಮಾಡಲಾದ ` ಐದು ಕೋಟಿಗೂ ಮೀರಿದ ಅವಕಾಶಗಳು
          (ಉಲ್ಲೇಖ : ಕಂಡಿಕೆ 3.6.2.5(ಬಿ); ಪುಟ: 96)
          "
          
          columns={columns}
          data={ctx.tables1.Tablec13k}
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

export default Tablec13k;
