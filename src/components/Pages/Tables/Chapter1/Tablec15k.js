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
    name: "ನಿರ್ದಿಷ್ಟ ಮಾಹಿತಿ ಒದಗಿಸದ ಉಳಿತಾಯ ಮೊತ್ತ",
    selector: "ನಿರ್ದಿಷ್ಟ ಮಾಹಿತಿ ಒದಗಿಸದ ಉಳಿತಾಯ ಮೊತ್ತ",
    sortable: true,
    width:"150px",
  },
 
 

];

// const conditionalRowStyles = [
//    {
//     when: row => row["Year"] === "India's GDP* (` in crore)",
//     format: row => row["Year"].toLocaleString('en-IN',{ style: 'currency', currency: 'INR' })
// }
// ];

const customStyles = styles

const Tablec15k = () => {

  const ctx = useContext(MyContext)

  return (
    <div
      className="App"
      style={{ margin: "40px 0 40px 0" }} >
      <Card>
        <DataTable
          title="ಅನುಬಂಧ 3.15
          ಉಳಿತಾಯದ ಮೊತ್ತಗಳಿಗೆ ನಿರ್ದಿಷ್ಟ ಮಾಹಿತಿ ಒದಗಿಸದ ಅನುದಾನಗಳ ವಿವರಗಳು
          (ಉಲ್ಲೇಖ: ಕಂಡಿಕೆ 3.6.3.1; ಪುಟ: 97)
          "
          
          columns={columns}
          data={ctx.tables1.Tablec15k}
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

export default Tablec15k;
