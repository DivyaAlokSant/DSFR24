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
    name: "ಅನುದಾನ",
    selector: "ಅನುದಾನ",
    sortable: true,
    wrap:true,
    width:"200px",
  },
  {
    name: "ಆಯವ್ಯಯ ಮೂಲ",
    selector: "ಆಯವ್ಯಯ ಮೂಲ",
    sortable: true,
    
  },
  {
    name: "ಪೂರಕ",
    selector: "ಪೂರಕ",
    sortable: true,
   },
  {
    name: "ಒಟ್ಟು",
    selector: "ಒಟ್ಟು",
    sortable: true,
    
  },
  {
    name: "ವೆಚ್ಚ",
    selector: "ವೆಚ್ಚ",
    sortable: true,
    wrap:true,
    width:"300px",
    
  },
  {
    name: "ಉಳಿತಾಯ",
    selector: "ಉಳಿತಾಯ",
    sortable: true,
    
  },
 
];

const conditionalRowStyles = [
  {
    when: row => row["ಕ್ರಮ ಸಂಖ್ಯೆ"] === "ಒಟ್ಟು",
      style: {
          backgroundColor: 'rgba(153, 165, 128, 0.9)',
      },
  }
]
const customStyles = styles

const Tablec8k = () => {

  const ctx = useContext(MyContext)

  return (
    <div
      className="App"
      style={{ margin: "40px 0 40px 0" }} >
      <Card>
        <DataTable
          title="ಅನುಬಂಧ -೩.೮
          `100 ಕೋಟಿ ಹಾಗೂ ಅದಕ್ಕಿಂತ ಹೆಚ್ಚಾದ ಬಳಕೆಯಾಗದೇ ಉಳಿದ ಅವಕಾಶಗಳ ಅನುದಾನ/ವಿನಿಯೋಗಗಳು
           (ಉಲ್ಲೇಖ: ಕಂಡಿಕೆ ೩.೬.೨.೫(ಎ): ಪುಟ 95)
          "
          
          columns={columns}
          data={ctx.tables1.Tablec8k}
          defaultSortField="title"
          sortIcon={<SortIcon />}
          customStyles={customStyles}
          striped
          conditionalRowStyles={conditionalRowStyles}
          highlightOnHover
          pointerOnHover
        />
      </Card>
    </div>
  );
}

export default Tablec8k;
