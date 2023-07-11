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
    name: "ಲೆಕ್ಕ ಶೀರ್ಷಿಕೆ ಮತ್ತು ಹೆಸರು",
    selector: "ಲೆಕ್ಕ ಶೀರ್ಷಿಕೆ ಮತ್ತು ಹೆಸರು",
    sortable: true,
    wrap:true,
    width:"350px",
  },
  {
    name: "ಒಟ್ಟು ವೆಚ್ಚ",
    selector: "ಒಟ್ಟು ವೆಚ್ಚ",
    sortable: true,
    
  },
  {
    name: "ಕೊನೆಯ ತ್ರೈ-ಮಾಸಿಕದ ವೆಚ್ಚ",
    selector: "ಕೊನೆಯ ತ್ರೈ-ಮಾಸಿಕದ ವೆಚ್ಚ",
    sortable: true,
    wrap:true,
  },
  {
    name: "",
    selector: "2",
    sortable: true,
    wrap:true,
   
  },
  {
    name: "ಮಾರ್ಚ್‌ ತಿಂಗಳ ಅವಧಿಯಲ್ಲಿನ ವೆಚ್ಚ",
    selector: "ಮಾರ್ಚ್‌ ತಿಂಗಳ ಅವಧಿಯಲ್ಲಿನ ವೆಚ್ಚ",
    sortable: true,
    wrap:true,
   
  },
  {
    name: "",
    selector: "1",
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

const Tablec16k = () => {

  const ctx = useContext(MyContext)

  return (
    <div
      className="App"
      style={{ margin: "40px 0 40px 0" }} >
      <Card>
        <DataTable
          title="ಅನುಬಂಧ ೩.೧೬
          ಮಾರ್ಚ್‌ ತಿಂಗಳಲ್ಲಿ ವೆಚ್ಚದ ಒತ್ತಡ 
          (ಉಲ್ಲೇಖ: ಕಂಡಿಕೆ ೩.೭.೧.೭; ಪುಟ 10೩)
         "
          
          columns={columns}
          data={ctx.tables1.Tablec16k}
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

export default Tablec16k;
