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
    name: "ಅನುದಾನ ಸಂಖ್ಯೆ/ ಇಲಾಖೆ",
    selector: "ಅನುದಾನ ಸಂಖ್ಯೆ/ ಇಲಾಖೆ",
    sortable: true,
    width:"250px",
    wrap:true,
    
  },
  {
    name: "ಲೆಕ್ಕ ಶೀರ್ಷಿಕೆ",
    selector: "ಲೆಕ್ಕ ಶೀರ್ಷಿಕೆ",
    sortable: true,
    
  },
  {
    name: "ಮೂಲ ಅಂದಾಜು",
    selector: "ಮೂಲ ಅಂದಾಜು",
    sortable: true,

  },
  {
    name: "ಪೂರಕ ಅಂದಾಜು",
    selector: "ಪೂರಕ ಅಂದಾಜು",
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
    name: "ಬಳಕೆಯಾಗದ ಅವಕಾಶ",
    selector: "ಬಳಕೆಯಾಗದ ಅವಕಾಶ",
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

const Tablec3k = () => {

  const ctx = useContext(MyContext)

  return (
    <div
      className="App"
      style={{ margin: "40px 0 40px 0" }} >
      <Card>
        <DataTable
          title="ಅನುಬಂಧ 3.3
          ಅನಗತ್ಯ ಪೂರಕ ಅಂದಾಜುಗಳು
          (ಉಲ್ಲೇಖ: ಕಂಡಿಕೆ :3.6.2.3 ; ಪು: 92)
          "
          
          columns={columns}
          data={ctx.tables1.Tablec3k}
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

export default Tablec3k;
