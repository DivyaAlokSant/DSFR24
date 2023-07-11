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
    width:"100px",
    wrap:true,
    
  },
  {
    name: "ಲೆಕ್ಕ ಶೀರ್ಷಿಕೆ",
    selector: "ಲೆಕ್ಕ ಶೀರ್ಷಿಕೆ",
    sortable: true,
    wrap:true,
    width:"180px",
  
  },
  {
    name: "ಮೂಲ ಅಂದಾಜು",
    selector: "ಮೂಲ ಅಂದಾಜು",
    sortable: true,
   
    },
  {
    name: "ಪೂರಕ ಅಂದಾಜು (>5 ಕೋಟಿ)",
    selector: "ಪೂರಕ ಅಂದಾಜು (>5 ಕೋಟಿ)",
    sortable: true,
    
  },
  {
    name: "ಒಟ್ಟು ಅವಕಾಶ",
    selector: "ಒಟ್ಟು ಅವಕಾಶ",
    sortable: true,
    
  },
  {
    name: "ಖರ್ಚು",
    selector: "ಖರ್ಚು",
    sortable: true,
    
  },
  {
    name: "ಬಳಕೆಯಾಗದ ಅವಕಾಶ (>5 ಕೋಟಿ)",
    selector: "ಬಳಕೆಯಾಗದ ಅವಕಾಶ (>5 ಕೋಟಿ)",
    sortable: true,
    
  },
  
];

// const conditionalRowStyles = [
//    {
//     when: row => row["Year"] === "India's GDP* (` in crore)",
//     format: row => row["Year"].toLocaleString('en-IN',{ style: 'currency', currency: 'INR' })
// }
// ];

const customStyles = styles

const Tablec4k = () => {

  const ctx = useContext(MyContext)

  return (
    <div
      className="App"
      style={{ margin: "40px 0 40px 0" }} >
      <Card>
        <DataTable
          title="ಅನುಬಂಧ 3.4
          ಅಧಿಕವಾದ ಪೂರಕ ಅಂದಾಜುಗಳು
          (ಉಲ್ಲೇಖ: ಕಂಡಿಕೆ :3.6.2.3 ; ಪುಟ: 92)
          "
          
          columns={columns}
          data={ctx.tables1.Tablec4k}
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

export default Tablec4k;
