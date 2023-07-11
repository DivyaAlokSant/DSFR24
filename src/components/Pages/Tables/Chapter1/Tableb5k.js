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
    sortable: true,
    width:"100px",
    
  },
  {
    name: "ಲೆಕ್ಕ ಶೀರ್ಷಿಕೆ/ ಸಂಸ್ಥೆಗಳು",
    selector: "ಲೆಕ್ಕ ಶೀರ್ಷಿಕೆ/ ಸಂಸ್ಥೆಗಳು",
    sortable: true,
    wrap:true,
  },
  {
    name: "31 ಮಾರ್ಚಿ 2022ರಲ್ಲಿದ್ದಂತೆ ಬಾಕಿಗಳು",
    selector: "31 ಮಾರ್ಚಿ 2022ರಲ್ಲಿದ್ದಂತೆ ಬಾಕಿಗಳು",
    sortable: true,
    wrap:true,
    width:"150px", 
    
  },
  {
    name: "",
    selector: "1",
    sortable: true,
    width:"100px",
  },
];

// const conditionalRowStyles = [
//    {
//     when: row => row["Year"] === "India's GDP* (` in crore)",
//     format: row => row["Year"].toLocaleString('en-IN',{ style: 'currency', currency: 'INR' })
// }
// ];

const customStyles = styles

const Tableb5k = () => {

  const ctx = useContext(MyContext)

  return (
    <div
      className="App"
      style={{ margin: "40px 0 40px 0" }} >
      <Card>
        <DataTable
          title="ಅನುಬಂಧ 2.5
          ಮಹಾಲೇಖಾಪಾಲರ (ಲೆಕ್ಕ ಪರಿಶೋಧನೆ) ಕಛೇರಿಯಲ್ಲಿ ನಿರ್ವಹಿಸಲ್ಪಟ್ಟಿರುವ ಸವಿವರ ಸಾಲ ಲೆಕ್ಕಗಳು
           (ಉಲ್ಲೇಖ: ಕಂಡಿಕೆ 2.5.4.2;  ಪುಟ 54)
          "
          
          columns={columns}
          data={ctx.tables1.Tableb5k}
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

export default Tableb5k;
