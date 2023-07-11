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
    name: "ಅನುದಾನ ಸಂಖ್ಯೆ",
    selector: "ಅನುದಾನ ಸಂಖ್ಯೆ",
    sortable: true,
    wrap:true,
    
  },
  {
    name: "ಲೆಕ್ಕ ಶೀರ್ಷಿಕೆ",
    selector: "ಲೆಕ್ಕ ಶೀರ್ಷಿಕೆ",
    sortable: true,
    
  },
  {
    name: "ಅವಕಾಶ (ಮೂಲ+ಪೂರಕ)",
    selector: "ಅವಕಾಶ (ಮೂಲ+ಪೂರಕ)",
    sortable: true,
  
  },
  {
    name: "ಪೂರಕ ಅಂದಾಜು (>₹3 ಕೋಟಿ)",
    selector: "ಪೂರಕ ಅಂದಾಜು (>₹3 ಕೋಟಿ)",
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
    
  },
  {
    name: "ಬಳಕೆಯಾಗದ ಅವಕಾಶ (>₹3 ಕೋಟಿ)",
    selector: "ಬಳಕೆಯಾಗದ ಅವಕಾಶ (>₹3 ಕೋಟಿ)",
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

// const conditionalRowStyles = [
//    {
//     when: row => row["ಕ್ರಮ ಸಂಖ್ಯೆ"] === "ಒಟ್ಟು",
//     format: row => row["Year"].toLocaleString('en-IN',{ style: 'currency', currency: 'INR' })
// }
// ];

const customStyles = styles

const Tablec6k = () => {

  const ctx = useContext(MyContext)

  return (
    <div
      className="App"
      style={{ margin: "40px 0 40px 0" }} >
      <Card>
        <DataTable
          title="ಅನುಬಂಧ 3.6
          ಅನಗತ್ಯ ಪುನರ್ವಿನಿಯೋಗಗಳು
          (ಉಲ್ಲೇಖ : ಕಂಡಿಕೆ 3.6.2.4(ಎ) ; ಪುಟ: 94)
          "
          
          columns={columns}
          data={ctx.tables1.Tablec6k}
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

export default Tablec6k;
